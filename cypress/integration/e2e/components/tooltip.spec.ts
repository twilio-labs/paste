describe('Tooltip component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/tooltip');
  });

  it('should render the tooltip component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Tooltip');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
