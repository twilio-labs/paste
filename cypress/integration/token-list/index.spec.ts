describe('Token list filter', function () {
  beforeEach(() => {
    cy.visit('/tokens');
  });

  it('searches for a background color', () => {
    cy.get('input[name="tokens-filter"]').type('background').should('have.value', 'background');
    cy.get('#background-colors').should('exist');
    cy.get('#border-colors').should('not.exist');
  });

  describe('Visual regression tests', () => {
    /* TODO:
      - full page check or multiple section/region checks
      - need to add check for branch name/batch id for CI runs
    */
    it('Basic VRT', () => {
      const testSuiteName = this.title;
      cy.openTwilioEyes({
        testName: testSuiteName,
        batchName: '[Spike] add vrt with applitools',
      });
      cy.checkTwilioEyes();

      cy.closeTwilioEyes();
    });
  });
});
