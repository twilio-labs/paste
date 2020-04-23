import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';

export type asTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label' | 'span' | 'header';
export type HeadingVariants = 'heading10' | 'heading20' | 'heading30' | 'heading40' | 'heading50' | 'heading60';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: asTags;
  className?: never;
  id?: string;
  marginBottom?: 'space0';
  variant: HeadingVariants;
}

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
      {...safelySpreadTextProps(props)}
      {...getHeadingProps(variant, marginBottom)}
      as={as}
      display="block"
      id={id}
      color="colorText"
    >
      {children}
    </Text>
  );
};
Heading.displayName = 'Heading';

if (process.env.NODE_ENV === 'development') {
  Heading.propTypes = {
    as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'label', 'span'] as asTags[]).isRequired,
    marginBottom: PropTypes.oneOf(['space0']),
    variant: PropTypes.oneOf([
      'heading10',
      'heading20',
      'heading30',
      'heading40',
      'heading50',
      'heading60',
    ] as HeadingVariants[]).isRequired,
  };
}

export {Heading};
