describe('Label component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/label');
  });

  it('should render the label component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Label');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
