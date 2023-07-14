import * as React from 'react';
import Link from 'next/link';
import {SidebarNavigationItem} from '@twilio-paste/sidebar';

import {useLocationPathname} from '../../../utils/RouteUtils';

interface SidebarAnchorProps {
  children: NonNullable<React.ReactNode>;
  href: string;
  onClick?: () => void;
}

const SidebarAnchor: React.FC<React.PropsWithChildren<SidebarAnchorProps>> = ({children, href, onClick}) => {
  const pathname = useLocationPathname();
  const pathnameWithoutTrailingSlash = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  return (
    <Link href={href} legacyBehavior>
      <SidebarNavigationItem href={href} onClick={onClick} selected={pathnameWithoutTrailingSlash === href}>
        {children}
      </SidebarNavigationItem>
    </Link>
  );
};

export {SidebarAnchor};
