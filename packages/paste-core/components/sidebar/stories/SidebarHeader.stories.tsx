import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import * as React from "react";

import { SidebarHeader, SidebarHeaderIconButton, SidebarHeaderLabel } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Sidebar",
};

export const Header: StoryFn = () => {
  return (
    <Box backgroundColor="colorBackgroundInverse" maxWidth="size50">
      <SidebarHeader>
        <SidebarHeaderIconButton href="#" as="a">
          <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console homepage" />
        </SidebarHeaderIconButton>
        <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
      </SidebarHeader>
    </Box>
  );
};
