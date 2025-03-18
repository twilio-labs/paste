"use client";
import type { LexicalComposer } from "@lexical/react/LexicalComposer";
import type { ContentEditable } from "@lexical/react/LexicalContentEditable";
import ErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import type { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

export {
  createCommand,
  CLEAR_EDITOR_COMMAND,
  KEY_ENTER_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_NORMAL,
  COMMAND_PRIORITY_LOW,
  COMMAND_PRIORITY_EDITOR,
  BLUR_COMMAND,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  CLEAR_HISTORY_COMMAND,
  CLICK_COMMAND,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  DRAGEND_COMMAND,
  DRAGOVER_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  FOCUS_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  INDENT_CONTENT_COMMAND,
  INSERT_LINE_BREAK_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
  INSERT_TAB_COMMAND,
  KEY_ARROW_DOWN_COMMAND,
  KEY_ARROW_LEFT_COMMAND,
  KEY_ARROW_RIGHT_COMMAND,
  KEY_ARROW_UP_COMMAND,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
  KEY_DOWN_COMMAND,
  KEY_ESCAPE_COMMAND,
  KEY_MODIFIER_COMMAND,
  KEY_SPACE_COMMAND,
  KEY_TAB_COMMAND,
  MOVE_TO_END,
  MOVE_TO_START,
  OUTDENT_CONTENT_COMMAND,
  PASTE_COMMAND,
  REDO_COMMAND,
  REMOVE_TEXT_COMMAND,
  SELECT_ALL_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
  $addUpdateTag,
  $applyNodeReplacement,
  $copyNode,
  $getAdjacentNode,
  $getNearestNodeFromDOMNode,
  $getNearestRootOrShadowRoot,
  $getNodeByKey,
  $hasAncestor,
  $hasUpdateTag,
  $isInlineElementOrDecoratorNode,
  $isLeafNode,
  $isRootOrShadowRoot,
  $nodesOfType,
  $selectAll,
  $setCompositionKey,
  $setSelection,
  $splitNode,
  $parseSerializedNode,
  $createRangeSelection,
  $getPreviousSelection,
  $getTextContent,
  $insertNodes,
  $isBlockElementNode,
  $isNodeSelection,
  $isRangeSelection,
  $isParagraphNode,
  $createLineBreakNode,
  $isLineBreakNode,
  $isElementNode,
  $isDecoratorNode,
  $getRoot,
  $getSelection,
  $createParagraphNode,
  $createTextNode,
} from "lexical";
export type { EditorState, EditorThemeClasses, LexicalEditor, SerializedEditorState } from "lexical";

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
export { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
export { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export type LexicalComposerProps = React.ComponentProps<typeof LexicalComposer>;
export type OnChangeFunction = React.ComponentProps<typeof OnChangePlugin>["onChange"];
export type ContentEditableProps = React.ComponentProps<typeof ContentEditable>;

export { ErrorBoundary };
