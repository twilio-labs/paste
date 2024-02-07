import { Box } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import * as React from "react";

interface SectionSeparatorProps {
  children: React.ReactNode;
  gridArea?: string;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({ children, gridArea }) => {
  return (
    <Box width="100%" gridArea={gridArea}>
      <Text as="span" color="colorTextWeak" fontWeight="fontWeightSemibold">
        {children}
      </Text>
      <Box borderStyle="dashed" borderColor="colorBorderWeaker" element="SECTION_SEPARATOR" />
    </Box>
  );
};

export { SectionSeparator };
