context("GET /api/discussions-search", () => {
  it("gets a list of discussions", () => {
    cy.request("POST", "/api/discussions-search", { prompt: "this is a search test" }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).length.to.be.greaterThan(1);
    });
  });
});
