import * as React from 'react';
import {Text} from '@twilio-paste/text';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {slugify} from '../utils/RouteUtils';

export type asTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label';
export type HeadingStyle =
  | 'headingStyle10'
  | 'headingStyle20'
  | 'headingStyle30'
  | 'headingStyle40'
  | 'headingStyle50'
  | 'headingStyle60';

function getHeadingStyles(headingStyle?: HeadingStyle): {} {
  switch (headingStyle) {
    case 'headingStyle60':
      return {
        my: 'space60',
        fontSize: 'fontSize30',
        lineHeight: 'lineHeight20',
        fontWeight: 'fontWeightSemibold',
      };
    case 'headingStyle50':
      return {
        my: 'space60',
        fontSize: 'fontSize30',
        lineHeight: 'lineHeight20',
        fontWeight: 'fontWeightSemibold',
      };
    case 'headingStyle40':
      return {
        my: 'space60',
        fontSize: 'fontSize40',
        fontWeight: 'fontWeightSemibold',
      };
    case 'headingStyle30':
      return {
        my: 'space60',
        fontSize: 'fontSize60',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight50',
      };
    case 'headingStyle20':
      return {
        my: 'space60',
        fontSize: 'fontSize70',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight60',
      };
    case 'headingStyle10':
      return {
        mb: 'space90',
        fontSize: 'fontSize90',
        fontWeight: 'fontWeightSemibold',
        lineHeight: 'lineHeight80',
      };
    default:
      return {
        my: 'space60',
        fontSize: 'fontSize70',
        lineHeight: 'lineHeight60',
      };
  }
}

export interface HeadingProps {
  as: asTags;
  id?: string;
  headingStyle?: HeadingStyle;
}

const Heading: React.FC<HeadingProps> = props => {
  return (
    <Text {...props} textColor="colorText" {...getHeadingStyles(props.headingStyle)}>
      {props.children}
    </Text>
  );
};

Heading.defaultProps = {
  as: 'h2',
  headingStyle: 'headingStyle20',
};

const StyledAnchorHyperlink = styled.a`
  text-decoration: none;
  margin-left: ${themeGet('space.space30')};
  color: ${themeGet('textColors.colorTextWeak')};

  &:hover {
    text-decoration: underline;
  }
`;

const AnchoredHeading: React.FC<HeadingProps> = props => {
  // Only generate slugs for headings where children is 'string'
  if (typeof props.children === 'string') {
    const id = slugify(props.children);

    return (
      <Heading {...props} id={id}>
        {props.children}
        <StyledAnchorHyperlink href={`#${id}`}>#</StyledAnchorHyperlink>
      </Heading>
    );
  }

  return <Heading {...props} />;
};

export {Heading, AnchoredHeading};
