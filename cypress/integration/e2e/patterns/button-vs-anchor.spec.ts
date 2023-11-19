describe("Button-vs-anchor patterns documentation page", () => {
  beforeEach(() => {
    cy.visit("/patterns/button-vs-anchor");
  });

  it("should render the button-vs-anchor patterns page correctly", () => {
    cy.pageHeaderShouldBeVisible({
      headerText: "Button vs. Anchor",
    });

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
  });
});
