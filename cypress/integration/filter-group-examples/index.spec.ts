describe("Filter group pattern examples", () => {
  beforeEach(() => {
    cy.visit("/patterns/filter-group");
    cy.get('[data-cy="filter-group-default-example"]').first().as("filterGroupWrapper");
    cy.get("@filterGroupWrapper").find('select[name="type"]').as("roomTypeSelect");
    cy.get("@filterGroupWrapper").find('select[name="range"]').as("dateRangeSelect");
    cy.get("@filterGroupWrapper").find('input[name="search"]').as("searchInput");
  });

  it("filters the table with the search bar", () => {
    cy.get("@filterGroupWrapper").find("tr").should("have.length", 8);
    cy.get("@searchInput").type("test").should("have.value", "test");
    cy.get("@filterGroupWrapper").find('[data-cy="filter-group-search-button"]').click();
    cy.get("@filterGroupWrapper").find("tr").should("have.length", 3);
  });

  it("filters the table with the selects", () => {
    cy.get("@filterGroupWrapper").find("tr").should("have.length", 8);
    cy.get("@roomTypeSelect").select("Group").should("have.value", "Group");
    cy.get("@dateRangeSelect").select("day").should("have.value", "day");
    cy.get("@filterGroupWrapper").find('[data-cy="filter-group-apply-button"]').click();
    cy.get("@filterGroupWrapper").find("tr").should("have.length", 2);
  });

  describe("Empty state", () => {
    it("shows the empty state when search returns no results", () => {
      cy.get("@filterGroupWrapper").find("tr").should("have.length", 8);
      cy.get("@searchInput").type("asdfasdf");
      cy.get("@filterGroupWrapper").find('[data-cy="filter-group-search-button"]').click();
      cy.get("@filterGroupWrapper").find("table").should("have.length", 0);
      cy.get("@filterGroupWrapper").find('[data-cy="filter-group-empty-state-clear-button"]').should("be.visible");
    });

    it("shows the empty state when selects returns no results", () => {
      cy.get("@filterGroupWrapper").find("tr").should("have.length", 8);
      cy.get("@roomTypeSelect").select("Peer to Peer");
      cy.get("@dateRangeSelect").select("day");
      cy.get("@filterGroupWrapper").find('[data-cy="filter-group-apply-button"]').click();
      cy.get("@filterGroupWrapper").find("table").should("have.length", 0);
      cy.get("@filterGroupWrapper").find('[data-cy="filter-group-empty-state-clear-button"]').should("be.visible");
    });
  });

  describe("Clear buttons", () => {
    beforeEach(() => {
      cy.get("@roomTypeSelect").select("Group");
      cy.get("@dateRangeSelect").select("day");
      cy.get("@searchInput").type("sfasdf");
      cy.get("@filterGroupWrapper").find('[data-cy="filter-group-apply-button"]').click();
    });

    it("clears the filters when press clear button", () => {
      cy.get("@filterGroupWrapper").find("tr").should("have.length", 0);
      cy.get("@filterGroupWrapper").find('[data-cy="filter-group-clear-button"]').click();
      cy.get("@filterGroupWrapper").find("tr").should("have.length", 8);
      cy.get("@roomTypeSelect").should("have.value", "All");
      cy.get("@dateRangeSelect").should("have.value", "all");
      cy.get("@searchInput").should("have.value", "");
    });

    it("clears the filters when press empty state clear button", () => {
      cy.get("@filterGroupWrapper").find("tr").should("have.length", 0);
      cy.get("@filterGroupWrapper").find('[data-cy="filter-group-empty-state-clear-button"]').click();
      cy.get("@filterGroupWrapper").find("tr").should("have.length", 8);
      cy.get("@roomTypeSelect").should("have.value", "All");
      cy.get("@dateRangeSelect").should("have.value", "all");
      cy.get("@searchInput").should("have.value", "");
    });
  });
});

