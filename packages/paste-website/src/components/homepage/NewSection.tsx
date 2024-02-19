import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import * as React from "react";

import { SectionContainer } from "./SectionContainer";
import { WhatsNew } from "./WhatsNew";

const NewSection: React.FC = (): React.ReactElement => {
  return (
    <SectionContainer>
      <Box
        element="NEW_SECTION"
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
        alignItems={["center", "center", "initial"]}
        paddingY="space200"
        columnGap="space40"
        rowGap="space40"
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
    </SectionContainer>
  );
};

export { NewSection };
