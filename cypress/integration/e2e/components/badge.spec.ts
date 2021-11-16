describe('Badge component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/badge');
  });

  it('should render the badge component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Badge');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
