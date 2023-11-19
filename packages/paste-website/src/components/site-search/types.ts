type CommonSearchItem = {
  content: string;
  heading: string;
  path: string;
  similarity: number;
  source: string;
  slug: string;
  meta: {
    title: string;
  };
};
export type DocSearchItem = CommonSearchItem & {
  type: "markdown";
  meta: {
    description: string;
    package: string;
    slug: string;
  };
};
export type DiscussionSearchItem = CommonSearchItem & {
  type: "github-discussions";
  meta: {
    id: string;
    updatedAt: string;
  };
};

export type SearchItem = DocSearchItem | DiscussionSearchItem;

export type SearchResults = {
  data: SearchItem[];
};
export type GroupedSearchResults = {
  [key: string]: SearchItem[];
};
