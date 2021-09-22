import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {TextColor} from '@twilio-paste/style-props';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {InputBox, InputChevronWrapper} from '@twilio-paste/input-box';
import type {Variants, Element} from './types';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: NonNullable<React.ReactNode>;
  hasError?: boolean;
  element?: Element;
  id?: string;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | string[];
  variant?: Variants;
}

export const SelectElement = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({element = 'SELECT_ELEMENT', variant, size, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        as="select"
        ref={ref}
        size={size}
        // ensure height is reset after size, so that size doesn't set a css height via the style prop.
        // We want the size attribute on the HTML element to set the height, not the css
        height={undefined}
        appearance="none"
        background="none"
        border="none"
        borderRadius="borderRadius20"
        boxShadow="none"
        color="inherit"
        cursor="pointer"
        display="block"
        fontFamily="inherit"
        fontSize="fontSize30"
        fontWeight="fontWeightMedium"
        lineHeight="lineHeight20"
        margin="space0"
        outline="none"
        paddingBottom="space30"
        paddingLeft="space40"
        paddingRight="space100"
        paddingTop="space30"
        resize="none"
        width="100%"
        _disabled={{
          color: variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeaker',
          cursor: 'not-allowed',
        }}
        variant={variant}
      />
    );
  }
);

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {disabled, element = 'SELECT', hasError, insertBefore, insertAfter, children, size, multiple, variant, ...props},
    ref
  ) => {
    let iconColor = 'colorTextIcon' as TextColor;
    if (disabled) {
      iconColor = 'colorTextWeaker';
    } else if (variant === 'inverse') {
      iconColor = 'colorTextInverseWeak';
    }

    return (
      <InputBox
        disabled={disabled}
        element={element}
        hasError={hasError}
        insertAfter={insertAfter}
        insertBefore={insertBefore}
        variant={variant}
      >
        <Box display="flex" width="100%" position="relative">
          <SelectElement
            aria-invalid={hasError}
            data-not-selectize="true"
            disabled={disabled}
            ref={ref}
            element={`${element}_ELEMENT`}
            {...props}
            multiple={multiple}
            size={multiple ? size : 0}
            variant={variant}
          >
            {children}
          </SelectElement>
          {!multiple && (
            <InputChevronWrapper element={`${element}_CHEVRON_WRAPPER`}>
              <ChevronDownIcon
                aria-hidden="true"
                decorative
                element={`${element}_ICON`}
                color={iconColor}
                size="sizeIcon30"
              />
            </InputChevronWrapper>
          )}
        </Box>
      </InputBox>
    );
  }
);

Select.displayName = 'Select';

if (process.env.NODE_ENV === 'development') {
  Select.propTypes = {
    id: PropTypes.string,
    hasError: PropTypes.bool,
    onChange: PropTypes.func,
    element: PropTypes.string,
  };
}

export {Select};
