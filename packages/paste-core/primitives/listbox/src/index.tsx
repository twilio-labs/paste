import * as React from 'react';
import type {CompositeProps} from '@twilio-paste/reakit-library';
import {Composite, useCompositeState} from '@twilio-paste/reakit-library';

const ListboxPrimitive = React.forwardRef<HTMLDivElement, CompositeProps>(({orientation, ...props}, ref) => {
  const loop = orientation === 'horizontal';
  const composite = useCompositeState({loop});

  return <Composite {...composite} {...props} ref={ref} role="listbox" />;
});

ListboxPrimitive.displayName = 'ListboxPrimitive';

export {ListboxPrimitive};
export {
  CompositeGroup as ListboxPrimitiveGroup,
  CompositeItem as ListboxPrimitiveItem,
  useCompositeState as useListboxPrimitiveState,
} from '@twilio-paste/reakit-library';
export type {
  CompositeProps as ListboxPrimitiveProps,
  CompositeGroupProps as ListboxPrimitiveGroupProps,
  CompositeItemProps as ListboxPrimitiveItemProps,
} from '@twilio-paste/reakit-library';
