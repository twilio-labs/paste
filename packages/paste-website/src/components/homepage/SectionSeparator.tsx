import { Box } from "@twilio-paste/box";
import * as React from "react";

interface SectionSeparatorProps {
  children: React.ReactNode;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({ children }) => {
  return (
    <Box display="flex" columnGap="space50" alignItems="center">
      <Box as="span" color="colorTextWeak" fontWeight="fontWeightSemibold" flexShrink={0}>
        {children}
      </Box>
      <Box
        width="100%"
        height="2px"
        backgroundColor="colorBackgroundStrong"
        borderRadius="borderRadius20"
        element="SECTION_SEPARATOR"
      />
    </Box>
  );
};

export { SectionSeparator };
