import type { Meta, StoryContext, StoryFn } from "@storybook/react";
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { InformationIcon } from "@twilio-paste/icons/esm/InformationIcon";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { Label } from "@twilio-paste/label";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/media-object";
import { Modal, ModalBody, ModalHeader, ModalHeading } from "@twilio-paste/modal";
import { Option, Select } from "@twilio-paste/select";
import { Text } from "@twilio-paste/text";
import { useUID } from "@twilio-paste/uid-library";
import _ from "lodash";
import * as React from "react";

import { Combobox, useCombobox } from "../src";

const items = [
  "Alert",
  "Anchor",
  "Button",
  "Card",
  "Heading",
  "A component with a really really really really really really really really long name",
  "List",
  "Modal",
  "Paragraph",
];

function createLargeArray<TemplateResult = string & Record<string, string>>(
  template: (index?: number | undefined) => TemplateResult,
): TemplateResult[] {
  // eslint-disable-next-line unicorn/prefer-spread
  return Array.from(new Array(1000), (_empty, index) => template(index));
}

interface IconItems {
  label: string;
  iconRight?: boolean;
  iconLeft?: undefined;
}
const iconItems = [
  { label: "Alert", iconRight: true },
  { label: "Anchor" },
  { label: "Button", iconLeft: true },
  { label: "Card", iconRight: true },
  { label: "Heading" },
  { label: "List", iconRight: true },
  { label: "Modal", iconLeft: true },
  { label: "Paragraph", iconRight: true },
];

interface ObjectItem {
  code: string;
  label: string;
  phone: string;
}
const objectItems = [
  { code: "AD", label: "Andorra", phone: "376" },
  { code: "AE", label: "United Arab Emirates", phone: "971" },
  { code: "AF", label: "Afghanistan", phone: "93" },
  { code: "AG", label: "Antigua and Barbuda", phone: "1-268" },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "44" },
  { code: "BS", label: "Bahamas", phone: "43" },
  { code: "BH", label: "Bahrain", phone: "48" },
  { code: "BD", label: "Bangladesh", phone: "50" },
  { code: "BB", label: "Barbados", phone: "52" },
  { code: "BY", label: "Belarus", phone: "112" },
  { code: "BE", label: "Belgium", phone: "56" },
  { code: "BZ", label: "Belize", phone: "84" },
  { code: "BJ", label: "Benin", phone: "204" },
  { code: "BM", label: "Bermuda", phone: "60" },
  { code: "BT", label: "Bhutan", phone: "64" },
  { code: "BO", label: "Bolivia", phone: "68" },
  { code: "BW", label: "Botswana", phone: "72" },
  { code: "BR", label: "Brazil", phone: "76" },
  { code: "KH", label: "Cambodia", phone: "116" },
  { code: "CA", label: "Canada", phone: "124" },
];

interface GroupedItem {
  group?: string;
  label: string;
}
const groupedItems = [
  { group: "Components", label: "Alert" },
  { group: "Components", label: "Anchor" },
  { group: "Components", label: "Button" },
  { group: "Components", label: "Card" },
  { group: "Components", label: "Heading" },
  { group: "Components", label: "List" },
  { group: "Components", label: "Modal" },
  { group: "Components", label: "Paragraph" },
  { group: "Primitives", label: "Box" },
  { group: "Primitives", label: "Text" },
  { group: "Primitives", label: "Non-modal dialog" },
  { group: "Layout", label: "Grid" },
  { label: "Design Tokens" },
];

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Combobox/Combobox",
  component: Combobox,
  // wraps each story in a div that has a fixed height. This makes it so chromatic takes a large enough screenshot to see the listbox.
  decorators: [
    (Story: StoryFn, context: StoryContext): React.ReactNode => (
      <Box height="size80" width="size80" element="HELLO">
        {Story(context.args, context)}
      </Box>
    ),
  ],
} as Meta;

