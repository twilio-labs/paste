import * as React from 'react';
import {Stack} from '@twilio-paste/stack';

import {useListboxPrimitiveState, ListboxPrimitive, ListboxPrimitiveGroup, ListboxPrimitiveItem} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Listbox',
  component: ListboxPrimitive,
  subcomponents: {ListboxPrimitiveItem, ListboxPrimitiveGroup},
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

export const GroupedOptions = (): React.ReactNode => {
  const [selected, setSelected] = React.useState<string>();
  const listbox = useListboxPrimitiveState();
  const renderItem = (item: string, index: number): React.ReactNode => (
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
  );

  return (
    <ListboxPrimitive {...listbox} aria-label="Grouped">
      <ListboxPrimitiveGroup aria-labelledby="group-1">
        <Stack orientation="vertical" spacing="space0">
          <span id="group-1">Even</span>
          {ITEMS.filter((item, index) => (index + 1) % 2 === 0).map(renderItem)}
        </Stack>
      </ListboxPrimitiveGroup>
      <ListboxPrimitiveGroup aria-labelledby="group-2">
        <Stack orientation="vertical" spacing="space0">
          <span id="group-2">Odd</span>
          {ITEMS.filter((item, index) => (index + 1) % 2 === 1).map(renderItem)}
        </Stack>
      </ListboxPrimitiveGroup>
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
