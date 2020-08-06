import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import {FormControlWrapper} from './shared/FormControlWrapper';
import {FormInputTypes, FieldVariants} from './shared/types';
import {safelySpreadFormControlProps} from './shared/Utils';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: never;
  disabled?: boolean;
  hasError?: boolean;
  height?: never;
  id: string;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: never;
  style?: never;
  type: FormInputTypes;
  value: string;
  variant?: FieldVariants;
  width?: never;
}

interface TypeProps {
  type: FormInputTypes;
  inputmode?: string | undefined;
  pattern?: string | undefined;
}

/* eslint-disable emotion/syntax-preference */
export const InputElement = styled.input<FormInputProps>(props =>
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
    fontWeight: 'fontWeightNormal',
    lineHeight: 'lineHeight20',
    outline: 'none',
    paddingBottom: 'space30',
    paddingLeft: 'space40',
    paddingRight: 'space40',
    paddingTop: 'space30',
    resize: 'none',
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
    },
  })
);
/* eslint-enable */

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
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
      <FormControlWrapper
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
      </FormControlWrapper>
    );
  }
);

FormInput.displayName = 'FormInput';

if (process.env.NODE_ENV === 'development') {
  FormInput.propTypes = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel']).isRequired as any,
    value: PropTypes.string.isRequired,
  };
}

export {FormInput};
