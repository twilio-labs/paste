import type { StoryFn } from "@storybook/react";
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Column, Grid } from "@twilio-paste/grid";
import { Heading } from "@twilio-paste/heading";
import { Paragraph } from "@twilio-paste/paragraph";
import { Stack } from "@twilio-paste/stack";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { Card } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Card",
  component: Card,
};

export const Default = (): React.ReactNode => (
  <Card padding="space60">
    <Heading as="h2" variant="heading20">
      Notifications
    </Heading>
    <Paragraph marginBottom="space0">
      Proactively inform customers about account activity, purchase confirmations, and shipping notifications with the
      Programmable Messaging API.
    </Paragraph>
  </Card>
);

export const DefinedPadding = (): React.ReactNode => (
  <Card padding="space200">
    <Heading as="h2" variant="heading20">
      Mass Alerts
    </Heading>
    <Paragraph marginBottom="space0">
      Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging API.
    </Paragraph>
  </Card>
);

DefinedPadding.storyName = "Padding";

export const NoPadding = (): React.ReactNode => (
  <Card padding="space0">
    <Heading as="h2" variant="heading20">
      Marketing Messages
    </Heading>
    <Paragraph marginBottom="space0">
      Engage customers with targeted offers on the channels they prefer with the Programmable Messaging API.
    </Paragraph>
  </Card>
);

export const PropPassthrough = (): React.ReactNode => (
  <Card aria-busy aria-atomic data-qahook="ZeCard!" title="title prop">
    <Heading as="h2" variant="heading20">
      Conversations
    </Heading>
    <Paragraph marginBottom="space0">
      Build customer relationships with secure, cross-channel conversations that can include multiple parties, all on
      one platform with the Conversations API.
    </Paragraph>
  </Card>
);

export const FillHeight = (): React.ReactNode => (
  <Box>
    <Grid gutter="space30">
      <Column>
        <Card>
          <Paragraph>Without fillHeight, the card will only be as tall as its content.</Paragraph>
        </Card>
      </Column>
      <Column>
        <Card>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          </Paragraph>
        </Card>
      </Column>
    </Grid>

    <Grid gutter="space30" marginTop="space100">
      <Column>
        <Card fillHeight>
          <Paragraph>
            With fillHeight, the card will stretch to fill the height of the container. This can be useful when you need
            to align multiple cards in a row.
          </Paragraph>
        </Card>
      </Column>
      <Column>
        <Card>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          </Paragraph>
        </Card>
      </Column>
    </Grid>
  </Box>
);

export const FillWidth = (): React.ReactNode => (
  <Box>
    <Grid gutter="space40" rowGap="space70" equalColumnHeights>
      <Column span={[12, 6]}>
        <Card>
          <Box marginBottom="space30">
            <Stack orientation="horizontal" spacing="space30">
              <Heading as="h4" variant="heading40" marginBottom="space0">
                the title
              </Heading>
            </Stack>
          </Box>

          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit quam ad magnam cumque
            libero nam veniam consequuntur deserunt, officia cupiditate similique accusamus expedita possimus, commodi
            voluptate enim harum amet.
          </Paragraph>

          <Stack orientation="horizontal" spacing="space40">
            <Button variant="secondary" as="a" href="#">
              button
            </Button>
            <Anchor href="#" showExternal>
              link
            </Anchor>
          </Stack>
        </Card>
      </Column>
      <Column span={[12, 6]}>
        <Card fillWidth={true}>
          <Box marginBottom="space30">
            <Stack orientation="horizontal" spacing="space30">
              <Heading as="h4" variant="heading40" marginBottom="space0">
                With fillWidth prop
              </Heading>
            </Stack>
          </Box>

          <Paragraph>the description</Paragraph>

          <Stack orientation="horizontal" spacing="space40">
            <Button variant="secondary" as="a" href="#">
              button
            </Button>
            <Anchor href="#" showExternal>
              link
            </Anchor>
          </Stack>
        </Card>
      </Column>
      <Column span={[12, 6]}>
        <Card>
          <Box marginBottom="space30">
            <Stack orientation="horizontal" spacing="space30">
              <Heading as="h4" variant="heading40" marginBottom="space0">
                Without fillWidth prop
              </Heading>
            </Stack>
          </Box>

          <Paragraph>the description</Paragraph>

          <Stack orientation="horizontal" spacing="space40">
            <Button variant="secondary" as="a" href="#">
              button
            </Button>
            <Anchor href="#" showExternal>
              link
            </Anchor>
          </Stack>
        </Card>
      </Column>
      <Column span={[12, 6]}>
        <Card>
          <Box marginBottom="space30">
            <Stack orientation="horizontal" spacing="space30">
              <Heading as="h4" variant="heading40" marginBottom="space0">
                the title
              </Heading>
            </Stack>
          </Box>

          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit quam ad magnam cumque
            libero nam veniam consequuntur deserunt, officia cupiditate similique accusamus expedita possimus, commodi
            voluptate enim harum amet.
          </Paragraph>

          <Stack orientation="horizontal" spacing="space40">
            <Button variant="secondary" as="a" href="#">
              button
            </Button>
            <Anchor href="#" showExternal>
              link
            </Anchor>
          </Stack>
        </Card>
      </Column>
    </Grid>
  </Box>
);

export const CustomCard: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <Stack orientation="vertical" spacing="space60">
      <Card>
        <Heading as="h2" variant="heading20">
          Default
        </Heading>
        <Paragraph marginBottom="space0">
          Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
          API.
        </Paragraph>
      </Card>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={currentTheme}
        elements={{
          CARD: {
            backgroundColor: "colorBackground",
            borderColor: "colorBorderPrimary",
            padding: "space100",
          },
        }}
      >
        <Card>
          <Heading as="h2" variant="heading20">
            Customized
          </Heading>
          <Paragraph marginBottom="space0">
            Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
            API.
          </Paragraph>
        </Card>
      </CustomizationProvider>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={currentTheme}
        elements={{
          NEW_CARD: {
            backgroundColor: "colorBackgroundPrimaryWeakest",
            borderColor: "colorBorderDestructive",
            borderRadius: "borderRadius30",
            padding: "space200",
          },
        }}
      >
        <Card element="NEW_CARD">
          <Heading as="h2" variant="heading20">
            Customized element
          </Heading>
          <Paragraph marginBottom="space0">
            Deliver critical time-sensitive messages to employees and customers at scale with the Programmable Messaging
            API.
          </Paragraph>
        </Card>
      </CustomizationProvider>
    </Stack>
  );
};
CustomCard.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
