describe('Tooltip components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('tooltip');
    cy.visit('/components/tooltip');
  });

  it('should render the tooltip components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Tooltip');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
