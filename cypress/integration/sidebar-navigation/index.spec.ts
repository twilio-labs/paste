const sidebarNavigationDisclosures = [
  "introduction",
  "foundations",
  "components",
  "data-visualization",
  "for-designers",
  "for-engineers",
  "contributing",
  "content",
  "patterns",
  "combobox",
  "icon",
  "primitives",
  "tokens",
  "core",
  "libraries",
  "customization",
  "theme",
];

const BASE = "sidebar-disclosure";

describe("Sidebar navigation", () => {
  before(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  sidebarNavigationDisclosures.forEach((disclosureName) => {
    const buttonSelector = `${BASE}-button-${disclosureName}`;
    const contentSelector = `${BASE}-content-${disclosureName}`;

    it(`should open the the "${disclosureName}" sidebar disclosure`, () => {
      // creates an alias for the content
      cy.get(`[data-cy="${contentSelector}"]`).as("currentContent");
      cy.get("@currentContent").should("have.css", "display", "none");
      cy.get("@currentContent").should("have.attr", "hidden", "hidden");
      cy.get(`[data-cy="${buttonSelector}"]`).click({ multiple: true }).should("have.attr", "aria-expanded", "true");
      cy.get("@currentContent").each(($el) => {
        cy.wrap($el).scrollIntoView().should("have.css", "display", "block");
      });
    });
  });

  sidebarNavigationDisclosures.reverse().forEach((disclosureName) => {
    const buttonSelector = `${BASE}-button-${disclosureName}`;

    it(`should close the the "${disclosureName}" sidebar disclosure`, () => {
      cy.get(`[data-cy="${buttonSelector}"]`).click({ multiple: true }).should("have.attr", "aria-expanded", "false");
    });
  });
});

describe("Sidebar opens correct section on first load", () => {
  it("opens the sidebar category and selects the page correctly on first load", () => {
    cy.visit("/components/alert-dialog/");

    const componentsCategoryButton = cy.get(`[data-cy="sidebar-disclosure-button-components"]`);
    componentsCategoryButton.should("have.attr", "aria-expanded", "true");

    const componentsCategoryList = cy.get(`[data-cy="sidebar-disclosure-content-components"]`);
    const alertDialogLink = componentsCategoryList.contains("Alert Dialog");
    alertDialogLink.should("have.attr", "aria-current", "page");
  });
});
