import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Popover, PopoverButton, PopoverContainer } from "@twilio-paste/popover";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { ButtonGroup } from "../src";
import type { ButtonGroupProps } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Button Group",
  component: ButtonGroup,
};

type ButtonGroupStoryProps = Partial<Omit<ButtonGroupProps, "children">>;

export const Unattached: StoryFn<ButtonGroupStoryProps> = (props) => (
  <ButtonGroup aria-label="A decisive group of buttons" {...props}>
    <Button variant="secondary">Yes</Button>
    <Button variant="secondary">No</Button>
    <Button variant="secondary">Maybe</Button>
  </ButtonGroup>
);

export const Attached: StoryFn = () => (
  <ButtonGroup attached aria-label="A decisive group of buttons">
    <Button variant="secondary">Yes</Button>
    <Button variant="secondary">No</Button>
    <Button variant="secondary">Maybe</Button>
  </ButtonGroup>
);

export const FewButtons: StoryFn = () => (
  <ButtonGroup attached aria-label="A decisive group of buttons">
    <Button variant="secondary">Yes</Button>
    <Button variant="secondary">No</Button>
  </ButtonGroup>
);

export const ManyButtons: StoryFn = () => (
  <Box display="flex" flexDirection="column" rowGap="space60" maxWidth="size60" borderStyle="solid">
    <ButtonGroup attached aria-label="An alphabetical group of buttons">
      {[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter) => (
        <Button key={letter} variant="secondary">
          {letter}
        </Button>
      ))}
    </ButtonGroup>
    <ButtonGroup aria-label="An alphabetical group of buttons">
      {[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter) => (
        <Button key={letter} variant="secondary">
          {letter}
        </Button>
      ))}
    </ButtonGroup>
  </Box>
);

export const PopoverButtons: StoryFn = () => {
  const id = useUID();
  return (
    <PopoverContainer baseId={id} placement="auto-end">
      <ButtonGroup attached aria-label="A decisive group of buttons">
        <PopoverButton variant="secondary">Yes</PopoverButton>
        <PopoverButton variant="secondary">No</PopoverButton>
        <PopoverButton variant="secondary">Maybe</PopoverButton>
      </ButtonGroup>
      <Popover aria-label="Popover">
        <Text as="span">An excellent choice indeed!</Text>
      </Popover>
    </PopoverContainer>
  );
};

export const ToggleButtons: StoryFn = () => {
  const [boldPressed, setBoldPressed] = React.useState(false);
  const [italicPressed, setItalicPressed] = React.useState(false);
  const [underlinePressed, setUnderlinePressed] = React.useState(true);
  const [disabledBoldPressed, setDisabledBoldPressed] = React.useState(false);
  const [strikePressed, setStrikePressed] = React.useState(false);
  const [disabledItalicPressed, setDisabledItalicPressed] = React.useState(true);
  return (
    <ButtonGroup attached aria-label="a decisive group of buttons">
      <Button variant="secondary" pressed={boldPressed} onClick={() => setBoldPressed(!boldPressed)}>
        Bold
      </Button>
      <Button variant="secondary" pressed={italicPressed} onClick={() => setItalicPressed(!italicPressed)}>
        Italic
      </Button>
      <Button variant="secondary" pressed={underlinePressed} onClick={() => setUnderlinePressed(!underlinePressed)}>
        Underline
      </Button>
      <Button
        variant="secondary"
        pressed={disabledBoldPressed}
        disabled
        onClick={() => setDisabledBoldPressed(!disabledBoldPressed)}
      >
        Disabled bold
      </Button>
      <Button variant="secondary" pressed={strikePressed} onClick={() => setStrikePressed(!strikePressed)}>
        Strike
      </Button>
      <Button
        variant="secondary"
        pressed={disabledItalicPressed}
        disabled
        onClick={() => setDisabledItalicPressed(!disabledItalicPressed)}
      >
        Disabled italic (pressed)
      </Button>
    </ButtonGroup>
  );
};

export const Customized: StoryFn = () => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      theme={currentTheme}
      elements={{
        BUTTON_GROUP: {
          padding: "space40",
          backgroundColor: "colorBackgroundPrimaryWeakest",
          borderRadius: "borderRadius30",
        },
      }}
    >
      <Attached />
    </CustomizationProvider>
  );
};
Customized.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
