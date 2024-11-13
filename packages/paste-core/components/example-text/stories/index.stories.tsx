import { Box } from "@twilio-paste/box";
import { ListItem, UnorderedList } from "@twilio-paste/list";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";
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

// TODO: Choose one of the following implementations to suggest, remove the other

export const List = (): React.ReactNode => {
  return (
    <ExampleText>
      <UnorderedList marginBottom="space0">
        <ListItem>I am Jenn, the virtual assistant</ListItem>
        <ListItem>Hi are you available?</ListItem>
        <ListItem>Do not worry I will not share the answers with anyone.</ListItem>
      </UnorderedList>
    </ExampleText>
  );
};

export const TextAsList = (): React.ReactNode => {
  return (
    <ExampleText>
      <Text paddingY="space30" marginLeft="space70" display="list-item" as="span">
        I am Jenn, the virtual assistant
      </Text>
      <Text paddingY="space30" marginLeft="space70" display="list-item" as="span">
        Hi are you available?
      </Text>
      <Text paddingY="space30" marginLeft="space70" display="list-item" as="span">
        Do not worry I will not share the answers with anyone.
      </Text>
    </ExampleText>
  );
};
