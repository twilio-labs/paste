describe('Spinner components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('spinner');
    cy.visit('/components/spinner');
  });

  it('should render the spinner components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Spinner');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
