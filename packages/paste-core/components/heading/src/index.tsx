import * as React from 'react';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import {HeadingVariants, HeadingProps, asTags} from './types';
import {HeadingPropTypes} from './PropTypes';

function getHeadingProps(headingVariant?: HeadingVariants, marginBottom?: 'space0'): {} {
  switch (headingVariant) {
    case 'heading10':
      return {
        marginBottom: marginBottom || 'space70',
        fontSize: 'fontSize90',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight90',
      };
    case 'heading30':
      return {
        marginBottom: marginBottom || 'space50',
        fontSize: 'fontSize60',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight60',
      };
    case 'heading40':
      return {
        marginBottom: marginBottom || 'space40',
        fontSize: 'fontSize40',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight40',
      };
    case 'heading50':
      return {
        marginBottom: marginBottom || 'space30',
        fontSize: 'fontSize30',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight30',
      };
    case 'heading60':
      return {
        marginBottom: marginBottom || 'space30',
        fontSize: 'fontSize20',
        fontWeight: 'fontWeightSemibold',
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
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight70',
      };
  }
}

const Heading: React.FC<HeadingProps> = ({as, children, id, marginBottom, variant, ...props}) => {
  return (
    <Text
      element="HEADING"
      {...safelySpreadTextProps(props)}
      {...getHeadingProps(variant, marginBottom)}
      as={as}
      display="block"
      id={id}
      color="colorText"
      variant={variant}
    >
      {children}
    </Text>
  );
};
Heading.displayName = 'Heading';

if (process.env.NODE_ENV === 'development') {
  Heading.propTypes = HeadingPropTypes;
}

export {Heading, HeadingProps, HeadingPropTypes, HeadingVariants, asTags};
