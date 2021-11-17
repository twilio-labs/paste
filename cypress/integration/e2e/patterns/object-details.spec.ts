describe('Object-details patterns documentation page', () => {
  beforeEach(() => {
    cy.visit('/patterns/object-details');
  });

  it('should render the object-details patterns page correctly', () => {
    cy.pageHeaderShouldBeVisible('Object Details');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
  });
});
