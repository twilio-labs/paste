describe('Flex layout documentation page', () => {
  beforeEach(() => {
    cy.visit('/layout/flex');
  });

  it('should render the flex layout page correctly', () => {
    cy.pageHeaderShouldBeVisible('Flex');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
