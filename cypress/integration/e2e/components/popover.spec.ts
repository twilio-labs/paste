describe('Popover components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('popover');
    cy.visit('/components/popover');
  });

  it('should render the popover components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Popover');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
