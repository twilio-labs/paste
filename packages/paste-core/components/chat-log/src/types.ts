export type MessageVariants = 'inbound' | 'outbound';

export interface ChatMessageProps {
  children?: React.ReactNode;
  variant: MessageVariants;
  element?: string;
}

export interface ChatBubbleProps {
  children?: React.ReactNode;
  element?: string;
}

export interface ChatMessageMetaProps {
  ['aria-label']: string;
  children: NonNullable<React.ReactNode>;
  element?: string;
}

export interface ChatMessageMetaItemProps {
  children: NonNullable<React.ReactNode>;
  element?: string;
}
