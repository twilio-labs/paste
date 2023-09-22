import * as React from 'react';
import { MenuItem } from '@twilio-paste/menu';
import type { MenuItemProps } from '@twilio-paste/menu';

export type StatusMenuItemProps = MenuItemProps;

const StatusMenuItem = React.forwardRef<HTMLDivElement, StatusMenuItemProps>((props, ref) => {
  return <MenuItem element="STATUS_MENU_ITEM" {...props} ref={ref} />;
});

StatusMenuItem.displayName = 'StatusMenuItem';
export { StatusMenuItem };
