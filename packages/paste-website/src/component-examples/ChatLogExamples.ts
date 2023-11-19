export const basicInboundMessage = `
const BasicMessage = () => {
  return (
    <ChatLog>
      <ChatMessage variant='inbound'>
        <ChatBubble>
          Ahoy!
        </ChatBubble>
      </ChatMessage>
    </ChatLog>
  );
};

render(
  <BasicMessage />
)`.trim();
export const basicOutboundMessage = `
const BasicMessage = () => {
  return (
    <ChatLog>
      <ChatMessage variant='outbound'>
        <ChatBubble>
          Howdy!
        </ChatBubble>
      </ChatMessage>
    </ChatLog>
  );
};

render(
  <BasicMessage />
)`.trim();
export const inboundMessageMeta = `
const MessageWithMeta = () => {
  return (
    <ChatLog>
      <ChatMessage variant='inbound'>
        <ChatBubble>
          Hello, what can I help you with?
        </ChatBubble>
        <ChatMessageMeta aria-label="said by Gibby Radki 4 minutes ago">
          <ChatMessageMetaItem>
            <Avatar name="Gibby Radki" size="sizeIcon20" />
            Gibby Radki ・ 4 minutes ago
          </ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    </ChatLog>
  );
};

render(
  <MessageWithMeta />
)`.trim();
export const outboundMessageMeta = `
const MessageWithMeta = () => {
  return (
    <ChatLog>
      <ChatMessage variant='outbound'>
        <ChatBubble>
          Will this presentation be recorded?
        </ChatBubble>
        <ChatMessageMeta aria-label="said by you at 4:27 PM">
          <ChatMessageMetaItem>
            4:27 PM
          </ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    </ChatLog>
  );
};

render(
  <MessageWithMeta />
)`.trim();
export const inboundMessageAttachment = `
const MessageWithAttachment = () => {
  return (
    <ChatLog>
      <ChatMessage variant='inbound'>
        <ChatBubble>
          <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
            <ChatAttachmentLink href="#">receipt.pdf</ChatAttachmentLink>
            <ChatAttachmentDescription>9 MB</ChatAttachmentDescription>
          </ChatAttachment>
        </ChatBubble>
      </ChatMessage>
    </ChatLog>
  );
};

render(
  <MessageWithAttachment />
)`.trim();
export const outboundMessageAttachment = `
const MessageWithAttachment = () => {
  return (
    <ChatLog>
      <ChatMessage variant='outbound'>
        <ChatBubble>
          <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
            <ChatAttachmentLink href="#">document-FINAL.doc</ChatAttachmentLink>
            <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
          </ChatAttachment>
        </ChatBubble>
      </ChatMessage>
    </ChatLog>
  );
};

render(
  <MessageWithAttachment />
)
`.trim();