export const DefaultCombobox: StoryFn = () => {
  return (
    <Combobox
      items={iconItems}
      labelText="Choose a component:"
      helpText="This is the help text"
      optionTemplate={(item: IconItems) => (
        <MediaObject verticalAlign="center">
          {item.iconLeft ? (
            <MediaFigure spacing="space20">
              <InformationIcon decorative={false} size="sizeIcon20" title="information" />
            </MediaFigure>
          ) : null}

          <MediaBody>{item.label}</MediaBody>
          {item.iconRight ? (
            <MediaFigure spacing="space20">
              <InformationIcon decorative={false} size="sizeIcon20" title="information" />
            </MediaFigure>
          ) : null}
        </MediaObject>
      )}
      itemToString={(item: IconItems) => (item ? String(item.label) : "")}
    />
  );
};

DefaultCombobox.storyName = "Combobox";

export const BottomOfScreen: StoryFn = () => {
  return (
    <>
      <Box height="size50" width="100%" />
      <Combobox
        items={iconItems}
        labelText="Choose a component:"
        helpText="This is the help text"
        optionTemplate={(item: IconItems) => (
          <MediaObject verticalAlign="center">
            {item.iconLeft ? (
              <MediaFigure spacing="space20">
                <InformationIcon decorative={false} size="sizeIcon20" title="information" />
              </MediaFigure>
            ) : null}

            <MediaBody>{item.label}</MediaBody>
            {item.iconRight ? (
              <MediaFigure spacing="space20">
                <InformationIcon decorative={false} size="sizeIcon20" title="information" />
              </MediaFigure>
            ) : null}
          </MediaObject>
        )}
        itemToString={(item: IconItems) => (item ? String(item.label) : "")}
      />
    </>
  );
};
BottomOfScreen.storyName = "Bottom of screen";
BottomOfScreen.parameters = {
  chromatic: { disableSnapshot: true },
};

const ItemToString = ({ name }: { name: string }): string => name;

export const VirtualizedCombobox: StoryFn = () => {
  const itemsForVirtualCombobox = React.useMemo(() => createLargeArray((index) => (index as number).toString()), []);

  return (
    <Box width="20%">
      <Combobox
        initialIsOpen
        items={itemsForVirtualCombobox}
        labelText="Select a virtualized item"
        helpText="This large list is virtualized"
      />
    </Box>
  );
};

VirtualizedCombobox.storyName = "Combobox - Virtualized without option template";

export const VirtualizedCombobox1: StoryFn = () => {
  const itemsForVirtualCombobox = React.useMemo(
    () =>
      createLargeArray((index) => ({
        name: `Item ${index as number}`,
        subtext: "Virtualized combobox from Twilio Paste",
      })),
    [],
  );

  return (
    <Box width="20%">
      <Combobox
        initialIsOpen
        itemToString={ItemToString}
        items={itemsForVirtualCombobox}
        optionTemplate={({ name, subtext }: { name: string; subtext: string }): string => `${name} - ${subtext}`}
        labelText="Select a virtualized item"
        helpText="This large list is virtualized"
      />
    </Box>
  );
};

VirtualizedCombobox1.storyName = "Combobox - Virtualized with string option template";

export const VirtualizedCombobox2: StoryFn = () => {
  const itemsForVirtualCombobox = React.useMemo(
    () =>
      createLargeArray((index) => ({
        name: `Item ${index as number}`,
        subtext: "Virtualized combobox from Twilio Paste",
      })),
    [],
  );
  return (
    <Box width="20%">
      <Combobox
        initialIsOpen
        items={itemsForVirtualCombobox}
        itemToString={ItemToString}
        optionTemplate={({ name, subtext }) => (
          <Box as="span" display="flex" flexDirection="column">
            <Box as="span">{name}</Box>
            <Box as="span" color="colorTextWeak">
              {subtext}
            </Box>
          </Box>
        )}
        labelText="Select a virtualized item"
        helpText="This large list is virtualized"
      />
    </Box>
  );
};

VirtualizedCombobox2.storyName = "Combobox - Virtualized with React child option template";

