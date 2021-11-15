describe('Spinner component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/spinner');
  });

  it('should render the spinner component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Spinner');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});
