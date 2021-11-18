describe('Label component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('label');
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
