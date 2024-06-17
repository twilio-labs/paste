// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { ThumbsDownIcon } from "@twilio-paste/icons/esm/ThumbsDownIcon";
import { ThumbsUpIcon } from "@twilio-paste/icons/esm/ThumbsUpIcon";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { ListItem, OrderedList } from "@twilio-paste/list";
import { RadioButton, RadioButtonGroup } from "@twilio-paste/radio-button-group";
import { Stack } from "@twilio-paste/stack";
import { uid, useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import {
  AIChatLogger,
  AIChatMessage,
  AIChatMessageActionCard,
  AIChatMessageActionGroup,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageLoading,
  useAIChatLogger,
} from "../src";
import type { AIMessageVariants, AIPartialIDChat } from "../src";

export default {
  title: "Components/AI Chat Log/useAIChatLogger",
};

export const UseChatLogger: StoryFn = () => {
  const pushID = useUID();
  const popID = useUID();
  const messageID = useUID();
  const variantId = useUID();

  const { aiChats, push, pop, clear } = useAIChatLogger(
    {
      variant: "user",
      content: (
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said at 2:36pm">Gibby Radki</AIChatMessageAuthor>
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageBody>
        </AIChatMessage>
      ),
    },
    {
      variant: "bot",
      content: (
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus
            eligendiiure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit
            nesciunt impedit repellat assumenda.
            <Box paddingTop="space50">
              <ButtonGroup>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30009
                </Button>
              </ButtonGroup>
            </Box>
          </AIChatMessageBody>
          <AIChatMessageActionGroup>
            <AIChatMessageActionCard aria-label="Feedback form">
              Is this helpful?
              <Button variant="reset" size="reset" aria-label="this is a helpful response">
                <ThumbsUpIcon decorative={false} title="like result" />
              </Button>
              <Button variant="reset" size="reset" aria-label="this is not a helpful response">
                <ThumbsDownIcon decorative={false} title="dislike result" />
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
      ),
    },
  );

  const handlePushSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const message = data.get("message") as string;
    const variant = (data.get("variant") || "ai") as AIMessageVariants;
    const id = data.get("id");
    const isBot = variant === "bot";

    const chat: AIPartialIDChat = {
      variant,
      content: (
        <AIChatMessage variant={variant}>
          <AIChatMessageAuthor aria-label={isBot ? "AI said" : "You said"}>
            {isBot ? "Good Bot" : "Gibby Radki"}
          </AIChatMessageAuthor>
          <AIChatMessageBody>{message}</AIChatMessageBody>
        </AIChatMessage>
      ),
    };

    if (id || isBot) {
      chat.id = id?.toString() || uid(chat.content);
    }

    if (isBot) {
      push({
        id: uid(chat.content),
        variant,
        content: (
          <AIChatMessage variant="bot">
            <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
            <AIChatMessageBody>
              <AIChatMessageLoading />
            </AIChatMessageBody>
          </AIChatMessage>
        ),
      });
      setTimeout(() => {
        pop(chat.id);
        push(chat);
      }, 1000);
    } else {
      push(chat);
    }

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
              <RadioButton value="bot">bot</RadioButton>
              <RadioButton value="user">user</RadioButton>
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
          {aiChats.map(({ id }) => (
            <ListItem key={id}>
              <code>{id}</code>
            </ListItem>
          ))}
        </OrderedList>
      </Box>
      <AIChatLogger aiChats={aiChats} />
    </Stack>
  );
};
UseChatLogger.parameters = {
  a11y: {
    // no need to a11y check composition of a11y checked components
    disable: true,
  },
};
