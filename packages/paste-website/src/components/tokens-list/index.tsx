import * as React from 'react';

import debounce from 'lodash/debounce';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {Input} from '@twilio-paste/input';
import {FilterIcon} from '@twilio-paste/icons/esm/FilterIcon';

import {CategorySection} from './category-section';
import {useDarkModeContext} from '../../context/DarkModeContext';
import {trackTokenFilterString} from './utils';

import {PageAside} from '../shortcodes/PageAside';
import {NoTokensFound} from './NoTokensFound';
import {TOKEN_CATEGORIES, pageAsideData} from './constants';
import type {TokenCategoryKeys} from './types';

const ContentWrapper: React.FC = (props) => <Box as="div" display={['block', 'block', 'flex']} {...props} />;
const Content: React.FC = (props) => <Box as="div" maxWidth="size70" minWidth="0" {...props} />;

// @TODO add sorting.
// const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
export const TokensList: React.FC = () => {
  const seed = useUIDSeed();
  const {theme: themeKey} = useDarkModeContext();

  const [filterString, setFilterString] = React.useState('');
  const [noResults, setNoResults] = React.useState(0);

  const handleSetNoResults = React.useCallback(() => setNoResults((total) => total + 1), []);

  const showNullState = noResults === TOKEN_CATEGORIES.length;

  React.useEffect(() => trackTokenFilterString(filterString), [filterString]);

  React.useEffect(() => {
    if (filterString === '') {
      setNoResults(0);
    }
  }, [filterString]);

  const onChangeCallback: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(({target: {value}}) => {
    setFilterString(value);
  }, []);

  const handleOnChange = React.useMemo(() => debounce(onChangeCallback, 150), []);

  const handleOnClearSearch: VoidFunction = () => {
    setFilterString('');
    setNoResults(0);
  };

  if (showNullState) {
    return <NoTokensFound onClearSearch={handleOnClearSearch} />;
  }

  return (
    <ContentWrapper>
      <PageAside data={pageAsideData} />
      <Content>
        <Box paddingBottom="space80">
          <Label htmlFor={seed('filter-string')} id={seed('filter-string-label')}>
            Filter tokens
          </Label>
          <Input
            type="text"
            id={seed('filter-string')}
            aria-labelledby={seed('filter-string-label')}
            onChange={handleOnChange}
            insertBefore={<FilterIcon decorative={false} title="TODO" />}
          />
        </Box>

        {TOKEN_CATEGORIES.map((categoryKey) => (
          <CategorySection
            categoryKey={categoryKey as TokenCategoryKeys}
            value={filterString}
            themeKey={themeKey}
            key={seed(categoryKey)}
            setNoResults={handleSetNoResults}
          />
        ))}
      </Content>
    </ContentWrapper>
  );
};
