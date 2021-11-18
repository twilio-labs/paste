describe('Skeleton-loader components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('skeleton-loader');
    cy.visit('/components/skeleton-loader');
  });

  it('should render the skeleton-loader components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Skeleton Loader');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
