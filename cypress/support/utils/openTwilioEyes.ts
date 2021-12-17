export const openTwilioEyes = (overrides: Partial<Eyes.Open.Options> = {}) => {
  const env = Cypress.env('ENV') || 'local';
  console.log({env});
  const params: Eyes.Open.Options = {
    appName: `Docs website - ${env}`,
    browser: {
      width: 1920,
      height: 1080,
      name: 'chrome',
    },
    ...overrides,
  };

  cy.eyesOpen(params);
};
