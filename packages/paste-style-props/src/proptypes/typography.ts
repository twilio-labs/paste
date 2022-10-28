import {DefaultTheme} from '@twilio-paste/theme';

import {propValidator} from './utils/propValidator';
import {DEPRECATE_TOKENS} from '../constants';

// Tokens
const FontFamilyOptions = ['inherit', ...Object.keys(DefaultTheme.fonts)];
const FontSizeOptions = ['100%', 'inherit', ...Object.keys(DefaultTheme.fontSizes)];
const FontWeightOptions = ['inherit', ...Object.keys(DefaultTheme.fontWeights)];
const LineHeightOptions = ['unset', 'inherit', ...Object.keys(DefaultTheme.lineHeights)];
const TextColorOptions = ['currentColor', 'inherit', ...Object.keys(DefaultTheme.textColors)];

export const isFontFamilyTokenProp = propValidator(FontFamilyOptions);
export const isFontSizeTokenProp = propValidator(FontSizeOptions);
export const isFontWeightTokenProp = propValidator(FontWeightOptions);
export const isLineHeightTokenProp = propValidator(LineHeightOptions);
export const isTextColorTokenProp = propValidator(TextColorOptions);
export const isDeprecatedTextColorTokenProp = (props: Record<string, unknown>): Error | null => {
  if (props.color != null && DEPRECATE_TOKENS.indexOf(props.color as string) > 0) {
    // eslint-disable-next-line no-console
    console.error(
      `Paste: "${props.color}" is a deprecated design token. It will be removed in the 2021.11.16 release of Paste`
    );
  }
  return null;
};
