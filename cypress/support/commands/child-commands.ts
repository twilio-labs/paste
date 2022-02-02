/**
 * @file Custom child commands
 * @description commands that are chained off of a previous command (e.g. require a parent to be chained off of)
 * @example <caption>Of a drag command whose target is a previous element</caption>
 * `Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })`
 * @see https://on.cypress.io/custom-commands#Child-Commands
 */
