import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { ListItem, OrderedList } from "@twilio-paste/list";
import { RadioButton, RadioButtonGroup } from "@twilio-paste/radio-button-group";
import { Stack } from "@twilio-paste/stack";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";



import { Avatar } from "@twilio-paste/avatar";
import { ButtonGroup } from "@twilio-paste/button-group";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";


import {
  AIChatLog
  AIChatLoggergerger,
  AIChatMessage,
  AIChatMessageBody,
  AIChatMessageFeedback,
  AIChatMessageLoading,
  AIChatMessageMeta,
  useAIChatLogger
} from "../src";


// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/AI Chat Log/useAIChatLogger",
};






export const UseChatLogger: StoryFn = () => {
  const pushID = useUID();
  const popID = useUID();
  const messageID = useUID();
  const variantId = useUID();

  const { chats, push, pop, clear } = useAIChatLogger(
    {
      content: (
        <AIChatMessage>
          <AIChatMessageBody>Hi my name is Jane Doe how can I help you?</AIChatMessageBody>
        </AIChatMessage>
      ),
    },
    {
      content: (
        <AIChatMessage>
          <AIChatMessageBody>I need some help with the Twilio API</AIChatMessageBody>
        </AIChatMessage>
      ),
    },
    {
      content: (
        <AIChatMessage>
          <AIChatMessageBody>Of course! Can you provide more detail?</AIChatMessageBody>
        </AIChatMessage>
      ),
    },
  );
  console.log(chats, push, pop);

  const handlePushSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const message = data.get("message");
    const variant = (data.get("variant") || "inbound") as MessageVariants;
    const id = data.get("id");

    const chat: PartialIDChat = {
      variant,
      content: (
        <AIChatMessage variant={variant}>
          <AIChatMessageBody>{message}</AIChatMessageBody>
        </AIChatMessage>
      ),
    };

    if (id) {
      chat.id = id?.toString();
    }

    push(chat);
    form.reset();
  };

  const handlePopSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const id = data.get("id")?.toString();

    pop(id);
    form.reset();
  };

  return (
    <Stack orientation="vertical" spacing="space80">
      <Box display="flex" columnGap="space80" alignItems="flex-start">
        <form onSubmit={handlePushSubmit}>
          <Stack orientation="vertical" spacing="space40">
            <legend>Push</legend>
            <div>
              <Label required htmlFor={messageID}>
                Message
              </Label>
              <Input required name="message" id={messageID} type="text" />
            </div>
            <div>
              <Label htmlFor={pushID}>Push ID</Label>
              <Input name="id" id={pushID} type="text" />
            </div>
            <RadioButtonGroup required id={variantId} attached name="variant" legend="variant">
              <RadioButton value="inbound">inbound</RadioButton>
              <RadioButton value="outbound">outbound</RadioButton>
            </RadioButtonGroup>
            <Button type="submit" variant="secondary">
              Submit Push
            </Button>
          </Stack>
        </form>
        <form onSubmit={handlePopSubmit}>
          <Stack orientation="vertical" spacing="space40">
            <legend>Pop</legend>
            <div>
              <Label htmlFor={popID}>Pop ID</Label>
              <Input name="id" id={popID} type="text" />
            </div>
            <Button type="submit" variant="secondary">
              Submit Pop
            </Button>
          </Stack>
        </form>
        <Stack orientation="vertical" spacing="space40">
          <legend>Clear</legend>
          <Button type="submit" variant="secondary" onClick={clear}>
            Clear All History
          </Button>
        </Stack>
        <OrderedList aria-label="ordered list">
          {chats.map(({ id }) => (
            <ListItem key={id}>
              <code>{id}</code>
            </ListItem>
          ))}
        </OrderedList>
      </Box>
      <AIChatLogger chats={chats} />
    </Stack>
  );
};
UseChatLogger.parameters = {
  a11y: {
    // no need to a11y check composition of a11y checked components
    disable: true,
  },
};
