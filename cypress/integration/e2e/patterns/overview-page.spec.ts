describe('Overview page', () => {
  beforeEach(() => {
    cy.visit('/patterns');
  });

  it('should render the patterns overview page correctly', () => {
    cy.pageHeaderShouldBeVisible('Patterns');

    cy.overviewTableRendersCorrectly();
  });
});
