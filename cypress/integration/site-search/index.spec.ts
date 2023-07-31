describe('Docs website search', () => {
  before(() => {
    cy.visit('/roadmap');
    cy.wait(1000);
  });

  beforeEach(() => {
    cy.intercept({url: 'https://**.algolia.net/**', method: 'POST'}).as('searchRequest');
  });

  beforeEach(() => {
    cy.get('[data-cy="paste-docsearch-container"] button:visible').as('searchButtonEl');
  });

  it('should handle a search string', () => {
    cy.get('@searchButtonEl').scrollIntoView().should('be.visible').click({force: true});
    cy.get('.DocSearch-Input').should('be.visible').should('be.focused').type('checkbox');
    cy.wait('@searchRequest');
    cy.get('.DocSearch-Hits').should('have.length.above', 0);
    cy.get('.DocSearch-Hits [role="listbox"]').should('have.length.above', 0);
    cy.get('.DocSearch-Hits [role="option"]').should('have.length.above', 0);
  });
});