export const ComboboxInverse: StoryFn = () => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={iconItems}
        labelText="Choose a component:"
        helpText="This is the help text"
        optionTemplate={(item) => (
          <MediaObject verticalAlign="center">
            {item.iconLeft ? (
              <MediaFigure spacing="space20">
                <AttachIcon decorative={false} size="sizeIcon20" title="product" />
              </MediaFigure>
            ) : null}

            <MediaBody>{item.label}</MediaBody>
            {item.iconRight ? (
              <MediaFigure spacing="space20">
                <AttachIcon decorative={false} size="sizeIcon20" title="product 2" />
              </MediaFigure>
            ) : null}
          </MediaObject>
        )}
        itemToString={(item: IconItems) => (item ? String(item.label) : "")}
        variant="inverse"
      />
    </Box>
  );
};

ComboboxInverse.storyName = "Combobox - Inverse";

export const ComboboxAutocomplete: StoryFn = () => {
  const [inputItems, setInputItems] = React.useState(items);
  return (
    <Combobox
      autocomplete
      items={inputItems}
      onInputValueChange={({ inputValue }) => {
        if (inputValue !== undefined) {
          setInputItems(items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase())));
        }
      }}
      helpText="This is the help text"
      labelText="Choose a component:"
    />
  );
};

ComboboxAutocomplete.storyName = "Combobox - Autocomplete";

export const ComboboxHiddenLabel: StoryFn = () => {
  return <Combobox items={items} labelText="Choose a component:" hideVisibleLabel helpText="This is the help text" />;
};

ComboboxHiddenLabel.storyName = "Combobox - Non-visble label";

export const ComboboxRequired: StoryFn = () => {
  return <Combobox items={items} labelText="Choose a component:" helpText="This is the help text" required />;
};

ComboboxRequired.storyName = "Combobox - Required";

export const ComboboxRequiredInverse: StoryFn = () => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={items}
        labelText="Choose a component:"
        helpText="This is the help text"
        required
        variant="inverse"
      />
    </Box>
  );
};

ComboboxRequiredInverse.storyName = "Combobox - Required inverse";

export const ComboboxError: StoryFn = () => {
  return <Combobox items={items} labelText="Choose a component:" helpText="This is the help text" hasError />;
};

ComboboxError.storyName = "Combobox - Error";

export const ComboboxErrorInverse: StoryFn = () => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={items}
        labelText="Choose a component:"
        helpText="This is the help text"
        hasError
        variant="inverse"
      />
    </Box>
  );
};

ComboboxErrorInverse.storyName = "Combobox - Error inverse";

export const ComboboxDisabled: StoryFn = () => {
  return (
    <Combobox
      items={items}
      labelText="Choose a component:"
      helpText="This is the help text"
      initialSelectedItem={items[2]}
      disabled
    />
  );
};

ComboboxDisabled.storyName = "Combobox - Disabled";

export const ComboboxDisabledItems: StoryFn = () => {
  return (
    <Combobox
      items={items}
      labelText="Choose a component:"
      helpText="This is the help text"
      initialSelectedItem={items[2]}
      disabledItems={[items[1]]}
    />
  );
};

ComboboxDisabledItems.storyName = "Combobox - Disabled Items";

export const ComboboxDisabledInverse: StoryFn = () => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={items}
        labelText="Choose a component:"
        helpText="This is the help text"
        initialSelectedItem={items[2]}
        disabled
        variant="inverse"
      />
    </Box>
  );
};

ComboboxDisabledInverse.storyName = "Combobox - Disabled inverse";

export const ComboboxInsertBeforeAndAfter: StoryFn = () => {
  return (
    <Combobox
      items={items}
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
      labelText="Choose a component:"
      helpText="This is the help text"
    />
  );
};

ComboboxInsertBeforeAndAfter.storyName = "Combobox - Insert before and after";

export const ComboboxDisabledInsertBeforeAndAfter: StoryFn = () => {
  return (
    <Combobox
      items={items}
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
      labelText="Choose a component:"
      helpText="This is the help text"
      disabled
    />
  );
};

ComboboxDisabledInsertBeforeAndAfter.storyName = "Combobox - Disabled insert before and after";

