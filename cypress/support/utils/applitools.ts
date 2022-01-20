enum EnvironmentVariables {
  UseCypressEyes = 'USE_CYPRESS_EYES',
}

export const DEFAULT_OPEN_PARAMS: Partial<Eyes.Open.Options> = {
  baselineBranch: 'default',
  matchLevel: 'Layout',
};

export const DEFAULT_CHECK_PARAMS: Partial<Eyes.Check.Options> = {ignoreDisplacements: true, useDom: true, fully: true};

export const eyesAreEnabled = (): boolean => {
  const eyesEnabled = Cypress.env(EnvironmentVariables.UseCypressEyes);
  cy.log(`[Applitools]: eyes are ${eyesEnabled ? '' : 'not '}enabled`);
  return Cypress.env(EnvironmentVariables.UseCypressEyes);
};
