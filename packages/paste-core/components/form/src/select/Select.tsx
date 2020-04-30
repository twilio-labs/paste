import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {Box} from '@twilio-paste/box';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Prefix} from '../shared/Prefix';
import {Suffix} from '../shared/Suffix';
import {FieldWrapper} from '../shared/FieldWrapper';
import {restrictedProps} from '../shared/restricted-attributes';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  insertBefore?: React.ReactNode;
  insertAfter?: React.ReactNode;
  hasError?: boolean;
  value: string | string[];
  children: NonNullable<React.ReactNode>;
}

const SelectIconWrapper: React.FC<{children: React.ReactNode}> = ({children}) => (
  <Box
    alignItems="center"
    display="inline-flex"
    position="absolute"
    pointerEvents="none"
    right="space40"
    top="50%"
    transform="translateY(-50%)"
    zIndex="zIndex10"
  >
    {children}
  </Box>
);

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
  ({disabled, hasError, insertBefore, insertAfter, children, size, multiple, ...props}, ref) => (
    <FieldWrapper disabled={disabled} hasError={hasError}>
      {insertBefore && <Prefix>{insertBefore}</Prefix>}
      <Box display="flex" width="100%" position="relative">
        <SelectElement
          aria-invalid={hasError}
          ref={ref}
          multiple={multiple}
          disabled={disabled}
          {...props}
          {...restrictedProps}
          size={multiple ? size : 0}
        >
          {children}
        </SelectElement>
        {!multiple && (
          <SelectIconWrapper>
            <ChevronDownIcon size="sizeIcon30" decorative aria-hidden="true" />
          </SelectIconWrapper>
        )}
      </Box>
      {insertAfter && <Suffix>{insertAfter}</Suffix>}
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
