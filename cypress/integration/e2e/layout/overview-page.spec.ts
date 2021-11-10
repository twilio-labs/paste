describe('Overview page', () => {
  beforeEach(() => {
    cy.visit('/layout');
  });

  it('should render the layout overview page correctly', () => {
    cy.pageHeaderShouldBeVisible('Layout');

    cy.overviewTableRendersCorrectly();
  });
});
