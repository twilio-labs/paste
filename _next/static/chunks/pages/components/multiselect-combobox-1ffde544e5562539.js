(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7478],{10656:(e,t,o)=>{var l=o(16799);e.exports=function(e,t){return function(o,n){if(null==o)return o;if(!l(o))return e(o,n);for(var a=o.length,i=t?a:-1,s=Object(o);(t?i--:++i<a)&&!1!==n(s[i],i,s););return o}}},11598:(e,t,o)=>{"use strict";o.r(t),o.d(t,{AttachIcon:()=>i});var l=o(36669),n=o(55729),a=o(96316);let i=n.forwardRef(({as:e,display:t,element:o="ICON",size:i,color:s,title:r,decorative:u},p)=>{let m=`AttachIcon-${(0,l.GV)()}`;if(!u&&null==r)throw Error("[AttachIcon]: Missing a title for non-decorative icon.");return n.createElement(a.IconWrapper,{as:e,display:t,element:o,size:i,color:s,ref:p},n.createElement("svg",{role:"img","aria-hidden":u,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},r?n.createElement("title",{id:m},r):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.879 9.264l5.59-5.73a3.251 3.251 0 013.214-.924 3.347 3.347 0 012.36 2.42 3.447 3.447 0 01-.75 3.135l-.145.153-5.623 5.767a1.87 1.87 0 01-2.668-.023 1.987 1.987 0 01-.116-2.627l.099-.113 5.618-5.761c.195-.2.512-.2.708 0a.523.523 0 01.058.655l-.058.07-5.612 5.755a.94.94 0 00.011 1.295.885.885 0 001.174.09l.083-.073 5.624-5.767a2.4 2.4 0 00.628-2.296 2.333 2.333 0 00-1.645-1.686 2.264 2.264 0 00-2.117.523l-.129.127L4.587 9.99a3.866 3.866 0 000 5.371 3.64 3.64 0 005.097.139l.143-.139 6.818-6.99c.196-.2.513-.2.708 0a.523.523 0 01.058.655l-.058.071-6.818 6.99a4.626 4.626 0 01-6.656 0c-1.787-1.832-1.837-4.77-.15-6.663l.15-.16z"})))});i.displayName="AttachIcon"},38406:(e,t,o)=>{"use strict";o.r(t),o.d(t,{__N_SSG:()=>k,default:()=>z,getStaticProps:()=>B,mdxHeadings:()=>R,meta:()=>A}),o(55729);var l=o(11885),n=o(4073),a=o(76127),i=o(629),s=o(93875),r=o(82724),u=o(95036),p=o(7658),m=o(83889),c=o(11598),d=o(54652),g=o(61593),b=o(17377),h=o(89564),x=o(64305),y=o.n(x);let C=`
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
`.trim(),f=`
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
`.trim(),I=`
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
`.trim(),w=`
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
`.trim(),v=`
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
`.trim(),V=`
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
`.trim(),T=`
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
`.trim(),M=`
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
`.trim(),P=`
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
`.trim(),S=`
const items = Array.from(new Array(100)).map((_,index) => \`Item \${index}\`)

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
`.trim(),N=`
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

const SampleEmptyState = () => (
  <Box paddingY="space40" paddingX="space50">
    <Text as="span" fontStyle="italic" color="colorTextWeak">
      No results found
    </Text>
  </Box>
);

const MultiselectComboboxExample = () => {
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredGroupedItems(inputValue), [inputValue]);

  const onSelectedItemsChange = React.useCallback((selectedItems) => {
    console.log(selectedItems);
  }, []);

  const state = useMultiselectCombobox({
    initialSelectedItems: filteredItems.slice(0, 2),
    onSelectedItemsChange,
  });

  return (
    <>
      <Box marginBottom="space40">
        <Button variant="primary" onClick={() => state.setSelectedItems([])}>
          Clear selection
        </Button>
      </Box>
      <MultiselectCombobox
        state={state}
        groupItemsBy="group"
        items={filteredItems}
        emptyState={SampleEmptyState}
        inputValue={inputValue}
        itemToString={(item) => (item ? item.label : '')}
        onInputValueChange={({inputValue = ''}) => {
          setInputValue(newInputValue);
        }}
        onSelectedItemsChange={onSelectedItemsChange}
        labelText="Choose a Paste Component"
        selectedItemsLabelText="Selected Paste components"
        helpText="Paste components are the building blocks of your product UI."
        optionTemplate={(item) => {
          return <div>{item.label}</div>;
        }}
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
    </>
  );
}

render(
  <MultiselectComboboxExample />
)
`.trim(),L=`

const items = [
  "Alert",
  "Heading",
  "List",
  "Paragraph",
];

function getFilteredItems(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

const PopoverCombobox = () => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);
  return (
    <PopoverContainer baseId="popover-example">
      <PopoverButton variant="primary">Open</PopoverButton>
      <Popover aria-label="Popover">
        <Box width="size30">
          <MultiselectCombobox
            usePortal={false}
            selectedItemsLabelText="items:"
            items={filteredItems}
            labelText="Select an item"
            onInputValueChange={({ inputValue: newInputValue = "" }) => {
              setInputValue(newInputValue);
            }}
          />
        </Box>
      </Popover>
    </PopoverContainer>
  );
};

render(
  <PopoverCombobox />
)
`.trim();var E=o(40615),k=!0;let A={title:"Multiselect Combobox",package:"@twilio-paste/combobox",description:"A Multiselect Combobox is a styled dropdown form element that allows users to select multiple values from a list.",slug:"/components/multiselect-combobox/"},B=async()=>({props:{data:{...packageJson,...feature,nameOverride:"Multiselect Combobox",descriptionOverride:"A Multiselect Combobox is a styled dropdown form element that allows users to select multiple values from a list."},navigationData,mdxHeadings:R,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/combobox/src/multiselect",storybookUrl:"/?path=/story/components-combobox-multiselectcombobox--multiselect-combobox-basic"}}}),R=[{value:"Guidelines",depth:2},{value:"About Multiselect Combobox",depth:3},{value:"What’s the difference between Select and Comboboxes?",depth:3},{value:"Accessibility",depth:3},{value:"Keyboard interaction",depth:4},{value:"Examples",depth:2},{value:"Basic Multiselect Combobox",depth:3},{value:"Multiselect Combobox with add-ons (prefix/suffix text or icons)",depth:3},{value:"Multiselect Combobox with option groups",depth:3},{value:"Multiselect Combobox with a custom group label",depth:3},{value:"Multiselect Combobox with option template",depth:3},{value:"Multiselect Combobox with max height",depth:3},{value:"useMultiselectCombobox state hook",depth:3},{value:"States",depth:2},{value:"Disabled Multiselect Combobox",depth:3},{value:"Multiselect Combobox with disabled options",depth:3},{value:"Multiselect Combobox with error",depth:3},{value:"Multiselect Combobox with an empty state",depth:3},{value:"Composition Notes",depth:2},{value:"Positioning form fields",depth:3},{value:"Options in a Combobox",depth:3},{value:"Errors",depth:3},{value:"When to use Multiselect Combobox",depth:2}],F=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,l.yg)("div",e)},D={meta:A,getStaticProps:B,mdxHeadings:R},O=E.A;function z({components:e,...t}){return(0,l.yg)(O,{...D,...t,components:e,mdxType:"MDXLayout"},(0,l.yg)(F,{scope:{MultiselectCombobox:s.PT,Box:a.az,Text:i.EY},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},C),(0,l.yg)("h2",null,"Guidelines"),(0,l.yg)("h3",null,"About Multiselect Combobox"),(0,l.yg)("p",null,`A Multiselect Combobox allows a user to either type or select multiple values from a styled listbox of
options. Each option can consist of more than just text, e.g. text paired with an icon.`),(0,l.yg)("h3",null,`What’s the difference between Select and Comboboxes?`),(0,l.yg)("p",null,`At its most basic, a Select has an options list that’s styled according to the browser default.
A Combobox has a Twilio-styled options list and can allow for additional functionality like
autocomplete and multiselect.`),(0,l.yg)("p",null,"Use a ",(0,l.yg)("a",{parentName:"p",href:"/components/select"},"Select")," when:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"You need a native picker experience, especially on mobile devices."),(0,l.yg)("li",{parentName:"ul"},"Users will be selecting from a list of 4-10 options, or a sorted list of highly familiar options (e.g., alphabetical list of states or countries)."),(0,l.yg)("li",{parentName:"ul"},"You need the component to work out-of-the-box across all operating systems and browsers.")),(0,l.yg)("p",null,"Use a Multiselect Combobox when:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"You need a Twilio-styled options list."),(0,l.yg)("li",{parentName:"ul"},"You need to show more than text in an option (e.g., text paired with an icon)."),(0,l.yg)("li",{parentName:"ul"},"You need to group options under labels."),(0,l.yg)("li",{parentName:"ul"},"You need to disable options in the list."),(0,l.yg)("li",{parentName:"ul"},"Users would benefit from autocomplete functionality (e.g., autocomplete, search). For example, autocomplete may be useful when users need to select from a list of more than 10 options."),(0,l.yg)("li",{parentName:"ul"},"You need to lazy load a much longer list of options to improve page load performance.")),(0,l.yg)("h3",null,"Accessibility"),(0,l.yg)("p",null,"Multiselect Combobox is built with consideration for the ",(0,l.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/"},"ARIA combobox pattern"),"."),(0,l.yg)("p",null,"When a user is focused on a Combobox, the listbox opens. When a user makes a selection, the listbox closes so the selected option can be registered to screen readers."),(0,l.yg)("h4",null,"Keyboard interaction"),(0,l.yg)("p",null,"When the user is focused on a Combobox, the following keyboard interactions apply:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Up and down arrows move the user between the options"),(0,l.yg)("li",{parentName:"ul"},"Enter selects the currently active option")),(0,l.yg)("p",null,"When the user is focused within the Form Pill Group, they can use these keyboard interactions:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Left and right arrow keys move focus within the group."),(0,l.yg)("li",{parentName:"ul"},"If a pill is selectable, spacebar and enter will toggle pill selection."),(0,l.yg)("li",{parentName:"ul"},"If a pill is dismissible, the pill can be removed by pressing the delete or backspace key.")),(0,l.yg)("h2",null,"Examples"),(0,l.yg)("h3",null,"Basic Multiselect Combobox"),(0,l.yg)("p",null,`Use a basic Multiselect Combobox to allow users to select multiple values from a list of
predefined options.`),(0,l.yg)("p",null,"The height of the Combobox field will increase to fit the selection of ",(0,l.yg)("a",{parentName:"p",href:"/components/form-pill-group"},"Form Pills"),`.
Optionally, you may set a max height using the `,(0,l.yg)("inlineCode",{parentName:"p"},"maxHeight"),` prop and if there are more
pills than viewable at max height, users can vertically scroll to view all the selected options.`),(0,l.yg)(F,{scope:{MultiselectCombobox:s.PT,Box:a.az,Text:i.EY},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},C),(0,l.yg)("h3",null,"Multiselect Combobox with add-ons (prefix/suffix text or icons)"),(0,l.yg)("p",null,`Use add-ons to provide users with guidance on formatting their
input and to offer more context about the value a user is entering.`),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"Prefix/suffix text"),` — Text that can be used as a prefix and/or suffix to the value that is entered. Use prefix/suffix to help users format text.`),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"Prefix/suffix icon"),` — Icons can be placed in the same area as the prefix and suffix text. Icons should trigger an action (e.g., clearing a field) or in rare cases, provide further context to what value should be entered to make a field's purpose more immediately visible (e.g., a search icon).`)),(0,l.yg)(F,{scope:{MultiselectCombobox:s.PT,Anchor:n.Mz,Text:i.EY,InformationIcon:m.InformationIcon},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},f),(0,l.yg)("h3",null,"Multiselect Combobox with option groups"),(0,l.yg)("p",null,"Use option groups to create labeled sections of options."),(0,l.yg)("p",null,`Structure your data into an array of objects and use a key on each object as the grouping identifier.
Then, tell the Combobox what you would like to group the items by, by setting `,(0,l.yg)("inlineCode",{parentName:"p"},"groupItemsBy"),` to match
the intended group identifier.`),(0,l.yg)("p",null,"In the example below, we have a list of components and we are grouping them based on their type."),(0,l.yg)(F,{scope:{MultiselectCombobox:s.PT,filter:y()},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},I),(0,l.yg)("h3",null,"Multiselect Combobox with a custom group label"),(0,l.yg)("p",null,"Expanding on the previous example, it's also possible to customize the group label."),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"groupLabelTemplate")," prop accepts a method with a ",(0,l.yg)("inlineCode",{parentName:"p"},"groupName"),` argument. This method should return
valid JSX, which it will render in place of a group label string.`),(0,l.yg)("p",null,"In the example below, we are checking the ",(0,l.yg)("inlineCode",{parentName:"p"},"groupName"),` and rendering an icon next to
it based on the name.`),(0,l.yg)(F,{scope:{MultiselectCombobox:s.PT,MediaObject:p.Ss,MediaFigure:p.pV,MediaBody:p.To,AttachIcon:c.AttachIcon,filter:y()},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},w),(0,l.yg)("h3",null,"Multiselect Combobox with option template"),(0,l.yg)("p",null,"Use the option template to display more complex options in a listbox."),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"optionTemplate")," prop allows you to pass ",(0,l.yg)("inlineCode",{parentName:"p"},"jsx"),` to customize the options. Note that we use native HTML input elements
to build Combobox and these HTML elements don't allow for images, icons, or svgs to be added even with the option template.`),(0,l.yg)(F,{scope:{MultiselectCombobox:s.PT,Box:a.az},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},v),(0,l.yg)("h3",null,"Multiselect Combobox with max height"),(0,l.yg)("p",null,`By default the Multiselect Combobox will grow to fit the content inside it. If you want to limit how much
it resizes vertically, you can provide a `,(0,l.yg)("inlineCode",{parentName:"p"},"maxHeight")," prop."),(0,l.yg)(F,{scope:{MultiselectCombobox:s.PT,Box:a.az,Text:i.EY},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},S),(0,l.yg)("h3",null,"useMultiselectCombobox state hook"),(0,l.yg)(d.Pq,{variant:"warning",marginY:"space70",mdxType:"Callout"},(0,l.yg)(d.v,{as:"h5",mdxType:"CalloutHeading"},"Power user move!"),(0,l.yg)(d.wz,{mdxType:"CalloutText"},"Only use this property if you are a power user. It's very easy to break your implementation and unfortunately the Paste team will not be able to debug this for you. Proceed with extreme caution.")),(0,l.yg)("p",null,`In addition to being a controlled component, the Multiselect Combobox comes with the option
of "hooking" into the internal state by using the state hook originally provided by
`,(0,l.yg)("a",{parentName:"p",href:"https://github.com/downshift-js/downshift/tree/master/src/hooks/useMultipleSelection"},"Downshift"),"."),(0,l.yg)("p",null,"Rather than the state be internal to the component, you can use the ",(0,l.yg)("inlineCode",{parentName:"p"},"useMultiselectCombobox"),`
hook and pass the returned state to `,(0,l.yg)("inlineCode",{parentName:"p"},"MultiselectCombobox")," as the ",(0,l.yg)("inlineCode",{parentName:"p"},"state")," prop."),(0,l.yg)("p",null,`This allows you to destructure certain returned props from the state hook,
including action methods like `,(0,l.yg)("inlineCode",{parentName:"p"},"reset"),"."),(0,l.yg)("p",null,`An example use case of this might be programmatically providing the user a way to
clear or reset the Multiselect Combobox of its previous selections.`),(0,l.yg)("p",null,"It should be noted that when doing so, the ",(0,l.yg)("inlineCode",{parentName:"p"},"state"),` prop takes precident over the
`,(0,l.yg)("a",{parentName:"p",href:"#state-props"},"other properties"),` that affect the state or initial state of the
`,(0,l.yg)("inlineCode",{parentName:"p"},"MultiselectCombobox"),`. They will be ignored in favour of them being provided as
arguments to the `,(0,l.yg)("inlineCode",{parentName:"p"},"useMultiselectCombobox")," hook."),(0,l.yg)("p",null,`For full details on how to use the state hook, and what props to provide it,
follow the `,(0,l.yg)("a",{parentName:"p",href:"/primitives/combobox-primitive#usemultiselectprimitive-control-props"},"Combobox Primitive documentation"),`.
It's the same hook, just renamed.`),(0,l.yg)(F,{scope:{Button:u.$n,useMultiselectCombobox:r.mH,MultiselectCombobox:s.PT,MediaObject:p.Ss,MediaFigure:p.pV,MediaBody:p.To,AttachIcon:c.AttachIcon,Box:a.az,filter:y()},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},N),(0,l.yg)("h2",null,"States"),(0,l.yg)("h3",null,"Disabled Multiselect Combobox"),(0,l.yg)(F,{scope:{MultiselectCombobox:s.PT},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},V),(0,l.yg)("h3",null,"Multiselect Combobox with disabled options"),(0,l.yg)(F,{scope:{MultiselectCombobox:s.PT},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},T),(0,l.yg)("h3",null,"Multiselect Combobox with error"),(0,l.yg)(F,{scope:{MultiselectCombobox:s.PT},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},M),(0,l.yg)("h3",null,"Multiselect Combobox with an empty state"),(0,l.yg)("p",null,"Use an empty state to indicate to a user that their input does not match any value in the list of options."),(0,l.yg)(F,{scope:{MultiselectCombobox:s.PT,Box:a.az,Text:i.EY},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},P),(0,l.yg)("h2",null,"Composition Notes"),(0,l.yg)("p",null,"A Multiselect Combobox is comprised of a label, an input and a listbox."),(0,l.yg)(d.Pq,{variant:"warning",marginY:"space70",mdxType:"Callout"},(0,l.yg)(d.v,{as:"h5",mdxType:"CalloutHeading"},"Combobox and Popover"),(0,l.yg)(d.wz,{mdxType:"CalloutText"},"The Multiselect Combobox listbox is rendered in a ",(0,l.yg)(n.Mz,{href:"https://reakit.io/docs/portal/",showExternal:!0,mdxType:"Anchor"},"Reakit Portal")," to control positioning and maintain accessibility. When Multiselect Combobox is placed in a ",(0,l.yg)(n.Mz,{href:"/components/popover",mdxType:"Anchor"},"Popover")," (which is also a Reakit Portal under the hood), add ",(0,l.yg)(b.R,{mdxType:"InlineCode"},"usePortal=false")," to your Multiselect Combobox to prevent interaction bugs caused by nested portals.")),(0,l.yg)(F,{scope:{Box:a.az,PopoverButton:g.ut,PopoverContainer:g.de,Popover:g.AM,MultiselectCombobox:s.PT},noInline:!0,language:"jsx",showOverflow:!0,mdxType:"LivePreview"},L),(0,l.yg)("h3",null,"Positioning form fields"),(0,l.yg)("p",null,"Stack form fields vertically with ",(0,l.yg)("inlineCode",{parentName:"p"},"$space-80"),` spacing between each field. Avoid placing multiple form fields on the
same horizontal row to help make it easier to scan a page vertically.`),(0,l.yg)("h3",null,"Options in a Combobox"),(0,l.yg)("p",null,`Keep option text concise and simple. Option text will truncate when it’s longer than the width of the container.
Use a safe and reversible option as the default selected value.`),(0,l.yg)("p",null,`Use at least 7 options in a Combobox. If there are less than 7 options or if choosing options requires
more explanation, consider using a Checkbox instead and add Help Text for each option, or give more
explanation through help text. Sort options logically (e.g., alphabetically, by value) or in an order
that’s intuitive to your user.`),(0,l.yg)("h3",null,"Errors"),(0,l.yg)("p",null,"Use help text to provide information to help users avoid errors."),(0,l.yg)("p",null,"Use Help Text to show an inline error text beneath the combobox to explain how to fix an error. For additional guidance on how to compose error messages, refer to the ",(0,l.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,l.yg)("h2",null,"When to use Multiselect Combobox"),(0,l.yg)(h.l,{mdxType:"DoDont"},(0,l.yg)(h.Do,{title:"Do",body:"Use a Multiselect Combobox when there are multiple options for a user to type or select.",mdxType:"Do"}),(0,l.yg)(h.w,{title:"Don't",body:"Don’t use a Multiselect Combobox when a user should only select a single option. Use a Singleselect Combobox instead.",mdxType:"Dont"})),(0,l.yg)(h.l,{mdxType:"DoDont"},(0,l.yg)(h.Do,{title:"Do",body:"Use a Multiselect Combobox when there are at least 7 options for a user to type or select from.",mdxType:"Do"}),(0,l.yg)(h.w,{title:"Don't",body:"Don’t use a Multiselect Combobox if there are less than 7 options in a list for users to select multiple values from. Use a Checkbox Group instead.",mdxType:"Dont"})))}z.isMDXComponent=!0},40615:(e,t,o)=>{"use strict";o.d(t,{A:()=>b});var l=o(72387),n=o(76127),a=o(95669),i=o.n(a),s=o(81278);o(55729);var r=o(10511),u=o(43084),p=o(10732),m=o(62887),c=o(63437),d=o(38992);let g={h1:()=>null},b=({children:e,meta:t,navigationData:o,data:a,mdxHeadings:b,pageHeaderData:{categoryRoute:h,githubUrl:x,storybookUrl:y}})=>{let C=t.title?`${t.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,f=t.description||d.DZ.DESCRIPTION,I=(0,s.useRouter)();return(0,l.FD)(c.T,{navigationData:o,children:[(0,l.FD)(i(),{children:[(0,l.Y)("title",{children:C}),(0,l.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${I.pathname}`}),(0,l.Y)("meta",{name:"description",content:f},"description")]}),(0,l.FD)(r.s,{children:[(0,l.Y)(m.c,{categoryRoute:h,githubUrl:x,storybookUrl:y,data:a}),(0,l.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,l.Y)(p.i,{data:b}),(0,l.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,l.Y)(u.Q,{componentOverrides:t.package?g:{},children:e})})]})]})]})}},50956:(e,t,o)=>{var l=o(34024);e.exports=o(10656)(l)},64305:(e,t,o)=>{var l=o(30147),n=o(83391),a=o(68988),i=o(91544);e.exports=function(e,t){return(i(e)?l:n)(e,a(t,3))}},71132:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/multiselect-combobox",function(){return o(38406)}])},83391:(e,t,o)=>{var l=o(50956);e.exports=function(e,t){var o=[];return l(e,function(e,l,n){t(e,l,n)&&o.push(e)}),o}},83889:(e,t,o)=>{"use strict";o.r(t),o.d(t,{InformationIcon:()=>i});var l=o(36669),n=o(55729),a=o(96316);let i=n.forwardRef(({as:e,display:t,element:o="ICON",size:i,color:s,title:r,decorative:u},p)=>{let m=`InformationIcon-${(0,l.GV)()}`;if(!u&&null==r)throw Error("[InformationIcon]: Missing a title for non-decorative icon.");return n.createElement(a.IconWrapper,{as:e,display:t,element:o,size:i,color:s,ref:p},n.createElement("svg",{role:"img","aria-hidden":u,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":m},r?n.createElement("title",{id:m},r):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 2a8 8 0 110 16 8 8 0 010-16zm0 1.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM10 9a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z"})))});i.displayName="InformationIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,3875,636,6593,8792],()=>e(e.s=71132)),_N_E=e.O()}]);