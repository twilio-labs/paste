export const defaultExample = `
const authors = ['James Baldwin', 'Adrienne Maree Brown', 'Octavia Butler', 'Ta-Nehisi Coates', 'Audre Lorde', 'Nnedi Okorafor'];

const BasicCombobox = () => {
  return (
    <Combobox items={authors} initialSelectedItem={authors[2]} labelText="Select an author" required />
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
      labelText="Select a phone number"
      insertBefore={<Text as="span" fontWeight="fontWeightSemibold">+1</Text>}
      insertAfter={
        <Anchor href="#" display="flex">
          <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
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
const artists = ['The Aces', 'Brandi Carlile', 'Claud', 'Deb Never', 'Hayley Kiyoko', 'Janelle Monáe', 'LP', 'MUNA', 'Sam Smith', 'Years & Years'];

const AutoCompleteCombobox = () => {
  const [inputItems, setInputItems] = React.useState(artists);

  return (
    <Combobox
      autocomplete
      items={inputItems}
      labelText="Select an artist"
      onInputValueChange={({inputValue}) => {
        if (inputValue !== undefined) {
          setInputItems(artists.filter(item => item.toLowerCase().startsWith(inputValue.toLowerCase())));
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
      labelText="Select a month"
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
            <CalendarIcon decorative={true} />
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
        labelText="Select a month"
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
              <CalendarIcon decorative={true} />
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
            filter(groupedItems, (item) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
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

export const groupedLabelComboboxExample = `
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
  {type: 'Primitives', label: 'Non-modal Dialog'},
  {type: 'Layout', label: 'Grid'},
  {label: 'Design tokens'},
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
      groupLabelTemplate={(groupName) => {
        if(groupName === 'Components') {
          return (
            <MediaObject verticalAlign="center">
              <MediaFigure spacing="space20">
                <ProductStudioIcon color="colorTextIcon" decorative />
              </MediaFigure>
              <MediaBody>{groupName}</MediaBody>
            </MediaObject>
          );
        }
        if(groupName === 'Primitives') {
          return (
            <MediaObject verticalAlign="center">
              <MediaFigure spacing="space20">
                <ProductAutopilotIcon color="colorTextIcon" decorative />
              </MediaFigure>
              <MediaBody>{groupName}</MediaBody>
            </MediaObject>
          );
        }
        if(groupName === 'Layout') {
          return (
            <MediaObject verticalAlign="center">
              <MediaFigure spacing="space20">
                <ProductInsightsIcon color="colorTextIcon" decorative />
              </MediaFigure>
              <MediaBody>{groupName}</MediaBody>
            </MediaObject>
          );
        }
        return {groupName}
      }}
      onInputValueChange={({inputValue}) => {
        if (inputValue !== undefined) {
          setInputItems(
            filter(groupedItems, (item) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
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
    <Combobox items={products} labelText="Select a product" helpText="This is the error message" hasError />
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
    <Combobox items={products} labelText="Select a product" required />
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
    <Combobox items={products} labelText="Select a product" disabled />
  );
};

render(
  <DisabledCombobox />
)
`.trim();

export const disabledOptionsExample = `
const products = ['SMS', 'Fax', 'Phone Numbers', 'Video', 'Email', 'Chat'];

const DisabledCombobox = () => {
  return (
    <Combobox items={products} labelText="Select a product" disabledItems={products.slice(1,2)} />
  );
};

render(
  <DisabledCombobox />
)
`.trim();

export const inverseExample = `
const products = ['SMS', 'Phone Numbers', 'Video'];

const InverseCombobox = () => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox items={products} labelText="Select a product" helpText="This is the help text" variant="inverse" />
    </Box>
  );
};

render(
  <InverseCombobox />
)
`.trim();

export const inverseErrorExample = `
const products = ['SMS', 'Phone Numbers', 'Video'];

const InverseErrorCombobox = () => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox items={products} labelText="Select a product" helpText="This is the error message" hasError variant="inverse" />
    </Box>
  );
};

