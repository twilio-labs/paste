describe('Anchor components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('anchor');
    cy.visit('/components/anchor');
  });

  it('should render the anchor components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Anchor');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
