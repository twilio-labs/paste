describe('Disclosure components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('disclosure');
    cy.visit('/components/disclosure');
  });

  it('should render the disclosure components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Disclosure');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
