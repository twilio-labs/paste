import * as React from 'react';
import {NonModalDialogDisclosurePrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import type {ButtonProps} from '@twilio-paste/button';
import {Badge} from '@twilio-paste/core/badge';
import type {BadgeVariants, BadgeChildren} from '@twilio-paste/badge/src/types';
import {BadgePopoverContext} from './BadgePopoverContext';

interface BadgePopoverButtonProps extends Omit<ButtonProps, 'variant'>, BadgeProps {
  children: BadgeChildren;
  variant: BadgeVariants;
}

const ButtonBadge = React.forwardRef<HTMLButtonElement, BadgePopoverButtonProps>(
  ({variant, children, as, ...props}, ref) => (
    <Badge variant={variant} as="button" {...props} ref={ref}>
      {children}
    </Badge>
  )
);

export const BadgePopoverButton = React.forwardRef<HTMLButtonElement, BadgePopoverButtonProps>(
  ({children, variant}, ref) => {
    const popover = React.useContext(BadgePopoverContext);

    return (
      <NonModalDialogDisclosurePrimitive {...popover} ref={ref} as={ButtonBadge} variant={variant}>
        {children}
      </NonModalDialogDisclosurePrimitive>
    );
  }
);
