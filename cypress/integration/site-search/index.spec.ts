describe('Docs website search', () => {
  beforeEach(() => {
    cy.server();

    cy.route({
      method: 'POST',
      url: 'https://bh4d9od16a-dsn.algolia.net/1/indexes/*/**',
    }).as('searchRequest');

    cy.wrap('').as('inputText');

    cy.visit('/');
  });

  it('should handle search (basic)', () => {
    const searchPhrase = 'hello';

    searchPhrase.split('').forEach((letter) => {
      cy.get('@inputText').then((current) => {
        cy.wrap(current + letter).as('inputText');
      });

      cy.get<string>('@inputText').then((inputText) => {
        cy.get('[data-cy="paste-docs-search-input"]').shouldBeVisible().as('searchInput');

        cy.get('@searchInput')
          .then(($inputEl) => {
            const hasFocus = $inputEl.is(':focus');

            if (hasFocus) {
              return cy.wrap($inputEl);
            }

            return cy.wrap($inputEl).focus();
          })
          .should('have.focus')
          .type(letter);

        cy.wait('@searchRequest').then((data) => {
          const searchParamString = Cypress._.get(data, 'request.body.requests[0].params', '');

          cy.verifyExpectedQuery(searchParamString, {query: inputText});

          const hits = Cypress._.get(data, 'response.body.results[0].hits', []);

          cy.get('[id*="algolia-autocomplete-listbox"]')
            .should('be.visible')
            .find('[role="option"]')
            .should('have.length', hits.length);
        });
      });
    });
  });

  it('should handle search (for no results)', () => {
    const searchPhrase = '?!$%^';

    searchPhrase.split('').forEach((letter) => {
      cy.get('@inputText').then((current) => {
        cy.wrap(current + letter).as('inputText');
      });

      cy.get<string>('@inputText').then((inputText) => {
        cy.get('[data-cy="paste-docs-search-input"]').shouldBeVisible().as('searchInput');

        cy.get('@searchInput')
          .then(($inputEl) => {
            const hasFocus = $inputEl.is(':focus');

            if (hasFocus) {
              return cy.wrap($inputEl);
            }

            return cy.wrap($inputEl).focus();
          })
          .should('have.focus')
          .type(letter);

        cy.wait('@searchRequest').then((data) => {
          const searchParamString = Cypress._.get(data, 'request.body.requests[0].params', '');

          cy.verifyExpectedQuery(searchParamString, {query: inputText});

          const hits = Cypress._.get(data, 'response.body.results[0].hits', []);

          cy.get('[id*="algolia-autocomplete-listbox"]')
            .should('be.visible')
            .find('[role="option"]')
            .should('have.length', hits.length);
        });
      });
    });
  });
});
