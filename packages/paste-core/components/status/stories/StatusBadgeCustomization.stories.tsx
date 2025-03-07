import type { StoryFn } from "@storybook/react";
import { Card } from "@twilio-paste/card";
import { CustomizationProvider } from "@twilio-paste/customization";
import type { PasteCustomCSS } from "@twilio-paste/customization";
import { Paragraph } from "@twilio-paste/paragraph";
import { Stack } from "@twilio-paste/stack";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { StatusBadge } from "../src";
import type { StatusBadgeVariants } from "../src/types";

export const makeBadge = (variant: StatusBadgeVariants, element?: string): React.ReactElement<HTMLElement> => (
  <StatusBadge as="span" element={element} variant={variant} data-testid={`${variant}_badge`}>
    HelloWorld
  </StatusBadge>
);

export const getStyles = (element = "STATUS_BADGE"): { [key: string]: PasteCustomCSS } => {
  return {
    [element]: {
      cursor: "help",
      variants: {
        ProcessError: { paddingY: "space30" },
        ProcessWarning: { paddingY: "space50" },
        ProcessSuccess: { paddingY: "space60" },
        ProcessNeutral: { paddingY: "space70" },
        ProcessInProgress: { paddingY: "space80" },
        ProcessDisabled: { paddingY: "space40" },
        ProcessDraft: { paddingY: "space50" },
        ConnectivityAvailable: { paddingY: "space60" },
        ConnectivityBusy: { paddingY: "space70" },
        ConnectivityUnavailable: { paddingY: "space30" },
        ConnectivityOffline: { paddingY: "space40" },
        ConnectivityNeutral: { paddingY: "space40" },
      },
    },
  };
};

const CustomizationWrapper: React.FC<
  React.PropsWithChildren<{ variant: StatusBadgeVariants; isTestEnvironment: boolean }>
> = ({ variant, isTestEnvironment }): React.ReactElement<HTMLElement> => {
  const theme = useTheme();
  const customElement = "FOO";
  return (
    <Stack orientation="vertical" spacing="space50">
      <Card>
        <Stack orientation="vertical" spacing="space30">
          <Paragraph>Default:</Paragraph>
          {makeBadge(variant)}
        </Stack>
      </Card>
      <Card>
        <Stack orientation="vertical" spacing="space30">
          <Paragraph>Customized:</Paragraph>
          <CustomizationProvider theme={theme} elements={getStyles()} disableAnimations={isTestEnvironment}>
            {makeBadge(variant)}
          </CustomizationProvider>
        </Stack>
      </Card>
      <Card>
        <Stack orientation="vertical" spacing="space30">
          <Paragraph>Customized with custom `element` prop:</Paragraph>
          <CustomizationProvider
            theme={theme}
            elements={getStyles(customElement)}
            disableAnimations={isTestEnvironment}
          >
            {makeBadge(variant, customElement)}
          </CustomizationProvider>
        </Stack>
      </Card>
    </Stack>
  );
};

export const ProcessError: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ProcessError" />
);
export const ProcessWarning: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ProcessWarning" />
);
export const ProcessSuccess: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ProcessSuccess" />
);
export const ProcessNeutral: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ProcessNeutral" />
);
export const ProcessInProgress: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ProcessInProgress" />
);
export const ProcessDisabled: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ProcessDisabled" />
);
export const ProcessDraft: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ProcessDraft" />
);
export const ConnectivityAvailable: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ConnectivityAvailable" />
);
export const ConnectivityBusy: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ConnectivityBusy" />
);
export const ConnectivityUnavailable: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ConnectivityUnavailable" />
);
export const ConnectivityOffline: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ConnectivityOffline" />
);
export const ConnectivityNeutral: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <CustomizationWrapper {...isTestEnvironment} variant="ConnectivityNeutral" />
);

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Status/StatusBadge/Customization",
  component: StatusBadge,
  excludeStories: ["getStyles", "makeBadge"],
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};
