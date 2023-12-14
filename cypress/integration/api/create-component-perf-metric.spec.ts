context("GET /api/create-component-perf-metric", () => {
  it("creates and stores a component render metric", () => {
    cy.request("POST", "/api/create-component-perf-metric", {
      id: "components-alert-dialog--alert-dialog-with-two-actions-sstory",
      kind: "Components/Alert Dialog",
      view: "default",
      phase: "mount",
      actualDuration: 1,
      baseDuration: 2,
      coreVersionNumber: "10.20.0",
      commitSha: "test",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.equal(true);
    });
  });
});
