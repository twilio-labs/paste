describe('Token list filter', () => {
  beforeEach(() => {
    cy.visit('/tokens', {timeout: 10000});
  });

  it('searches for a background color', () => {
    cy.get('input[name="tokens-filter"]')
      .type('background')
      .should('have.value', 'background');
    cy.get('#background-colors').should('exist');
    cy.get('#border-colors').should('not.exist');
  });
});
