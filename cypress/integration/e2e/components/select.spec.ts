describe('Select components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('select');
    cy.visit('/components/select');
  });

  it('should render the select components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Select');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
