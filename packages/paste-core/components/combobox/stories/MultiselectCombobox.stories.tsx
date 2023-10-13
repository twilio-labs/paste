import type { Meta, StoryContext, StoryFn } from "@storybook/react";
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Form } from "@twilio-paste/form";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { InformationIcon } from "@twilio-paste/icons/esm/InformationIcon";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/media-object";
import { Modal, ModalBody, ModalHeader, ModalHeading } from "@twilio-paste/modal";
import { Text } from "@twilio-paste/text";
import { useUID } from "@twilio-paste/uid-library";
import filter from "lodash/filter";
import * as React from "react";

import { MultiselectCombobox, useMultiselectCombobox } from "../src";

function createLargeArray<TemplateResult = string & Record<string, string>>(
  template: (index?: number | undefined) => TemplateResult,
): TemplateResult[] {
  // eslint-disable-next-line unicorn/prefer-spread
  return Array.from(new Array(1000), (_empty, index) => template(index));
}

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

function getFilteredItems(inputValue: string): string[] {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

/*
 * Basic
 */
export const MultiselectComboboxBasic = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a Paste Component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
      items={filteredItems}
      onInputValueChange={({ inputValue: newInputValue = "" }) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        // eslint-disable-next-line no-console
        console.log(selectedItems);
      }}
    />
  );
};
MultiselectComboboxBasic.storyName = "Basic";

export const BottomOfScreen = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <>
      <Box height="size50" width="100%" />
      <MultiselectCombobox
        labelText="Choose a Paste Component"
        selectedItemsLabelText="Selected Paste components"
        helpText="Paste components are the building blocks of your product UI."
        placeholder="Search by SID or name"
        items={filteredItems}
        onInputValueChange={({ inputValue: newInputValue = "" }) => {
          setInputValue(newInputValue);
        }}
        onSelectedItemsChange={(selectedItems) => {
          // eslint-disable-next-line no-console
          console.log(selectedItems);
        }}
      />
    </>
  );
};
BottomOfScreen.storyName = "Bottom of screen";
BottomOfScreen.parameters = {
  chromatic: { disableSnapshot: true },
};

/*
 * Basic - Inverse
 */
export const MultiselectComboboxInverse = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <MultiselectCombobox
        variant="inverse"
        labelText="Choose a Paste Component"
        selectedItemsLabelText="Selected Paste components"
        helpText="Paste components are the building blocks of your product UI."
        items={filteredItems}
        onInputValueChange={({ inputValue: newInputValue = "" }) => {
          setInputValue(newInputValue);
        }}
        onSelectedItemsChange={(selectedItems) => {
          // eslint-disable-next-line no-console
          console.log(selectedItems);
        }}
      />
    </Box>
  );
};
MultiselectComboboxInverse.storyName = "variant Inverse";

/*
 * Basic - Disabled
 */
export const MultiselectComboboxDisabled = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      disabled
      labelText="Choose a Paste Component"
      initialSelectedItems={filteredItems.slice(0, 2)}
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
      items={filteredItems}
      onInputValueChange={({ inputValue: newInputValue = "" }) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        // eslint-disable-next-line no-console
        console.log(selectedItems);
      }}
    />
  );
};
MultiselectComboboxDisabled.storyName = "Basic - Disabled";

/*
 * Basic - Disabled, Inverse, Required
 */
export const MultiselectComboboxDisabledInverseRequired = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <MultiselectCombobox
        disabled
        variant="inverse"
        required
        labelText="Choose a Paste Component"
        selectedItemsLabelText="Selected Paste components"
        helpText="Paste components are the building blocks of your product UI."
        items={filteredItems}
        onInputValueChange={({ inputValue: newInputValue = "" }) => {
          setInputValue(newInputValue);
        }}
        onSelectedItemsChange={(selectedItems) => {
          // eslint-disable-next-line no-console
          console.log(selectedItems);
        }}
      />
    </Box>
  );
};
MultiselectComboboxDisabledInverseRequired.storyName = "Basic - Disabled, Inverse, Required";

/*
 * Basic - Error
 */
export const MultiselectComboboxError = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      hasError
      labelText="Choose a Paste Component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
      items={filteredItems}
      initialSelectedItems={["Alert", "Anchor"]}
      initialIsOpen
      onInputValueChange={({ inputValue: newInputValue = "" }) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        // eslint-disable-next-line no-console
        console.log(selectedItems);
      }}
    />
  );
};
MultiselectComboboxError.storyName = "Basic - Error";

/*
 * Basic - Required
 */
