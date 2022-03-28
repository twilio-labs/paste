import {DefaultTheme} from '@twilio-paste/theme';
import {propValidator} from './utils/propValidator';
import {DEPRECATE_TOKENS} from '../constants';

// Tokens
const BackgroundColorOptions = ['none', 'transparent', ...Object.keys(DefaultTheme.backgroundColors)];

export const isBackgroundColorTokenProp = propValidator(BackgroundColorOptions);
export const isDeprecatedBackgroundColorTokenProp = (props: Record<string, unknown>): Error | null => {
  if (props.backgroundColor != null && DEPRECATE_TOKENS.indexOf(props.backgroundColor) > 0) {
    console.error(
      `Paste: "${props.backgroundColor}" is a deprecated design token. It will be removed in the 2021.11.16 release of Paste`
    );
  }
  return null;
};
