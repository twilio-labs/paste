describe('Anchor component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('anchor');
    cy.visit('/components/anchor');
  });

  it('should render the anchor component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Anchor');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
