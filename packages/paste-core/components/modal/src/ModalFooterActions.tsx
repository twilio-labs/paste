import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

type Justify = "start" | "end";
export interface ModalFooterActionsProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'MODAL_FOOTER_ACTIONS'
   * @type {BoxProps['element']}
   * @memberof ModalFooterActionsProps
   */
  element?: BoxElementProps["element"];
  /**
   *
   * @type {Justify}
   * @memberof ModalFooterActionsProps
   */
  justify?: Justify;
}
const ModalFooterActions = React.forwardRef<HTMLDivElement, ModalFooterActionsProps>(
  ({ children, element = "MODAL_FOOTER_ACTIONS", justify, ...props }, ref) => {
    const count = React.Children.count(children);
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        display="flex"
        justifyContent={justify === "start" ? "flex-start" : "flex-end"}
        flexShrink={justify === "start" ? null : 0}
        flexWrap="wrap"
        flexGrow={1}
        element={element}
        alignItems="center"
        ref={ref}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <Box marginRight={count !== index + 1 ? "space50" : null} element={`${element}_ITEM`}>
              {child}
            </Box>
          );
        })}
      </Box>
    );
  },
);
ModalFooterActions.displayName = "ModalFooterActions";

export { ModalFooterActions };
