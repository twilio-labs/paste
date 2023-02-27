import {DefaultTheme} from '@twilio-paste/theme';

import {propValidator} from './utils/propValidator';

// Tokens
const BoxShadowOptions = ['none', ...Object.keys(DefaultTheme.shadows)];

export const isBoxShadowTokenProp = propValidator(BoxShadowOptions);
