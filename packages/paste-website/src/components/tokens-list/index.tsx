import * as React from 'react';

import debounce from 'lodash/debounce';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {Select, Option} from '@twilio-paste/select';
import {Input} from '@twilio-paste/input';
import {FilterIcon} from '@twilio-paste/icons/esm/FilterIcon';

import {CategorySection} from './category-section';
import {trackTokenFilterString} from './utils';

import {PageAside} from '../shortcodes/PageAside';
import {NoTokensFound} from './NoTokensFound';
import {TOKEN_CATEGORIES, pageAsideData} from './constants';
import type {CategoryKeys} from './types';

import {useThemeSettings, useTokenValueFormatter} from './hooks';

// - Intentionally using this casing to be very clear that this submit handler is a-typical
// - declaring outside of the render body since it has no dependencies on the component state.
// eslint-disable-next-line @typescript-eslint/naming-convention
const _preventDefaultFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
};

export const TokensList: React.FC = () => {
  const seed = useUIDSeed();
  const [filterString, setFilterString] = React.useState('');
  const [noResults, setNoResults] = React.useState(0);
  const {themeKey, handleChangeTheme} = useThemeSettings();
  const {updateTokenDisplay, tokenFormatKey, tokenFormatter} = useTokenValueFormatter();

  const handleSetNoResults = React.useCallback(() => setNoResults((total) => total + 1), []);

  const showNullState = noResults === TOKEN_CATEGORIES.length;

  React.useEffect(() => {
    if (filterString === '') {
      setNoResults(0);
    }
  }, [filterString]);

  React.useEffect(() => {
    trackTokenFilterString(filterString);
  }, [filterString]);

  React.useEffect(() => {
    if (filterString.length > 0) {
      setNoResults((curr) => {
        if (curr === TOKEN_CATEGORIES.length) {
          return 0;
        }
        return curr;
      });
    }
  }, [filterString]);

  const handleOnChange = React.useMemo(
    () =>
      debounce(({target: {value}}) => {
        setFilterString(value);
      }, 250),
    []
  );

  const handleOnClearSearch: VoidFunction = () => {
    setFilterString('');
    setNoResults(0);
  };

  return (
    <Box as="div" display={['block', 'block', 'flex']}>
      <PageAside data={pageAsideData} />
      <Box as="div" maxWidth="size70" minWidth="0" paddingTop="space100">
        <Box
          as="form"
          onSubmit={_preventDefaultFormSubmit}
          display={['block', 'block', 'flex']}
          flexDirection="row"
          columnGap="space40"
          paddingBottom="space30"
        >
          <Box width="100%" paddingBottom={['space60', 'space60', null]}>
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
          <Box width={['100%', '100%', '40%']} paddingBottom={['space60', 'space60', null]}>
            <Label htmlFor={seed('select-theme')} id={seed('select-theme-label')}>
              Theme
            </Label>
            <Select
              id={seed('select-theme')}
              aria-labelledby={seed('select-theme-label')}
              value={themeKey}
              onChange={handleChangeTheme}
            >
              <Option value="default">Default</Option>
              <Option value="dark">Dark</Option>
            </Select>
          </Box>
          <Box width={['100%', '100%', '40%']} paddingBottom={['space60', 'space60', null]}>
            <Label htmlFor={seed('select-format')} id={seed('select-format-label')}>
              Format
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

        <Box paddingTop="space100" display={showNullState ? 'block' : 'none'}>
          <NoTokensFound onClearSearch={handleOnClearSearch} />
        </Box>

        <Box display={showNullState ? 'none' : null}>
          {TOKEN_CATEGORIES.map((categoryKey) => (
            <CategorySection
              categoryKey={categoryKey as CategoryKeys}
              filterString={filterString}
              themeKey={themeKey}
              key={seed(categoryKey)}
              setNoResults={handleSetNoResults}
              tokenFormatter={tokenFormatter}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
