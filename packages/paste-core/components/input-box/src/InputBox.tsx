import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {FieldWrapper} from './FauxInput';
import {Prefix} from './Prefix';
import {Suffix} from './Suffix';
import type {InputBoxTypes, Variants} from './types';

export interface InputBoxProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  // Requiring element here instead of extending directly from BoxProps.
  // This ensures an element prop is always passed on these composite components.
  element: BoxProps['element'];
  hasError?: boolean;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  readOnly?: boolean;
  type?: InputBoxTypes;
  variant?: Variants;
}

const InputBox = React.forwardRef<HTMLDivElement, InputBoxProps>(
  (
    {children, disabled, element = 'INPUT_BOX', hasError, insertAfter, insertBefore, readOnly, type, variant, ...props},
    ref
  ) => (
    <FieldWrapper
      disabled={disabled}
      element={element}
      hasError={hasError}
      readOnly={readOnly}
      type={type}
      variant={variant}
      ref={ref}
      {...props}
    >
      {insertBefore && (
        <Prefix disabled={disabled} element={element} variant={variant}>
          {insertBefore}
        </Prefix>
      )}
      {children}
      {insertAfter && (
        <Suffix disabled={disabled} element={element} variant={variant}>
          {insertAfter}
        </Suffix>
      )}
    </FieldWrapper>
  )
);

InputBox.displayName = 'InputBox';

InputBox.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  insertAfter: PropTypes.node,
  insertBefore: PropTypes.node,
  readOnly: PropTypes.bool,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel', 'date', 'time']) as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
};

export {InputBox};
