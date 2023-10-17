import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { TabPrimitivePanel } from "@twilio-paste/tabs-primitive";
import type { TabPrimitivePanelProps } from "@twilio-paste/tabs-primitive";
import * as React from "react";

import { TabsContext } from "./TabsContext";
import { getElementName } from "./utils";

export interface TabPanelProps {
  /**
   * Same as the HTML attribute.
   *
   * @type {TabPrimitivePanelProps["id"]}
   * @memberof TabPanelProps
   */
  id?: TabPrimitivePanelProps["id"];
  /**
   * The ID of the Tab component this Panel pairs with.
   *
   * @type {TabPrimitivePanelProps["tabId"]}
   * @memberof TabPanelProps
   */
  tabId?: TabPrimitivePanelProps["tabId"];
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "HORIZONTAL_TAB_PANEL" or "VERTICAL_TAB_PANEL"
   * @type {BoxProps["element"]}
   * @memberof TabPanelProps
   */
  element?: BoxProps["element"];
  /**
   * Removes the default padding from the TabPanel.
   *
   * @type {"space0"}
   * @memberof TabPanelProps
   */
  paddingTop?: "space0";
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ children, element, paddingTop = "space60", ...props }, ref) => {
    const tab = React.useContext(TabsContext);
    const elementName = getElementName(tab.orientation, "TAB_PANEL", element);

    return (
      <TabPrimitivePanel
        {...(tab as any)}
        paddingTop={paddingTop}
        borderRadius="borderRadius20"
        _focusVisible={{
          boxShadow: "shadowFocus",
          outline: "none",
        }}
        {...props}
        element={elementName}
        as={Box}
        ref={ref}
      >
        {children}
      </TabPrimitivePanel>
    );
  },
);

TabPanel.displayName = "TabPanel";
export { TabPanel };
