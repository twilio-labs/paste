import type { LexicalComposer } from "@lexical/react/LexicalComposer";
import type { ContentEditable } from "@lexical/react/LexicalContentEditable";
import ErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import type { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

export {
  $getRoot,
  $getSelection,
  $createParagraphNode,
  $createTextNode,
  CLEAR_EDITOR_COMMAND,
  KEY_ENTER_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_NORMAL,
  COMMAND_PRIORITY_LOW,
  COMMAND_PRIORITY_EDITOR,
} from "lexical";
export type { EditorState, EditorThemeClasses, LexicalEditor } from "lexical";

export { AutoLinkNode } from "@lexical/link";
export { LexicalComposer } from "@lexical/react/LexicalComposer";
export { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
export { ContentEditable } from "@lexical/react/LexicalContentEditable";
export { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
export { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
export { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
export { ListPlugin } from "@lexical/react/LexicalListPlugin";
export { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
export { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
export { TablePlugin } from "@lexical/react/LexicalTablePlugin";
export { AutoLinkPlugin } from "@lexical/react/LexicalAutoLinkPlugin";
export { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
export { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
export { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export type LexicalComposerProps = React.ComponentProps<typeof LexicalComposer>;
export type OnChangeFunction = React.ComponentProps<typeof OnChangePlugin>["onChange"];
export type ContentEditableProps = React.ComponentProps<typeof ContentEditable>;

export { ErrorBoundary };
