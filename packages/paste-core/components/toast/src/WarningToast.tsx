import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import type { ToastProps } from "./types";

const WarningToast = React.forwardRef<HTMLDivElement, ToastProps>(({ element = "TOAST", variant, ...props }, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      color="colorTextWarningStrong"
      width={["100%", "size40", "size40"]}
      backgroundColor="colorBackgroundWarningWeakest"
      borderColor="colorBorderWarningWeak"
      borderRadius="borderRadius30"
      borderStyle="solid"
      borderWidth="borderWidth10"
      boxShadow="shadowElevation20"
      element={element}
      padding="space60"
      variant={variant}
    >
      {props.children}
    </Box>
  );
});

WarningToast.displayName = "WarningToast";

export { WarningToast };
