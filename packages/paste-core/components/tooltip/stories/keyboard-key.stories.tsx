import type { StoryFn } from "@storybook/react";
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import { InformationIcon } from "@twilio-paste/icons/esm/InformationIcon";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import { Theme, useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { Tooltip, useTooltipState } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Tooltip/KeyboardKey",
  excludeStories: ["StateHookExample"],
  component: Tooltip,
  parameters: {
    chromatic: { delay: 3000, diffThreshold: 0.2 },
  },
};

export const Default = (): React.ReactNode => {
  return (
    <Box as="div" minHeight="400px">
      <Tooltip
        visible
        actionHeader="Search shortcuts"
        keyCombinationsActions={[
          { name: "Mac", eventKeyCombination: ["Command", "K"] },
          { name: "Windows", eventKeyCombination: ["Control", "K"] },
        ]}
      >
        <Button aria-keyshortcuts="command+k" variant="primary">
          Click to search
        </Button>
      </Tooltip>
    </Box>
  );
};

export const CustomizedTooltip: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        TOOLTIP: {
          backgroundColor: "colorBackgroundErrorWeakest",
          borderColor: "colorBorderDestructive",
          textAlign: "center",
        },
        TOOLTIP_ACTION_TEXT: {
          color: "colorTextErrorStrong",
        },
        TOOLTIP_HEADER: {
          color: "colorTextLinkDestructive",
          fontWeight: "fontWeightBold",
        },
        TOOLTIP_ACTION_KEY_GROUP: {
          backgroundColor: "colorBackgroundStrong",
          padding: "space30",
        },
        TOOLTIP_ACTION_KEY: {
          backgroundColor: "colorBackgroundPrimary",
          color: "colorTextInverse",
        },
        CUSTOM_TOOLTIP: {
          backgroundColor: "colorBackgroundSuccessWeakest",
          borderColor: "colorBorderSuccess",
          textAlign: "left",
        },
        CUSTOM_TOOLTIP_ACTION_TEXT: {
          color: "colorTextSuccess",
        },
        CUSTOM_TOOLTIP_HEADER: {
          color: "colorTextLinkStrongest",
          fontWeight: "fontWeightLight",
        },
        CUSTOM_TOOLTIP_ACTION_KEY_GROUP: {
          backgroundColor: "colorBackgroundInverse",
          padding: "space30",
        },
        CUSTOM_TOOLTIP_ACTION_KEY: {
          backgroundColor: "colorBackgroundBusy",
          color: "colorTextInverse",
          fontFamily: "fontFamilyCode",
        },
      }}
    >
      <Box as="div" display="flex" columnGap="space80">
        <Box minWidth="200px">
          <Tooltip
            visible
            actionHeader="Search shortcuts"
            keyCombinationsActions={[
              { name: "Mac", eventKeyCombination: ["Command", "K"] },
              { name: "Windows", eventKeyCombination: ["Control", "K"] },
            ]}
          >
            <Button aria-keyshortcuts="command+k" variant="primary">
              Click to search
            </Button>
          </Tooltip>
        </Box>
        <Box minWidth="600px">
          <Tooltip
            element="CUSTOM_TOOLTIP"
            visible
            actionHeader="Search shortcuts"
            keyCombinationsActions={[
              { name: "Mac", eventKeyCombination: ["Command", "K"] },
              { name: "Windows", eventKeyCombination: ["Control", "K"] },
            ]}
          >
            <Button aria-keyshortcuts="command+k" variant="primary">
              Click to search
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </CustomizationProvider>
  );
};

CustomizedTooltip.storyName = "Customized Tooltip";
CustomizedTooltip.parameters = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
