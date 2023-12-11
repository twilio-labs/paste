context("POST /api/paste-assistant-thread", () => {
  let threadId: string;
  it("creates an ai thread", () => {
    cy.request("POST", "/api/paste-assistant-thread", {}).then((response) => {
      expect(response.status).to.eq(200);
      threadId = response.body.id;
    });
  });
  it("updates an ai thread", () => {
    cy.request("PUT", "/api/paste-assistant-thread", { id: threadId, metadata: { testKey: "testData" } }).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.metadata.testKey).to.eq("testData");
      },
    );
  });
  it("gets an ai thread", () => {
    cy.request("GET", `/api/paste-assistant-thread/${threadId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.metadata.testKey).to.eq("testData");
    });
  });
  it("deletes an ai thread", () => {
    cy.request("DELETE", "/api/paste-assistant-thread", { id: threadId }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.deleted).to.eq(true);
    });
  });
});
