/* eslint-disable react/jsx-max-depth */
import { type ModalProps } from "@twilio-paste/modal";
import { useUID } from "@twilio-paste/uid-library";
import groupBy from "lodash/groupBy";
import * as React from "react";

import { SearchEmptyState } from "./SearchEmptyState";
import { SearchForm } from "./SearchForm";
import { SearchModal } from "./SearchModal";
import { SearchResultsList } from "./SearchResults";
import { SearchResultsLoading } from "./SearchResultsLoading";
import { type GroupedSearchResults, type SearchItem, type SearchResults } from "./types";

const groupResults = (results: SearchItem[]): GroupedSearchResults => groupBy(results, "path");

export type SiteSearchProps = Pick<ModalProps, "isOpen" | "onDismiss">;

const SiteSearch: React.FC<React.PropsWithChildren<SiteSearchProps>> = ({ isOpen, onDismiss }) => {
  const modalHeadingId = useUID();

  const [searchQuery, setSearchQuery] = React.useState("");
  const [results, setResults] = React.useState<GroupedSearchResults>({});
  const [loading, setLoading] = React.useState(false);
  const [searchInitialState, setSearchInitialState] = React.useState(true);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const performSearch = React.useCallback(async (): Promise<void> => {
    if (searchQuery === "") {
      return;
    }

    setLoading(true);

    try {
      const cachedResults = sessionStorage.getItem(searchQuery);
      if (cachedResults) {
        setResults(JSON.parse(cachedResults));
      } else {
        const response = await fetch("/api/docs-search", {
          method: "POST",
          body: JSON.stringify({ prompt: searchQuery }),
        });
        const json = (await response.json()) as SearchResults;
        const groupedResults = groupResults(json.data);
        setResults(groupedResults);
        sessionStorage.setItem(searchQuery, JSON.stringify(groupedResults));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }

    setSearchInitialState(false);
    setLoading(false);
  }, [searchQuery]);

  React.useEffect(() => {
    if (searchQuery === "") {
      // reset the search state when we empty the search query to start again
      setSearchInitialState(true);
    }
  }, [searchQuery]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  const clearResults = (): void => {
    setResults({});
    setSearchQuery("");
    inputRef.current?.focus();
  };

  return (
    <SearchModal isOpen={isOpen} ariaLabelledby={modalHeadingId} onDismiss={onDismiss} initialFocusRef={inputRef}>
      <SearchForm
        onSubmit={performSearch}
        hasResults={Object.keys(results).length > 0}
        onClear={clearResults}
        ariaLabelledBy={modalHeadingId}
        inputValue={searchQuery}
        onChange={handleOnChange}
        inputRef={inputRef}
      />
      {loading && <SearchResultsLoading />}
      {searchQuery && !searchInitialState && !loading && Object.keys(results).length === 0 && (
        <SearchEmptyState searchQuery={searchQuery} />
      )}
      <SearchResultsList results={results} />
    </SearchModal>
  );
};

SiteSearch.displayName = "SiteSearch";

export { SiteSearch };
/* eslint-enable react/jsx-max-depth */
