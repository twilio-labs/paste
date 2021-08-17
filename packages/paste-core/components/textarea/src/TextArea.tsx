import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import TextareaAutosize from 'react-autosize-textarea';
import type {BoxProps} from '@twilio-paste/box';
import {InputBox} from '@twilio-paste/input-box';
import {safelySpreadFormControlProps} from './utils';

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
const TextAreaElement = styled(TextareaAutosize)<TextAreaProps>((props) =>
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
  })
);
/* eslint-enable */

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      children,
      disabled,
      element,
      hasError,
      id,
      insertBefore,
      insertAfter,
      name,
      placeholder,
      readOnly,
      variant,
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
          aria-invalid={hasError}
          aria-readonly={readOnly}
          {...safelySpreadFormControlProps(props)}
          async
          disabled={disabled}
          id={id}
          name={name}
          placeholder={placeholder}
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

if (process.env.NODE_ENV === 'development') {
  TextArea.propTypes = {
    disabled: PropTypes.bool,
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
}

export {TextArea};
