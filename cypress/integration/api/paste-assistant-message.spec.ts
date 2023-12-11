context("POST /api/paste-assistant-message", () => {
  let threadId: string;

  before(() => {
    // create a thread for the message
    cy.request("POST", "/api/paste-assistant-thread", {}).then((response) => {
      threadId = response.body.id;
    });
  });

  after(() => {
    // delete the thread
    cy.request("DELETE", "/api/paste-assistant-thread", { id: threadId });
  });

  it("creates an message on an ai thread", () => {
    // create a message on the thread
    cy.request("POST", "/api/paste-assistant-message", { threadId, message: "create a button" }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("gets messages on an ai thread", () => {
    // get messages on the thread
    cy.request("GET", `/api/paste-assistant-messages/${threadId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).length.to.be.greaterThan(0);
      expect(response.body.data[0].content[0].text.value).to.eq("create a button");
    });
  });
});
