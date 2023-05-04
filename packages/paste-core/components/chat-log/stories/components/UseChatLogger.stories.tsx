import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {useUID} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/input';
import {Label} from '@twilio-paste/label';
import {Stack} from '@twilio-paste/stack';
import {Button} from '@twilio-paste/button';
import {OrderedList, ListItem} from '@twilio-paste/list';
import {RadioButtonGroup, RadioButton} from '@twilio-paste/radio-button-group';

import {ChatLogger, ChatMessage, ChatBubble, useChatLogger} from '../../src';
import type {MessageVariants} from '../../src';
import type {PartialIDChat} from '../../src/useChatLogger';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ChatLog',
};

export const UseChatLogger: StoryFn = () => {
  const pushID = useUID();
  const popID = useUID();
  const messageID = useUID();
  const variantId = useUID();

  const {chats, push, pop} = useChatLogger(
    {
      variant: 'inbound',
      content: (
        <ChatMessage variant="inbound">
          <ChatBubble>Hi my name is Jane Doe how can I help you?</ChatBubble>
        </ChatMessage>
      ),
    },
    {
      variant: 'outbound',
      content: (
        <ChatMessage variant="outbound">
          <ChatBubble>I need some help with the Twilio API</ChatBubble>
        </ChatMessage>
      ),
    },
    {
      variant: 'inbound',
      content: (
        <ChatMessage variant="inbound">
          <ChatBubble>Of course! Can you provide more detail?</ChatBubble>
        </ChatMessage>
      ),
    }
  );

  const handlePushSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const message = data.get('message');
    const variant = (data.get('variant') || 'inbound') as MessageVariants;
    const id = data.get('id');

    const chat: PartialIDChat = {
      variant,
      content: (
        <ChatMessage variant={variant}>
          <ChatBubble>{message}</ChatBubble>
        </ChatMessage>
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
    const id = data.get('id')?.toString();

    pop(id);
    form.reset();
  };

  return (
    <Stack orientation="vertical" spacing="space80">
      <Stack orientation="horizontal" spacing="space80">
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
        <OrderedList aria-label="ordered list">
          {chats.map(({id}) => (
            <ListItem key={id}>
              <code>{id}</code>
            </ListItem>
          ))}
        </OrderedList>
      </Stack>
      <ChatLogger chats={chats} />
    </Stack>
  );
};
UseChatLogger.parameters = {
  a11y: {
    // no need to a11y check composition of a11y checked components
    disable: true,
  },
};
