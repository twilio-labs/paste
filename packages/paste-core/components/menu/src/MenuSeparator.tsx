import * as React from 'react';
import {Separator} from '@twilio-paste/separator';
import type {SeparatorProps} from '@twilio-paste/separator';
import {MenuPrimitiveSeparator} from '@twilio-paste/menu-primitive';
import type {MenuSeparatorProps} from './types';
import {DEFAULT_ELEMENT_NAME} from './constants';

const StyledMenuSeparator = React.forwardRef<HTMLHRElement, SeparatorProps>((props, ref) => {
  return <Separator {...props} orientation="horizontal" verticalSpacing="space40" ref={ref} />;
});

const MenuSeparator = React.forwardRef<HTMLHRElement, MenuSeparatorProps>(
  ({element = `${DEFAULT_ELEMENT_NAME}_SEPARATOR`, ...props}, ref) => {
    // as prop from reakit for some reason only accepts a string of `hr` but accepts components. any prevent type errors
    return <MenuPrimitiveSeparator {...props} element={element} as={StyledMenuSeparator as any} ref={ref} />;
  }
);
MenuSeparator.displayName = 'MenuSeparator';
export {MenuSeparator};
