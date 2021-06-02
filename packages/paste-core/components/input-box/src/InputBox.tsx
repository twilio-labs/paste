import * as React from 'react';
import * as PropTypes from 'prop-types';
import {FieldWrapper} from './FauxInput';
import {Prefix} from './Prefix';
import {Suffix} from './Suffix';
import {InputTypes, Variants} from './types';

export interface InputBoxProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  hasError?: boolean;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  readOnly?: boolean;
  type?: InputTypes;
  variant?: Variants;
}

const InputBox = React.forwardRef<HTMLDivElement, InputBoxProps>(
  ({children, disabled, hasError, insertAfter, insertBefore, readOnly, type, variant, ...props}, ref) => (
    <FieldWrapper
      disabled={disabled}
      hasError={hasError}
      readOnly={readOnly}
      type={type}
      variant={variant}
      ref={ref}
      {...props}
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
  )
);

InputBox.displayName = 'InputBox';

if (process.env.NODE_ENV === 'development') {
  InputBox.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    insertAfter: PropTypes.node,
    insertBefore: PropTypes.node,
    readOnly: PropTypes.bool,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel', 'date']) as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variant: PropTypes.oneOf(['default', 'inverse']) as any,
  };
}

export {InputBox};
