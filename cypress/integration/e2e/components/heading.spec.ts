describe('Heading component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('heading');
    cy.visit('/components/heading');
  });

  it('should render the heading component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Heading');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
