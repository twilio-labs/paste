import {DefaultTheme} from '@twilio-paste/theme-tokens';
import {propValidator} from './utils/propValidator';

// Tokens
const BoxShadowOptions = Object.keys(DefaultTheme.shadows);

export const isBoxShadowTokenProp = propValidator(BoxShadowOptions);
