import { Avatar } from "@twilio-paste/core/avatar";
import { Stack } from "@twilio-paste/core/stack";
import * as React from "react";
import type { JSX } from "react";

const AvatarPreview = (): JSX.Element => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Avatar size="sizeIcon30" name="Trayvon Martin" />
      <Avatar size="sizeIcon40" name="Breonna Taylor" />
      <Avatar size="sizeIcon50" name="Shantel Davis" />
      <Avatar size="sizeIcon60" name="Walter Scott" />
      <Avatar size="sizeIcon70" name="James Baldwin" />
      <Avatar size="sizeIcon80" name="Toni Morrison" />
      <Avatar size="sizeIcon90" name="Chimamanda Ngozi Adichie" />
      <Avatar size="sizeIcon100" name="Sarah Li" />
      <Avatar size="sizeIcon110" name="Katie Porter" />
    </Stack>
  );
};

export { AvatarPreview };
