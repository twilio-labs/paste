export const basicExample = `
const items = [
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'List',
  'Modal',
  'Paragraph',
  'Popover',
  'Tooltip',
];

function getFilteredItems(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

const SampleEmptyState = () => (
  <Box paddingY="space40" paddingX="space50">
    <Text as="span" fontStyle="italic" color="colorTextWeak">
      No results found
    </Text>
  </Box>
);

const MultiselectComboboxExample = () => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a Paste component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
      items={filteredItems}
      initialSelectedItems={items.slice(1, 3)}
      emptyState={SampleEmptyState}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        console.log(selectedItems);
      }}
    />
  );
}

render(
  <MultiselectComboboxExample />
)
`.trim();

export const insertBeforeAfterExample = `
const items = [
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'List',
  'Modal',
  'Paragraph',
  'Popover',
  'Tooltip',
];

function getFilteredItems(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}


const MultiselectComboboxExample = () => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a Paste component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
      items={filteredItems}
      initialSelectedItems={items.slice(1, 3)}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        console.log(selectedItems);
      }}
      insertBefore={
        <Text color="colorTextWeak" as="span" fontWeight="fontWeightSemibold">
          $10.99
        </Text>
      }
      insertAfter={
        <Anchor href="#" display="flex">
          <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
        </Anchor>
      }
    />
  );
}

render(
  <MultiselectComboboxExample />
)
`.trim();

export const optionGroupExample = `
const groupedItems = [
  {group: 'Components', label: 'Alert'},
  {group: 'Components', label: 'Anchor'},
  {group: 'Components', label: 'Button'},
  {group: 'Components', label: 'Card'},
  {group: 'Components', label: 'Heading'},
  {group: 'Components', label: 'List'},
  {group: 'Components', label: 'Modal'},
  {group: 'Components', label: 'Paragraph'},
  {group: 'Primitives', label: 'Box'},
  {group: 'Primitives', label: 'Text'},
  {group: 'Primitives', label: 'Non-modal dialog'},
  {group: 'Layout', label: 'Grid'},
  {label: 'Design Tokens'},
];

function getFilteredGroupedItems(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();
  return filter(groupedItems, (item) => item.label.toLowerCase().includes(lowerCasedInputValue));
}

const MultiselectComboboxExample = () => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredGroupedItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      groupItemsBy="group"
      items={filteredItems}
      itemToString={(item) => (item ? item.label : '')}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        console.log(selectedItems);
      }}
      labelText="Choose a Paste component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
      optionTemplate={(item) => <div>{item.label}</div>}
    />
  );
}

render(
  <MultiselectComboboxExample />
)
`.trim();

export const optionGroupLabelTemplateExample = `
const groupedItems = [
  {group: 'Components', label: 'Alert'},
  {group: 'Components', label: 'Anchor'},
  {group: 'Components', label: 'Button'},
  {group: 'Components', label: 'Card'},
  {group: 'Components', label: 'Heading'},
  {group: 'Components', label: 'List'},
  {group: 'Components', label: 'Modal'},
  {group: 'Components', label: 'Paragraph'},
  {group: 'Primitives', label: 'Box'},
  {group: 'Primitives', label: 'Text'},
  {group: 'Primitives', label: 'Non-modal dialog'},
  {group: 'Layout', label: 'Grid'},
  {label: 'Design Tokens'},
];

function getFilteredGroupedItems(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();
  return filter(groupedItems, (item) => item.label.toLowerCase().includes(lowerCasedInputValue));
}

const MultiselectComboboxExample = () => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredGroupedItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      groupItemsBy="group"
      items={filteredItems}
      itemToString={(item) => (item ? item.label : '')}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        console.log(selectedItems);
      }}
      labelText="Choose a Paste component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
      optionTemplate={(item) => <div>{item.label}</div>}
      groupLabelTemplate={(groupName) => {
        if (groupName === 'Components') {
          return (
            <MediaObject verticalAlign="center">
              <MediaFigure spacing="space20">
                <AttachIcon color="colorTextIcon" decorative={false} title="icon" />
              </MediaFigure>
              <MediaBody>{groupName}</MediaBody>
            </MediaObject>
          );
        }
        return groupName;
      }}
    />
  );
}

render(
  <MultiselectComboboxExample />
)
`.trim();

