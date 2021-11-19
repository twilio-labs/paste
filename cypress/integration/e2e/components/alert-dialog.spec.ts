describe('Alert-dialog component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/alert-dialog');
  });

  it('should render the alert-dialog component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Alert Dialog');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
