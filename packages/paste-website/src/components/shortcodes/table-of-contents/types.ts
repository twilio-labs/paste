export interface TableOfContentsProps {
  data?: [
    {
      value: string;
      depth: number;
    }
  ];
}

export interface TableOfContentsListItemProps {
  depth?: string;
  key?: string;
}
