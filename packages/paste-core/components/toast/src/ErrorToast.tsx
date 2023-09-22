import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import type { ToastProps } from "./types";

const ErrorToast = React.forwardRef<HTMLDivElement, ToastProps>(({ element = "TOAST", variant, ...props }, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      color="colorTextError"
      width={["100%", "size40", "size40"]}
      backgroundColor="colorBackgroundErrorWeakest"
      borderColor="colorBorderErrorWeak"
      borderRadius="borderRadius30"
      borderStyle="solid"
      borderWidth="borderWidth10"
      boxShadow="shadowHigh"
      element={element}
      padding="space60"
      variant={variant}
    >
      {props.children}
    </Box>
  );
});

ErrorToast.displayName = "ErrorToast";

export { ErrorToast };
