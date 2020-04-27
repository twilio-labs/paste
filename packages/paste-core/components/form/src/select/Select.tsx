import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import ChevronDown from '@twilio-paste/icons/svg/ChevronDown.svg'; // could be TS not rec. file type
import {Prefix} from '../shared/Prefix';
import {Suffix} from '../shared/Suffix';
import {FieldWrapper} from '../shared/FieldWrapper';
import {safelySpreadFormControlProps} from '../shared/Utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  onChange: (event: React.SyntheticEvent) => void;
  insertBefore?: React.ReactNode;
  insertAfter?: React.ReactNode;
  hasError?: boolean;
}

const SelectElement = styled.select(({multiple}) =>
  css({
    appearance: 'none',
    border: 'none',
    background: 'transparent',
    backgroundImage: multiple ? 'none' : `url(${ChevronDown});`,
    backgroundColor: 'inherit',
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
  ({disabled, hasError, insertBefore, insertAfter, children, ...props}, ref) => (
    <FieldWrapper disabled={disabled} hasError={hasError}>
      {insertBefore && <Prefix>{insertBefore}</Prefix>}
      <SelectElement aria-invalid={hasError} ref={ref} {...safelySpreadFormControlProps(props)}>
        {children}
      </SelectElement>
      {insertAfter && <Suffix>{insertAfter}</Suffix>}
    </FieldWrapper>
  )
);

Select.displayName = 'Select';

if (process.env.NODE_ENV === 'development') {
  Select.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    hasError: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };
}

export {Select};
