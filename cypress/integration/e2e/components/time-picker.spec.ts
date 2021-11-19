describe('Time-picker component documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('time-picker');
    cy.visit('/components/time-picker');
  });

  it('should render the time-picker component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Time Picker');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
