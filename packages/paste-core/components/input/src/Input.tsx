import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import {InputBox} from '@twilio-paste/input-box';
import type {InputBoxTypes} from '@twilio-paste/input-box';
import {safelySpreadFormControlProps} from './utils';

export type InputVariants = 'default' | 'inverse';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
  type: InputBoxTypes;
  value?: string;
  variant?: InputVariants;
  width?: never;
}

interface TypeProps {
  type: InputBoxTypes;
  inputmode?: string | undefined;
  pattern?: string | undefined;
}

/* eslint-disable emotion/syntax-preference */
export const InputElement = styled.input<InputProps>((props) =>
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
    margin: 'space0',
    outline: 'none',
    paddingBottom: 'space30',
    paddingLeft: 'space40',
    paddingRight: 'space40',
    paddingTop: 'space30',
    resize: 'none',
    width: '100%',
    cursor: (props.type === 'date' || props.type === 'time') && !props.readOnly && !props.disabled ? 'text' : 'auto',

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
    // Fixes extra height issue in Safari
    '&::-webkit-datetime-edit': {
      display: 'flex',
    },

    // Change to pointer cursor on cal icon
    '&::-webkit-calendar-picker-indicator:hover': {
      cursor: props.readOnly || props.disabled ? 'default' : 'pointer',
    },
  })
);
/* eslint-enable */

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled,
      hasError,
      id,
      insertAfter,
      insertBefore,
      name,
      placeholder,
      readOnly,
      required,
      type,
      value,
      variant,
      ...props
    },
    ref
  ) => {
    const typeProps: TypeProps = {type};

    // https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
    if (type === 'number') {
      typeProps.type = 'text';
      typeProps.inputmode = 'numeric';
      typeProps.pattern = '[0-9]*';
    }

    return (
      <InputBox
        disabled={disabled}
        hasError={hasError}
        insertAfter={insertAfter}
        insertBefore={insertBefore}
        readOnly={readOnly}
        type={type}
        variant={variant}
      >
        <InputElement
          aria-invalid={hasError}
          aria-readonly={readOnly}
          {...safelySpreadFormControlProps(props)}
          {...typeProps}
          disabled={disabled}
          id={id}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
          required={required}
          value={value}
          variant={variant}
        />
      </InputBox>
    );
  }
);

Input.displayName = 'Input';

if (process.env.NODE_ENV === 'development') {
  Input.propTypes = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel', 'date', 'time'])
      .isRequired as any,
    value: PropTypes.string,
  };
}

export {Input};
export type {InputBoxTypes as InputTypes};
