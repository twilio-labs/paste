describe('Non-modal-dialog-primitive primitives documentation page', () => {
  beforeEach(() => {
    cy.visit('/primitives/non-modal-dialog-primitive');
  });

  it('should render the non-modal-dialog-primitive primitives page correctly', () => {
    cy.pageHeaderShouldBeVisible('Non Modal Dialog Primitive');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
