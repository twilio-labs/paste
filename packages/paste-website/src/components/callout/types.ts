import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {Box} from '@twilio-paste/box';

export type CalloutVariants = 'primary' | 'secondary' | 'warning';

export type CalloutTitleProps = Pick<Heading, 'as'>;

export type CalloutTextProps = Pick<Text, 'marginTop' | 'marginBottom' | 'as'>;

export interface CalloutProps extends Box {
  variant?: CalloutVariants;
}
