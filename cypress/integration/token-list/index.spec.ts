import {
  eyesAreEnabled,
  prepareForEyes,
  DEFAULT_CHECK_PARAMS,
  DEFAULT_OPEN_PARAMS,
} from '../../support/utils/applitools';

// ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
describe('Token list filter with no existing search params', function () {
  // ℹ️ We are able to reference `this.title` because we have bound this describe block to the Cypress context.
  const testSuiteName = this.title;

  beforeEach(() => {
    cy.visit('/tokens');
  });

  it('searches for a background color', () => {
    cy.get('input[name="tokens-filter"]').type('background').should('have.value', 'background');
    cy.get('#background-colors').should('exist');
    cy.get('#border-colors').should('not.exist');
  });

  it('shows empty state', () => {
    cy.get('input[name="tokens-filter"]').type('abc');
    cy.get('[data-cy="tokens-empty-state"]').should('exist');
    cy.get('img[src="/images/patterns/empty-no-results-found.png"]').should('exist');
  });

  describe('Visual regression tests', () => {
    it('Basic VRT', () => {
      cy.log('[Applitools]: checking if eyes are enabled');

      if (eyesAreEnabled()) {
        cy.log('[Applitools]: Eyes are enabled, proceed with eyes check.');
        prepareForEyes();

        const openParams: Partial<Eyes.Open.Options> = {
          ...DEFAULT_OPEN_PARAMS,
          testName: testSuiteName,
        };

        cy.log(`starting eyes with these params: ${openParams}`);

        cy.eyesOpen(openParams);

        const checkParams: Partial<Eyes.Check.Options> = {
          ...DEFAULT_CHECK_PARAMS,
          tag: `${testSuiteName}-basic-page-check`,
        };

        cy.log(`[Applitools]: Checking window with these params: ${checkParams}`);

        cy.eyesCheckWindow(checkParams);

        cy.eyesClose();
      } else {
        cy.log('[Applitools]: Eyes not enabled, skipping eyes check');
      }
      expect(true).to.equal(true);
    });
  });
});
