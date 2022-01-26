enum EnvironmentVariables {
  UseCypressEyes = 'USE_CYPRESS_EYES',
}

export const DEFAULT_OPEN_PARAMS: Partial<Eyes.Open.Options> = {
  // ℹ️ Instructs matching algorithm to verify layout only.
  // Read more: https://help.applitools.com/hc/en-us/articles/360007188591-Match-Levels
  matchLevel: 'Layout',
};

export const DEFAULT_CHECK_PARAMS: Partial<Eyes.Check.Options> = {
  // ℹ️ Distinguish between mismatches that are caused by content that has moved on the page,
  // as opposed to content that is new, missing, or has changed.
  // Read more: https://applitools.com/docs/api/eyes-sdk/classes-gen/class_configuration/method-configuration-setignoredisplacements-imagesappkit-objectivec.html
  ignoreDisplacements: true,
};

/** eyesAreEnabled: Extract environment variable for eyes usage
 * @returns boolean
 */
export const eyesAreEnabled = (): boolean => {
  const eyesEnabled = Cypress.env(EnvironmentVariables.UseCypressEyes);
  cy.log(`[Applitools]: eyes are ${eyesEnabled ? '' : 'not '}enabled`);
  return Cypress.env(EnvironmentVariables.UseCypressEyes);
};

/** Get partial config for local configuration run
 * @returns Partial<Eyes.Options.Check>
 */
export const getLocalRunConfig = () => ({
  branchName: 'test/website-vrt',
  baselineBranch: 'test/website-vrt',
  batchName: `${Date.now()}-vrt-website`,
});

// Debugging utilities
const AVAILABLE_BACKGROUND_COLOR = 'rgb(20, 176, 83)';
const NEW_CONTENT = 'hello test test test test';

export const changeContent = () => {
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

export const changeElSize = () => {
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

export const changeBackgroundColor = () => {
  cy.get('p')
    .first()
    .then(($el) => {
      $el.css('background-color', AVAILABLE_BACKGROUND_COLOR);

      cy.wrap($el);
    })
    .should('have.css', 'background-color', AVAILABLE_BACKGROUND_COLOR)
    .end();
};
