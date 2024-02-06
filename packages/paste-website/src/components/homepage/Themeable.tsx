import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import * as React from "react";

import { SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { SectionSeparator } from "./SectionSeparator";

const Themeable: React.FC = (): React.ReactElement => {
  return (
    <Box display="flex" justifyContent="center" marginY="space200">
      <Box element="THEMEABLE" display="flex" flexDirection="column" width="100%" maxWidth={SITE_CONTENT_MAX_WIDTH}>
        <SectionSeparator>Themeable and composable</SectionSeparator>
        <Box paddingTop="space190" display="flex" flexDirection="row" justifyContent="space-between">
          <Box>start from anywhere</Box>
          <Box>component and primitive builder</Box>
        </Box>
        <Box maxWidth="size40" alignSelf="center" textAlign="center">
          <Heading as="h3" variant="heading30">
            Built with your favorite technologies, Typescript + React + Figma
          </Heading>
          <Box>ts logo react logo figma logo</Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Themeable };
