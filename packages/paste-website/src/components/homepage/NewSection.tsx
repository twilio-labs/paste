import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import * as React from "react";

import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { WhatsNew } from "./WhatsNew";

const NewSection: React.FC = (): React.ReactElement => {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        element="NEW_SECTION"
        display="flex"
        flexDirection="row"
        // width="100%"
        justifyContent="space-between"
        paddingY="space200"
        width="size120"
        maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
      >
        <WhatsNew showExternal href="#">
          We&apos;re hiring a Product Designer! <Anchor href="#">Apply here</Anchor>
        </WhatsNew>
        <WhatsNew href="#">
          Read more about our <Anchor href="#">latest release</Anchor>
        </WhatsNew>
        <WhatsNew href="#">
          Check out <Anchor href="#">our roadmap</Anchor>
        </WhatsNew>
      </Box>
    </Box>
  );
};

export { NewSection };
