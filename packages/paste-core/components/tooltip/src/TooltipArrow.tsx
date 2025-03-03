import { useTheme } from "@twilio-paste/theme";
import { TooltipPrimitiveArrow } from "@twilio-paste/tooltip-primitive";
import type { TooltipPrimitiveArrowProps } from "@twilio-paste/tooltip-primitive";
import * as React from "react";

export type TooltipArrowProps = TooltipPrimitiveArrowProps;

const TooltipArrow: React.FC<React.PropsWithChildren<TooltipArrowProps>> = (props) => {
  const theme = useTheme();

  return (
    <TooltipPrimitiveArrow
      {...props}
      size={theme.fontSizes.fontSize50}
      fill={theme.backgroundColors.colorBackgroundInverseElevation}
    />
  );
};

TooltipArrow.displayName = "TooltipArrow";
export { TooltipArrow };
