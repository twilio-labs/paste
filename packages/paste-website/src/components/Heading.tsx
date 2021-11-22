import * as React from 'react';
import {Heading, HeadingProps} from '@twilio-paste/heading';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {slugify} from '../utils/RouteUtils';

const StyledAnchorHyperlink = styled.a`
  text-decoration: none;
  margin-left: ${themeGet('space.space30')};
  color: ${themeGet('textColors.colorTextWeak')};

  &:hover {
    text-decoration: underline;
  }
`;

const AnchoredHeading: React.FC<HeadingProps> = (props) => {
  // Only generate slugs for headings where children is 'string'
  if (typeof props.children === 'string') {
    const id = slugify(props.children);

    return (
      <Heading {...props} id={id}>
        {props.children}
        <StyledAnchorHyperlink href={`#${id}`} data-cy={`anchored-heading-${props.as}`}>
          #
        </StyledAnchorHyperlink>
      </Heading>
    );
  }

  return <Heading {...props} />;
};

export {AnchoredHeading};
