import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {Box} from '@twilio-paste/box';
import {BoxShadow} from '@twilio-paste/style-props';

interface InputWrapperProps {
  disabled?: boolean;
  hasError?: boolean;
  readOnly?: boolean;
}

const InputWrapper: React.FC<InputWrapperProps> = ({disabled, hasError, readOnly, children}) => {
  let boxShadow = 'shadowBorderInput';
  if (disabled) {
    boxShadow = 'shadowBorderInputDisabled';
  } else if (hasError) {
    boxShadow = 'shadowBorderInputError';
  }

  return (
    <Box
      display="flex"
      width="100%"
      backgroundColor={readOnly || disabled ? 'colorBackground' : 'colorBackgroundBody'}
      boxShadow={boxShadow as BoxShadow}
      borderRadius="borderRadius20"
      transition="box-shadow 100ms ease-in"
      cursor={disabled ? 'not-allowed' : 'text'}
      _hover={{
        boxShadow: hasError ? 'shadowBorderInputErrorHover' : 'shadowBorderInputHover',
      }}
      _focusWithin={{
        boxShadow: 'shadowFocus',
      }}
    >
      {children}
    </Box>
  );
};

const Prefix: React.FC = ({children}) => {
  if (children == null) return null;
  return (
    <Box
      display="flex"
      alignItems="center"
      backgroundColor="colorBackground"
      padding="space30"
      borderRightWidth="borderWidth10"
      borderRightColor="colorBorderLight"
      borderRightStyle="solid"
      borderTopLeftRadius="borderRadius20"
      borderBottomLeftRadius="borderRadius20"
    >
      {children}
    </Box>
  );
};

const Suffix: React.FC = ({children}) => {
  if (children == null) return null;
  return (
    <Box
      display="flex"
      alignItems="center"
      backgroundColor="colorBackground"
      padding="space30"
      borderLeftWidth="borderWidth10"
      borderLeftColor="colorBorderLight"
      borderLeftStyle="solid"
      borderTopRightRadius="borderRadius20"
      borderBottomRightRadius="borderRadius20"
    >
      {children}
    </Box>
  );
};

export type FormInputTypes = 'text' | 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel';

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
      <InputWrapper readOnly={readOnly} disabled={disabled} hasError={hasError}>
        <Prefix>{insertBefore}</Prefix>
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
        />
        <Suffix>{insertAfter}</Suffix>
      </InputWrapper>
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
