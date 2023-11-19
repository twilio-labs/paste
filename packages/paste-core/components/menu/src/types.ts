import type { BoxElementProps, BoxStyleProps } from "@twilio-paste/box";
import type {
  MenuPrimitiveItemCheckboxProps,
  MenuPrimitiveItemProps,
  MenuPrimitiveItemRadioProps,
  MenuPrimitiveProps,
  MenuPrimitiveSeparatorProps,
} from "@twilio-paste/menu-primitive";
import type { HTMLPasteProps, ValueOf } from "@twilio-paste/types";

import type { MenuItemVariants } from "./constants";

export type MenuProps = MenuPrimitiveProps & { "aria-label": string; element?: BoxElementProps["element"] };

export type MenuItemVariant = ValueOf<typeof MenuItemVariants>;

export type MenuItemVariantStyles = {
  [key in MenuItemVariant]?: BoxStyleProps;
};

export interface MenuItemProps extends MenuPrimitiveItemProps {
  /**
   * Pass href prop to render an anchor element.
   *
   * @type {string}
   * @memberof MenuItemProps
   */
  href?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'MENU_ITEM'
   * @type {BoxElementProps['element']}
   * @memberof MenuItemProps
   */
  element?: BoxElementProps["element"];
  /**
   *
   * @type {MenuItemVariant}
   * @memberof MenuItemProps
   */
  variant?: MenuItemVariant;
  /**
   *
   * @type {any}
   * @memberof MenuItemProps
   */
  as?: any;
}
export interface MenuItemCheckboxProps extends MenuPrimitiveItemCheckboxProps {
  /**
   * Pass href prop to render an anchor element.
   *
   * @type {string}
   * @memberof MenuItemCheckboxProps
   */
  href?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "MENU_ITEM_CHECKBOX"
   * @type {BoxElementProps['element']}
   * @memberof MenuItemCheckboxProps
   */
  element?: BoxElementProps["element"];
  /**
   *
   * @type {MenuItemVariant}
   * @memberof MenuItemCheckboxProps
   */
  variant?: MenuItemVariant;
  /**
   *
   * @type {any}
   * @memberof MenuItemCheckboxProps
   */
  as?: any;
}
export interface MenuItemRadioProps extends MenuPrimitiveItemRadioProps {
  /**
   * Pass href prop to render an anchor element.
   *
   * @type {string}
   * @memberof MenuItemRadioProps
   */
  href?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "MENU_ITEM_CHECKBOX"
   * @type {BoxElementProps['element']}
   * @memberof MenuItemRadioProps
   */
  element?: BoxElementProps["element"];
  /**
   *
   * @type {MenuItemVariant}
   * @memberof MenuItemRadioProps
   */
  variant?: MenuItemVariant;
  /**
   *
   * @type {any}
   * @memberof MenuItemRadioProps
   */
  as?: any;
}

export interface MenuGroupProps extends HTMLPasteProps<"div"> {
  /**
   * Accessible name of the MenuGroup.
   *
   * @type {string}
   * @memberof MenuGroupProps
   */
  label: string;
  /**
   * Pass a decorative Paste icon to display with the group label.
   *
   * @type {string}
   * @memberof MenuGroupProps
   */
  icon?: React.ReactNode;
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "MENU_GROUP"
   * @type {BoxElementProps['element']}
   * @memberof MenuGroupProps
   */
  element?: BoxElementProps["element"];
}

export type MenuSeparatorProps = MenuPrimitiveSeparatorProps & { element?: BoxElementProps["element"] };
