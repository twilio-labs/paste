// ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
describe('Token list filter with no existing search params', function () {
  // ℹ️ We are able to reference `this.title` because we have bound this describe block to the Cypress context.
  const testSuiteName = this.title;

  beforeEach(() => {
    cy.visit('/tokens/list');
  });

  it('searches for a background color', () => {
    cy.get('input[name="tokens-filter"]').type('background').should('have.value', 'background');
    cy.get('#background-colors').should('exist');
    cy.get('#border-colors').should('not.exist');
  });

  it('shows empty state', () => {
    cy.get('input[name="tokens-filter"]').type('abc');
    cy.get('[data-cy="tokens-empty-state"]').should('exist');
    cy.get('[data-cy="tokens-empty-state"] h3').should('have.text', `Oh no! We couldn't find any matches`);
  });

  describe('Visual regression tests', () => {
    it('Basic VRT', () => {
      cy.visualRegressionTestUrl({url: '/tokens/list', testName: `${testSuiteName}-basic-page-check`});
    });
  });
});
