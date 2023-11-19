import type { Meta, StoryFn } from "@storybook/react";
import * as React from "react";

import {
  $getRoot,
  $getSelection,
  ContentEditable,
  ErrorBoundary,
  HistoryPlugin,
  LexicalComposer,
  OnChangePlugin,
  RichTextPlugin,
} from "../src";
import type { EditorState } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Libraries/lexical",
  parameters: {},
} as Meta;

const myOnChange = (editorState: EditorState): void => {
  editorState.read(() => {
    const root = $getRoot();
    const selection = $getSelection();

    // eslint-disable-next-line no-console
    console.log(root, selection);
  });
};

/*
 * this example is a heavily simplified version of the lexical rich text example
 * https://codesandbox.io/s/lexical-rich-text-example-5tncvy?file=/src/styles.css
 */

export const RichTextExample: StoryFn = () => {
  return (
    <LexicalComposer
      initialConfig={{
        namespace: "foo",
        onError: (error: Error) => {
          throw error;
        },
      }}
    >
      <div className="editor-inner">
        <RichTextPlugin
          contentEditable={<ContentEditable ariaLabel="Feedback" className="editor-input" />}
          placeholder={<div className="editor-placeholder">Enter text here...</div>}
          ErrorBoundary={ErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={myOnChange} />
      </div>
    </LexicalComposer>
  );
};
