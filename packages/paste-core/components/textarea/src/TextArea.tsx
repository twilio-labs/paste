import * as React from 'react';

import TextareaAutosize from '@twilio-paste/react-textarea-autosize-library';
import {styled, css} from '@twilio-paste/styling-library';
import {safelySpreadBoxProps, getCustomElementStyles} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {InputBox} from '@twilio-paste/input-box';
import type {HTMLPasteProps} from '@twilio-paste/types';

export type TextAreaVariants = 'default' | 'inverse';

export interface TextAreaProps extends HTMLPasteProps<'textarea'>, Pick<BoxProps, 'element'> {
  disabled?: boolean;
  hasError?: boolean;
  height?: never;
  id?: string;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  resize?: 'none' | 'vertical';
  size?: never;
  variant?: TextAreaVariants;
  width?: never;
}

// @ts-expect-error can't work out how to stop the styled div color prop from emotion clashing with our color style prop in BoxProps
const TextAreaElement = styled(TextareaAutosize)<TextAreaProps>(
  (props) =>
    css({
      appearance: 'none',
      background: 'transparent',
      border: 'none',
      borderRadius: 'borderRadius20',
      boxShadow: 'none',
      color: 'inherit',
      display: 'block',
      fontFamily: 'inherit',
      fontSize: 'fontSize30',
      fontWeight: 'fontWeightMedium',
      lineHeight: 'lineHeight20',
      maxHeight: props.resize === 'vertical' ? 'none' : 'size30',
      outline: 'none',
      paddingBottom: 'space30',
      paddingLeft: 'space40',
      paddingRight: 'space40',
      paddingTop: 'space30',
      resize: props.resize,
      width: '100%',

      '&::placeholder': {
        color: props.variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeak',
        fontStyle: 'italic',
      },

      '&:focus::placeholder': {
        color: props.variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeak',
      },

      '&:disabled': {
        color: props.variant === 'inverse' ? 'colorTextInverseWeakest' : 'colorTextWeaker',
        cursor: 'not-allowed',
        // Fixes value color in Safari
        '-webkit-text-fill-color': props.variant === 'inverse' ? 'colorTextInverseWeakest' : 'colorTextWeaker',
        '-webkit-opacity': '1',
      },
    }),
  getCustomElementStyles
);

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      children,
      disabled,
      element = 'TEXTAREA',
      hasError,
      insertBefore,
      insertAfter,
      readOnly,
      variant,
      resize = 'none',
      // size, height and width should not be passed down
      size,
      height,
      width,
      ...props
    },
    ref
  ) => {
    return (
      <InputBox
        disabled={disabled}
        element={element}
        hasError={hasError}
        insertAfter={insertAfter}
        insertBefore={insertBefore}
        readOnly={readOnly}
        variant={variant}
      >
        <TextAreaElement
          {...safelySpreadBoxProps(props)}
          aria-invalid={hasError}
          aria-readonly={readOnly}
          disabled={disabled}
          data-paste-element={`${element}_ELEMENT`}
          readOnly={readOnly}
          ref={ref}
          rows={3}
          minRows={3}
          spellCheck
          resize={resize}
          variant={variant}
        >
          {children}
        </TextAreaElement>
      </InputBox>
    );
  }
);

TextArea.displayName = 'TextArea';

export {TextArea};
