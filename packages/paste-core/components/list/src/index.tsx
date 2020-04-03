import * as React from 'react';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import {Space, isSpaceTokenProp} from '@twilio-paste/style-props';

interface BaseListProps extends React.OlHTMLAttributes<HTMLElement> {
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
      color="colorText"
    >
      {children}
    </Text>
  );
};

List.displayName = 'List';

/*
 * Ordered List
 */
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

if (process.env.NODE_ENV === 'development') {
  OrderedList.propTypes = {
    marginTop: isSpaceTokenProp,
    marginBottom: isSpaceTokenProp,
  };
}

OrderedList.displayName = 'OrderedList';

/*
 * Unordered List
 */
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

if (process.env.NODE_ENV === 'development') {
  UnorderedList.propTypes = {
    marginTop: isSpaceTokenProp,
    marginBottom: isSpaceTokenProp,
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
      color="colorText"
    >
      {props.children}
    </Text>
  );
};

ListItem.displayName = 'ListItem';

export {OrderedList, UnorderedList, ListItem};
