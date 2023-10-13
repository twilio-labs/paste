import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box, type BoxProps, safelySpreadBoxProps } from "@twilio-paste/box";
import { useTheme } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useUID } from "@twilio-paste/uid-library";
import { useWindowSize } from "@twilio-paste/utils";
import * as React from "react";

import { SidebarContext } from "./SidebarContext";
import { SidebarSkipLinks, type SidebarSkipLinksProps } from "./SidebarSkipLinks";
import type { Variants } from "./types";

const StyledSidebar = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box
    {...props}
    as="aside"
    overflow="visible"
    display="flex"
    flexDirection="column"
    ref={ref}
    borderRightStyle="solid"
    borderRightWidth="borderWidth10"
    borderRightColor="colorBorderInverseWeaker"
    backgroundColor="colorBackgroundInverse"
    zIndex="zIndex50"
    position="fixed"
    top={0}
    left={0}
    bottom={0}
  />
));
StyledSidebar.displayName = "StyledSidebar";
const AnimatedStyledSidebar = animated(StyledSidebar);

const config = {
  mass: 0.3,
  tension: 288,
  friction: 20,
};

/**
 * Since we are potentially alternating between three different spring configs
 * between re-renders (i.e.: mobile and hidden as the window size changes),
 * we need to have the exact same style keys applied so we don't have
 * lingering styles from a previous `useSpring` that breaks the UI
 */
const getCompactSpringConfig = (collapsed: boolean, sizeSidebar: string, sizeSidebarCompact: string): any => ({
  opacity: 1, // Needed to overwrite the styles from getMobileSpringConfig
  width: collapsed ? sizeSidebarCompact : sizeSidebar,
  transform: `translateX(0%)`,
  config,
});
const getHiddenSpringConfig = (collapsed: boolean, sizeSidebar: string): any => ({
  opacity: collapsed ? 0 : 1,
  width: sizeSidebar,
  transform: collapsed ? `translateX(-100%)` : `translateX(0%)`,
  config,
});
const getMobileSpringConfig = (collapsed: boolean): any => ({
  opacity: collapsed ? 0 : 1,
  width: "100%",
  transform: collapsed ? `translateX(-100%)` : `translateX(0%)`,
  config,
});

export interface SidebarProps extends HTMLPasteProps<"div">, Omit<SidebarSkipLinksProps, "element"> {
  children: React.ReactNode;
  element?: BoxProps["element"];
  collapsed?: boolean;
  variant: Variants;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      collapsed = false,
      variant = "default",
      element = "SIDEBAR",
      mainContentSkipLinkID,
      sidebarNavigationSkipLinkID,
      topbarSkipLinkID,
      i18nMainContentSkipLinkText,
      i18nNavigationSkipLinkText,
      i18nTopbarSkipLinkText,
      children,
      ...props
    },
    ref,
  ) => {
    const sidebarId = useUID();
    const { breakpointIndex } = useWindowSize();
    const theme = useTheme();

    const isMobile = breakpointIndex === 0;
    const isCompact = variant === "compact";

    let springConfig;
    if (isMobile) {
      springConfig = getMobileSpringConfig(collapsed);
    } else if (isCompact) {
      springConfig = getCompactSpringConfig(collapsed, theme.sizes.sizeSidebar, theme.sizes.sizeSidebarCompact);
    } else {
      springConfig = getHiddenSpringConfig(collapsed, theme.sizes.sizeSidebar);
    }

    const styles = useSpring(springConfig);

    return (
      <SidebarContext.Provider value={{ collapsed, variant, sidebarId, sidebarNavigationSkipLinkID }}>
        <SidebarSkipLinks
          element={`${element}_SKIPLINKS`}
          mainContentSkipLinkID={mainContentSkipLinkID}
          sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
          topbarSkipLinkID={topbarSkipLinkID}
          i18nMainContentSkipLinkText={i18nMainContentSkipLinkText}
          i18nNavigationSkipLinkText={i18nNavigationSkipLinkText}
          i18nTopbarSkipLinkText={i18nTopbarSkipLinkText}
        />
        <AnimatedStyledSidebar
          {...safelySpreadBoxProps(props)}
          ref={ref}
          element={element}
          width={["100%", isCompact && collapsed ? "sizeSidebarCompact" : "sizeSidebar"]}
          style={styles}
          id={sidebarId}
        >
          {children}
        </AnimatedStyledSidebar>
      </SidebarContext.Provider>
    );
  },
);
Sidebar.displayName = "Sidebar";
