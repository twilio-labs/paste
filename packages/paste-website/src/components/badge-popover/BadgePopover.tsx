import * as React from 'react';
import {useTheme, StyledBase} from '@twilio-paste/core/theme';
import {NonModalDialogPrimitive, NonModalDialogArrowPrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import {Box, safelySpreadBoxProps} from '@twilio-paste/core/box';
import type {BoxProps} from '@twilio-paste/core/box';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {BadgePopoverContext} from './BadgePopoverContext';

const BadgePopoverBase = React.forwardRef<HTMLDivElement, BoxProps>(({style, ...props}, ref) => (
  <Box
    {...safelySpreadBoxProps(props)}
    backgroundColor="colorBackgroundBody"
    borderStyle="solid"
    borderWidth="borderWidth10"
    borderColor="colorBorderWeaker"
    borderRadius="borderRadius20"
    boxShadow="shadowCard"
    maxWidth="size30"
    zIndex="zIndex80"
    _focus={{outline: 'none'}}
    style={style}
    ref={ref}
  />
));

export interface BadgePopoverProps {
  'aria-label': string;
  children: React.ReactNode;
}

export const BadgePopover = React.forwardRef<HTMLDivElement, BadgePopoverProps>(({children, ...props}, ref) => {
  const theme = useTheme();
  const popover = React.useContext(BadgePopoverContext);
  return (
    <NonModalDialogPrimitive {...popover} {...props} as={BadgePopoverBase} preventBodyScroll={false} ref={ref}>
      <StyledBase>
        <NonModalDialogArrowPrimitive
          {...popover}
          size={theme.fontSizes.fontSize70}
          stroke={theme.borderColors.colorBorderWeaker}
          fill={theme.backgroundColors.colorBackgroundBody}
        />
        <Box paddingX="space80" paddingY="space70">
          <Box position="absolute" right={8} top={8}>
            <Button
              variant="reset"
              size="reset"
              // @ts-ignore
              onClick={popover.hide}
            >
              <CloseIcon decorative={false} color="colorTextWeak" size="sizeIcon10" title="Close popover" />
            </Button>
          </Box>
          {children}
        </Box>
      </StyledBase>
    </NonModalDialogPrimitive>
  );
});
