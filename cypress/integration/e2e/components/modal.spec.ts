describe('Modal component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/modal');
  });

  it('should render the modal component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Modal');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});