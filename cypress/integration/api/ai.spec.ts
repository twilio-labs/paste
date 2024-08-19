context("POST /api/ai", () => {
  it("gets an ai response for a given prompt", () => {
    cy.request("POST", "/api/ai", {
      prompt: "How do I create a primary button",
      secret: Cypress.env("OPENAI_API_SECRET"),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).length.to.be.greaterThan(1);
    });
  });
});
