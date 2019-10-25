import {TextProps} from '@twilio-paste/text';
import {BoxProps} from '@twilio-paste/box';

export type CalloutVariants = 'primary' | 'secondary' | 'warning';

export type CalloutTitleProps = Pick<TextProps, 'as'>;

export type CalloutTextProps = Pick<TextProps, 'marginTop' | 'marginBottom' | 'as'>;

export interface CalloutProps extends BoxProps {
  variant?: CalloutVariants;
}
