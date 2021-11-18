describe('Tabs component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('tabs');
    cy.visit('/components/tabs/');
  });

  it('should render the tabs component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Tabs');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