export const MultiselectComboboxRequired = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-console
        console.log("The form was submit");
      }}
    >
      <MultiselectCombobox
        required
        labelText="Choose a Paste Component"
        selectedItemsLabelText="Selected Paste components"
        helpText="Paste components are the building blocks of your product UI."
        items={filteredItems}
        initialSelectedItems={["Alert", "Anchor"]}
        onInputValueChange={({ inputValue: newInputValue = "" }) => {
          setInputValue(newInputValue);
        }}
        onSelectedItemsChange={(selectedItems) => {
          // eslint-disable-next-line no-console
          console.log(selectedItems);
        }}
      />
    </Form>
  );
};
MultiselectComboboxRequired.storyName = "Basic - Required";

/*
 * initialSelectedItems
 */
export const MultiselectComboboxInitialSelectedItems = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a Paste Component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
      items={filteredItems}
      initialSelectedItems={["Alert", "Anchor"]}
      onInputValueChange={({ inputValue: newInputValue = "" }) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        // eslint-disable-next-line no-console
        console.log(selectedItems);
      }}
    />
  );
};
MultiselectComboboxInitialSelectedItems.storyName = "with initialSelectedItems";

/*
 * insertBefore and insertAfter
 */
type Book = {
  author: string;
  title: string;
};

const books: Book[] = createLargeArray((index) => ({
  title: `Book ${index}`,
  author: `Author ${index}`,
}));

function getFilteredBooks(inputValue: string): Book[] {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return books.filter(function filterBook(book) {
    return (
      book.title.toLowerCase().includes(lowerCasedInputValue) ||
      book.author.toLowerCase().includes(lowerCasedInputValue)
    );
  });
}

export const MultiselectComboboxBeforeAfter = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredBooks(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a book"
      selectedItemsLabelText="Selected books:"
      helpText="Reading books can be good for your mental health."
      items={filteredItems}
      itemToString={(item: Book) => (item ? `${item.title} - ${item.author}` : "")}
      initialSelectedItems={filteredItems.slice(20, 50)}
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
      optionTemplate={({ title, author }: Book) => (
        <Box as="span" display="flex" flexDirection="column">
          <Box as="span">{title}</Box>
          <Box as="span" color="colorTextWeak">
            {author}
          </Box>
        </Box>
      )}
      onInputValueChange={({ inputValue: newInputValue = "" }) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        // eslint-disable-next-line no-console
        console.log(selectedItems);
      }}
    />
  );
};
MultiselectComboboxBeforeAfter.storyName = "with insertBefore and insertAfter";

/*
 * maxHeight
 */
export const MultiselectComboboxMaxHeight = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredBooks(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a book"
      selectedItemsLabelText="Selected books:"
      helpText="Reading books can be good for your mental health."
      items={filteredItems}
      itemToString={(item: Book) => (item ? `${item.title} - ${item.author}` : "")}
      initialSelectedItems={filteredItems.slice(20, 80)}
      maxHeight="100px"
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
      optionTemplate={({ title, author }: Book) => (
        <Box as="span" display="flex" flexDirection="column">
          <Box as="span">{title}</Box>
          <Box as="span" color="colorTextWeak">
            {author}
          </Box>
        </Box>
      )}
      onInputValueChange={({ inputValue: newInputValue = "" }) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        // eslint-disable-next-line no-console
        console.log(selectedItems);
      }}
    />
  );
};
MultiselectComboboxMaxHeight.storyName = "with maxHeight";

/*
 * optionTemplate
 */
export const MultiselectComboboxOptionTemplate = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredBooks(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a book"
      selectedItemsLabelText="Selected books:"
      helpText="Reading books can be good for your mental health."
      items={filteredItems}
      itemToString={(item: Book) => (item ? `${item.title} - ${item.author}` : "")}
      optionTemplate={({ title, author }: Book) => (
        <Box as="span" display="flex" flexDirection="column">
          <Box as="span">{title}</Box>
          <Box as="span" color="colorTextWeak">
            {author}
          </Box>
        </Box>
      )}
      onInputValueChange={({ inputValue: newInputValue = "" }) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        // eslint-disable-next-line no-console
        console.log(selectedItems);
      }}
    />
  );
};
MultiselectComboboxOptionTemplate.storyName = "with optionTemplate";

/*
 * optionTemplate - disabled options
 */
export const MultiselectComboboxOptionTemplatedisabled = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredBooks(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a book"
      selectedItemsLabelText="Selected books:"
      helpText="Reading books can be good for your mental health."
      items={filteredItems}
      itemToString={(item: Book) => (item ? `${item.title} - ${item.author}` : "")}
      optionTemplate={({ title, author }: Book) => (
        <Box as="span" display="flex" flexDirection="column">
          <Box as="span">{title}</Box>
          <Box as="span" color="colorTextWeak">
            {author}
          </Box>
        </Box>
      )}
      disabledItems={filteredItems.slice(2, 8)}
      initialIsOpen
      onInputValueChange={({ inputValue: newInputValue = "" }) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        // eslint-disable-next-line no-console
        console.log(selectedItems);
      }}
    />
  );
};
MultiselectComboboxOptionTemplatedisabled.storyName = "with optionTemplate - disabled options";

