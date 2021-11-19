describe('Combobox-primitive primitives documentation page', () => {
  beforeEach(() => {
    cy.visit('/primitives/combobox-primitive');
  });

  it('should render the combobox-primitive primitives page correctly', () => {
    cy.pageHeaderShouldBeVisible('Combobox Primitive');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
