import Link from 'next/link';
import {styled, css} from '@twilio-paste/styling-library';

interface SidebarAnchorProps {
  children: React.ReactNode;
  nested?: boolean;
  href: string;
  onClick?: () => void;
}

const StyledSidebarAnchor = styled(Link)<SidebarAnchorProps>((props) =>
  css({
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: 'space40',
    paddingLeft: props.nested ? ['space130', 'space130', 'space110'] : ['space110', 'space110', 'space90'],
    fontWeight: 'fontWeightNormal',
    color: 'colorText',
    textDecoration: 'none',
    transition: '0.1s background-color ease-in-out',
    outline: 'none',
    borderRadius: 'borderRadius10',

    "&[aria-current='page']": {
      backgroundColor: 'colorBackgroundDark',
      color: 'colorText',
      fontWeight: 'fontWeightBold',
    },

    '&:hover': {
      color: 'colorText',
      textDecoration: 'underline',
    },

    '&:focus': {
      boxShadow: 'shadowFocus',
      textDecoration: 'underline',
    },
  })
);

const SidebarAnchor: React.FC<SidebarAnchorProps> = ({children, nested, href}) => (
  <StyledSidebarAnchor nested={nested} href={href}>
    <a>{children}</a>
  </StyledSidebarAnchor>
);

export {SidebarAnchor};
