export const defaultExample = `
const PopoverExample = () => {
  return (
    <PopoverContainer baseId="popover-example">
      <PopoverButton variant="primary">✊ Action</PopoverButton>
      <Popover aria-label="Popover">
        <Heading as="h3" variant="heading30">Heads up!</Heading>
        <Separator orientation="horizontal" verticalSpacing="space50" />
        <Text as="span">
          Black Lives Matter. We stand with the Black community
        </Text>
        <Separator orientation="horizontal" verticalSpacing="space50" />
        <Button onClick={() => {}} variant="primary">Agree</Button>
      </Popover>
    </PopoverContainer>
  );
};

render(
  <PopoverExample />
)
`.trim();

export const rightExample = `
const PopoverRightExample = () => {
  return (
    <PopoverContainer baseId="popover-right-example" placement="right-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">
          This is the Twilio styled popover that you can use in all your applications.
        </Text>
      </Popover>
    </PopoverContainer>
  );
};

render(
  <PopoverRightExample />
)
`.trim();

export const StateHookPopoverExample = `
const StateHookExample = () => {
  const popover = usePopoverState({baseId: 'test-id'});
  return (
    <Stack orientation="horizontal" spacing="space60">
      <PopoverContainer state={popover}>
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
      <Button variant="primary" onClick={() => popover.show()}>
        Open popover on click
      </Button>
      <Button variant="primary" onClick={() => popover.hide()}>
        Close popover on click
      </Button>
    </Stack>
  );
};

render(
  <StateHookExample />
)
`.trim();
