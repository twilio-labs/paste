import { Avatar } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Heading } from "@twilio-paste/heading";
import { GitIcon } from "@twilio-paste/icons/esm/GitIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { Stack } from "@twilio-paste/stack";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { CornerOrnament, CornerOrnamentContainer, CornerOrnamentElement } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Corner Ornament",
  component: CornerOrnamentContainer,
};

export const Default = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space60">
      <CornerOrnamentContainer cornerOrnamentType="dot" size="sizeIcon70">
        <CornerOrnamentElement>
          <Avatar size="sizeIcon70" src="https://avatars.githubusercontent.com/u/55083528?v=4" name="GitHub avatar" />
        </CornerOrnamentElement>
        <CornerOrnament>
          <ScreenReaderOnly>ornament has notification</ScreenReaderOnly>
          <Box backgroundColor="colorBackgroundRequired" height="6px" width="6px" borderRadius="borderRadiusCircle" />
        </CornerOrnament>
      </CornerOrnamentContainer>
      <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
        <CornerOrnamentElement>
          <Avatar size="sizeIcon80" src="https://avatars.githubusercontent.com/u/55083528?v=4" name="GitHub avatar" />
        </CornerOrnamentElement>
        <CornerOrnament>
          <ScreenReaderOnly>notification value</ScreenReaderOnly>
          <Badge as="span" variant="notification_counter" size="small">
            9+
          </Badge>
        </CornerOrnament>
      </CornerOrnamentContainer>
      <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
        <CornerOrnamentElement>
          <GitIcon size="sizeIcon80" title="GitHub avatar" />
        </CornerOrnamentElement>
        <CornerOrnament>
          <ScreenReaderOnly>notification value</ScreenReaderOnly>
          <Badge as="span" variant="notification_counter" size="small">
            9+
          </Badge>
        </CornerOrnament>
      </CornerOrnamentContainer>
    </Stack>
  );
};

export const CornerOrnamentPositions = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space60">
      <CornerOrnamentContainer cornerOrnamentType="dot" size="sizeIcon70">
        <CornerOrnamentElement>
          <Avatar size="sizeIcon70" src="https://avatars.githubusercontent.com/u/55083528?v=4" name="GitHub avatar" />
        </CornerOrnamentElement>
        <CornerOrnament>
          <ScreenReaderOnly>ornament has notification</ScreenReaderOnly>
          <Box backgroundColor="colorBackgroundRequired" height="6px" width="6px" borderRadius="borderRadiusCircle" />
        </CornerOrnament>
      </CornerOrnamentContainer>
      <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
        <CornerOrnamentElement>
          <Avatar size="sizeIcon80" src="https://avatars.githubusercontent.com/u/55083528?v=4" name="GitHub avatar" />
        </CornerOrnamentElement>
        <CornerOrnament>
          <ScreenReaderOnly>notification value</ScreenReaderOnly>
          <Badge as="span" variant="notification_counter" size="small">
            9+
          </Badge>
        </CornerOrnament>
      </CornerOrnamentContainer>
      <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
        <CornerOrnamentElement>
          <GitIcon size="sizeIcon80" title="GitHub avatar" />
        </CornerOrnamentElement>
        <CornerOrnament>
          <ScreenReaderOnly>notification value</ScreenReaderOnly>
          <Badge as="span" variant="notification_counter" size="small">
            9+
          </Badge>
        </CornerOrnament>
      </CornerOrnamentContainer>
    </Stack>
  );
};

CornerOrnamentPositions.storyName = "Corner Ornament Positions";

export const CornerOrnamentSizes = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <Heading as="h3" variant="heading30">
        Avatar:
      </Heading>
      <Stack orientation="horizontal" spacing="space60">
        <CornerOrnamentContainer cornerOrnamentType="dot" size="sizeIcon70">
          <CornerOrnamentElement>
            <Avatar size="sizeIcon70" src="https://avatars.githubusercontent.com/u/55083528?v=4" name="GitHub avatar" />
          </CornerOrnamentElement>
          <CornerOrnament>
            <ScreenReaderOnly>ornament has notification</ScreenReaderOnly>
            <Box backgroundColor="colorBackgroundRequired" size={"size10"} borderRadius="borderRadiusCircle" />
          </CornerOrnament>
        </CornerOrnamentContainer>
      </Stack>
      <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
        <CornerOrnamentElement>
          <Avatar size="sizeIcon80" src="https://avatars.githubusercontent.com/u/55083528?v=4" name="GitHub avatar" />
        </CornerOrnamentElement>
        <CornerOrnament>
          <ScreenReaderOnly>notification value</ScreenReaderOnly>
          <Badge as="span" variant="notification_counter" size="small">
            9+
          </Badge>
        </CornerOrnament>
      </CornerOrnamentContainer>
      <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon70">
        <CornerOrnamentElement>
          <GitIcon size="sizeIcon80" title="GitHub avatar" />
        </CornerOrnamentElement>
        <CornerOrnament>
          <ScreenReaderOnly>notification value</ScreenReaderOnly>
          <Badge as="span" variant="notification_counter" size="small">
            9+
          </Badge>
        </CornerOrnament>
      </CornerOrnamentContainer>
    </Stack>
  );
};

CornerOrnamentSizes.storyName = "Corner Ornament Sizes";

export const CornerOrnamentCustomization = (): React.ReactNode => {
  const currentTheme = useTheme();

  return (
    <Stack orientation="horizontal" spacing="space60">
      <CustomizationProvider
        theme={currentTheme}
        elements={{
          CORNER_ORNAMENT: {
            color: "colorTextSuccess",
          },
          CORNER_ORNAMENT_ELEMENT: {
            borderStyle: "solid",
            borderWidth: "borderWidth10",
            borderColor: "colorBorderPrimaryWeak",
          },
          CORNER_ORNAMENT_CONTAINER: {
            backgroundColor: "colorBackgroundPrimaryStronger",
            padding: "space70",
          },
        }}
      >
        <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80">
          <CornerOrnamentElement>
            <Avatar size="sizeIcon80" src="https://avatars.githubusercontent.com/u/55083528?v=4" name="GitHub avatar" />
          </CornerOrnamentElement>
          <CornerOrnament>
            <GitIcon size="sizeIcon40" decorative />
          </CornerOrnament>
        </CornerOrnamentContainer>
      </CustomizationProvider>
    </Stack>
  );
};

CornerOrnamentCustomization.storyName = "Corner Ornament Customization";
CornerOrnamentCustomization.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
