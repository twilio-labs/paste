import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

export interface DisplayPillGroupProps {
  'aria-label': string;
  element?: string;
  children: React.ReactNode;
}

export const DisplayPillGroup = React.forwardRef<HTMLUListElement, DisplayPillGroupProps>(
  ({element = 'DISPLAY_PILL_GROUP', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        ref={ref}
        as="ul"
        margin="space0"
        padding="space0"
        display="flex"
        columnGap="space30"
      >
        {props.children}
      </Box>
    );
  }
);
