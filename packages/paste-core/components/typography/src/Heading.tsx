import * as React from 'react';
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
  id?: never;
  className?: never;
  children: NonNullable<React.ReactNode>;
  headingStyle?: HeadingStyle;
}

function getHeadingStyles(headingStyle?: HeadingStyle): {} {
  switch (headingStyle) {
    case 'headingStyle60':
      return {
        marginBottom: 'space70',
        fontSize: 'fontSize90',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight60',
      };
    case 'headingStyle50':
    default:
      return {
        marginBottom: 'space60',
        fontSize: 'fontSize70',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight50',
      };
    case 'headingStyle40':
      return {
        marginBottom: 'space50',
        fontSize: 'fontSize60',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight70',
      };
    case 'headingStyle30':
      return {
        marginBottom: 'space40',
        fontSize: 'fontSize40',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight50',
      };
    case 'headingStyle20':
      return {
        marginBottom: 'space30',
        fontSize: 'fontSize30',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight20',
      };
    case 'headingStyle10':
      return {
        marginBottom: 'space30',
        fontSize: 'fontSize20',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight10',
      };
  }
}

const handlePropValidation = ({as, children}: Heading): void => {
  const hasAs = as;
  if (
    hasAs &&
    !(
      as === 'h1' ||
      as === 'h2' ||
      as === 'h3' ||
      as === 'h4' ||
      as === 'h5' ||
      as === 'h6' ||
      as === 'div' ||
      as === 'label' ||
      as === 'span'
    )
  ) {
    throw new Error(`[Paste: Typography Heading] As must be h1, h2, h3, h4, h5, h6, div, label, or span`);
  }

  if (children == null) {
    throw new Error(`[Paste: Typography Heading] Must have non-null children.`);
  }
};

const Heading: React.FC<Heading> = ({as, headingStyle, children}) => {
  handlePropValidation({as, headingStyle, children});

  return (
    <Text as={as} textColor="colorText" {...getHeadingStyles(headingStyle)}>
      {children}
    </Text>
  );
};

Heading.defaultProps = {
  as: 'h2',
  headingStyle: 'headingStyle50',
};

export {Heading};
