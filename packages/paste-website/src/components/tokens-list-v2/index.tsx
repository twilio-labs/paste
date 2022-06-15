import * as React from 'react';

import debounce from 'lodash/debounce';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {Select, Option} from '@twilio-paste/select';
import {Input} from '@twilio-paste/input';
import {FilterIcon} from '@twilio-paste/icons/esm/FilterIcon';

import {CategorySection} from './category-section';
// import {trackTokenFilterString} from './utils';

import {PageAside} from '../shortcodes/PageAside';
import {NoTokensFound} from './NoTokensFound';
import {TOKEN_CATEGORIES, pageAsideData} from './constants';
import type {TokenCategoryKeys} from './types';

import {useThemeSettings, useTokenValueFormatter} from './hooks';

// @TODO add sorting.
// const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
export const TokensList: React.FC = () => {
  const seed = useUIDSeed();
  const {themeKey, handleChangeTheme} = useThemeSettings();
  const {updateTokenDisplay, tokenFormatKey, tokenFormatter} = useTokenValueFormatter();

  const [filterString, setFilterString] = React.useState('');
  const [noResults, setNoResults] = React.useState(0);

  const handleSetNoResults = React.useCallback(() => setNoResults((total) => total + 1), []);

  const showNullState = noResults === TOKEN_CATEGORIES.length;

  // @TODO add tracking back.

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

  return (
    <Box as="div" display={['block', 'block', 'flex']}>
      <PageAside data={pageAsideData} />
      <Box as="div" maxWidth="size70" minWidth="0">
        <Box display={['block', 'block', 'flex']} flexDirection="row" columnGap="space40">
          <Box paddingBottom="space80" width="100%">
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
          <Box paddingBottom="space80" width={['100%', '100%', '40%']}>
            <Label htmlFor={seed('select-theme')} id={seed('select-theme-label')}>
              Select theme
            </Label>
            <Select
              id={seed('select-theme')}
              aria-labelledby={seed('select-theme-label')}
              onChange={handleChangeTheme}
              value={themeKey}
            >
              <Option value="default">Default</Option>
              <Option value="dark">Dark</Option>
            </Select>
          </Box>
          <Box paddingBottom="space80" width={['100%', '100%', '40%']}>
            <Label htmlFor={seed('select-format')} id={seed('select-format-label')}>
              Select format
            </Label>
            <Select
              id={seed('select-format')}
              aria-labelledby={seed('select-format-label')}
              onChange={updateTokenDisplay}
              value={tokenFormatKey}
            >
              <Option value="css">CSS</Option>
              <Option value="js">JavaScript</Option>
            </Select>
          </Box>
        </Box>

        {showNullState ? (
          <NoTokensFound onClearSearch={handleOnClearSearch} />
        ) : (
          TOKEN_CATEGORIES.map((categoryKey) => (
            <CategorySection
              categoryKey={categoryKey as TokenCategoryKeys}
              filterString={filterString}
              themeKey={themeKey}
              key={seed(categoryKey)}
              setNoResults={handleSetNoResults}
              tokenFormatter={tokenFormatter}
            />
          ))
        )}
      </Box>
    </Box>
  );
};
