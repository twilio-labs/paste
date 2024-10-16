import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { TabPrimitive } from "@twilio-paste/tabs-primitive";
import type { TabPrimitiveProps } from "@twilio-paste/tabs-primitive";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { TabsContext } from "./TabsContext";
import type { Orientation, Variants } from "./types";
import { getElementName } from "./utils";

/*
 * TODO:
 * Split vertical tabs into a separate component
 * because fitted tabs do nothing when orientation
 * is vertical, which feels broken. Vertical tabs
 * shouldn't get the fitted variant.
 */
const getTabBoxStyles = (orientation: Orientation, variant: Variants): BoxStyleProps => {
  const isInverse = variant === "inverse" || variant === "inverse_fitted" || variant === "inverse_full_width";
  const isFitted =
    variant === "fitted" ||
    variant === "inverse_fitted" ||
    variant === "full_width" ||
    variant === "inverse_full_width";

  switch (orientation) {
    case "vertical":
      return {
        color: isInverse ? "colorTextInverseWeak" : "colorTextWeak",
        display: "block",
        marginBottom: "space30",
        paddingBottom: "space30",
        paddingLeft: "space50",
        paddingRight: "space50",
        paddingTop: "space30",
        _last: {
          marginBottom: "space0",
        },
        _selected: {
          color: isInverse ? "colorTextInverse" : "colorTextLink",
        },
        _hover: {
          color: isInverse ? "colorTextInverse" : "colorTextLinkStronger",
          boxShadow: isInverse ? "shadowBorderRightInverseStrong" : "none",
        },
        _disabled: {
          borderLeftColor: "transparent",
          color: isInverse ? "colorTextInverseWeakest" : "colorTextWeaker",
          boxShadow: "none",
        },
        _disabled_focus: {
          boxShadow: "none",
        },
        _focus: {
          boxShadow: isInverse ? "shadowFocusInverseInset" : "shadowFocusInset",
          outline: "none",
          borderTopLeftRadius: "borderRadius30",
          borderBottomLeftRadius: "borderRadius30",
        },
        _selected_after: {
          content: '" "',
          position: "absolute",
          height: "80%",
          width: "4px",
          backgroundColor: isInverse ? "colorBackgroundInverseStrongest" : "colorBackgroundPrimary",
          borderTopLeftRadius: "borderRadius30",
          borderBottomLeftRadius: "borderRadius30",
          right: -1,
          top: "10%",
        },
        _selected_hover: {
          boxShadow: "none",
        },
        _selected_hover_after: {
          content: '" "',
          position: "absolute",
          height: "80%",
          width: "4px",
          backgroundColor: isInverse ? "colorBackgroundPrimary" : "colorBackgroundPrimaryStrongest",
          borderTopLeftRadius: "borderRadius30",
          borderBottomLeftRadius: "borderRadius30",
          right: -1,
          top: "10%",
        },
        _focus_selected_after: {
          display: "none",
        },
        _focus_selected_hover_after: {
          display: "none",
        },
        _disabled_focus_after: {
          content: '" "',
          position: "absolute",
          height: "80%",
          width: "4px",
          backgroundColor: isInverse ? "colorBackgroundInverseStronger" : "colorBackgroundStrong",
          borderTopLeftRadius: "borderRadius30",
          borderBottomLeftRadius: "borderRadius30",
          right: -1,
          top: "10%",
        },
      };
    case "horizontal":
    default:
      return {
        color: isInverse ? "colorTextInverseWeak" : "colorTextWeak",
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth: "borderWidth10",
        borderTopLeftRadius: "borderRadius30",
        borderTopRightRadius: "borderRadius30",
        display: "inline-block",
        flexBasis: isFitted ? "50%" : undefined,
        flexGrow: isFitted ? 1 : undefined,
        flexShrink: isFitted ? 1 : undefined,
        minWidth: "max-content",
        paddingY: "space30",
        paddingX: "space50",
        textAlign: "center",
        bottom: "-1px",
        /* Selected State */
        _selected: {
          borderColor: isInverse ? "colorBorderInverse" : "colorBorderWeak",
          borderBottomColor: isInverse ? "colorBorderInverseWeakest" : "colorBorderWeakest",
          color: isInverse ? "colorTextInverse" : "colorTextPrimary",
          boxShadow: isInverse ? "shadowBorderTopInverseStrongest" : "shadowBorderTopPrimary",
        },
        /* Disabled state */
        _disabled: {
          borderBottomColor: "transparent",
          color: isInverse ? "colorTextInverseWeakest" : "colorTextWeaker",
        },
        /* Hover states */
        _hover: {
          color: isInverse ? "colorTextInverse" : "colorTextPrimaryStrongest",
          borderBottomColor: isInverse ? "colorBorderInverseStrong" : "transparent",
        },
        _selected_hover: {
          color: isInverse ? "colorTextInverse" : "colorTextPrimaryStronger",
          borderBottomColor: isInverse ? "colorBorderInverseWeakest" : "colorBorderWeakest",
          boxShadow: isInverse ? "shadowBorderTopPrimary" : "shadowBorderTopPrimaryStrongest",
        },
        /* Focus states */
        _focus: {
          outline: "none",
          borderColor: "colorBorderPrimary",
          boxShadow: "shadowFocusInset",
          borderBottomColor: "colorBorderPrimary",
        },
        _selected_focus: {
          borderStyle: "solid",
          borderWidth: "borderWidth10",
          boxShadow: "shadowFocusInset",
          color: isInverse ? "colorTextInverse" : "colorTextPrimary",
          borderColor: "colorBorderPrimary",
        },
        _disabled_focus: {
          borderColor: isInverse ? "colorBorderInverseWeaker" : "colorBorderWeak",
          boxShadow: "none",
          borderBottom: "none",
        },
      };
  }
};

