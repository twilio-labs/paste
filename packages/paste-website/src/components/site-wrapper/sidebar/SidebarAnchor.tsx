import * as React from 'react';
import {styled, css} from '@twilio-paste/styling-library';
import {Link} from 'gatsby';
import type {BoxStyleProps} from '@twilio-paste/box';

import {SidebarItem} from './SidebarItem';
import {useLocationPathname} from '../../../utils/RouteUtils';

interface SidebarAnchorProps {
  children: NonNullable<React.ReactNode>;
  level: 0 | 1 | 2;
  to: string;
  onClick?: () => void;
}

const levelPaddingMap: Partial<{
  [key in SidebarAnchorProps['level']]: Partial<BoxStyleProps>;
}> = {
  0: {
    paddingY: 'space40',
    paddingLeft: ['space110', 'space110', 'space90'],
    paddingRight: 'space40',
  },
  1: {
    paddingY: 'space30',
    paddingLeft: ['space130', 'space130', 'space110'],
    paddingRight: 'space40',
  },
  2: {
    paddingY: 'space30',
    paddingLeft: ['space150', 'space150', 'space130'],
    paddingRight: 'space40',
  },
};

const StyledSidebarAnchor = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'level',
})<SidebarAnchorProps>(({level}) =>
  css({
    position: 'relative',
    display: 'block',
    width: '100%',
    fontWeight: 'fontWeightNormal',
    color: 'colorText',
    textDecoration: 'none',
    transition: '0.1s background-color ease-in-out',
    outline: 'none',
    borderRadius: 'borderRadius10',
    ...levelPaddingMap[level],

    "&[aria-current='page']": {
      backgroundColor: 'colorBackgroundStrong',
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

const SidebarAnchor: React.FC<React.PropsWithChildren<SidebarAnchorProps>> = ({children, level, to, onClick}) => {
  const pathname = useLocationPathname();
  const pathnameWithoutTrailingSlash = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  return (
    <SidebarItem>
      <StyledSidebarAnchor
        level={level}
        to={to}
        onClick={onClick}
        aria-current={pathnameWithoutTrailingSlash === to ? 'page' : false}
      >
        {children}
      </StyledSidebarAnchor>
    </SidebarItem>
  );
};

export {SidebarAnchor};
