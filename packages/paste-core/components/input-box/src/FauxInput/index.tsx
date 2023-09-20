import * as React from 'react';

import {DefaultFauxInput} from './DefaultFauxInput';
import {InverseFauxInput} from './InverseFauxInput';
import type {FauxInputProps} from '../types';

const FauxInputVariants = {
  default: DefaultFauxInput,
  inverse: InverseFauxInput,
};

const FieldWrapper = React.forwardRef<HTMLDivElement, FauxInputProps>(
  ({children, disabled, element, hasError, readOnly, type, variant = 'default'}, ref) => {
    const FieldWrapperComponent = FauxInputVariants[variant];

    return (
      <FieldWrapperComponent
        disabled={disabled}
        element={element}
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

export {FieldWrapper};
