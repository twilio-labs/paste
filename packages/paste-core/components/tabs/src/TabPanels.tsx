import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import * as React from "react";

import { TabsContext } from "./TabsContext";
import { getElementName } from "./utils";

export interface TabPanelsProps {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "HORIZONTAL_TAB_PANELS" or "VERTICAL_TAB_PANELS"
   * @type {BoxProps["element"]}
   * @memberof TabPanelsProps
   */
  element?: BoxProps["element"];
}

const TabPanels = React.forwardRef<HTMLDivElement, TabPanelsProps>(({ children, element, ...props }, ref) => {
  const { orientation } = React.useContext(TabsContext);
  const elementName = getElementName(orientation, "TAB_PANELS", element);
  return (
    <Box {...safelySpreadBoxProps(props)} element={elementName} width="100%" ref={ref}>
      {children}
    </Box>
  );
});

TabPanels.displayName = "TabPanels";
export { TabPanels };
