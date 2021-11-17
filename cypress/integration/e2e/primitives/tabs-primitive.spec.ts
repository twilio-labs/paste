describe('Tabs-primitive primitives documentation page', () => {
  beforeEach(() => {
    cy.visit('/primitives/tabs-primitive');
  });

  it('should render the tabs-primitive primitives page correctly', () => {
    cy.pageHeaderShouldBeVisible('Tabs Primitive');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
