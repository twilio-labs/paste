import * as React from 'react';
import {Separator, SeparatorProps} from '@twilio-paste/separator';
import {MenuPrimitiveSeparator} from '@twilio-paste/menu-primitive';
import {MenuSeparatorProps} from './types';

const StyledMenuSeparator: React.FC<SeparatorProps> = props => {
  return <Separator {...props} orientation="horizontal" verticalSpacing="space40" />;
};

const MenuSeparator: React.FC<MenuSeparatorProps> = props => {
  // as prop from reakit for some reason only accepts a string of `hr` but accepts components. any prevent type errors
  return <MenuPrimitiveSeparator {...props} as={StyledMenuSeparator as any} />;
};
MenuSeparator.displayName = 'MenuSeparator';
export {MenuSeparator};
