import * as React from 'react';
import {useTheme} from '@twilio-paste/theme';
import type {BorderRadius} from '@twilio-paste/style-props';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Heading, HeadingPropTypes} from '@twilio-paste/heading';
import {ChevronDisclosureExpandedIcon} from '@twilio-paste/icons/esm/ChevronDisclosureExpandedIcon';
import {DisclosurePrimitive} from '@twilio-paste/disclosure-primitive';

import {DisclosureContext} from './DisclosureContext';
import type {DisclosureHeadingProps, StyledDisclosureHeadingProps} from './types';
import {useHover, getIconHoverStyles} from './utils';
import {IconSizeFromHeading} from './constants';

const StyledDisclosureHeading = React.forwardRef<HTMLDivElement, StyledDisclosureHeadingProps>(
  (
    {children, element, marginBottom, renderAs, disclosureVariant, customDisabled, customFocusable, variant, ...props},
    ref
  ) => {
    const theme = useTheme();
    const hoverRef = React.useRef(null);
    const isHovered = useHover(hoverRef);

    let bottomBorderRadius = 'borderRadius20' as BorderRadius;
    if (disclosureVariant === 'contained') {
      bottomBorderRadius = 'borderRadius10';
    }
    if (disclosureVariant === 'contained' && props['aria-expanded']) {
      bottomBorderRadius = 'borderRadius0';
    }

    return (
      <Heading as={renderAs} marginBottom="space0" variant={variant} ref={ref}>
        <Box
          {...safelySpreadBoxProps(props)}
          as="div"
          backgroundColor={props['aria-expanded'] ? 'colorBackground' : 'colorBackgroundBody'}
          borderRadius={disclosureVariant === 'contained' ? 'borderRadius10' : 'borderRadius20'}
          borderBottomLeftRadius={bottomBorderRadius}
          borderBottomRightRadius={bottomBorderRadius}
          cursor="pointer"
          display="flex"
          element={element}
          outline="none"
          padding="space30"
          position="relative"
          ref={hoverRef}
          role="button"
          zIndex="zIndex10"
          transition="background-color 100ms ease-out"
          _hover={{
            backgroundColor: 'colorBackgroundStrong',
          }}
          _focus={{
            boxShadow: 'shadowFocus',
          }}
          _disabled={{
            backgroundColor: props['aria-expanded'] ? 'colorBackground' : 'colorBackgroundBody',
            color: 'colorTextWeak',
            cursor: 'not-allowed',
          }}
        >
          <Box
            as="span"
            element={`${element}_ICON`}
            display="flex"
            height={IconSizeFromHeading[variant] || 'sizeIcon20'}
            width={IconSizeFromHeading[variant] || 'sizeIcon20'}
            {...getIconHoverStyles(isHovered, variant, props[`aria-expanded`], props[`aria-disabled`], theme.space)}
          >
            <ChevronDisclosureExpandedIcon
              color="inherit"
              decorative
              size={IconSizeFromHeading[variant] || 'sizeIcon20'}
            />
          </Box>
          {children}
        </Box>
      </Heading>
    );
  }
);

StyledDisclosureHeading.displayName = 'StyledDisclosureHeading';

const DisclosureHeading: React.FC<React.PropsWithChildren<DisclosureHeadingProps>> = ({
  children,
  as,
  element = 'DISCLOSURE_HEADING',
  disabled,
  focusable,
  ...props
}) => {
  const {disclosure, variant} = React.useContext(DisclosureContext);
  return (
    <DisclosurePrimitive
      {...disclosure}
      {...props}
      as={StyledDisclosureHeading}
      customDisabled={disabled}
      customFocusable={focusable}
      disabled={disabled}
      disclosureVariant={variant}
      element={element}
      focusable={focusable}
      renderAs={as}
    >
      {children}
    </DisclosurePrimitive>
  );
};

DisclosureHeading.displayName = 'DisclosureHeading';

if (process.env.NODE_ENV === 'development') {
  DisclosureHeading.propTypes = HeadingPropTypes;
}

export {DisclosureHeading};
