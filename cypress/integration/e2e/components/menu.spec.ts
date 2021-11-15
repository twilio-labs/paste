describe('Menu component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/menu');
  });

  it('should render the menu component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Menu');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});
