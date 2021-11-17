describe('Status patterns documentation page', () => {
  beforeEach(() => {
    cy.visit('/patterns/status');
  });

  it('should render the status patterns page correctly', () => {
    cy.pageHeaderShouldBeVisible('Status');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
  });
});
