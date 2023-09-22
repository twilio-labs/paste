import * as React from 'react';
import { Stack } from '@twilio-paste/stack';
import { Box } from '@twilio-paste/box';
import { Grid, Column } from '@twilio-paste/grid';
import { useUIDSeed } from '@twilio-paste/uid-library';
import { Button } from '@twilio-paste/button';
import { CheckboxCheckIcon } from '@twilio-paste/icons/esm/CheckboxCheckIcon';
import { PlusIcon } from '@twilio-paste/icons/esm/PlusIcon';
import { MinusIcon } from '@twilio-paste/icons/esm/MinusIcon';

import { useListboxPrimitiveState, ListboxPrimitive, ListboxPrimitiveGroup, ListboxPrimitiveItem } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Listbox',
  component: ListboxPrimitive,
  subcomponents: { ListboxPrimitiveItem, ListboxPrimitiveGroup },
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
            style={{
              ...(selected === item && { backgroundColor: '#0263e0', color: 'white' }),
            }}
            onSelect={() => {
              setSelected(item);
              // eslint-disable-next-line no-console
              console.log(item);
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
  const listbox = useListboxPrimitiveState({ orientation: 'horizontal' });
  return (
    <ListboxPrimitive {...listbox} aria-label="Horizontal">
      {ITEMS.map((item, index) => (
        <ListboxPrimitiveItem
          key={item}
          data-testid={`item-${index}`}
          {...listbox}
          selected={selected === item}
          style={{
            ...(selected === item && { backgroundColor: '#0263e0', color: 'white' }),
          }}
          onSelect={() => {
            setSelected(item);
            // eslint-disable-next-line no-console
            console.log(item);
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
  const seed = useUIDSeed();

  return (
    <ListboxPrimitive {...listbox} aria-label="Grouped">
      <ListboxPrimitiveGroup aria-labelledby={seed('group-1')}>
        <Stack orientation="vertical" spacing="space0">
          <span id={seed('group-1')}>Even</span>
          {ITEMS.filter((item, index) => (index + 1) % 2 === 0).map((item) => (
            <ListboxPrimitiveItem
              key={item}
              {...listbox}
              selected={selected === item}
              style={{
                ...(selected === item && { backgroundColor: '#0263e0', color: 'white' }),
              }}
              onSelect={() => {
                setSelected(item);
                // eslint-disable-next-line no-console
                console.log(item);
              }}
            >
              {item}
            </ListboxPrimitiveItem>
          ))}
        </Stack>
      </ListboxPrimitiveGroup>
      <ListboxPrimitiveGroup aria-labelledby={seed('group-2')}>
        <Stack orientation="vertical" spacing="space0">
          <span id={seed('group-2')}>Odd</span>
          {ITEMS.filter((item, index) => (index + 1) % 2 === 1).map((item) => (
            <ListboxPrimitiveItem
              key={item}
              {...listbox}
              selected={selected === item}
              style={{
                ...(selected === item && { backgroundColor: '#0263e0', color: 'white' }),
              }}
              onSelect={() => {
                setSelected(item);
                // eslint-disable-next-line no-console
                console.log(item);
              }}
            >
              {item}
            </ListboxPrimitiveItem>
          ))}
        </Stack>
      </ListboxPrimitiveGroup>
    </ListboxPrimitive>
  );
};

export const MultiselectListbox = (): React.ReactNode => {
  const [selectedSet, updateSelectedSet] = React.useState<Set<string>>(new Set());
  const listbox = useListboxPrimitiveState({ orientation: 'horizontal' });

  return (
    <ListboxPrimitive {...listbox} aria-label="Multiselect" variant="multiple">
      {ITEMS.map((item, index) => (
        <ListboxPrimitiveItem
          key={item}
          data-testid={`item-${index}`}
          {...listbox}
          selected={selectedSet.has(item)}
          style={{
            ...(selectedSet.has(item) && { backgroundColor: '#0263e0', color: 'white' }),
          }}
          onSelect={() => {
            const newSelectedSet = new Set(selectedSet);
            if (newSelectedSet.has(item)) {
              newSelectedSet.delete(item);
            } else {
              newSelectedSet.add(item);
            }
            updateSelectedSet(newSelectedSet);
            // eslint-disable-next-line no-console
            console.log(newSelectedSet);
          }}
        >
          {item}
        </ListboxPrimitiveItem>
      ))}
    </ListboxPrimitive>
  );
};

export const DualExample = (): React.ReactNode => {
  const [components, updateComponents] = React.useState(['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List']);
  const [selectedComps, updateSelectedComps] = React.useState(new Set());
  const compListbox = useListboxPrimitiveState();

  const [favs, updateFavs] = React.useState(['Modal']);
  const [selectedFavs, updateSelectedFavs] = React.useState(new Set());
  const favListbox = useListboxPrimitiveState();

  return (
    <Grid gutter="space30">
      <Column>
        <ListboxPrimitive {...compListbox} aria-label="Components" variant="multiple" as={Box} height="300px">
          <Stack orientation="vertical" spacing="space40">
            {components.map((item) => (
              <ListboxPrimitiveItem
                as={Button}
                size="small"
                key={item}
                {...compListbox}
                selected={selectedComps.has(item)}
                onSelect={() => {
                  const newSelectedComps = new Set(selectedComps);
                  if (newSelectedComps.has(item)) {
                    newSelectedComps.delete(item);
                  } else {
                    newSelectedComps.add(item);
                  }
                  updateSelectedComps(newSelectedComps);
                }}
              >
                {selectedComps.has(item) && <CheckboxCheckIcon decorative />}
                {item}
              </ListboxPrimitiveItem>
            ))}
          </Stack>
        </ListboxPrimitive>
        <Button
          variant="primary_icon"
          onClick={() => {
            updateFavs([...favs, ...(Array.from(selectedComps) as string[])]);
            updateComponents(components.filter((item) => !selectedComps.has(item)));
            selectedComps.clear();
          }}
        >
          Add <PlusIcon decorative={false} title="Add items" />
        </Button>
      </Column>
      <Column>
        <ListboxPrimitive {...favListbox} aria-label="Favorite components" variant="multiple" as={Box} height="300px">
          <Stack orientation="vertical" spacing="space40">
            {favs.map((item) => (
              <ListboxPrimitiveItem
                as={Button}
                size="small"
                key={item}
                {...favListbox}
                selected={selectedFavs.has(item)}
                onSelect={() => {
                  const newSelectedFavs = new Set(selectedFavs);
                  if (newSelectedFavs.has(item)) {
                    newSelectedFavs.delete(item);
                  } else {
                    newSelectedFavs.add(item);
                  }
                  updateSelectedFavs(newSelectedFavs);
                }}
              >
                {selectedFavs.has(item) && <CheckboxCheckIcon decorative />}
                {item}
              </ListboxPrimitiveItem>
            ))}
          </Stack>
        </ListboxPrimitive>
        <Button
          variant="primary_icon"
          onClick={() => {
            updateComponents([...components, ...(Array.from(selectedFavs) as string[])]);
            updateFavs(favs.filter((item) => !selectedFavs.has(item)));
            selectedFavs.clear();
          }}
        >
          Remove <MinusIcon decorative={false} title="Remove items" />
        </Button>
      </Column>
    </Grid>
  );
};
