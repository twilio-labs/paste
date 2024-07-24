import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import {Badge} from "@twilio-paste/badge";
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
          <Box backgroundColor="colorBackgroundRequired" height="6px" width="6px" borderRadius="borderRadiusCircle" />
        </CornerOrnament>
      </CornerOrnamentContainer>

      <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
        <CornerOrnamentElement>
          <Avatar size="sizeIcon80" src="https://avatars.githubusercontent.com/u/55083528?v=4" name="GitHub avatar" />
        </CornerOrnamentElement>
        <CornerOrnament>
          <Badge variant="notification_counter" size="small">9+</Badge>
        </CornerOrnament>
      </CornerOrnamentContainer>
    </Stack>
  );
};
