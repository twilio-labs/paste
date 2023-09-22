import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Card } from "@twilio-paste/card";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Heading } from "@twilio-paste/heading";
import { Paragraph } from "@twilio-paste/paragraph";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { Separator } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Separator",
  component: Separator,
};

export const Horizontal = (): React.ReactNode => {
  return (
    <>
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing="space70" />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing="space70" />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing="space70" />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
    </>
  );
};

Horizontal.storyName = "horizontal";

export const Vertical = (): React.ReactNode => {
  return (
    <>
      <Box display="flex" marginBottom="space70">
        <Text as="span">Option 1</Text>
        <Separator orientation="vertical" horizontalSpacing="space40" />
        <Text as="span">Option 2</Text>
        <Separator orientation="vertical" horizontalSpacing="space40" />
        <Text as="span">Option 3</Text>
        <Separator orientation="vertical" horizontalSpacing="space40" />
        <Text as="span">Option 4</Text>
        <Separator orientation="vertical" horizontalSpacing="space40" />
        <Text as="span">Option 5</Text>
      </Box>
      <Box display="flex">
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
        <Separator orientation="vertical" horizontalSpacing="space70" />
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
        <Separator orientation="vertical" horizontalSpacing="space70" />
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
      </Box>
    </>
  );
};

Vertical.storyName = "vertical";

export const Responsive = (): React.ReactNode => {
  return (
    <>
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing={["space20", "space60", "space100"]} />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing={["space20", "space60", "space100"]} />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Separator orientation="horizontal" verticalSpacing={["space20", "space60", "space100"]} />
      <Paragraph>Nulla vitae elit libero, a pharetra augue.</Paragraph>
      <Box display="flex">
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
        <Separator orientation="vertical" horizontalSpacing={["space20", "space60", "space190"]} />
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
        <Separator orientation="vertical" horizontalSpacing={["space20", "space60", "space190"]} />
        <Card>
          <Heading as="h2" variant="heading20">
            An Example Card
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus asperiores id dolor aliquid est
            quibusdam laborum hic eligendi cupiditate, nam fuga debitis excepturi quis libero, expedita exercitationem
            provident? Eligendi?
          </Paragraph>
        </Card>
      </Box>
    </>
  );
};

Responsive.storyName = "responsive";

export const CustomSeparator: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <Stack orientation="vertical" spacing="space60">
      <Box>
        <Card>
          <Paragraph marginBottom="space0">
            <strong>Default</strong>
          </Paragraph>
        </Card>
        <Separator orientation="horizontal" verticalSpacing="space70" />
        <Card>
          <Paragraph marginBottom="space0">Nulla vitae elit libero, a pharetra augue.</Paragraph>
        </Card>
        <Separator orientation="horizontal" verticalSpacing="space70" />
        <Card>
          <Paragraph marginBottom="space0">Nulla vitae elit libero, a pharetra augue.</Paragraph>
        </Card>
      </Box>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={currentTheme}
        elements={{
          SEPARATOR: {
            borderColor: "colorBorderDestructive",
            borderWidth: "borderWidth40",
          },
        }}
      >
        <Box>
          <Card>
            <Paragraph marginBottom="space0">
              <strong>Customized</strong>
            </Paragraph>
          </Card>
          <Separator orientation="horizontal" verticalSpacing="space70" />
          <Card>
            <Paragraph marginBottom="space0">Nulla vitae elit libero, a pharetra augue.</Paragraph>
          </Card>
          <Separator orientation="horizontal" verticalSpacing="space70" />
          <Card>
            <Paragraph marginBottom="space0">Nulla vitae elit libero, a pharetra augue.</Paragraph>
          </Card>
        </Box>
      </CustomizationProvider>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={currentTheme}
        elements={{
          NEW_SEPARATOR: {
            borderColor: "colorBorderPrimary",
            borderWidth: "borderWidth30",
          },
          ANOTHER_NEW_SEPARATOR: {
            borderColor: "colorBorderSuccess",
            borderWidth: "borderWidth40",
            borderStyle: "dashed",
          },
        }}
      >
        <Box>
          <Card>
            <Paragraph marginBottom="space0">
              <strong>Customized element</strong>
            </Paragraph>
          </Card>
          <Separator orientation="horizontal" verticalSpacing="space70" element="NEW_SEPARATOR" />
          <Card>
            <Paragraph marginBottom="space0">Nulla vitae elit libero, a pharetra augue.</Paragraph>
          </Card>
          <Separator orientation="horizontal" verticalSpacing="space70" element="ANOTHER_NEW_SEPARATOR" />
          <Card>
            <Paragraph marginBottom="space0">Nulla vitae elit libero, a pharetra augue.</Paragraph>
          </Card>
        </Box>
      </CustomizationProvider>
    </Stack>
  );
};
CustomSeparator.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
