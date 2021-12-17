enum EnvironmentVariables {
  Environment = 'ENV',
  UseLocalProxy = 'USE_LOCAL_PROXY',
  SkipApplitools = 'SKIP_APPLITOOLS',
}

const usingLocalProxy = (): boolean => {
  return Cypress.env(EnvironmentVariables.UseLocalProxy) === true;
};

const applitoolsEnabled = (): boolean => {
  if (Cypress.env(EnvironmentVariables.SkipApplitools) === true) {
    return false;
  }

  return !usingLocalProxy();
};

export const openTwilioEyes = (overrides: Partial<Eyes.Open.Options> = {}) => {
  if (applitoolsEnabled()) {
    const params: Eyes.Open.Options = {
      appName: `DSYS - ${Cypress.env('ENV')}`,
      browser: {
        width: 1920,
        height: 1440,
      },
      ...overrides,
    };

    return cy.eyesOpen(params);
  }
  console.log('Local run - _Not_ opening Applitools Eyes');
  return null;
};

export type OpenTwilioEyesFunction = typeof openTwilioEyes;

export const closeTwilioEyes = () => {
  if (applitoolsEnabled()) {
    cy.eyesClose();
  } else {
    console.log('Local run - _Not_ closing Twilio Eyes');
  }
};
export type CloseTwilioEyesFunction = typeof closeTwilioEyes;

export const checkTwilioEyes = (pageTitle: string) => {
  if (applitoolsEnabled()) {
    return cy.eyesCheckWindow(pageTitle);
  }
  console.log('Local run - Skipping Applitools verification');
  return null;
};
export type CheckTwilioEyesFunction = typeof checkTwilioEyes;
