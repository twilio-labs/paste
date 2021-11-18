describe('Input components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('input');
    cy.visit('/components/input');
  });

  it('should render the input components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Input');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
