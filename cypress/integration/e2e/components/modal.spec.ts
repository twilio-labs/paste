describe('Modal components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('modal');
    cy.visit('/components/modal');
  });

  it('should render the modal components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Modal');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
