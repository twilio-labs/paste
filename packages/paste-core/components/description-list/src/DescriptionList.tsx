import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface DescriptionListProps extends HTMLPasteProps<"dl"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DESCRIPTION_LIST'
   * @type {BoxProps['element']}
   * @memberof DescriptionListProps
   */
  element?: BoxProps["element"];
}

const DescriptionList = React.forwardRef<HTMLDListElement, DescriptionListProps>(
  ({ element = "DESCRIPTION_LIST", children, ...props }, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} as="dl" ref={ref} element={element}>
        {children}
      </Box>
    );
  },
);

DescriptionList.displayName = "DescriptionList";

export { DescriptionList };
