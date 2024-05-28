// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarHeaderIconButton,
  SidebarHeaderLabel,
  SidebarNavigation,
  SidebarNavigationItem,
} from "@twilio-paste/sidebar";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

export const SidebarWithContent: React.FC<
  React.PropsWithChildren<{ topbarSkipLinkID: string; mainContentSkipLinkID: string }>
> = ({ topbarSkipLinkID, mainContentSkipLinkID }) => {
  const id = useUID();
  const sidebarNavigationSkipLinkID = useUID();

  return (
    <Sidebar
      aria-label={id}
      collapsed={true}
      variant="compact"
      sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
      topbarSkipLinkID={topbarSkipLinkID}
      mainContentSkipLinkID={mainContentSkipLinkID}
    >
      <SidebarHeader>
        <SidebarHeaderIconButton as="a" href="#">
          <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console homepage" />
        </SidebarHeaderIconButton>
        <SidebarHeaderLabel>Product name</SidebarHeaderLabel>
      </SidebarHeader>
      <SidebarBody>
        <SidebarNavigation aria-label={id}>
          <SidebarNavigationItem href="#" selected>
            Explore products
          </SidebarNavigationItem>
        </SidebarNavigation>
      </SidebarBody>
    </Sidebar>
  );
};
