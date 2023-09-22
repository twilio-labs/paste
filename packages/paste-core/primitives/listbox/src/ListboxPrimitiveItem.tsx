import type { CompositeItemProps } from '@twilio-paste/reakit-library';
import { CompositeItem } from '@twilio-paste/reakit-library';
import * as React from 'react';

import type { As } from './types';

export interface ListboxPrimitiveItemProps
  extends Omit<CompositeItemProps, 'unstable_virtual' | 'unstable_moves' | 'unstable_system' | 'wrapElement' | 'wrap'> {
  /** Applies the aria-selected attribute for accessibility purposes */
  selected?: boolean;
  /** Event handler to respond to selection events */
  onSelect?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  as?: As;
}

export const ListboxPrimitiveItem = React.forwardRef<HTMLButtonElement, ListboxPrimitiveItemProps>(
  ({ selected = false, onSelect, ...props }, ref) => (
    <CompositeItem
      as="button"
      {...props}
      ref={ref}
      role="option"
      aria-selected={selected}
      type="button"
      onClick={onSelect}
    />
  ),
);

ListboxPrimitiveItem.displayName = 'ListboxPrimitiveItem';
