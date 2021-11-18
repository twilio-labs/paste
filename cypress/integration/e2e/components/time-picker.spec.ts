describe('Time-picker components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('time-picker');
    cy.visit('/components/time-picker');
  });

  it('should render the time-picker components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Time Picker');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
