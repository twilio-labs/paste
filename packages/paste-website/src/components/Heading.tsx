import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';
import {slugify} from '../utils/RouteUtils';

const StyledAnchorHyperlink = styled.a`
  text-decoration: none;
  margin-left: ${themeGet('space.space30')};
  color: ${themeGet('textColors.colorTextWeak')};

  &:hover {
    text-decoration: underline;
  }
`;

const AnchoredHeading: React.FC<Heading> = props => {
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

export {AnchoredHeading};
