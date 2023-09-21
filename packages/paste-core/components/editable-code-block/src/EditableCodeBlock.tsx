import { Box, type BoxProps } from "@twilio-paste/box";
import {
  CodeEditor,
  CodeEditorPasteTheme,
  type CodeEditorProps,
  type Editor,
  type IMarkdownString,
  type IRange,
  type Monaco,
} from "@twilio-paste/code-editor-library";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { Spinner } from "@twilio-paste/spinner";
import { StylingGlobals } from "@twilio-paste/styling-library";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

const EditableCodeblockLoadingMessage: React.FC<{ i18nLoadingLabel: string }> = ({ i18nLoadingLabel }) => (
  <>
    <Spinner color="colorTextPrimaryWeak" decorative />
    <ScreenReaderOnly>{i18nLoadingLabel}</ScreenReaderOnly>
  </>
);
EditableCodeblockLoadingMessage.displayName = "EditableCodeblockLoadingMessage";

const InlineErrorStyles: { [key: string]: any } = {
  ".paste-editable-code-editor-margin-error": {
    ":before": {
      content: '""',
      display: "inline-block",
      position: "relative",
      left: "2px",
      width: "16px",
      height: "16px",
      background: `url(https://assets.twilio.com/public_assets/paste-assets/1.0.0/icons/editable-codeblock-error.svg) no-repeat center center`,
    },
  },
  ".paste-editable-code-editor-row-error": {
    backgroundColor: "rgba(255, 0, 0, 0.3)",
  },
};

export interface EditableCodeBlockProps
  extends Omit<CodeEditorProps, "wrapperProps" | "className" | "loading" | "theme" | "options"> {
  children?: never;
  /*
   * NOTE: I leave these commented out because I'm not sure whether we want to allow users to override these options.
   * If we do, we can uncomment these easily in the future since the work is already done.
   */
  // monacoOptions?: CodeEditorProps['options'];
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'EDITABLE_CODE_BLOCK'
   * @type {BoxProps['element']}
   * @memberof EditableCodeBlockProps
   */
  element?: BoxProps["element"];
  minimap?: boolean;
  lineNumbers?: "on" | "off";
  folding?: boolean;
  readOnly?: boolean;
  indentationGuide?: boolean;
  showMinimap?: boolean;
  scrollBeyondLastLine?: boolean;
  inlineErrorRange?: IRange;
  inlineErrorHoverMessage?: IMarkdownString | IMarkdownString[] | null;
  inlineErrorIsWholeLine?: boolean;
  i18nLoadingLabel?: string;
}

export const EditableCodeBlock: React.FC<EditableCodeBlockProps> = ({
  onMount,
  element = "EDITABLE_CODE_BLOCK",
  // monacoOptions = {},
  lineNumbers = "on",
  readOnly = false,
  folding = true,
  indentationGuide = true,
  showMinimap = false,
  scrollBeyondLastLine = false,
  inlineErrorRange,
  inlineErrorHoverMessage,
  inlineErrorIsWholeLine = true,
  i18nLoadingLabel = "Loading code...",
  ...props
}) => {
  const theme = useTheme();
  const controlledOptions = React.useMemo(() => {
    return {
      lineHeight: 20,
      fontFamily: theme.fonts.fontFamilyCode,
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
    } as CodeEditorProps["options"];
  }, [
    // monacoOptions,
    readOnly,
    showMinimap,
    folding,
    inlineErrorRange,
    scrollBeyondLastLine,
    indentationGuide,
    lineNumbers,
    theme,
  ]);

  const globalStyles = React.useMemo(() => {
    return {
      ".monaco-hover-content": {
        fontFamily: theme.fonts.fontFamilyText,
      },
      ...(inlineErrorRange ? InlineErrorStyles : {}),
    };
  }, [theme, inlineErrorRange]);

  const handleEditorDidMount = React.useCallback(
    (editor: Editor.IStandaloneCodeEditor, monaco: Monaco): void => {
      // Sets the Paste theme for the editor
      monaco.editor.defineTheme("paste", CodeEditorPasteTheme);
      monaco.editor.setTheme("paste");

      if (inlineErrorRange) {
        editor.createDecorationsCollection([
          {
            // https://microsoft.github.io/monaco-editor/docs.html#interfaces/IRange.html
            range: new monaco.Range(
              inlineErrorRange.startLineNumber,
              inlineErrorRange.startColumn,
              inlineErrorRange.endLineNumber,
              inlineErrorRange.endColumn,
            ),
            // https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelDecorationOptions.html
            options: {
              isWholeLine: inlineErrorIsWholeLine,
              className: ".paste-editable-code-editor-row-error",
              hoverMessage: inlineErrorHoverMessage,
              glyphMarginClassName: ".paste-editable-code-editor-margin-error",
              glyphMarginHoverMessage: inlineErrorHoverMessage,
              // Adds the red error line in the scrollbar canvas
              overviewRuler: {
                color: "#b82430",
                darkColor: "#b82430",
                position: monaco.editor.OverviewRulerLane.Right,
              },
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
    [onMount, inlineErrorHoverMessage, inlineErrorRange, inlineErrorIsWholeLine],
  );

  return (
    <Box element={element} borderRadius="borderRadius10" overflow="hidden">
      <StylingGlobals styles={globalStyles} />
      <CodeEditor
        {...props}
        loading={<EditableCodeblockLoadingMessage i18nLoadingLabel={i18nLoadingLabel} />}
        options={controlledOptions}
        onMount={handleEditorDidMount}
      />
    </Box>
  );
};

EditableCodeBlock.displayName = "EditableCodeBlock";
