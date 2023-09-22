import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxElementProps } from '@twilio-paste/box';
import type { ResponsiveValue } from '@twilio-paste/styling-library';
import * as React from 'react';

type Justify = 'start' | 'end';
export interface TopbarActionsProps {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  justify?: Justify;
  display?: ResponsiveValue<'none' | 'flex'>;
}
const TopbarActions = React.forwardRef<HTMLDivElement, TopbarActionsProps>(
  ({ children, element = 'TOPBAR_ACTIONS', justify, display = 'flex', ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        display={display}
        justifyContent={justify === 'start' ? 'flex-start' : 'flex-end'}
        flexShrink={justify === 'start' ? null : 0}
        flexWrap="wrap"
        flexGrow={1}
        columnGap="space50"
        element={element}
        alignItems="center"
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);
TopbarActions.displayName = 'TopbarActions';

export { TopbarActions };
