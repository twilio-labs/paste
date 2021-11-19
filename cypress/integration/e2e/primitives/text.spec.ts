describe('Text primitives documentation page', () => {
  beforeEach(() => {
    cy.visit('/primitives/text');
  });

  it('should render the text primitives page correctly', () => {
    cy.pageHeaderShouldBeVisible('Text');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