/*
 * groupedItemsBy
 */
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

function getFilteredGroupedItems(inputValue: string): GroupedItem[] {
  const lowerCasedInputValue = inputValue.toLowerCase();
  return filter(groupedItems, (item: GroupedItem) => item.label.toLowerCase().includes(lowerCasedInputValue));
}

export const MultiselectComboboxOptionGroups = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredGroupedItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      groupItemsBy="group"
      items={filteredItems}
      itemToString={(item: GroupedItem) => (item ? item.label : "")}
      onInputValueChange={({ inputValue: newInputValue = "" }) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        // eslint-disable-next-line no-console
        console.log(selectedItems);
      }}
      labelText="Choose a Paste Component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
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
    />
  );
};

MultiselectComboboxOptionGroups.storyName = "with groups";

const SampleEmptyState: React.FC = () => (
  <>
    <Box size="size10" backgroundColor="colorBackgroundAvailable" borderRadius="borderRadius20" />
    <Text as="span" fontStyle="italic">
      No results found
    </Text>
  </>
);

export const MultiselectComboboxEmptyState = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("test123");
  const filteredItems = React.useMemo(() => getFilteredGroupedItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      groupItemsBy="group"
      items={filteredItems}
      emptyState={SampleEmptyState}
      inputValue={inputValue}
      itemToString={(item: GroupedItem) => (item ? item.label : "")}
      onInputValueChange={({ inputValue: newInputValue = "" }) => {
        setInputValue(newInputValue);
      }}
      onSelectedItemsChange={(selectedItems) => {
        // eslint-disable-next-line no-console
        console.log(selectedItems);
      }}
      labelText="Choose a Paste Component"
      selectedItemsLabelText="Selected Paste components"
      helpText="Paste components are the building blocks of your product UI."
      initialIsOpen
      optionTemplate={(item: GroupedItem) => {
        return <div>{item.label}</div>;
      }}
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
    />
  );
};

MultiselectComboboxEmptyState.storyName = "with empty state";

export const MultiselectComboboxStateHook = (): React.ReactNode => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredGroupedItems(inputValue), [inputValue]);

  const onSelectedItemsChange = React.useCallback((selectedItems) => {
    // eslint-disable-next-line no-console
    console.log(selectedItems);
  }, []);

  const state = useMultiselectCombobox<any>({
    initialSelectedItems: filteredItems.slice(0, 2),
    onSelectedItemsChange,
  });

  return (
    <>
      <Button variant="primary" onClick={() => state.setSelectedItems([])}>
        Clear
      </Button>
      <MultiselectCombobox
        state={state}
        groupItemsBy="group"
        items={filteredItems}
        emptyState={SampleEmptyState}
        inputValue={inputValue}
        itemToString={(item: GroupedItem) => (item ? item.label : "")}
        onInputValueChange={({ inputValue: newInputValue = "" }) => {
          setInputValue(newInputValue);
        }}
        onSelectedItemsChange={onSelectedItemsChange}
        labelText="Choose a Paste Component"
        selectedItemsLabelText="Selected Paste components"
        helpText="Paste components are the building blocks of your product UI."
        initialIsOpen
        optionTemplate={(item: GroupedItem) => {
          return <div>{item.label}</div>;
        }}
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
      />
    </>
  );
};

MultiselectComboboxStateHook.storyName = "with state hook";

export const MultiselectComboboxInModal: StoryFn = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(true);
  const handleOpen = (): void => setModalIsOpen(true);
  const handleClose = (): void => setModalIsOpen(false);
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);
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
          <MultiselectCombobox
            labelText="Choose a Paste Component"
            selectedItemsLabelText="Selected Paste components"
            helpText="Paste components are the building blocks of your product UI."
            items={filteredItems}
            onInputValueChange={({ inputValue: newInputValue = "" }) => {
              setInputValue(newInputValue);
            }}
            onSelectedItemsChange={(selectedItems) => {
              // eslint-disable-next-line no-console
              console.log(selectedItems);
            }}
            initialIsOpen
          />
        </ModalBody>
      </Modal>
    </>
  );
};

MultiselectComboboxInModal.parameters = {
  a11y: {
    // redundant flaky test
    disable: true,
  },
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Combobox/MultiselectCombobox",
  // wraps each story in a div that has a fixed height. This makes it so chromatic takes a large enough screenshot to see the listbox.
  decorators: [
    (Story: StoryFn, context: StoryContext): React.ReactNode => (
      <Box height="size80" width="size80">
        {Story(context.args, context)}
      </Box>
    ),
  ],
} as Meta;
