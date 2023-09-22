import * as React from 'react';
import { Menu } from '@twilio-paste/menu';
import type { MenuProps } from '@twilio-paste/menu';

export type StatusMenuProps = MenuProps;

const StatusMenu = React.forwardRef<HTMLDivElement, StatusMenuProps>((props, ref) => {
  return <Menu element="STATUS_MENU" {...props} ref={ref} />;
});

StatusMenu.displayName = 'StatusMenu';
export { StatusMenu };
