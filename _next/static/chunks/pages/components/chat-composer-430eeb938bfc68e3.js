(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8772],{11598:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttachIcon:()=>i});var o=a(36669),r=a(55729),n=a(96316);let i=r.forwardRef(({as:e,display:t,element:a="ICON",size:i,color:l,title:s,decorative:c},d)=>{let h=`AttachIcon-${(0,o.GV)()}`;if(!c&&null==s)throw Error("[AttachIcon]: Missing a title for non-decorative icon.");return r.createElement(n.IconWrapper,{as:e,display:t,element:a,size:i,color:l,ref:d},r.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":h},s?r.createElement("title",{id:h},s):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.879 9.264l5.59-5.73a3.251 3.251 0 013.214-.924 3.347 3.347 0 012.36 2.42 3.447 3.447 0 01-.75 3.135l-.145.153-5.623 5.767a1.87 1.87 0 01-2.668-.023 1.987 1.987 0 01-.116-2.627l.099-.113 5.618-5.761c.195-.2.512-.2.708 0a.523.523 0 01.058.655l-.058.07-5.612 5.755a.94.94 0 00.011 1.295.885.885 0 001.174.09l.083-.073 5.624-5.767a2.4 2.4 0 00.628-2.296 2.333 2.333 0 00-1.645-1.686 2.264 2.264 0 00-2.117.523l-.129.127L4.587 9.99a3.866 3.866 0 000 5.371 3.64 3.64 0 005.097.139l.143-.139 6.818-6.99c.196-.2.513-.2.708 0a.523.523 0 01.058.655l-.058.071-6.818 6.99a4.626 4.626 0 01-6.656 0c-1.787-1.832-1.837-4.77-.15-6.663l.15-.16z"})))});i.displayName="AttachIcon"},22275:(e,t,a)=>{"use strict";a.d(t,{a:()=>l});var o=a(76127),r=a(8909),n=a(86146),i=a(55729),l=i.forwardRef(({children:e,disabled:t,element:a="INLINE_CONTROL_GROUP",errorText:l,helpText:s,legend:c,orientation:d="vertical",required:h,i18nRequiredLabel:p,fieldStyleProps:m,...u},g)=>{let C=!!m;return i.createElement(o.az,{...(0,o.x8)(u),as:"fieldset",element:a,margin:"space0",padding:"space0",minWidth:"0px",borderWidth:"borderWidth0",ref:g},i.createElement(n.J,{as:"legend",element:"LEGEND",htmlFor:void 0,required:h,marginBottom:"space0",disabled:t,i18nRequiredLabel:p},c),s&&i.createElement(r.$,{marginTop:"space0"},s),i.createElement(o.az,{element:`${a}_SET`,marginRight:C?void 0:"space20"},i.createElement(o.az,{display:C&&"horizontal"===d?"inline-flex":"block",width:C?"100%":void 0},i.Children.map(e,(e,t)=>i.createElement(o.az,{element:`${a}_FIELD`,display:"horizontal"===d?"inline-block":"block",flexBasis:C?"50%":void 0,marginTop:m?.marginTop?0===t&&"vertical"===d?"space40":m?.marginTop:"space40",marginRight:"horizontal"!==d||C?null:"space70",marginLeft:C&&"horizontal"===d?0===t?"space0":"space30":"space0"},e))),l&&i.createElement(o.az,{element:`${a}_ERROR_TEXT_WRAPPER`,marginTop:"space40"},i.createElement(r.$,{variant:"error"},l))))});l.displayName="InlineControlGroup"},35743:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>b,default:()=>N,getStaticProps:()=>f,mdxHeadings:()=>x,meta:()=>v}),a(55729);var o=a(11885),r=a(76127),n=a(51371),i=a(5713),l=a(11598),s=a(60951),c=a(95036),d=a(47837),h=a(99123);let p=`const RichTextExample = () => {
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

render(<RichTextExample/>)`.trim(),m=`const MaxHeightExample = () => {
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

render(<MaxHeightExample />)`.trim(),u=`const ResponsiveContainedAttachmentsExample = () => {
  const ExampleAttachment = () => (
    <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
      <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
      <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
    </ChatComposerAttachmentCard>
  )

  return (
    <ChatComposerContainer>
      <ChatComposer
        ariaLabel="A chat with attachments"
        initialValue="This is my initial value"
        config={{
          namespace: "customer-chat",
          onError: (e) => {
            throw e;
          },
        }}
      />
      <ChatComposerActionGroup>
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="attach files to the message" />
        </Button>
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
      <ChatComposerAttachmentGroup columns={[1, 1, 2, 3]}>
        {Array.from({ length: 6 }).map((_, index) => (
          <ExampleAttachment key={index} />
        ))}
      </ChatComposerAttachmentGroup>
    </ChatComposerContainer>
  )
}

render(<ResponsiveContainedAttachmentsExample />)`.trim(),g=`const ContainedDisabledExample = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  return (
    <>
      <Box marginBottom="space50">
        <Checkbox checked={isDisabled} onClick={() => setIsDisabled((disabled) => !disabled)}>
          Disable Input
        </Checkbox>
      </Box>
      <ChatComposerContainer variant="contained">
        <ChatComposer
          ariaLabel="A chat that is disabled"
          initialValue="This is my initial value"
          config={{
            namespace: "customer-chat",
            onError: (e) => {
              throw e;
            },
          }}
          disabled={isDisabled}
        />
        <ChatComposerActionGroup>
          <Button variant="secondary_icon" size="reset" aria-disabled={isDisabled} disabled={isDisabled}>
            <AttachIcon decorative={false} title="attach files to the message" />
          </Button>
          <Button variant="primary_icon" size="reset" aria-disabled={isDisabled} disabled={isDisabled}>
            <SendIcon decorative={false} title="Send" />
          </Button>
        </ChatComposerActionGroup>
      </ChatComposerContainer>
    </>
  );
}

render(<ContainedDisabledExample />)`.trim(),C=`const ContainedExample = () => {
  return (
    <ChatComposerContainer variant="contained">
      <ChatComposer
        ariaLabel="A chat with attachments"
        initialValue="This is my initial value"
        config={{
          namespace: "customer-chat",
          onError: (e) => {
            throw e;
          },
        }}
      />
      <ChatComposerActionGroup>
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="attach files to the message" />
        </Button>
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
    </ChatComposerContainer>
  );
}

render(<ContainedExample />)`.trim();var y=a(40615),b=!0;let v={title:"Chat Composer",package:"@twilio-paste/chat-composer",description:"A Chat Composer is an input made for users to type rich chat messages.",slug:"/components/chat-composer/"},f=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:x,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/chat-composer",storybookUrl:"/?path=/story/components-chat-composer--default"}}}),x=[{value:"Guidelines",depth:2},{value:"About Chat Composer",depth:3},{value:"ChatComposer",depth:3},{value:"Accessibility",depth:4},{value:"Lexical and plugins",depth:4},{value:"Auto Link Plugin",depth:5},{value:"ChatComposer component suite",depth:3},{value:"Examples",depth:2},{value:"ChatComposer with placeholder",depth:3},{value:"Chat Composer with initial value",depth:3},{value:"Chat Composer with max height",depth:3},{value:"Chat Composer with rich text",depth:3},{value:"Chat Composer with attachments",depth:3},{value:"Chat Composer contained variant",depth:3},{value:"Chat Composer disabled contained variant",depth:3},{value:"Chat Composer with Chat Log",depth:3},{value:"Chat Composer with AI Chat Log",depth:3},{value:"Chat Composer with AI Chat Logger",depth:3},{value:"Adding interactivity to ChatComposer with plugins",depth:3},{value:"onChange event handler",depth:4},{value:"ClearEditorPlugin",depth:4},{value:"Accessing Lexical State",depth:4},{value:"Custom plugins",depth:4}],I=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",t)},E=I("LivePreview"),A=I("StoryPreview"),w={meta:v,getStaticProps:f,mdxHeadings:x},k=y.A;function N({components:e,...t}){return(0,o.yg)(k,{...w,...t,components:e,mdxType:"MDXLayout"},(0,o.yg)(E,{scope:{ChatComposer:n.V4,ChatComposerContainer:n.aC,ChatComposerActionGroup:n.i$,Button:c.$n,SendIcon:i.SendIcon,AttachIcon:l.AttachIcon},language:"jsx",mdxType:"LivePreview"},`<ChatComposerContainer>
  <ChatComposer config={{namespace: 'customer-chat', onError: (e) => { throw e } }} placeholder="Chat text" ariaLabel="A basic chat composer" />
  <ChatComposerActionGroup>
    <Button variant="secondary_icon" size="reset">
      <AttachIcon decorative={false} title="attach files to the message" />
    </Button>
    <Button variant="primary_icon" size="reset">
      <SendIcon decorative={false} title="Send" />
    </Button>
  </ChatComposerActionGroup>
</ChatComposerContainer>`),(0,o.yg)("h2",null,"Guidelines"),(0,o.yg)("h3",null,"About Chat Composer"),(0,o.yg)("p",null,`A Chat Composer is an input made for users to type rich chat messages. Chat Composer is best used as one part of larger chat user interface to provide a seamless authoring experience.
Within the context of Paste, Chat Composer is most typically used alongside the `,(0,o.yg)("a",{parentName:"p",href:"/components/chat-log"},(0,o.yg)("inlineCode",{parentName:"a"},"Chat Log"))," and ",(0,o.yg)("a",{parentName:"p",href:"/components/ai-chat-log"},(0,o.yg)("inlineCode",{parentName:"a"},"AI Chat Log"))," components."),(0,o.yg)("h3",null,"ChatComposer"),(0,o.yg)("p",null,"When referring to ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposer")," it is the rich text area only. You can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposer")," component by itself, or use it within the ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposerContainer")," for consistent styling across chat features."),(0,o.yg)("h4",null,"Accessibility"),(0,o.yg)("p",null,"Chat Composer supports a variety of ARIA attributes which are passed into the content editable region of the component."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the surrounding UI includes a screen reader visible label, reference the label element using ",(0,o.yg)("inlineCode",{parentName:"li"},"aria-labelledby"),"."),(0,o.yg)("li",{parentName:"ul"},"If the surrounding UI does not include a screen reader visible label, use ",(0,o.yg)("inlineCode",{parentName:"li"},"aria-label")," to describe the input."),(0,o.yg)("li",{parentName:"ul"},"If the surrounding UI includes additional help or error text, use ",(0,o.yg)("inlineCode",{parentName:"li"},"aria-describedby")," to reference the associated element.")),(0,o.yg)("h4",null,"Lexical and plugins"),(0,o.yg)("p",null,"Chat Composer is built on top of the ",(0,o.yg)("a",{parentName:"p",href:"https://lexical.dev"},"Lexical"),` editor. Lexical is extensible and follows a declarative approach to configuration via JSX. Developers can leverage a
wide variety of `,(0,o.yg)("a",{parentName:"p",href:"https://github.com/twilio-labs/paste/blob/main/packages/paste-libraries/lexical/src/index.tsx"},"existing plugins")," via the ",(0,o.yg)("inlineCode",{parentName:"p"},"@twilio-paste/lexical-library"),` package or other
sources. Alternatively, developers can write their own custom plugin logic. Plugins are provided to the Chat Composer via the `,(0,o.yg)("inlineCode",{parentName:"p"},"children")," prop."),(0,o.yg)("h5",null,"Auto Link Plugin"),(0,o.yg)("p",null,"Chat Composer uses a custom ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/twilio-labs/paste/blob/main/packages/paste-core/components/chat-composer/src/AutoLinkPlugin.tsx"},(0,o.yg)("inlineCode",{parentName:"a"},"AutoLinkPlugin")),` internally
which you can see being configured `,(0,o.yg)("a",{parentName:"p",href:"https://github.com/twilio-labs/paste/blob/main/packages/paste-core/components/chat-composer/src/ChatComposer.tsx#L116"},"here")," as a JSX child."),(0,o.yg)("h3",null,"ChatComposer component suite"),(0,o.yg)("p",null,"The Chat Composer component suite offers a variety of components designed to enhance and enrich the chat experience. Each element plays a crucial role in maintaining a consistent and cohesive styling, ensuring a seamless user interaction. The available components include:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"ChatComposerContainer"),": The primary container that houses the entire chat composer interface."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"ChatComposerActionGroup"),": A collection of buttons and controls, allowing users to perform various actions."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"ChatComposerAttachmentGroup"),": Groups multiple attachments together in responsive columns."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"ChatComposerAttachmentCard"),": A card-like component for showcasing attachment previews, making it easy for users to view details at a glance with the option to set the icon for the attachment."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"ChatComposerAttachmentDescription"),": Provides a description or additional information about an attachment, adding context for the user."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"ChatComposerAttachmentLink"),": Creates clickable links for attachments, facilitating easy access and interaction.")),(0,o.yg)("h2",null,"Examples"),(0,o.yg)("h3",null,"ChatComposer with placeholder"),(0,o.yg)("p",null,"Set a placeholder value using a ",(0,o.yg)("inlineCode",{parentName:"p"},"placeholder")," prop."),(0,o.yg)(E,{scope:{ChatComposer:n.V4},language:"jsx",mdxType:"LivePreview"},'<ChatComposer config={{namespace: \'customer-chat\', onError: (e) => { throw e } }} placeholder="Chat text" ariaLabel="A placeholder chat composer" />'),(0,o.yg)("h3",null,"Chat Composer with initial value"),(0,o.yg)("p",null,"Set an initial value using an ",(0,o.yg)("inlineCode",{parentName:"p"},"initialValue"),` prop. This prop is limited to providing single line strings. For more complicated initial values interact with the Lexical API directly
using the `,(0,o.yg)("inlineCode",{parentName:"p"},"config")," prop and ",(0,o.yg)("inlineCode",{parentName:"p"},"editorState")," callback."),(0,o.yg)(E,{scope:{ChatComposer:n.V4},language:"jsx",mdxType:"LivePreview"},'<ChatComposer config={{namespace: \'customer-chat\', onError: (e) => { throw e } }} initialValue="This is my initial value" ariaLabel="An initial value chat composer" />'),(0,o.yg)("h3",null,"Chat Composer with max height"),(0,o.yg)("p",null,"Restrict the height of the composer using a ",(0,o.yg)("inlineCode",{parentName:"p"},"maxHeight")," prop."),(0,o.yg)(E,{noInline:!0,language:"jsx",scope:{ChatComposer:n.V4,$getRoot:h.Ni,$createParagraphNode:h.lJ,$createTextNode:h.sT},mdxType:"LivePreview"},m),(0,o.yg)("h3",null,"Chat Composer with rich text"),(0,o.yg)("p",null,"Set a rich text value using one of the Lexical formatting APIs such as ",(0,o.yg)("a",{parentName:"p",href:"https://lexical.dev/docs/api/classes/lexical.TextNode#toggleformat"},(0,o.yg)("inlineCode",{parentName:"a"},"toggleFormat"))),(0,o.yg)(E,{noInline:!0,language:"jsx",scope:{ChatComposer:n.V4,$getRoot:h.Ni,$createParagraphNode:h.lJ,$createTextNode:h.sT},mdxType:"LivePreview"},p),(0,o.yg)("h3",null,"Chat Composer with attachments"),(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposerAttachmentGroup")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposerAttachmentCard")," to display attached files. For responsive cards, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"columns")," prop on ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposerAttachmentGroup"),"."),(0,o.yg)(E,{noInline:!0,language:"jsx",scope:{SendIcon:i.SendIcon,Button:c.$n,SendIcon:i.SendIcon,AttachIcon:l.AttachIcon,DownloadIcon:s.DownloadIcon,ChatComposer:n.V4,ChatComposerContainer:n.aC,ChatComposerActionGroup:n.i$,ChatComposerAttachmentGroup:n.LI,ChatComposerAttachmentCard:n.yh,ChatComposerAttachmentLink:n.Q9,ChatComposerAttachmentDescription:n.Cp},mdxType:"LivePreview"},u),(0,o.yg)("h3",null,"Chat Composer contained variant"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposerContainer")," component has 2 variants, ",(0,o.yg)("inlineCode",{parentName:"p"},"default")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"contained"),"."),(0,o.yg)(E,{noInline:!0,language:"jsx",scope:{SendIcon:i.SendIcon,Button:c.$n,SendIcon:i.SendIcon,AttachIcon:l.AttachIcon,DownloadIcon:s.DownloadIcon,ChatComposer:n.V4,ChatComposerContainer:n.aC,ChatComposerActionGroup:n.i$},mdxType:"LivePreview"},C),(0,o.yg)("h3",null,"Chat Composer disabled contained variant"),(0,o.yg)("p",null,"When the container is disabled, styling is applied to the container component. The disabled state is managed at the implementation level. If action buttons are included, their disabled state must also be managed by the developer."),(0,o.yg)(E,{noInline:!0,language:"jsx",scope:{SendIcon:i.SendIcon,Button:c.$n,SendIcon:i.SendIcon,AttachIcon:l.AttachIcon,DownloadIcon:s.DownloadIcon,Box:r.az,Checkbox:d.Sc,ChatComposer:n.V4,ChatComposerContainer:n.aC,ChatComposerActionGroup:n.i$},mdxType:"LivePreview"},g),(0,o.yg)("h3",null,"Chat Composer with Chat Log"),(0,o.yg)("p",null,"Use Chat Composer alongside other Paste components such as ",(0,o.yg)("a",{parentName:"p",href:"/components/chat-log"},"Chat Log")," to build more complex chat UI."),(0,o.yg)(A,{title:"Chat Composer with Chat Log example",storyID:"components-chat-composer-logsexperience--chat-log-story",code:`
export const ChatComposerChatLogExample = () => {
  const { chats, push } = useChatLogger(
    {
      content: (
        <ChatBookend>
          <ChatBookendItem>Today</ChatBookendItem>
          <ChatBookendItem>
            <strong>Chat Started</strong>・3:34 PM
          </ChatBookendItem>
        </ChatBookend>
      ),
    },
    {
      variant: "inbound",
      content: (
        <ChatMessage variant="inbound">
          <ChatBubble>Quisque ullamcorper ipsum vitae lorem euismod sodales.</ChatBubble>
          <ChatBubble>
            <ChatAttachment attachmentIcon={<DownloadIcon color="colorTextIcon" decorative />}>
              <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
              <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
            </ChatAttachment>
          </ChatBubble>
          <ChatMessageMeta aria-label="said by Gibby Radki at 5:04pm">
            <ChatMessageMetaItem>Gibby Radki ・ 5:04 PM</ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
      ),
    },
    {
      content: (
        <ChatEvent>
          <strong>Lauren Gardner</strong> has joined the chat ・ 4:26 PM
        </ChatEvent>
      ),
    },
    {
      variant: "inbound",
      content: (
        <ChatMessage variant="inbound">
          <ChatBubble>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ChatBubble>
          <ChatMessageMeta aria-label="said by Lauren Gardner at 4:30pm">
            <ChatMessageMetaItem>
              <Avatar name="Lauren Gardner" size="sizeIcon20" />
              Lauren Gardner ・ 4:30 PM
            </ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
      ),
    },
  );
  const [message, setMessage] = React.useState("");
  const [mounted, setMounted] = React.useState(false);
  const loggerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  React.useEffect(() => {
    if (!mounted || !loggerRef.current) return;
    scrollerRef.current?.scrollTo({ top: loggerRef.current.scrollHeight, behavior: "smooth" });
  }, [chats, mounted]);
  const handleComposerChange = (editorState): void => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setMessage(text);
    });
  };
  const submitMessage = (): void => {
    if (message === "") return;
    push(createNewMessage(message));
  };
  const editorInstanceRef = React.useRef<LexicalEditor>(null);
  return (
    <Box>
      <Box ref={scrollerRef} overflowX="hidden" overflowY="auto" maxHeight="size50" tabIndex={0}>
        <ChatLogger ref={loggerRef} chats={chats} />
      </Box>
      <Box
        borderStyle="solid"
        borderWidth="borderWidth0"
        borderTopWidth="borderWidth10"
        borderColor="colorBorderWeak"
        columnGap="space30"
        paddingX="space70"
        paddingTop="space50"
      >
        <ChatComposerContainer>
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
            onChange={handleComposerChange}
            editorInstanceRef={editorInstanceRef}
          >
            <ClearEditorPlugin />
            <EnterKeySubmitPlugin onKeyDown={submitMessage} />
          </ChatComposer>
          <ChatComposerActionGroup>
            <Button variant="secondary_icon" size="reset">
              <AttachIcon decorative={false} title="attach files to the message" />
            </Button>
            <Button
              variant="primary_icon"
              size="reset"
              onClick={() => {
                submitMessage();
                editorInstanceRef.current?.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
              }}
            >
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </Box>
    </Box>
  );
}:`,mdxType:"StoryPreview"}),(0,o.yg)("h3",null,"Chat Composer with AI Chat Log"),(0,o.yg)("p",null,"Use Chat Composer alongside other Paste components such as ",(0,o.yg)("a",{parentName:"p",href:"/components/ai-chat-log"},"AI Chat Log")," to build more complex chat UI. For the AI experience be sure to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"contained")," variant."),(0,o.yg)(A,{title:"Chat Composer with Chat Log example",storyID:"components-chat-composer-logsexperience--ai-chat-log-composer",code:`
export const ChatComposerAIChatLogExample = () => {
  const { aiChats, push } = useAIChatLogger(
    {
      variant: "user",
      content: (
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="you said at 2:36pm">Gibby Radki</AIChatMessageAuthor>
          <AIChatMessageBody>Hi, I am getting errors codes when sending an SMS.</AIChatMessageBody>
        </AIChatMessage>
      ),
    },
    {
      variant: "bot",
      content: (
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Error codes can be returned from various parts of the process. What error codes are you encountering?
            <Box marginTop="space50">
              <ButtonGroup>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" onClick={() => {}} size="rounded_small">
                  30009
                </Button>
              </ButtonGroup>
            </Box>
          </AIChatMessageBody>
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
        </AIChatMessage>
      ),
    }
  );
  const [message, setMessage] = React.useState("");
  const [mounted, setMounted] = React.useState(false);
  const loggerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  React.useEffect(() => {
    if (!mounted || !loggerRef.current) return;
    const scrollPosition: any = scrollerRef.current;
    const scrollHeight: any = loggerRef.current;
    scrollPosition?.scrollTo({ top: scrollHeight.scrollHeight, behavior: "smooth" });
  }, [aiChats, mounted]);
  const handleComposerChange = (editorState): void => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setMessage(text);
    });
  };
  const submitMessage = (): void => {
    if (message === "") return;
    push({
      variant: "user",
      content: (
        <AIChatMessage variant="user">
          <AIChatMessageAuthor aria-label="You said at 2:39pm">Gibby Radki</AIChatMessageAuthor>
          <AIChatMessageBody>{message}</AIChatMessageBody>
        </AIChatMessage>
      ),
    });
  };
  const editorInstanceRef = React.useRef<LexicalEditor>(null);
  return (
    <Box>
      <Box ref={scrollerRef} overflowX="hidden" overflowY="auto" maxHeight="size50" tabIndex={0}>
        <AIChatLogger ref={loggerRef} aiChats={aiChats} />
      </Box>
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
          onChange={handleComposerChange}
          editorInstanceRef={editorInstanceRef}
        >
          <ClearEditorPlugin />
          <EnterKeySubmitPlugin onKeyDown={submitMessage} />
        </ChatComposer>
        <ChatComposerActionGroup>
          <Button
            variant="primary_icon"
            size="reset"
            onClick={() => {
              submitMessage();
              editorInstanceRef.current?.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
            }}
          >
            <SendIcon decorative={false} title="Send" />
          </Button>
        </ChatComposerActionGroup>
        <ChatComposerActionRow>
          <Button variant="secondary" size="circle_small">
            <Box borderWidth="borderWidth10" borderColor="colorBorderWeaker" borderRadius="borderRadiusCircle">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Box>
          </Button>
           <Tooltip
            state={tooltip}
            text="Chat history"
          >
            <Button variant="secondary" size="circle_small">
              <EmojiIcon decorative={false} title="Chat history"/>
            </Button>
          </Tooltip>
  
          <>
            <MenuButton {...menu} variant="secondary" size="circle_small">
               <MoreIcon decorative={false} title="More actions"/> 
            </MenuButton>
            <Menu {...menu} aria-label="Preferences">
              <MenuItem {...menu}>
                <Box display="flex" alignItems="center" columnGap="space20">
                  <HistoryIcon decorative color="colorTextIcon" /> Chat history
                </Box>
              </MenuItem>
              <MenuItem {...menu}>
                <Box display="flex" alignItems="center" columnGap="space20">
                  <AgentIcon decorative color="colorTextIcon" /> Contact an agent
                </Box>
              </MenuItem>
              <MenuItem {...menu}>
                <Box display="flex" alignItems="center" columnGap="space20">
                  <DocumentationIcon decorative color="colorTextIcon" /> Quick Start Guide
                </Box>
              </MenuItem>
              <MenuSeparator {...menu} />
              <MenuItem {...menu}>
                Privacy Policy
              </MenuItem>
              <MenuItem {...menu}>
                Terms of Service
              </MenuItem>
            </Menu>
          </>
        </ChatComposerActionRow>
      </ChatComposerContainer>
    </Box>
  );
};`,mdxType:"StoryPreview"}),(0,o.yg)("h3",null,"Chat Composer with AI Chat Logger"),(0,o.yg)("p",null,"Use Chat Composer alongside other Paste components such as ",(0,o.yg)("a",{parentName:"p",href:"/components/ai-chat-log"},"Chat Log")," to build more complex chat UI."),(0,o.yg)("h3",null,"Adding interactivity to ChatComposer with plugins"),(0,o.yg)("p",null,"In the above example, we're using 2 Lexical plugins: ",(0,o.yg)("inlineCode",{parentName:"p"},"ClearEditorPlugin")," that is provided by Lexical, and a custom plugin, ",(0,o.yg)("inlineCode",{parentName:"p"},"EnterKeySubmitPlugin"),". We also keep track of the content provided to the composer via the ",(0,o.yg)("inlineCode",{parentName:"p"},"onChange")," handler. Together we can add custom interactivity such as:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Clear the editor on button click using ",(0,o.yg)("inlineCode",{parentName:"li"},"ClearEditorPlugin")),(0,o.yg)("li",{parentName:"ul"},"Submit on enter key press and submit button handler using ",(0,o.yg)("inlineCode",{parentName:"li"},"EnterKeySubmitPlugin"))),(0,o.yg)("p",null,"Plugins are functions that must be children of the ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposer")," component, so that they can access the Composer context."),(0,o.yg)("h4",null,(0,o.yg)("inlineCode",{parentName:"h4"},"onChange")," event handler"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"onChange")," handler provided to the ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposer")," takes 3 arguments, the first of which is the ",(0,o.yg)("a",{parentName:"p",href:"https://lexical.dev/docs/concepts/editor-state#understanding-the-editor-state"},(0,o.yg)("inlineCode",{parentName:"a"},"editorState")),". This allows us to read the current content of the editor using the utilities provided by Lexical."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"$getRoot")," is a utility to access the composer root ",(0,o.yg)("a",{parentName:"p",href:"https://lexical.dev/docs/api/classes/lexical.ElementNode"},(0,o.yg)("inlineCode",{parentName:"a"},"ElementNode")),". We can then get the text content of the editor everytime it is updated, and store it in our component state for later use."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`const handleComposerChange = (editorState: EditorState): void => {
  editorState.read(() => {
    const text = $getRoot().getTextContent();
    setMessage(text);
  });
};
`)),(0,o.yg)("h4",null,(0,o.yg)("inlineCode",{parentName:"h4"},"ClearEditorPlugin")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"ClearEditorPlugin")," supplied by Lexical allows you to build functionality into the composer that will clear the composer content when a certain action is performed."),(0,o.yg)("p",null,"When passed as a child to ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposer"),", it will automatically register a ",(0,o.yg)("inlineCode",{parentName:"p"},"CLEAR_EDITOR_COMMAND"),". You can then dispatch this command from elsewhere to clear the composer content. In the example, we created a plugin: ",(0,o.yg)("inlineCode",{parentName:"p"},"EnterKeySubmitPlugin")," which dispatch the ",(0,o.yg)("inlineCode",{parentName:"p"},"CLEAR_EDITOR_COMMAND"),", and clear the composer content as a result."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`<ChatComposer onChange={handleComposerChange}>
  <ClearEditorPlugin />
