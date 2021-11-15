describe('Form-pill-group component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/form-pill-group');
  });

  it('should render the form-pill-group component page correctly', () => {
    cy.pageHeaderShouldBeVisible('Form Pill Group');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkDoDonts();
    cy.checkChangelogRevealer();
  });
});