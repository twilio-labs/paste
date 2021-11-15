describe('Data-grid component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/data-grid');
  });

  it('should render the data-grid component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Data Grid');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});
