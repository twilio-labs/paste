import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { ResponsiveValue } from "@twilio-paste/styling-library";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

type Justify = "start" | "end";
export interface TopbarActionsProps extends HTMLPasteProps<"div"> {
  /**
   * Recommended: Account Switcher, User Dialog, Product Switcher, Search Input, etc.
   *
   * @type {NonNullable<React.ReactNode>}
   * @memberof TopbarActionsProps
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "TOPBAR_ACTIONS"
   * @type {BoxElementProps["element"]}
   * @memberof TopbarActionsProps
   */
  element?: BoxElementProps["element"];
  /**
   * Used to control where the actions are aligned visually, to the start or end of the container.
   *
   * @type {Justify}
   * @memberof TopbarActionsProps
   */
  justify?: Justify;
  /**
   * Used to control the display of the actions, either flex or none.
   *
   * @type {(ResponsiveValue<"none" | "flex">)}
   * @memberof TopbarActionsProps
   */
  display?: ResponsiveValue<"none" | "flex">;
}
const TopbarActions = React.forwardRef<HTMLDivElement, TopbarActionsProps>(
  ({ children, element = "TOPBAR_ACTIONS", justify, display = "flex", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        display={display}
        justifyContent={justify === "start" ? "flex-start" : "flex-end"}
        flexShrink={justify === "start" ? null : 0}
        flexWrap="wrap"
        flexGrow={1}
        columnGap="space50"
        element={element}
        alignItems="center"
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);
TopbarActions.displayName = "TopbarActions";

export { TopbarActions };
