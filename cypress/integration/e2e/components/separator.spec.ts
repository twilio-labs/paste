describe('Separator component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('separator');
    cy.visit('/components/separator');
  });

  it('should render the separator component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Separator');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
