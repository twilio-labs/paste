describe('Notifications-and-feedback patterns documentation page', () => {
  beforeEach(() => {
    cy.visit('/patterns/notifications-and-feedback');
  });

  it('should render the notifications-and-feedback patterns page correctly', () => {
    cy.pageHeaderShouldBeVisible('Notification and feedback patterns');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
  });
});
