import type {ValueOf} from '@twilio-paste/types';
import type {
  MenuPrimitiveItemProps,
  MenuPrimitiveProps,
  MenuPrimitiveSeparatorProps,
} from '@twilio-paste/menu-primitive';
import type {MenuItemVariants} from './constants';

export type MenuProps = MenuPrimitiveProps & {'aria-label': string};

export type MenuItemVariant = ValueOf<typeof MenuItemVariants>;

export interface MenuItemProps extends MenuPrimitiveItemProps {
  href?: string;
  variant?: MenuItemVariant;
  as?: any;
}

export interface MenuGroupProps {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export type MenuSeparatorProps = MenuPrimitiveSeparatorProps;
