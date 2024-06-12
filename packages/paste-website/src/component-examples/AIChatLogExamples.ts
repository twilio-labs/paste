export const basicBotMessage = `
const BasicMessage = () => {
  return (
    <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Here is what I found, error code 30003 means: The destination phone is unavailable or turned off, or it may be a landline or phone that doesn't support SMS.
          </AIChatMessageBody>
        </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <BasicMessage />
)`.trim();
export const basicHumanMessage = `
const BasicMessage = () => {
  return (
    <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said at 2:36pm">Gibby Radki</AIChatMessageAuthor>
          <AIChatMessageBody>
            I would like some information on twilio error codes for undelivered messages
          </AIChatMessageBody>
        </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <BasicMessage />
)`.trim();
export const botWithFeedback = `
const MessageWithFeedback = () => {
  return (
    <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Here is what I found, error code 30003 means: The destination phone is unavailable or turned off, or it may be a landline or phone that doesn't support SMS.
          </AIChatMessageBody>
          <AIChatMessageMeta aria-label="Feedback form">
            <AIChatMessageFeedback onLike={() => {}} onDislike={() => {}} />
          </AIChatMessageMeta>
        </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <MessageWithFeedback />
)`.trim();
export const botWithActionButtons = `
const MessageWithActionButtons = () => {
  return (
    <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Here is what I found, error code 30003 means: The destination phone is unavailable or turned off, or it may be a landline or phone that doesn't support SMS.
          </AIChatMessageBody>
          <AIChatMessageMeta aria-label="Quick actions available:">
            <ButtonGroup>
              <Button variant="secondary" onClick={() => {}} size="small">
                30007
              </Button>
              <Button variant="secondary" onClick={() => {}} size="small">
                30007
              </Button>
              <Button variant="secondary" onClick={() => {}} size="small">
                30009
              </Button>
            </ButtonGroup>
          </AIChatMessageMeta>
        </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <MessageWithActionButtons />
)`.trim();
export const botWithLoadingStopButton = `
const MessageWithLoadingAndStop = () => {
  return (
    <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said" bot>
            Good Bot
          </AIChatMessageAuthor>
          <AIChatMessageBody>
            <AIChatMessageLoading onStopLoading={() => {}} />
          </AIChatMessageBody>
        </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <MessageWithLoadingAndStop />
)`.trim();
export const botWithLoading = `
const MessageWithLoading = () => {
  return (
    <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said" bot>
            Good Bot
          </AIChatMessageAuthor>
          <AIChatMessageBody>
            <AIChatMessageLoading />
          </AIChatMessageBody>
        </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <MessageWithLoading />
)`.trim();
export const kitchenSink = `
const AIChatLogExample = () => {
  return (
    <AIChatLog>
      <AIChatMessage variant="user">
        <AIChatMessageAuthor aria-label="You said at 2:36pm">Gibby Radki</AIChatMessageAuthor>
        <AIChatMessageBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi iure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi iure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
        </AIChatMessageBody>
        <AIChatMessageMeta aria-label="Quick actions available:">
          <ButtonGroup>
            <Button variant="secondary" onClick={() => {}} size="small">
              30007
            </Button>
            <Button variant="secondary" onClick={() => {}} size="small">
              30007
            </Button>
            <Button variant="secondary" onClick={() => {}} size="small">
              30009
            </Button>
          </ButtonGroup>
        </AIChatMessageMeta>
        <AIChatMessageMeta aria-label="Feedback form">
          <AIChatMessageFeedback onLike={() => {}} onDislike={() => {}} />
        </AIChatMessageMeta>
      </AIChatMessage>
      <AIChatMessage variant="user">
        <AIChatMessageAuthor aria-label="You said">Gibby Radki</AIChatMessageAuthor>
        <AIChatMessageBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi iure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said" bot>
          Good Bot
        </AIChatMessageAuthor>
        <AIChatMessageBody>
          <AIChatMessageLoading onStopLoading={() => {}} />
        </AIChatMessageBody>
      </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <AIChatLogExample />
)`.trim();
