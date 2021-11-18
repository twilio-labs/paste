describe('Card components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('card');
    cy.visit('/components/card');
  });

  it('should render the card components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Card');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
