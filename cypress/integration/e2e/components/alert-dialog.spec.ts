describe('Alert-dialog components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('alert-dialog');
    cy.visit('/components/alert-dialog');
  });

  it('should render the alert-dialog components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Alert Dialog');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
