import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { MenuItemRadio } from "@twilio-paste/menu";
import type { MenuItemRadioProps } from "@twilio-paste/menu";
import { Text } from "@twilio-paste/text";
import * as React from "react";

export interface ProductSwitcherItemProps extends Omit<MenuItemRadioProps, "variant" | "children"> {
  /**
   * Name of the ProductSwitcherItem.
   *
   * @type {string}
   * @memberof ProductSwitcherItemProps
   */
  productName: string;
  /**
   * Subtext for the ProductSwitcherItem.
   *
   * @type {string}
   * @memberof ProductSwitcherItemProps
   */
  productStrapline: string;
  /**
   * Icon to use for the ProductSwitcherItem. Use a Paste Icon.
   *
   * @default 'PRODUCT_SWITCHER_ITEM'
   * @type {React.ReactNode}
   * @memberof ProductSwitcherItemProps
   */
  productIcon?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'PRODUCT_SWITCHER_ITEM'
   * @type {BoxProps['element']}
   * @memberof ProductSwitcherItemProps
   */
  element?: BoxProps["element"];
}

const ProductSwitcherItem = React.forwardRef<HTMLDivElement, ProductSwitcherItemProps>(
  ({ productName, productStrapline, productIcon, element = "PRODUCT_SWITCHER_ITEM", ...props }, ref) => {
    return (
      <MenuItemRadio element={element} {...props} ref={ref}>
        <Box display="flex" flexDirection="row" columnGap="space50" alignItems="center">
          {productIcon && <Box color="colorTextIcon">{productIcon}</Box>}
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
  },
);

ProductSwitcherItem.displayName = "ProductSwitcherItem";
export { ProductSwitcherItem };
