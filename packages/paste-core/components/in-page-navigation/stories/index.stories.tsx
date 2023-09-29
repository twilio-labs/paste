import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { CustomizationProvider } from "@twilio-paste/customization";
import { useTheme } from "@twilio-paste/theme";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { InPageNavigation, InPageNavigationItem } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/In Page Navigation",
  component: InPageNavigation,
};

export const Default: StoryFn = () => {
  /* using UID here to make unique labels for landmarks in Storybook for axe testing */
  return (
    <InPageNavigation aria-label={`get started ${useUID()}`}>
      <InPageNavigationItem href="#" currentPage>
        Super SIM
      </InPageNavigationItem>
      <InPageNavigationItem href="#">Programmable Wireless</InPageNavigationItem>
    </InPageNavigation>
  );
};

export const FullWidth: StoryFn = () => {
  /* using UID here to make unique labels for landmarks in Storybook for axe testing */
  return (
    <InPageNavigation aria-label={`privacy ${useUID()}`} variant="fullWidth">
      <InPageNavigationItem href="#" currentPage>
        Home
      </InPageNavigationItem>
      <InPageNavigationItem href="#">Detection</InPageNavigationItem>
      <InPageNavigationItem href="#">Settings</InPageNavigationItem>
    </InPageNavigation>
  );
};

export const Inverse: StoryFn = () => {
  /* using UID here to make unique labels for landmarks in Storybook for axe testing */
  return (
    <Box backgroundColor="colorBackgroundInverse" padding="space60">
      <InPageNavigation aria-label={`privacy ${useUID()}`} variant="inverse">
        <InPageNavigationItem href="#" currentPage>
          Home
        </InPageNavigationItem>
        <InPageNavigationItem href="#">Detection</InPageNavigationItem>
        <InPageNavigationItem href="#">Settings</InPageNavigationItem>
      </InPageNavigation>
    </Box>
  );
};

export const InverseFullWidth: StoryFn = () => {
  /* using UID here to make unique labels for landmarks in Storybook for axe testing */
  return (
    <Box backgroundColor="colorBackgroundInverse" padding="space60">
      <InPageNavigation aria-label={`privacy ${useUID()}`} variant="inverse_fullWidth">
        <InPageNavigationItem href="#" currentPage>
          Home
        </InPageNavigationItem>
        <InPageNavigationItem href="#">Detection</InPageNavigationItem>
        <InPageNavigationItem href="#">Settings</InPageNavigationItem>
      </InPageNavigation>
    </Box>
  );
};

export const LinkOverflowExample: StoryFn = () => {
  /* using UID here to make unique labels for landmarks in Storybook for axe testing */
  return (
    <InPageNavigation aria-label={`get started ${useUID()}`}>
      <InPageNavigationItem href="#" currentPage>
        Super SIM
      </InPageNavigationItem>
      <InPageNavigationItem href="#">Programmable Wireless</InPageNavigationItem>
      <InPageNavigationItem href="#">Super Duper SIM</InPageNavigationItem>
      <InPageNavigationItem href="#">Programmable Wirefull</InPageNavigationItem>
      <InPageNavigationItem href="#">Super SIM</InPageNavigationItem>
      <InPageNavigationItem href="#">Programmable Wireless</InPageNavigationItem>
      <InPageNavigationItem href="#">Super Duper SIM</InPageNavigationItem>
      <InPageNavigationItem href="#">Programmable Wirefull</InPageNavigationItem>
    </InPageNavigation>
  );
};

export const Customized: StoryFn = () => {
  const theme = useTheme();
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        IN_PAGE_NAVIGATION: { backgroundColor: "colorBackgroundDecorative20Weakest" },
        IN_PAGE_NAVIGATION_ITEMS: { padding: "space40" },
        IN_PAGE_NAVIGATION_ITEM: { margin: "space40" },
        IN_PAGE_NAVIGATION_ITEM_ANCHOR: { fontSize: "fontSize40" },
      }}
    >
      {/* using UID here to make unique labels for landmarks in Storybook for axe testing */}
      <InPageNavigation aria-label={`privacy ${useUID()}`}>
        <InPageNavigationItem href="#" currentPage>
          Home
        </InPageNavigationItem>
        <InPageNavigationItem href="#">Detection</InPageNavigationItem>
        <InPageNavigationItem href="#">Settings</InPageNavigationItem>
      </InPageNavigation>
    </CustomizationProvider>
  );
};
Customized.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
