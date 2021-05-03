import Link from 'next/link';
import {styled, themeGet} from '@twilio-paste/styling-library';

// Link styles copied from @twilio-paste/anchor
const StyledLink = styled(Link)`
  color: ${themeGet('textColors.colorTextLink')};
  text-decoration: underline;
  outline: none;

  &:hover {
    color: ${themeGet('textColors.colorTextLinkDarker')};
    text-decoration: none;
  }

  &:focus {
    box-shadow: ${themeGet('shadows.shadowFocus')};
    color: ${themeGet('textColors.colorTextLinkDarker')};
    text-decoration: none;
  }

  &:active {
    color: ${themeGet('textColors.colorTextLinkDarker')};
    text-decoration: none;
  }
`;

export interface SiteLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

const SiteLink: React.FC<SiteLinkProps> = ({children, href}) => (
  <StyledLink href={href}>
    <a>{children}</a>
  </StyledLink>
);

export {SiteLink};
