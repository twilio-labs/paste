import * as React from 'react';
import {Text, TextStyleProps, safelySpreadTextProps} from '@twilio-paste/text';
import {HeadingVariants, HeadingProps, AsTags} from './types';
import {HeadingPropTypes} from './PropTypes';

function getHeadingProps(headingVariant?: HeadingVariants, marginBottom?: 'space0'): TextStyleProps {
  switch (headingVariant) {
    case 'heading10':
      return {
        marginBottom: marginBottom || 'space70',
        fontSize: 'fontSize90',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight90',
      };
    case 'heading30':
      return {
        marginBottom: marginBottom || 'space50',
        fontSize: 'fontSize60',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight60',
      };
    case 'heading40':
      return {
        marginBottom: marginBottom || 'space40',
        fontSize: 'fontSize40',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight40',
      };
    case 'heading50':
      return {
        marginBottom: marginBottom || 'space30',
        fontSize: 'fontSize30',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight30',
      };
    case 'heading60':
      return {
        marginBottom: marginBottom || 'space30',
        fontSize: 'fontSize20',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight20',
      };
    /**
     * heading20 is out of order because its also default.
     * Default is at the bottom of switch statement for readability.
     */
    case 'heading20':
    default:
      return {
        marginBottom: marginBottom || 'space60',
        fontSize: 'fontSize70',
        fontWeight: 'fontWeightBold',
        lineHeight: 'lineHeight70',
      };
  }
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({as, children, id, marginBottom, variant, ...props}, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        {...getHeadingProps(variant, marginBottom)}
        as={as}
        display="block"
        id={id}
        color="colorText"
        ref={ref}
      >
        {children}
      </Text>
    );
  }
);
Heading.displayName = 'Heading';

if (process.env.NODE_ENV === 'development') {
  Heading.propTypes = HeadingPropTypes;
}

export {Heading, HeadingProps, HeadingPropTypes, HeadingVariants, AsTags as asTags};
