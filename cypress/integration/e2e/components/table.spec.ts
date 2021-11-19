describe('Table component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('table');
    cy.visit('/components/table');
  });

  it('should render the table component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Table');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
