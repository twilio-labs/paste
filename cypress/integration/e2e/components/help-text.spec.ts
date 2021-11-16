describe('Help-text component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/help-text');
  });

  it('should render the help-text component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Help Text');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
