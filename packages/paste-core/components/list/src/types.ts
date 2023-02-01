import type {TextProps} from '@twilio-paste/text';
import type {Space} from '@twilio-paste/style-props';

export type AsTags = 'ol' | 'ul';

export interface BaseListProps
  extends React.OlHTMLAttributes<HTMLElement>,
    Pick<TextProps, 'element' | 'listStyleType'> {
  className?: never;
  style?: never;
  as: AsTags;
  marginTop?: Space;
  marginBottom?: Space;
}

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement>, Pick<TextProps, 'element'> {
  className?: never;
  style?: never;
}

export type OrderedListProps = Omit<BaseListProps, 'as'>;

export type UnorderedListProps = Omit<BaseListProps, 'as'>;
