export const defaultExample = `
const SideModalExample = () => {
  return (
    <SideModalContainer>
      <SideModalButton variant="primary">
        Open dialog
      </SideModalButton>
      <SideModal aria-label="Basic Side Modal">
        <SideModalHeader>
          <SideModalHeading>
            Heading
          </SideModalHeading>
        </SideModalHeader>
        <SideModalBody>
          <Paragraph>
            A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
          </Paragraph>
          <Paragraph>
            You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
          </Paragraph>
        </SideModalBody>
      </SideModal>
    </SideModalContainer>
  );
};

render(
  <SideModalExample />
)
`.trim();

export const footerExample = `
const SideModalFooterExample = () => {
  return (
    <SideModalContainer>
      <SideModalButton variant="primary">
        Open dialog
      </SideModalButton>
      <SideModal aria-label="Basic Side Modal">
        <SideModalHeader>
          <SideModalHeading>
            Heading
          </SideModalHeading>
        </SideModalHeader>
        <SideModalBody>
          <Paragraph>
            A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
          </Paragraph>
          <Paragraph>
            You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
          </Paragraph>
        </SideModalBody>
        <SideModalFooter>
          <SideModalFooterActions>
          <Button variant="primary">Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
          </SideModalFooterActions>
        </SideModalFooter>
      </SideModal>
    </SideModalContainer>
  );
};

render(
  <SideModalFooterExample />
)
`.trim();

export const sideModalButtonExample = `
const SideModalButtonExample = () => {
  return (
    <Box display="flex" flexDirection="row" columnGap="space70">
      <SideModalContainer>
        <SideModalButton variant="primary">
          Open dialog
        </SideModalButton>
        <SideModal aria-label="Basic Side Modal">
          <SideModalHeader>
            <SideModalHeading>
              Heading
            </SideModalHeading>
          </SideModalHeader>
          <SideModalBody>
            <Paragraph>
              A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
            </Paragraph>
            <Paragraph>
              You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
            </Paragraph>
          </SideModalBody>
        </SideModal>
      </SideModalContainer>
      <SideModalContainer>
        <SideModalButton variant="secondary_icon" size="icon_small">
          <PlusIcon decorative={false}  title="Open side modal" />
        </SideModalButton>
        <SideModal aria-label="Basic Side Modal">
          <SideModalHeader>
            <SideModalHeading>
              Heading
            </SideModalHeading>
          </SideModalHeader>
          <SideModalBody>
            <Paragraph>
              A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
            </Paragraph>
            <Paragraph>
              You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
            </Paragraph>
          </SideModalBody>
        </SideModal>
      </SideModalContainer>
      <SideModalContainer>
        <SideModalButton variant="reset" size="reset">
          Open dialog
        </SideModalButton>
        <SideModal aria-label="Basic Side Modal">
          <SideModalHeader>
            <SideModalHeading>
              Heading
            </SideModalHeading>
          </SideModalHeader>
          <SideModalBody>
            <Paragraph>
              A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
            </Paragraph>
            <Paragraph>
              You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
            </Paragraph>
          </SideModalBody>
        </SideModal>
      </SideModalContainer>
    </Box>
  );
};

render(
  <SideModalButtonExample />
)
`.trim();

export const hookExample = `
const SideModalHookExample = () => {
  const dialog = useSideModalState({});
  return (
    <Box display="flex" flexDirection="column" rowGap="space70">
      <Box>
        <SideModalContainer state={dialog}>
          <SideModalButton variant="primary">
            Open dialog
          </SideModalButton>
          <SideModal aria-label="Basic Side Modal">
            <SideModalHeader>
              <SideModalHeading>
                Heading
              </SideModalHeading>
            </SideModalHeader>
            <SideModalBody>
              <Paragraph>
                A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
              </Paragraph>
              <Paragraph>
                You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
              </Paragraph>
            </SideModalBody>
          </SideModal>
        </SideModalContainer>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.show()}>Open dialog</Button>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.hide()}>Close dialog</Button>
      </Box>
    </Box>
  );
};

render(
  <SideModalHookExample />
)
`.trim();
