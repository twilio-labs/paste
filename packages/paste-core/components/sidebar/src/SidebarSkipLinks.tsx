import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';

export const SidebarSkipLinkContainer: React.FC<React.PropsWithChildren<{element?: string}>> = ({
  element,
  children,
}) => {
  return (
    <Box
      element={element}
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius20"
      boxShadow="shadowLow"
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
      _focusWithin={{transform: 'translateY(0%)'}}
    >
      {children}
    </Box>
  );
};
SidebarSkipLinkContainer.displayName = 'SkipLinkContainer';

export type SidebarSkipLinksProps = {
  element?: string;
  mainContentSkipLinkID: string;
  sidebarNavigationSkipLinkID: string;
  topbarSkipLinkID: string;
  i18nMainContentSkipLinkText?: string;
  i18nNavigationSkipLinkText?: string;
  i18nTopbarSkipLinkText?: string;
};
export const SidebarSkipLinks: React.FC<SidebarSkipLinksProps> = ({
  element = 'SIDEBAR_SKIPLINKS',
  mainContentSkipLinkID,
  sidebarNavigationSkipLinkID,
  topbarSkipLinkID,
  i18nMainContentSkipLinkText = 'Skip to content',
  i18nNavigationSkipLinkText = 'Skip to navigation',
  i18nTopbarSkipLinkText = 'Skip to topbar',
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
SidebarSkipLinks.displayName = 'SkipLinks';
