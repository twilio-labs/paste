describe("Box primitives documentation page", () => {
  beforeEach(() => {
    cy.visit("/primitives/box");
  });

  it("should render the box primitives page correctly", () => {
    cy.pageHeaderShouldBeVisible({
      headerText: "Box",
      shouldHaveGithubLink: true,
      shouldHaveStorybook: true,
      shouldHaveOpenGraph: true,
    });

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
