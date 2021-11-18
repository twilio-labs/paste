describe('Radio-group components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('radio-group');
    cy.visit('/components/radio-group');
  });

  it('should render the radio-group components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Radio Group');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
