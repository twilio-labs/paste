import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {StyledBase} from '@twilio-paste/theme';
import {NonModalDialogPrimitive} from '@twilio-paste/non-modal-dialog-primitive';

import {MinimizableDialogContext} from './MinimizableDialogContext';
import type {MinimizableDialogContextProps} from './MinimizableDialogContext';

interface StyledMinimizableDialogProps extends BoxProps, MinimizableDialogContextProps {
  minimized?: boolean;
}

const StyledMinimizableDialog = React.forwardRef<HTMLDivElement, StyledMinimizableDialogProps>(
  ({minimized, style, ...props}, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      boxShadow="shadow"
      width="size40"
      zIndex="zIndex80"
      borderRadius="borderRadius20"
      transform="none!important"
      // Note: not able to use themeGet here, so this needs to change if space70 changes
      inset={`auto 1.5rem ${minimized === true ? '0' : '1.5'}rem auto!important`}
      _focus={{outline: 'none'}}
      style={style}
    />
  )
);

StyledMinimizableDialog.displayName = 'StyledMinimizableDialog';

export interface MinimizableDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  'aria-label': string;
  element?: BoxProps['element'];
}

export const MinimizableDialog = React.forwardRef<HTMLDivElement, MinimizableDialogProps>(
  ({children, element = 'MINIMIZABLE_DIALOG', ...props}, ref) => {
    const dialog = React.useContext(MinimizableDialogContext);

    return (
      <NonModalDialogPrimitive
        {...(dialog as any)}
        {...props}
        as={StyledMinimizableDialog}
        ref={ref}
        preventBodyScroll={false}
        hideOnClickOutside={false}
      >
        {/* import Paste Theme Based Styles due to portal positioning. */}
        <StyledBase>
          <Box element={element} display="flex" flexDirection="column" backgroundColor="colorBackgroundBody">
            {children}
          </Box>
        </StyledBase>
      </NonModalDialogPrimitive>
    );
  }
);

MinimizableDialog.displayName = 'MinimizableDialog';

MinimizableDialog.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};