render(
  <InverseErrorCombobox />
)
`.trim();

export const stateHookCombobox = `
const objectItems = [
  {code: 'AD', label: 'Andorra', phone: '376'},
  {code: 'AE', label: 'United Arab Emirates', phone: '971'},
  {code: 'AF', label: 'Afghanistan', phone: '93'},
  {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
  {code: 'AI', label: 'Anguilla', phone: '1-264'},
  {code: 'AL', label: 'Albania', phone: '355'},
  {code: 'AM', label: 'Armenia', phone: '374'},
  {code: 'AO', label: 'Angola', phone: '244'},
  {code: 'AQ', label: 'Antarctica', phone: '672'},
  {code: 'AR', label: 'Argentina', phone: '54'},
  {code: 'AS', label: 'American Samoa', phone: '1-684'},
  {code: 'AT', label: 'Austria', phone: '43'},
];

const ComboboxControlledUsingState = () => {
  const [value, setValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState({});
  const [inputItems, setInputItems] = React.useState(objectItems);
  const {reset, ...state} = useCombobox({
    items: inputItems,
    itemToString: (item) => (item ? item.label : ''),
    onSelectedItemChange: (changes) => {
      if (changes.selectedItem != null) {
        setSelectedItem(changes.selectedItem);
      }
    },
    onInputValueChange: ({inputValue}) => {
      if (inputValue !== undefined) {
        setInputItems(
          filter(objectItems, (item) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
        );
        setValue(inputValue);
      }
    },
    initialInputValue: value,
    initialSelectedItem: selectedItem,
  });
  return (
    <>
      <Combobox
        state={{...state, reset}}
        items={inputItems}
        autocomplete
        itemToString={(item) => (item ? item.label : '')}
        labelText="Choose a country:"
        helpText="This is the help text"
        optionTemplate={(item) => (
          <div>
            {item.code} | {item.label} | {item.phone}
          </div>
        )}
        insertAfter={
          <Button
            variant="link"
            size="reset"
            onClick={() => {
              setValue('');
              setSelectedItem({});
              reset();
            }}
          >
          {!!value ? <CloseIcon decorative={false} title="Clear" />  : <SearchIcon decorative={false} title="Search" />}
          </Button>
        }
      />
      <Box paddingTop="space70">
        Input value state: {JSON.stringify(value)}
        <br />
        Selected item state: {JSON.stringify(selectedItem)}
      </Box>
    </>
  );
};

render(
  <ComboboxControlledUsingState />
)
`.trim();

export const emptyStateExample = `
const products = ['SMS', 'Fax', 'Phone Numbers', 'Video', 'Email', 'Chat'];

const SampleEmptyState = () => (
  <Box paddingY="space40" paddingX="space50">
    <Text as="span" fontStyle="italic">
      No results found
    </Text>
  </Box>
);


const EmptyStateCombobox = () => {
  const [value, setValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState('');
  const [inputItems, setInputItems] = React.useState(products);

  const {reset, ...state} = useCombobox({
    items: inputItems,
    itemToString: (item) => (item ? item.label : ''),
    onSelectedItemChange: (changes) => {
      if (changes.selectedItem != null) {
        setSelectedItem(changes.selectedItem);
      }
    },
    onInputValueChange: ({inputValue}) => {
      if (inputValue !== undefined) {
        setInputItems(
          filter(products, (item) => item.toLowerCase().startsWith(inputValue.toLowerCase()))
        );
        setValue(inputValue);
      }
    },
    initialInputValue: value,
    initialSelectedItem: selectedItem,
  });

  return (
    <Combobox
      state={{...state, reset}}
      items={inputItems}
      autocomplete
      labelText="Select a product"
      emptyState={SampleEmptyState}
    />
  );
};

render(
  <DisabledCombobox />
)
`.trim();
