context("GET /api/docs-search", () => {
  it("gets a list of docs", () => {
    cy.request("POST", "/api/docs-search", { prompt: "creating a button" }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).length.to.be.greaterThan(1);
    });
  });
});
