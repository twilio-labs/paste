import * as React from 'react';

import {CodeEditorDiff, CodeEditorPasteTheme, type Editor, type Monaco} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Libraries/code-editor/DiffEditor',
};

const setTheme = (monaco: Monaco): void => {
  // you can also store it in `useRef` for further usage
  monaco.editor.defineTheme('paste', CodeEditorPasteTheme);
  monaco.editor.setTheme('paste');
};

const originalText = `This line is removed on the right.\njust some text\nabcd\nefgh\nSome more text`;

const modifiedText = `just some text\nabcz\nzzzzefgh\nSome more text\nThis line is removed on the left.`;

export const TextDiffExample = (): React.ReactNode => {
  const diffEditorRef = React.useRef<Editor.IStandaloneDiffEditor | undefined>(undefined);

  const handleEditorDidMount = (editor: Editor.IStandaloneDiffEditor, monaco: Monaco): void => {
    diffEditorRef.current = editor;
    setTheme(monaco);
  };

  const showOriginalValue = (): void => {
    if (diffEditorRef.current) {
      // eslint-disable-next-line no-alert
      alert(diffEditorRef.current.getOriginalEditor().getValue());
    }
  };

  const showModifiedValue = (): void => {
    if (diffEditorRef.current) {
      // eslint-disable-next-line no-alert
      alert(diffEditorRef.current.getModifiedEditor().getValue());
    }
  };

  return (
    <>
      <button type="button" onClick={showOriginalValue}>
        show original value
      </button>
      <button type="button" onClick={showModifiedValue}>
        show modified value
      </button>
      <CodeEditorDiff
        theme="vs-dark"
        onMount={handleEditorDidMount}
        height="90vh"
        language="markdown"
        original={originalText}
        modified={modifiedText}
      />
      ;
    </>
  );
};

const originalCode = `interface User {
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

const modifiedCode = `interface Person {
  name: string;
  id: string;
}

class PersonAccount {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}

const person: Person = new PersonAccount("Murphy", "1");`;

export const CodeDiffExample = (): React.ReactNode => {
  return (
    <CodeEditorDiff
      theme="vs-dark"
      height="90vh"
      language="typescript"
      original={originalCode}
      modified={modifiedCode}
    />
  );
};
