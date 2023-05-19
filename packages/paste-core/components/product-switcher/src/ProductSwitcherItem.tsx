import * as React from 'react';
import {MenuItemRadio, MenuItemRadioPropTypes} from '@twilio-paste/menu';
import type {MenuItemRadioProps} from '@twilio-paste/menu';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';

export interface ProductSwitcherItemProps extends Omit<MenuItemRadioProps, 'variant' | 'children'> {
  productName: string;
  productStrapline: string;
  productIcon: NonNullable<React.ReactNode>;
}

const ProductSwitcherItem = React.forwardRef<HTMLDivElement, ProductSwitcherItemProps>(
  ({productName, productStrapline, productIcon, element = 'PRODUCT_SWITCHER_ITEM', ...props}, ref) => {
    return (
      <MenuItemRadio element={element} {...props} ref={ref}>
        <Box display="flex" flexDirection="row" columnGap="space50" alignItems="center">
          <Box color="colorTextIcon">{productIcon}</Box>
          <Box>
            <Text as="span" display="block">
              {productName}
            </Text>
            <Text as="span" fontSize="fontSize20" color="colorTextWeak">
              {productStrapline}
            </Text>
          </Box>
        </Box>
      </MenuItemRadio>
    );
  }
);

ProductSwitcherItem.displayName = 'ProductSwitcherItem';
ProductSwitcherItem.propTypes = MenuItemRadioPropTypes;
export {ProductSwitcherItem};
