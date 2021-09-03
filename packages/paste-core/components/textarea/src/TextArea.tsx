import * as React from 'react';
import * as PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';
import {styled, css} from '@twilio-paste/styling-library';
import {safelySpreadBoxProps, getCustomElementStyles} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {InputBox} from '@twilio-paste/input-box';

export type TextAreaVariants = 'default' | 'inverse';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, Pick<BoxProps, 'element'> {
  className?: never;
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
  size?: never;
  style?: never;
  variant?: TextAreaVariants;
  width?: never;
}

/* eslint-disable emotion/syntax-preference */
// @ts-ignore Just like in box I can't work out how to stop the styled div color prop from emotion clashing with our color style prop in BoxProps
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
      maxHeight: 'size30',
      outline: 'none',
      paddingBottom: 'space30',
      paddingLeft: 'space40',
      paddingRight: 'space40',
      paddingTop: 'space30',
      resize: 'vertical',
      width: '100%',

      '&::placeholder': {
        color: props.variant === 'inverse' ? 'colorTextInverseWeak' : 'colorTextWeak',
        fontStyle: 'italic',
      },

      '&:focus::placeholder': {
        color: props.variant === 'inverse' ? 'colorTextInverseWeak' : 'colorTextWeak',
      },

      '&:disabled': {
        color: props.variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeaker',
        cursor: 'not-allowed',
        // Fixes value color in Safari
        '-webkit-text-fill-color': props.variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeaker',
        '-webkit-opacity': '1',
      },
    }),
  getCustomElementStyles
);
/* eslint-enable */

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
          async
          aria-invalid={hasError}
          aria-readonly={readOnly}
          disabled={disabled}
          data-paste-element={`${element}_ELEMENT`}
          readOnly={readOnly}
          ref={ref}
          rows={3}
          spellCheck
          variant={variant}
        >
          {children}
        </TextAreaElement>
      </InputBox>
    );
  }
);

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
  disabled: PropTypes.bool,
  element: PropTypes.string,
  hasError: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
};

export {TextArea};
