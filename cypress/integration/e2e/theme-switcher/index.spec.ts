describe('Theme switcher', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/');
  });

  it('check the console theme radio', () => {
    cy.get('input[name="sitetheme"]')
      .check('console')
      .should('be.checked');
  });

  it('check the default theme radio', () => {
    cy.get('input[name="sitetheme"]')
      .check('default')
      .should('be.checked');
  });
});
