export const defaultExample = `
const authors = ['James Baldwin', 'Adrienne Maree Brown', 'Octavia Butler', 'Ta-Nehisi Coates', 'Audre Lorde', 'Nnedi Okorafor'];

const BasicCombobox = () => {
  return (
    <Combobox items={authors} labelText="Select an author" required />
  );
};

render(
  <BasicCombobox />
)
`.trim();

export const prefixSuffixExample = `
const numbers = ['(415) 555-CATS', '(415) 555-DOGS', '(415) 555-MICE'];

const PrefixSuffixCombobox = () => {
  return (
    <Combobox
      items={numbers}
      labelText="Select a Phone Number"
      insertBefore={<div>+1</div>}
      insertAfter={
        <Anchor href="#" display="flex">
          <InformationIcon decorative={false} title="Get more info" />
        </Anchor>
      }
    />
  );
};

render(
  <PrefixSuffixCombobox />
)
`.trim();

export const autoCompleteExample = `
const products = ['SMS', 'Phone Numbers', 'Video'];

const AutoCompleteCombobox = () => {
  const [inputItems, setInputItems] = React.useState(products);
  return (
    <Combobox
      autocomplete
      items={inputItems}
      labelText="Select a Product"
      helpText="Please choose a Twilio product."
      onInputValueChange={({inputValue}) => {
        if (inputValue !== undefined) {
          setInputItems(products.filter(item => item.toLowerCase().startsWith(inputValue.toLowerCase())));
        }
      }}
    />
  );
};

render(
  <AutoCompleteCombobox />
)
`.trim();

export const optionTemplateExample = `
const months = [
  {label: 'November', year: '2020', abbr: 'Nov'},
  {label: 'December', year: '2020', abbr: 'Dec'},
  {label: 'January', year: '2021', abbr: 'Jan'},
  {label: 'February', year: '2021', abbr: 'Feb'},
];

const OptionTemplateCombobox = () => {
  return (
    <Combobox
      items={months}
      labelText="Select a Month"
      optionTemplate={(item) => (
        <MediaObject verticalAlign="center">
          <MediaBody>
            <Text as="span" fontStyle="italic" color="colorTextWeak">
            ({item.abbr}){' '}
            </Text>
            <Text as="span">
              {item.label} {item.year}
            </Text>
          </MediaBody>
          <MediaFigure spacing="space20">
            <LinkExternalIcon decorative={false} title="external" />
          </MediaFigure>
        </MediaObject>
      )}
      itemToString={item => (item ? String(item.label) : null)}
    />
  );
};

render(
  <OptionTemplateCombobox />
)
`.trim();

export const controlledComboboxExample = `
const months = [
  {label: 'November', year: '2020', abbr: 'Nov'},
  {label: 'December', year: '2020', abbr: 'Dec'},
  {label: 'January', year: '2021', abbr: 'Jan'},
  {label: 'February', year: '2021', abbr: 'Feb'},
];

const ControlledCombobox = () => {
  const [value, setValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState();
  const [items, setItems] = React.useState(months);
  return (
    <>
      <Combobox
        autocomplete
        items={items}
        labelText="Select a Month"
        optionTemplate={(item) => (
          <MediaObject verticalAlign="center">
            <MediaBody>
              <Text as="span" fontStyle="italic" color="colorTextWeak">
              ({item.abbr}){' '}
              </Text>
              <Text as="span">
                {item.label} {item.year}
              </Text>
            </MediaBody>
            <MediaFigure spacing="space20">
              <LinkExternalIcon decorative={false} title="external" />
            </MediaFigure>
          </MediaObject>
        )}
        itemToString={item => (item ? String(item.label) : null)}
        onInputValueChange={({inputValue}) => {
          if (inputValue !== undefined) {
            setItems(months.filter(item => {
              return item.label.toLowerCase().startsWith(inputValue.toLowerCase())
            }));
            setValue(inputValue);
          }
        }}
        selectedItem={selectedItem}
        onSelectedItemChange={changes => {
          setSelectedItem(changes.selectedItem);
        }}
        inputValue={value}
      />
      <Box paddingTop="space70">
        Input value state: {JSON.stringify(value)}
        <br />
        Selected item state: {JSON.stringify(selectedItem)}
        <br />
        Items state: {JSON.stringify(items)}
      </Box>
    </>
  );
};

render(
  <ControlledCombobox />
)
`.trim();

export const groupedComboboxExample = `
const groupedItems = [
  {type: 'Components', label: 'Alert'},
  {type: 'Components', label: 'Anchor'},
  {type: 'Components', label: 'Button'},
  {type: 'Components', label: 'Card'},
  {type: 'Components', label: 'Heading'},
  {type: 'Components', label: 'List'},
  {type: 'Components', label: 'Modal'},
  {type: 'Components', label: 'Paragraph'},
  {type: 'Primitives', label: 'Box'},
  {type: 'Primitives', label: 'Text'},
  {type: 'Primitives', label: 'Non-modal dialog'},
  {type: 'Layout', label: 'Grid'},
  {label: 'Design Tokens'},
];

const GroupedCombobox = () => {
  const [inputItems, setInputItems] = React.useState(groupedItems);
  return (
    <Combobox
      autocomplete
      groupItemsBy="type"
      items={inputItems}
      labelText="Choose a component:"
      helpText="This is the help text"
      optionTemplate={(item) => <div>{item.label}</div>}
      onInputValueChange={({inputValue}) => {
        if (inputValue !== undefined) {
          setInputItems(
            _.filter(groupedItems, (item) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
          );
        }
      }}
      itemToString={item => (item ? item.label : null)}
    />
  );
};

render(
  <GroupedCombobox />
)
`.trim();

export const errorExample = `
const products = ['SMS', 'Phone Numbers', 'Video'];

const ErrorCombobox = () => {
  return (
    <Combobox items={products} labelText="Select a Product" helpText="This is the error message" hasError />
  );
};

render(
  <ErrorCombobox />
)
`.trim();

export const requiredExample = `
const products = ['SMS', 'Phone Numbers', 'Video'];

const RequiredCombobox = () => {
  return (
    <Combobox items={products} labelText="Select a Product" required />
  );
};

render(
  <RequiredCombobox />
)
`.trim();

export const disabledExample = `
const products = ['SMS', 'Phone Numbers', 'Video'];

const DisabledCombobox = () => {
  return (
    <Combobox items={products} labelText="Select a Product" disabled />
  );
};

render(
  <DisabledCombobox />
)
`.trim();
