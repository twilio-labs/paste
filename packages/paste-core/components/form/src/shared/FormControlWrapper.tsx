import * as React from 'react';
import * as PropTypes from 'prop-types';
import {FieldWrapper} from './FieldWrapper';
import {Prefix} from './Prefix';
import {Suffix} from './Suffix';
import {FormInputTypes} from './types';
import {restrictedProps} from './restricted-attributes';

interface FormControlWrapperProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  hasError?: boolean;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  readOnly?: boolean;
  type?: FormInputTypes;
}

const FormControlWrapper: React.FC<FormControlWrapperProps> = ({
  children,
  disabled,
  hasError,
  insertAfter,
  insertBefore,
  readOnly,
  type,
  ...props
}) => (
  <FieldWrapper disabled={disabled} hasError={hasError} readOnly={readOnly} type={type} {...props} {...restrictedProps}>
    {insertBefore && <Prefix>{insertBefore}</Prefix>}
    {children}
    {insertAfter && <Suffix>{insertAfter}</Suffix>}
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
  };
}

export {FormControlWrapper};
