import { Box } from "@twilio-paste/box";
import { Separator } from "@twilio-paste/separator";
import { Text } from "@twilio-paste/text";
import * as React from "react";

interface SectionSeparatorProps {
  children: React.ReactNode;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({ children }) => {
  return (
    <Box
      width="100%"
      element="SECTION_SEPARATOR"
      display="grid"
      gridTemplateColumns="max-content auto"
      alignItems="center"
      position="relative"
      zIndex="zIndex10"
    >
      <Text as="span" color="colorTextWeak" fontSize="fontSize30" fontWeight="fontWeightSemibold" marginRight="space50">
        {children}
      </Text>
      <Separator orientation="horizontal" verticalSpacing="space0" />
    </Box>
  );
};

export { SectionSeparator };
