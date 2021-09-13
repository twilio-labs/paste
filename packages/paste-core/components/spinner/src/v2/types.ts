import type {textColors} from '@twilio-paste/design-tokens';
import type {TextColorOptions} from '@twilio-paste/style-props';

export type TextColorTokens = string & keyof typeof textColors;
export type Stroke = TextColorOptions;
