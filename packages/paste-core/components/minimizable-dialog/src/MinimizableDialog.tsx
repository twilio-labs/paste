import * as React from 'react';
import * as PropTypes from 'prop-types';
import {BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {Box} from '@twilio-paste/box';
import {styled, css} from '@twilio-paste/styling-library';
import {StyledBase} from '@twilio-paste/theme';
import {NonModalDialogPrimitive} from '@twilio-paste/non-modal-dialog-primitive';

import {MinimizableDialogContext} from './MinimizableDialogContext';

const StyledMinimizableDialog = styled.div(({minimized}: {minimized?: boolean}) =>
  css({
    boxShadow: 'shadow',
    width: 'size40',
    zIndex: 'zIndex80',
    borderRadius: 'borderRadius20',
    transform: 'none!important',
    // Note: not able to use themeGet here, so this needs to change if space70 changes
    inset: `auto 1.5rem ${minimized === true ? '0' : '1.5'}rem auto!important`,
    ['&:focus']: {
      outline: 'none',
    },
  })
);

StyledMinimizableDialog.displayName = 'StyledMinimizableDialog';

export interface MinimizableDialogProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children: React.ReactNode;
  'aria-label': string;
  element?: BoxProps['element'];
}

export const MinimizableDialog = React.forwardRef<HTMLDivElement, MinimizableDialogProps>(
  ({children, element = 'MINIMIZABLE_DIALOG', ...props}, ref) => {
    const dialog = React.useContext(MinimizableDialogContext);

    return (
      <NonModalDialogPrimitive
        {...dialog}
        {...safelySpreadBoxProps(props)}
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
