describe('Avatar component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/avatar');
  });

  it('should render the avatar component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Avatar');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
