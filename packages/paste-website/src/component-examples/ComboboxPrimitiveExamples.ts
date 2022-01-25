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

  const {ref, toggleButtonProps} = getToggleButtonProps({tabIndex: 0});

  return (
    <>
      <Label htmlFor={uid} {...getLabelProps()}>
        Choose a component:
      </Label>
      <Box {...getComboboxProps({role: 'combobox'})}>
        <Input id={uid} type="text" {...toggleButtonProps} {...getInputProps({ref})} value={selectedItem || ''} />
      </Box>
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={highlightedIndex === index ? {textDecoration: 'underline'} : {}}
              // eslint-disable-next-line react/no-array-index-key
              key={item+index}
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
  const [inputValue, setInputValue] = React.useState('');
  const formPillState = useFormPillState();

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultiSelectPrimitive({});

  const handleRemoveItemOnClick = React.useCallback(
    (selectedItem) => {
      removeSelectedItem(selectedItem);
    },
    [removeSelectedItem]
  );

  const getFilteredItems = () => {
    return items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase()));
  };

  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    selectItem,
  } = useComboboxPrimitive({
    inputValue,
    items: getFilteredItems(),
    onStateChange: (args) => {
      switch (args.type) {
        case useComboboxPrimitive.stateChangeTypes.InputChange:
          setInputValue(args.inputValue);
          break;
        case useComboboxPrimitive.stateChangeTypes.InputKeyDownEnter:
        case useComboboxPrimitive.stateChangeTypes.ItemClick:
        case useComboboxPrimitive.stateChangeTypes.InputBlur:
          if (args.selectedItem) {
            addSelectedItem(args.selectedItem);
            setInputValue('');
            selectItem(null);
          }
          break;
        default:
          break;
      }
    },
  });

  const uid = useUID();
  const {ref, toggleButtonProps} = getToggleButtonProps({tabIndex: 0});

  return (
    <>
      <Box marginBottom="space40" position="relative">
        <Label htmlFor={uid} {...getLabelProps()}>
          Choose a component
        </Label>
        <Box {...getComboboxProps({role: 'combobox'})}>
          <Input
            id={uid}
            type="text"
            {...toggleButtonProps}
            {...getInputProps({
              ref,
              ...getDropdownProps({preventKeyAction: isOpen}),
            })}
          />
        </Box>
        <ComboboxListbox hidden={!isOpen} {...getMenuProps()}>
          {isOpen && (
            <>
              {getFilteredItems().map((item, index) => (
                <ComboboxListboxOption
                  variant="default"
                  highlighted={highlightedIndex === index}
                  key={seed('item-'+item)}
                  {...getItemProps({item, index})}
                >
                  {item}
                </ComboboxListboxOption>
              ))}
            </>
          )}
        </ComboboxListbox>
      </Box>
      <FormPillGroup {...formPillState} aria-label="Selected components">
        {selectedItems.map((selectedItem, index) => {
          return (
            <FormPill
              {...getSelectedItemProps({
                selectedItem,
                index,
              })}
              tabIndex={null}
              {...formPillState}
              key={seed('selected-item-'+selectedItem)}
              onDismiss={() => handleRemoveItemOnClick(selectedItem)}
            >
              {selectedItem}
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