export const ComboboxInsertBeforeAndAfterInverse: StoryFn = () => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={items}
        insertBefore={
          <Text as="span" color="colorTextInverseWeak" lineHeight="lineHeight20" fontWeight="fontWeightSemibold">
            $10.99
          </Text>
        }
        insertAfter={
          <Anchor href="#" display="flex">
            <InformationIcon color="colorTextInverse" decorative={false} size="sizeIcon20" title="Get more info" />
          </Anchor>
        }
        labelText="Choose a component:"
        helpText="This is the help text"
        variant="inverse"
      />
    </Box>
  );
};

ComboboxInsertBeforeAndAfterInverse.storyName = "Combobox - Insert before and after inverse";

export const ComboboxDisabledInsertBeforeAndAfterInverse: StoryFn = () => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={items}
        insertBefore={
          <Text as="span" color="colorTextInverseWeak" lineHeight="lineHeight20" fontWeight="fontWeightSemibold">
            $10.99
          </Text>
        }
        insertAfter={
          <Anchor href="#" display="flex">
            <InformationIcon color="colorTextInverse" decorative={false} size="sizeIcon20" title="Get more info" />
          </Anchor>
        }
        labelText="Choose a component:"
        helpText="This is the help text"
        variant="inverse"
        disabled
      />
    </Box>
  );
};

ComboboxDisabledInsertBeforeAndAfterInverse.storyName = "Combobox - Disabled insert before and after inverse";

export const ComboboxObject: StoryFn = () => {
  const [inputItems, setInputItems] = React.useState(objectItems);
  return (
    <Combobox
      autocomplete
      items={inputItems}
      labelText="Choose a country:"
      helpText="This is the help text"
      optionTemplate={(item: ObjectItem) => (
        <div>
          {item.code} | {item.label} | {item.phone}
        </div>
      )}
      onInputValueChange={({ inputValue }) => {
        if (inputValue !== undefined) {
          setInputItems(
            _.filter(objectItems, (item: ObjectItem) => item.label.toLowerCase().startsWith(inputValue.toLowerCase())),
          );
        }
      }}
      itemToString={(item: ObjectItem) => (item ? item.label : "")}
      disabledItems={objectItems.slice(2, 5)}
    />
  );
};

ComboboxObject.storyName = "Combobox - Object";

export const ComboboxOverflowLongValue: StoryFn = () => {
  const [inputItems, setInputItems] = React.useState(items);
  return (
    <Box maxWidth="size40">
      <Combobox
        items={inputItems}
        helpText="This is the help text"
        labelText="Choose a component:"
        initialSelectedItem={inputItems[5]}
        onInputValueChange={({ inputValue }) => {
          if (inputValue !== undefined) {
            setInputItems(items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase())));
          }
        }}
        optionTemplate={(item: ObjectItem) => <>{item}</>}
      />
    </Box>
  );
};

ComboboxOverflowLongValue.storyName = "Combobox - overflow long value";

export const ComboboxControlled: StoryFn = () => {
  const [value, setValue] = React.useState("United Arab Emirates");
  const [selectedItem, setSelectedItem] = React.useState({ code: "AE", label: "United Arab Emirates", phone: "971" });
  const [inputItems, setInputItems] = React.useState(objectItems);
  return (
    <>
      <Box paddingBottom="space70">
        Input value state: {JSON.stringify(value)}
        <br />
        Selected item state: {JSON.stringify(selectedItem)}
      </Box>

      <Combobox
        autocomplete
        items={inputItems}
        labelText="Choose a country:"
        helpText="This is the help text"
        optionTemplate={(item: ObjectItem) => {
          return (
            <Box>
              {item.code} | {item.label} | {item.phone}{" "}
              {item && selectedItem && item.label === selectedItem.label ? "✅" : null}
            </Box>
          );
        }}
        onInputValueChange={({ inputValue }) => {
          if (inputValue !== undefined) {
            setInputItems(
              _.filter(objectItems, (item: ObjectItem) =>
                item.label.toLowerCase().startsWith(inputValue.toLowerCase()),
              ),
            );
            setValue(inputValue);
          }
        }}
        itemToString={(item: ObjectItem) => (item ? item.label : "")}
        selectedItem={selectedItem}
        onSelectedItemChange={(changes) => {
          setSelectedItem(changes.selectedItem);
        }}
        inputValue={value}
      />
    </>
  );
};

