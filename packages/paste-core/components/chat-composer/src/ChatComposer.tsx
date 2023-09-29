import { Box } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import {
  // The component that renders the content editable div
  ContentEditable,
  /*
   * ErrorBoundary catches errors in any of the children
   * https://reactjs.org/docs/error-boundaries.html
   */
  ErrorBoundary,
  /**
   * Plugin that adds history stack (allows for undo/redo)
   * https://lexical.dev/docs/react/plugins#lexicalonchangeplugin
   */
  HistoryPlugin,
  // Create and manages the Lexical editor instance
  LexicalComposer,
  /**
   * Plugin that calls the OnChange function when the state changes
   * https://lexical.dev/docs/react/plugins#lexicalonchangeplugin
   */
  OnChangePlugin,
  /*
   * Adds the ability to edit the text, also support for bold/italic/underline
   * https://lexical.dev/docs/react/plugins#lexicalrichtextplugin
   */
  RichTextPlugin,
} from "@twilio-paste/lexical-library";
import type { ContentEditableProps, LexicalComposerProps, OnChangeFunction } from "@twilio-paste/lexical-library";
import { StylingGlobals } from "@twilio-paste/styling-library";
import merge from "deepmerge";
import * as React from "react";

import { AutoLinkPlugin } from "./AutoLinkPlugin";
import { PlaceholderWrapper } from "./PlaceholderWrapper";
import { baseConfig, renderInitialText } from "./helpers";
import { chatComposerLexicalStyles } from "./styles";

export interface ChatComposerProps extends Omit<ContentEditableProps, "style" | "className" | "onChange"> {
  children?: LexicalComposerProps["children"];
  config: LexicalComposerProps["initialConfig"];
  element?: BoxProps["element"];
  maxHeight?: BoxStyleProps["maxHeight"];
  initialValue?: string;
  disabled?: boolean;
  onChange?: OnChangeFunction;
}

export const ChatComposer = React.forwardRef<HTMLDivElement, ChatComposerProps>(
  (
    {
      children,
      element = "CHAT_COMPOSER",
      onChange,
      placeholder = "",
      initialValue,
      config,
      maxHeight,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseConfigWithEditorState = {
      ...baseConfig,
      editable: disabled ? false : true,
      editorState: initialValue ? () => renderInitialText(initialValue) : undefined,
    };

    return (
      <Box
        flexGrow={1}
        ref={ref}
        element={element}
        position="relative"
        transition="background-color 100ms ease-in,box-shadow 100ms ease-in,color 100ms ease-in"
        paddingY="space30"
        paddingX="space40"
        borderRadius="borderRadius20"
        _focusWithin={{ boxShadow: "shadowFocus" }}
        overflowY="scroll"
        maxHeight={maxHeight}
        disabled={disabled}
        aria-disabled={disabled}
        _disabled={{
          color: "colorTextWeaker",
          backgroundColor: "colorBackground",
        }}
      >
        <StylingGlobals styles={chatComposerLexicalStyles} />
        <LexicalComposer initialConfig={merge(baseConfigWithEditorState, config)}>
          <>
            <RichTextPlugin
              contentEditable={<ContentEditable {...props} className="paste-chat-composer-content-editable" />}
              placeholder={<PlaceholderWrapper element={`${element}_PLACEHOLDER_WRAPPER`} placeholder={placeholder} />}
              ErrorBoundary={ErrorBoundary}
            />
            {onChange && <OnChangePlugin onChange={onChange} />}
            <HistoryPlugin />
            <AutoLinkPlugin />
            {children}
          </>
        </LexicalComposer>
      </Box>
    );
  },
);

ChatComposer.displayName = "ChatComposer";
