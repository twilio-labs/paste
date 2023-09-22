import { filterTokenList } from '../components/tokens-list/helpers';

const DefaultThemeTokens = {
  'border-widths': [
    {
      category: 'border-widths',
      altValue: null,
      comment: 'Border width reset',
      name: 'border-width-0',
      type: 'size',
      value: '0',
    },
    {
      category: 'border-widths',
      altValue: null,
      comment: 'Constant border width token for border width 10',
      name: 'border-width-10',
      type: 'size',
      value: '1px',
    },
  ],
  'background-colors': [
    {
      category: 'background-color',
      name: 'color-background',
      value: 'rgb(244, 244, 246)',
      comment: 'Background color used for containers.',
      type: 'color',
      altValue: '#F4F4F6',
    },
  ],
  'border-colors': [
    {
      altValue: '#8891AA',
      comment: 'Default border color',
      name: 'color-border',
      type: 'color',
      uicontrol_contrast_pairing: ['color-background-body'],
      value: 'rgb(136, 145, 170)',
      category: 'border-colors',
    },
  ],
};

describe('filterTokenList', () => {
  it('correctly filters tokens by name, value, and altValue', () => {
    const backgroundFilter = filterTokenList('background', DefaultThemeTokens);
    expect(backgroundFilter).toEqual({
      'background-colors': [
        {
          altValue: '#F4F4F6',
          category: 'background-color',
          comment: 'Background color used for containers.',
          name: 'color-background',
          type: 'color',
          value: 'rgb(244, 244, 246)',
        },
      ],
    });

    const byValue = filterTokenList('rgb(244, 244, 246)', DefaultThemeTokens);
    expect(byValue).toEqual({
      'background-colors': [
        {
          altValue: '#F4F4F6',
          category: 'background-color',
          comment: 'Background color used for containers.',
          name: 'color-background',
          type: 'color',
          value: 'rgb(244, 244, 246)',
        },
      ],
    });

    const byValue2 = filterTokenList('1px', DefaultThemeTokens);
    expect(byValue2).toEqual({
      'border-widths': [
        {
          category: 'border-widths',
          altValue: null,
          comment: 'Constant border width token for border width 10',
          name: 'border-width-10',
          type: 'size',
          value: '1px',
        },
      ],
    });

    const byAltValue = filterTokenList('#8891AA', DefaultThemeTokens);
    expect(byAltValue).toEqual({
      'border-colors': [
        {
          altValue: '#8891AA',
          comment: 'Default border color',
          name: 'color-border',
          type: 'color',
          uicontrol_contrast_pairing: ['color-background-body'],
          value: 'rgb(136, 145, 170)',
          category: 'border-colors',
        },
      ],
    });
  });

  it('handles capitalization, hyphenation, and spaces', () => {
    const capitalization = filterTokenList('COLORBackGround', DefaultThemeTokens);
    expect(capitalization).toEqual({
      'background-colors': [
        {
          altValue: '#F4F4F6',
          category: 'background-color',
          comment: 'Background color used for containers.',
          name: 'color-background',
          type: 'color',
          value: 'rgb(244, 244, 246)',
        },
      ],
    });

    const hyphenation = filterTokenList('color-background', DefaultThemeTokens);
    expect(hyphenation).toEqual({
      'background-colors': [
        {
          altValue: '#F4F4F6',
          category: 'background-color',
          comment: 'Background color used for containers.',
          name: 'color-background',
          type: 'color',
          value: 'rgb(244, 244, 246)',
        },
      ],
    });

    const spaces = filterTokenList('rgb(244,244,   246)', DefaultThemeTokens);
    expect(spaces).toEqual({
      'background-colors': [
        {
          altValue: '#F4F4F6',
          category: 'background-color',
          comment: 'Background color used for containers.',
          name: 'color-background',
          type: 'color',
          value: 'rgb(244, 244, 246)',
        },
      ],
    });
  });

  it('returns null when nothing is found', () => {
    const nullCheck = filterTokenList('dimensions', DefaultThemeTokens);
    expect(nullCheck).toEqual(null);
  });
});
