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
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="min-content"
        marginBottom="space110"
        paddingTop="space160"
        paddingBottom="space110"
        columnGap="space70"
        maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
      >
        <WhatsNew showExternal href="#">
          We&apos;re hiring a Product Designer! <Anchor href="#">Apply here</Anchor>
        </WhatsNew>
        <WhatsNew href="#">
          Read about our <Anchor href="#">latest release</Anchor>
        </WhatsNew>
        <WhatsNew href="#">
          Check out <Anchor href="#">our roadmap</Anchor>
        </WhatsNew>
      </Box>
      <Box position="absolute" top={85} left={50}>
        <NewDoodleLoop />
      </Box>
    </Box>
  );
};

export { NewSection };
