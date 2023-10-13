import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { Space } from "@twilio-paste/style-props";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

type Orientation = "horizontal" | "vertical";

export interface SeparatorProps extends HTMLPasteProps<"hr">, Pick<BoxProps, "element"> {
  id?: never;
  orientation: Orientation;
  horizontalSpacing?: Space;
  verticalSpacing?: Space;
}

const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ element = "SEPARATOR", orientation, horizontalSpacing, verticalSpacing, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        aria-orientation={orientation}
        element={element}
        margin="space0"
        marginBottom={verticalSpacing}
        marginLeft={horizontalSpacing}
        marginRight={horizontalSpacing}
        marginTop={verticalSpacing}
        as="hr"
        borderWidth="borderWidth0"
        borderColor="colorBorderWeaker"
        borderStyle="solid"
        borderBottomWidth={orientation === "horizontal" ? "borderWidth10" : null}
        borderLeftWidth={orientation === "vertical" ? "borderWidth10" : null}
        width={orientation === "horizontal" ? "auto" : null}
        height={orientation === "vertical" ? "auto" : null}
        ref={ref}
      />
    );
  },
);

Separator.displayName = "Separator";

export { Separator };
