import { Box } from "@twilio-paste/box";
import { Paragraph } from "@twilio-paste/paragraph";
import * as React from "react";

import { ExampleText } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Example Text",
  component: ExampleText,
};

export const Default = (): React.ReactNode => {
  return <ExampleText>HTTPBin echoes data in your HTTP request back to you</ExampleText>;
};

export const Inline = (): React.ReactNode => {
  return (
    <Box maxWidth="size50">
      <Paragraph>
        To create your account, provide your full name, a valid email address, and a secure password. Your password must
        contain at least eight characters, including uppercase letters, lowercase letters, numbers, and a special
        character. For example, <ExampleText>Password123!</ExampleText> is a strong option. You may be asked to verify
        your email address by clicking a link sent to your inbox.
      </Paragraph>
    </Box>
  );
};
