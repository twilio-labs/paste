export const RichTextExample = `const RichTextExample = () => {
  return (
    <ChatComposer
      ariaLabel="A rich text chat composer"
      config={{
        namespace: 'customer-chat',
        onError (e) { throw e },
        editorState () {
          const root = $getRoot();

          if (root.getFirstChild() !== null) return;

          root.append(
            $createParagraphNode().append(
              $createTextNode('Hello '),
              $createTextNode('world! ').toggleFormat('bold'),
              $createTextNode('This is a '),
              $createTextNode('chat composer ').toggleFormat('italic'),
              $createTextNode('with rich text functionality.')
            )
          );
        },
      }}
    />
  )
}

render(<RichTextExample/>)`.trim();

export const MaxHeightExample = `const MaxHeightExample = () => {
  return (
    <ChatComposer
      maxHeight="size10"
      ariaLabel="A max height chat composer"
      config={{
        namespace: 'customer-chat',
        onError (e) { throw e },
        editorState () {
          const root = $getRoot();

          if (root.getFirstChild() !== null) return;

          for (let i = 0; i < 10; i++) {
            root.append(
              $createParagraphNode().append(
                $createTextNode('this is a really really long initial value')
              )
            );
          }
        },
      }}
    />
  )
}

render(<MaxHeightExample />)`.trim();

export const ChatDialogExample = `const ChatDialog = () => {
  const scrollRef = React.createRef();

  return <>
    <Box overflowY="scroll" maxHeight="size50" tabIndex={0}>
      <ChatLog>
        <ChatBookend>
          <ChatBookendItem>Today</ChatBookendItem>
        </ChatBookend>
        <ChatEvent>
          <strong>Lauren Gardner</strong> has joined the chat ・ 4:26 PM
        </ChatEvent>
        <ChatMessage variant="inbound">
          <ChatBubble>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki at 4:30pm">
            <ChatMessageMetaItem>
              <Avatar name="Gibby Radki" size="sizeIcon20" />
              Gibby Radki ・ 4:30 PM
            </ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble>Nulla sit amet elit mauris.</ChatBubble>
          <ChatMessageMeta aria-label="said by you at 4:32pm">
            <ChatMessageMetaItem>4:32 PM</ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
        <ChatMessage variant="inbound">
          <ChatBubble>
            Curabitur enim lorem, cursus et massa non, pretium faucibus lacus. Donec odio neque, consectetur a suscipit sit
            amet, blandit id erat.
          </ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki at 4:48pm">
            <ChatMessageMetaItem>4:48 PM</ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
      </ChatLog>
    </Box>
    <Box
      ref={scrollRef}
      borderStyle="solid"
      borderWidth="borderWidth0"
      borderTopWidth="borderWidth10"
      borderColor="colorBorderWeak"
      display="flex"
      flexDirection="row"
      columnGap="space30"
      paddingX="space40"
      paddingY="space30"
    >
      <ChatComposer
        ariaLabel="Message"
        placeholder="Chat text"
        maxHeight="space20"
        config={{
          namespace: 'customer-chat',
          onError (e) { throw e },
        }}
      >
        <AutoScrollPlugin scrollRef={scrollRef} />
      </ChatComposer>
      <Box display="flex" flexDirection="row" columnGap="space30" alignItems="flex-start" paddingY="space30">
        <Box display="flex" alignItems="flex-start">
          <Button variant="primary_icon" size="reset">
            <SendIcon decorative={false} title="Send message" />
          </Button>
        </Box>
      </Box>
    </Box>
  </>
};

render(<ChatDialog />)`.trim();
