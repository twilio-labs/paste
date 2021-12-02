import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Button} from '@twilio-paste/button';
import {Badge} from '@twilio-paste/badge';
import {NonModalDialogDisclosurePrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import type {PopoverButtonProps, ButtonBadgeProps} from './types';
import {PopoverContext} from './PopoverContext';

// eslint-disable-next-line react/display-name
const ButtonBadge = React.forwardRef<HTMLButtonElement, ButtonBadgeProps>(({children, ...props}, ref) => (
  <Badge {...props} as="button" ref={ref}>
    {children}
  </Badge>
));

const PopoverButton = React.forwardRef<HTMLButtonElement, PopoverButtonProps>(
  ({as = 'button', children, element = 'POPOVER_BUTTON', ...popoverButtonProps}, ref) => {
    const popover = React.useContext(PopoverContext);
    let ButtonComponent;

    if (as === 'button') {
      ButtonComponent = Button;
    } else if (as === 'badge') {
      ButtonComponent = ButtonBadge;
    }

    let computedElement = element;
    if (as === 'badge' && element === 'POPOVER_BUTTON') {
      computedElement = 'POPOVER_BADGE';
    }

    return (
      <NonModalDialogDisclosurePrimitive
        element={computedElement}
        {...(popover as any)}
        {...popoverButtonProps}
        as={ButtonComponent}
        ref={ref}
      >
        {children}
      </NonModalDialogDisclosurePrimitive>
    );
  }
);

PopoverButton.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  toggle: PropTypes.func,
  element: PropTypes.string,
};

PopoverButton.displayName = 'PopoverButton';
export {PopoverButton};
