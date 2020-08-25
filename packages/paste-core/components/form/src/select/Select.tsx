import * as React from 'react';
import * as PropTypes from 'prop-types';
import {TextColor} from '@twilio-paste/style-props';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {FormControlWrapper} from '../shared/FormControlWrapper';
import {restrictedProps} from '../shared/restricted-attributes';
import {FieldVariants} from '../shared/types';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  hasError?: boolean;
  id: string;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | string[];
  variant?: FieldVariants;
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

export const SelectElement = React.forwardRef<HTMLSelectElement, SelectProps>(({element, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      as="select"
      element={element}
      appearance="none"
      backgroundColor="transparent"
      border="none"
      borderRadius="borderRadius20"
      boxShadow="none"
      color="colorText"
      cursor="pointer"
      display="block"
      fontFamily="inherit"
      fontSize="fontSize30"
      fontWeight="fontWeightNormal"
      lineHeight="lineHeight20"
      outline="none"
      paddingBottom="space30"
      paddingLeft="space40"
      paddingRight="space100"
      paddingTop="space30"
      resize="none"
      width="100%"
      _disabled={{
        color: props.variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeaker',
        cursor: 'not-allowed',
      }}
      ref={ref}
    />
  );
});

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      disabled,
      element = 'FORM_SELECT',
      hasError,
      insertBefore,
      insertAfter,
      children,
      size,
      multiple,
      variant,
      ...props
    },
    ref
  ) => {
    let iconColor = 'colorTextIcon' as TextColor;
    if (disabled) {
      iconColor = 'colorTextWeaker';
    } else if (variant === 'inverse') {
      iconColor = 'colorTextInverseWeak';
    }

    return (
      <FormControlWrapper
        element={`${element}_WRAPPER`}
        disabled={disabled}
        hasError={hasError}
        insertAfter={insertAfter}
        insertBefore={insertBefore}
        variant={variant}
      >
        <Box display="flex" width="100%" position="relative">
          <SelectElement
            aria-invalid={hasError}
            element={element}
            data-not-selectize="true"
            disabled={disabled}
            ref={ref}
            {...props}
            {...restrictedProps}
            multiple={multiple}
            size={multiple ? size : 0}
            variant={variant}
          >
            {children}
          </SelectElement>
          {!multiple && (
            <SelectIconWrapper>
              <ChevronDownIcon aria-hidden="true" decorative color={iconColor} size="sizeIcon30" />
            </SelectIconWrapper>
          )}
        </Box>
      </FormControlWrapper>
    );
  }
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
