describe('Overview page', function () {
  beforeEach(() => {
    cy.visit('/components');
  });

  it('should render the components overview page correctly', () => {
    cy.pageHeaderShouldBeVisible('Components');

    cy.overviewTableRendersCorrectly();
  });
});
