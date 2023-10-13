import { Box } from "@twilio-paste/box";
import * as React from "react";

import type { AnchorProps } from "./types";

const DefaultAnchor = React.forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => (
  <Box
    {...props}
    as="a"
    color="colorTextLink"
    fontSize="inherit"
    fontWeight="inherit"
    lineHeight="inherit"
    outline="none"
    ref={ref}
    textDecoration="underline"
    _active={{
      color: "colorTextLinkStrongest",
      textDecoration: "none",
    }}
    _focus={{
      boxShadow: "shadowFocus",
      color: "colorTextLink",
      textDecoration: "underline",
    }}
    _hover={{
      color: "colorTextLinkStronger",
      textDecoration: "none",
    }}
  >
    {props.children}
  </Box>
));

DefaultAnchor.displayName = "DefaultAnchor";

export { DefaultAnchor };
