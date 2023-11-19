export const basicDescriptionList = `
const DescriptionListExample = () => {

  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Term 1</DescriptionListTerm>
        <DescriptionListDetails>Details 1</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Term 2</DescriptionListTerm>
        <DescriptionListDetails>Details 2</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};
render(<DescriptionListExample />)
`.trim();

export const descriptionListWithStatusIcon = `
const DescriptionListExample = () => {

  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Phone</DescriptionListTerm>
        <DescriptionListDetails>
          <Box display="flex">
            <ProcessSuccessIcon
              color="colorTextIconSuccess"
              decorative={false}
              title="success" />
            <Text as="span" marginLeft="space20">Success</Text>
          </Box>
        </DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Email</DescriptionListTerm>
        <DescriptionListDetails>
          <Box display="flex">
            <ProcessErrorIcon
              color="colorTextIconError"
              decorative={false}
              title="error" />
            <Text as="span" marginLeft="space20">Error</Text>
          </Box>
        </DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>SMS</DescriptionListTerm>
        <DescriptionListDetails>
          <Box display="flex">
            <ProcessInProgressIcon
              color="colorTextIconNeutral"
              decorative={false}
              title="In-progress" />
            <Text as="span" marginLeft="space20">In-progress</Text>
          </Box>
        </DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};
render(<DescriptionListExample />)
`.trim();

export const descriptionListWithMultipleTerms = `
const DescriptionListExample = () => {

  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Service 123</DescriptionListTerm>
        <DescriptionListTerm>Default Service</DescriptionListTerm>
        <DescriptionListDetails>AC7d08e4b7ef19bcc5240e7e9ca3978906</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};
render(<DescriptionListExample />)
`.trim();

export const descriptionListWithMultipleDetails = `
const DescriptionListExample = () => {

  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Account SIDs</DescriptionListTerm>
        <DescriptionListDetails>AC7d08e4b7ef19bcc5240e7e9ca3978906</DescriptionListDetails>
        <DescriptionListDetails>AC4c86dc110e8deadf19fde8edfda87678</DescriptionListDetails>
        <DescriptionListDetails>AC6f0d431ab0655267387a9ab4065b9a03</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};
render(<DescriptionListExample />)
`.trim();

export const descriptionListWithEmptyState = `
const DescriptionListExample = () => {

  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Name</DescriptionListTerm>
        <DescriptionListDetails>Ramon Hughes</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Phone number</DescriptionListTerm>
        <DescriptionListDetails>-</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Email address</DescriptionListTerm>
        <DescriptionListDetails>ramonhughes@abc.com</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};
render(<DescriptionListExample />)
`.trim();
