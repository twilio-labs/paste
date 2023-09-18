import * as React from 'react';
import Link from 'next/link';
import {SidebarNavigationItem} from '@twilio-paste/sidebar';

import {useLocationPathname} from '../../../utils/RouteUtils';

interface SidebarAnchorProps {
  children: NonNullable<React.ReactNode>;
  href: string;
  onClick?: () => void;
}

const SidebarAnchor: React.FC<React.PropsWithChildren<SidebarAnchorProps>> = ({children, href, onClick, ...props}) => {
  const pathname = useLocationPathname();
  const pathnameWithoutTrailingSlash = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  return (
    <Link href={href} {...props} legacyBehavior passHref>
      {/* @ts-expect-error using nextjs passHref means that we can't satisfy the nav item href required prop */}
      <SidebarNavigationItem onClick={onClick} selected={pathnameWithoutTrailingSlash === href}>
        {children}
      </SidebarNavigationItem>
    </Link>
  );
};

export {SidebarAnchor};
