describe('Disclosure component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/disclosure');
  });

  it('should render the disclosure component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Disclosure');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});
