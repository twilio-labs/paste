import type {BoxElementProps} from '@twilio-paste/box';

export type MessageVariants = 'inbound' | 'outbound';

export interface ChatMessageProps {
  children?: React.ReactNode;
  variant: MessageVariants;
  element?: BoxElementProps['element'];
}

export interface ChatBubbleProps {
  children?: React.ReactNode;
  element?: BoxElementProps['element'];
}

export interface ChatMessageMetaProps {
  ['aria-label']: string;
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
}

export interface ChatMessageMetaItemProps {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
}
