/**
 * @file Custom dual commands
 * @description A command that allows for, but does not require, chaining off of a previous command
 * @example <caption>Dismiss element if found</caption>
 * `Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })`
 * @see https://on.cypress.io/custom-commands#Dual-Commands
 */
