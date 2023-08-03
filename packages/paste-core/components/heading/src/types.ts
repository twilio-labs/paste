import type {TextProps} from '@twilio-paste/text';
import type {HTMLPasteProps} from '@twilio-paste/types';

export type AsTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label' | 'span' | 'header';
export type HeadingVariants = 'heading10' | 'heading20' | 'heading30' | 'heading40' | 'heading50' | 'heading60';

export interface HeadingProps extends HTMLPasteProps<AsTags>, Pick<TextProps, 'element' | 'display'> {
  as: AsTags;
  id?: string;
  marginBottom?: 'space0';
  variant: HeadingVariants;
}
