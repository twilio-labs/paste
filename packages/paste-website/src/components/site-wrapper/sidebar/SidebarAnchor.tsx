import * as React from 'react';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {Link} from 'gatsby';

interface SidebarAnchorProps {
  children: React.ReactNode;
  nested?: boolean;
  to: string;
}

const StyledSidbarAnchor = styled(Link)<SidebarAnchorProps>`
  position: relative;
  display: block;
  width: 100%;
  padding: ${themeGet('space.space40')};
  padding-left: ${props => (props.nested ? themeGet('space.space110') : themeGet('space.space90'))};
  font-weight: ${themeGet('fontWeights.fontWeightNormal')};
  color: ${themeGet('textColors.colorText')};
  text-decoration: none;
  transition: 0.1s background-color ease-in-out;
  outline: none;
  border-radius: ${themeGet('radii.borderRadius10')};

  &[aria-current='page'] {
    background-color: ${themeGet('backgroundColors.colorBackgroundDark')};
    color: ${themeGet('textColors.colorText')};
    font-weight: ${themeGet('fontWeights.fontWeightBold')};
  }

  &:hover {
    color: ${themeGet('textColors.colorText')};
    text-decoration: underline;
  }

  &:focus {
    box-shadow: ${themeGet('shadows.shadowFocus')};
    text-decoration: underline;
  }
`;

const SidebarAnchor: React.FC<SidebarAnchorProps> = ({children, nested, to}) => (
  <StyledSidbarAnchor nested={nested} to={to}>
    {children}
  </StyledSidbarAnchor>
);

export {SidebarAnchor};
