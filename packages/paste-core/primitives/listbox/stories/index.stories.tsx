import * as React from 'react';

import {useListboxPrimitiveState, ListboxPrimitive, ListboxPrimitiveItem} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Listbox',
  component: ListboxPrimitive,
  subcomponents: {ListboxPrimitiveItem},
};

export const SimpleListbox = (): React.ReactNode => {
  const listbox = useListboxPrimitiveState();
  return (
    <ListboxPrimitive {...listbox} aria-label="Example">
      <ListboxPrimitiveItem {...listbox}>Item 1</ListboxPrimitiveItem>
      <ListboxPrimitiveItem {...listbox}>Item 2</ListboxPrimitiveItem>
    </ListboxPrimitive>
  );
};
