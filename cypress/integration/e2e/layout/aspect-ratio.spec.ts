describe('Aspect-ratio layout documentation page', () => {
  beforeEach(() => {
    cy.visit('/layout/aspect-ratio');
  });

  it('should render the aspect-ratio layout page correctly', () => {
    cy.pageHeaderShouldBeVisible('Aspect Ratio');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
