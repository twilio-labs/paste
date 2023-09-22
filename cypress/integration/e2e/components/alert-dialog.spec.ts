describe("Alert-dialog component documentation page", function () {
  beforeEach(() => {
    cy.visit("/components/alert-dialog");
  });

  it("should render the alert-dialog component page correctly", () => {
    cy.pageHeaderShouldBeVisible({
      headerText: "Alert Dialog",
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
