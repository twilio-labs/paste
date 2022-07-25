// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import pasteTokens, {pasteTokenAttributes} from './tokens';
import {PasteToken} from './models/paste-token';

export function findPasteToken(word?: string): PasteToken | null {
  if (!word) {
    return null;
  }
  for (const pasteToken of Object.values(pasteTokens)) {
    if (pasteToken[word]) {
      return pasteToken[word];
    }
  }
  return null;
}

export function getAttributeName(linePrefix: string) {
  let attributeName = '';
  for (let endIdx = linePrefix.length - 2; endIdx >= 0; endIdx -= 1) {
    if (linePrefix[endIdx] === ' ') {
      break;
    }
    if (linePrefix[endIdx] === '=') {
      continue;
    }
    attributeName = linePrefix[endIdx] + attributeName;
  }

  return attributeName;
}

export function isColor(pasteToken: keyof typeof pasteTokens) {
  if (
    pasteToken === 'backgroundColors' ||
    pasteToken === 'borderColors' ||
    pasteToken === 'colors' ||
    pasteToken === 'textColors'
  ) {
    return true;
  }
  return false;
}

export function getCompletionItem(pasteTokenName: keyof typeof pasteTokens, pasteTokenEntry: [string, PasteToken]) {
  const [key, pasteToken] = pasteTokenEntry;
  if (isColor(pasteTokenName)) {
    return {
      label: key,
      documentation: pasteToken.value,
      kind: vscode.CompletionItemKind.Color,
      detail: pasteToken.value,
    };
  }

  const completionItemLabel = {
    label: key,
    description: pasteToken.value,
  };
  return new vscode.CompletionItem(completionItemLabel, vscode.CompletionItemKind.Constant);
}

export function getAttributeTokens(attributeName: string) {
  const items: vscode.CompletionItem[] = [];
  const pasteTokenName = pasteTokenAttributes[attributeName];
  if (pasteTokens[pasteTokenName]) {
    for (const pasteTokenEntry of Object.entries(pasteTokens[pasteTokenName])) {
      const completionItem = getCompletionItem(pasteTokenName, pasteTokenEntry);

      items.push(completionItem);
    }
    return items;
  }

  return items;
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vs-code-intellisense" is now active!');

  const hoverProvider = vscode.languages.registerHoverProvider(
    ['javascript', 'typescript', 'javascriptreact', 'typescriptreact'],
    {
      provideHover(document, position) {
        const word = document.getText(document.getWordRangeAtPosition(position));
        const foundPasteToken = findPasteToken(word);
        if (foundPasteToken) {
          const hoverMessage = new vscode.MarkdownString();

          hoverMessage.appendMarkdown(`${foundPasteToken.label}: \`${foundPasteToken.value}\`\n`);
          hoverMessage.appendMarkdown(`___\n`);
          if (foundPasteToken.description) {
            hoverMessage.appendMarkdown(`${foundPasteToken.description}\n`);
          }
          hoverMessage.isTrusted = true;

          return new vscode.Hover(hoverMessage);
        }
        return null;
      },
    }
  );

  const completionProvider = vscode.languages.registerCompletionItemProvider(
    ['javascript', 'typescript', 'javascriptreact', 'typescriptreact'],
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);

        const attributeName = getAttributeName(linePrefix);

        const items = getAttributeTokens(attributeName);

        return {isIncomplete: false, items};
      },
    },
    '"' // triggered when we type '"'
  );

  context.subscriptions.push(hoverProvider);
  context.subscriptions.push(completionProvider);
}

// this method is called when your extension is deactivated
export function deactivate() {}
