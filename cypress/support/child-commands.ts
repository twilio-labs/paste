/**
 * @file Custom child commands
 * @description commands that are chained off of a previous command (e.g. require a parent to be chained off of)
 * @example <caption>Of a drag command whose target is a previous element</caption>
 * `Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })`
 * @see https://on.cypress.io/custom-commands#Child-Commands
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Asserts that element has correct attribute with expected value.
     *
     * @param {string} key
     * @param {string} value
     * @alias `should('have.attr')`
     * @example cy.get('[data-cy="my-selector"]').shouldHaveAttribute('href', '#overview');
     */
    shouldHaveAttribute(subject: Chainable<Subject>, key: string, value: any): void;
  }
}

Cypress.Commands.add('shouldHaveAttribute', {prevSubject: 'element'}, (subject, attribute, value) => {
  return cy.wrap(subject).should('have.attr', attribute, value);
});
