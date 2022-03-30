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
