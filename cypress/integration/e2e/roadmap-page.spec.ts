describe("Roadmap Page", () => {
  beforeEach(() => {
    cy.visit("/roadmap");
  });

  it("should render the future and current release table(s)", () => {
    cy.get('[data-cy^="release-container"]').its("length").should("be.greaterThan", 0);
  });

  it("should load the roadmap correctly", () => {
    cy.get('[data-cy^="release-container"]').as("release-containers");

    cy.get("@release-containers").each((container) => {
      cy.wrap(container).find("h2").should("exist");
      cy.wrap(container).find("table").should("exist");
      cy.wrap(container)
        .find("table")
        .find("thead")
        .find("tr")
        .find("th")
        .as("table-headers")
        .its("length")
        .should("eql", 3);
      const expectedHeaders = ["Feature", "Description", "Status"];
      cy.get("@table-headers").each((headerEl, idx) => {
        expect(headerEl.text()).to.eql(expectedHeaders[idx]);
      });
    });
  });

  it("should render in page navigation correctly", () => {
    cy.checkInPageNavigationLinks();
  });
});
