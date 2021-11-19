describe('Grid layout documentation page', () => {
  beforeEach(() => {
    cy.visit('/layout/grid');
  });

  it('should render the grid layout page correctly', () => {
    cy.pageHeaderShouldBeVisible('Grid');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
