import * as React from 'react';
import {DefaultFauxInput} from './DefaultFauxInput';
import {InverseFauxInput} from './InverseFauxInput';
import {FauxInputPropTypes} from '../types';
import type {FauxInputProps} from '../types';

const FauxInputVariants = {
  default: DefaultFauxInput,
  inverse: InverseFauxInput,
};

const FieldWrapper = React.forwardRef<HTMLDivElement, FauxInputProps>(
  ({children, disabled, hasError, readOnly, type, variant = 'default'}, ref) => {
    const FieldWrapperComponent = FauxInputVariants[variant];

    return (
      <FieldWrapperComponent
        disabled={disabled}
        hasError={hasError}
        readOnly={readOnly}
        type={type}
        variant={variant}
        ref={ref}
      >
        {children}
      </FieldWrapperComponent>
    );
  }
);

FieldWrapper.displayName = 'FieldWrapper';

if (process.env.NODE_ENV === 'development') {
  FieldWrapper.propTypes = FauxInputPropTypes;
}

export {FieldWrapper};
