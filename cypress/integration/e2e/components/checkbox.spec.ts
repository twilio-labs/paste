describe('Checkbox component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/checkbox');
  });

  it('should render the checkbox component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Checkbox');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
