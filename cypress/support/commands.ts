// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    pageHeaderShouldBeVisible(headerText: string): void;
    shouldBeVisible(): Chainable<Subject>;
    shouldHaveAttribute(key: string, value: any): void;
    getInFixedContainer(selector: string): Chainable<Subject>;
    overviewTableRendersCorrectly(): void;
    checkInPageNavigationLinks(): void;
    getDocsPageContentArea(): Chainable<Subject>;
    checkPageAside(): void;
    checkLivePreviews(): void;
    checkDoDonts(): void;
    checkChangelogRevealer(): void;
  }
}

Cypress.Commands.add('getDocsPageContentArea', () => cy.get('#paste-docs-content-area'));

Cypress.Commands.add('pageHeaderShouldBeVisible', (headerText) => {
  cy.contains('h1', headerText).shouldBeVisible();
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
  cy.get('@pageAside').find('[data-cy="table-of-contents"]').shouldBeVisible();
  cy.get('@pageAside').contains('button', 'Rate this page').shouldBeVisible();
  cy.get('@pageAside').find('[data-cy="page-aside-anchor"]').shouldBeVisible();
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
    .shouldBeVisible()
    .click();

  // cy.get('@changelogContainer').find('[data-cy="changelog-revealer-content"]').should('be.visible');
  cy.get('@changelogContainer').find('[data-cy="changelog-revealer-content"]').shouldBeVisible();
});

Cypress.Commands.add('getInFixedContainer', (selector) => {
  cy.get(selector).as('target');

  return cy
    .get('@target')
    .invoke('innerHeight')
    .then((height) => {
      return cy.get('@target').scrollIntoView({offset: {top: (height as number) / 2, left: 0}});
    });
});

Cypress.Commands.add('shouldBeVisible', {prevSubject: 'element'}, (subject) => {
  cy.wrap(subject).should('be.visible');
});

Cypress.Commands.add('shouldHaveAttribute', {prevSubject: 'element'}, (subject, attribute, value) => {
  cy.wrap(subject).should('have.attr', attribute, value);
});
