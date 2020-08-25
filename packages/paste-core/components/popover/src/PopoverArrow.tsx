import * as React from 'react';
import {
  NonModalDialogArrowPrimitive,
  NonModalDialogArrowPrimitiveProps,
} from '@twilio-paste/non-modal-dialog-primitive';
import {Box, BoxProps} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';

export const StyledArrow = React.forwardRef<HTMLDivElement, BoxProps>(({element = 'POPOVER_ARROW', ...props}, ref) => {
  return (
    <Box
      {...props}
      as="div"
      backgroundColor="colorBackgroundBody"
      bottom="-8px"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderColor="colorBorderLighter"
      borderBottomWidth="borderWidth0"
      borderRightWidth="borderWidth0"
      position="absolute"
      size="sizeIcon10"
      element={element}
      transform="rotate(45deg)"
      ref={ref}
    />
  );
});

export type PopoverArrowProps = NonModalDialogArrowPrimitiveProps;

const PopoverArrow: React.FC<PopoverArrowProps> = props => {
  const theme = useTheme();

  return (
    <NonModalDialogArrowPrimitive
      {...props}
      size={theme.fontSizes.fontSize70}
      stroke={theme.borderColors.colorBorderLighter}
      fill={theme.backgroundColors.colorBackgroundBody}
    >
      <StyledArrow />
    </NonModalDialogArrowPrimitive>
  );
};

PopoverArrow.displayName = 'PopoverArrow';
export {PopoverArrow};
