import * as React from 'react';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {Link} from 'gatsby';

// Link styles copied from @twilio-paste/anchor
const StyledLink = styled(Link)`
  color: ${themeGet('textColors.colorTextLink')};
  text-decoration: underline;
  outline: none;

  &:hover {
    color: ${themeGet('textColors.colorTextLinkStronger')};
    text-decoration: none;
  }

  &:focus {
    box-shadow: ${themeGet('shadows.shadowFocus')};
    color: ${themeGet('textColors.colorTextLinkStronger')};
    text-decoration: none;
  }

  &:active {
    color: ${themeGet('textColors.colorTextLinkStronger')};
    text-decoration: none;
  }
`;

export interface SiteLinkProps {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
}

const SiteLink: React.FC<React.PropsWithChildren<SiteLinkProps>> = ({children, to, ...props}) => (
  <StyledLink to={to} {...props}>
    {children}
  </StyledLink>
);

export {SiteLink};
