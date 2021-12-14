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

export const buttonVariantsExample = `
const PopoverBadgeExample = () => {
  return (
    <Box display="flex" columnGap="space40">
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="primary" size="small">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="secondary_icon" size="icon_small">
          <PlusIcon decorative={false}  title="Open popover" />
        </PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="reset" size="reset">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <PopoverBadgeExample />
)
`.trim();

export const badgeExample = `
const PopoverBadgeExample = () => {
  return (
    <Box display="flex" columnGap="space40">
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="default">Open popover</PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="info">
          <>
            <InformationIcon decorative={false} title="Information" />
            Open popover
          </>
        </PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="warning">
          <>
            <WarningIcon decorative={false} title="Warning" />
            Open popover
          </>
        </PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="new">
          <>
            <NewIcon decorative={false} title="New" />
            Open popover
          </>
        </PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <PopoverBadgeExample />
)
`.trim();
