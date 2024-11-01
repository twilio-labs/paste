export const basicExample = `<KeyboardKeyGroup>
  <KeyboardKey>Control</KeyboardKey>
  <KeyboardKey>B</KeyboardKey>
</KeyboardKeyGroup>
`.trim();

export const disabledExample = `<KeyboardKeyGroup disabled>
  <KeyboardKey>Control</KeyboardKey>
  <KeyboardKey>B</KeyboardKey>
</KeyboardKeyGroup>
`.trim();

export const pressedExample = `const PressedExample = () => {
    const keyCombinationState = useKeyCombination({
        keys: ["Control", "b"],
        onCombinationPress: ()=> {},
        enablePressStyles: true,
    });

    return(
        <KeyboardKeyGroup {...keyCombinationState}>
            <KeyboardKey keyText="Control">Control</KeyboardKey>
            <KeyboardKey keyText="b">B</KeyboardKey>
        </KeyboardKeyGroup>
    )
}

render(
    <PressedExample />
)`.trim();
