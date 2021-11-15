describe('Textarea component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/textarea');
  });

  it('should render the textarea component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Textarea');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});
