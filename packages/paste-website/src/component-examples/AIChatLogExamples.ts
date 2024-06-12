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
          <AIChatMessageActions aria-label="Feedback form">
            <AIChatMessageFeedback onLike={() => {}} onDislike={() => {}} />
          </AIChatMessageActions>
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
          Error codes can be returned from various parts of the process. What error codes are you encountering?
          </AIChatMessageBody>
          <AIChatMessageActions aria-label="Quick actions available:">
            <ButtonGroup>
              <Button variant="secondary" onClick={() => {}} size="small">
                30005
              </Button>
              <Button variant="secondary" onClick={() => {}} size="small">
                30007
              </Button>
              <Button variant="secondary" onClick={() => {}} size="small">
                30009
              </Button>
            </ButtonGroup>
          </AIChatMessageActions>
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
        <AIChatMessageAuthor aria-label="You said">Gibby Radki</AIChatMessageAuthor>
        <AIChatMessageBody>
          Hi, I'm getting errors codes when sending an SMS.
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          Error codes can be returned from various parts of the process. What error codes are you encountering?
        </AIChatMessageBody>
        <AIChatMessageActions aria-label="Quick actions available:">
          <ButtonGroup>
            <Button variant="secondary" onClick={() => {}} size="small">
              21608
            </Button>
            <Button variant="secondary" onClick={() => {}} size="small">
              30007
            </Button>
            <Button variant="secondary" onClick={() => {}} size="small">
              30009
            </Button>
          </ButtonGroup>
        </AIChatMessageActions>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          Error 21608 means you're trying to send a message from an unverified number. Is your number verified in your Twilio account?
        </AIChatMessageBody>
        <AIChatMessageActions aria-label="Feedback form">
          <AIChatMessageFeedback onLike={() => {}} onDislike={() => {}} />
        </AIChatMessageActions>
      </AIChatMessage>
      <AIChatMessage variant="user">
        <AIChatMessageAuthor aria-label="You said" bot>
          Gibby Radki
        </AIChatMessageAuthor>
        <AIChatMessageBody>
          No, how do I verify it?
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
export const aiChatLoggerExample = `
const aiChatFactory = ([ message, variant, metaLabel, meta ]) => {
  const time = new Date(0).toLocaleString(
    'en-US',
    { hour: 'numeric', minute: 'numeric', timeZone: 'UTC', hour12: true }
  )

  return {
    variant,
    content: (
      <AIChatMessage variant={variant}>
         <AIChatMessageAuthor aria-label={metaLabel + time}>{meta}</AIChatMessageAuthor>
          <AIChatMessageBody>
            {message}
          </AIChatMessageBody>
      </AIChatMessage>
    )
  }
};

const chatTemplates = [
  ["Hello", "user", "You said at ", "Gibby Radki"],
  ["Hi there", "bot", "AI said at ", "Good Bot"],
  ["Greetings", "user", "You said at ", "Gibby Radki"],
  ["Good to meet you", "bot", "AI said at ", "Good Bot"]
];

const AIChatLoggerExample = () => {
  const [templateIdx, setTemplateIdx] = React.useState(2);
  const { aiChats, push, pop, clear } = useAIChatLogger(
    aiChatFactory(chatTemplates[0]),
    aiChatFactory(chatTemplates[1])
  );

  const pushChat = () => {
    const template = chatTemplates[templateIdx];
    setTemplateIdx((idx) => ++idx % chatTemplates.length);
    const chat = aiChatFactory(template);

    if (template[1] ===  "bot") {
      const id = uid(chat.content);
      console.log(id);
      push({
        id,
        variant: template[1],
        content: (
          <AIChatMessage variant="bot">
            <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
            <AIChatMessageBody>
              <AIChatMessageLoading />
            </AIChatMessageBody>
          </AIChatMessage>
        ),
      });
      setTimeout(() => {
        console.log("replacing id:", id);
        push({...chat, id});
      }, 1000);
    } else {
      push(chat);
    }
  }

  const popChat = () => {
    pop();
    setTemplateIdx((idx) => idx === 0 ? idx : --idx % chatTemplates.length);
  }

  return(
    <Stack orientation="vertical">
      <ButtonGroup>
        <Button variant="primary" onClick={pushChat}>
          Push Chat
        </Button>
        <Button variant="primary" onClick={popChat}>
          Pop Chat
        </Button>
        <Button variant="primary" onClick={clear}>
          Clear Chat
        </Button>
      </ButtonGroup>
      <AIChatLogger aiChats={aiChats} />
    </Stack>
  )
}

render(<AIChatLoggerExample />);
`.trim();
