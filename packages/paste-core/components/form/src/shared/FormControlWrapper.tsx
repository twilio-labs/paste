import * as React from 'react';
import * as PropTypes from 'prop-types';
import {FieldWrapper} from '../fieldwrapper/FieldWrapper';
import {Prefix} from './Prefix';
import {Suffix} from './Suffix';
import {FormInputTypes, FieldVariants} from './types';
import {restrictedProps} from './restricted-attributes';

interface FormControlWrapperProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  hasError?: boolean;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  readOnly?: boolean;
  type?: FormInputTypes;
  variant?: FieldVariants;
}

const FormControlWrapper: React.FC<FormControlWrapperProps> = ({
  children,
  disabled,
  hasError,
  insertAfter,
  insertBefore,
  readOnly,
  type,
  variant,
  ...props
}) => (
  <FieldWrapper
    disabled={disabled}
    hasError={hasError}
    readOnly={readOnly}
    type={type}
    variant={variant}
    {...props}
    {...restrictedProps}
  >
    {insertBefore && (
      <Prefix disabled={disabled} variant={variant}>
        {insertBefore}
      </Prefix>
    )}
    {children}
    {insertAfter && (
      <Suffix disabled={disabled} variant={variant}>
        {insertAfter}
      </Suffix>
    )}
  </FieldWrapper>
);

FormControlWrapper.displayName = 'FormControlWrapper';

if (process.env.NODE_ENV === 'development') {
  FormControlWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    insertAfter: PropTypes.node,
    insertBefore: PropTypes.node,
    readOnly: PropTypes.bool,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel']) as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variant: PropTypes.oneOf(['default', 'inverse']) as any,
  };
}

export {FormControlWrapper};
