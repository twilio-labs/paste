import * as React from 'react';
import {DefaultFieldWrapper} from './DefaultFieldWrapper';
import {InverseFieldWrapper} from './InverseFieldWrapper';
import {FieldWrapperProps, FieldWrapperPropTypes, FieldVariants} from '../shared/types';

const getFieldWrapperComponent = (variant: FieldVariants): React.FC<FieldWrapperProps> => {
  switch (variant) {
    case 'inverse':
      return InverseFieldWrapper;
    default:
      return DefaultFieldWrapper;
  }
};

const FieldWrapper: React.FC<FieldWrapperProps> = ({
  children,
  disabled,
  element,
  hasError,
  readOnly,
  type,
  variant = 'default',
}) => {
  const FieldWrapperComponent = getFieldWrapperComponent(variant);

  return (
    <FieldWrapperComponent
      disabled={disabled}
      element={element}
      hasError={hasError}
      readOnly={readOnly}
      type={type}
      variant={variant}
    >
      {children}
    </FieldWrapperComponent>
  );
};

FieldWrapper.displayName = 'FieldWrapper';

if (process.env.NODE_ENV === 'development') {
  FieldWrapper.propTypes = FieldWrapperPropTypes;
}

export {FieldWrapper};
