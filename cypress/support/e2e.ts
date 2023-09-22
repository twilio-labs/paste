// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import "@percy/cypress";

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on("uncaught:exception", (err) => {
  /* returning false here prevents Cypress from failing the test
  Benign error occurs when an observer takes longer than one frame to execute, like
  in the case of disclosures opening on the website sidebar.
  See: https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
  */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});
