export type CalloutVariants = 'primary' | 'secondary' | 'warning';

export interface CalloutProps {
  calloutStatus?: string;
  calloutTitle?: string;
  children?: React.ReactNode;
  variant?: CalloutVariants;
}
