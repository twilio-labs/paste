describe('Combobox component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('combobox');
    cy.visit('/components/combobox');
  });

  it('should render the combobox component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Combobox');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
