import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps, BoxStyleProps} from '@twilio-paste/box';
import {
  // Create and manages the Lexical editor instance
  LexicalComposer,
  /*
   * ErrorBoundary catches errors in any of the children
   * https://reactjs.org/docs/error-boundaries.html
   */
  ErrorBoundary,
  // The component that renders the content editable div
  ContentEditable,
  /*
   * Adds the ability to edit the text, also support for bold/italic/underline
   * https://lexical.dev/docs/react/plugins#lexicalrichtextplugin
   */
  RichTextPlugin,
  /**
   * Plugin that calls the OnChange function when the state changes
   * https://lexical.dev/docs/react/plugins#lexicalonchangeplugin
   */
  OnChangePlugin,
  /**
   * Plugin that adds history stack (allows for undo/redo)
   * https://lexical.dev/docs/react/plugins#lexicalonchangeplugin
   */
  HistoryPlugin,
} from '@twilio-paste/lexical-library';
import {StylingGlobals} from '@twilio-paste/styling-library';
import type {LexicalComposerProps, OnChangeFunction, ContentEditableProps} from '@twilio-paste/lexical-library';
import merge from 'deepmerge';

import {chatComposerLexicalStyles} from './styles';
import {AutoLinkPlugin} from './AutoLinkPlugin';
import {PlaceholderWrapper} from './PlaceholderWrapper';
import {baseConfig, renderInitialText} from './helpers';

export interface ChatComposerProps extends ContentEditableProps {
  children?: LexicalComposerProps['children'];
  config: LexicalComposerProps['initialConfig'];
  element?: BoxProps['element'];
  placeholder?: string | JSX.Element;
  onChange?: OnChangeFunction;
  maxHeight?: BoxStyleProps['maxHeight'];
  initialValue?: string;
  disabled?: boolean;

  /** Mapped to ariaOwneeID on the Lexical ContentEditable component.  */
  ariaOwns?: ContentEditableProps['ariaOwneeID'];
  /** Mapped to ariaActiveDescendantID on the Lexical ContentEditable component.  */
  ariaActiveDescendant?: ContentEditableProps['ariaActiveDescendantID'];

  /** Paste doesn't support using inline styles, use CustomizationProvider instead. */
  style?: never;
  /** Paste doesn't support using class names, use CustomizationProvider instead. */
  className?: never;
  /** Use ariaOwns instead because it is the name of the actual aria attribute. */
  ariaOwneeID?: never;
  /** Use ariaActiveDescendant instead because it is the name of the actual aria attribute. */
  ariaActiveDescendantID?: never;
}

export const ChatComposer = React.forwardRef<HTMLDivElement, ChatComposerProps>(
  (
    {
      children,
      element = 'CHAT_COMPOSER',
      onChange,
      placeholder = '',
      initialValue,
      config,
      maxHeight,
      ariaOwns,
      ariaActiveDescendant,
      disabled,
      ...props
    },
    ref
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
        _focusWithin={{boxShadow: 'shadowFocus'}}
        overflowY="scroll"
        maxHeight={maxHeight}
        disabled={disabled}
        aria-disabled={disabled}
        _disabled={{
          color: 'colorTextWeaker',
          backgroundColor: 'colorBackground',
        }}
      >
        <StylingGlobals styles={chatComposerLexicalStyles} />
        <LexicalComposer initialConfig={merge(baseConfigWithEditorState, config)}>
          <>
            <RichTextPlugin
              contentEditable={
                <ContentEditable
                  {...props}
                  ariaActiveDescendantID={ariaActiveDescendant}
                  ariaOwneeID={ariaOwns}
                  className="paste-chat-composer-content-editable"
                />
              }
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
  }
);

ChatComposer.displayName = 'ChatComposer';

ChatComposer.propTypes = {
  children: PropTypes.element,
  onChange: PropTypes.func,
  element: PropTypes.string,
  config: PropTypes.shape({
    onError: PropTypes.func.isRequired,
    namespace: PropTypes.string.isRequired,
    editorState: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    theme: PropTypes.object as any,
  }).isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  initialValue: PropTypes.string,
  maxHeight: PropTypes.oneOf([
    'size0',
    'size10',
    'size20',
    'size30',
    'size40',
    'size50',
    'size60',
    'size70',
    'size80',
    'size90',
    'size100',
    'size110',
    'size120',
  ]),
  ariaActiveDescendant: PropTypes.string,
  ariaAutoComplete: PropTypes.string,
  ariaControls: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  ariaMultiline: PropTypes.bool,
  ariaOwns: PropTypes.string,
  ariaRequired: PropTypes.string,
  autoCapitalize: PropTypes.bool,
  autoComplete: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  id: PropTypes.string,
  readOnly: PropTypes.bool,
  role: PropTypes.string,
  spellCheck: PropTypes.bool,
  tabIndex: PropTypes.number,
  testid: PropTypes.string,
};
