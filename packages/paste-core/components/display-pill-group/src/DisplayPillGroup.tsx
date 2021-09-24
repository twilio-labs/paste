import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

export interface DisplayPillGroupProps extends React.OlHTMLAttributes<HTMLElement> {
  'aria-label': string;
  element?: string;
  children: React.ReactNode;
}

/**
 * Use the DisplayPillGroup to statically represent a collection of data. DisplayPillGroups should not be used
 * inside of forms, or for editing data.
 * @example
 * <DisplayPillGroup aria-label="Your favorite sports:">
 *   ...
 * </DisplayPillGroup>
 * @see https://paste.twilio.design/components/display-pill-group
 */
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
