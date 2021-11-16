describe('Input component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/input');
  });

  it('should render the input component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Input');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
