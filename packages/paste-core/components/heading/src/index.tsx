import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text} from '@twilio-paste/text';

export type asTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label' | 'span';
export type HeadingStyle =
  | 'headingStyle10'
  | 'headingStyle20'
  | 'headingStyle30'
  | 'headingStyle40'
  | 'headingStyle50'
  | 'headingStyle60';

interface Heading {
  as: asTags;
  id?: string;
  className?: never;
  variant?: HeadingStyle;
}

function getHeadingStyles(headingStyle?: HeadingStyle): {} {
  switch (headingStyle) {
    case 'headingStyle60':
      return {
        marginBottom: 'space70',
        fontSize: 'fontSize90',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight90',
      };
    case 'headingStyle40':
      return {
        marginBottom: 'space50',
        fontSize: 'fontSize60',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight60',
      };
    case 'headingStyle30':
      return {
        marginBottom: 'space40',
        fontSize: 'fontSize40',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight40',
      };
    case 'headingStyle20':
      return {
        marginBottom: 'space30',
        fontSize: 'fontSize30',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight30',
      };
    case 'headingStyle10':
      return {
        marginBottom: 'space30',
        fontSize: 'fontSize20',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight20',
      };
    /**
     * headingStyle50 is out of order because its also default.
     * Default is at the bottom of switch statement for readability.
     */
    case 'headingStyle50':
    default:
      return {
        marginBottom: 'space60',
        fontSize: 'fontSize70',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight70',
      };
  }
}

const Heading: React.FC<Heading> = ({as, children, id, variant}) => {
  return (
    <Text as={as} display="block" id={id} textColor="colorText" {...getHeadingStyles(variant)}>
      {children}
    </Text>
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'label', 'span'] as asTags[]).isRequired,
  variant: PropTypes.oneOf([
    'headingStyle60',
    'headingStyle50',
    'headingStyle40',
    'headingStyle30',
    'headingStyle20',
    'headingStyle10',
  ]),
};

Heading.defaultProps = {
  variant: 'headingStyle50',
};

Heading.displayName = 'Heading';
export {Heading};
