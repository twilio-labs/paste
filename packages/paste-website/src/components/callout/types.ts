import {TextProps} from '@twilio-paste/text';
import {BoxProps} from '@twilio-paste/box';

export type CalloutVariants = 'primary' | 'secondary' | 'warning';

export interface CalloutTitleProps {
  as?: string;
}

export type CalloutTextProps = Pick<TextProps, 'marginTop' | 'marginBottom' | 'as'>;

export interface CalloutProps extends BoxProps {
  children?: React.ReactNode;
  variant?: CalloutVariants;
}
