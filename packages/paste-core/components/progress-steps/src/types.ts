import type {BoxProps} from '@twilio-paste/box';

type BaseStepProps = Pick<BoxProps, 'element'> & {
  children: NonNullable<React.ReactNode>;
};

type StepDivProps = React.HTMLAttributes<HTMLDivElement> & {
  as: 'div';
  href?: never;
  onClick?: never;
};
type StepButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  as: 'button';
  onClick: React.HTMLAttributes<HTMLButtonElement>['onClick'];
  href?: never;
};
type StepAnchorProps = React.HTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  href: string;
  onClick?: never;
};

type ProgressStepProps = BaseStepProps & (StepDivProps | StepButtonProps | StepAnchorProps);

export type ProgressStepCompleteProps = ProgressStepProps & {
  i18nCompleteLabel?: string;
};
export type ProgressStepErrorProps = ProgressStepProps & {
  i18nErrorLabel?: string;
};
export type ProgressStepCurrentProps = ProgressStepProps & {
  i18nCurrentLabel?: string;
};

/**
 * Special case for incomplete steps since they're the only ones that can be disabled
 */
type IncompleteStepDivProps = React.HTMLAttributes<HTMLDivElement> & {
  as: 'div';
  href?: never;
  onClick?: never;
  disabled?: never;
};
type IncompleteStepButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  as: 'button';
  onClick: React.HTMLAttributes<HTMLButtonElement>['onClick'];
  href?: never;
  disabled?: boolean;
};
type IncompleteStepAnchorProps = React.HTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  href: string;
  onClick?: never;
  disabled?: never;
};

export type ProgressStepIncompleteProps = BaseStepProps &
  (IncompleteStepDivProps | IncompleteStepButtonProps | IncompleteStepAnchorProps) & {
    i18nIncompleteLabel?: string;
  };

export type Orientation = 'horizontal' | 'vertical';
