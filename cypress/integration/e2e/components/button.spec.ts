describe('Button component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('button');
    cy.visit('/components/button');
  });

  it('should render the button component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Button');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
