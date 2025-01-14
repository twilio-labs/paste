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
          <AIChatMessageAuthor aria-label="You said at 2:36pm" avatarName="Gibby Radki">You</AIChatMessageAuthor>
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
        <AIChatMessageActionGroup>
          <AIChatMessageActionCard aria-label="Feedback form">
            Is this helpful?
            <Button variant="reset" size="reset" aria-label="this is a helpful response">
              <ThumbsUpIcon decorative={false} title="like result" />
            </Button>
            <Button variant="reset" size="reset">
              <ThumbsDownIcon decorative={false} title="dislike result" aria-label="this is not a helpful response" />
            </Button>
          </AIChatMessageActionCard>
          <AIChatMessageActionCard aria-label="Rewrite and copy buttons">
            <Button variant="reset" size="reset">
              <RefreshIcon decorative={true}/> Rewrite
            </Button>
            <Button variant="reset" size="reset">
              <CopyIcon decorative={true}/> Copy
            </Button>
          </AIChatMessageActionCard>
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
          <Paragraph>Below is a list of actions that can be taken with flex wrapping supported:</Paragraph>
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
          <AIChatMessageAuthor aria-label="AI said">
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
          <AIChatMessageAuthor aria-label="AI said">
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
        <AIChatMessageAuthor aria-label="You said" avatarName="Gibby Radki">You</AIChatMessageAuthor>
        <AIChatMessageBody>
          Hi, I'm getting errors codes when sending an SMS.
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          <Paragraph>Error codes can be returned from various parts of the process. What error codes are you encountering?</Paragragh>
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
        <AIChatMessageActionGroup>
          <AIChatMessageActionCard aria-label="Feedback form">
            Is this helpful?
            <Button variant="reset" size="reset" aria-label="this is a helpful response">
              <ThumbsUpIcon decorative={false} title="like result" />
            </Button>
            <Button variant="reset" size="reset">
              <ThumbsDownIcon decorative={false} title="dislike result" aria-label="this is not a helpful response"/>
            </Button>
          </AIChatMessageActionCard>
        </AIChatMessageActionGroup>
      </AIChatMessage>
      <AIChatMessage variant="user">
        <AIChatMessageAuthor aria-label="You said" bot avatarName="Gibby Radki">
          You
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
         <AIChatMessageAuthor aria-label={metaLabel + time} avatarName={variant === 'bot' ? undefined : "Gibby Radki"}>{meta}</AIChatMessageAuthor>
          <AIChatMessageBody>
            {message}
          </AIChatMessageBody>
      </AIChatMessage>
    )
  }
};

