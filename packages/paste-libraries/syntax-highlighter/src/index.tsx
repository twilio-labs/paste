"use client";
/*
 * https://github.com/react-syntax-highlighter/react-syntax-highlighter#light-build
 * We are using the light build for a smaller bundle size. This means we need to import and
 * register our own languages for Prism to use.
 */
/* eslint-disable import/no-extraneous-dependencies */
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";
import go from "react-syntax-highlighter/dist/esm/languages/prism/go";
import groovy from "react-syntax-highlighter/dist/esm/languages/prism/groovy";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import php from "react-syntax-highlighter/dist/esm/languages/prism/php";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import ruby from "react-syntax-highlighter/dist/esm/languages/prism/ruby";
import shell from "react-syntax-highlighter/dist/esm/languages/prism/shell-session";
import SyntaxHighlighterTheme from "react-syntax-highlighter/dist/esm/styles/prism/night-owl";
/* eslint-enable import/no-extraneous-dependencies */

export type SnippetLanguages =
  | "javascript"
  | "jsx"
  | "csharp"
  | "php"
  | "ruby"
  | "python"
  | "java"
  | "json"
  | "c"
  | "bash"
  | "shell"
  | "go"
  | "groovy";

const SnippetLanguage = {
  JAVASCRIPT: "javascript",
  JSX: "jsx",
  CSHARP: "csharp",
  PHP: "php",
  RUBY: "ruby",
  PYTHON: "python",
  JAVA: "java",
  JSON: "json",
  C: "c",
  BASH: "bash",
  SHELL: "shell",
  GO: "go",
  GROOVY: "groovy",
};

SyntaxHighlighter.registerLanguage(SnippetLanguage.JAVASCRIPT, javascript);
SyntaxHighlighter.registerLanguage(SnippetLanguage.JSX, jsx);
SyntaxHighlighter.registerLanguage(SnippetLanguage.CSHARP, csharp);
SyntaxHighlighter.registerLanguage(SnippetLanguage.PHP, php);
SyntaxHighlighter.registerLanguage(SnippetLanguage.RUBY, ruby);
SyntaxHighlighter.registerLanguage(SnippetLanguage.PYTHON, python);
SyntaxHighlighter.registerLanguage(SnippetLanguage.JAVA, java);
SyntaxHighlighter.registerLanguage(SnippetLanguage.JSON, json);
SyntaxHighlighter.registerLanguage(SnippetLanguage.C, c);
SyntaxHighlighter.registerLanguage(SnippetLanguage.BASH, bash);
SyntaxHighlighter.registerLanguage(SnippetLanguage.SHELL, shell);
SyntaxHighlighter.registerLanguage(SnippetLanguage.GO, go);
SyntaxHighlighter.registerLanguage(SnippetLanguage.GROOVY, groovy);

// eslint-disable-next-line unicorn/prefer-export-from
export { SyntaxHighlighter, SyntaxHighlighterTheme, SnippetLanguage };
