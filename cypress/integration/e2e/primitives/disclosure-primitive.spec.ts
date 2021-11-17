describe('Disclosure-primitive primitives documentation page', () => {
  beforeEach(() => {
    cy.visit('/primitives/disclosure-primitive');
  });

  it('should render the disclosure-primitive primitives page correctly', () => {
    cy.pageHeaderShouldBeVisible('Disclosure Primitive');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
