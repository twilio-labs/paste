import type { BoxProps } from "@twilio-paste/box";
import { ProductSwitcherIcon } from "@twilio-paste/icons/esm/ProductSwitcherIcon";
import { MenuButton } from "@twilio-paste/menu";
import type { MenuButtonProps } from "@twilio-paste/menu";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import * as React from "react";

export interface ProductSwitcherButtonProps extends Omit<MenuButtonProps, "variant" | "size" | "children"> {
  /**
   * Accessible label for the ProductSwitcherButton used by screen readers.
   *
   * @type {string}
   * @memberof ProductSwitcherButtonProps
   */
  i18nButtonLabel: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'PRODUCT_SWITCHER_BUTTON'
   * @type {BoxProps['element']}
   * @memberof ProductSwitcherButtonProps
   */
  element?: BoxProps["element"];
}

const ProductSwitcherButton = React.forwardRef<HTMLButtonElement, ProductSwitcherButtonProps>(
  ({ element = "PRODUCT_SWITCHER_BUTTON", i18nButtonLabel, ...props }, ref) => {
    return (
      <MenuButton element={element} {...props} variant="secondary_icon" size="reset" ref={ref}>
        <ProductSwitcherIcon decorative={true} />
        <ScreenReaderOnly>{i18nButtonLabel}</ScreenReaderOnly>
      </MenuButton>
    );
  },
);

ProductSwitcherButton.displayName = "ProductSwitcherButton";
export { ProductSwitcherButton };
