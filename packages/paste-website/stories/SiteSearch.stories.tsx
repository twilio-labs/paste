import { type StoryFn } from "@storybook/react";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { SearchEmptyState } from "../src/components/site-search/SearchEmptyState";
import { SearchForm } from "../src/components/site-search/SearchForm";
import { SearchModal } from "../src/components/site-search/SearchModal";
import { SearchResultsList } from "../src/components/site-search/SearchResults";
import { SearchResultsLoading } from "../src/components/site-search/SearchResultsLoading";
import { type GroupedSearchResults } from "../src/components/site-search/types";
import { SiteHeaderSearch } from "../src/components/site-wrapper/site-header/SiteHeaderSearch";
import { mockResults } from "./__fixtures__/searchresults.fixture";

const MockSearchModal: React.FC<{
  results: GroupedSearchResults;
  searchQuery: string;
  loading?: boolean;
  showEmptyState?: boolean;
}> = ({ results, searchQuery, loading, showEmptyState }) => {
  const modalHeadingId = useUID();
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <SearchModal isOpen={true} ariaLabelledby={modalHeadingId} onDismiss={() => {}} initialFocusRef={inputRef}>
      <SearchForm
        onSubmit={() => {}}
        hasResults={Object.keys(results).length > 0}
        onClear={() => {}}
        ariaLabelledBy={modalHeadingId}
        inputValue={searchQuery}
        onChange={() => {}}
        inputRef={inputRef}
      />
      {loading && Object.keys(results).length === 0 && <SearchResultsLoading />}
      {showEmptyState && Object.keys(results).length === 0 && <SearchEmptyState searchQuery={searchQuery} />}
      <SearchResultsList results={results} />
    </SearchModal>
  );
};
export const SiteSearchTrigger: StoryFn = () => {
  return <SiteHeaderSearch />;
};

export const SiteSearchModalInitialState: StoryFn = () => {
  return <MockSearchModal results={{}} searchQuery="" />;
};

export const SiteSearchModalLoading: StoryFn = () => {
  return <MockSearchModal results={{}} searchQuery="test query" loading />;
};

export const SiteSearchModalEmptyState: StoryFn = () => {
  return <MockSearchModal results={{}} searchQuery="test query" showEmptyState />;
};

export const SiteSearchModalResultsState: StoryFn = () => {
  return <MockSearchModal results={mockResults} searchQuery="test query" showEmptyState />;
};

export default {
  title: "Website/SiteSearch",
};
