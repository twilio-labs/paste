import * as React from 'react';
import {Stack} from '@twilio-paste/stack';

import {useListboxPrimitiveState, ListboxPrimitive, ListboxPrimitiveItem} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Listbox',
  component: ListboxPrimitive,
  subcomponents: {ListboxPrimitiveItem},
};

const ITEMS = ['Item 1', 'Item 2', 'Item 3'];

export const VerticalListbox = (): React.ReactNode => {
  const [selected, setSelected] = React.useState<string>();
  const listbox = useListboxPrimitiveState();
  return (
    <ListboxPrimitive {...listbox} aria-label="Vertical">
      <Stack orientation="vertical" spacing="space0">
        {ITEMS.map((item, index) => (
          <ListboxPrimitiveItem
            key={item}
            data-testid={`item-${index}`}
            {...listbox}
            selected={selected === item}
            onSelect={() => {
              setSelected(item);
            }}
          >
            {item}
          </ListboxPrimitiveItem>
        ))}
      </Stack>
    </ListboxPrimitive>
  );
};

export const HorizontalListbox = (): React.ReactNode => {
  const [selected, setSelected] = React.useState<string>();
  const listbox = useListboxPrimitiveState({orientation: 'horizontal'});
  return (
    <ListboxPrimitive {...listbox} aria-label="Horizontal">
      {ITEMS.map((item, index) => (
        <ListboxPrimitiveItem
          key={item}
          data-testid={`item-${index}`}
          {...listbox}
          selected={selected === item}
          onSelect={() => {
            setSelected(item);
          }}
        >
          {item}
        </ListboxPrimitiveItem>
      ))}
    </ListboxPrimitive>
  );
};

export const MultiselectListbox = (): React.ReactNode => {
  const [selectedSet, updateSelectedSet] = React.useState<Set<string>>(new Set());
  const listbox = useListboxPrimitiveState({orientation: 'horizontal'});
  return (
    <ListboxPrimitive {...listbox} aria-label="Multiselect" variant="multiple">
      {ITEMS.map((item, index) => (
        <ListboxPrimitiveItem
          key={item}
          data-testid={`item-${index}`}
          {...listbox}
          selected={selectedSet.has(item)}
          onSelect={() => {
            const newSelectedSet = new Set(selectedSet);
            if (newSelectedSet.has(item)) {
              newSelectedSet.delete(item);
            } else {
              newSelectedSet.add(item);
            }
            updateSelectedSet(newSelectedSet);
          }}
        >
          {item}
        </ListboxPrimitiveItem>
      ))}
    </ListboxPrimitive>
  );
};
