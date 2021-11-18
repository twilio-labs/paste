describe('Screen-reader-only components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('screen-reader-only');
    cy.visit('/components/screen-reader-only');
  });

  it('should render the screen-reader-only components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Screen Reader Only');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
