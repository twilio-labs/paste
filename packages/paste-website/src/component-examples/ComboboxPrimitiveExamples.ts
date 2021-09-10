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
          {...getInputProps()}
          {...getToggleButtonProps({tabIndex: 0})}
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

export const multiSelectExample = `const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

const BasicMultiCombobox = () => {
  const seed = useUIDSeed();
  const [filteredItems, setFilteredItems] = React.useState([...items]);

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultiSelectPrimitive({});

  const handleSelectItemOnClick = React.useCallback(
    ({selectedItem}) => {
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
  } = useComboboxPrimitive({
    items: filteredItems,
    onSelectedItemChange: (args) => {
      handleSelectItemOnClick(args);
    },
  });
  const uid = useUID();

  return (
    <>
      <Box>
        <Label htmlFor={uid} {...getLabelProps()}>
          Choose a component
        </Label>
        <Box {...getComboboxProps({role: 'combobox'})}>
          <Input
            id={uid}
            type="text"
            {...getInputProps(getDropdownProps({preventKeyAction: isOpen}))}
            {...getToggleButtonProps({tabIndex: 0})}
            value={selectedItem || ''}
          />
        </Box>
        <ul {...getMenuProps()}>
          {isOpen &&
            filteredItems.map((item, index) => (
              <li
                style={highlightedIndex === index ? {textDecoration: 'underline'} : {}}
                key={seed('item-' + item)}
                {...getItemProps({item, index})}
              >
                {item}
              </li>
            ))}
        </ul>
      </Box>
      <Box>
        {selectedItems.map((item, index) => (
          <Box as="li" listStyleType="none" display="inline-block" marginRight="space30">
            <Box
              {...getSelectedItemProps({
                selectedItem,
                index,
              })}
              key={seed('selected-item-' + item)}
              onClick={() => handleRemoveItemOnClick(item)}
              as="div"
              cursor="pointer"
              color="colorText"
              backgroundColor="colorBackground"
              borderWidth="borderWidth10"
              borderColor="colorBorderWeak"
              borderStyle="solid"
              borderRadius="borderRadius20"
              paddingX="space30"
              paddingY="space20"
              height="30px"
              display="flex"
              columnGap="space20"
              alignItems="center"
            >
              {item}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

render(
  <BasicMultiCombobox />
)`.trim();
