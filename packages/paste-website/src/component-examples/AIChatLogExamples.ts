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
        <AIChatMessageActionGroup aria-label="Feedback form">
          <AIChatMessageAction>
            Is this helpful?
            <Button variant="reset" size="reset">
              <ThumbsUpIcon decorative={false} title="like result" />
            </Button>
            <Button variant="reset" size="reset">
              <ThumbsDownIcon decorative={false} title="dislike result" />
            </Button>
          </AIChatMessageAction>
          <AIChatMessageAction>
            <Button variant="reset" size="reset">
              <RefreshIcon decorative={true}/> Rewrite
            </Button>
            <Button variant="reset" size="reset">
              <CopyIcon decorative={true}/> Copy
            </Button>
          </AIChatMessageAction>
        </AIChatMessageActionGroup>
      </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <MessageWithFeedback />
)`.trim();
export const botWithBodyActions = `
const MessageWithFeedback = () => {
  return (
    <AIChatLog>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          Below is a list of actions that can be taken with flex wrapping supported:
          <ButtonGroup>  
            <Button variant="secondary" size="rounded_small" onClick={() => {}} >
              View Logs
            </Button>
            <Button variant="secondary" size="rounded_small" onClick={() => {}}>
              Run Diagnostics
            </Button>
            <Button variant="secondary" size="rounded_small" onClick={() => {}}>
              Submit Bug Report
            </Button>
            <Button variant="secondary" size="rounded_small" onClick={() => {}}>
              Access Documentation
            </Button>
            <Button variant="secondary" size="rounded_small" onClick={() => {}}>
              Contact Support
            </Button>
            <Button variant="secondary" size="rounded_small" onClick={() => {}}>
              Enable Debug Mode
            </Button>
          </ButtonGroup>
        </AIChatMessageBody>
      </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <MessageWithFeedback />
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
          <ButtonGroup>
            <Button variant="secondary" size="rounded_small" onClick={() => {}} >
              21608
            </Button>
            <Button variant="secondary" size="rounded_small" onClick={() => {}}>
              30007
            </Button>
            <Button variant="secondary" size="rounded_small" onClick={() => {}}>
              30009
            </Button>
          </ButtonGroup>
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          Error 21608 means you're trying to send a message from an unverified number. Is your number verified in your Twilio account?
        </AIChatMessageBody>
        <AIChatMessageActionGroup aria-label="Feedback form">
          <AIChatMessageAction>
            Is this helpful?
            <Button variant="reset" size="reset">
              <ThumbsUpIcon decorative={false} title="like result" />
            </Button>
            <Button variant="reset" size="reset">
              <ThumbsDownIcon decorative={false} title="dislike result" />
            </Button>
          </AIChatMessageAction>
        </AIChatMessageActionGroup>
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
  const [loading, setLoading] = React.useState(false);

  const pushChat = () => {
    const template = chatTemplates[templateIdx];
    setTemplateIdx((idx) => ++idx % chatTemplates.length);
    const chat = aiChatFactory(template);

    if (template[1] ===  "bot") {
      const id = uid(chat.content);
      setLoading(true);
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
        pop(id);
        setLoading(false);
        push(chat);
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
        <Button variant="primary" disabled={loading} onClick={pushChat}>
          Push Chat
        </Button>
        <Button variant="primary" disabled={loading} onClick={popChat}>
          Pop Chat
        </Button>
        <Button variant="primary" disabled={loading} onClick={clear}>
          Clear Chat
        </Button>
      </ButtonGroup>
      <AIChatLogger aiChats={aiChats} />
    </Stack>
  )
}

render(<AIChatLoggerExample />);
`.trim();
