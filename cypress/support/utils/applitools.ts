enum EnvironmentVariables {
  UseCypressEyes = 'USE_CYPRESS_EYES',
}

export const DEFAULT_OPEN_PARAMS: Partial<Eyes.Open.Options> = {
  baselineBranch: 'default',
  matchLevel: 'Layout',
};
// https://help.applitools.com/hc/en-us/articles/4408368066957-useDom-and-enablePatterns-Flags
export const DEFAULT_CHECK_PARAMS: Partial<Eyes.Check.Options> = {fully: true, useDom: true, enablePatterns: true};

export const eyesAreEnabled = (): boolean => {
  const eyesEnabled = Cypress.env(EnvironmentVariables.UseCypressEyes);
  cy.log(`[Applitools]: eyes are ${eyesEnabled ? '' : 'not '}enabled`);
  return Cypress.env(EnvironmentVariables.UseCypressEyes);
};
