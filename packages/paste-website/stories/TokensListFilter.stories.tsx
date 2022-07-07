import * as React from 'react';
import {TokensListFilter} from '../src/components/tokens-list/TokensListFilter';

export const TokensListFilterExample = (): React.ReactNode => (
  // @ts-expect-error not passing in props
  <TokensListFilter />
);

export default {
  title: 'Website/TokensListFilter',
  component: TokensListFilter,
};
