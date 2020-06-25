export const defaultExample = `
const PopoverExample = () => {
  return (
    <PopoverContainer baseId="popover-example">
      <PopoverButton variant="primary">✊ Action</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">
          Black Lives Matter. We stand with the Black community
        </Text>
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
