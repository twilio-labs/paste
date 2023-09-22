import type { TextProps } from '@twilio-paste/text';
import type { Space } from '@twilio-paste/style-props';
import type { HTMLPasteProps } from '@twilio-paste/types';

export type AsTags = 'ol' | 'ul';

export interface BaseListProps extends HTMLPasteProps<'ol'>, Pick<TextProps, 'element' | 'listStyleType'> {
  as: AsTags;
  marginTop?: Space;
  marginBottom?: Space;
}

export type ListItemProps = HTMLPasteProps<'li'> & Pick<TextProps, 'element'>;

export type OrderedListProps = Omit<BaseListProps, 'as'>;

export type UnorderedListProps = Omit<BaseListProps, 'as'>;
