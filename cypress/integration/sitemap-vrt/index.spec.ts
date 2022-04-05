import {
  eyesAreEnabled,
  prepareForEyes,
  DEFAULT_CHECK_PARAMS,
  DEFAULT_OPEN_PARAMS,
} from '../../support/utils/applitools';

// ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
describe('Full Site VRT', function () {
  // ℹ️ We are able to reference `this.title` because we have bound this describe block to the Cypress context.
  const testSuiteName = this.title;

  describe('Visual regression tests', () => {
    it('Basic VRT', () => {
      cy.log('[Applitools]: checking if eyes are enabled');

      if (eyesAreEnabled()) {
        cy.log('[Applitools]: Eyes are enabled, proceed with eyes check.');

        // get all docs site pages from the sitemap
        // WORK IN PROGRESS: Replace the pages/page vars with the mockup versions to test a limited set of data
        cy.request('sitemap.xml').then((response) => {
          const pages = cy.$$(response.body).find('loc').toArray();
          // const pages = ['/', '/tokens/', '/components/data-grid/']; // mockup

          const openParams: Partial<Eyes.Open.Options> = {
            ...DEFAULT_OPEN_PARAMS,
            testName: testSuiteName,
          };

          const checkParams: Partial<Eyes.Check.Options> = {
            ...DEFAULT_CHECK_PARAMS,
            tag: `${testSuiteName}`,
          };

          cy.log(`starting eyes with these params: ${openParams}`);
          cy.eyesOpen(openParams);

          // iterate through the sitemap pages
          pages.forEach((pageEl) => {
            // get the current page in the sitemap
            const page = pageEl.innerText.replace('https://paste.twilio.design', '');
            // const page = pageEl; // mockup

            // perform the applitools check
            cy.visit(page);
            prepareForEyes();

            // homepage animation delay
            if (page === '/') {
              cy.wait(3000);
            }

            cy.log(`[Applitools]: Checking window with these params: ${checkParams}`);
            cy.eyesCheckWindow(checkParams);
          });
        });

        cy.eyesClose();
      } else {
        cy.log('[Applitools]: Eyes not enabled, skipping eyes check');
      }

      expect(true).to.equal(true);
    });
  });
});
