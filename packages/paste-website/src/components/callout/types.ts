import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';

export type CalloutVariants = 'primary' | 'secondary' | 'warning';

export type CalloutTitleProps = Pick<Text, 'as'>;

export type CalloutTextProps = Pick<Text, 'marginTop' | 'marginBottom' | 'as'>;

export interface CalloutProps extends Box {
  variant?: CalloutVariants;
}
