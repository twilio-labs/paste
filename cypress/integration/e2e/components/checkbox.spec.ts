describe('Checkbox components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('checkbox');
    cy.visit('/components/checkbox');
  });

  it('should render the checkbox components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Checkbox');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
