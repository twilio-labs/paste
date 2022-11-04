import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {asTags as AsTags} from '@twilio-paste/heading';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import type {TextProps, TextStyleProps} from '@twilio-paste/text';

type DisplayHeadingVariants = 'displayHeading10' | 'displayHeading20' | 'displayHeading30';

export interface DisplayHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Pick<TextProps, 'element' | 'display'> {
  as: AsTags; // omit label
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
        marginBottom: marginBottom || 'space70',
        fontSize: 'fontSize120',
        fontWeight: 'fontWeightExtraBold',
        lineHeight: 'lineHeight120',
      };
    case 'displayHeading20':
      return {
        marginBottom: marginBottom || 'space60',
        fontSize: 'fontSize110',
        fontWeight: 'fontWeightExtraBold',
        lineHeight: 'lineHeight105',
      };
    case 'displayHeading30':
    default:
      return {
        marginBottom: marginBottom || 'space50',
        fontSize: 'fontSize90',
        fontWeight: 'fontWeightExtraBold',
        lineHeight: 'lineHeight80',
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
