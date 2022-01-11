enum EnvironmentVariables {
  UseCypressEyes = 'USE_CYPRESS_EYES',
  BranchName = 'GITHUB_BRANCH_NAME',
}

export const eyesAreEnabled = (): boolean => {
  const eyesEnabled = Cypress.env(EnvironmentVariables.UseCypressEyes);
  cy.log(`[Applitools]: eyes are ${eyesEnabled ? '' : 'not '}enabled`);
  return Cypress.env(EnvironmentVariables.UseCypressEyes);
};

export const getBranchName = (): string => Cypress.env(EnvironmentVariables.BranchName);
