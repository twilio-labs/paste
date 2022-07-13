// ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
describe('Token list filter with no existing search params', function () {
  // ℹ️ We are able to reference `this.title` because we have bound this describe block to the Cypress context.
  const testSuiteName = this.title;

  beforeEach(() => {
    cy.visit('/tokens/list');
  });

  // Todo: uncomment search filter tests when filter work is done

  //   it('searches for a background color', () => {
  //     cy.get('input[name="tokens-filter"]').type('background').should('have.value', 'background');
  //     cy.get('#background-colors').should('exist');
  //     cy.get('#border-colors').should('not.exist');
  //   });

  //   it('shows empty state', () => {
  //     cy.get('input[name="tokens-filter"]').type('abc');
  //     cy.get('[data-cy="tokens-empty-state"]').should('exist');
  //     cy.get('[data-cy="tokens-empty-state"] h3').should('have.text', `Oh no! We couldn't find any matches`);
  //   });

  describe('Visual regression tests', () => {
    it('Basic VRT', () => {
      cy.visualRegressionTestUrl({url: '/tokens/list', testName: `${testSuiteName}-basic-page-check`});
    });
  });
});

describe('Token list filter format control and theme control', function () {
  beforeEach(() => {
    cy.visit('/tokens/list');
  });

  it('controls format of token name', () => {
    cy.get('[data-cy="format-control"]').select('javascript').should('have.value', 'javascript');
    cy.get('[data-cy="tokens-table-container"] li:first dt [data-paste-element="TEXT"]').contains(/^[a-z]/);
    cy.get('[data-cy="tokens-table-container"] li:first dt [data-paste-element="TEXT"]').contains(/[^$-]/);
    cy.get('[data-cy="format-control"]').select('css').should('have.value', 'css');
    cy.get('[data-cy="tokens-table-container"] li:first dt [data-paste-element="TEXT"]').contains(/^[$]/);
    cy.get('[data-cy="tokens-table-container"] li:first dt [data-paste-element="TEXT"]').contains(/[^A-Z]/);
  });

  it('controls the theme of filtered tokens', () => {
    cy.get('[data-cy="theme-control"]').select('dark').should('have.value', 'dark');
    cy.get('[data-cy="tokens-table-container"] li:first dd [data-paste-element="TEXT"]:first').should(
      'include.text',
      'rgb(18, 28, 45)'
    );
    cy.get('[data-cy="theme-control"]').select('default').should('have.value', 'default');
    cy.get('[data-cy="tokens-table-container"] li:first dd [data-paste-element="TEXT"]:first').should(
      'include.text',
      'rgb(244, 244, 246)'
    );
  });
});
