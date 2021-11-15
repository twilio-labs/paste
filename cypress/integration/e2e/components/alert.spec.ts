describe('Alert component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/alert');
  });

  it('should render the alert component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Alert');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});
