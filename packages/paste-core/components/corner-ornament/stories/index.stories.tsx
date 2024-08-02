import { Avatar } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Heading } from "@twilio-paste/heading";
import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import { NotificationOrnamentIcon } from "@twilio-paste/icons/esm/NotificationOrnamentIcon";

import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { Stack } from "@twilio-paste/stack";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { CornerOrnament, CornerOrnamentBase, CornerOrnamentContainer } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Corner Ornament",
  component: CornerOrnamentContainer,
};

export const Default = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space60">
      <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
        <CornerOrnamentBase>
          <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
        </CornerOrnamentBase>
        <CornerOrnament>
          <ScreenReaderOnly>notification value</ScreenReaderOnly>
          <Badge as="span" variant="notification_counter" size="small">
            9+
          </Badge>
        </CornerOrnament>
      </CornerOrnamentContainer>
      <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
        <CornerOrnamentBase>
          <LogoTwilioIcon size="sizeIcon80" title="Paste brand" decorative={false} />
        </CornerOrnamentBase>
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

export const SupportedBadge = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <Heading as="h3" variant="heading30">
        bottom_end:
      </Heading>
      <Stack orientation="horizontal" spacing="space60">
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                9+
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;small&quot;</small>
        </Box>
      </Stack>
      <Heading as="h3" variant="heading30">
        top_end:
      </Heading>
      <Stack orientation="horizontal" spacing="space60">
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" position="top_end" size="sizeIcon80">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                9+
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;small&quot;</small>
        </Box>
      </Stack>
    </Stack>
  );
};

SupportedBadge.storyName = "Supported Corner Ornament Badge";

export const SupportedAvatar = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <Heading as="h3" variant="heading30">
        bottom_end:
      </Heading>
      <Stack orientation="horizontal" spacing="space60">
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon80">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="ornament for Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon70</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon70">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon70" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="ornament for Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
      </Stack>
      <Heading as="h3" variant="heading30">
        top_end:
      </Heading>
      <Stack orientation="horizontal" spacing="space60">
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" position="top_end" size="sizeIcon80">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="ornament for Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon70</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" position="top_end" size="sizeIcon70">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon70" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="ornament for Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
      </Stack>
    </Stack>
  );
};

SupportedAvatar.storyName = "Supported Corner Ornament Avatar";

export const SupportedIcon = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <Heading as="h3" variant="heading30">
        bottom_end:
      </Heading>
      <Stack orientation="horizontal" spacing="space60">
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <LogoTwilioIcon decorative size="sizeIcon40" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon40</small>
        </Box>
        <Box>
          <small>sizeIcon70</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon70">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon70" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <LogoTwilioIcon decorative size="sizeIcon30" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon50</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon50">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon50" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <LogoTwilioIcon decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon40</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon40">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon40" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <LogoTwilioIcon decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
        <Box>
          <small>sizeIcon30</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon30">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <LogoTwilioIcon decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
      </Stack>
      <Heading as="h3" variant="heading30">
        top_end:
      </Heading>
      <Stack orientation="horizontal" spacing="space60">
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" position="top_end" size="sizeIcon80">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <LogoTwilioIcon decorative size="sizeIcon40" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon40</small>
        </Box>
        <Box>
          <small>sizeIcon70</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" position="top_end" size="sizeIcon70">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon70" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <LogoTwilioIcon decorative size="sizeIcon30" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon50</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" position="top_end" size="sizeIcon50">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon50" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <LogoTwilioIcon decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon40</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" position="top_end" size="sizeIcon40">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon40" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <LogoTwilioIcon decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
        <Box>
          <small>sizeIcon30</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" position="top_end" size="sizeIcon30">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <LogoTwilioIcon decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
      </Stack>
    </Stack>
  );
};

SupportedAvatar.storyName = "Supported Corner Ornament Avatar";

export const SupportedNotificationOrnamentIcon = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <Heading as="h3" variant="heading30">
        bottom_end:
      </Heading>
      <Stack orientation="horizontal" spacing="space60">
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon40" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon40</small>
        </Box>
        <Box>
          <small>sizeIcon70</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon70">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon70" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon30" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon50</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon50">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon50" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon40</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon40">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon40" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
        <Box>
          <small>sizeIcon30</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon30">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
      </Stack>
      <Heading as="h3" variant="heading30">
        top_end:
      </Heading>
      <Stack orientation="horizontal" spacing="space60">
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" position="top_end" size="sizeIcon80">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon40" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon40</small>
        </Box>
        <Box>
          <small>sizeIcon70</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" position="top_end" size="sizeIcon70">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon70" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon30" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon50</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" position="top_end" size="sizeIcon50">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon50" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon40</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" position="top_end" size="sizeIcon40">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon40" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
        <Box>
          <small>sizeIcon30</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" position="top_end" size="sizeIcon30">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
      </Stack>
    </Stack>
  );
};

SupportedNotificationOrnamentIcon.storyName = "Supported Corner Ornament Notification Icon";

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
          <CornerOrnamentBase>
            <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
          </CornerOrnamentBase>
          <CornerOrnament>
            <LogoTwilioIcon size="sizeIcon40" decorative />
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
