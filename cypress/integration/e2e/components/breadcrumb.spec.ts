describe('Breadcrumb component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('breadcrumb');
    cy.visit('/components/breadcrumb');
  });

  it('should render the breadcrumb component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Breadcrumb');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
