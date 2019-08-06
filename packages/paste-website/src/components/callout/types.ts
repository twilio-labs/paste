export type CalloutVariants = 'primary' | 'secondary' | 'warning';

export interface CalloutTitleProps {
  as?: string;
}

export interface CalloutContentProps {
  as?: string;
}

export interface CalloutProps {
  children?: React.ReactNode;
  marginTop?: string;
  marginBottom?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  variant?: CalloutVariants;
}
