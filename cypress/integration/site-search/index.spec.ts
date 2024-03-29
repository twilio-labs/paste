describe("Docs website search", () => {
  before(() => {
    cy.visit("/roadmap");
    cy.wait(1000);
  });

  beforeEach(() => {
    cy.intercept({ url: "/api/docs-search", method: "POST" }).as("searchRequest");
  });

  beforeEach(() => {
    cy.get('[data-cy="paste-docsearch-container"] button:visible').as("searchButtonEl");
  });

  it("should handle a search string", () => {
    cy.get("@searchButtonEl").scrollIntoView().should("be.visible").click({ force: true });
    cy.get('[data-cy="paste-docsearch-input"]')
      .should("be.visible")
      .should("be.focused")
      .type("this is a search test")
      .type("{enter}");
    cy.wait("@searchRequest");
    cy.get('[data-cy="paste-docsearch-hits"] h2').should("have.length.above", 0);
  });
});
