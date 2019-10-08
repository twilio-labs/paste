export interface TableOfContentsProps {
  data?: [
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
