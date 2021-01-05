import type {ValueOf} from '@twilio-paste/types';
import {HelpText, HelpTextVariants} from '@twilio-paste/help-text';
import type {HelpTextProps} from '@twilio-paste/help-text';

export const FormHelpTextVariants = HelpTextVariants;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FormHelpTextVariants = ValueOf<typeof FormHelpTextVariants>;

export type FormHelperTextProps = HelpTextProps;

export {HelpText as FormHelpText};
