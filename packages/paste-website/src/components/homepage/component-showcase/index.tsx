import { Box } from "@twilio-paste/box";
import * as React from "react";

import { ColumnOneShowcase } from "./ColumnOneShowcase";
import { ColumnTwoShowcase } from "./ColumnTwoShowcase";
import { RowOneShowcase } from "./RowOneShowcase";

const ComponentShowcase: React.FC<React.PropsWithChildren> = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="max-content auto"
      gridTemplateRows="min-content min-content"
      gridTemplateAreas="'top top' 'bottom1 bottom2'"
      rowGap="space70"
      columnGap="space70"
      backgroundColor="colorBackgroundInverseStrong"
      padding="space130"
      height="min-content"
      width="fit-content"
      borderBottomLeftRadius={["borderRadius0", "borderRadius90", "borderRadius90"]}
      borderBottomRightRadius={["borderRadius0", "borderRadius90", "borderRadius90"]}
      zIndex="zIndex10"
      element="COMPONENT_SHOWCASE"
      overflow="hidden"
      aria-hidden="true"
    >
      <RowOneShowcase />
      <ColumnOneShowcase />
      <ColumnTwoShowcase />
    </Box>
  );
};

export { ComponentShowcase };
