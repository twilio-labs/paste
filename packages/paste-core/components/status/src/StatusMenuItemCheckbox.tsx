import * as React from 'react';
import { MenuItemCheckbox } from '@twilio-paste/menu';
import type { MenuItemCheckboxProps } from '@twilio-paste/menu';

export type StatusMenuItemCheckboxProps = MenuItemCheckboxProps;

const StatusMenuItemCheckbox = React.forwardRef<HTMLDivElement, StatusMenuItemCheckboxProps>((props, ref) => {
  return <MenuItemCheckbox element="STATUS_MENU_ITEM_CHECKBOX" {...props} ref={ref} />;
});

StatusMenuItemCheckbox.displayName = 'StatusMenuItemCheckbox';
export { StatusMenuItemCheckbox };
