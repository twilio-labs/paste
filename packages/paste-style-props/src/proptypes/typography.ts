import {DefaultTheme} from '@twilio-paste/theme';

import {propValidator} from './utils/propValidator';

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
