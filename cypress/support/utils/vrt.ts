enum EnvironmentVariables {
  UseCypressVRT = 'USE_CYPRESS_VRT',
}

export const DEFAULT_VRT_OPTIONS = {};

/** vrtIsEnabled: Extract environment variable for vrt usage
 * @returns boolean
 */
export const vrtIsEnabled = (): boolean => {
  const vrtEnabled = Cypress.env(EnvironmentVariables.UseCypressVRT);
  cy.log(`[VRT]: VRT is ${vrtEnabled ? '' : 'not '}enabled`);
  return Cypress.env(EnvironmentVariables.UseCypressVRT);
};

/**
 * VRT has a problem w/ capturing with smooth scroll behavior.
 * This will unset smooth scrolling so VRT can do a proper capture.
 */
export const prepareForVRT = () => {
  cy.document().then((document) => {
    const styledSiteBody = document.getElementById('styled-site-body');
    if (styledSiteBody) {
      styledSiteBody.style.scrollBehavior = 'auto';
    }
  });
};
