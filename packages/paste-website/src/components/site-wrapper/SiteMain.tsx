import { Box } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export const SiteMain: React.FC<React.PropsWithChildren<HTMLPasteProps<"div">>> = ({ children, ...props }) => {
  return (
    <Box as="main" element="SITE_MAIN" style={{backgroundColor: "var(--color-background-body)"}}  position="relative" {...props}>
      {children}
    </Box>
  );
};
