import * as React from 'react';
import {styled, css} from '@twilio-paste/styling-library';
import {Link} from 'gatsby';

interface SidebarAnchorProps {
  children: React.ReactNode;
  nested?: boolean;
  to: string;
}

const StyledSidebarAnchor = styled(Link)<SidebarAnchorProps>(props =>
  css({
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: 'space40',
    paddingLeft: props.nested ? 'space110' : 'space90',
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

const SidebarAnchor: React.FC<SidebarAnchorProps> = ({children, nested, to}) => (
  <StyledSidebarAnchor nested={nested} to={to}>
    {children}
  </StyledSidebarAnchor>
);

export {SidebarAnchor};
