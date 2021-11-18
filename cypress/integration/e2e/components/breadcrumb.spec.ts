describe('Breadcrumb components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('breadcrumb');
    cy.visit('/components/breadcrumb');
  });

  it('should render the breadcrumb components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Breadcrumb');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
