describe('Display-pill-group component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/display-pill-group');
  });

  it('should render the display-pill-group component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Display Pill Group');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});