describe("Overview page", () => {
  beforeEach(() => {
    cy.visit("/components");
  });

  it("should render the components overview page correctly", () => {
    cy.pageHeaderShouldBeVisible({
      headerText: "Components",
    });

    cy.overviewTableRendersCorrectly();
  });
});
