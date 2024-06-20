import { Box } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import {
  // The component that renders the content editable div
  ContentEditable,
  /*
   * Adds the ability to access the Lexical editor instance from outside of the context
   * https://lexical.dev/docs/react/plugins#lexicaleditorrefplugin
   */
  EditorRefPlugin,
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
import type {
  ContentEditableProps,
  LexicalComposerProps,
  LexicalEditor,
  OnChangeFunction,
} from "@twilio-paste/lexical-library";
import { StylingGlobals } from "@twilio-paste/styling-library";
import { ThemeShape } from "@twilio-paste/theme";
import merge from "deepmerge";
import * as React from "react";

import { AutoLinkPlugin } from "./AutoLinkPlugin";
import { ChatComposerContext } from "./ChatComposerContext";
import { PlaceholderWrapper } from "./PlaceholderWrapper";
import { ToggleEditablePlugin } from "./ToggleEditablePlugin";
import { baseConfig, renderInitialText } from "./helpers";
import { chatComposerLexicalStyles } from "./styles";

export interface ChatComposerProps extends Omit<ContentEditableProps, "style" | "className" | "onChange"> {
  children?: LexicalComposerProps["children"];
  /**
   * Utilize the Lexical API directly
   *
   * @default null
   * @type {LexicalComposerProps["initialConfig"]}
   * @memberof ChatComposerProps
   */
  config: LexicalComposerProps["initialConfig"];
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_COMPOSER"
   * @type {BoxProps["element"]}
   * @memberof ChatComposerProps
   */
  element?: BoxProps["element"];
  /**
   *
   * @default null
   * @type {BoxStyleProps["maxHeight"]}
   * @memberof ChatComposerProps
   */
  maxHeight?: BoxStyleProps["maxHeight"];
  /**
   *
   * @default null
   * @type {BoxStyleProps["fontSize"]}
   * @memberof ChatComposerProps
   */
  fontSize?: BoxStyleProps["fontSize"];
  /**
   *
   * @default null
   * @type {BoxStyleProps["lineHeight"]}
   * @memberof ChatComposerProps
   */
  lineHeight?: BoxStyleProps["lineHeight"];
  /**
   *
   * @default null
   * @type {string}
   * @memberof ChatComposerProps
   */
  initialValue?: string;
  /**
   *
   * @default null
   * @type {boolean}
   * @memberof ChatComposerProps
   */
  disabled?: boolean;
  /**
   *
   * @default null
   * @type {OnChangeFunction}
   * @memberof ChatComposerProps
   */
  onChange?: OnChangeFunction;
  /**
   *
   * @default null
   * @type {React.MutableRefObject<LexicalEditor | null>}
   * @memberof ChatComposerProps
   */
  editorInstanceRef?: React.MutableRefObject<LexicalEditor | null>;
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
      maxHeight = "size30",
      disabled,
      fontSize,
      lineHeight,
      editorInstanceRef,
      ...props
    },
    ref
  ) => {
    const { setIsDisabled } = React.useContext(ChatComposerContext);

    const baseConfigWithEditorState = {
      ...baseConfig,
      editable: disabled ? false : true,
      editorState: initialValue ? () => renderInitialText(initialValue) : undefined,
    };

    const getDisabledStyling = React.useCallback((): BoxStyleProps => {
      /**
       * If setIsDisabled is defined, then the styling will be handled by ChatComposerContainer.
       * If it is not defined, then the styling will be handled by ChatComposer. Using both causes the diabled style to change
       * from container and then composer.
       */
      if (setIsDisabled !== undefined) {
        return {};
      }
      return {
        color: "colorTextWeaker",
        backgroundColor: "colorBackground",
      };
    }, [Boolean(setIsDisabled)]);

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
        overflowY="auto"
        maxHeight={maxHeight}
        disabled={disabled}
        aria-disabled={disabled}
        _disabled={getDisabledStyling()}
        fontSize={fontSize}
        lineHeight={lineHeight}
        gridArea="1/1"
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
            <ToggleEditablePlugin disabled={disabled} />
            {editorInstanceRef && <EditorRefPlugin editorRef={editorInstanceRef} />}
            {children}
          </>
        </LexicalComposer>
      </Box>
    );
  },
);

ChatComposer.displayName = "ChatComposer";
