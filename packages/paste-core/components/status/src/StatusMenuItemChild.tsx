import * as React from 'react';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import type { HTMLPasteProps } from '@twilio-paste/types';

import { StatusObject } from './constants';
import type { StatusBadgeVariants } from './types';

type StatusMenuItemChildVariant = StatusBadgeVariants;

export interface StatusMenuItemChildProps extends HTMLPasteProps<'div'> {
  element?: BoxProps['element'];
  variant: StatusMenuItemChildVariant;
}

const StatusMenuItemChild = React.forwardRef<HTMLDivElement, StatusMenuItemChildProps>(
  ({ children, variant, element = 'MENU_ITEM_STATUS', ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        display="flex"
        flexDirection="row"
        columnGap="space20"
        alignItems="center"
        variant={variant}
        ref={ref}
      >
        {StatusObject[variant].icon}
        {children}
      </Box>
    );
  },
);

StatusMenuItemChild.displayName = 'StatusMenuItemChild';

export { StatusMenuItemChild };
