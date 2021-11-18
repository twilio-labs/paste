describe('Avatar components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('avatar');
    cy.visit('/components/avatar');
  });

  it('should render the avatar components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Avatar');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
