describe('Menu component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('menu');
    cy.visit('/components/menu');
  });

  it('should render the menu component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Menu');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
