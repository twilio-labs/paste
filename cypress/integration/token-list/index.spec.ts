import {eyesAreEnabled, DEFAULT_CHECK_PARAMS, DEFAULT_OPEN_PARAMS} from '@utils/applitools';

const AVAILABLE_BACKGROUND_COLOR = 'rgb(20, 176, 83)';

const NEW_CONTENT = 'hello test test test test';

const changeContent = () => {
  cy.get('p')
    .first()
    .then(($el) => {
      $el.append(NEW_CONTENT);
      console.log($el.text());

      cy.wrap($el);
    })
    .contains(NEW_CONTENT)
    .end();
};

const changeElSize = () => {
  cy.get('[data-cy="tokens-table-container"]')
    .then(($el) => {
      $el.css('width', '88px');
      cy.wrap($el);
    })
    .should('have.css', 'width')
    .then((width) => {
      const numericalWidth = Number(((width as unknown) as string)?.replace('px', ''));
      expect(Math.round(numericalWidth)).to.equal(88);
    })
    .end();
};

const changeBackgroundColor = () => {
  cy.get('p')
    .first()
    .then(($el) => {
      $el.css('background-color', AVAILABLE_BACKGROUND_COLOR);

      cy.wrap($el);
    })
    .should('have.css', 'background-color', AVAILABLE_BACKGROUND_COLOR)
    .end();
};

describe('Token list filter', function () {
  // ℹ️ We are able to reference `this.title` because we have bound this describe block to the Cypress context.
  const testSuiteName = this.title;

  const batchId = `local-test-${Date.now()}`;

  // ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
  beforeEach(() => {
    cy.visit('/tokens');
  });

  beforeEach(() => {
    // changeContent();

    // changeBackgroundColor();

    changeElSize();
  });

  it('test actual', () => {
    cy.log('[Applitools]: checking if eyes are enabled');
    if (eyesAreEnabled()) {
      cy.log('[Applitools]: Eyes are enabled, proceed with eyes check.');
      const openParams: Partial<Eyes.Open.Options> = {
        // Match level: "Strict", "Layout"
        // // Will not consider: XXXX"Exact", XXXX"Content"
        matchLevel: 'Layout', // !!!!!!!
        branchName: 'test/website-vrt',
        baselineBranch: 'test/website-vrt',
        batchName: `${batchId}-vrt-website`,
        testName: testSuiteName,
      };

      cy.log(`starting eyes with these params: ${openParams}`);

      cy.eyesOpen(openParams);

      // https://help.applitools.com/hc/en-us/articles/4408368066957-useDom-and-enablePatterns-Flags
      const checkParams: Partial<Eyes.Check.Options> = {
        fully: true,
        ignoreDisplacements: true, // !!!!!!!
        tag: `${testSuiteName}-actual`,
      };

      cy.log(`[Applitools]: Checking window with these params: ${checkParams}`);

      cy.eyesCheckWindow(checkParams);

      cy.eyesClose();
    } else {
      cy.log('[Applitools]: Eyes not enabled, skipping eyes check');
    }
  });
});
