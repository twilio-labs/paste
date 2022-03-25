import {filterTokenList} from '../components/tokens-list/helpers';

describe('filterTokenList', () => {
  let filterString = '';
  const defaultTokens = [
    {
      categoryName: 'background-colors',
      tokens: [
        {
          category: 'background-color',
          name: 'color-background',
          value: 'rgb(244, 244, 246)',
          comment: '',
          type: '',
          deprecated: false,
        },
      ],
    },
    {
      categoryName: 'border-colors',
      tokens: [
        {
          category: 'border-color',
          name: 'color-border',
          value: 'rgb(136, 145, 170)',
          comment: '',
          type: '',
          deprecated: false,
        },
      ],
    },
  ];
  const darkTokens = [
    {
      categoryName: 'background-colors',
      tokens: [
        {
          category: 'background-color',
          name: 'color-background',
          value: 'rgb(18, 28, 45)',
          comment: '',
          type: '',
          deprecated: false,
        },
      ],
    },
    {
      categoryName: 'border-colors',
      tokens: [
        {
          category: 'border-color',
          name: 'color-border',
          value: 'rgb(96, 107, 133)',
          comment: '',
          type: '',
          deprecated: false,
        },
      ],
    },
  ];
  const props = {
    defaultTokens: [{node: {tokens: defaultTokens}}],
    darkTokens: [{node: {tokens: darkTokens}}],
  };
  let theme = 'default';

  it('should correctly filter tokens based on theme', () => {
    const filteredTokens = filterTokenList(filterString, props, theme);
    expect(filteredTokens).toEqual(defaultTokens);
  });

  it('should correctly filter tokens based on theme and filter string', () => {
    filterString = 'background';
    theme = 'dark';
    const filteredTokens = filterTokenList(filterString, props, theme);
    expect(filteredTokens).toEqual([darkTokens[0]]);
  });
});
