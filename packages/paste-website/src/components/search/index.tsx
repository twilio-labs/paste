import * as React from 'react';
import {navigate} from 'gatsby';
import {InstantSearch, Configure, connectAutoComplete, Highlight} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import {Text} from '@twilio-paste/text';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {Combobox, UseComboboxState} from '@twilio-paste/combobox';
import {Heading} from '@twilio-paste/heading';

export interface SearchComboboxProps {
  currentRefinement: string;
  refine: (refinement: string) => void;
  hits: [];
}
const SearchCombobox: React.FC<SearchComboboxProps> = ({refine, hits, currentRefinement}) => {
  return (
    <Combobox
      autocomplete
      labelText={<ScreenReaderOnly>Search</ScreenReaderOnly>}
      placeholder="Jump to..."
      items={hits}
      itemToString={i => (i && typeof i !== 'string' ? i.name : i)}
      inputValue={currentRefinement}
      onInputValueChange={({inputValue}) => {
        if (inputValue !== undefined) {
          refine(inputValue);
        }
      }}
      onSelectedItemChange={(changes: Partial<UseComboboxState<any>>) => {
        if (changes != null && changes.selectedItem != null) {
          navigate(changes.selectedItem.slug);
        }
      }}
      optionTemplate={item => {
        return (
          <>
            <Heading as="h4" variant="heading50" marginBottom="space0">
              <Text as="span" color="colorTextLink" fontWeight="fontWeightSemibold">
                <Highlight attribute="title" hit={item} tagName="mark" />
              </Text>
            </Heading>
            <Text as="div" marginBottom="space20">
              <Highlight attribute="description" hit={item} tagName="mark" />
            </Text>
          </>
        );
      }}
    />
  );
};

// typed to take a React.StatelessComponent component hence the any
const ConnectedSearchCombobox = connectAutoComplete(SearchCombobox as any);

const Search: React.FC<{}> = () => {
  const appId = process.env.GATSBY_ALGOLIA_APP_ID;
  const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;
  const searchClient = React.useMemo(() => algoliasearch(appId as string, searchKey as string), [appId, searchKey]);

  return (
    <InstantSearch searchClient={searchClient} indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME || `prod_PasteDocs`}>
      <Configure />
      <form
        noValidate
        action=""
        role="search"
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <ConnectedSearchCombobox />
      </form>
    </InstantSearch>
  );
};

export {Search};
