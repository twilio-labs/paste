import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { TabPrimitiveList } from "@twilio-paste/tabs-primitive";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { TabsContext } from "./TabsContext";
import type { Variants } from "./types";
import { getElementName } from "./utils";

export interface TabListProps extends HTMLPasteProps<"div"> {
  /**
   * Required label for this Tabs component. Titles the entire Tabbing context for screen readers.
   *
   * @type {string}
   * @memberof TabListProps
   */
  "aria-label": string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "HORIZONTAL_TAB_LIST" or "VERTICAL_TAB_LIST"
   * @type {BoxProps["element"]}
   * @memberof TabListProps
   */
  element?: BoxProps["element"];
  children: React.ReactNode;
  /**
   * Changes each Tab to either equally fit the width of the containing element or hug the contents of its label.
   *
   * @type {Variants}
   * @memberof TabListProps
   */
  variant?: Variants;
}

const HorizontalTabList: React.FC<React.PropsWithChildren<{ variant?: Variants; element?: BoxProps["element"] }>> = ({
  children,
  variant,
  element,
}) => {
  const isInverse = variant === "inverse" || variant === "inverse_fitted";

  return (
    <Box
      display="flex"
      borderBottomStyle="solid"
      borderBottomWidth="borderWidth10"
      borderBottomColor={isInverse ? "colorBorderInverseWeaker" : "colorBorderWeak"}
      columnGap="space20"
      element={element}
    >
      {children}
    </Box>
  );
};

HorizontalTabList.displayName = "HorizontalTabList";

const VerticalTabList: React.FC<React.PropsWithChildren<{ variant?: Variants; element?: BoxProps["element"] }>> = ({
  children,
  element,
  variant,
}) => {
  const isInverse = variant === "inverse" || variant === "inverse_fitted";
  return (
    <Box
      element={element}
      marginRight="space110"
      minWidth="size20"
      maxWidth="size40"
      borderRightStyle="solid"
      borderRightWidth="borderWidth10"
      borderRightColor={isInverse ? "colorBorderInverseWeaker" : "colorBorderWeak"}
    >
      {children}
    </Box>
  );
};

VerticalTabList.displayName = "VerticalTabList";

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(({ children, element, variant, ...props }, ref) => {
  const tab = React.useContext(TabsContext);
  const { orientation } = tab;
  const elementName = getElementName(orientation, "TAB_LIST", element);
  const TabListWrapper = orientation === "vertical" ? VerticalTabList : HorizontalTabList;

  return (
    <TabPrimitiveList {...(tab as any)} as={Box} {...props} element={elementName} ref={ref}>
      <TabListWrapper variant={variant || tab.variant} element={`${elementName}_CHILD`}>
        {children}
      </TabListWrapper>
    </TabPrimitiveList>
  );
});

TabList.displayName = "TabList";
export { TabList };
