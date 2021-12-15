const NO_RESULT = 'no_result';

const addQueryMetaData = ({query, result}) => {
  const [results] = result.results;

  return {results: [{...results, query, params: `query=${query}&hitsPerPage=5`}]};
};
const extractRequestParams = (parsedBody) => Cypress._.get(parsedBody, 'requests[0].params');
const extractHits = (xhr) => Cypress._.get(xhr, 'response.body.results[0].hits', []);

const testSearch = (searchPhrase) => {
  const searchPhraseCopy = searchPhrase.slice();

  searchPhraseCopy.split('').forEach((letter) => {
    cy.get('@inputText').then((current) => {
      cy.wrap(current + letter).as('inputText');
    });

    cy.get<string>('@inputText').then((inputText) => {
      cy.get('[data-cy="paste-docs-search-input"]').should('be.visible').as('searchInput');

      cy.get('@searchInput')
        .then(($inputEl) => {
          const hasFocus = $inputEl.is(':focus');

          return hasFocus ? cy.wrap($inputEl) : cy.wrap($inputEl).focus();
        })
        .should('have.focus')
        .type(letter);

      cy.wait('@searchRequest').then((xhr) => {
        const body = JSON.parse(Cypress._.get(xhr, 'request.body', '{}'));
        const searchParamString = extractRequestParams(body);

        cy.verifyExpectedQuery(searchParamString, {query: inputText});

        const hits = extractHits(xhr);

        cy.get('[id*="algolia-autocomplete-listbox"]')
          .should('be.visible')
          .find('[role="option"]')
          .should('have.length', hits.length);
      });
    });
  });
};

describe('Docs website search', () => {
  beforeEach(() => {
    // Start an XHR server with the built-in cypress utilities.
    cy.server();

    cy.route('/**/**/page-data.json').as('pageDataResponse');
    cy.visit('/');
    // Wait for the JS assets to load since they are necessary for the search functionality.
    cy.wait('@pageDataResponse');

    cy.fixture('./search.json').then((data) => {
      // Note: When we upgrade to >= 6.0.0 we can use .intercept
      // "Cypress.Chainable.route2" is the early preview of their new(er) intercept and stubbing utility
      // It is advantageous over the legacy Cypress.Chainable.route here because it allows us to gracefully intercept a response and modify the body dynamically

      // Note: Unfortunately our current version of Cypress does not allow us to fully stub responses using these utilities, so the XHR is actaully being sent to the search service
      // In the future we can configure this so that it does not send a request the service.
      cy.route2({pathname: '/1/indexes/*/queries', method: 'POST'}, (req) => {
        const {body: jsonBody, reply} = req;

        // For now, this is a bit dense, but in future version of Cypress this body parsing has been improved as well. For now, there are utilities above to assist.
        const searchString = extractRequestParams(JSON.parse(jsonBody));
        const parsedParams = new URLSearchParams(searchString);

        // Use the empty hits response fixture if there is not a parameter "query" in POST body
        const queryString = parsedParams.get('query') != null ? parsedParams.get('query') : NO_RESULT;

        // Use the empty hits response fixture if the query key is not in the fixture (e.g. no matches on the search)
        const final = addQueryMetaData({query: queryString, result: data[queryString] || data[NO_RESULT]});

        reply((res) => {
          res.send(final);
        });
      }).as('searchRequest');
    });

    // Create alias to store the input text for our tests
    cy.wrap('').as('inputText');
  });

  it.skip('should handle search (basic)', () => {
    testSearch('hello');
  });

  it('should handle search (for no results)', () => {
    testSearch('?!$%^');
  });
});
