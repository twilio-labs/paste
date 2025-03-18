"use client";
import type { MenuInitialState, MenuStateReturn } from "./useMenuState";

// for the sake of documenting the types we rename the state hook types to append Props to the name, so we can docuemnt them and not cause a breaking change.
type MenuInitialStateProps = MenuInitialState;
type MenuStateReturnProps = MenuStateReturn;

export type { MenuInitialStateProps, MenuStateReturnProps };

export { useMenuState } from "./useMenuState";
export type { MenuInitialState, MenuStateReturn } from "./useMenuState";
export { Menu } from "./Menu";
export { MenuButton } from "./MenuButton";
export type { MenuButtonProps } from "./MenuButton";
export { MenuBadgeContent, MenuBadge } from "./MenuBadge";
export type { MenuBadgeProps } from "./MenuBadge";
export { MenuGroup, MenuGroupContext } from "./MenuGroup";
export { MenuItem } from "./MenuItem";
export { getComputedVariant, StyledMenuItem } from "./MenuItem.styles";
export { MenuItemCheckbox } from "./MenuItemCheckbox";
export { MenuItemRadio } from "./MenuItemRadio";
export { MenuSeparator } from "./MenuSeparator";
export { SubMenuButton } from "./SubMenuButton";
export type { SubMenuButtonProps } from "./SubMenuButton";
export type {
  MenuItemProps,
  MenuItemCheckboxProps,
  MenuItemRadioProps,
  MenuGroupProps,
  MenuSeparatorProps,
  MenuProps,
  MenuItemVariant,
  MenuItemVariantStyles,
} from "./types";
