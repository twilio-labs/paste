import type {ValueOf} from '@twilio-paste/types';
import type {BoxElementProps, BoxStyleProps} from '@twilio-paste/box';
import type {
  MenuPrimitiveItemProps,
  MenuPrimitiveItemCheckboxProps,
  MenuPrimitiveItemRadioProps,
  MenuPrimitiveProps,
  MenuPrimitiveSeparatorProps,
} from '@twilio-paste/menu-primitive';

import type {MenuItemVariants} from './constants';

export type MenuProps = MenuPrimitiveProps & {'aria-label': string; element?: BoxElementProps['element']};

export type MenuItemVariant = ValueOf<typeof MenuItemVariants>;

export type MenuItemVariantStyles = {
  [key in MenuItemVariant]?: BoxStyleProps;
};

export interface MenuItemProps extends MenuPrimitiveItemProps {
  href?: string;
  element?: BoxElementProps['element'];
  variant?: MenuItemVariant;
  as?: any;
}
export interface MenuItemCheckboxProps extends MenuPrimitiveItemCheckboxProps {
  href?: string;
  element?: BoxElementProps['element'];
  variant?: MenuItemVariant;
  as?: any;
}
export interface MenuItemRadioProps extends MenuPrimitiveItemRadioProps {
  href?: string;
  element?: BoxElementProps['element'];
  variant?: MenuItemVariant;
  as?: any;
}

export interface MenuGroupProps {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  element?: BoxElementProps['element'];
}

export type MenuSeparatorProps = MenuPrimitiveSeparatorProps & {element?: BoxElementProps['element']};
