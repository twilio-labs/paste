describe('Paragraph components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('paragraph');
    cy.visit('/components/paragraph');
  });

  it('should render the paragraph components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Paragraph');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
