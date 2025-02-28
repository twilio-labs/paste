import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import type { ThProps } from "./types";

const Th = React.forwardRef<HTMLTableCellElement, ThProps>(
  ({ element = "TH", textAlign = "left", whiteSpace, width, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="th"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderWeaker"
        borderBottomWidth="borderWidth10"
        element={element}
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        fontWeight="fontWeightSemibold"
        paddingBottom="space30"
        paddingLeft="space50"
        paddingRight="space50"
        paddingTop="space30"
        position="relative"
        textAlign={textAlign}
        whiteSpace={whiteSpace}
        verticalAlign="inherit"
        width={width}
        wordWrap="break-word"
        color="inherit"
      />
    );
  },
);

Th.displayName = "Th";

export { Th };
