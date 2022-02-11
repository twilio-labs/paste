import * as React from 'react';
import {Box} from '@twilio-paste/box';

import {SidebarAnchor} from '../src/components/site-wrapper/sidebar/SidebarAnchor';
import {SidebarSeparator} from '../src/components/site-wrapper/sidebar/SidebarSeparator';
import {SidebarDisclosure} from '../src/components/site-wrapper/sidebar/sidebar-disclosure/SidebarDisclosure';
import {SidebarDisclosureButton} from '../src/components/site-wrapper/sidebar/sidebar-disclosure/SidebarDisclosureButton';
import {SidebarDisclosureContent} from '../src/components/site-wrapper/sidebar/sidebar-disclosure/SidebarDisclosureContent';

export const ComplexSidebar = (): React.ReactNode => (
  <Box as="ul" listStyleType="none">
    <SidebarAnchor level={0} to="https://www.google.com">
      Level 0 anchor
    </SidebarAnchor>
    <SidebarAnchor level={0} to="https://www.google.com">
      Level 0 anchor
    </SidebarAnchor>
    <SidebarDisclosure categoryRoute="/introduction" visible>
      <SidebarDisclosureButton level={0}>Level 0 disclosure</SidebarDisclosureButton>
      <SidebarDisclosureContent>
        <SidebarAnchor level={1} to="https://www.google.com">
          Level 1 anchor
        </SidebarAnchor>
        <SidebarDisclosure categoryRoute="/introduction/for-designers" visible>
          <SidebarDisclosureButton level={1}>Level 1 disclosure</SidebarDisclosureButton>
          <SidebarDisclosureContent>
            <SidebarAnchor level={2} to="https://www.google.com">
              Level 2 anchor
            </SidebarAnchor>
            <SidebarAnchor level={2} to="https://www.google.com">
              Level 2 anchor
            </SidebarAnchor>
          </SidebarDisclosureContent>
        </SidebarDisclosure>
      </SidebarDisclosureContent>
    </SidebarDisclosure>
  </Box>
);

export const SidebarAnchorLevels = (): React.ReactNode => (
  <Box as="ul" listStyleType="none">
    <SidebarAnchor level={0} to="https://www.google.com">
      Level 0 anchor
    </SidebarAnchor>
    <SidebarAnchor level={1} to="https://www.google.com">
      Level 1 anchor
    </SidebarAnchor>
    <SidebarAnchor level={2} to="https://www.google.com">
      Level 2 anchor
    </SidebarAnchor>
  </Box>
);

export const BasicSidebarDisclosure = (): React.ReactNode => (
  <Box as="ul" listStyleType="none">
    <SidebarDisclosure categoryRoute="/introduction" visible>
      <SidebarDisclosureButton level={0}>Level 0 disclosure</SidebarDisclosureButton>
      <SidebarDisclosureContent>
        <SidebarAnchor level={1} to="https://www.google.com">
          Level 1 anchor
        </SidebarAnchor>
        <SidebarAnchor level={1} to="https://www.google.com">
          Level 1 anchor
        </SidebarAnchor>
      </SidebarDisclosureContent>
    </SidebarDisclosure>
  </Box>
);

export const NestedSidebarDisclosure = (): React.ReactNode => (
  <Box as="ul" listStyleType="none">
    <SidebarDisclosure categoryRoute="/introduction" visible>
      <SidebarDisclosureButton level={1}>Level 1 disclosure</SidebarDisclosureButton>
      <SidebarDisclosureContent>
        <SidebarAnchor level={2} to="https://www.google.com">
          Level 2 anchor
        </SidebarAnchor>
        <SidebarAnchor level={2} to="https://www.google.com">
          Level 2 anchor
        </SidebarAnchor>
      </SidebarDisclosureContent>
    </SidebarDisclosure>
  </Box>
);

export const BasicSeparator = (): React.ReactNode => <SidebarSeparator />;

export default {
  title: 'Website/SidebarNavigation',
};
