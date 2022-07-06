import * as React from 'react';
import {TokensListFilter} from '../src/components/tokens-list/TokensListFilter';

const testTokens = {
  tokens: {
    'background-colors': [
      {
        type: 'color',
        category: 'background-color',
        value: 'rgb(18, 28, 45)',
        comment: 'Default background color for any container',
        originalValue: '{!palette-gray-100}',
        name: 'color-background',
      },
      {
        type: 'color',
        category: 'background-color',
        value: 'rgb(20, 176, 83)',
        comment: 'Color used to represent an entity or person as "available".',
        originalValue: '{!palette-green-60}',
        name: 'color-background-available',
      },
      {
        type: 'color',
        category: 'background-color',
        value: 'rgb(13, 19, 28)',
        comment: 'Background color of the main page body',
        originalValue: '{!palette-gray-110}',
        name: 'color-background-body',
      },
    ],
  },
};

const testDarkTokens = {
  tokens: {
    'background-colors': [
      {
        type: 'color',
        category: 'background-color',
        value: 'rgb(18, 28, 45)',
        comment: 'Default background color for any container',
        originalValue: '{!palette-gray-100}',
        name: 'color-background',
      },
      {
        type: 'color',
        category: 'background-color',
        value: 'rgb(20, 176, 83)',
        comment: 'Color used to represent an entity or person as "available".',
        originalValue: '{!palette-green-60}',
        name: 'color-background-available',
      },
      {
        type: 'color',
        category: 'background-color',
        value: 'rgb(13, 19, 28)',
        comment: 'Background color of the main page body',
        originalValue: '{!palette-gray-110}',
        name: 'color-background-body',
      },
    ],
  },
};

export const TokensListFilterExample = (): React.ReactNode => (
  // @ts-ignore
  <TokensListFilter defaultTokens={testTokens} darkTokens={testDarkTokens} theme="default" />
);

export default {
  title: 'Website/TokensListFilter',
  component: TokensListFilter,
};
