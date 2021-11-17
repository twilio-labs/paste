describe('Modal-dialog-primitive primitives documentation page', () => {
  beforeEach(() => {
    cy.visit('/primitives/modal-dialog-primitive');
  });

  it('should render the modal-dialog-primitive primitives page correctly', () => {
    cy.pageHeaderShouldBeVisible('Modal Dialog Primitive');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
