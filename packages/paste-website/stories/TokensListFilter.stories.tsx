import * as React from 'react';
import {TokensListFilter} from '../src/components/tokens-list/TokensListFilter';

export const TokensListFilterExample = (): React.ReactNode => (
  <TokensListFilter
    handleInput={() => {}}
    handleFormatChange={() => {}}
    handleThemeChange={() => {}}
    selectedFormat="css"
    selectedTheme="default"
  />
);

export default {
  title: 'Website/TokensListFilter',
  component: TokensListFilter,
};
