import { Box, type BoxProps } from "@twilio-paste/box";
import * as React from "react";

import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";

export const SectionContainer: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      paddingX={["space70", "space80", "space140"]}
      overflow="clip"
      element="SECTION_CONTAINER"
    >
      <Box width="100%" maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH} marginY="space200" {...props}>
        {children}
      </Box>
    </Box>
  );
};
