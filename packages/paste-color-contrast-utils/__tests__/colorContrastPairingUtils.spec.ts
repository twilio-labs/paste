import {
  getContrastRatingForTokenPairing,
  getTokensWithTextContrastRequirements,
  getTokensWithUIControlContrastRequirements,
  getTokensWithDataVisualizationContrastRequirements,
  convertRawTokenJSONToArray,
} from '../src/utils';
import * as RawJSON from '../__fixtures__/tokens.raw.json';
import * as RawExtraJSON from '../__fixtures__/tokensWithExtraPairings.raw.json';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore type declaration warning for these token fixtures
import { tokens } from '../__fixtures__/tokens';

describe('convertRawTokenJSONToArray', () => {
  test('it should convert raw JSON to an array of tokens', () => {
    expect(
      convertRawTokenJSONToArray({
        'color-text-weak': {
          type: 'color',
          category: 'text-color',
          value: '#aeb2c1',
          comment: 'Weaker body text for visual hierarchy. Inaccessible unless used on disabled controls.',
          originalValue: '{!palette-gray-40}',
          text_contrast_pairing: ['color-background-body'],
          name: 'color-text-weak',
        },
        'color-text-link-destructive-light': {
          type: 'color',
          category: 'text-color',
          value: '#f6b1b1',
          comment: 'Light shade of destructive link text to be used in interactions',
          originalValue: '{!palette-red-30}',
          name: 'color-text-link-destructive-light',
        },
      }),
    ).toEqual([
      {
        type: 'color',
        category: 'text-color',
        value: '#f6b1b1',
        comment: 'Light shade of destructive link text to be used in interactions',
        originalValue: '{!palette-red-30}',
        name: 'color-text-link-destructive-light',
      },
      {
        type: 'color',
        category: 'text-color',
        value: '#aeb2c1',
        comment: 'Weaker body text for visual hierarchy. Inaccessible unless used on disabled controls.',
        originalValue: '{!palette-gray-40}',
        text_contrast_pairing: ['color-background-body'],
        name: 'color-text-weak',
      },
    ]);
  });
});
describe('getTokensWithTextContrastRequirements', () => {
  test('it should only return tokens with text contrast requirements', () => {
    expect(getTokensWithTextContrastRequirements(RawJSON.props)).toEqual([
      {
        category: 'text-color',
        comment: 'Body text color',
        name: 'color-text',
        originalValue: '{!palette-gray-100}',
        text_contrast_pairing: ['color-text-inverse-weaker', 'color-text-inverse'],
        type: 'color',
        value: '#121c2d',
      },
      {
        category: 'text-color',
        comment: 'Weak body text for visual hierarchy.',
        name: 'color-text-weak',
        originalValue: '{!palette-gray-60}',
        text_contrast_pairing: ['color-text-link-destructive-light'],
        type: 'color',
        value: '#606b85',
      },
    ]);
  });
});
describe('getTokensWithUIControlContrastRequirements', () => {
  test('it should only return tokens with text contrast requirements', () => {
    expect(getTokensWithUIControlContrastRequirements(RawJSON.props)).toEqual([
      {
        category: 'text-color',
        comment: 'Twilio brand red, accessible on large text only.',
        name: 'color-text-brand-highlight',
        originalValue: '{!amaranth}',
        type: 'color',
        uicontrol_contrast_pairing: ['color-text-link-light'],
        value: '#F22F46',
      },
    ]);
  });
});
describe('getTokensWithDataVisualizationContrastRequirements', () => {
  test('it should only return tokens with data visualization contrast requirements', () => {
    expect(getTokensWithDataVisualizationContrastRequirements(RawExtraJSON.props)).toEqual([
      {
        category: 'color',
        comment: 'Color used for data visualizations. Must be used in a sequence.',
        data_visualization_contrast_pairing: ['color-data-visualization-8', 'color-data-visualization-10'],
        name: 'color-data-visualization-9',
        originalValue: '{!palette-red-80}',
        type: 'color',
        uicontrol_contrast_pairing: ['color-background-body'],
        value: '#750c0c',
      },
    ]);
  });
});

describe('getContrastRatingForTokenPairing', () => {
  test('it should get the contrast ratio rating for only text color contrast requirements', () => {
    const filteredTextContrastTokens = getTokensWithTextContrastRequirements(RawJSON.props);

    expect(getContrastRatingForTokenPairing(filteredTextContrastTokens, tokens, 'text_contrast_pairing')).toEqual([
      {
        aa: false,
        aaLarge: true,
        aaa: false,
        aaaLarge: false,
        background: 'color-text-inverse-weaker',
        backgroundValue: '#606b85',
        contrast: 3.2032894523289137,
        foreground: 'color-text',
        foregroundValue: '#121c2d',
      },
      {
        aa: true,
        aaLarge: true,
        aaa: true,
        aaaLarge: true,
        background: 'color-text-inverse',
        backgroundValue: '#ffffff',
        contrast: 17.077148214998438,
        foreground: 'color-text',
        foregroundValue: '#121c2d',
      },
      {
        aa: false,
        aaLarge: true,
        aaa: false,
        aaaLarge: false,
        background: 'color-text-link-destructive-light',
        backgroundValue: '#f6b1b1',
        contrast: 3.006321755625877,
        foreground: 'color-text-weak',
        foregroundValue: '#606b85',
      },
    ]);
  });
  test('it should filter out undefined values from the results when there is a pairing with a token not present in the theme', () => {
    const filteredTextContrastTokens = getTokensWithTextContrastRequirements(RawExtraJSON.props);

    expect(getContrastRatingForTokenPairing(filteredTextContrastTokens, tokens, 'text_contrast_pairing')).toEqual([
      {
        aa: false,
        aaLarge: true,
        aaa: false,
        aaaLarge: false,
        background: 'color-text-inverse-weaker',
        backgroundValue: '#606b85',
        contrast: 3.2032894523289137,
        foreground: 'color-text',
        foregroundValue: '#121c2d',
      },
      {
        aa: true,
        aaLarge: true,
        aaa: true,
        aaaLarge: true,
        background: 'color-text-inverse',
        backgroundValue: '#ffffff',
        contrast: 17.077148214998438,
        foreground: 'color-text',
        foregroundValue: '#121c2d',
      },
      {
        aa: false,
        aaLarge: true,
        aaa: false,
        aaaLarge: false,
        background: 'color-text-link-destructive-light',
        backgroundValue: '#f6b1b1',
        contrast: 3.006321755625877,
        foreground: 'color-text-weak',
        foregroundValue: '#606b85',
      },
    ]);
  });
  test('it should get the contrast ratio rating for only ui control color contrast requirements', () => {
    const filteredUIControlContrastTokens = getTokensWithUIControlContrastRequirements(RawJSON.props);
    expect(
      getContrastRatingForTokenPairing(filteredUIControlContrastTokens, tokens, 'uicontrol_contrast_pairing'),
    ).toEqual([
      {
        aa: false,
        aaLarge: false,
        aaa: false,
        aaaLarge: false,
        background: 'color-text-link-light',
        backgroundValue: '#99cdff',
        contrast: 2.3775737969258506,
        foreground: 'color-text-brand-highlight',
        foregroundValue: '#F22F46',
      },
    ]);
  });
});
