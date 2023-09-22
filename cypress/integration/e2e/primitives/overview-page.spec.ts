describe("Overview page", () => {
  beforeEach(() => {
    cy.visit("/primitives");
  });

  it("should render the primitives overview page correctly", () => {
    cy.pageHeaderShouldBeVisible({
      headerText: "Primitives",
    });

    cy.overviewTableRendersCorrectly();
  });
});
