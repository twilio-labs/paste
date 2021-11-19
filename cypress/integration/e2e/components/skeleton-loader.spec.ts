describe('Skeleton-loader component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('skeleton-loader');
    cy.visit('/components/skeleton-loader');
  });

  it('should render the skeleton-loader component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Skeleton Loader');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
