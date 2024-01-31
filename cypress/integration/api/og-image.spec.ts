context("GET /api/component-og-image", () => {
  it("gets an image", () => {
    cy.request("GET", "/api/component-og-image?componentRequested=primitives/box").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers["content-type"]).to.eq("image/png");
      console.log(response);
    });
  });
});

context("GET /api/simple-og-image", () => {
  it("gets an image", () => {
    cy.request("GET", "/api/simple-og-image?title=Hello%20World&description=This%20is%20a%20description").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.headers["content-type"]).to.eq("image/png");
        console.log(response);
      },
    );
  });
});
