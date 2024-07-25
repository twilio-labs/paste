import { Avatar } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { GitIcon } from "@twilio-paste/icons/esm/GitIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { Stack } from "@twilio-paste/stack";
import * as React from "react";

import { CornerOrnament, CornerOrnamentContainer, CornerOrnamentElement } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Corner Ornament",
  component: CornerOrnamentContainer,
};

export const Default = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space30">
      <CornerOrnamentContainer cornerOrnamentType="dot" size="sizeIcon80">
        <CornerOrnamentElement>
          <Avatar size="sizeIcon80" src="https://avatars.githubusercontent.com/u/55083528?v=4" name="GitHub avatar" />
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