const chatTemplates = [
  ["Hello", "user", "You said at ", "You"],
  ["Hi there", "bot", "AI said at ", "Good Bot"],
  ["Greetings", "user", "You said at ", "You"],
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
export const avatarExample = `
const AvatarExample = () => {
  return (
    <AIChatLog>
      <AIChatMessage variant="user">
        <AIChatMessageAuthor avatarIcon={LogoTwilioIcon} aria-label="You said" avatarName="Gibby Radki">You</AIChatMessageAuthor>
      </AIChatMessage>
      <AIChatMessage variant="user">
        <AIChatMessageAuthor avatarSrc={Logo.src} aria-label="You said" avatarName="Gibby Radki">You</AIChatMessageAuthor>
      </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <AvatarExample />
)`.trim();

export const messageGenerationError = `
const MessageGenerationError = () => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said at 2:36pm" avatarName="Gibby Ridki">
            You
          </AIChatMessageAuthor>
          <AIChatMessageBody>Message filtered (30007)</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            <Callout variant="error">
              <CalloutHeading as="h3">There was an error generating a response.</CalloutHeading>
              <CalloutText>
                Please try again, if the error persists please <Anchor href="#">contact us</Anchor>.
              </CalloutText>
            </Callout>
          </AIChatMessageBody>
          <AIChatMessageActionGroup>
            <AIChatMessageActionCard aria-label="Feedback form">
              <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                <RefreshIcon decorative title="dislike result" />
                Regenerate
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <ChatComposerContainer variant="contained">
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
          >
            <ClearEditorPlugin />
          </ChatComposer>
          <ChatComposerActionGroup>
            <Button variant="secondary_icon" size="reset">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Button>
            <Button variant="primary_icon" size="reset">
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </Box>
    </>
  );
};

render(
  <MessageGenerationError />
)`.trim();

export const aIActionClickError = `
const AIActionClickError = () => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said at 2:36pm" avatarName="Gibby Ridki">
            You
          </AIChatMessageAuthor>
          <AIChatMessageBody>Message filtered (30007)</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            We recommend reviewing our guidelines on filtering and scaling to better manage high volumes of messages.
            <Box paddingY="space50">
              <ButtonGroup>
                <Button variant="secondary" size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30009
                </Button>
              </ButtonGroup>
            </Box>

            <Callout variant="error">
              <CalloutHeading as="h3">The action couldn’t be completed.</CalloutHeading>
              <CalloutText>
                Please try again, if the error persists please <Anchor href="#">contact us</Anchor>.
              </CalloutText>
            </Callout>
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <ChatComposerContainer variant="contained">
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
          >
            <ClearEditorPlugin />
          </ChatComposer>
          <ChatComposerActionGroup>
            <Button variant="secondary_icon" size="reset">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Button>
            <Button variant="primary_icon" size="reset">
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </Box>
    </>
  );
};

render(
  <AIActionClickError />
)`.trim();

export const actionGroupError = `
const ActionGroupError = () => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said at 2:36pm" avatarName="Gibby Ridki">
            You
          </AIChatMessageAuthor>
          <AIChatMessageBody>Message body text</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Message body text
            <Box marginTop="space50">
              <SummaryDetail>
                <SummaryDetailHeading>
                  <SummaryDetailToggleButton aria-label="BOOP" />
                  <SummaryDetailHeadingContent>
                    <Text as="p" fontWeight="fontWeightBold">View data sources</Text>
                  </SummaryDetailHeadingContent>
                </SummaryDetailHeading>
                <SummaryDetailContent>Data Content</SummaryDetailContent>
              </SummaryDetail>
            </Box>

            <AIChatMessageActionGroup>
              <AIChatMessageActionCard aria-label="Feedback form">
                Is this helpful?
                <Button variant="reset" size="reset" aria-label="this is a helpful response">
                  <ThumbsUpIcon decorative={false} title="like result" />
                </Button>
                <Button variant="reset" size="reset" aria-label="this is not a helpful response">
                  <ThumbsDownIcon decorative={false} title="dislike result" />
                </Button>
              </AIChatMessageActionCard>
              <AIChatMessageActionCard aria-label="Feedback form">
                <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                  <RefreshIcon decorative title="dislike result" />
                  Regenerate
                </Button>
                <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                  <CopyIcon decorative title="dislike result" />
                  Copy
                </Button>
              </AIChatMessageActionCard>
            </AIChatMessageActionGroup>
            <HelpText variant="error">The action couldn’t be completed. Please try again.</HelpText>
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <ChatComposerContainer variant="contained">
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
          >
            <ClearEditorPlugin />
          </ChatComposer>
          <ChatComposerActionGroup>
            <Button variant="secondary_icon" size="reset">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Button>
            <Button variant="primary_icon" size="reset">
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </Box>
    </>
  );
};

render(
  <ActionGroupError />
)`.trim();

export const sendingMessageError = `
const SendingMessageError = () => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Messages from +1 234-292-2349 are failing due to the following top 3 errors which occurred in the past 7
            days:
            <Box paddingY="space50">
              <ButtonGroup>
                <Button variant="secondary" size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30034
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30024
                </Button>
              </ButtonGroup>
            </Box>
            <AIChatMessageActionGroup>
              <AIChatMessageActionCard aria-label="Feedback form">
                Is this helpful?
                <Button variant="reset" size="reset" aria-label="this is a helpful response">
                  <ThumbsUpIcon decorative={false} title="like result" />
                </Button>
                <Button variant="reset" size="reset" aria-label="this is not a helpful response">
                  <ThumbsDownIcon decorative={false} title="dislike result" />
                </Button>
              </AIChatMessageActionCard>
            </AIChatMessageActionGroup>
          </AIChatMessageBody>
        </AIChatMessage>

        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said at 2:36pm" avatarName="Gibby Ridki">
            You
          </AIChatMessageAuthor>
          <AIChatMessageBody>
            Message body text
            <AIChatMessageActionGroup>
              <AIChatMessageActionCard aria-label="Feedback form">
                <HelpText marginTop="space0" variant="error">
                  Message failed to send
                </HelpText>
                <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                  <RepeatIcon decorative title="try again" />
                  Try again
                </Button>
              </AIChatMessageActionCard>
            </AIChatMessageActionGroup>
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <ChatComposerContainer variant="contained">
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
          >
            <ClearEditorPlugin />
          </ChatComposer>
          <ChatComposerActionGroup>
            <Button variant="secondary_icon" size="reset">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Button>
            <Button variant="primary_icon" size="reset">
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </Box>
    </>
  );
};

render(
  <SendingMessageError />
)`.trim();

export const systemError = `
const SystemError = () => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said at 2:36pm" avatarName="Gibby Ridki">
            You
          </AIChatMessageAuthor>
          <AIChatMessageBody>Message body text</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Message body text
            <Box marginTop="space50">
              <SummaryDetail>
                <SummaryDetailHeading>
                  <SummaryDetailToggleButton aria-label="BOOP" />
                  <SummaryDetailHeadingContent>
                    <Text as="p" fontWeight="fontWeightBold">
                      View data sources
                    </Text>
                  </SummaryDetailHeadingContent>
                </SummaryDetailHeading>
                <SummaryDetailContent>Data Content</SummaryDetailContent>
              </SummaryDetail>
            </Box>

            <AIChatMessageActionGroup>
              <AIChatMessageActionCard aria-label="Feedback form">
                Is this helpful?
                <Button variant="reset" size="reset" aria-label="this is a helpful response">
                  <ThumbsUpIcon decorative={false} title="like result" />
                </Button>
                <Button variant="reset" size="reset" aria-label="this is not a helpful response">
                  <ThumbsDownIcon decorative={false} title="dislike result" />
                </Button>
              </AIChatMessageActionCard>
              <AIChatMessageActionCard aria-label="Feedback form">
                <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                  <RefreshIcon decorative title="dislike result" />
                  Regenerate
                </Button>
                <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                  <CopyIcon decorative title="dislike result" />
                  Copy
                </Button>
              </AIChatMessageActionCard>
            </AIChatMessageActionGroup>
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <Alert variant="error">
          <div>
            <strong>Something went wrong.</strong>
          </div>
          If this issue persists please contact us through our help center.
        </Alert>
      </Box>
      <Box marginTop="space50">
        <ChatComposerContainer variant="contained">
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
          >
            <ClearEditorPlugin />
          </ChatComposer>
          <ChatComposerActionGroup>
            <Button variant="secondary_icon" size="reset">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Button>
            <Button variant="primary_icon" size="reset">
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </Box>
    </>
  );
};

render(
  <SystemError />
)`.trim();

export const animatedBotWithFeedback = `
const AnimatedMessageWithFeedback = () => {
  const [animated, setAnimated] = React.useState(true)

  const restart = () => {
    setAnimated(false)
    setTimeout(() => {
      setAnimated(true)
    }, 100)
  }

  return (
    <>
      <Button variant="secondary" onClick={restart}>
        <ResetIcon decorative={false} size="sizeIcon10" title="reset" />{" "}Restart
      </Button>
      <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody animated={animated}>
            I found multiple solutions for the issue with your environment variable, <InlineCode>TWILIO_AUTH_TOKEN</InlineCode>. Other helpful resources can be found at <Anchor href="#" showExternal>Twilio API Docs</Anchor>.
          </AIChatMessageBody>
          <AIChatMessageActionGroup>
            <AIChatMessageActionCard aria-label="Feedback form">
              Is this helpful?
              <Button variant="reset" size="reset" aria-label="this is a helpful response">
                <ThumbsUpIcon decorative={false} title="like result" />
              </Button>
              <Button variant="reset" size="reset">
                <ThumbsDownIcon decorative={false} title="dislike result" aria-label="this is not a helpful response" />
              </Button>
            </AIChatMessageActionCard>
            <AIChatMessageActionCard aria-label="Rewrite and copy buttons">
              <Button variant="reset" size="reset">
                <RefreshIcon decorative={true}/> Rewrite
              </Button>
              <Button variant="reset" size="reset">
                <CopyIcon decorative={true}/> Copy
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
      </AIChatLog>
    </>
  );
};

render(
  <AnimatedMessageWithFeedback />
)`.trim();

export const animatedBotScrollable = `
const exampleAIResponseText =
  "Twilio error codes are numeric codes returned by the Twilio API when an error occurs during a request, providing specific information about the problem encountered, such as invalid phone numbers, network issues, or authentication failures; they help developers identify and troubleshoot issues within their applications using Twilio services";

const AnimatedBotScrollable = () => {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const loggerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const { aiChats, push } = useAIChatLogger({
    variant: "bot",
    content: (
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>{exampleAIResponseText}</AIChatMessageBody>
      </AIChatMessage>
    ),
  });

  const scrollToChatEnd = () => {
    const scrollPosition = scrollerRef.current;
    const scrollHeight = loggerRef.current;
    scrollPosition?.scrollTo({ top: scrollHeight.scrollHeight, behavior: "smooth" });
  };

  const onAnimationEnd = () => {
    setIsAnimating(false);
    scrollToChatEnd();
  };

  const onAnimationStart = () => {
    setIsAnimating(true);
  };

  React.useEffect(() => {
    const interval = setInterval(() => isAnimating && scrollToChatEnd(), 30);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAnimating]);

  const pushLargeBotMessage = () => {
    push({
      variant: "bot",
      content: (
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="Bot said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody animated onAnimationEnd={onAnimationEnd} onAnimationStart={onAnimationStart}>
            {exampleAIResponseText}
          </AIChatMessageBody>
        </AIChatMessage>
      ),
    });
  };

  return (
    <Box>
      <Box paddingX="space10" height="size20" overflowY="auto" ref={scrollerRef}>
        <AIChatLogger ref={loggerRef} aiChats={aiChats} />
      </Box>
      <Button variant="primary" onClick={pushLargeBotMessage}>
        Add animated bot message
      </Button>
    </Box>
  );
};

render(
  <AnimatedBotScrollable />
)`.trim();
