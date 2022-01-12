import * as React from 'react';

import {SidebarAnchor} from '../src/components/site-wrapper/sidebar/SidebarAnchor';
import {SidebarSeparator} from '../src/components/site-wrapper/sidebar/SidebarSeparator';
import {SidebarDisclosure} from '../src/components/site-wrapper/sidebar/sidebar-disclosure/SidebarDisclosure';
import {SidebarDisclosureButton} from '../src/components/site-wrapper/sidebar/sidebar-disclosure/SidebarDisclosureButton';
import {SidebarDisclosureContent} from '../src/components/site-wrapper/sidebar/sidebar-disclosure/SidebarDisclosureContent';

// export const BasicSidebarAnchor = (): React.ReactNode => (
//   <SidebarAnchor to='https://www.google.com'>Sample</SidebarAnchor>
// );

// export const NestedSidebarAnchor = (): React.ReactNode => (
//   <SidebarAnchor nested to='https://www.google.com'>Nested Sample</SidebarAnchor>
// );

export const SeparatorExample = (): React.ReactNode => <SidebarSeparator />;

export default {
  title: 'Website/SidebarNavigation',
};
