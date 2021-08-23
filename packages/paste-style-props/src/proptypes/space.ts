import {DefaultTheme} from '@twilio-paste/theme';
import {propValidator} from './utils/propValidator';

// Tokens
const SpaceOptions = Object.keys(DefaultTheme.space);
const MarginOptions = ['auto', ...Object.keys(DefaultTheme.space)];

export const isSpaceTokenProp = propValidator(SpaceOptions);
export const isPaddingTokenProp = propValidator(SpaceOptions);
export const isMarginTokenProp = propValidator(MarginOptions);
export const isGapTokenProp = propValidator(SpaceOptions);
