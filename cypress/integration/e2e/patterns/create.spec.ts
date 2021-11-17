describe('Create patterns documentation page', () => {
  beforeEach(() => {
    cy.visit('/patterns/create');
  });

  it('should render the create patterns page correctly', () => {
    cy.pageHeaderShouldBeVisible('Create');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
  });
});
