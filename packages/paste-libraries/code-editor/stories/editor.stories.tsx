import * as React from 'react';

import { CodeEditor, CodeEditorPasteTheme, type Editor, type Monaco } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Libraries/code-editor/Editor',
};

const JavascriptExample = `// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}`;

const TypescriptExample = `interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);`;

const CExample = `#include <stdio.h>
int main() {
    int n, i, sum = 0;

    printf("Enter a positive integer: ");
    scanf("%d", &n);

    for (i = 1; i <= n; ++i) {
        sum += i;
    }

    printf("Sum = %d", sum);
    return 0;
}`;

export const JavascriptEditor = (): React.ReactNode => {
  return <CodeEditor height="90vh" defaultLanguage="javascript" defaultValue={JavascriptExample} />;
};

export const TypescriptEditor = (): React.ReactNode => {
  return <CodeEditor theme="vs-dark" height="90vh" defaultLanguage="typescript" defaultValue={TypescriptExample} />;
};

export const CEditor = (): React.ReactNode => {
  return <CodeEditor theme="vs-light" height="90vh" defaultLanguage="c" defaultValue={CExample} />;
};

const handleEditorDidMount = (editor: Editor.IStandaloneCodeEditor, monaco: Monaco): void => {
  // you can also store it in `useRef` for further usage
  monaco.editor.defineTheme('paste', CodeEditorPasteTheme);
  monaco.editor.setTheme('paste');
};

export const PasteThemeEditor = (): React.ReactNode => {
  return (
    <CodeEditor
      onMount={handleEditorDidMount}
      options={{
        scrollBeyondLastLine: false,
        readOnly: false,
        wordWrap: 'wordWrapColumn',
        wordWrapColumn: 120,
        scrollbar: {
          verticalScrollbarSize: 8,
          horizontalScrollbarSize: 8,
        },
      }}
      height="70vh"
      defaultLanguage="typescript"
      defaultValue={TypescriptExample}
    />
  );
};
