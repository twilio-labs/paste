export type CalloutVariants = 'primary' | 'secondary' | 'warning';

export interface CalloutTitleProps {
  as?: string;
}

export interface CalloutTextProps {
  children?: React.ReactNode;
}

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
