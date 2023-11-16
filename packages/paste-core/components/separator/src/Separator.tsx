import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { Space } from "@twilio-paste/style-props";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

type Orientation = "horizontal" | "vertical";

interface SeparatorProps extends HTMLPasteProps<"hr"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SEPARATOR"
   * @type {BoxProps["element"]}
   * @memberof SeparatorProps
   */
  element?: BoxProps["element"];
  id?: never;
  /**
   * Separator direction
   *
   * @type {Orientation}
   * @memberof SeparatorProps
   */
  orientation: Orientation;
  /**
   * Space left and right of the separator when orientation is vertical
   *
   * @type {Space}
   * @memberof SeparatorProps
   */
  horizontalSpacing?: Space;
  /**
   * Space top and bottom of the separator when orientation is horizontal
   *
   * @type {Space}
   * @memberof SeparatorProps
   */
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
export type { SeparatorProps };
