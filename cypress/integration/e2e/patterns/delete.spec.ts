describe('Delete patterns documentation page', () => {
  beforeEach(() => {
    cy.visit('/patterns/delete');
  });

  it('should render the delete patterns page correctly', () => {
    cy.pageHeaderShouldBeVisible('Delete');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
  });
});
