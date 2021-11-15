describe('Screen-reader-only component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/screen-reader-only');
  });

  it('should render the screen-reader-only component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Screen Reader Only');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});