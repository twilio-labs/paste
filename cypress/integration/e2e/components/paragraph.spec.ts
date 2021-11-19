describe('Paragraph component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/paragraph');
  });

  it('should render the paragraph component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Paragraph');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
