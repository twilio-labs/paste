describe('Help-text components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('help-text');
    cy.visit('/components/help-text');
  });

  it('should render the help-text components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Help Text');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
