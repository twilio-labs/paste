describe('Pagination component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/pagination');
  });

  it('should render the pagination component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Pagination');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
