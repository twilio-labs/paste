export type CalloutVariants = 'primary' | 'secondary' | 'warning';

export interface CalloutProps {
  calloutTitle?: string;
  children?: React.ReactNode;
  variant?: CalloutVariants;
}
