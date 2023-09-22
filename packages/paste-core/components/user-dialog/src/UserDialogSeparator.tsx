import { Box } from '@twilio-paste/box';
import { Separator, type SeparatorProps } from '@twilio-paste/separator';
import * as React from 'react';

export const UserDialogSeparator = React.forwardRef<
  HTMLHRElement,
  Omit<SeparatorProps, 'orientation' | 'horizontalSpacing' | 'verticalSpacing'>
>(({ element = 'USER_DIALOG_SEPARATOR', ...props }, ref) => {
  return (
    <Box paddingY="space30">
      <Separator {...props} element={element} ref={ref} orientation="horizontal" />
    </Box>
  );
});
UserDialogSeparator.displayName = 'UserDialogSeparator';
