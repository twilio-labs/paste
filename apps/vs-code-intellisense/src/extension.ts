import camelCase from "lodash.camelcase";
import kebabCase from "lodash.kebabcase";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import { pasteTokenAttributes } from "./tokens";
import { PasteToken } from "./types";
import { getColorPreview, getThemeSetting, getThemeTokens, isColorCategory, remToPx } from "./utils";

const DIVIDER = "___\n";

export function findPasteToken(word?: string): PasteToken | undefined {
  if (!word) {
    return undefined;
  }

  const theme = getThemeSetting();
  const tokens = getThemeTokens(theme);

  return tokens[kebabCase(word)];
}

export function getAttributeName(linePrefix: string) {
  let attributeName = "";
  for (let endIdx = linePrefix.length - 2; endIdx >= 0; endIdx -= 1) {
    if (linePrefix[endIdx] === " ") {
      break;
    }
    if (linePrefix[endIdx] === "=") {
      continue;
    }
    attributeName = linePrefix[endIdx] + attributeName;
  }

  return attributeName;
}

export function getCompletionItem(token: PasteToken) {
  const { name, value, type } = token;
  const label = camelCase(name);
  if (type === "color") {
    return {
      label,
      documentation: value,
      kind: vscode.CompletionItemKind.Color,
      detail: value,
    };
  }

  const completionItemLabel = {
    label,
    description: value,
  };
  return new vscode.CompletionItem(completionItemLabel, vscode.CompletionItemKind.Constant);
}

export function getAttributeTokens(attributeName: string) {
  const tokenCategory = pasteTokenAttributes[attributeName];
  const theme = getThemeSetting();
  const tokens = getThemeTokens(theme);

  const tokensByCategory = Object.values(tokens).filter((token) => token.category === tokenCategory);

  return tokensByCategory.map(getCompletionItem);
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vs-code-intellisense" is now active!');

  const hoverProvider = vscode.languages.registerHoverProvider(
    ["javascript", "typescript", "javascriptreact", "typescriptreact"],
    {
      provideHover(document, position) {
        const word = document.getText(document.getWordRangeAtPosition(position));
        const foundPasteToken = findPasteToken(word);
        if (!foundPasteToken) {
          return null;
        }

        const hoverMessage = new vscode.MarkdownString();

        const { name, value, comment, category } = foundPasteToken;

        // Run any formatters/converters on value before appending
        const formattedValue = remToPx(value);

        hoverMessage.appendMarkdown(`${name}: \`${formattedValue}\`\n`).appendMarkdown(DIVIDER);

        if (comment) {
          hoverMessage.appendMarkdown(`${comment}\n`);
        }

        if (isColorCategory(category)) {
          const preview = getColorPreview(value);
          hoverMessage.appendMarkdown(DIVIDER).appendMarkdown(preview);
        }

        hoverMessage.isTrusted = true;

        return new vscode.Hover(hoverMessage);
      },
    },
  );

  const completionProvider = vscode.languages.registerCompletionItemProvider(
    ["javascript", "typescript", "javascriptreact", "typescriptreact"],
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);

        const attributeName = getAttributeName(linePrefix);

        const items = getAttributeTokens(attributeName);

        return { isIncomplete: false, items };
      },
    },
    '"', // triggered when we type '"'
  );

  context.subscriptions.push(hoverProvider);
  context.subscriptions.push(completionProvider);
}

// this method is called when your extension is deactivated
export function deactivate() {}
