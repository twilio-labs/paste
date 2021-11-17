describe('Box primitives documentation page', () => {
  beforeEach(() => {
    cy.visit('/primitives/box');
  });

  it('should render the box primitives page correctly', () => {
    cy.pageHeaderShouldBeVisible('Box');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
