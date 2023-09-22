import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxElementProps } from '@twilio-paste/box';
import type { HTMLPasteProps } from '@twilio-paste/types';
import * as React from 'react';

type JustifyOptions = 'flex-start' | 'flex-end' | 'space-between';

export interface SideModalFooterActionsProps extends HTMLPasteProps<'div'> {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  justifyContent?: JustifyOptions;
}

const SideModalFooterActions = React.forwardRef<HTMLDivElement, SideModalFooterActionsProps>(
  ({ children, element = 'SIDE_MODAL_FOOTER_ACTIONS', justifyContent = 'flex-end', ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        display="flex"
        justifyContent={justifyContent}
        flexWrap="wrap"
        flexGrow={1}
        element={element}
        columnGap="space50"
        alignItems="center"
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

SideModalFooterActions.displayName = 'SideModalFooterActions';

export { SideModalFooterActions };
