describe('Toast components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('toast');
    cy.visit('/components/toast');
  });

  it('should render the toast components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Toast');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
