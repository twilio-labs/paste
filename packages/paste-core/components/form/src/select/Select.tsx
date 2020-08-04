import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {FormControlWrapper} from '../shared/FormControlWrapper';
import {restrictedProps} from '../shared/restricted-attributes';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: NonNullable<React.ReactNode>;
  hasError?: boolean;
  id: string;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | string[];
}

export const SelectIconWrapper: React.FC<{children: React.ReactNode}> = ({children}) => (
  <Box
    alignItems="center"
    display="inline-flex"
    position="absolute"
    pointerEvents="none"
    right="space30"
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
    background: 'transparent',
    border: 'none',
    borderRadius: 'borderRadius20',
    boxShadow: 'none',
    color: 'colorText',
    cursor: 'pointer',
    display: 'block',
    fontFamily: 'inherit',
    fontSize: 'fontSize30',
    fontWeight: 'fontWeightNormal',
    lineHeight: 'lineHeight20',
    outline: 'none',
    paddingBottom: 'space30',
    paddingLeft: 'space40',
    paddingRight: 'space100',
    paddingTop: 'space30',
    resize: 'none',
    width: '100%',

    '&:disabled': {
      color: 'colorTextWeaker',
      cursor: 'not-allowed',
    },
  })
);

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({disabled, hasError, insertBefore, insertAfter, children, size, multiple, ...props}, ref) => (
    <FormControlWrapper disabled={disabled} hasError={hasError} insertAfter={insertAfter} insertBefore={insertBefore}>
      <Box display="flex" width="100%" position="relative">
        <SelectElement
          aria-invalid={hasError}
          ref={ref}
          multiple={multiple}
          disabled={disabled}
          {...props}
          {...restrictedProps}
          size={multiple ? size : 0}
          data-not-selectize="true"
        >
          {children}
        </SelectElement>
        {!multiple && (
          <SelectIconWrapper>
            <ChevronDownIcon
              color={disabled ? 'colorTextWeaker' : 'colorTextIcon'}
              size="sizeIcon30"
              decorative
              aria-hidden="true"
            />
          </SelectIconWrapper>
        )}
      </Box>
    </FormControlWrapper>
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
