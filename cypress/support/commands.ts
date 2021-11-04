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
    overviewTableRendersCorrectly(airtableDataAlias: string): Chainable<Subject>;
  }
}

Cypress.Commands.add('pageHeaderShouldBeVisible', (headerText) => {
  cy.contains('h1', headerText).should('be.visible');
});

Cypress.Commands.add('overviewTableRendersCorrectly', (airtableDataAlias: string) => {
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

  return cy.get<{allAirtable: {edges: Record<string, any>[]}}>(airtableDataAlias).then(({allAirtable: {edges}}) => {
    return cy.get('@tableRows').its('length').should('eql', edges.length);
  });
});
