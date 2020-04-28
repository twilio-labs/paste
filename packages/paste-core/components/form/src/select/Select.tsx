import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {Box} from '@twilio-paste/box';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Prefix} from '../shared/Prefix';
import {Suffix} from '../shared/Suffix';
import {FieldWrapper} from '../shared/FieldWrapper';
import {safelySpreadFormControlProps} from '../shared/Utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  insertBefore?: React.ReactNode;
  insertAfter?: React.ReactNode;
  hasError?: boolean;
  value: string | string[];
}

export interface SelectIconWrapperProps {
  ref?: string;
}

const SelectIconWrapper = React.forwardRef<HTMLSelectElement, SelectIconWrapperProps>((props, ref) => (
  <Box
    paddingTop="space30"
    paddingRight="space30"
    position="absolute"
    display="inline-flex"
    alignItems="center"
    pointerEvents="none"
    right="space30"
    zIndex={'zIndex10'}
    ref={ref}
    {...props}
  />
));

const SelectElement = styled.select(
  css({
    appearance: 'none',
    border: 'none',
    background: 'transparent',
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
  ({disabled, hasError, insertBefore, insertAfter, children, size, ...props}, ref) => (
    <FieldWrapper disabled={disabled} hasError={hasError}>
      {insertBefore && <Prefix>{insertBefore}</Prefix>}
      <SelectElement
        aria-invalid={hasError}
        ref={ref}
        size={props.multiple ? size : 0}
        autoFocus={!!props.autoFocus}
        {...safelySpreadFormControlProps(props)}
      >
        {children}
      </SelectElement>
      {insertAfter && <Suffix>{insertAfter}</Suffix>}
      <SelectIconWrapper>
        <ChevronDownIcon decorative aria-hidden="true" />
      </SelectIconWrapper>
    </FieldWrapper>
  )
);

Select.displayName = 'Select';

if (process.env.NODE_ENV === 'development') {
  Select.propTypes = {
    id: PropTypes.string.isRequired,
    hasError: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };
}

export {Select};
