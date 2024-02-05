import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import type { TdProps } from "./types";

const Td = React.forwardRef<HTMLTableCellElement, TdProps>(
  ({ element = "TD", textAlign = "left", whiteSpace, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="td"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        borderWidth="borderWidth0"
        borderBottomWidth="borderWidth10"
        element={element}
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        padding="space50"
        position="relative"
        textAlign={textAlign}
        whiteSpace={whiteSpace}
        verticalAlign="inherit"
        wordWrap="break-word"
        color="inherit"
      />
    );
  },
);

Td.displayName = "Td";

export { Td };
