export const defaultExample = `
const DefaultExample = () => {
  const [items] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [selected, setSelected] = React.useState();
  const listbox = useListboxPrimitiveState();
  return (
    <ListboxPrimitive {...listbox} aria-label="My listbox">
      <Stack orientation="vertical" spacing="space0">
        {items.map((item) => (
          <ListboxPrimitiveItem
            key={item}
            {...listbox}
            selected={selected === item}
            onSelect={() => {
              setSelected(item);
            }}
            style={{
              ...(selected === item && {backgroundColor: '#0263e0', color: 'white'})
            }}
          >
            {item}
          </ListboxPrimitiveItem>
        ))}
      </Stack>
    </ListboxPrimitive>
  )
};

render(
  <DefaultExample />
)
`.trim();

export const horizontalExample = `
const HorizontalExample = () => {
  const [items] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [selected, setSelected] = React.useState();
  const listbox = useListboxPrimitiveState({orientation: 'horizontal'});
  return (
    <ListboxPrimitive {...listbox} aria-label="My listbox">
      {items.map((item) => (
        <ListboxPrimitiveItem
          key={item}
          {...listbox}
          selected={selected === item}
          onSelect={() => {
            setSelected(item);
          }}
          style={{
            ...(selected === item && {backgroundColor: '#0263e0', color: 'white'})
          }}
        >
          {item}
        </ListboxPrimitiveItem>
      ))}
    </ListboxPrimitive>
  )
};

render(
  <HorizontalExample />
)
`.trim();

export const groupsExample = `
const GroupsExample = () => {
  const [items] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [selected, setSelected] = React.useState();
  const listbox = useListboxPrimitiveState();
  return (
    <ListboxPrimitive {...listbox} aria-label="My listbox">
      <ListboxPrimitiveGroup aria-labelledby="group-1">
        <Stack orientation="vertical" spacing="space0">
          <span id="group-1">Even</span>
          {items.filter((item, index) => (index + 1) % 2 === 0).map((item) =>
            <ListboxPrimitiveItem
              key={item}
              {...listbox}
              selected={selected === item}
              onSelect={() => {
                setSelected(item);
              }}
              style={{
                ...(selected === item && {backgroundColor: '#0263e0', color: 'white'})
              }}
            >
              {item}
            </ListboxPrimitiveItem>
          )}
        </Stack>
      </ListboxPrimitiveGroup>
      <ListboxPrimitiveGroup aria-labelledby="group-2">
        <Stack orientation="vertical" spacing="space0">
          <span id="group-2">Odd</span>
          {items.filter((item, index) => (index + 1) % 2 === 1).map((item) =>
            <ListboxPrimitiveItem
              key={item}
              {...listbox}
              selected={selected === item}
              onSelect={() => {
                setSelected(item);
              }}
              style={{
                ...(selected === item && {backgroundColor: '#0263e0', color: 'white'})
              }}
            >
              {item}
            </ListboxPrimitiveItem>
          )}
        </Stack>
      </ListboxPrimitiveGroup>
    </ListboxPrimitive>
  )
};

render(
  <GroupsExample />
)
`.trim();

export const multipleExample = `
const MultipleExample = () => {
  const [items] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [selectedSet, updateSelectedSet] = React.useState(new Set());
  const listbox = useListboxPrimitiveState({orientation: 'horizontal'});
  return (
    <ListboxPrimitive {...listbox} aria-label="My listbox" variant="multiple">
      {items.map((item) => (
        <ListboxPrimitiveItem
          key={item}
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
          style={{
            ...(selectedSet.has(item) && {backgroundColor: '#0263e0', color: 'white'})
          }}
        >
          {item}
        </ListboxPrimitiveItem>
      ))}
    </ListboxPrimitive>
  )
};

render(
  <MultipleExample />
)
`.trim();

export const dualExample = `
const DualExample = () => {
  const [components, updateComponents] = React.useState(['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List']);
  const [favs, updateFavs] = React.useState(['Modal']);
  const [selectedComps, updateSelectedComps] = React.useState(new Set());
  const [selectedFavs, updateSelectedFavs] = React.useState(new Set());
  const compListbox = useListboxPrimitiveState();
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
        <Button variant="primary_icon" onClick={() => {
          updateFavs([...favs, ...Array.from(selectedComps)]);
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
        <Button variant="primary_icon" onClick={() => {
          updateComponents([...components, ...Array.from(selectedFavs)]);
          updateFavs(favs.filter((item) => !selectedFavs.has(item)));
          selectedFavs.clear();
        }}
        >
          Remove <MinusIcon decorative={false} title="Remove items" />
        </Button>
      </Column>
    </Grid>
  )
};

render(
  <DualExample />
)
`.trim();

export const customExample = `
const CustomExample = () => {
  const [items] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [selected, setSelected] = React.useState();
  const listbox = useListboxPrimitiveState({orientation: 'horizontal'});
  return (
    <ListboxPrimitive {...listbox} aria-label="My listbox">
      <Stack orientation="horizontal" spacing="space40">
      {items.map((item) => (
        <ListboxPrimitiveItem
          as={Button}
          key={item}
          {...listbox}
          selected={selected === item}
          onSelect={() => {
            setSelected(item);
          }}
        >
          {selected === item && <CheckboxCheckIcon decorative />}
          {item}
        </ListboxPrimitiveItem>
      ))}
      </Stack>
    </ListboxPrimitive>
  )
};

render(
  <CustomExample />
)
`.trim();
