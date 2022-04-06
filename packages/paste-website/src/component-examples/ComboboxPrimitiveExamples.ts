export const defaultExample = `
const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

const BasicCombobox = () => {
  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    selectedItem,
  } = useComboboxPrimitive({items});
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid} {...getLabelProps()}>
        Choose a component:
      </Label>
      <Box {...getComboboxProps({role: 'combobox'})}>
        <Input
          id={uid}
          type="text"
          {...getInputProps(getToggleButtonProps({tabIndex: 0}))}
          value={selectedItem || ''}
        />
      </Box>
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={highlightedIndex === index ? {textDecoration: 'underline'} : {}}
              key={item}
              {...getItemProps({item, index})}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
};

render(
  <BasicCombobox />
)
`.trim();

export const autocompleteExample = `
const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

const AutocompleteCombobox = () => {
  const [inputItems, setInputItems] = React.useState(items);
  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
  } = useComboboxPrimitive({
    items: inputItems,
    onInputValueChange: ({inputValue}) => {
      setInputItems(items.filter(item => item.toLowerCase().startsWith(inputValue.toLowerCase())));
    },
  });
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid} {...getLabelProps()}>
        Choose a component:
      </Label>
      <Box display="flex" {...getComboboxProps()}>
        <Input id={uid} type="text" {...getInputProps()} />
        <Button {...getToggleButtonProps()} aria-label="toggle menu" variant="primary">
          <ChevronDownIcon size="sizeIcon30" decorative={false} title="toggle menu" />
        </Button>
      </Box>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={highlightedIndex === index ? {textDecoration: 'underline'} : {}}
              key={item}
              {...getItemProps({item, index})}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
};

render(
  <AutocompleteCombobox />
)
`.trim();

export const multiSelectExample =
  `const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

const BasicMultiCombobox = () => {
  const seed = useUIDSeed();
  const [filteredItems, setFilteredItems] = React.useState([...items]);

  const formPillState = useFormPillState();

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultiSelectPrimitive({});

  const handleSelectItemOnClick = React.useCallback(
    (selectedItem) => {
      addSelectedItem(selectedItem);

      setFilteredItems((currentFilteredItems) => currentFilteredItems.filter((item) => item !== selectedItem));
    },
    [addSelectedItem, setFilteredItems]
  );

  const handleRemoveItemOnClick = React.useCallback(
    (selectedItem) => {
      removeSelectedItem(selectedItem);

      setFilteredItems((currentFilteredItems) => [...currentFilteredItems, selectedItem].sort());
    },
    [removeSelectedItem]
  );

  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    selectedItem,
    selectItem,
  } = useComboboxPrimitive({
    items: filteredItems,
    initialInputValue: '',
    onSelectedItemChange: ({selectedItem: selected}) => {
      if (selected != null) {
        handleSelectItemOnClick(selected);
      }

      selectItem(null);
    },
  });

  const inputId = seed('input-element');

  return (
    <>
      <Box marginBottom="space40" position="relative">
        <Label htmlFor={inputId} {...getLabelProps()}>
          Choose a component
        </Label>
        <Box {...getComboboxProps({role: 'combobox'})}>
          <Input
            id={inputId}
            type="text"
            {...getInputProps({
              ...getDropdownProps({
                preventKeyAction: isOpen,
                ...getToggleButtonProps({tabIndex: 0}),
              }),
            })}
            value={selectedItem || ''}
          />
        </Box>
        <ComboboxListbox hidden={!isOpen} {...getMenuProps()}>
          <ComboboxListboxGroup>
            {filteredItems.map((filteredItem, index) => (
              <ComboboxListboxOption
                highlighted={highlightedIndex === index}
                variant="default"
                {...getItemProps({item: filteredItem, index, key: seed('filtered-item-' + filteredItem)})}
              >
                {filteredItem}
              </ComboboxListboxOption>
            ))}
          </ComboboxListboxGroup>
        </ComboboxListbox>
      </Box>
      <FormPillGroup {...formPillState} aria-label="Selected components">
        {selectedItems.map((item, index) => {
          return (
            <FormPill
              {...getSelectedItemProps({
                selectedItem,
                index,
                key: 'selected-item-' + item,
              })}
              tabIndex={null}
              {...formPillState}
              onDismiss={() => handleRemoveItemOnClick(item)}
            >
              {item}
            </FormPill>
          );
        })}
      </FormPillGroup>
    </>
  );
};

render(
  <BasicMultiCombobox />
)`.trim();
