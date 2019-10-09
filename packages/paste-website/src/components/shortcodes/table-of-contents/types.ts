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
