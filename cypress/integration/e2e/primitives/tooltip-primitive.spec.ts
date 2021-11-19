describe('Tooltip-primitive primitives documentation page', () => {
  beforeEach(() => {
    cy.visit('/primitives/tooltip-primitive');
  });

  it('should render the tooltip-primitive primitives page correctly', () => {
    cy.pageHeaderShouldBeVisible('Tooltip Primitive');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
