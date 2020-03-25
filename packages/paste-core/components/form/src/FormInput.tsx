import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {FieldWrapper} from './shared/FieldWrapper';
import {Prefix} from './shared/Prefix';
import {Suffix} from './shared/Suffix';
import {FormInputTypes} from './shared/types';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: FormInputTypes;
  value: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  hasError?: boolean;
  insertBefore?: React.ReactNode;
  insertAfter?: React.ReactNode;
  className?: never;
  style?: never;
  size?: never;
  height?: never;
  width?: never;
}

interface TypeProps {
  type: FormInputTypes;
  inputmode?: string | undefined;
  pattern?: string | undefined;
}

/* eslint-disable emotion/syntax-preference */
const InputElement = styled.input(
  css({
    appearance: 'none',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    resize: 'none',
    display: 'block',
    width: '100%',
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight30',
    fontWeight: 'fontWeightNormal',
    color: 'colorText',
    paddingTop: 'space30',
    paddingRight: 'space40',
    paddingBottom: 'space30',
    paddingLeft: 'space40',
    borderRadius: 'borderRadius20',

    '&::placeholder': {
      color: 'colorTextWeak',
      fontStyle: 'italic',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      color: 'colorTextWeak',
    },
  })
);
/* eslint-enable */

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {id, type, name, value, placeholder, disabled, readOnly, required, hasError, insertBefore, insertAfter, ...props},
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
      <FieldWrapper {...typeProps} readOnly={readOnly} disabled={disabled} hasError={hasError}>
        {insertBefore && <Prefix>{insertBefore}</Prefix>}
        <InputElement
          aria-invalid={hasError}
          aria-readonly={readOnly}
          {...props}
          {...typeProps}
          ref={ref}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
        />
        {insertAfter && <Suffix>{insertAfter}</Suffix>}
      </FieldWrapper>
    );
  }
);

FormInput.displayName = 'FormInput';

if (process.env.NODE_ENV === 'development') {
  FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel']).isRequired as any,
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    hasError: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };
}

export {FormInput};
