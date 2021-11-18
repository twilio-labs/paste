describe('Truncate components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('truncate');
    cy.visit('/components/truncate');
  });

  it('should render the truncate components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Truncate');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
