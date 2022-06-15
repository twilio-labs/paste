import * as React from 'react';
import camelCase from 'lodash/camelCase';

import type {TokenFormats, Token} from '../types';

export const useTokenValueFormatter = (): {
  updateTokenDisplay: React.ChangeEventHandler<HTMLSelectElement>;
  tokenFormatKey: TokenFormats;
  tokenFormatter: ((string?: string | undefined) => string) | ((value: string) => string);
} => {
  const [tokenFormatKey, setTokenFormatKey] = React.useState<TokenFormats>('css');

  const formatFns = {
    js: camelCase,
    css: (value: Token['value']) => `$${value}`,
  };

  const updateTokenDisplay = React.useCallback(({target: {value}}) => setTokenFormatKey(value), []);

  return {
    updateTokenDisplay,
    tokenFormatKey,
    tokenFormatter: formatFns[tokenFormatKey],
  };
};
