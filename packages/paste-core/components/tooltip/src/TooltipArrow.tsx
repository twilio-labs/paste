import * as React from 'react';
import {TooltipPrimitiveArrow, TooltipPrimitiveArrowProps} from '@twilio-paste/tooltip-primitive';
import {useTheme} from '@twilio-paste/theme';

export type TooltipArrowProps = TooltipPrimitiveArrowProps;

const TooltipArrow: React.FC<TooltipArrowProps> = props => {
  const theme = useTheme();

  return (
    <TooltipPrimitiveArrow
      {...props}
      size={theme.fontSizes.fontSize70}
      stroke={theme.borderColors.colorBorderLight}
      fill={theme.backgroundColors.colorBackgroundBody}
    />
  );
};

TooltipArrow.displayName = 'TooltipArrow';
export {TooltipArrow};
