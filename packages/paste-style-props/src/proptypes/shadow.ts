import {DefaultTheme} from '@twilio-paste/theme';

import {propValidator} from './utils/propValidator';
import {DEPRECATE_TOKENS} from '../constants';

// Tokens
const BoxShadowOptions = ['none', ...Object.keys(DefaultTheme.shadows)];

export const isBoxShadowTokenProp = propValidator(BoxShadowOptions);
export const isDeprecatedBoxShadowTokenProp = (props: Record<string, unknown>): Error | null => {
  if (props.boxShadow != null && DEPRECATE_TOKENS.indexOf(props.boxShadow as string) > 0) {
    // eslint-disable-next-line no-console
    console.error(
      `Paste: "${props.boxShadow}" is a deprecated design token. It will be removed in the 2021.11.16 release of Paste`
    );
  }
  return null;
};
