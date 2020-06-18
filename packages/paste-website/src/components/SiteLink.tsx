import * as React from 'react';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {Link} from 'gatsby';

// Link styles copied from @twilio-paste/anchor
const StyledLink = styled(Link)`
  color: ${themeGet('textColors.colorTextLink')};
  text-decoration: underline;
  outline: none;

  &:hover {
    color: ${themeGet('textColors.colorTextLinkHover')};
    text-decoration: none;
  }

  &:focus,
  &:active {
    box-shadow: ${themeGet('shadows.shadowFocus')};
    text-decoration: none;
  }

  &:focus {
    color: ${themeGet('textColors.colorTextLinkFocus')};
  }

  &:active {
    color: ${themeGet('textColors.colorTextLinkActive')};
  }
`;

interface SiteLinkProps {
  children: React.ReactNode;
  to: string;
}

const SiteLink: React.FC<SiteLinkProps> = ({children, to}) => <StyledLink to={to}>{children}</StyledLink>;

export {SiteLink};
