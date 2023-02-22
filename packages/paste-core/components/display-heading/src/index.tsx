import * as React from 'react';
import PropTypes from 'prop-types';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import type {TextProps, TextStyleProps} from '@twilio-paste/text';

type DisplayHeadingVariants = 'displayHeading10' | 'displayHeading20' | 'displayHeading30';
type AsTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'header';

export interface DisplayHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Pick<TextProps, 'element' | 'display'> {
  as: AsTags;
  className?: never;
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
        letterSpacing="0.04em"
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

DisplayHeading.propTypes = {
  element: PropTypes.string,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span'] as AsTags[]).isRequired,
  marginBottom: PropTypes.oneOf(['space0']) as PropTypes.Validator<'space0' | null | undefined> | undefined,
  variant: PropTypes.oneOf(['displayHeading10', 'displayHeading20', 'displayHeading30'] as DisplayHeadingVariants[])
    .isRequired,
  display: PropTypes.string,
};

export {DisplayHeading};
