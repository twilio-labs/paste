import * as React from 'react';

import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import type {TextProps, TextStyleProps} from '@twilio-paste/text';
import type {HTMLPasteProps} from '@twilio-paste/types';

type DisplayHeadingVariants = 'displayHeading10' | 'displayHeading20' | 'displayHeading30';
type AsTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'header';

export interface DisplayHeadingProps
  extends HTMLPasteProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'header'>,
    Pick<TextProps, 'element' | 'display'> {
  as: AsTags;
  id?: string;
  marginBottom?: 'space0';
  variant: DisplayHeadingVariants;
}

const getDisplayHeadingProps = (
  displayHeadingVariant?: DisplayHeadingVariants,
  marginBottom?: 'space0'
): TextStyleProps => {
  switch (displayHeadingVariant) {
    case 'displayHeading10':
      return {
        marginBottom: marginBottom || 'space170',
        fontSize: 'fontSizeDisplay30',
        fontWeight: 'fontWeightExtrabold',
        lineHeight: 'lineHeightDisplay30',
      };
    case 'displayHeading30':
      return {
        marginBottom: marginBottom || 'space90',
        fontSize: 'fontSizeDisplay10',
        fontWeight: 'fontWeightExtrabold',
        lineHeight: 'lineHeightDisplay10',
      };
    case 'displayHeading20':
    default:
      return {
        marginBottom: marginBottom || 'space130',
        fontSize: 'fontSizeDisplay20',
        fontWeight: 'fontWeightExtrabold',
        lineHeight: 'lineHeightDisplay20',
      };
  }
};

const DisplayHeading = React.forwardRef<HTMLHeadingElement, DisplayHeadingProps>(
  ({element = 'DISPLAY_HEADING', as, children, display = 'block', id, marginBottom, variant, ...props}, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        {...getDisplayHeadingProps(variant, marginBottom)}
        as={as}
        display={display}
        element={element}
        id={id}
        color="colorText"
        fontFamily="fontFamilyDisplay"
        variant={variant}
        ref={ref}
      >
        {children}
      </Text>
    );
  }
);

DisplayHeading.displayName = 'DisplayHeading';

export {DisplayHeading};
