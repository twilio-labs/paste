describe('Data-export patterns documentation page', () => {
  beforeEach(() => {
    cy.visit('/patterns/data-export');
  });

  it('should render the data-export patterns page correctly', () => {
    cy.pageHeaderShouldBeVisible('Data Export');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
  });
});
