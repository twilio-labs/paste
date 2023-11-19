describe("OpenGraph Cards", () => {
  it("renders opengraph cards correctly", () => {
    cy.visit("/opengraph/?path=components/alert");

    // Check the title
    cy.get("h1").should("have.text", "Alert");

    // Check the logo
    cy.get("svg").should("be.visible");

    // Check the aria-label
    cy.get('[aria-label="Open Graph Template"]').should("be.visible");

    // Check the fonts
    cy.document().its("fonts.status").should("equal", "loaded");
  });
});
