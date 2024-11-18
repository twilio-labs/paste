export const basicExample = `<KeyboardKeyGroup>
  <KeyboardKey>Control</KeyboardKey>
  <KeyboardKey>B</KeyboardKey>
</KeyboardKeyGroup>
`.trim();

export const defaultExample = `<>
    <KeyboardKey>S</KeyboardKey>
    <Paragraph>Press{" "}
        <KeyboardKeyGroup>
            <KeyboardKey>Control</KeyboardKey>
            <KeyboardKey>B</KeyboardKey>
        </KeyboardKeyGroup>{" "}to save.
    </Paragraph>
</>
`.trim();

export const disabledExample = `const DisabledExample = () => {
  const menu = useMenuState();
  return (
    <Box minHeight="230px">
        <KeyboardKeyGroup disabled>
            <KeyboardKey>S</KeyboardKey>
        </KeyboardKeyGroup>
        <Paragraph>Open the Menu for the disabled Keyboard Key in context:</Paragraph>
        <MenuButton {...menu} variant="secondary">
            Edit <ChevronDownIcon decorative />
        </MenuButton>
        <Menu {...menu} aria-label="Actions">
            <MenuItem {...menu}>
                <Box display="flex" justifyContent="space-between">
                    Cut
                    <KeyboardKeyGroup>
                    <KeyboardKey>Cmd</KeyboardKey>
                    <KeyboardKey>X</KeyboardKey>
                    </KeyboardKeyGroup>
                </Box>
            </MenuItem>
            <MenuItem {...menu}>
                <Box display="flex" justifyContent="space-between">
                    Paste
                    <KeyboardKeyGroup>
                    <KeyboardKey>Cmd</KeyboardKey>
                    <KeyboardKey>V</KeyboardKey>
                    </KeyboardKeyGroup>
                </Box>
            </MenuItem>
            <MenuItem disabled aria-disabled {...menu}>
                <Box display="flex" justifyContent="space-between">
                    Save
                    <KeyboardKeyGroup disabled>
                    <KeyboardKey>Cmd</KeyboardKey>
                    <KeyboardKey>S</KeyboardKey>
                    </KeyboardKeyGroup>
                </Box>
            </MenuItem>
        </Menu>
    </Box>
  );
};

render(
    <DisabledExample />
)`.trim();

export const pressedExample = `const PressedExample = () => {
    const keyCombinationState = useKeyCombination({
        keys: ["Shift", "s"],
        onCombinationPress: ()=> {},
        enablePressStyles: true,
    });

    return (
        <>
            <KeyboardKeyGroup enablePressStyles activeKeys={["s"]}>
                <KeyboardKey keyEvent="s">S</KeyboardKey>
            </KeyboardKeyGroup>
            <Paragraph>Press the “Shift” or “S” key to reveal the pressed states below:</Paragraph>
            <KeyboardKeyGroup {...keyCombinationState}>
                <KeyboardKey keyEvent="Shift">Shift</KeyboardKey>
                <KeyboardKey keyEvent="s">S</KeyboardKey>
            </KeyboardKeyGroup>
        </>
    )
}

render(
    <PressedExample />
)`.trim();

export const tooltipExample = `<Stack orientation="horizontal" spacing="space60">
    <Tooltip
        actionHeader="Search shortcuts"
        keyCombinationsActions={[
            { name: "Mac", eventKeyCombination: ["Command", "K"] },
            { name: "Windows", eventKeyCombination: ["Control", "K"] },
        ]}
    >
        <Button aria-keyshortcuts="command+k" variant="primary">
            <SearchIcon title="search" />
        </Button>
    </Tooltip>
    <Tooltip
        actionHeader="Search shortcuts"
        keyCombinationsActions={[
            { eventKeyCombination: ["Command", "K"] },
        ]}
    >
        <Button aria-keyshortcuts="command+k" variant="primary">
            <SearchIcon title="search" />
        </Button>
    </Tooltip>
</Stack>`.trim();

export const useKeyCombinationExample = `const HookExample = () => {
    const [combinationTriggeredText, setCombinationTriggeredText] = React.useState("");
    useKeyCombination({
        keys: ["Shift", "q"],
        onCombinationPress: () => {
            setCombinationTriggeredText("Shift + Q pressed");
        },
    });

    return (
        <>
            <Paragraph>Press the <KeyboardKeyGroup><KeyboardKey>Shift</KeyboardKey><KeyboardKey>Q</KeyboardKey></KeyboardKeyGroup> key to reveal the pressed states below:</Paragraph>
            <Paragraph>Combination triggered: {combinationTriggeredText}</aragraph>
        </>
    )
}

render(
    <HookExample />
)`.trim();

export const useKeyCombinationsExample = `const HookExample = () => {
  const [combinationTriggeredText, setCombinationTriggeredText] = React.useState("");

  useKeyCombinations({
    combinations: [
      {
        keys: ["Control", "b"],
        onCombinationPress: () => {
          setCombinationTriggeredText("Control + B pressed");
        },
        disabled: false,
      },
      {
        keys: ["Control", "k"],
        onCombinationPress: () => {
          setCombinationTriggeredText("Control + K pressed");
        },
        disabled: false,
      },
      {
        keys: ["Control", "y"],
        onCombinationPress: () => {
          setCombinationTriggeredText("Control + Y pressed");
        },
        disabled: false,
      },
    ],
  });

  return (
    <>
        <Paragraph marginBottom="space0">Use the following combinations to test. You can also set the disabled state in the code block below.</Paragraph>
        <Box marginY="space30">
            <Stack orientation="vertical" spacing="space20">
                <KeyboardKeyGroup>
                    <KeyboardKey>Control</KeyboardKey>
                    <KeyboardKey>B</KeyboardKey>
                </KeyboardKeyGroup>
                <KeyboardKeyGroup>
                    <KeyboardKey>Control</KeyboardKey>
                    <KeyboardKey>K</KeyboardKey>
                </KeyboardKeyGroup>
                <KeyboardKeyGroup>
                    <KeyboardKey>Control</KeyboardKey>
                    <KeyboardKey>Y</KeyboardKey>
                </KeyboardKeyGroup>
            </Stack>
        </Box>
        <Paragraph>Combination triggered: {combinationTriggeredText}</Paragraph>
    </>
  );
};

render(
    <HookExample />
)`.trim();