ComboboxControlled.storyName = "Combobox - Controlled";

export const ComboboxControlledUsingState: StoryFn = () => {
  const [value, setValue] = React.useState("United Arab Emirates");
  const [selectedItem, setSelectedItem] = React.useState<ObjectItem>({
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  } as ObjectItem);
  const [inputItems, setInputItems] = React.useState<ObjectItem[] | never[]>(objectItems as ObjectItem[]);
  const { reset, ...state } = useCombobox<ObjectItem>({
    initialInputValue: value,
    items: inputItems,
    itemToString: (item) => (item ? item.label : ""),
    onSelectedItemChange: (changes) => {
      if (changes.selectedItem != null) {
        setSelectedItem(changes.selectedItem);
      }
    },
    onInputValueChange: ({ inputValue }) => {
      if (inputValue !== undefined) {
        setInputItems(
          _.filter(objectItems, (item: ObjectItem) => item.label.toLowerCase().startsWith(inputValue.toLowerCase())),
        );
        setValue(inputValue);
      }
    },
    initialSelectedItem: selectedItem,
  });
  return (
    <>
      <Box paddingBottom="space70">
        Input value state: {JSON.stringify(value)}
        <br />
        Selected item state: {JSON.stringify(selectedItem)}
      </Box>
      <Combobox
        state={{ ...state, reset }}
        items={inputItems}
        autocomplete
        itemToString={(item) => (item ? item.label : "")}
        labelText="Choose a country:"
        helpText="This is the help text"
        optionTemplate={(item: ObjectItem) => (
          <Box>
            {item.code} | {item.label} | {item.phone}{" "}
            {item && selectedItem && item.label === selectedItem.label ? "✅" : null}
          </Box>
        )}
        insertAfter={
          <Button
            variant="link"
            size="reset"
            onClick={() => {
              setValue("");
              setSelectedItem({} as ObjectItem);
              reset();
            }}
          >
            {value !== "" ? (
              <CloseIcon decorative={false} title="Clear" />
            ) : (
              <SearchIcon decorative={false} title="Search" />
            )}
          </Button>
        }
      />
    </>
  );
};

ComboboxControlledUsingState.storyName = "Combobox - Controlled using state";

export const ComboboxOpen: StoryFn = () => {
  return (
    <Combobox
      items={objectItems}
      labelText="Choose a country:"
      initialIsOpen
      optionTemplate={(item: ObjectItem) => <div>{item.label}</div>}
      itemToString={(item: ObjectItem) => (item ? item.label : "")}
    />
  );
};

ComboboxOpen.storyName = "Combobox - Open";

export const ComboboxOptionGroups: StoryFn = () => {
  return (
    <Combobox
      groupItemsBy="group"
      items={groupedItems}
      labelText="Choose a component:"
      helpText="This is group"
      optionTemplate={(item: GroupedItem) => <div>{item.label}</div>}
      itemToString={(item: GroupedItem) => (item ? item.label : "")}
    />
  );
};

ComboboxOptionGroups.storyName = "Combobox - Option groups";

