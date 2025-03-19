import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { DisclosurePrimitive } from "@twilio-paste/disclosure-primitive";
import { ChevronDisclosureIcon } from "@twilio-paste/icons/esm/ChevronDisclosureIcon";
import { useTheme } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { SidebarContext } from "../SidebarContext";
import { SidebarNavigationDisclosureContext } from "./SidebarNavigationDisclosureContext";
import {
  sidebarNavigationLabelNestedStyles,
  sidebarNavigationLabelSelectedStyles,
  sidebarNavigationLabelStyles,
} from "./styles";

export interface SidebarNavigationDisclosureHeadingProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDEBAR_NAVIGATION_DISCLOSURE_HEADING"
   * @type {BoxProps["element"]}
   * @memberof SidebarNavigationDisclosureHeadingProps
   */
  element?: BoxProps["element"];
  /**
   * Set to make the Heading part of the selected page hierarchy
   *
   * @type {boolean}
   * @memberof SidebarNavigationDisclosureHeadingProps
   */
  selected?: boolean;
  /**
   * Icon to be displayed within the Heading
   *
   * @type {React.ReactNode}
   * @memberof SidebarNavigationDisclosureHeadingProps
   */
  icon?: React.ReactNode;
}

interface UseComputeDisclosureHeadingStylesArgs {
  /** Whether the heading is selected */
  selected?: boolean;
  /** Whether the heading is nested within another heading */
  nested: boolean;
}

/**
 * Small hook that abstracts the logic of computing styles for the SidebarNavigationDisclosureHeading component.
 */
const useComputeDisclosureHeadingStyles = ({ nested, selected }: UseComputeDisclosureHeadingStylesArgs): BoxProps => {
  let styles: BoxProps = {};
  if (nested) {
    styles = sidebarNavigationLabelNestedStyles;
  } else {
    styles = sidebarNavigationLabelStyles;
  }
  if (selected) {
    styles = { ...styles, ...sidebarNavigationLabelSelectedStyles };
  }
  return styles;
};

interface UseAdjustIconColorArgs {
  /** Icon to be displayed within the Heading. */
  icon: React.ReactNode;
  /** Whether the heading is selected. */
  selected?: boolean;
}

/**
 * Adjust the color on the icon if it is not selected. It accomplishes this by cloning the icon node and applying the colorTextIconInverse color.
 * Memoized to reduce the number of times the icon is cloned.
 */
const useAdjustIconColor = ({ icon, selected }: UseAdjustIconColorArgs): Required<React.ReactNode> => {
  return React.useMemo(() => {
    if (!icon) {
      return null;
    }
    if (icon && React.isValidElement(icon) && !selected) {
      const iconElement = icon as React.ReactElement<BoxProps["color"]>;
      return React.cloneElement(iconElement, {
        color: "colorTextIconInverse",
      });
    }
    return icon;
  }, [icon, selected]);
};

const StyledDisclosureHeading = React.forwardRef<HTMLDivElement, SidebarNavigationDisclosureHeadingProps>(
  ({ children, element = "SIDEBAR_NAVIGATION_DISCLOSURE_HEADING", selected, icon, ...props }, ref) => {
    const { collapsed, variant } = React.useContext(SidebarContext);
    const [shouldIconMove, setShouldIconMove] = React.useState(false);
    const { nested } = React.useContext(SidebarNavigationDisclosureContext);
    const isExpanded = props["aria-expanded"];
    const theme = useTheme();
    const isCompact = variant === "compact";
    const [visible, setVisible] = React.useState(!isCompact ? true : !isExpanded);
    const timeout = React.useRef(0);

    React.useEffect(() => {
      clearTimeout(timeout.current);
      // If not compact mode, we don't show/hide item titles
      if (!isCompact) {
        return;
      }
      // @ts-expect-error timeout is a number
      timeout.current = setTimeout(() => {
        setVisible(!collapsed);
      }, 120);
    }, [collapsed, isCompact]);

    const disclosureHeadingStyles = useComputeDisclosureHeadingStyles({ nested, selected });
    const adjustedIcon = useAdjustIconColor({ icon, selected });

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        onMouseEnter={() => setShouldIconMove(true)}
        onMouseLeave={() => setShouldIconMove(false)}
        {...disclosureHeadingStyles}
      >
        <Box
          as="span"
          element={`${element}_EXPAND_ICON`}
          display="flex"
          color="colorTextIconInverse"
          height="sizeIcon20"
          width="sizeIcon20"
          transition="transform 150ms ease"
          transform={`
          ${shouldIconMove ? `translateX(${theme.space.space10})` : "translateX(0)"}
          ${isExpanded ? `rotate(90deg)` : "rotate(0deg)"}`}
        >
          <ChevronDisclosureIcon color="inherit" decorative size="sizeIcon20" />
        </Box>
        {adjustedIcon}
        <Box
          as="span"
          display="block"
          marginLeft="space20"
          transition="all 120ms ease"
          float={visible ? "none" : "left"}
          opacity={visible ? 1 : 0}
          whiteSpace={visible ? "normal" : "nowrap"}
        >
          {collapsed ? null : children}
        </Box>
      </Box>
    );
  },
);
StyledDisclosureHeading.displayName = "StyledDisclosureHeading";

const SidebarNavigationDisclosureHeading = React.forwardRef<HTMLDivElement, SidebarNavigationDisclosureHeadingProps>(
  (props, ref) => {
    const { disclosure } = React.useContext(SidebarNavigationDisclosureContext);
    return <DisclosurePrimitive {...disclosure} ref={ref} {...props} as={StyledDisclosureHeading} />;
  },
);
SidebarNavigationDisclosureHeading.displayName = "SidebarNavigationDisclosureHeading";

export { SidebarNavigationDisclosureHeading };
