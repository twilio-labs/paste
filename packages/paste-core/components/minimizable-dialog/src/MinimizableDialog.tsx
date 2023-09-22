import * as React from 'react';
import type { BoxProps } from '@twilio-paste/box';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import { StyledBase } from '@twilio-paste/theme';
import { NonModalDialogPrimitive } from '@twilio-paste/non-modal-dialog-primitive';
import type { HTMLPasteProps } from '@twilio-paste/types';

import { MinimizableDialogContext } from './MinimizableDialogContext';
import type { MinimizableDialogContextProps } from './MinimizableDialogContext';
import { StyledMinimizableDialog } from './StyledMinimizableDialog';

interface StyledMinimizableDialogProps extends BoxProps, MinimizableDialogContextProps {
  minimized?: boolean;
}

const StyledMinimizableDialogContainer = React.forwardRef<HTMLDivElement, StyledMinimizableDialogProps>(
  ({ minimized, style, ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      zIndex="zIndex80"
      transform="none!important"
      position="absolute"
      // Note: not able to use themeGet here, so this needs to change if space70 changes
      inset={`auto 1.5rem ${minimized === true ? '0' : '1.5'}rem auto!important`}
      _focus={{ outline: 'none' }}
      style={style}
    />
  ),
);

StyledMinimizableDialogContainer.displayName = 'StyledMinimizableDialog';

export interface MinimizableDialogProps extends HTMLPasteProps<'div'> {
  children: React.ReactNode;
  'aria-label': string;
  element?: BoxProps['element'];
}

export const MinimizableDialog = React.forwardRef<HTMLDivElement, MinimizableDialogProps>(
  ({ children, element = 'MINIMIZABLE_DIALOG', ...props }, ref) => {
    const dialog = React.useContext(MinimizableDialogContext);

    return (
      <NonModalDialogPrimitive
        {...(dialog as any)}
        {...props}
        as={StyledMinimizableDialogContainer}
        ref={ref}
        preventBodyScroll={false}
        hideOnClickOutside={false}
      >
        {/* import Paste Theme Based Styles due to portal positioning. */}
        <StyledBase>
          <StyledMinimizableDialog element={element}>{children}</StyledMinimizableDialog>
        </StyledBase>
      </NonModalDialogPrimitive>
    );
  },
);

MinimizableDialog.displayName = 'MinimizableDialog';
