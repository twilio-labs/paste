describe('Stack layout documentation page', () => {
  beforeEach(() => {
    cy.visit('/layout/stack');
  });

  it('should render the stack layout page correctly', () => {
    cy.pageHeaderShouldBeVisible('Stack');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
