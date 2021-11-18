describe('Badge components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('badge');
    cy.visit('/components/badge');
  });

  it('should render the badge components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Badge');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
