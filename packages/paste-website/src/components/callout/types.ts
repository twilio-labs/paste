import {Text} from '@twilio-paste/text';
import {BoxProps} from '@twilio-paste/box';

export type CalloutVariants = 'primary' | 'secondary' | 'warning';

export type CalloutTitleProps = Pick<Text, 'as'>;

export type CalloutTextProps = Pick<Text, 'marginTop' | 'marginBottom' | 'as'>;

export interface CalloutProps extends BoxProps {
  variant?: CalloutVariants;
}
