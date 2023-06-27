import * as React from 'react';
import PropTypes from 'prop-types';
import {Separator, type SeparatorProps} from '@twilio-paste/separator';

export const UserDialogSeparator = React.forwardRef<
  HTMLHRElement,
  Omit<SeparatorProps, 'orientation' | 'horizontalSpacing' | 'verticalSpacing'>
>(({element = 'USER_DIALOG_SEPARATOR', ...props}, ref) => {
  return <Separator {...props} element={element} ref={ref} orientation="horizontal" />;
});
UserDialogSeparator.displayName = 'UserDialogSeparator';

UserDialogSeparator.propTypes = {
  element: PropTypes.string,
};
