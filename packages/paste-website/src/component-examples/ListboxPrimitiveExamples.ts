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
  const renderItem = (item, index) => (
    <ListboxPrimitiveItem
      key={item}
      {...listbox}
      selected={selected === item}
      onSelect={() => {
        setSelected(item);
      }}
    >
      {item}
    </ListboxPrimitiveItem>
  );
  const listbox = useListboxPrimitiveState();
  return (
    <ListboxPrimitive {...listbox} aria-label="My listbox">
      <ListboxPrimitiveGroup aria-labelledby="group-1">
        <Stack orientation="vertical" spacing="space0">
          <span id="group-1">Even</span>
          {items.filter((item, index) => (index + 1) % 2 === 0).map(renderItem)}
        </Stack>
      </ListboxPrimitiveGroup>
      <ListboxPrimitiveGroup aria-labelledby="group-2">
        <Stack orientation="vertical" spacing="space0">
          <span id="group-2">Odd</span>
          {items.filter((item, index) => (index + 1) % 2 === 1).map(renderItem)}
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
