import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {ButtonProps} from '@twilio-paste/button';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';

const FilePickerButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({children, element, disabled, ...props}, ref) => {
    return (
      <Box whiteSpace="nowrap">
        <Button {...props} element={element} ref={ref} size="small" disabled={disabled} as="span" type="button">
          {children}
        </Button>
      </Box>
    );
  }
);

FilePickerButton.displayName = 'FilePickerButton';

FilePickerButton.propTypes = {
  element: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export {FilePickerButton};
