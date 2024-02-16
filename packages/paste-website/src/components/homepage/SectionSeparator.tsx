import { Box } from "@twilio-paste/box";
import { Separator } from "@twilio-paste/separator";
import { Text } from "@twilio-paste/text";
import * as React from "react";

interface SectionSeparatorProps {
  children: React.ReactNode;
  gridArea?: string;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({ children, gridArea }) => {
  return (
    <Box
      width="size120"
      gridArea={gridArea}
      element="SECTION_SEPARATOR"
      display="inline-grid"
      gridTemplateRows="auto"
      gridTemplateColumns="max-content auto"
      alignItems="center"
    >
      <Text as="span" color="colorTextWeak" fontSize="fontSize30" fontWeight="fontWeightSemibold" marginRight="space50">
        {children}
      </Text>
      <Separator orientation="horizontal" verticalSpacing="space0" />
    </Box>
  );
};

export { SectionSeparator };
