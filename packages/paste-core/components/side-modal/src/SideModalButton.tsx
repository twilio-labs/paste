import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Button} from '@twilio-paste/button';
import {NonModalDialogDisclosurePrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import {SideModalContext} from './SideModalContext';
import type {ButtonProps} from '@twilio-paste/button';

type SideModalButtonProps = Omit<ButtonProps, 'as'> & {
  id?: string;
};

const SideModalButton = React.forwardRef<HTMLButtonElement, SideModalButtonProps>(
  ({children, element = 'SIDE_MODAL_BUTTON', ...props}, ref) => {
    const dialog = React.useContext(SideModalContext);

    return (
      <NonModalDialogDisclosurePrimitive element={element} {...dialog} {...props} as={Button} ref={ref}>
        {children}
      </NonModalDialogDisclosurePrimitive>
    );
  }
);

SideModalButton.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

SideModalButton.displayName = 'SideModalButton';
export {SideModalButton};
