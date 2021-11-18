describe('Table components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('table');
    cy.visit('/components/table');
  });

  it('should render the table components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Table');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
