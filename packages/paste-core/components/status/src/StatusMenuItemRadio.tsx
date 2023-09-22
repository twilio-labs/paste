import { MenuItemRadio } from '@twilio-paste/menu';
import type { MenuItemRadioProps } from '@twilio-paste/menu';
import * as React from 'react';

export type StatusMenuItemRadioProps = MenuItemRadioProps;

const StatusMenuItemRadio = React.forwardRef<HTMLDivElement, StatusMenuItemRadioProps>((props, ref) => {
  return <MenuItemRadio element="STATUS_MENU_ITEM_RADIO" {...props} ref={ref} />;
});

StatusMenuItemRadio.displayName = 'StatusMenuItemRadio';
export { StatusMenuItemRadio };
