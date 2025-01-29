import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import * as React from "react";

import { MinimizableDialogContext } from "./MinimizableDialogContext";

export const StyledMinimizableDialog: React.FC<React.PropsWithChildren<Pick<BoxProps, "element">>> = ({
  element,
  children,
}) => {
  const { minimized } = React.useContext(MinimizableDialogContext);

  return (
    <Box
      element={element}
      borderRadius="borderRadius20"
      display="flex"
      flexDirection="column"
      backgroundColor="colorBackgroundWeaker"
      width="size40"
      boxShadow="shadowElevation20"
    >
      {children}
    </Box>
  );
};

StyledMinimizableDialog.displayName = "StyledMinimizableDialog";
