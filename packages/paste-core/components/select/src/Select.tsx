import * as React from 'react';

import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {InputBox, InputChevronWrapper, getInputChevronIconColor} from '@twilio-paste/input-box';
import type {HTMLPasteProps} from '@twilio-paste/types';

import type {Variants, Element} from './types';

export interface SelectProps extends HTMLPasteProps<'select'> {
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
        /*
         * ensure height is reset after size, so that size doesn't set a css height via the style prop.
         * We want the size attribute on the HTML element to set the height, not the css
         */
        height={undefined}
        appearance="none"
        // must set a solid color to inherit in options for Windows
        backgroundColor={variant === 'inverse' ? 'colorBackgroundInverse' : 'colorBackgroundBody'}
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
          color: variant === 'inverse' ? 'colorTextInverseWeakest' : 'colorTextWeaker',
          cursor: 'not-allowed',
          opacity: 1,
        }}
        variant={variant}
      />
    );
  }
);

SelectElement.displayName = 'SelectElement';

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      disabled,
      element = 'SELECT',
      hasError,
      insertBefore,
      insertAfter,
      children,
      size,
      multiple,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const [showOptions, setShowOptions] = React.useState(false);
    React.useEffect(() => {
      setShowOptions(true);
    }, []);

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
            {showOptions && children}
          </SelectElement>
          {!multiple && (
            <InputChevronWrapper element={`${element}_CHEVRON_WRAPPER`}>
              <ChevronDownIcon
                aria-hidden="true"
                decorative
                element={`${element}_ICON`}
                color={getInputChevronIconColor(variant, disabled, false)}
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

export {Select};
