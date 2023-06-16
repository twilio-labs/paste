import type {BoxProps} from '@twilio-paste/box';

interface ProgressStepProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  element?: BoxProps['element'];
  as?: 'button' | 'a' | 'div';
  href?: string;
  onClick?: () => void;
}

export interface ProgressStepCompleteProps extends ProgressStepProps {
  i18nCompleteLabel?: string;
}
export interface ProgressStepErrorProps extends ProgressStepProps {
  i18nErrorLabel?: string;
}

export interface ProgressStepCurrentProps extends ProgressStepProps {
  i18nCurrentLabel?: string;
}

export interface ProgressStepIncompleteProps extends ProgressStepProps {
  i18nIncompleteLabel?: string;
  disabled?: boolean;
}

export type Orientation = 'horizontal' | 'vertical';
