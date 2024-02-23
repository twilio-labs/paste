import { Box } from "@twilio-paste/box";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import Link from "next/link";
import * as React from "react";

export const AssistantLink: React.FC<React.PropsWithChildren> = () => {
  return (
    <Box
      // @ts-expect-error rendering box as next link to style it
      as={Link}
      href="/assistant"
      target="_blank"
      display="flex"
      flexDirection="row"
      columnGap="space20"
      alignItems="center"
      color="colorText"
      textDecoration="none"
      outline="none"
      borderRadius="borderRadius10"
      _focus={{ boxShadow: "shadowFocus" }}
      _hover={{ textDecoration: "underline" }}
    >
      <ArtificialIntelligenceIcon color="colorTextIcon" size="sizeIcon40" decorative={false} title="Paste assistant" />{" "}
      Assistant
    </Box>
  );
};
