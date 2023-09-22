import * as React from 'react';
import type { CompositeProps } from '@twilio-paste/reakit-library';
import { Composite } from '@twilio-paste/reakit-library';

import type { As, ListboxPrimitiveVariants } from './types';

export interface ListboxPrimitiveProps
  extends Omit<
    CompositeProps,
    'unstable_virtual' | 'unstable_moves' | 'unstable_system' | 'wrapElement' | 'wrap' | 'as'
  > {
  variant?: ListboxPrimitiveVariants;
  as?: As;
}

export const ListboxPrimitive = React.forwardRef<HTMLDivElement, ListboxPrimitiveProps>(
  ({ variant = 'single', orientation, ...props }, ref) => (
    <Composite
      as="div"
      {...props}
      ref={ref}
      role="listbox"
      aria-multiselectable={variant === 'multiple'}
      aria-orientation={orientation}
    />
  ),
);

ListboxPrimitive.displayName = 'ListboxPrimitive';
