describe('Date-picker component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/date-picker');
  });

  it('should render the date-picker component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Date Picker');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});
