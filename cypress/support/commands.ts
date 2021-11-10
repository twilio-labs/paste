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
    overviewTableRendersCorrectly(): void;
    checkInPageNavigationLinks(): void;
  }
}

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
  cy.get('#paste-docs-content-area').as('contentArea');

  cy.get('@contentArea').find('[data-cy="page-aside-anchor"]').as('pageAsideAnchors');
  cy.get('@contentArea')
    .find('[data-cy*="anchored-heading-h2"], [data-cy*="anchored-heading-h3"]')
    .as('anchoredHeadings');

  cy.get('@pageAsideAnchors').then((anchors) => {
    cy.get('@anchoredHeadings').each((anchor, idx) => {
      cy.wrap(anchor).should('have.attr', 'href').and('include', '#');
      cy.wrap(anchors[idx]).should('have.attr', 'href').and('include', '#').and('eql', anchor.attr('href'));
    });
  });
});
