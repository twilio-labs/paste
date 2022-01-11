import '@applitools/eyes-cypress/commands';

import {getBranchName, eyesAreEnabled} from '@utils/applitools';

/**
 * @file Custom parent commands
 * @description commands that are not chained off of a previous command
 * @example <caption>For a login command that does not chain off of a parent</caption>
 * `Cypress.Commands.add("login", (email, password) => { ... })`
 * @see https://on.cypress.io/custom-commands#Parent-Commands
 */

Cypress.Commands.add('getDocsPageContentArea', () => cy.get('#paste-docs-content-area'));

Cypress.Commands.add('pageHeaderShouldBeVisible', (headerText) => {
  cy.contains('h1', headerText).should('be.visible');
});

Cypress.Commands.add('overviewTableRendersCorrectly', () => {
  cy.get('table').first().as('componentsTable').should('be.visible');
  cy.get('@componentsTable').find('thead').find('tr').find('th').as('overviewTableHeaders');
  cy.get('@componentsTable').find('tbody').find('tr').as('tableRows');

  // Table has correct number of headers
  cy.get('@overviewTableHeaders').should('have.length', 6);

  // Table has correct text for headers
  const headers = ['Name', 'Status', 'Code ready', 'Design assets', 'Documentation', 'Peer review'];
  cy.get('@overviewTableHeaders').each((header, index) => {
    // using include here to do a loose match of headers
    cy.wrap(header).should('include.text', headers[index]);
  });

  // verify at least one row is rendered.
  cy.get('@tableRows').its('length').should('be.greaterThan', 0);
});

Cypress.Commands.add('checkInPageNavigationLinks', () => {
  cy.getDocsPageContentArea().as('contentArea');

  cy.get('@contentArea').find('[data-cy="page-aside-anchor"]').as('pageAsideAnchors');

  cy.get('@contentArea')
    .find(
      '[data-cy="anchored-heading-h2"]:not(#component-changelog a),[data-cy="anchored-heading-h3"]:not(#component-changelog a)'
    )
    .as('anchoredHeadings');

  cy.get('@pageAsideAnchors').then((anchors) => {
    cy.get('@anchoredHeadings').each((anchor, idx) => {
      cy.wrap(anchor).should('have.attr', 'href').and('include', '#');
      cy.wrap(anchors[idx]).should('have.attr', 'href').and('include', '#').and('eql', anchor.attr('href'));
    });
  });
});

// @TODO Check ComponentHeader <--- waiting for changes to this component to be merged.
// Cypress.Commands.add('checkComponentHeader', () => {});

Cypress.Commands.add('checkPageAside', () => {
  cy.getDocsPageContentArea().getInFixedContainer('[data-cy="page-aside"]').as('pageAside');
  cy.get('@pageAside').find('[data-cy="table-of-contents"]').should('be.visible');
  cy.get('@pageAside').contains('button', 'Rate this page').should('be.visible');
  cy.get('@pageAside').find('[data-cy="page-aside-anchor"]').should('be.visible');
});

Cypress.Commands.add('checkLivePreviews', () => {
  cy.getDocsPageContentArea().find('[data-cy="live-preview"]').should('have.length.above', 0);
});

Cypress.Commands.add('checkDoDonts', () => {
  cy.getDocsPageContentArea().find('[data-cy="do-dont-container"]').and('have.length.above', 0);
  cy.getDocsPageContentArea().find('[data-cy="do-box"]').and('have.length.above', 0);
  cy.getDocsPageContentArea().find('[data-cy="dont-box"]').and('have.length.above', 0);
});

Cypress.Commands.add('checkChangelogRevealer', () => {
  cy.getInFixedContainer('#component-changelog')
    .as('changelogContainer')
    .contains('h2', 'Changelog')
    .should('be.visible')
    .click(); // Note: when cypress is upgraded, we can specify ScrollBehavior here to center if not default

  cy.get('@changelogContainer').find('[data-cy="changelog-revealer-content"]').should('be.visible');
});

Cypress.Commands.add('getInFixedContainer', (selector) => {
  cy.get(selector).as('target');

  return cy
    .get('@target')
    .invoke('innerHeight')
    .then((height) => {
      return cy.get('@target').scrollIntoView({offset: {top: (height as number) / 2, left: 0}, ensureScrollable: true});
    });
});

Cypress.Commands.add('openTwilioEyes', (overrides = {}) => {
  cy.log('checking if eyes are enabled');
  if (eyesAreEnabled()) {
    cy.log('eyes are enabled!');
    const params: Partial<Eyes.Open.Options> = {
      appName: '[DSYS] - Paste Website',
      browser: {
        width: 1920,
        height: 1440,
      },
      branch: getBranchName(),
      baselineBranch: 'default',
      matchLevel: 'Layout',
      ...overrides,
    };

    cy.log(`starting eyes with these arguments: ${params}`);

    cy.eyesOpen(params);
  }
});

Cypress.Commands.add('checkTwilioEyes', (overrides = {}) => {
  const checkOptions = {ignoreDisplacements: true, useDom: true, ...overrides};
  if (eyesAreEnabled()) {
    cy.eyesCheckWindow(checkOptions);
  }
});
Cypress.Commands.add('closeTwilioEyes', () => {
  if (eyesAreEnabled()) {
    cy.eyesClose();
  }
});
