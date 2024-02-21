import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import * as React from "react";

import { NewDoodleLoop } from "../../assets/illustrations/NewDoodleLoop";
import { SectionContainer } from "./SectionContainer";
import { WhatsNew } from "./WhatsNew";

const NewSection: React.FC = (): React.ReactElement => {
  return (
    <SectionContainer position="relative">
      <Box
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
        columnGap="space70"
        rowGap="space40"
        element="NEW_SECTION"
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
      <Box position="absolute" top={10} left={-200}>
        <NewDoodleLoop />
      </Box>
    </SectionContainer>
  );
};

export { NewSection };
