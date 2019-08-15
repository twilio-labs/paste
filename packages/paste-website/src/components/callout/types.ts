import {TextProps} from '@twilio-paste/text';

export type CalloutVariants = 'primary' | 'secondary' | 'warning';

export interface CalloutTitleProps {
  as?: string;
}

export type CalloutTextProps = Pick<TextProps, 'marginTop' | 'marginBottom' | 'as'>;

export interface CalloutProps {
  marginTop?: string;
  marginBottom?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  children?: React.ReactNode;
  variant?: CalloutVariants;
}
