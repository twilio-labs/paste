// ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
describe('Landing Page', function () {
  // ℹ️ We are able to reference `this.title` because we have bound this describe block to the Cypress context.
  const testSuiteName = this.title;

  describe('Visual regression tests', () => {
    it('Basic VRT', () => {
      cy.visualRegressionTestUrl({url: '/', testName: `${testSuiteName}-landing-page-check`});
    });
  });
});
