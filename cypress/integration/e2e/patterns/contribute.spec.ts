describe('Contribute patterns documentation page', () => {
  beforeEach(() => {
    cy.visit('/patterns/contribute');
  });

  it('should render the contribute patterns page correctly', () => {
    cy.pageHeaderShouldBeVisible('Contributing a pattern');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
  });
});
