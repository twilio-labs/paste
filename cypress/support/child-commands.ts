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
     * Asserts that element should be visible.
     *
     * @returns `Chainable<Subject>`
     * @alias `should('be.visible')`
     * @example cy.get('[data-cy="my-selector"]').shouldBeVisible();
     */
    shouldBeVisible(): Chainable<Subject>;

    /**
     * Asserts that element has correct attribute with expected value.
     *
     * @param {string} key
     * @param {string} value
     * @alias `should('have.attr')`
     * @example cy.get('[data-cy="my-selector"]').shouldHaveAttribute('href', '#overview');
     */
    shouldHaveAttribute(key: string, value: any): void;
  }
}

Cypress.Commands.add('shouldBeVisible', {prevSubject: 'element'}, (subject) => {
  cy.wrap(subject).should('be.visible');
});

Cypress.Commands.add('shouldHaveAttribute', {prevSubject: 'element'}, (subject, attribute, value) => {
  cy.wrap(subject).should('have.attr', attribute, value);
});
