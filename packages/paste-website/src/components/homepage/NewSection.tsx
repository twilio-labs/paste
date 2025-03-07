import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import * as React from "react";

import { NewDoodleLoop } from "../../assets/illustrations/NewDoodleLoop";
import { SectionContainer } from "./SectionContainer";
import { WhatsNew } from "./WhatsNew";

const NewSection: React.FC = (): React.ReactElement<any> => {
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
        <WhatsNew href="/assistant">
          Try out <Anchor href="/assistant">Paste Assistant,</Anchor> our AI-powered Design System chat bot
        </WhatsNew>
        <WhatsNew href="/core/changelog">
          Read about our <Anchor href="/core/changelog">latest release</Anchor>
        </WhatsNew>
        <WhatsNew href="/roadmap">
          Check out <Anchor href="/roadmap">our roadmap</Anchor>
        </WhatsNew>
      </Box>
      <Box position="absolute" top={10} left={-200}>
        <NewDoodleLoop />
      </Box>
    </SectionContainer>
  );
};

export { NewSection };
