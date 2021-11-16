import type {BoxStyleProps} from '@twilio-paste/box';

export interface TableOfContentsProps {
  headings?: [
    {
      value: string;
      depth: number;
    }
  ];
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
