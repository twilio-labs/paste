import * as React from 'react';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';

interface BaseListProps extends React.OlHTMLAttributes<''> {
  className?: never;
  style?: never;
  as: 'ol' | 'ul';
}

const List: React.FC<BaseListProps> = ({as, children, ...props}) => {
  return (
    <Text
      {...props}
      as={as}
      marginBottom="space70"
      marginLeft="space70"
      fontSize="fontSize30"
      lineHeight="lineHeight30"
      fontWeight="fontWeightNormal"
      textColor="colorText"
    >
      {children}
    </Text>
  );
};
List.displayName = 'List';

export type OrderedListProps = Omit<BaseListProps, 'as'>;
const OrderedList: React.FC<OrderedListProps> = ({children, ...props}) => {
  return (
    <List {...safelySpreadTextProps(props)} as="ol">
      {children}
    </List>
  );
};
OrderedList.displayName = 'OrderedList';

export type UnorderedListProps = Omit<BaseListProps, 'as'>;
const UnorderedList: React.FC<UnorderedListProps> = ({children, ...props}) => {
  return (
    <List {...safelySpreadTextProps(props)} as="ul">
      {children}
    </List>
  );
};
UnorderedList.displayName = 'UnorderedList';

export interface ListItemProps extends React.LiHTMLAttributes<''> {
  className?: never;
  style?: never;
}

const ListItem: React.FC<ListItemProps> = props => {
  return (
    <Text
      {...safelySpreadTextProps(props)}
      as="li"
      marginBottom="space30"
      fontSize="fontSize30"
      lineHeight="lineHeight30"
      fontWeight="fontWeightNormal"
      textColor="colorText"
    >
      {props.children}
    </Text>
  );
};
ListItem.displayName = 'ListItem';

export {OrderedList, UnorderedList, ListItem};
