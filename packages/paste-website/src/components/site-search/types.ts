export type SearchItem = {
  type: string;
  source: string;
  path: string;
  similarity: number;
  slug: string;
  content: string;
  heading: string;
  meta: {
    id?: string;
    updatedAt?: string;
    title: string;
    description?: string;
    package?: string;
    slug?: string;
  };
};

export type SearchResults = {
  data: SearchItem[];
};
export type GroupedSearchResults = {
  [key: string]: SearchItem[];
};
