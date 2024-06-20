import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import type { EditorState } from "@twilio-paste/lexical-library";
import { $createParagraphNode, $createTextNode, $getRoot } from "@twilio-paste/lexical-library";
import * as React from "react";

import { ChatComposer, ChatComposerActionGroup, ChatComposerAttatchmentGroup, ChatComposerContainer } from "../src";
import type { ChatComposerProps } from "../src";

export default {
  title: "Components/Chat Composer/Container",
  component: ChatComposer,
};

const defaultConfig: ChatComposerProps["config"] = {
  namespace: "foo",
  onError: (error: Error) => {
    throw error;
  },
};

export const Default: StoryFn = () => {
  return (
    <ChatComposerContainer>
      <ChatComposer config={defaultConfig} ariaLabel="Basic chat composer" placeholder="Type here..." />
      <ChatComposerActionGroup>
        <Button variant="secondary_icon" size="icon">
          <AttachIcon decorative={false} title="Attach" />
        </Button>
        <Button variant="primary_icon" size="icon">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
      <ChatComposerAttatchmentGroup />
    </ChatComposerContainer>
  );
};
