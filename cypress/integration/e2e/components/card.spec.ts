describe('Card component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('card');
    cy.visit('/components/card');
  });

  it('should render the card component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Card');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
