describe('Media-object layout documentation page', () => {
  beforeEach(() => {
    cy.visit('/layout/media-object');
  });

  it('should render the media-object layout page correctly', () => {
    cy.pageHeaderShouldBeVisible('Media Object');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
