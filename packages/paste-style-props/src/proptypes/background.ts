import {DefaultTheme} from '@twilio-paste/theme';

import {propValidator} from './utils/propValidator';

// Tokens
const BackgroundColorOptions = ['none', 'transparent', ...Object.keys(DefaultTheme.backgroundColors)];

export const isBackgroundColorTokenProp = propValidator(BackgroundColorOptions);
