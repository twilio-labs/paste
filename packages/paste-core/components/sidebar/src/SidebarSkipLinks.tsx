import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import * as React from "react";

export const SidebarSkipLinkContainer: React.FC<React.PropsWithChildren<{ element?: string }>> = ({
  element,
  children,
}) => {
  return (
    <Box
      element={element}
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius20"
      boxShadow="shadowElevation10"
      left={10}
      paddingX="space60"
      paddingY="space30"
      position="fixed"
      top={10}
      transform="translateY(-150%)"
      transition="transform 0.1s"
      zIndex="zIndex90"
      display="flex"
      columnGap="space60"
      _focusWithin={{ transform: "translateY(0%)" }}
    >
      {children}
    </Box>
  );
};
SidebarSkipLinkContainer.displayName = "SkipLinkContainer";

export type SidebarSkipLinksProps = {
  element?: string;
  /**
   * ID of the element that contains the main content of your application
   *
   * @type {string}
   */
  mainContentSkipLinkID: string;
  /**
   * ID given to the `SidebarNavigation` component
   *
   * @type {string}
   */
  sidebarNavigationSkipLinkID: string;
  /**
   * ID given to the `Topbar` component
   *
   * @type {string}
   */
  topbarSkipLinkID: string;
  /**
   * String used to change the text of the "skip to content" link
   *
   * @default "Skip to content"
   * @type {string}
   */
  i18nMainContentSkipLinkText?: string;
  /**
   * String used to change the text of the "skip to navigation" link
   *
   * @default "Skip to navigation"
   * @type {string}
   */
  i18nNavigationSkipLinkText?: string;
  /**
   * String used to change the text of the "skip to topbar" link
   *
   * @default "Skip to topbar"
   * @type {string}
   */
  i18nTopbarSkipLinkText?: string;
};
export const SidebarSkipLinks: React.FC<SidebarSkipLinksProps> = ({
  element = "SIDEBAR_SKIPLINKS",
  mainContentSkipLinkID,
  sidebarNavigationSkipLinkID,
  topbarSkipLinkID,
  i18nMainContentSkipLinkText = "Skip to content",
  i18nNavigationSkipLinkText = "Skip to navigation",
  i18nTopbarSkipLinkText = "Skip to topbar",
}) => {
  return (
    <SidebarSkipLinkContainer element={element}>
      <Anchor element={`${element}_LINK`} href={`#${mainContentSkipLinkID}`}>
        {i18nMainContentSkipLinkText}
      </Anchor>
      <Anchor element={`${element}_LINK`} href={`#${sidebarNavigationSkipLinkID}`}>
        {i18nNavigationSkipLinkText}
      </Anchor>
      <Anchor element={`${element}_LINK`} href={`#${topbarSkipLinkID}`}>
        {i18nTopbarSkipLinkText}
      </Anchor>
    </SidebarSkipLinkContainer>
  );
};
SidebarSkipLinks.displayName = "SkipLinks";
