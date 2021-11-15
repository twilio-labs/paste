describe('Index.mdx component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/index.mdx');
  });

  it('should render the index.mdx component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Index Mdx');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});
