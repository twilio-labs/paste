import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps, BoxStyleProps} from '@twilio-paste/box';
import {InputBox} from '@twilio-paste/input-box';
import type {InputBoxTypes} from '@twilio-paste/input-box';

import {safelySpreadFormControlProps} from './utils';

export type InputVariants = 'default' | 'inverse';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'>,
    Pick<BoxProps, 'element'> {
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
  padding?: 'space0';
  paddingRight?: BoxStyleProps['paddingRight'];
  cursor?: BoxStyleProps['cursor'];
}

interface TypeProps {
  type: InputBoxTypes;
  inputmode?: string | undefined;
  pattern?: string | undefined;
}

export const InputElement = React.forwardRef<HTMLInputElement, InputProps>(({element, ...props}, ref) => {
  return (
    <Box
      appearance="none"
      as="input"
      backgroundColor="transparent"
      border="none"
      borderRadius="borderRadius20"
      boxShadow="none"
      color="inherit"
      cursor={(props.type === 'date' || props.type === 'time') && !props.readOnly && !props.disabled ? 'text' : 'auto'}
      display="block"
      element={element}
      fontFamily="inherit"
      fontSize="fontSize30"
      fontWeight="fontWeightMedium"
      lineHeight="lineHeight20"
      margin="space0"
      outline="none"
      paddingBottom="space30"
      paddingLeft="space40"
      paddingRight="space40"
      paddingTop="space30"
      resize="none"
      width="100%"
      variant={props.variant}
      ref={ref}
      _placeholder={{
        color: props.variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeak',
        fontStyle: 'italic',
      }}
      _focus_placeholder={{
        color: props.variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeak',
      }}
      _disabled={{
        color: props.variant === 'inverse' ? 'colorTextInverseWeakest' : 'colorTextWeaker',
        cursor: 'not-allowed',
        '-webkit-text-fill-color': props.variant === 'inverse' ? 'colorTextInverseWeakest' : 'colorTextWeaker',
        '-webkit-opacity': '1',
      }}
      __webkit_datetime_edit={{
        display: 'flex',
      }}
      __webkit_calendar_picker_indicator_hover={{
        cursor: props.readOnly || props.disabled ? 'default' : 'pointer',
      }}
      {...props}
    />
  );
});

InputElement.displayName = 'InputElement';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled,
      element = 'INPUT',
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
        element={element}
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
          element={`${element}_ELEMENT`}
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

Input.propTypes = {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel', 'date', 'time'])
    .isRequired as any,
  value: PropTypes.string,
};

export {Input};
export type {InputBoxTypes as InputTypes};
