import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import * as React from "react";

import { NewDoodleLoop } from "../../assets/illustrations/NewDoodleLoop";
import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { WhatsNew } from "./WhatsNew";

const NewSection: React.FC = (): React.ReactElement => {
  return (
    <Box element="NEW_SECTION" display="flex" justifyContent="center" position="relative">
      <Box
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
      <Box position="absolute" top={85} left={10}>
        <NewDoodleLoop />
      </Box>
    </Box>
  );
};

export { NewSection };
