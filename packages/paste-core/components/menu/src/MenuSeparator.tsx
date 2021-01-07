import * as React from 'react';
import {Separator, SeparatorProps} from '@twilio-paste/separator';
import {MenuPrimitiveSeparator} from '@twilio-paste/menu-primitive';
import {MenuSeparatorProps} from './types';

const StyledMenuSeparator = React.forwardRef<HTMLHRElement, SeparatorProps>((props, ref) => {
  return <Separator {...props} orientation="horizontal" verticalSpacing="space40" ref={ref} />;
});

const MenuSeparator = React.forwardRef<HTMLHRElement, MenuSeparatorProps>((props, ref) => {
  // as prop from reakit for some reason only accepts a string of `hr` but accepts components. any prevent type errors
  return <MenuPrimitiveSeparator {...props} as={StyledMenuSeparator as any} ref={ref} />;
});
MenuSeparator.displayName = 'MenuSeparator';
export {MenuSeparator};
