describe('Alert components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('alert');
    cy.visit('/components/alert');
  });

  it('should render the alert components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Alert');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
