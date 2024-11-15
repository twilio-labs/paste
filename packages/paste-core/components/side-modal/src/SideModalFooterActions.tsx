import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

type JustifyOptions = "flex-start" | "flex-end" | "space-between";

export interface SideModalFooterActionsProps extends HTMLPasteProps<"div"> {
  /**
   * Child components to render into the SideModalFooterActions
   *
   * @type {NonNullable<React.ReactNode>}
   * @memberof SideModalFooterActionsProps
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDE_MODAL_FOOTER_ACTIONS"
   * @type {BoxElementProps["element"]}
   * @memberof SideModalFooterActionsProps
   */
  element?: BoxElementProps["element"];
  /**
   * Sets the `justify-content` CSS property.
   *
   * @type {JustifyOptions}
   * @memberof SideModalFooterActionsProps
   */
  justifyContent?: JustifyOptions;
}

const SideModalFooterActions = React.forwardRef<HTMLDivElement, SideModalFooterActionsProps>(
  ({ children, element = "SIDE_MODAL_FOOTER_ACTIONS", justifyContent = "flex-start", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        display="flex"
        justifyContent={justifyContent}
        flexWrap="wrap"
        flexGrow={1}
        element={element}
        columnGap="space50"
        alignItems="center"
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

SideModalFooterActions.displayName = "SideModalFooterActions";

export { SideModalFooterActions };
