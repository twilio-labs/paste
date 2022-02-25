enum EnvironmentVariables {
  UseCypressEyes = 'USE_CYPRESS_EYES',
}

const prNumber = process.env.PR_NUMBER;
const prTitle = process.env.PR_TITLE;

export const DEFAULT_OPEN_PARAMS: Partial<Eyes.Open.Options> = {
  batchName: prNumber ? `Paste: #${prNumber} - ${prTitle}` : 'Paste: Local Run',
};

export const DEFAULT_CHECK_PARAMS: Partial<Eyes.Check.Options> = {
  target: 'region',
  selector: {
    type: 'css',
    selector: '#styled-site-body',
  },
  fully: true,
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

/**
 * Applitools has a problem w/ capturing with smooth scroll behavior.
 * This will unset smooth scrolling so Applitools can do a proper capture.
 */
export const prepareForEyes = () => {
  cy.document().then((document) => {
    const styledSiteBody = document.getElementById('styled-site-body');
    if (styledSiteBody) {
      styledSiteBody.style.scrollBehavior = 'auto';
    }
  });
};
