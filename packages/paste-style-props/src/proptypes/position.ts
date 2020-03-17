import {DefaultTheme} from '@twilio-paste/theme-tokens';
import {propValidator} from './utils/propValidator';

// Tokens
const ZIndexOptions = Object.keys(DefaultTheme.zIndices);

export const isZIndexTokenProp = propValidator(ZIndexOptions);
