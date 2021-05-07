import * as React from 'react';
import {
  NonModalDialogArrowPrimitive,
  NonModalDialogArrowPrimitiveProps,
} from '@twilio-paste/non-modal-dialog-primitive';
import {useTheme} from '@twilio-paste/theme';

export type PopoverArrowProps = NonModalDialogArrowPrimitiveProps;

const PopoverArrow: React.FC<PopoverArrowProps> = (props) => {
  const theme = useTheme();

  return (
    <NonModalDialogArrowPrimitive
      {...props}
      size={theme.fontSizes.fontSize70}
      stroke={theme.borderColors.colorBorderWeaker}
      fill={theme.backgroundColors.colorBackgroundBody}
    />
  );
};

PopoverArrow.displayName = 'PopoverArrow';
export {PopoverArrow};
