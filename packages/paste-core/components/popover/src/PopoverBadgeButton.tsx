import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Badge} from '@twilio-paste/badge';
import {NonModalDialogDisclosurePrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import type {PopoverBadgeButtonProps, ButtonBadgeProps} from './types';
import {PopoverContext} from './PopoverContext';

const ButtonBadge = React.forwardRef<HTMLButtonElement, ButtonBadgeProps>(function ButtonBadge(
  {children, ...props},
  ref
) {
  return (
    <Badge {...props} as="button" ref={ref}>
      {children}
    </Badge>
  );
});

const PopoverBadgeButton = React.forwardRef<HTMLButtonElement, PopoverBadgeButtonProps>(
  ({children, element = 'POPOVER_BADGE', ...popoverButtonProps}, ref) => {
    const popover = React.useContext(PopoverContext);

    return (
      <NonModalDialogDisclosurePrimitive
        element={element}
        {...(popover as any)}
        {...popoverButtonProps}
        as={ButtonBadge}
        ref={ref}
      >
        {children}
      </NonModalDialogDisclosurePrimitive>
    );
  }
);

PopoverBadgeButton.propTypes = {
  id: PropTypes.string,
  toggle: PropTypes.func,
  element: PropTypes.string,
};

PopoverBadgeButton.displayName = 'PopoverBadgeButton';
export {PopoverBadgeButton};
