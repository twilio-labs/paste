import type { StoryFn } from "@storybook/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Stack } from "@twilio-paste/stack";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { Paragraph } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Paragraph",
  component: Paragraph,
};

export const Default = (): React.ReactNode => {
  return (
    <>
      <Paragraph>
        Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
        API.
      </Paragraph>
      <Paragraph>
        Proactively inform customers about account activity, purchase confirmations, and shipping notifications with the
        Programmable Messaging API.
      </Paragraph>
      <Paragraph marginBottom="space0">
        Build customer relationships with secure, cross-channel conversations that can include multiple parties, all on
        one platform with the Conversations API.
      </Paragraph>
    </>
  );
};

export const CustomParagraph: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <Stack orientation="vertical" spacing="space60">
      <Paragraph>
        <strong>Default paragraph.</strong> Deliver critical time-sensitive messages to employees and customers at scale
        with the Programmable Messaging API.
      </Paragraph>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={currentTheme}
        elements={{
          PARAGRAPH: {
            backgroundColor: "colorBackgroundPrimaryWeakest",
            color: "colorTextError",
            padding: "space40",
          },
        }}
      >
        <Paragraph>
          <strong>Customized paragraph.</strong> Deliver critical time-sensitive messages to employees and customers at
          scale with the Programmable Messaging API.
        </Paragraph>
      </CustomizationProvider>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={currentTheme}
        elements={{
          NEW_PARAGRAPH: {
            backgroundColor: "colorBackgroundTrial",
            color: "colorTextLink",
            padding: "space60",
          },
        }}
      >
        <Paragraph element="NEW_PARAGRAPH">
          <strong>Customized element paragraph.</strong> Deliver critical time-sensitive messages to employees and
          customers at scale with the Programmable Messaging API.
        </Paragraph>
      </CustomizationProvider>
    </Stack>
  );
};
CustomParagraph.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
