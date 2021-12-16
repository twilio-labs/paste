describe('Docs website search', () => {
  let searchTerm = '';
  before(() => {
    // TESTING: Testing if using "cy.visit" ensure that the assets load before running the tests.
    cy.visit('/');
  });

  beforeEach(() => {
    cy.server();
    cy.route({url: 'https://*.algolia.net/**', method: 'POST'}).as('searchRequest');
  });

  beforeEach(() => {
    cy.get('[data-cy="paste-docs-search-input"]').as('searchInputEl');
  });

  'dsys'.split('').forEach(async (letter) => {
    await it(`should handle search new letter "${letter}"`, () => {
      cy.get('@searchInputEl').should('be.visible').click().should('have.focus').type(letter);

      searchTerm += letter;

      cy.get('@searchInputEl').should('have.attr', 'value', searchTerm);

      cy.wait('@searchRequest');

      cy.get('[id*="algolia-autocomplete-listbox"]')
        .should('be.visible')
        .find('[role="option"]')
        // Simple check for now, that the box contains some results.
        .should('have.length.above', 0);
    });
  });
});
