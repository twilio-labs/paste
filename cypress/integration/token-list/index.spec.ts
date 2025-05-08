// ℹ️ If we use anon functions instead of arrow functions, we can leverage Mocha's context and pull the test name directly from this
describe("Token list filter with no existing search params", function () {
  // ℹ️ We are able to reference `this.title` because we have bound this describe block to the Cypress context.
  const testSuiteName = this.title;

  beforeEach(() => {
    cy.visit("/tokens/list");
  });

  describe("Visual regression tests", () => {
    it("Basic VRT", () => {
      cy.visualRegressionTestUrl({ url: "/tokens/list", testName: `${testSuiteName}-basic-page-check` });
    });
  });
});

describe("Token list filter format control and theme control", function () {
  beforeEach(() => {
    cy.visit("/tokens/list");
  });

  it("controls format of token name (default = css)", () => {
    const tokenNode = cy.get('[data-cy="tokens-table-container"] li:first dt [data-paste-element="TEXT"]');
    cy.get('[data-cy="format-control"]').should("have.value", "css");
    cy.wait(300);
    tokenNode.contains(/^[$]/);
    tokenNode.contains(/[^A-Z]/);
  });

  it("controls format of token name (Javascript)", () => {
    const tokenNode = cy.get('[data-cy="tokens-table-container"] li:first dt [data-paste-element="TEXT"]');
    cy.get('[data-cy="format-control"]').select("javascript").should("have.value", "javascript");
    cy.wait(300);
    tokenNode.contains(/^[a-z]/);
    tokenNode.contains(/[^$-]/);
  });

  it("controls format of token name (CSS)", () => {
    const tokenNode = cy.get('[data-cy="tokens-table-container"] li:first dt [data-paste-element="TEXT"]');
    cy.get('[data-cy="format-control"]').select("css").should("have.value", "css");
    cy.wait(300);
    tokenNode.contains(/^[$]/);
    tokenNode.contains(/[^A-Z]/);
  });

  it("controls the theme of filtered tokens", () => {
    cy.get('[data-cy="theme-control"]').select("dark").should("have.value", "dark");
    cy.get('[data-cy="tokens-table-container"] li:first dd [data-paste-element="TEXT"]:first').should(
      "include.text",
      "rgb(24, 37, 60)",
    );
    cy.get('[data-cy="theme-control"]').select("default").should("have.value", "default");
    cy.get('[data-cy="tokens-table-container"] li:first dd [data-paste-element="TEXT"]:first').should(
      "include.text",
      "rgb(244, 244, 246)",
    );
  });

  it("has a responsive layout", () => {
    cy.get('[data-cy="input-column"]').should("have.css", "min-width", "0px");
    cy.viewport("iphone-x");
    cy.get('[data-cy="input-column"]').should("have.css", "min-width", "100%");
  });
});

describe("Token Card", function () {
  beforeEach(() => {
    cy.visit("/tokens/list");
  });

  it("has a responsive layout", () => {
    cy.get("[data-paste-element=TOKEN_CARD] dd").should("have.css", "display", "flex");
    cy.get("[data-paste-element=TOKEN_CARD] dd ul").should("have.css", "maxWidth", "192px");
    cy.viewport("iphone-x");
    cy.get("[data-paste-element=TOKEN_CARD] dd").should("have.css", "display", "block");
    cy.get("[data-paste-element=TOKEN_CARD] dd ul").should("have.css", "maxWidth", "none");
  });
});
