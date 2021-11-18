describe('Form-pill-group components documentation page', () => {
  beforeEach(() => {
    cy.abortPrefetchRequests('form-pill-group');
    cy.visit('/components/form-pill-group');
  });

  it('should render the form-pill-group components page correctly', () => {
    cy.pageHeaderShouldBeVisible('Form Pill Group');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
