describe('Textarea component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('textarea');
    cy.visit('/components/textarea');
  });

  it('should render the textarea component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Textarea');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
