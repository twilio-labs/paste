describe('Select component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/select');
  });

  it('should render the select component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Select');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});
