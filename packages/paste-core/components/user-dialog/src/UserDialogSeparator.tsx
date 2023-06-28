import * as React from 'react';
import PropTypes from 'prop-types';
import {Separator, type SeparatorProps} from '@twilio-paste/separator';
import {Box} from '@twilio-paste/box';

export const UserDialogSeparator = React.forwardRef<
  HTMLHRElement,
  Omit<SeparatorProps, 'orientation' | 'horizontalSpacing' | 'verticalSpacing'>
>(({element = 'USER_DIALOG_SEPARATOR', ...props}, ref) => {
  return (
    <Box paddingY="space30">
      <Separator {...props} element={element} ref={ref} orientation="horizontal" />
    </Box>
  );
});
UserDialogSeparator.displayName = 'UserDialogSeparator';

UserDialogSeparator.propTypes = {
  element: PropTypes.string,
};
