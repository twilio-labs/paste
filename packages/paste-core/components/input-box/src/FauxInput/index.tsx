import * as React from 'react';
import {DefaultFauxInput} from './DefaultFauxInput';
import {InverseFauxInput} from './InverseFauxInput';
import {FauxInputProps, FauxInputPropTypes} from '../types';

const FauxInputVariants = {
  default: DefaultFauxInput,
  inverse: InverseFauxInput,
};

const FieldWrapper: React.FC<FauxInputProps> = ({
  children,
  disabled,
  hasError,
  readOnly,
  type,
  variant = 'default',
}) => {
  const FieldWrapperComponent = FauxInputVariants[variant];

  return (
    <FieldWrapperComponent disabled={disabled} hasError={hasError} readOnly={readOnly} type={type} variant={variant}>
      {children}
    </FieldWrapperComponent>
  );
};

FieldWrapper.displayName = 'FieldWrapper';

if (process.env.NODE_ENV === 'development') {
  FieldWrapper.propTypes = FauxInputPropTypes;
}

export {FieldWrapper};
