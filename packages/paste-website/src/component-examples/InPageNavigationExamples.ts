export const basicExample = `
const BasicInPageNavigation = () => {

  return (
    <InPageNavigation aria-label="my-nav">
      <InPageNavigationItem href="#">
        Home
      </InPageNavigationItem>
      <InPageNavigationItem href="#">
        About
      </InPageNavigationItem>
      <InPageNavigationItem href="#" currentPage>
        Contact
      </InPageNavigationItem>
    </InPageNavigation>
  );
};

render(
  <BasicInPageNavigation />
)
`.trim();

export const fullWidthExample = `
const FullWidthInPageNavigation = () => {

  return (
    <InPageNavigation aria-label="my-nav" variant="fullWidth">
      <InPageNavigationItem href="#">
        Home
      </InPageNavigationItem>
      <InPageNavigationItem href="#">
        About
      </InPageNavigationItem>
      <InPageNavigationItem href="#" currentPage>
        Contact
      </InPageNavigationItem>
    </InPageNavigation>
  );
};

render(
  <FullWidthInPageNavigation />
)
`.trim();
