describe('Notifications-and-feedback patterns documentation page', () => {
  beforeEach(() => {
    cy.visit('/patterns/notifications-and-feedback');
  });

  it('should render the notifications-and-feedback patterns page correctly', () => {
    cy.pageHeaderShouldBeVisible('Notifications And Feedback');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
  });
});
