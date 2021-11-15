describe('Toast component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/toast');
  });

  it('should render the toast component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Toast');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});