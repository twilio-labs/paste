import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {ButtonProps} from '@twilio-paste/button';
import {Button} from '@twilio-paste/button';
import {NonModalDialogDisclosurePrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import {PopoverContext} from './PopoverContext';

export interface PopoverButtonProps extends ButtonProps {
  id?: string;
  children: React.ReactNode;
  toggle?: () => void;
}

const PopoverButton = React.forwardRef<HTMLButtonElement, PopoverButtonProps>(
  ({children, ...popoverButtonProps}, ref) => {
    const popover = React.useContext(PopoverContext);
    return (
      <NonModalDialogDisclosurePrimitive {...(popover as any)} {...popoverButtonProps} as={Button} ref={ref}>
        {children}
      </NonModalDialogDisclosurePrimitive>
    );
  }
);

if (process.env.NODE_ENV === 'development') {
  PopoverButton.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
    toggle: PropTypes.func,
  };
}

PopoverButton.displayName = 'PopoverButton';
export {PopoverButton};