</ChatComposer>
`)),(0,o.yg)("h4",null,"Accessing Lexical State"),(0,o.yg)("p",null,"To access the Lexical state out of the context we make use of the ",(0,o.yg)("a",{parentName:"p",href:"https://lexical.dev/docs/react/plugins#lexicaleditorrefplugin"},(0,o.yg)("inlineCode",{parentName:"a"},"<EditorRedPlugin/>"))," provided by the library. In order to use this you must create a ref to the LexicalEditor instance and pass it to the ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposer")," component."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`export const ChatComposerImpl = () => {
  const editorInstanceRef = React.useRef<LexicalEditor>(null);

  return (
    <ChatComposer
      ariaLabel="Message"
      placeholder="Type here..."
      onChange={handleComposerChange}
      editorInstanceRef={editorInstanceRef}
    >
      <ClearEditorPlugin />
    </ChatComposer>
  );
};
`)),(0,o.yg)("h4",null,"Custom plugins"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"EnterKeySubmitPlugin")," is a custom plugin that submits a user message and clear the composer content when the enter key is pressed. They first must be passed to the ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposer")," as a child."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`<ChatComposer onChange={handleComposerChange}>
  <ClearEditorPlugin />
  <EnterKeySubmitPlugin />
</ChatComposer>
`)),(0,o.yg)("p",null,'Once "registered" as children of ',(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposer"),", the plugins gain access to the composer context and can dispatch commands. They can also return JSX to be rendered into the composer. It is recommended to avoid putting buttons in the Composer, instead use the container with ",(0,o.yg)("inlineCode",{parentName:"p"},"ChatComposerActionGroup"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`export const EnterKeySubmitPlugin = ({ onKeyDown }: { onKeyDown: () => void }): null => {
  // get the editor from the composer context
  const [editor] = useLexicalComposerContext();

  const handleEnterKey = React.useCallback(
    (event: KeyboardEvent) => {
      const { shiftKey, ctrlKey } = event;
      if (shiftKey || ctrlKey) return false;
      event.preventDefault();
      event.stopPropagation();
      onKeyDown();
      editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
      return true;
    },
    [editor, onKeyDown]
  );

  React.useEffect(() => {
    // register the command to be dispatched when the enter key is pressed
    return editor.registerCommand(KEY_ENTER_COMMAND, handleEnterKey, COMMAND_PRIORITY_HIGH);
  }, [editor, handleEnterKey]);
  return null;
};
`)),(0,o.yg)("p",null,"Here we're rendering a button that when clicked can call a callback function, and dispatch the ",(0,o.yg)("inlineCode",{parentName:"p"},"CLEAR_EDITOR_COMMAND")," for the ",(0,o.yg)("inlineCode",{parentName:"p"},"ClearEditorPlugin")," respond to. We use it to add a new chat message in the chat log, and then clear the composer ready for the next message to be typed."))}N.isMDXComponent=!0},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>g});var o=a(72387),r=a(76127),n=a(95669),i=a.n(n),l=a(81278);a(55729);var s=a(10511),c=a(43084),d=a(10732),h=a(62887),p=a(63437),m=a(38992);let u={h1:()=>null},g=({children:e,meta:t,navigationData:a,data:n,mdxHeadings:g,pageHeaderData:{categoryRoute:C,githubUrl:y,storybookUrl:b}})=>{let v=t.title?`${t.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,f=t.description||m.DZ.DESCRIPTION,x=(0,l.useRouter)();return(0,o.FD)(p.T,{navigationData:a,children:[(0,o.FD)(i(),{children:[(0,o.Y)("title",{children:v}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${x.pathname}`}),(0,o.Y)("meta",{name:"description",content:f},"description")]}),(0,o.FD)(s.s,{children:[(0,o.Y)(h.c,{categoryRoute:C,githubUrl:y,storybookUrl:b,data:n}),(0,o.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(d.i,{data:g}),(0,o.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(c.Q,{componentOverrides:t.package?u:{},children:e})})]})]})]})}},47837:(e,t,a)=>{"use strict";a.d(t,{$Q:()=>f,Ri:()=>b,Sc:()=>v,iA:()=>y,zc:()=>x});var o=a(79559),r=a(76127),n=a(98536),i=a(81423),l=a(86146),s=a(7658),c=a(36669),d=a(55729),h=a(22275),p=a(8909),m=d.createContext({disabled:!1,name:void 0,hasError:void 0,onChange:()=>{}}),u={paddingTop:"space20",paddingRight:"space30",paddingBottom:"space20",paddingLeft:"space30",borderRadius:"borderRadius20",backgroundColor:"colorBackground"},g={...u,backgroundColor:"colorBackground"},C={paddingLeft:"space30",paddingRight:"space30"},y=d.forwardRef((e,t)=>d.createElement(r.az,{...e,ref:t,as:"input",type:"checkbox",size:"size0",border:"none",overflow:"hidden",padding:"space0",margin:"space0",whiteSpace:"nowrap",textTransform:"none",position:"absolute",clip:"rect(0 0 0 0)"}));y.displayName="HiddenCheckbox";var b=({checked:e,element:t,indeterminate:a})=>a?d.createElement(i.MinusIcon,{element:t,decorative:!0,color:"inherit",size:"sizeIcon10"}):d.createElement(n.CheckboxCheckIcon,{element:t,display:e?"block":"none",decorative:!0,color:"inherit",size:"sizeIcon10"});b.displayName="CheckboxIcon";var v=d.forwardRef(({checked:e,defaultChecked:t,element:a="CHECKBOX",children:n,helpText:i,id:h,indeterminate:p,isSelectAll:v,isSelectAllChild:f,required:x,onChange:I,...E},A)=>{if(null!=e&&null!=t)throw Error('[Paste Checkbox] Do not provide both "defaultChecked" and "checked" to Checkbox at the same time. Please consider if you want this component to be controlled or uncontrolled.');let[w,k]=d.useState(t),N=d.useContext(m),R=(0,c.GV)(),B=h||(0,c.GV)(),M=d.useMemo(()=>void 0!==e,[]),T=M?e:w,S=d.useCallback(e=>{M?I?I(e):N.onChange(e):k(e.target.checked)},[I,N.onChange]),L=null!=E.disabled?E.disabled:N.disabled,_=null!=E.name?E.name:N.name,P=null!=E.hasError?E.hasError:N.hasError,D={};return v&&(D=!L&&(T||p)?g:u),f&&(D=C),d.createElement(r.az,{element:a,display:"inline-flex",position:"relative",flexDirection:"column",...D},d.createElement(y,{...(0,r.x8)(E),checked:e,defaultChecked:t,disabled:L,name:_,onChange:S,"aria-describedby":R,"aria-checked":p?"mixed":e,"aria-invalid":P,id:B,required:x,ref:A}),d.createElement(o.g$,{disabled:L,htmlFor:B},d.createElement(o.BJ,{alignItems:"center",borderRadius:"borderRadius20",element:`${a}_CONTROL`,disabled:L,position:"relative",type:"checkbox"},d.createElement(b,{element:`${a}_ICON`,checked:T,indeterminate:p})),d.createElement(o.pX,{element:`${a}_LABEL_TEXT`,fontWeight:v?null:"fontWeightMedium"},d.createElement(s.Ss,{verticalAlign:"top"},x&&d.createElement(s.pV,{spacing:"space20"},d.createElement(l.j,null)),d.createElement(s.To,null,n)))),i&&d.createElement(o._v,{element:`${a}_HELP_TEXT_WRAPPER`,helpTextId:R},i))});v.displayName="Checkbox";var f=d.forwardRef(({children:e,element:t="CHECKBOX_GROUP",disabled:a=!1,errorText:o,isSelectAll:r=!1,name:n,onChange:i,orientation:l="vertical",i18nRequiredLabel:s="(required)",...c},p)=>{let u=d.useCallback(e=>{i?.(e.target.checked)},[i]),g=d.useMemo(()=>({disabled:a,name:n,onChange:u,hasError:!!o||void 0}),[a,n,u]);return d.createElement(m.Provider,{value:g},d.createElement(h.a,{...c,element:t,disabled:a,errorText:o,name:n,orientation:l,ref:p,i18nRequiredLabel:s},d.Children.map(e,(e,t)=>d.isValidElement(e)?d.cloneElement(e,{isSelectAll:r&&0===t,isSelectAllChild:r&&"vertical"===l&&0!==t}):e)))});f.displayName="CheckboxGroup";var x=d.forwardRef(({children:e,element:t="CHECKBOX_DISCLAIMER",errorText:a,...o},n)=>d.createElement(d.Fragment,null,d.createElement(r.az,{element:t,backgroundColor:"colorBackground",borderRadius:"borderRadius20",padding:"space50"},d.createElement(v,{...o,hasError:null!=a,ref:n},e)),a&&d.createElement(r.az,{marginTop:"space30",element:`${t}_ERROR_TEXT_WRAPPER`,marginLeft:"space50"},d.createElement(p.$,{variant:"error"},a))));x.displayName="CheckboxDisclaimer"},60951:(e,t,a)=>{"use strict";a.r(t),a.d(t,{DownloadIcon:()=>i});var o=a(36669),r=a(55729),n=a(96316);let i=r.forwardRef(({as:e,display:t,element:a="ICON",size:i,color:l,title:s,decorative:c},d)=>{let h=`DownloadIcon-${(0,o.GV)()}`;if(!c&&null==s)throw Error("[DownloadIcon]: Missing a title for non-decorative icon.");return r.createElement(n.IconWrapper,{as:e,display:t,element:a,size:i,color:l,ref:d},r.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":h},s?r.createElement("title",{id:h},s):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M10.625 3.5a.625.625 0 10-1.25 0v8.491L7.342 9.958a.625.625 0 10-.884.884l3.125 3.125c.244.244.64.244.884 0l3.125-3.125a.625.625 0 00-.884-.884l-2.083 2.083V3.5zm-7.75 13c0-.345.28-.625.625-.625h13a.625.625 0 110 1.25h-13a.625.625 0 01-.625-.625z"})))});i.displayName="DownloadIcon"},79559:(e,t,a)=>{"use strict";a.d(t,{BJ:()=>c,_v:()=>p,g$:()=>d,pX:()=>h});var o=a(76127),r=a(8909),n=a(86146),i=a(86860),l=a(629),s=a(55729),c=s.forwardRef(({children:e,disabled:t,applyHoverStyles:a=!1,element:o="BASE_RADIO_CHECKBOX_CONTROL",...r},n)=>s.createElement(i.K,{as:"span",ref:n,display:"flex",element:o,backgroundColor:"colorBackgroundBody",borderColor:a?"colorBorderPrimaryStronger":"colorBorder",borderStyle:"solid",borderWidth:"borderWidth10",height:"sizeSquare50",marginRight:"space20",marginY:"space10",width:"sizeSquare50",color:"colorTextWeakest",_hoverSibling:{borderColor:"colorBorderPrimaryStronger",color:"colorTextWeakest"},_focusSibling:{borderColor:"colorBorder",boxShadow:"shadowFocus",color:"colorTextInverse"},_activeSibling:t?void 0:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger",color:"colorTextWeakest"},_checkedSibling:{borderColor:"colorBorderPrimary",backgroundColor:"colorBackgroundPrimary",color:"colorTextInverse"},_disabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground"},_invalidSibling:{borderColor:"colorBorderError"},_invalidAndHoverSibling:{borderColor:"colorBorderErrorStronger"},_invalidAndDisabledSibling:{borderColor:"colorBorderWeak"},_checkedAndHoverSibling:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger",color:"colorTextWeakest"},_checkedAndFocusSibling:{borderColor:"colorBorderPrimary",backgroundColor:"colorBackgroundPrimary",color:"colorTextInverse"},_checkedAndActiveSibling:t?void 0:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger"},_checkedAndDisabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground",color:"colorTextWeaker"},_checkedAndInvalidSibling:{borderColor:"colorBorderError",backgroundColor:"colorBackgroundError",color:"colorTextInverse"},_checkedAndInvalidAndHoverSibling:{borderColor:"colorBorderErrorStronger",backgroundColor:"colorBackgroundErrorStronger"},_checkedAndInvalidAndDisabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground",color:"colorTextWeaker"},...r},e));c.displayName="BaseRadioCheckboxControl";var d=s.forwardRef(({children:e,...t},a)=>s.createElement(n.J,{...t,marginBottom:"space0",ref:a},s.createElement(o.az,{as:"span",display:"flex"},e)));d.displayName="BaseRadioCheckboxLabel";var h=s.forwardRef(({children:e,element:t="BASE_RADIO_CHECKBOX_LABEL_TEXT",...a},o)=>s.createElement(l.EY,{as:"span",color:"currentColor",marginLeft:"space20",element:t,ref:o,...a},e));h.displayName="BaseRadioCheckboxLabelText";var p=s.forwardRef(({children:e,helpTextId:t,element:a="BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER"},n)=>s.createElement(o.az,{as:"span",display:"block",element:a,marginLeft:"space70",ref:n},s.createElement(r.$,{id:t,marginTop:"space0"},e)));p.displayName="BaseRadioCheckboxHelpText"},81423:(e,t,a)=>{"use strict";a.r(t),a.d(t,{MinusIcon:()=>i});var o=a(36669),r=a(55729),n=a(96316);let i=r.forwardRef(({as:e,display:t,element:a="ICON",size:i,color:l,title:s,decorative:c},d)=>{let h=`MinusIcon-${(0,o.GV)()}`;if(!c&&null==s)throw Error("[MinusIcon]: Missing a title for non-decorative icon.");return r.createElement(n.IconWrapper,{as:e,display:t,element:a,size:i,color:l,ref:d},r.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":h},s?r.createElement("title",{id:h},s):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.167 9.5c.46 0 .833.448.833 1 0 .513-.322.936-.736.993l-.097.007H5.833c-.46 0-.833-.448-.833-1 0-.513.322-.936.736-.993l.097-.007h8.334z"})))});i.displayName="MinusIcon"},86860:(e,t,a)=>{"use strict";a.d(t,{K:()=>l});var o=a(76127),r=a(27717),n=a(55729),i=(0,r.I4)(o.az)(({_activeSibling:e,_boxChild:t,_checkedAndActiveSibling:a,_checkedAndDisabledSibling:o,_checkedAndFocusSibling:n,_checkedAndHoverSibling:i,_checkedAndInvalidSibling:l,_checkedAndInvalidAndDisabledSibling:s,_checkedAndInvalidAndHoverSibling:c,_checkedSibling:d,_checkedSiblingAndBoxChild:h,_disabledSibling:p,_focusSibling:m,_hoverSibling:u,_invalidSibling:g,_invalidAndHoverSibling:C,_invalidAndDisabledSibling:y,type:b="checkbox"})=>{let v=`input[type=${b}]:active + label &`,f=`input[type=${b}]:checked + label &, input[type=${b}][aria-checked=mixed] + label &`,x=`input[type=${b}]:checked:active + label &, input[type=${b}][aria-checked=mixed]:active + label &`,I=`input[type=${b}]:checked + label & > *, input[type=${b}][aria-checked=mixed] + label & > *`,E=`input[type=${b}]:checked:disabled + label &, input[type=${b}][aria-checked=mixed]:disabled + label &`,A=`input[type=${b}]:checked:focus + label &, input[type=${b}][aria-checked=mixed]:focus + label &`,w=`input[type=${b}]:checked:hover:not(:disabled) + label &, input[type=${b}][aria-checked=mixed]:hover:not(:disabled) + label &`,k=`input[type=${b}][aria-invalid=true]:checked + label &`,N=`input[type=${b}][aria-invalid=true]:checked:disabled + label &`,R=`input[type=${b}][aria-invalid=true]:checked:hover:not(:disabled) + label &`,B=`input[type=${b}] + label & > *`,M=`input[type=${b}]:disabled + label &`,T=`input[type=${b}]:focus + label &`,S=`input[type=${b}]:hover:not(:disabled):not(:checked) + label &`,L=`input[type=${b}][aria-invalid=true] + label &`,_=`input[type=${b}][aria-invalid=true]:hover:not(:disabled) + label &`,P=`input[type=${b}][aria-invalid=true]:disabled + label &`;return(0,r.AH)({[v]:e,[f]:d,[x]:a,[I]:h,[E]:o,[A]:n,[w]:i,[k]:l,[N]:s,[R]:c,[B]:t,[M]:p,[T]:m,[S]:u,[L]:g,[_]:C,[P]:y})}),l=n.forwardRef(({"aria-hidden":e="true",alignItems:t="center",display:a="inline-flex",element:o="SIBLING_BOX",flexShrink:r=0,justifyContent:l="center",transition:s="all 120ms",...c},d)=>n.createElement(i,{alignItems:t,"aria-hidden":e,display:a,element:o,flexShrink:r,justifyContent:l,ref:d,transition:s,...c}));l.displayName="SiblingBox"},89358:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/chat-composer",function(){return a(35743)}])},98536:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CheckboxCheckIcon:()=>i});var o=a(36669),r=a(55729),n=a(96316);let i=r.forwardRef(({as:e,display:t,element:a="ICON",size:i,color:l,title:s,decorative:c},d)=>{let h=`CheckboxCheckIcon-${(0,o.GV)()}`;if(!c&&null==s)throw Error("[CheckboxCheckIcon]: Missing a title for non-decorative icon.");return r.createElement(n.IconWrapper,{as:e,display:t,element:a,size:i,color:l,ref:d},r.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":h},s?r.createElement("title",{id:h},s):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.59 5.916a1.386 1.386 0 00-1.98 0l-5.04 5.138L6.39 8.83a1.38 1.38 0 00-1.98 0 1.448 1.448 0 000 2.018l3.171 3.233a1.382 1.382 0 001.98 0l6.03-6.148a1.448 1.448 0 000-2.018z"})))});i.displayName="CheckboxCheckIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,4987,636,6593,8792],()=>e(e.s=89358)),_N_E=e.O()}]);