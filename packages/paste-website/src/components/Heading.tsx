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

export interface HeadingProps {
  as: asTags;
  headingStyle?: HeadingStyle;
}

function getHeadingStyles(headingStyle?: HeadingStyle): {} {
  switch (headingStyle) {
    case 'headingStyle60':
      return {
        my: 'space60',
        fontSize: 'fontSize20',
        lineHeight: 'lineHeight20',
        fontWeight: 'fontWeightSemibold',
      };
    case 'headingStyle50':
      return {
        my: 'space60',
        fontSize: 'fontSize20',
        lineHeight: 'lineHeight20',
        fontWeight: 'fontWeightSemibold',
      };
    case 'headingStyle40':
      return {
        my: 'space60',
        fontSize: 'fontSize60',
        fontWeight: 'fontWeightSemibold',
      };
    case 'headingStyle30':
      return {
        my: 'space60',
        fontSize: 'fontSize50',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight50',
      };
    case 'headingStyle20':
      return {
        my: 'space60',
        fontSize: 'fontSize60',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight60',
      };
    case 'headingStyle10':
      return {
        mb: 'space90',
        fontSize: 'fontSize80',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight80',
      };
    default:
      return {
        my: 'space60',
        fontSize: 'fontSize60',
        lineHeight: 'lineHeight60',
      };
  }
}

const Heading: React.FC<HeadingProps> = props => (
  <Text {...props} as={props.as} textColor="colorText" {...getHeadingStyles(props.headingStyle)}>
    {props.children}
  </Text>
);

Heading.defaultProps = {
  as: 'h2',
  headingStyle: 'headingStyle20',
};

export {Heading};
