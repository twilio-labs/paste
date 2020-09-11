export const StateHookTabsExample = `
const StateHookExample = () => {
  const tooltip = useTooltipState();
  return (
    <Stack orientation="horizontal" spacing="space60">
      <Tooltip
      state={tooltip}
      text="This should be visible by pressing another button"
      >
        <Button variant="primary">Open tooltip</Button>
      </Tooltip>
      <Button variant="primary" onClick={() => tooltip.show()}>
        Open tooltip on click
      </Button>
      <Button variant="primary" onClick={() => tooltip.hide()}>
        Close tooltip on click
      </Button>
    </Stack>
  );
};

render(
  <StateHookExample />
)
`.trim();
