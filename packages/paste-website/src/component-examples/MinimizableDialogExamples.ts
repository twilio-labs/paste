export const defaultExample = `
const MinimizableDialogExample = () => {
  return (
    <MinimizableDialogContainer>
      <MinimizableDialogButton variant="primary" size="circle">
        <ChatIcon decorative={false} title="Chat" />
      </MinimizableDialogButton>
      <MinimizableDialog aria-label="Live chat">
        <MinimizableDialogHeader>Live chat</MinimizableDialogHeader>
        <MinimizableDialogContent>
          <Box padding='space70'>
            <Heading as="div" variant="heading30">
              Hi there!
            </Heading>
            <Paragraph>We’re here to help. Please give us some info to get started.</Paragraph>
            <Box display="flex" flexDirection="column" rowGap="space60">
              <Box>
                <Label htmlFor='name-input'>Name</Label>
                <Input id='name-input' type="text" />
              </Box>
              <Box>
                <Label htmlFor='email-input'>Email address</Label>
                <Input id='email-input' type="email" />
              </Box>
              <Box>
                <Label htmlFor='question-textarea'>How can we help you?</Label>
                <TextArea id='question-textarea' />
              </Box>
            </Box>
            <Box marginTop="space190">
              <Button variant="primary">Start chat</Button>
            </Box>
          </Box>
        </MinimizableDialogContent>
      </MinimizableDialog>
    </MinimizableDialogContainer>
  );
};

render(
  <MinimizableDialogExample />
)
`.trim();

export const minimizableDialogButtonExample = `
const MinimizableDialogButtonExample = () => {
  return (
    <Box display="flex" flexDirection="row" columnGap="space70">
      <MinimizableDialogContainer>
        <MinimizableDialogButton variant="primary">
          Open dialog
        </MinimizableDialogButton>
        <MinimizableDialog aria-label="Dialog">
          <MinimizableDialogHeader>Dialog</MinimizableDialogHeader>
          <MinimizableDialogContent>
            <Box padding='space70'>
              This is the Twilio styled minimizable dialog that you can use in all your applications.
            </Box>
          </MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>
      <MinimizableDialogContainer>
        <MinimizableDialogButton variant="secondary_icon" size="icon_small">
          <PlusIcon decorative={false}  title="Open popover" />
        </MinimizableDialogButton>
        <MinimizableDialog aria-label="Dialog">
          <MinimizableDialogHeader>Dialog</MinimizableDialogHeader>
          <MinimizableDialogContent>
            <Box padding='space70'>
              This is the Twilio styled minimizable dialog that you can use in all your applications.
            </Box>
          </MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>
      <MinimizableDialogContainer>
        <MinimizableDialogButton variant="reset" size="reset">
          Open dialog
        </MinimizableDialogButton>
        <MinimizableDialog aria-label="Dialog">
          <MinimizableDialogHeader>Dialog</MinimizableDialogHeader>
          <MinimizableDialogContent>
            <Box padding='space70'>
              This is the Twilio styled minimizable dialog that you can use in all your applications.
            </Box>
          </MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>
    </Box>
  );
};

render(
  <MinimizableDialogButtonExample />
)
`.trim();

export const hookExample = `
const HookExample = () => {
  const dialog = useMinimizableDialogState({});
  return (
    <Box display="flex" flexDirection="column" rowGap="space70">
      <Box>
        <MinimizableDialogContainer state={dialog}>
          <MinimizableDialogButton variant="primary">
            Minimizable Dialog Button
          </MinimizableDialogButton>
          <MinimizableDialog aria-label="Dialog">
            <MinimizableDialogHeader>Dialog</MinimizableDialogHeader>
            <MinimizableDialogContent>
              <Box padding='space70'>
                This is the Twilio styled minimizable dialog that you can use in all your applications.
              </Box>
            </MinimizableDialogContent>
          </MinimizableDialog>
        </MinimizableDialogContainer>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.show()}>Open dialog</Button>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.hide()}>Close dialog</Button>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.minimize()}>Minimize dialog</Button>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.expand()}>Expand dialog</Button>
      </Box>
    </Box>
  );
};

render(
  <HookExample />
)
`.trim();
