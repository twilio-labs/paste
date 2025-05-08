import type { Story } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Card } from "@twilio-paste/card";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Paragraph } from "@twilio-paste/paragraph";
import { Stack } from "@twilio-paste/stack";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { Label, RequiredDot } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Label",
  component: Label,
};

export const Default = (): React.ReactNode => {
  return (
    <>
      <Label htmlFor="label">Label</Label>
      <Label htmlFor="label" required>
        Required Label
      </Label>
      <Label htmlFor="label" optional>
        Optional Label
      </Label>
    </>
  );
};

export const Disabled = (): React.ReactNode => {
  return (
    <>
      <Label htmlFor="label" disabled>
        Label
      </Label>
      <Label htmlFor="label" required disabled>
        Required Label
      </Label>
      <Label htmlFor="label" optional disabled>
        Optional Label
      </Label>
    </>
  );
};

export const Inverse = (): React.ReactNode => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor="label" variant="inverse">
        Label
      </Label>
      <Label htmlFor="label" required variant="inverse">
        Required Label
      </Label>
      <Label htmlFor="label" optional variant="inverse">
        Optional Label
      </Label>
    </Box>
  );
};

export const I18n = (): React.ReactNode => {
  return (
    <>
      <Label htmlFor="label" required i18nRequiredLabel="(requis)">
        Prénom
      </Label>
    </>
  );
};

I18n.storyName = "i18n label";

export const Customized: Story = () => {
  const currentTheme = useTheme();
  return (
    <Stack orientation="vertical" spacing="space20">
      <Box marginBottom="space70">
        <Paragraph>Default:</Paragraph>
        <Card>
          <Label htmlFor="label">Label</Label>
          <Label required htmlFor="required_label">
            Required label
          </Label>
          <Box display="flex" alignContent="start">
            <RequiredDot />
          </Box>
          <Label optional htmlFor="optional_label">
            Optional label
          </Label>
        </Card>
      </Box>
      <Box marginBottom="space70">
        <Paragraph>Customized:</Paragraph>
        <Card>
          <CustomizationProvider
            disableAnimations={true}
            theme={currentTheme}
            elements={{
              LABEL: { color: "colorTextWarningStrong", fontWeight: "fontWeightLight" },
              LABEL_REQUIRED_DOT: { backgroundColor: "colorBackgroundDestructiveStrong" },
              REQUIRED_DOT: { backgroundColor: "colorBackgroundDestructiveStrong" },
              REQUIRED_DOT_WRAPPER: { cursor: "help" },
            }}
          >
            <Label htmlFor="label">Label</Label>
            <Label required htmlFor="required_label" data-testid="label_test">
              Required label
            </Label>
            <Box display="flex" alignContent="start">
              <RequiredDot data-testid="required_dot" />
            </Box>
            <Label optional htmlFor="optional_label">
              Optional label
            </Label>
          </CustomizationProvider>
        </Card>
      </Box>
      <Box marginBottom="space70">
        <Paragraph>Customized with custom element attribute:</Paragraph>
        <Card>
          <CustomizationProvider
            disableAnimations={true}
            theme={currentTheme}
            elements={{
              FOO: { color: "colorTextWarningStrong", fontWeight: "fontWeightLight" },
              FOO_REQUIRED_DOT: { backgroundColor: "colorBackgroundDestructiveStrong" },
              BAR: { backgroundColor: "colorBackgroundDestructiveStrong" },
              BAR_WRAPPER: { cursor: "help" },
              TAR_OPTIONAL_TEXT: { fontStyle: "normal", color: "colorTextWarningStrong" },
            }}
          >
            <Label htmlFor="label" element="FOO">
              Label
            </Label>
            <Label required htmlFor="required_label" element="FOO" data-testid="custom_label_test">
              Required label
            </Label>
            <Box display="flex" alignContent="start">
              <RequiredDot data-testid="custom_required_dot" element="BAR" />
            </Box>
            <Label optional htmlFor="optional_label" element="TAR">
              Optional label
            </Label>
          </CustomizationProvider>
        </Card>
      </Box>
    </Stack>
  );
};
Customized.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
