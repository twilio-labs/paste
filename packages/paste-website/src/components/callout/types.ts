import {TextProps} from '@twilio-paste/text';
import {HeadingProps} from '@twilio-paste/heading';
import {BoxProps} from '@twilio-paste/box';

export type CalloutVariants = 'primary' | 'secondary' | 'warning';

export type CalloutTitleProps = Pick<HeadingProps, 'as'>;

export type CalloutTextProps = Pick<TextProps, 'marginTop' | 'marginBottom' | 'as'>;

export interface CalloutProps extends BoxProps {
  variant?: CalloutVariants;
}
