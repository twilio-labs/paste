import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import type { ToastProps } from "./types";

const SuccessToast = React.forwardRef<HTMLDivElement, ToastProps>(({ element = "TOAST", variant, ...props }, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      color="colorTextSuccess"
      width={["100%", "size40", "size40"]}
      backgroundColor="colorBackgroundSuccessWeakest"
      borderColor="colorBorderSuccessWeak"
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

SuccessToast.displayName = "SuccessToast";

export { SuccessToast };
