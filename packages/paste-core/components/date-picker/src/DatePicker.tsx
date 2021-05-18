import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import {InputBox} from '@twilio-paste/input-box';
import {safelySpreadFormControlProps} from '../../input/src/utils';

// Do we need to include inverse variant on date picker?
export interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  disabled?: boolean;
  className?: never;
  hasError?: boolean;
  height?: never;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: never;
  style?: never;
  value?: string;
  width?: never;
}

// Need to figure out how to change height for safari bug

/* eslint-disable emotion/syntax-preference */
export const DatePickerElement = styled.input<DatePickerProps>(() =>
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

    '&::placeholder': {
      // color: props.variant === 'inverse' ? 'colorTextInverseWeak' : 'colorTextWeak',
      fontStyle: 'italic',
    },

    '&:focus::placeholder': {
      // color: props.variant === 'inverse' ? 'colorTextInverseWeak' : 'colorTextWeak',
    },

    '&:disabled': {
      // color: props.variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeaker',
      cursor: 'not-allowed',
      // Fixes value color in Safari
      // '-webkit-text-fill-color': props.variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeaker',
      '-webkit-opacity': '1',
    },
  })
);
/* eslint-enable */

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {id, disabled, hasError, insertAfter, insertBefore, name, placeholder, readOnly, required, value, ...props},
    ref
  ) => {
    return (
      <InputBox
        disabled={disabled}
        hasError={hasError}
        insertAfter={insertAfter}
        insertBefore={insertBefore}
        readOnly={readOnly}
      >
        <DatePickerElement
          type="date"
          ref={ref}
          id={id}
          disabled={disabled}
          name={name}
          readOnly={readOnly}
          required={required}
          value={value}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-readonly={readOnly}
          {...safelySpreadFormControlProps(props)}
        />
      </InputBox>
    );
  }
);

DatePicker.displayName = 'DatePicker';

DatePicker.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export {DatePicker};
