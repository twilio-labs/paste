import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text} from '@twilio-paste/text';

export type asTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label' | 'span';
export type HeadingVariants = 'heading10' | 'heading20' | 'heading30' | 'heading40' | 'heading50' | 'heading60';

interface Heading {
  as: asTags;
  id?: string;
  className?: never;
  variant?: HeadingVariants;
}

function getHeadingProps(headingVariant?: HeadingVariants): {} {
  switch (headingVariant) {
    case 'heading10':
      return {
        marginBottom: 'space70',
        fontSize: 'fontSize90',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight90',
      };
    case 'heading30':
      return {
        marginBottom: 'space50',
        fontSize: 'fontSize60',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight60',
      };
    case 'heading40':
      return {
        marginBottom: 'space40',
        fontSize: 'fontSize40',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight40',
      };
    case 'heading50':
      return {
        marginBottom: 'space30',
        fontSize: 'fontSize30',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight30',
      };
    case 'heading60':
      return {
        marginBottom: 'space30',
        fontSize: 'fontSize20',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight20',
      };
    /**
     * heading50 is out of order because its also default.
     * Default is at the bottom of switch statement for readability.
     */
    case 'heading20':
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
    <Text {...getHeadingProps(variant)} as={as} display="block" id={id} textColor="colorText">
      {children}
    </Text>
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'label', 'span'] as asTags[]).isRequired,
  variant: PropTypes.oneOf(['heading10', 'heading20', 'heading30', 'heading40', 'heading50', 'heading60']),
};

Heading.defaultProps = {
  variant: 'heading20',
};

Heading.displayName = 'Heading';
export {Heading};
