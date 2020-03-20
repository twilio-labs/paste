import {DefaultTheme} from '@twilio-paste/theme';
import {propValidator} from './utils/propValidator';

// Tokens
const BackgroundColorOptions = Object.keys(DefaultTheme.backgroundColors);

export const isBackgroundColorTokenProp = propValidator(BackgroundColorOptions);
