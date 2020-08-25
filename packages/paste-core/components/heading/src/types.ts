import {TextProps} from '@twilio-paste/text';

export type asTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label' | 'span' | 'header';
export type HeadingVariants = 'heading10' | 'heading20' | 'heading30' | 'heading40' | 'heading50' | 'heading60';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, Pick<TextProps, 'element'> {
  as: asTags;
  className?: never;
  id?: string;
  marginBottom?: 'space0';
  variant: HeadingVariants;
}
