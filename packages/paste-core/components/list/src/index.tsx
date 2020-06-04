import * as React from 'react';
import {Text, safelySpreadTextProps, TextProps} from '@twilio-paste/text';
import {Space, isMarginTokenProp} from '@twilio-paste/style-props';

interface BaseListProps extends React.OlHTMLAttributes<HTMLElement>, Pick<TextProps, 'variant' | 'element'> {
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
      lineHeight="lineHeight40"
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
const OrderedList: React.FC<OrderedListProps> = ({
  children,
  element = 'ORDERED_LIST',
  marginTop,
  marginBottom,
  ...props
}) => {
  return (
    <List {...safelySpreadTextProps(props)} as="ol" element={element} marginTop={marginTop} marginBottom={marginBottom}>
      {children}
    </List>
  );
};

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
const UnorderedList: React.FC<UnorderedListProps> = ({
  children,
  element = 'UNORDERED_LIST',
  marginTop,
  marginBottom,
  ...props
}) => {
  return (
    <List {...safelySpreadTextProps(props)} as="ul" element={element} marginTop={marginTop} marginBottom={marginBottom}>
      {children}
    </List>
  );
};

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
export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement>, Pick<TextProps, 'variant' | 'element'> {
  className?: never;
  style?: never;
}

const ListItem: React.FC<ListItemProps> = ({children, element = 'LISTITEM', ...props}) => {
  return (
    <Text
      {...safelySpreadTextProps(props)}
      as="li"
      element={element}
      marginTop="space30"
      marginBottom="space30"
      fontSize="fontSize30"
      lineHeight="lineHeight40"
      fontWeight="fontWeightNormal"
      color="colorText"
    >
      {children}
    </Text>
  );
};

ListItem.displayName = 'ListItem';

export {OrderedList, UnorderedList, ListItem};
