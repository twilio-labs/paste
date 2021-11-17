describe('Empty-states patterns documentation page', () => {
  beforeEach(() => {
    cy.visit('/patterns/empty-states');
  });

  it('should render the empty-states patterns page correctly', () => {
    cy.pageHeaderShouldBeVisible('Empty States');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
  });
});
