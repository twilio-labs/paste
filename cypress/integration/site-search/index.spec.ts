const resetString = (string) => string.slice(0, string.length - 2);

describe('Docs website search', () => {
  let searchTerm = '';
  before(() => {
    cy.visit('/');
    cy.wait(500);
  });

  beforeEach(() => {
    cy.server();
    cy.route({url: 'https://**.algolia.net/**', method: 'POST'}).as('searchRequest');
  });

  beforeEach(() => {
    cy.get('[data-cy="paste-docs-search-input"]').as('searchInputEl');
  });

  beforeEach(() => {
    cy.get('@searchInputEl').then(($inputEl) => {
      // Is this test "re-trying", if so, we should reset the test state.
      // https://docs.cypress.io/guides/guides/test-retries#Can-I-access-the-current-attempt-counter-from-the-test
      const shouldResetTestState = Cypress._.get(cy.state('test'), '_currentRetry', 0);

      if (shouldResetTestState !== 0) {
        // remove last character from input
        cy.wrap($inputEl).type('{backspace}');
        // remove the  last character from our saved value
        searchTerm = resetString(searchTerm);
      }
    });
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
