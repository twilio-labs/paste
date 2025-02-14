import type { BoxProps } from "@twilio-paste/box";
import { Box } from "@twilio-paste/box";
import * as React from "react";

export const StyledMinimizableDialog: React.FC<React.PropsWithChildren<Pick<BoxProps, "element">>> = ({
  element,
  children,
}) => {
  return (
    <Box
      element={element}
      borderRadius="borderRadius20"
      display="flex"
      flexDirection="column"
      backgroundColor="colorBackgroundWeaker"
      width="size40"
      boxShadow="shadowElevationTop20"
    >
      {children}
    </Box>
  );
};

StyledMinimizableDialog.displayName = "StyledMinimizableDialog";
