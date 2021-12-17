export const standardViewport = {
  width: 1600,
  height: 1800,
};

describe('Overview page', () => {
  beforeEach(() => {
    cy.visit('/components');
  });

  it('should render the components overview page correctly', () => {
    cy.pageHeaderShouldBeVisible('Components');

    cy.overviewTableRendersCorrectly();
  });

  it('test eyes', () => {
    cy.openTwilioEyes({
      batchName: 'Testing testing',
      testName: 'Test eyes',
      browser: standardViewport,
    });

    cy.visit('/components');

    cy.checkTwilioEyes({
      tag: 'testing testing testing',
    });

    cy.wait(500);

    cy.closeTwilioEyes();
  });
});
