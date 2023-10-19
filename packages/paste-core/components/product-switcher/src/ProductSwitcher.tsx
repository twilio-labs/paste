import type { BoxProps } from "@twilio-paste/box";
import { Menu } from "@twilio-paste/menu";
import type { MenuProps } from "@twilio-paste/menu";
import * as React from "react";

export interface ProductSwitcherProps extends MenuProps {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PRODUCT_SWITCHER'
   * @type {BoxProps['element']}
   * @memberof ProductSwitcherProps
   */
  element?: BoxProps["element"];
}

const ProductSwitcher = React.forwardRef<HTMLDivElement, ProductSwitcherProps>(
  ({ children, element = "PRODUCT_SWITCHER", ...props }, ref) => {
    return (
      <Menu element={element} {...props} ref={ref}>
        {children}
      </Menu>
    );
  },
);

ProductSwitcher.displayName = "ProductSwitcher";
export { ProductSwitcher };
