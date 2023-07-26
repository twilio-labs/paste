import * as React from 'react';
import {Box, type BoxProps} from '@twilio-paste/box';
import {
  CodeEditor,
  CodeEditorPasteTheme,
  type CodeEditorProps,
  type Editor,
  type Monaco,
  type IRange,
  type IMarkdownString,
} from '@twilio-paste/code-editor-library';
import {StylingGlobals} from '@twilio-paste/styling-library';

export interface EditableCodeBlockProps
  extends Omit<CodeEditorProps, 'wrapperProps' | 'className' | 'loading' | 'theme' | 'options'> {
  children?: never;
  /*
   * NOTE: I leave these commented out because I'm not sure whether we want to allow users to override these options.
   * If we do, we can uncomment these easily in the future since the work is already done.
   */
  // monacoOptions?: CodeEditorProps['options'];
  element?: BoxProps['element'];
  minimap?: boolean;
  lineNumbers?: 'on' | 'off';
  folding?: boolean;
  readOnly?: boolean;
  indentationGuide?: boolean;
  showMinimap?: boolean;
  scrollBeyondLastLine?: boolean;
  inlineErrorRange?: IRange;
  inlineErrorHoverMessage?: IMarkdownString | IMarkdownString[] | null;
  inlineErrorIsWholeLine?: boolean;
}

export const EditableCodeBlock: React.FC<EditableCodeBlockProps> = ({
  onMount,
  element = 'EDITABLE_CODE_BLOCK',
  // monacoOptions = {},
  lineNumbers = 'on',
  readOnly = false,
  folding = true,
  indentationGuide = true,
  showMinimap = false,
  scrollBeyondLastLine = false,
  inlineErrorRange,
  inlineErrorHoverMessage,
  inlineErrorIsWholeLine = true,
  ...props
}) => {
  const controlledOptions = React.useMemo(() => {
    return {
      lineNumbers,
      folding,
      readOnly,
      scrollBeyondLastLine,
      glyphMargin: inlineErrorRange != null,
      // ...monacoOptions,
      minimap: {
        enabled: showMinimap,
        // ...monacoOptions.minimap,
      },
      guides: {
        indentation: indentationGuide,
        // ...monacoOptions.guides,
      },
    } as CodeEditorProps['options'];
  }, [
    // monacoOptions,
    readOnly,
    showMinimap,
    folding,
    inlineErrorRange,
    scrollBeyondLastLine,
    indentationGuide,
    lineNumbers,
  ]);

  const handleEditorDidMount = React.useCallback(
    (editor: Editor.IStandaloneCodeEditor, monaco: Monaco): void => {
      // Sets the Paste theme for the editor
      monaco.editor.defineTheme('paste', CodeEditorPasteTheme);
      monaco.editor.setTheme('paste');

      if (inlineErrorRange) {
        editor.createDecorationsCollection([
          {
            range: new monaco.Range(
              inlineErrorRange.startLineNumber,
              inlineErrorRange.startColumn,
              inlineErrorRange.endLineNumber,
              inlineErrorRange.endColumn
            ),
            options: {
              isWholeLine: inlineErrorIsWholeLine,
              className: '.paste-editable-code-editor-row-error',
              hoverMessage: inlineErrorHoverMessage,
              glyphMarginClassName: '.paste-editable-code-editor-margin-error',
              glyphMarginHoverMessage: inlineErrorHoverMessage,
            },
          },
        ]);
      }

      /*
       * Call provided onMount function.
       * This can be used to add custom language support, or to grab a
       * reference to the ref (monaco) object.
       */
      onMount?.(editor, monaco);
    },
    [onMount, inlineErrorHoverMessage, inlineErrorRange, inlineErrorIsWholeLine]
  );

  return (
    <Box element={element} borderRadius="borderRadius10" overflow="hidden">
      {inlineErrorRange ? (
        <StylingGlobals
          styles={{
            '.paste-editable-code-editor-margin-error': {
              ':before': {
                content: '""',
                display: 'inline-block',
                width: '16px',
                height: '16px',
                background: `url(https://assets.twilio.com/public_assets/paste-assets/1.0.0/icons/editable-codeblock-error.svg) no-repeat center center`,
              },
            },
            '.paste-editable-code-editor-row-error': {
              backgroundColor: 'rgba(255, 0, 0, 0.3)',
            },
          }}
        />
      ) : null}
      <CodeEditor {...props} options={controlledOptions} onMount={handleEditorDidMount} />
    </Box>
  );
};

EditableCodeBlock.displayName = 'EditableCodeBlock';
