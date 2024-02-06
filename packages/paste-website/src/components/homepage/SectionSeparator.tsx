import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { LinkExternalIcon } from "@twilio-paste/icons/esm/LinkExternalIcon";
import { LogoPasteIcon } from "@twilio-paste/icons/esm/LogoPasteIcon";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { Text } from "@twilio-paste/text";
import * as React from "react";

interface SectionSeparatorProps {
  children: React.ReactNode;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({ children }) => {
  return (
    <Box width="100%">
      <Text as="span" color="colorTextWeak" fontWeight="fontWeightSemibold">
        {children}
      </Text>
      <Box borderStyle="dashed" borderColor="colorBorderWeaker" element="SECTION_SEPARATOR" />
    </Box>
  );
};

export { SectionSeparator };
