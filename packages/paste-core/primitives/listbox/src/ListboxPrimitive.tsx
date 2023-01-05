import * as React from 'react';
import type {CompositeProps} from '@twilio-paste/reakit-library';
import {Composite} from '@twilio-paste/reakit-library';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListboxPrimitiveProps
  extends Omit<CompositeProps, 'unstable_virtual' | 'unstable_moves' | 'unstable_system' | 'wrapElement' | 'wrap'> {}

export const ListboxPrimitive = React.forwardRef<HTMLDivElement, ListboxPrimitiveProps>(({...props}, ref) => (
  <Composite {...props} ref={ref} role="listbox" />
));

ListboxPrimitive.displayName = 'ListboxPrimitive';
