import type { BoxStyleProps } from '@twilio-paste/box';

export type HeadingData = {
  value: string;
  depth: number;
};
export interface TableOfContentsProps {
  headings?: HeadingData[];
}

export interface TableOfContentsListItemProps {
  active?: boolean;
  depth?: string;
  key?: string;
}

export interface TableOfContentsAnchorProps extends BoxStyleProps {
  href: string;
  children: string;
}
