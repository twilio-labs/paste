describe('Data-grid components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('data-grid');
    cy.visit('/components/data-grid');
  });

  it('should render the data-grid components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Data Grid');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
