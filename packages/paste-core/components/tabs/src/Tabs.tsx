import type { BoxProps } from "@twilio-paste/box";
import { Box } from "@twilio-paste/box";
import { Flex } from "@twilio-paste/flex";
import { useTabPrimitiveState } from "@twilio-paste/tabs-primitive";
import type { TabPrimitiveInitialState, TabPrimitiveStateReturn } from "@twilio-paste/tabs-primitive";
import * as React from "react";

import { TabsContext } from "./TabsContext";
import type { Variants } from "./types";
import { getElementName } from "./utils";

export type UseTabsStateProps = TabPrimitiveInitialState;

export interface TabStateReturn extends TabPrimitiveStateReturn {
  [key: string]: any;
}

export interface TabsProps extends TabPrimitiveInitialState {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "HORIZONTAL_TABS" or "VERTICAL_TABS"
   * @type {BoxProps["element"]}
   * @memberof TabsProps
   */
  element?: BoxProps["element"];
  /**
   * When using the state hook to control the tab set your self, the state prop takes the returned state from the hook.
   *
   * @type {TabStateReturn}
   * @memberof TabsProps
   */
  state?: TabStateReturn;
  /**
   * Changes each Tab to either equally fit the width of the containing element or hug the contents of its label.
   *
   * @type {Variants}
   * @memberof TabsProps
   */
  variant?: Variants;
  orientation?: TabPrimitiveInitialState["orientation"];
  selectedId?: TabPrimitiveInitialState["selectedId"];
  baseId?: TabPrimitiveInitialState["baseId"];
}

// Set orientation to horizontal because undefined enables all arrow key movement
const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ children, element, orientation = "horizontal", state, variant, ...initialState }, ref) => {
    // If returned state from primitive has orientation set to undefined, use the default "horizontal"
    const [prevSelectedTab, setPrevSelectedTab] = React.useState<string | undefined>(undefined);
    const { orientation: tabOrientation = orientation, ...tab } =
      state || useTabPrimitiveState({ orientation, ...initialState });
    const elementName = getElementName(tabOrientation, "TABS", element);
    const value = React.useMemo(
      () => ({ ...tab, orientation: tabOrientation, variant }),
      [tab, tabOrientation, variant],
    );

    const { selectedId } = tab;
    // Scroll to the selected tab if it exists on mount
    React.useEffect(() => {
      if (typeof selectedId === "string") {
        setTimeout(() => {
          document
            .getElementById(selectedId)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - behavior is typed incorrectly in Typescript v4, fixed in v5+
            ?.scrollIntoView({ behavior: prevSelectedTab === undefined ? "instant" : "smooth" });

          setPrevSelectedTab(selectedId);
        }, 1);
      }
    }, [prevSelectedTab, selectedId]);

    const returnValue = <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;

    if (tabOrientation === "vertical") {
      return (
        <Flex element={elementName} ref={ref} wrap={false} vAlignContent="stretch">
          {returnValue}
        </Flex>
      );
    }

    return <Box element={elementName}>{returnValue}</Box>;
  },
);

Tabs.displayName = "Tabs";
export { Tabs };

export { useTabPrimitiveState as useTabState };
