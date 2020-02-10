import * as React from 'react';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import {Space} from '@twilio-paste/style-props';

interface BaseListProps extends React.OlHTMLAttributes<''> {
  className?: never;
  style?: never;
  as: 'ol' | 'ul';
  marginTop?: Space;
  marginBottom?: Space;
}

const List: React.FC<BaseListProps> = ({as, children, ...props}) => {
  return (
    <Text
      {...props}
      as={as}
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
const OrderedList: React.FC<OrderedListProps> = ({children, marginTop, marginBottom, ...props}) => {
  return (
    <List {...safelySpreadTextProps(props)} as="ol" marginTop={marginTop} marginBottom={marginBottom}>
      {children}
    </List>
  );
};
OrderedList.defaultProps = {
  marginBottom: 'space70',
};
OrderedList.displayName = 'OrderedList';

export type UnorderedListProps = Omit<BaseListProps, 'as'>;
const UnorderedList: React.FC<UnorderedListProps> = ({children, marginTop, marginBottom, ...props}) => {
  return (
    <List {...safelySpreadTextProps(props)} as="ul" marginTop={marginTop} marginBottom={marginBottom}>
      {children}
    </List>
  );
};
UnorderedList.defaultProps = {
  marginBottom: 'space70',
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
      marginTop="space30"
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
