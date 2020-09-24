import {ValueOf} from '@twilio-paste/types';
import {HelpText, HelpTextProps, HelpTextVariants} from '@twilio-paste/help-text';

export const FormHelpTextVariants = HelpTextVariants;

export type FormHelpTextVariants = ValueOf<typeof FormHelpTextVariants>;

export type FormHelperTextProps = HelpTextProps;

export {HelpText as FormHelpText};
