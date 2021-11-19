describe('Menu-primitive primitives documentation page', () => {
  beforeEach(() => {
    cy.visit('/primitives/menu-primitive');
  });

  it('should render the menu-primitive primitives page correctly', () => {
    cy.pageHeaderShouldBeVisible('Menu Primitive');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
