import * as React from 'react';
import PropTypes from 'prop-types';
import {Button} from '@twilio-paste/button';
import {NonModalDialogDisclosurePrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import type {ButtonProps} from '@twilio-paste/button';

import {MinimizableDialogContext} from './MinimizableDialogContext';

export type MinimizableDialogButtonProps = Omit<ButtonProps, 'as'> & {
  id?: string;
  toggle?: () => void;
};

const MinimizableDialogButton = React.forwardRef<HTMLButtonElement, MinimizableDialogButtonProps>(
  ({children, element = 'MINIMIZABLE_DIALOG_BUTTON', ...props}, ref) => {
    const dialog = React.useContext(MinimizableDialogContext);

    return (
      <NonModalDialogDisclosurePrimitive element={element} {...dialog} {...props} as={Button} ref={ref}>
        {children}
      </NonModalDialogDisclosurePrimitive>
    );
  }
);

MinimizableDialogButton.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  toggle: PropTypes.func,
  element: PropTypes.string,
};

MinimizableDialogButton.displayName = 'MinimizableDialogButton';
export {MinimizableDialogButton};
