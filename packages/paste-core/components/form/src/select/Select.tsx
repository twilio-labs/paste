import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import ChevronDown from '@twilio-paste/icons/svg/ChevronDown.svg';
import {SelectInputType} from './types';
import {Prefix} from '../shared/Prefix';
import {Suffix} from '../shared/Suffix';
import {FieldWrapper} from '../shared/FieldWrapper';
import {safelySpreadFormControlProps} from '../shared/Utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  className?: never;
  // from brief AC specifications
  // technically provided by extending HTMLSelectElement
  disabled?: boolean;
  required?: boolean;
  value?: string; // returns empty string by default if no value is selected
  type?: SelectInputType;
  helpText?: string; // not sure if this one is needed...
  options?: HTMLOptionsCollection;
  label?: string;
  insertBefore?: React.ReactNode;
  insertAfter?: React.ReactNode;
  hasError?: boolean;
  // default value: set on option, or set on select through initial value?
}

// multiple hide the background for the chevron icon
// DRAFT githib pr tool

const SelectElement = styled.select(({multiple}) =>
    css({
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      backgroundImage: multiple ? 'none' : `url(${ChevronDown});`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      outline: 'none',
      resize: 'none',
      display: 'block',
      width: '100%',
      fontFamily: 'inherit',
      fontSize: 'fontSize30',
      lineHeight: 'lineHeight30',
      fontWeight: 'fontWeightNormal',
      color: 'colorText',
      paddingTop: 'space30',
      paddingRight: 'space40',
      paddingBottom: 'space30',
      paddingLeft: 'space40',
      borderRadius: 'borderRadius20',
      boxShadow: 'none',
  
      '&:disabled': {
        cursor: 'not-allowed',
        color: 'colorTextWeak',
      },
  
    })
  );

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({id, type, name, value, placeholder, disabled, required, hasError, insertBefore, insertAfter, ...props}, ref) => {
    const {children, multiple} = props; // @TODO add type for children
    // also probably need to do some children validation.
    // also TODO: "size" must be declared with "multiple"
    return (
      <FieldWrapper disabled={disabled} hasError={hasError}>
        {insertBefore && <Prefix>{insertBefore}</Prefix>}
        <SelectElement
          aria-invalid={hasError}
          {...safelySpreadFormControlProps(props)}
          ref={ref}
          id={id}
          value={value}
          disabled={disabled}
          required={required}
          multiple={multiple}
        >
          {children}
        </SelectElement>
        {insertAfter && <Suffix>{insertAfter}</Suffix>}
      </FieldWrapper>
    );
  }
);

Select.displayName = 'Select';

if (process.env.NODE_ENV === 'development') {
  Select.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    hasError: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };
}

export {Select};
