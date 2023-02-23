import {DefaultTheme} from '@twilio-paste/theme';

import {propValidator} from './utils/propValidator';

// Tokens
const BorderRadiusOptions = Object.keys(DefaultTheme.radii);
const BorderWidthOptions = Object.keys(DefaultTheme.borderWidths);
const BorderColorOptions = ['transparent', ...Object.keys(DefaultTheme.borderColors)];

export const isBorderRadiusTokenProp = propValidator(BorderRadiusOptions);
export const isBorderWidthTokenProp = propValidator(BorderWidthOptions);
export const isBorderColorTokenProp = propValidator(BorderColorOptions);
