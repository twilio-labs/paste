context("GET /api/docs-search", () => {
  it("gets a list of docs", () => {
    cy.request("POST", "/api/docs-search", { prompt: "this is a search test" }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).length.to.be.greaterThan(1);
    });
  });
});