export const optionTemplateExample = `
const components = [
  {group: 'Components', label: 'Alert'},
  {group: 'Components', label: 'Anchor'},
  {group: 'Components', label: 'Button'},
  {group: 'Components', label: 'Card'},
  {group: 'Components', label: 'Heading'},
  {group: 'Components', label: 'List'},
  {group: 'Components', label: 'Modal'},
  {group: 'Components', label: 'Paragraph'},
  {group: 'Primitives', label: 'Box'},
  {group: 'Primitives', label: 'Text'},
  {group: 'Primitives', label: 'Non-modal dialog'},
  {group: 'Layout', label: 'Grid'},
];

function getFilteredComponents(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return components.filter(function filterComponents(component) {
    return (
      component.group.toLowerCase().includes(lowerCasedInputValue) ||
      component.label.toLowerCase().includes(lowerCasedInputValue)
    );
  });
}

const MultiselectComboboxExample = () => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredComponents(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a component"
      selectedItemsLabelText="Selected components:"
      helpText="Paste components are the building blocks of your product UI."
      items={filteredItems}
      itemToString={(item) => (item ? item.label : '')}
      optionTemplate={({label, group}) => (
        <Box as="span" display="flex" flexDirection="column">
          <Box as="span">{label}</Box>
          <Box as="span" color="colorTextWeak">{group}</Box>
        </Box>
      )}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        console.log(selectedItems);
      }}
    />
  );
};

render(
  <MultiselectComboboxExample />
)
`.trim();

export const disabledExample = `
const items = [
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'List',
  'Modal',
  'Paragraph',
  'Popover',
  'Tooltip',
];

function getFilteredItems(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

const MultiselectComboboxExample = () => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      disabled
      labelText="Choose a Paste component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
      items={filteredItems}
      initialSelectedItems={items.slice(1, 3)}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        console.log(selectedItems);
      }}
    />
  );
}

render(
  <MultiselectComboboxExample />
)
`.trim();

export const disabledOptionsExample = `
const items = [
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'List',
  'Modal',
  'Paragraph',
  'Popover',
  'Tooltip',
];

function getFilteredItems(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

const MultiselectComboboxExample = () => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a Paste component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
      items={filteredItems}
      disabledItems={filteredItems.slice(2, 4)}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        console.log(selectedItems);
      }}
    />
  );
}

render(
  <MultiselectComboboxExample />
)
`.trim();

export const errorExample = `
const items = [
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'List',
  'Modal',
  'Paragraph',
  'Popover',
  'Tooltip',
];

function getFilteredItems(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

const MultiselectComboboxExample = () => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      hasError
      labelText="Choose a Paste component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Tooltip must be used with an anchor or button."
      items={filteredItems}
      initialSelectedItems={items.slice(1, 3)}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        console.log(selectedItems);
      }}
    />
  );
}

render(
  <MultiselectComboboxExample />
)
`.trim();

export const emptyStateExample = `
const items = [
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'List',
  'Modal',
  'Paragraph',
  'Popover',
  'Tooltip',
];

function getFilteredItems(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

const SampleEmptyState = () => (
  <Box paddingY="space40" paddingX="space50">
    <Text as="span" fontStyle="italic">
      No results found
    </Text>
  </Box>
);

const MultiselectComboboxExample = () => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      emptyState={SampleEmptyState}
      labelText="Choose a Paste component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Try searching for an item that doesn't exist in the list."
      items={filteredItems}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        console.log(selectedItems);
      }}
    />
  );
}

render(
  <MultiselectComboboxExample />
)
`.trim();

export const maxHeightExample = `
const items = Array.from(new Array(100)).map((_,index) => \`Item \${index}\`)

function getFilteredItems(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

const SampleEmptyState = () => (
  <Box paddingY="space40" paddingX="space50">
    <Text as="span" fontStyle="italic">
      No results found
    </Text>
  </Box>
);

const MultiselectComboboxExample = () => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      maxHeight="130px"
      labelText="Choose a Paste component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Try searching for an item that doesn't exist in the list."
      items={filteredItems}
      initialSelectedItems={items.slice(20, 80)}
      emptyState={SampleEmptyState}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        console.log(selectedItems);
      }}
    />
  );
}

render(
  <MultiselectComboboxExample />
)
`.trim();
