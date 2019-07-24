import * as React from 'react';
import {Text} from '@twilio-paste/text';

export type asTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label';
export type HeadingStyle =
  | 'headingStyle10'
  | 'headingStyle20'
  | 'headingStyle30'
  | 'headingStyle40'
  | 'headingStyle50'
  | 'headingStyle60';

interface HeadingProps {
  as: asTags;
  headingStyle?: HeadingStyle;
}

function getHeadingStyles(headingStyle?: HeadingStyle): {} {
  switch (headingStyle) {
    case 'headingStyle60':
      return {
        fontSize: 'fontSize90',
        fontWeight: 'fontWeightNormal',
        lineHeight: 'lineHeight70',
      };
    case 'headingStyle50':
      return {
        fontSize: 'fontSize80',
        fontWeight: 'fontWeightNormal',
        lineHeight: 'lineHeight40',
      };
    case 'headingStyle40':
      return {
        fontSize: 'fontSize70',
        fontWeight: 'fontWeightSemiBold',
        lineHeight: 'lineHeight40',
      };
    case 'headingStyle30':
      return {
        fontSize: 'fontSize60',
        fontWeight: 'fontWeightSemiBold',
        lineHeight: 'lineHeight30',
      };
    case 'headingStyle20':
      return {
        fontSize: 'fontSize50',
        fontWeight: 'fontWeightSemiBold',
        lineHeight: 'lineHeight30',
      };
    case 'headingStyle10':
      return {
        fontSize: 'fontSize30',
        fontWeight: 'fontWeightSemiBold',
        lineHeight: 'lineHeight20',
      };
    default:
      return {
        fontSize: 'fontSize80',
        lineHeight: 'lineHeight40',
      };
  }
}

const Heading: React.FC<HeadingProps> = ({as, headingStyle, children}) => (
  <Text as={as} textColor="colorText" {...getHeadingStyles(headingStyle)}>
    {children}
  </Text>
);

Heading.defaultProps = {
  as: 'h2',
  headingStyle: 'headingStyle60',
};

export {Heading};
