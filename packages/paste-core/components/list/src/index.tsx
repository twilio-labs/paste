import * as React from 'react';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import {Space, isMarginTokenProp} from '@twilio-paste/style-props';

export interface BaseListProps extends React.OlHTMLAttributes<HTMLElement> {
  className?: never;
  style?: never;
  as: 'ol' | 'ul';
  marginTop?: Space;
  marginBottom?: Space;
}

const List = React.forwardRef<HTMLOListElement | HTMLUListElement, BaseListProps>(({as, children, ...props}, ref) => {
  return (
    <Text
      {...props}
      ref={ref}
      as={as}
      marginLeft="space70"
      fontSize="fontSize30"
      lineHeight="lineHeight40"
      fontWeight="fontWeightNormal"
      color="colorText"
    >
      {children}
    </Text>
  );
});
List.displayName = 'List';

/*
 * Ordered List
 */
export type OrderedListProps = Omit<BaseListProps, 'as'>;

const OrderedList = React.forwardRef<HTMLOListElement, OrderedListProps>(
  ({children, marginTop, marginBottom, ...props}, ref) => {
    return (
      <List {...safelySpreadTextProps(props)} ref={ref} as="ol" marginTop={marginTop} marginBottom={marginBottom}>
        {children}
      </List>
    );
  }
);
OrderedList.defaultProps = {
  marginBottom: 'space70',
};
if (process.env.NODE_ENV === 'development') {
  OrderedList.propTypes = {
    marginTop: isMarginTokenProp,
    marginBottom: isMarginTokenProp,
  };
}
OrderedList.displayName = 'OrderedList';

/*
 * Unordered List
 */
export type UnorderedListProps = Omit<BaseListProps, 'as'>;

const UnorderedList = React.forwardRef<HTMLUListElement, UnorderedListProps>(
  ({children, marginTop, marginBottom, ...props}, ref) => {
    return (
      <List {...safelySpreadTextProps(props)} ref={ref} as="ul" marginTop={marginTop} marginBottom={marginBottom}>
        {children}
      </List>
    );
  }
);
UnorderedList.defaultProps = {
  marginBottom: 'space70',
};
if (process.env.NODE_ENV === 'development') {
  UnorderedList.propTypes = {
    marginTop: isMarginTokenProp,
    marginBottom: isMarginTokenProp,
  };
}
UnorderedList.displayName = 'UnorderedList';

/*
 * List Item
 */
export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  className?: never;
  style?: never;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  return (
    <Text
      {...safelySpreadTextProps(props)}
      ref={ref}
      as="li"
      marginTop="space30"
      marginBottom="space30"
      fontSize="fontSize30"
      lineHeight="lineHeight40"
      fontWeight="fontWeightNormal"
      color="colorText"
    >
      {props.children}
    </Text>
  );
});
ListItem.displayName = 'ListItem';

export {OrderedList, UnorderedList, ListItem};