describe("Custom date/time pattern example", () => {
  beforeEach(() => {
    cy.visit("/patterns/filter-group");
    cy.get('[data-cy="custom-filter-group-example"]').first().as("filterGroupWrapper");
    cy.get("@filterGroupWrapper").find('select[name="type"]').as("roomTypeSelect");
    cy.get("@filterGroupWrapper").find('select[name="range"]').as("dateRangeSelect");
    cy.get("@filterGroupWrapper").find('input[name="search"]').as("searchInput");
    cy.get("@filterGroupWrapper").find('[data-cy="custom-filter-group-popover-button"]').as("dateTimePopoverButton");
  });

  it("filters the table with the search bar", () => {
    cy.get("@filterGroupWrapper").find("tr").should("have.length", 8);
    cy.get("@searchInput").type("test").should("have.value", "test");
    cy.get("@filterGroupWrapper").find('[data-cy="custom-filter-group-search-button"]').click();
    cy.get("@filterGroupWrapper").find("tr").should("have.length", 3);
  });

  it("filters the table with the selects", () => {
    cy.get("@filterGroupWrapper").find("tr").should("have.length", 8);
    cy.get("@roomTypeSelect").select("WebRTC Go").should("have.value", "WebRTC Go");
    cy.get("@dateRangeSelect").select("day").should("have.value", "day");
    cy.get("@filterGroupWrapper").find('[data-cy="custom-filter-group-apply-button"]').click();
    cy.get("@filterGroupWrapper").find("tr").should("have.length", 3);
  });

  describe("Empty state", () => {
    it("shows the empty state when search returns no results", () => {
      cy.get("@filterGroupWrapper").find("tr").should("have.length", 8);
      cy.get("@searchInput").type("asdfasdf");
      cy.get("@filterGroupWrapper").find('[data-cy="custom-filter-group-search-button"]').click();
      cy.get("@filterGroupWrapper").find("table").should("have.length", 0);
      cy.get("@filterGroupWrapper").find('[data-cy="filter-group-empty-state-clear-button"]').should("be.visible");
    });

    it("shows the empty state when selects returns no results", () => {
      cy.get("@filterGroupWrapper").find("tr").should("have.length", 8);
      cy.get("@roomTypeSelect").select("Peer to Peer");
      cy.get("@dateRangeSelect").select("12hours");
      cy.get("@filterGroupWrapper").find('[data-cy="custom-filter-group-apply-button"]').click();
      cy.get("@filterGroupWrapper").find("table").should("have.length", 0);
      cy.get("@filterGroupWrapper").find('[data-cy="filter-group-empty-state-clear-button"]').should("be.visible");
    });
  });

  it("clears the filters when press empty state clear button", () => {
    cy.get("@roomTypeSelect").select("Peer to Peer");
    cy.get("@dateRangeSelect").select("12hours");
    cy.get("@searchInput").type("sfasdf");
    cy.get("@filterGroupWrapper").find('[data-cy="custom-filter-group-apply-button"]').click();

    cy.get("@filterGroupWrapper").find("tr").should("have.length", 0);
    cy.get("@filterGroupWrapper").find('[data-cy="filter-group-empty-state-clear-button"]').click();
    cy.get("@filterGroupWrapper").find("tr").should("have.length", 8);
    cy.get("@roomTypeSelect").should("have.value", "All");
    cy.get("@dateRangeSelect").should("have.value", "all");
    cy.get("@searchInput").should("have.value", "");
  });

  describe("Custom date/time popover", () => {
    beforeEach(() => {
      cy.get("@dateTimePopoverButton").click();

      cy.get('input[name="customDate.startDate"]').as("startDateInput");
      cy.get('input[name="customDate.startTime"]').as("startTimeInput");
      cy.get('input[name="customDate.endDate"]').as("endDateInput");
      cy.get('input[name="customDate.endTime"]').as("endTimeInput");
      cy.get('[data-cy="custom-filter-group-popover-apply-button"]').as("popoverApplyButton");
    });

    it("clears the date/time values if change the range select", () => {
      const TODAY = new Date();

      cy.get("@startDateInput").type("2022-05-01");
      cy.get("@startTimeInput").type("10:30");
      cy.get("@endDateInput").type("2022-05-01");
      cy.get("@endTimeInput").type("20:30");

      cy.get("@popoverApplyButton").click();

      cy.get("@dateRangeSelect").select("12hours");
      cy.get("@filterGroupWrapper").find('[data-cy="custom-filter-group-apply-button"]').click();

      cy.get("@startDateInput").should("have.value", TODAY.toISOString().slice(0, 10));
      cy.get("@startTimeInput").should("have.value", "00:00");
      cy.get("@endDateInput").should("have.value", TODAY.toISOString().slice(0, 10));
      cy.get("@endTimeInput").should("have.value", "23:59");
    });
  });
});