export interface TabProps extends HTMLPasteProps<"div"> {
  /**
   * Same as the HTML attribute.
   *
   * @type {TabPrimitiveProps["id"]}
   * @memberof TabProps
   */
  id?: TabPrimitiveProps["id"];
  /**
   * When an element is disabled, it may still be focusable. It works similarly to readOnly on form elements. In this case, only aria-disabled will be set.
   *
   * @type {TabPrimitiveProps["focusable"]}
   * @memberof TabProps
   */
  focusable?: TabPrimitiveProps["focusable"];
  /**
   * Same as HTML attribute.
   *
   * @type {TabPrimitiveProps["disabled"]}
   * @memberof TabProps
   */
  disabled?: TabPrimitiveProps["disabled"];
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "HORIZONTAL_TAB" or "VERTICAL_TAB"
   * @type {BoxProps["element"]}
   * @memberof TabProps
   */
  element?: BoxProps["element"];
  children: React.ReactNode;
  "aria-disabled"?: TabPrimitiveProps["aria-disabled"];
}

const Tab = React.forwardRef<HTMLDivElement, TabProps>(({ children, element, ...tabProps }, ref) => {
  const tab = React.useContext(TabsContext);
  const boxStyles = React.useMemo(() => getTabBoxStyles(tab.orientation, tab.variant), [tab.orientation, tab.variant]);

  const { orientation } = tab;
  const elementName = getElementName(orientation, "TAB", element);

  return (
    <TabPrimitive
      {...(tab as any)}
      {...tabProps}
      // Setting orientation to undefined for vertical tabs enables up/down and left/right arrow key control
      orientation={orientation === "vertical" ? undefined : "horizontal"}
      ref={ref}
    >
      {(props: TabProps) => {
        return (
          <Box
            {...safelySpreadBoxProps(props)}
            {...boxStyles}
            as="span"
            cursor={props["aria-disabled"] ? "not-allowed" : "pointer"}
            element={elementName}
            fontSize="fontSize30"
            lineHeight="lineHeight30"
            fontWeight="fontWeightMedium"
            overflow={orientation !== "vertical" ? "hidden" : undefined}
            position="relative"
            textOverflow={orientation !== "vertical" ? "ellipsis" : undefined}
            transition="border-color 100ms ease, color 100ms ease"
            whiteSpace={orientation !== "vertical" ? "nowrap" : undefined}
          >
            {children}
          </Box>
        );
      }}
    </TabPrimitive>
  );
});

Tab.displayName = "Tab";

export { Tab };
