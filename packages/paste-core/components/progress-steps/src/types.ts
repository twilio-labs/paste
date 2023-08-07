import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

type BaseStepProps = Pick<BoxProps, 'element'> & {
  children: NonNullable<React.ReactNode>;
};

type StepDivProps = HTMLPasteProps<'div'> & {
  as: 'div';
  href?: never;
  onClick?: never;
};
type StepButtonProps = HTMLPasteProps<'button'> & {
  as: 'button';
  onClick: HTMLPasteProps<'button'>['onClick'];
  href?: never;
};
type StepAnchorProps = HTMLPasteProps<'a'> & {
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
type IncompleteStepDivProps = HTMLPasteProps<'div'> & {
  as: 'div';
  href?: never;
  onClick?: never;
  disabled?: never;
};
type IncompleteStepButtonProps = HTMLPasteProps<'button'> & {
  as: 'button';
  onClick: HTMLPasteProps<'button'>['onClick'];
  href?: never;
  disabled?: boolean;
};
type IncompleteStepAnchorProps = HTMLPasteProps<'a'> & {
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