export const inboundComplexMessage = `
const ComplexMessage = () => {
  return (
    <ChatLog>
      <ChatMessage variant='inbound'>
        <ChatBubble>
          I have a copy of the receipt, can you print it?
        </ChatBubble>
        <ChatBubble>
          <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
            <ChatAttachmentLink href="#">receipt.pdf</ChatAttachmentLink>
            <ChatAttachmentDescription>9 MB</ChatAttachmentDescription>
          </ChatAttachment>
        </ChatBubble>
        <ChatMessageMeta aria-label="said by Gibby Radki at 11:27 AM">
          <ChatMessageMetaItem>
            <Avatar name="Gibby Radki" size="sizeIcon20" />
            Gibby Radki ・ 11:27 AM
          </ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    </ChatLog>
  );
};

render(
  <ComplexMessage />
)`.trim();
export const outboundComplexMessage = `
const ComplexMessage = () => {
  return (
    <ChatLog>
      <ChatMessage variant='outbound'>
        <ChatBubble>
        Here is the document:
        </ChatBubble>
        <ChatBubble>
          <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
            <ChatAttachmentLink href="#">document-FINAL.doc</ChatAttachmentLink>
            <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
          </ChatAttachment>
        </ChatBubble>
        <ChatMessageMeta aria-label="said by you at 11:27 AM">
          <ChatMessageMetaItem>11:27 AM</ChatMessageMetaItem>
        </ChatMessageMeta>
        <ChatMessageMeta aria-label="(read)">
          <ChatMessageMetaItem>Read</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    </ChatLog>
  );
};

render(
  <ComplexMessage />
)
`.trim();
export const basicChatEvent = `
const BasicChatEvent = () => {
  return (
    <ChatLog>
      <ChatEvent>
        <strong>Gibby Radki</strong> has joined the chat ・ 11:56 AM
      </ChatEvent>
    </ChatLog>
  );
};

render(
  <BasicChatEvent />
)
`.trim();
export const basicChatBookend = `
const ChatStartedBookend = () => {
  return (
    <ChatLog>
      <ChatBookend>
        <ChatBookendItem>Today</ChatBookendItem>
        <ChatBookendItem>
          <strong>Chat Started</strong> ・ 3:34pm
        </ChatBookendItem>
      </ChatBookend>
    </ChatLog>
  );
};

render(
  <ChatStartedBookend />
)
`.trim();
export const kitchenSink = `
const SampleChat = () => {
  return (
    <Box maxHeight='size40'>
      <ChatLog>
        <ChatBookend>
          <ChatBookendItem>Yesterday</ChatBookendItem>
          <ChatBookendItem>
            <strong>Chat Started</strong>・3:34 PM
          </ChatBookendItem>
        </ChatBookend>
        <ChatEvent>
          <strong>Gibby Radki</strong> has joined the chat・3:34 PM
        </ChatEvent>
        <ChatMessage variant='inbound'>
          <ChatBubble>
            Hello, what can I help you with?
          </ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki at 3:35 PM">
            <ChatMessageMetaItem>
              <Avatar name="Gibby Radki" size="sizeIcon20" />
              Gibby Radki ・ 3:35 PM
            </ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant='outbound'>
          <ChatBubble>
            Hi! What is your return policy?
          </ChatBubble>
          <ChatMessageMeta aria-label="said by you at 3:35 PM">
            <ChatMessageMetaItem>3:35 PM</ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant='inbound'>
          <ChatBubble>
            You have 30 days to send your items back. Here is the full policy if you would like to read more.
          </ChatBubble>
          <ChatBubble>
            <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
              <ChatAttachmentLink href="#">RETURN_POLICY.pdf</ChatAttachmentLink>
              <ChatAttachmentDescription>17 MB</ChatAttachmentDescription>
            </ChatAttachment>
          </ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki at 3:37 PM">
            <ChatMessageMetaItem>
              <Avatar name="Gibby Radki" size="sizeIcon20" />
              Gibby Radki ・ 3:37 PM
            </ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant='outbound'>
          <ChatBubble>
            Thank you
          </ChatBubble>
          <ChatMessageMeta aria-label="said by you at 3:40 PM">
            <ChatMessageMetaItem>3:40 PM</ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatBookend>
          <ChatBookendItem>Today</ChatBookendItem>
        </ChatBookend>
        <ChatMessage variant='outbound'>
          <ChatBubble>
            I have shipped the item back, how long will it take to get the refund?
          </ChatBubble>
          <ChatMessageMeta aria-label="said by you at 11:27 AM">
            <ChatMessageMetaItem>11:27 AM</ChatMessageMetaItem>
          </ChatMessageMeta>
          <ChatMessageMeta aria-label="(read)">
            <ChatMessageMetaItem>Read</ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant='inbound'>
          <ChatBubble>
            You should recieve the refund within 10 days.
          </ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki at 11:29 AM">
            <ChatMessageMetaItem>
              <Avatar name="Gibby Radki" size="sizeIcon20" />
              Gibby Radki ・ 11:29 AM
            </ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant='inbound'>
          <ChatBubble>
            Do you need help with anything else?
          </ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki at 11:36 AM">
            <ChatMessageMetaItem>
              <Avatar name="Gibby Radki" size="sizeIcon20" />
              Gibby Radki ・ 11:36 AM
            </ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatBookend>
        <ChatBookendItem>
          <strong>Chat Ended</strong>・11:45 AM
        </ChatBookendItem>
      </ChatBookend>
      </ChatLog>
    </Box>
  );
};

render(
  <SampleChat />
)
`.trim();

export const chatLoggerExample = `
const chatFactory = ([ message, variant, metaLabel, meta ]) => {
  const time = new Date(0).toLocaleString(
    'en-US',
    { hour: 'numeric', minute: 'numeric', timeZone: 'UTC', hour12: true }
  )

  return {
    variant,
    content: (
      <ChatMessage variant={variant}>
        <ChatBubble>{message}</ChatBubble>
        <ChatMessageMeta aria-label={metaLabel + time}>
          <ChatMessageMetaItem>{meta + time}</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    )
  }
};

const chatTemplates = [
  ["Hello", "inbound", "said by Gibby Radki at ", "Gibby Radki・"],
  ["Hi there", "outbound", "said by you at ", ""],
  ["Greetings", "inbound", "said by Gibby Radki at ", "Gibby Radki・"],
  ["Good to meet you", "outbound", "said by you at ", ""]
];

const ChatLoggerExample = () => {
  const [templateIdx, setTemplateIdx] = React.useState(2);
  const { chats, push, pop, clear } = useChatLogger(
    chatFactory(chatTemplates[0]),
    chatFactory(chatTemplates[1])
  );

  const pushChat = () => {
    const template = chatTemplates[templateIdx];
    push(chatFactory(template));
    setTemplateIdx((idx) => ++idx % chatTemplates.length);
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
      <ChatLogger chats={chats} />
    </Stack>
  )
}

render(<ChatLoggerExample />);
`.trim();
