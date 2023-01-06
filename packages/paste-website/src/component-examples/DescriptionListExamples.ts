export const basicDescriptionList = `
const DescriptionList = () => {

  return (
    <DescriptionList>
      <DescriptionListTerm>Term</DescriptionListTerm>
      <DescriptionListDetails>Details</DescriptionListDetails>
    </DescriptionList>
  );
};
render(<DescriptionList />)
`.trim();

export const descriptionListWithStatusIcon = `
const DescriptionList = () => {

  return (
    <DescriptionList>
      <DescriptionListTerm>Phone</DescriptionListTerm>
      <DescriptionListDetails>
        <ProcessSuccessIcon
          color="colorTextIconSuccess"
          decorative={false}
          title="success" />
        Success
      </DescriptionListDetails>
      <DescriptionListTerm>Email</DescriptionListTerm>
      <DescriptionListDetails>
        <ProcessErrorIcon
          color="colorTextIconError"
          decorative={false}
          title="error" />
        Error
      </DescriptionListDetails>
      <DescriptionListTerm>SMS</DescriptionListTerm>
      <DescriptionListDetails>
        <ProcessInProgressIcon
          color="colorTextIconNeutral"
          decorative={false}
          title="in progress" />
        In progress
      </DescriptionListDetails>
    </DescriptionList>
  );
};
render(<DescriptionList />)
`.trim();

export const descriptionListWithMultipleTerms = `
const DescriptionList = () => {

  return (
    <DescriptionList>
      <DescriptionListTerm>Service 123</DescriptionListTerm>
      <DescriptionListTerm>Default Service</DescriptionListTerm>
      <DescriptionListDetails>AC7d08e4b7ef19bcc5240e7e9ca3978906</DescriptionListDetails>
    </DescriptionList>
  );
};
render(<DescriptionList />)
`.trim();

export const descriptionListWithMultipleDetails = `
const DescriptionList = () => {

  return (
    <DescriptionList>
      <DescriptionListTerm>Account SIDs</DescriptionListTerm>
      <DescriptionListDetails>AC7d08e4b7ef19bcc5240e7e9ca3978906</DescriptionListDetails>
      <DescriptionListDetails>AC4c86dc110e8deadf19fde8edfda87678</DescriptionListDetails>
      <DescriptionListDetails>AC6f0d431ab0655267387a9ab4065b9a03</DescriptionListDetails>
    </DescriptionList>
  );
};
render(<DescriptionList />)
`.trim();

export const descriptionListWithEmptyState = `
const DescriptionList = () => {

  return (
    <DescriptionList>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDetails>Ramon Hughes</DescriptionListDetails>
      <DescriptionListTerm>Phone number</DescriptionListTerm>
      <DescriptionListDetails />
      <DescriptionListTerm>Email address</DescriptionListTerm>
      <DescriptionListDetails>ramonhughes@abc.com</DescriptionListDetails>
    </DescriptionList>
  );
};
render(<DescriptionList />)
`.trim();
