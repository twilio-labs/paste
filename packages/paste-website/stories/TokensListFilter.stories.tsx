import * as React from 'react';

import { TokensListFilter } from '../src/components/tokens-list/TokensListFilter';

export const TokensListFilterExample = (): React.ReactNode => {
  const [value, setValue] = React.useState('');

  return (
    <TokensListFilter
      value={value}
      handleInput={(e) => {
        setValue(e.currentTarget.value);
      }}
      handleFormatChange={() => {}}
      handleThemeChange={() => {}}
      handleClearSearch={() => setValue('')}
      selectedFormat="css"
      selectedTheme="default"
    />
  );
};

export default {
  title: 'Website/TokensListFilter',
  component: TokensListFilter,
};
