describe('Textarea components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('textarea');
    cy.visit('/components/textarea');
  });

  it('should render the textarea components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Textarea');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
