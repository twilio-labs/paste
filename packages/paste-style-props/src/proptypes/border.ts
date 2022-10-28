import {DefaultTheme} from '@twilio-paste/theme';

import {propValidator} from './utils/propValidator';
import {DEPRECATE_TOKENS} from '../constants';

// Tokens
const BorderRadiusOptions = Object.keys(DefaultTheme.radii);
const BorderWidthOptions = Object.keys(DefaultTheme.borderWidths);
const BorderColorOptions = ['transparent', ...Object.keys(DefaultTheme.borderColors)];

export const isBorderRadiusTokenProp = propValidator(BorderRadiusOptions);
export const isBorderWidthTokenProp = propValidator(BorderWidthOptions);
export const isBorderColorTokenProp = propValidator(BorderColorOptions);
export const isDeprecatedBorderColorTokenProp = (props: Record<string, unknown>): Error | null => {
  if (props.borderColor != null && DEPRECATE_TOKENS.indexOf(props.borderColor as string) > 0) {
    // eslint-disable-next-line no-console
    console.error(
      `Paste: "${props.borderColor}" is a deprecated design token. It will be removed in the 2021.11.16 release of Paste`
    );
  }
  return null;
};
