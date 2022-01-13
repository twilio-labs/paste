enum EnvironmentVariables {
  UseCypressEyes = 'USE_CYPRESS_EYES',
  BranchName = 'GITHUB_BRANCH_NAME',
  BatchName = 'BATCH_NAME',
}

export const DEFAULT_OPEN_PARAMS = {
  appName: '[DSYS] - Paste Website',
  browser: {
    width: 1920,
    height: 1440,
  },
  baselineBranch: 'default',
  matchLevel: 'Layout',
};

export const DEFAULT_CHECK_PARAMS = {ignoreDisplacements: true, useDom: true};

export const eyesAreEnabled = (): boolean => {
  const eyesEnabled = Cypress.env(EnvironmentVariables.UseCypressEyes);
  cy.log(`[Applitools]: eyes are ${eyesEnabled ? '' : 'not '}enabled`);
  return Cypress.env(EnvironmentVariables.UseCypressEyes);
};

export const getBatchName = (): string => Cypress.env(EnvironmentVariables.BatchName);

export const getBranchName = (): string => Cypress.env(EnvironmentVariables.BranchName);
