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
      <FormLabel htmlFor={uid} {...getLabelProps()}>
        Choose a component:
      </FormLabel>
      <Box {...getComboboxProps({role: 'combobox'})}>
        <FormInput
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
      <FormLabel htmlFor={uid} {...getLabelProps()}>
        Choose a component:
      </FormLabel>
      <Box display="flex" {...getComboboxProps()}>
        <FormInput id={uid} type="text" {...getInputProps()} />
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
