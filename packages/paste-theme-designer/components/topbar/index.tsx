import { Box } from "@twilio-paste/core/box";
import * as React from "react";

import { SiteHeaderLogo } from "./SiteHeaderLogo";

const TopBar = (): JSX.Element => {
  return (
    <Box
      as="header"
      alignItems="center"
      display="flex"
      backgroundColor="colorBackgroundPrimaryStrongest"
      position="sticky"
      top="0px"
      zIndex="zIndex80"
    >
      <SiteHeaderLogo title="Paste" subtitle="Remix" />
    </Box>
  );
};

export { TopBar };
