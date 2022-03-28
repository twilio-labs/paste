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
      <Button variant="secondary" onClick={() => tooltip.show()}>
        Open tooltip on click
      </Button>
      <Button variant="secondary" onClick={() => tooltip.hide()}>
        Close tooltip on click
      </Button>
    </Stack>
  );
};

render(
  <StateHookExample />
)
`.trim();

export const NonPasteChildComponentExample = `
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} {...props} style={{backgroundColor: 'white', border: '1px solid #000', color: '#000', borderRadius: '5px', padding: '5px'}}>
    Fancy button: {props.children}
  </button>
));

const NonPasteChildComponent = () => {
  return (
    <Tooltip text="Forwarding refs correctly!">
      <FancyButton>Fancy!</FancyButton>
    </Tooltip>
  );
};

render(
  <NonPasteChildComponent />
)
`.trim();
