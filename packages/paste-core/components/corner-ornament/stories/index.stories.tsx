import { Avatar } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Heading } from "@twilio-paste/heading";
import { ErrorIcon } from "@twilio-paste/icons/esm/ErrorIcon";
import { FileVideoIcon } from "@twilio-paste/icons/esm/FileVideoIcon";
import { NewIcon } from "@twilio-paste/icons/esm/NewIcon";
import { NotificationIcon } from "@twilio-paste/icons/esm/NotificationIcon";
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
            100
          </Badge>
        </CornerOrnament>
      </CornerOrnamentContainer>
      <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
        <CornerOrnamentBase>
          <NewIcon color="colorTextIcon" size="sizeIcon80" title="Paste brand" decorative={false} />
        </CornerOrnamentBase>
        <CornerOrnament>
          <ScreenReaderOnly>notification value</ScreenReaderOnly>
          <Badge as="span" variant="notification_counter" size="small">
            100
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
          <small>sizeIcon110</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon110">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon110" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;defaul&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon100</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon100">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon100" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;defaul&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon90</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon90">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon90" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;small&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon80" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;small&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon70</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon70">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon70" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;small&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon60</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon60">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon60" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;small&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon50</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon50">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon50" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                100
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
          <small>sizeIcon110</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon110" position="top_end">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon110" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;defaul&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon100</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon100" position="top_end">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon100" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;defaul&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon90</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon90" position="top_end">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon90" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;small&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80" position="top_end">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon80" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;small&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon70</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon70" position="top_end">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon70" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;small&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon60</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon60" position="top_end">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon60" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                100
              </Badge>
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>badge size=&quot;small&quot;</small>
        </Box>
        <Box>
          <small>sizeIcon50</small>
          <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon50" position="top_end">
            <CornerOrnamentBase>
              <NotificationIcon size="sizeIcon50" title="notification" decorative={false} />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ScreenReaderOnly>notification value</ScreenReaderOnly>
              <Badge as="span" variant="notification_counter" size="small">
                100
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
          <small>sizeIcon110</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon110">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon110" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon70" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon70</small>
        </Box>
        <Box>
          <small>sizeIcon100</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon100">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon100" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon60" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon60</small>
        </Box>
        <Box>
          <small>sizeIcon90</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon90">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon90" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon80">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon80" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon70</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon70">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon70" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon60</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon60">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon60" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon50</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon50">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon50" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon40</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon40">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon40" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon30</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon30">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon30" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon20</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon20">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon20" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
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
          <small>sizeIcon110</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon110" position="top_end">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon110" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon70" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon70</small>
        </Box>
        <Box>
          <small>sizeIcon100</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon100" position="top_end">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon100" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon60" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon60</small>
        </Box>
        <Box>
          <small>sizeIcon90</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon90" position="top_end">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon90" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon80" position="top_end">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon80" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon70</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon70" position="top_end">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon70" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon60</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon60" position="top_end">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon60" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon50</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon50" position="top_end">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon50" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon40</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon40" position="top_end">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon40" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon30</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon30" position="top_end">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon30" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon20</small>
          <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon20" position="top_end">
            <CornerOrnamentBase>
              <FileVideoIcon title="file ornament" decorative={false} color="colorTextIcon" size="sizeIcon20" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <Avatar size="sizeIcon10" src="./avatars/avatar8.png" name="Paste brand" />
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
          <small>sizeIcon110</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon110">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon110" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon70" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon70</small>
        </Box>
        <Box>
          <small>sizeIcon100</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon100">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon100" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon50" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon50</small>
        </Box>
        <Box>
          <small>sizeIcon90</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon90">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon90" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon40" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon40</small>
        </Box>
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon40" />
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
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon30" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon60</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon60">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon60" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon50</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon50">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon50" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon10" />
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
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon30</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon30">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
        <Box>
          <small>sizeIcon20</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon20">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon20" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon05" />
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
          <small>sizeIcon110</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon110" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon110" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon70" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon70</small>
        </Box>
        <Box>
          <small>sizeIcon100</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon100" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon100" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon50" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon50</small>
        </Box>
        <Box>
          <small>sizeIcon90</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon90" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon90" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon40" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon40</small>
        </Box>
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon80" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon40" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon40</small>
        </Box>
        <Box>
          <small>sizeIcon70</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon70" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon70" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon30" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon30</small>
        </Box>
        <Box>
          <small>sizeIcon60</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon60" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon60" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon50</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon50" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon50" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon40</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon40" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon40" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon30</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon30" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
        <Box>
          <small>sizeIcon20</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon20" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon20" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <ErrorIcon color="colorTextIcon" decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
      </Stack>
    </Stack>
  );
};

SupportedIcon.storyName = "Supported Corner Ornament Icon";

export const SupportedNotificationOrnamentIcon = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <Heading as="h3" variant="heading30">
        bottom_end:
      </Heading>
      <Stack orientation="horizontal" spacing="space60">
        <Box>
          <small>sizeIcon110</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon110">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon110" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon70" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon70</small>
        </Box>
        <Box>
          <small>sizeIcon100</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon100">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon100" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon50" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon50</small>
        </Box>
        <Box>
          <small>sizeIcon90</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon90">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon90" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon40" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon40</small>
        </Box>
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
          <small>sizeIcon60</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon60">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon60" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
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
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
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
        <Box>
          <small>sizeIcon20</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon20">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon20" src="./avatars/avatar8.png" name="Paste brand" />
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
          <small>sizeIcon110</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon110" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon110" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon70" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon70</small>
        </Box>
        <Box>
          <small>sizeIcon100</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon100" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon100" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon50" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon50</small>
        </Box>
        <Box>
          <small>sizeIcon90</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon90" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon90" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon40" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon40</small>
        </Box>
        <Box>
          <small>sizeIcon80</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80" position="top_end">
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
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon70" position="top_end">
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
          <small>sizeIcon60</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon60" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon60" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon50</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon50" position="top_end">
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
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon40" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon40" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon10" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon10</small>
        </Box>
        <Box>
          <small>sizeIcon30</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon30" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon30" src="./avatars/avatar8.png" name="Paste brand" />
            </CornerOrnamentBase>
            <CornerOrnament>
              <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon05" />
            </CornerOrnament>
          </CornerOrnamentContainer>
          <small>sizeIcon05</small>
        </Box>
        <Box>
          <small>sizeIcon20</small>
          <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon20" position="top_end">
            <CornerOrnamentBase>
              <Avatar size="sizeIcon20" src="./avatars/avatar8.png" name="Paste brand" />
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
            <NewIcon size="sizeIcon40" decorative />
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
