import * as React from 'react';
import { Separator } from '@twilio-paste/separator';
import type { SeparatorProps } from '@twilio-paste/separator';
import { MenuPrimitiveSeparator } from '@twilio-paste/menu-primitive';

import type { MenuSeparatorProps } from './types';

const StyledMenuSeparator = React.forwardRef<HTMLHRElement, SeparatorProps>((props, ref) => {
  return <Separator {...props} orientation="horizontal" verticalSpacing="space40" ref={ref} />;
});

StyledMenuSeparator.displayName = 'StyledMenuSeparator';

const MenuSeparator = React.forwardRef<HTMLHRElement, MenuSeparatorProps>(
  ({ element = 'MENU_SEPARATOR', ...props }, ref) => {
    // as prop from reakit for some reason only accepts a string of `hr` but accepts components. any prevent type errors
    return <MenuPrimitiveSeparator {...props} element={element} as={StyledMenuSeparator as any} ref={ref} />;
  },
);
MenuSeparator.displayName = 'MenuSeparator';
export { MenuSeparator };
