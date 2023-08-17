import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {useTransition, animated, useReducedMotion} from '@twilio-paste/animation-library';

import {ChatLog} from './ChatLog';
import type {Chat} from './useChatLogger';

const AnimatedChat = animated(Box);
type StyleProps = React.ComponentProps<typeof AnimatedChat>['style'];

export interface ChatLoggerProps {
  chats: Chat[];
  children?: never;
}

const buildTransitionX = (chat: Chat): number => {
  if (chat.variant === 'inbound') return -100;
  if (chat.variant === 'outbound') return 100;
  return 0;
};

const ChatLogger: React.FC<ChatLoggerProps> = ({chats}) => {
  const loggerRef = React.useRef<HTMLDivElement>(null);

  const transitions = useTransition(chats, {
    keys: (chat: Chat) => chat.id,
    from: (chat: Chat): StyleProps => ({opacity: 0, x: buildTransitionX(chat)}),
    enter: {opacity: 1, x: 0},
    leave: (chat: Chat): StyleProps => ({opacity: 0, x: buildTransitionX(chat)}),
    config: {
      mass: 0.7,
      tension: 190,
      friction: 16,
    },
  });

  React.useEffect(() => {
    const chatItems = loggerRef.current?.querySelectorAll('[role="listitem"]');
    const lastItem = chatItems?.[chatItems.length - 1];
    lastItem?.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
  }, [chats]);

  const animatedChats = useReducedMotion()
    ? chats.map((chat) => React.cloneElement(chat.content, {key: chat.id}))
    : transitions((styles: StyleProps, chat: Chat, {key}: {key: string}) => (
        <AnimatedChat as="div" style={styles} key={key}>
          {chat.content}
        </AnimatedChat>
      ));

  return <ChatLog ref={loggerRef}>{animatedChats}</ChatLog>;
};

ChatLogger.displayName = 'ChatLogger';

export {ChatLogger};
