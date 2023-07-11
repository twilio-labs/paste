import * as React from 'react';
import {Box, type BoxProps} from '@twilio-paste/box';
import {
  CodeEditor,
  CodeEditorPasteTheme,
  type CodeEditorProps,
  type Editor,
  type Monaco,
} from '@twilio-paste/code-editor-library';

export interface EditableCodeBlockProps
  extends Omit<CodeEditorProps, 'wrapperProps' | 'className' | 'loading' | 'theme'> {
  element?: BoxProps['element'];
}

export const EditableCodeBlock: React.FC<EditableCodeBlockProps> = ({
  onMount,
  element = 'EDITABLE_CODE_BLOCK',
  ...props
}) => {
  const handleEditorDidMount = (editor: Editor.IStandaloneCodeEditor, monaco: Monaco): void => {
    // Sets the Paste theme for the editor
    monaco.editor.defineTheme('paste', CodeEditorPasteTheme);
    monaco.editor.setTheme('paste');

    /*
     * Call provided onMount function.
     * This can be used to add custom language support, or to grab a
     * reference to the ref (monaco) object.
     */
    onMount?.(editor, monaco);
  };

  return (
    <Box element={element} borderRadius="borderRadius10" overflow="hidden">
      <CodeEditor {...props} onMount={handleEditorDidMount} />
    </Box>
  );
};

EditableCodeBlock.displayName = 'EditableCodeBlock';
