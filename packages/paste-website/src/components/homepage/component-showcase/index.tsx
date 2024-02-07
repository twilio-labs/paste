import { Box } from "@twilio-paste/box";
import * as React from "react";

import { ColumnOneShowcase } from "./ColumnOneShowcase";
import { ColumnTwoShowcase } from "./ColumnTwoShowcase";
import { ProgressStepsShowcase } from "./ProgressStepsShowcase";

const ComponentShowcase: React.FC<React.PropsWithChildren> = () => {
  return (
    <Box
      as="span"
      position="relative"
      display="grid"
      gridTemplateColumns="max-content auto"
      gridTemplateRows="min-content min-content"
      gridTemplateAreas="'top top' 'bottom1 bottom2'"
      rowGap="space70"
      columnGap="space70"
      backgroundColor="colorBackgroundInverseStrong"
      padding="space130"
      top="0"
      height="min-content"
      width="fit-content"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-expect-error
      borderBottomLeftRadius="32px"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-expect-error
      borderBottomRightRadius="32px"
      zIndex="zIndex10"
      element="COMPONENT_SHOWCASE"
    >
      <Box
        backgroundColor="colorBackgroundBody"
        padding="space70"
        width="size80"
        borderRadius="borderRadius30"
        gridArea="top"
        element="TOP_ROW"
      >
        <ProgressStepsShowcase />
      </Box>
      <ColumnOneShowcase />
      <ColumnTwoShowcase />
    </Box>
  );
};

export { ComponentShowcase };