export const ComboboxOptionGroupsOpen: StoryFn = () => {
  return (
    <Combobox
      groupItemsBy="group"
      items={groupedItems}
      labelText="Choose a component:"
      helpText="This is group"
      initialIsOpen
      optionTemplate={(item: GroupedItem) => <div>{item.label}</div>}
      groupLabelTemplate={(groupName: string) => {
        if (groupName === "Components") {
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
      itemToString={(item: GroupedItem) => (item ? item.label : "")}
    />
  );
};

ComboboxOptionGroupsOpen.storyName = "Combobox - Option groups open";

export const ComboboxOptionGroupsAutocomplete: StoryFn = () => {
  const [inputItems, setInputItems] = React.useState(groupedItems);
  return (
    <Combobox
      autocomplete
      groupItemsBy="group"
      items={inputItems}
      labelText="Choose a component:"
      helpText="This is the help text"
      optionTemplate={(item: GroupedItem) => <div>{item.label}</div>}
      onInputValueChange={({ inputValue }) => {
        if (inputValue !== undefined) {
          setInputItems(
            _.filter(groupedItems, (item: GroupedItem) =>
              item.label.toLowerCase().startsWith(inputValue.toLowerCase()),
            ),
          );
        }
      }}
      itemToString={(item: GroupedItem) => (item ? item.label : "")}
    />
  );
};

ComboboxOptionGroupsAutocomplete.storyName = "Combobox - Option groups autocomplete";

export const ComboboxListboxZIndex: StoryFn = () => {
  const [selectValue, setSelectValue] = React.useState("");
  const selectID = useUID();
  return (
    <>
      <Box marginBottom="space50">
        <Combobox
          items={iconItems}
          labelText="Choose a component:"
          helpText="This is the help text"
          optionTemplate={(item: IconItems) => (
            <MediaObject verticalAlign="center">
              {item.iconLeft ? (
                <MediaFigure spacing="space20">
                  <InformationIcon decorative={false} size="sizeIcon20" title="information" />
                </MediaFigure>
              ) : null}

              <MediaBody>{item.label}</MediaBody>
              {item.iconRight ? (
                <MediaFigure spacing="space20">
                  <InformationIcon decorative={false} size="sizeIcon20" title="information" />
                </MediaFigure>
              ) : null}
            </MediaObject>
          )}
          itemToString={(item: IconItems) => (item ? String(item.label) : "")}
          initialIsOpen
        />
      </Box>
      <Box marginBottom="space50">
        <Label htmlFor={selectID}>Text input</Label>
        <Select id={selectID} onChange={(e) => setSelectValue(e.currentTarget.value)} value={selectValue}>
          <Option value="">Select an option</Option>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Box>
    </>
  );
};

ComboboxListboxZIndex.storyName = "Combobox - Listbox zIndex";

const SampleEmptyState: React.FC = () => (
  <>
    <Box size="size10" backgroundColor="colorBackgroundAvailable" borderRadius="borderRadius20" />
    <Text as="span" fontStyle="italic">
      No results found
    </Text>
  </>
);

export const ComboboxEmptyState: StoryFn = () => {
  const [inputItems, setInputItems] = React.useState<string[]>([]);

  return (
    <Combobox
      autocomplete
      items={inputItems}
      inputValue="test123"
      onInputValueChange={({ inputValue }) => {
        if (inputValue !== undefined) {
          setInputItems(items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase())));
        }
      }}
      emptyState={SampleEmptyState}
      labelText="Choose a component:"
      helpText="This is the help text"
      initialIsOpen
    />
  );
};

ComboboxEmptyState.storyName = "Combobox - EmptyState";

export const ComboboxInModal: StoryFn = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(true);
  const handleOpen = (): void => setModalIsOpen(true);
  const handleClose = (): void => setModalIsOpen(false);
  const modalHeadingId = useUID();

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal ariaLabelledby={modalHeadingId} isOpen={modalIsOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h2" id={modalHeadingId}>
            Example combobox
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Combobox
            initialIsOpen
            items={iconItems}
            labelText="Choose a component:"
            helpText="This is the help text"
            optionTemplate={(item: IconItems) => (
              <MediaObject verticalAlign="center">
                {item.iconLeft ? (
                  <MediaFigure spacing="space20">
                    <InformationIcon decorative={false} size="sizeIcon20" title="information" />
                  </MediaFigure>
                ) : null}

                <MediaBody>{item.label}</MediaBody>
                {item.iconRight ? (
                  <MediaFigure spacing="space20">
                    <InformationIcon decorative={false} size="sizeIcon20" title="information" />
                  </MediaFigure>
                ) : null}
              </MediaObject>
            )}
            itemToString={(item: IconItems) => (item ? String(item.label) : "")}
          />
        </ModalBody>
      </Modal>
    </>
  );
};
ComboboxInModal.parameters = {
  // a11y test for modals is not working
  a11y: {
    disable: true,
  },
};

export const ComboboxErrorNarrowContainer: StoryFn = () => {
  return (
    <Box maxWidth="150px">
      <Combobox items={items} labelText="Choose a component:" helpText="This is the help text" hasError />
    </Box>
  );
};

ComboboxErrorNarrowContainer.storyName = "Combobox - Error narrow container";
