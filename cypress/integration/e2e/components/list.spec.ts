describe('List components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('list');
    cy.visit('/components/list');
  });

  it('should render the list components page correctly', () => {
    cy.pageHeaderShouldBeVisible('List');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
