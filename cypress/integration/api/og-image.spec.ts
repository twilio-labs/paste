context("GET /api/og-image", () => {
  it("gets an image", () => {
    cy.request("GET", "/api/og-image?componentRequested=primitives/box").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers["content-type"]).to.eq("image/png");
      console.log(response);
    });
  });
});
