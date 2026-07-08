(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1588],{8478:(e,t,a)=>{"use strict";a.d(t,{e:()=>l});var n=a(76127),o=a(27717),s=a(55729),i=o.I4.span((0,o.AH)({"& > button":{zIndex:1},"& > button:hover, & > button[aria-pressed=true]":{zIndex:2},"& > button:focus":{zIndex:3},"& > button:disabled":{zIndex:0},"& > button:first-of-type":{borderTopRightRadius:0,borderBottomRightRadius:0},"& > button:not(:first-of-type):not(:last-of-type)":{borderRadius:0,marginLeft:"1px"},"& > button:last-of-type":{marginLeft:"1px",borderTopLeftRadius:0,borderBottomLeftRadius:0}})),h=o.I4.span((0,o.AH)({display:"flex",columnGap:"space40"})),l=s.forwardRef(({element:e="BUTTON_GROUP",children:t,attached:a=!1,justifyContent:o="flex-start",...l},r)=>s.createElement(n.az,{...(0,n.x8)(l),as:a?i:h,ref:r,element:e,display:"inline-flex",flexWrap:a?"nowrap":"wrap",justifyContent:a?"flex-start":o,rowGap:"space40",role:"group"},t));l.displayName="ButtonGroup"},16505:(e,t,a)=>{"use strict";a.d(t,{AD:()=>x,RO:()=>b,SG:()=>L,Tk:()=>N,Zz:()=>w,_X:()=>z,b$:()=>T,b4:()=>f,cM:()=>y,f0:()=>v,ix:()=>A,mT:()=>k,qS:()=>I});var n=a(76127),o=a(55729),s=a(95036),i=a(21414),h=a(69277),l=a(7658),r=a(84498),d=a(4073),c=a(99786),g=a(629),u=a(58001),C=a(36669),m=o.createContext("inbound"),p={inbound:{backgroundColor:"colorBackgroundElevation",alignSelf:"flex-start"},outbound:{backgroundColor:"colorBackgroundInverseStrongerElevation",alignSelf:"flex-end",color:"colorTextInverse"}},b=o.forwardRef(({children:e,element:t="CHAT_BUBBLE",...a},s)=>{let i=o.useContext(m);return o.createElement(n.az,{display:"inline-block",fontSize:"fontSize30",lineHeight:"lineHeight20",borderRadius:"borderRadius20",paddingY:"space30",paddingX:"space40",marginBottom:"space30",wordWrap:"break-word",maxWidth:"100%",minWidth:0,element:t,ref:s,variant:i,whiteSpace:"pre-wrap",...p[i],...(0,n.x8)(a)},e)});b.displayName="ChatBubble";var M={inbound:{marginRight:"space70"},outbound:{marginLeft:"space70"}},y=o.forwardRef(({children:e,variant:t,element:a="CHAT_MESSAGE",...s},i)=>o.createElement(m.Provider,{value:t},o.createElement(n.az,{role:"listitem",display:"flex",flexDirection:"column",ref:i,element:a,variant:t,...M[t],...(0,n.x8)(s)},e)));y.displayName="ChatMessage";var v=o.forwardRef(({children:e,element:t="CHAT_MESSAGE_META",...a},s)=>{let i=o.useContext(m);return o.createElement(n.az,{...(0,n.x8)(a),ref:s,element:t,display:"flex",justifyContent:"inbound"===i?"flex-start":"flex-end",textAlign:"outbound"===i?"right":"left",alignItems:"center",variant:i,columnGap:"space30",fontWeight:"fontWeightMedium"},e)});v.displayName="ChatMessageMeta";var I=o.forwardRef(({children:e,element:t="CHAT_MESSAGE_META_ITEM",...a},s)=>o.createElement(n.az,{ref:s,element:t,display:"flex",alignItems:"flex-start",columnGap:"space30",color:"colorTextWeak",lineHeight:"lineHeight20",fontSize:"fontSize20",...(0,n.x8)(a)},e));I.displayName="ChatMessageMetaItem";var f=o.forwardRef(({children:e,element:t="CHAT_LOG",...a},s)=>o.createElement(n.az,{role:"log",padding:"space70",element:t,ref:s,...(0,n.x8)(a)},o.createElement(n.az,{as:"div",role:"list",margin:"space0",padding:"space0",display:"flex",flexDirection:"column",rowGap:"space80"},e)));f.displayName="ChatLog";var B={backgroundColor:"colorBackgroundBody",borderRadius:"borderRadiusCircle",width:"12px",height:"12px",display:"flex",justifyContent:"center",alignItems:"center"};o.forwardRef(({children:e,onDismiss:t,i18nDismissLabel:a="Remove attachment",element:l="COMPOSER_ATTACHMENT_CARD",...r},d)=>o.createElement(n.az,{...(0,n.x8)(r),ref:d,paddingY:"space30",paddingX:"space40",borderRadius:"borderRadius30",backgroundColor:"colorBackgroundBodyElevation",position:"relative",display:"inline-block",width:"100%",element:l},e,t&&o.createElement(n.az,{position:"absolute",top:"space0",right:"space0",transform:"translate(50%, -50%)",...B},o.createElement(s.$n,{element:`${l}_REMOVE_BUTTON`,variant:"secondary_icon",size:"icon",onClick:t},o.createElement(i.ClearIcon,{decorative:!0}),o.createElement(h.E,null,a))))).displayName="ComposerAttachmentCard";var A=o.forwardRef(({children:e,element:t="CHAT_ATTACHMENT",attachmentIcon:a,...s},i)=>{let h=o.useContext(m);return o.createElement(l.Ss,{...s,as:"div",ref:i,verticalAlign:"center",element:t},o.createElement(l.pV,{as:"div",spacing:"space30"},o.createElement(n.az,{color:"inbound"===h?"colorTextIcon":"colorTextInverse",element:`${t}_ICON`},a)),o.createElement(l.To,{as:"div",element:`${t}_BODY`},o.createElement(r.B,{orientation:"vertical",spacing:"space10"},e)))});A.displayName="ChatAttachment";var k=o.forwardRef(({children:e,href:t,element:a="CHAT_ATTACHMENT_LINK",...n},s)=>{let i=o.useContext(m);return o.createElement(d.Mz,{href:t,ref:s,element:a,variant:"inbound"===i?"default":"inverse",...n},o.createElement(c.P,{title:e},e))});k.displayName="ChatAttachmentLink";var x=o.forwardRef(({children:e,element:t="CHAT_ATTACHMENT_DESCRIPTION",...a},n)=>{let s=o.useContext(m);return o.createElement(g.EY,{...(0,g.T2)(a),element:t,ref:n,as:"div",fontSize:"fontSize20",color:"inbound"===s?"colorTextWeak":"colorTextInverse",lineHeight:"lineHeight20"},e)});x.displayName="ChatAttachmentDescription";var w=o.forwardRef(({children:e,element:t="CHAT_BOOKEND",...a},s)=>o.createElement(n.az,{...(0,n.x8)(a),as:"div",role:"listitem",color:"colorTextWeak",element:t,textAlign:"center",marginBottom:"space20",lineHeight:"lineHeight20",fontSize:"fontSize20",fontWeight:"fontWeightMedium",ref:s},e));w.displayName="ChatBookend";var L=o.forwardRef(({children:e,element:t="CHAT_BOOKEND_ITEM",...a},s)=>o.createElement(n.az,{...(0,n.x8)(a),as:"div",element:t,ref:s},e));L.displayName="ChatBookendItem";var T=o.forwardRef(({children:e,element:t="CHAT_EVENT",...a},s)=>o.createElement(n.az,{...(0,n.x8)(a),as:"div",role:"listitem",color:"colorTextWeak",element:t,textAlign:"center",lineHeight:"lineHeight20",fontSize:"fontSize20",fontWeight:"fontWeightMedium",ref:s},e));T.displayName="ChatEvent";var E=(0,u.CS)(n.az),R=e=>"inbound"===e.variant?-100:100*("outbound"===e.variant),N=o.forwardRef(({chats:e,...t},a)=>{let n=(0,u.pn)(e,{keys:e=>e.id,from:e=>({opacity:0,x:R(e)}),enter:{opacity:1,x:0},leave:e=>({opacity:0,x:R(e)}),config:{mass:.7,tension:190,friction:16}}),s=(0,u.Ib)()?e.map(e=>o.cloneElement(e.content,{key:e.id})):n((e,t,{key:a})=>o.createElement(E,{as:"div",style:e,key:a},t.content));return o.createElement(f,{...t,ref:a},s)});N.displayName="ChatLogger";var D=e=>({...e,id:e.id||(0,C.Ld)(e.content)}),z=(...e)=>{let t=o.useMemo(()=>e.map(D),[e]),[a,n]=o.useState(t),s=o.useCallback(e=>{n(t=>t.concat(D(e)))},[]);return{push:s,pop:o.useCallback(e=>{n(t=>e?t.filter(t=>t.id!==e):t.slice(0,-1))},[]),chats:a,clear:o.useCallback(()=>n([]),[])}}},21414:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ClearIcon:()=>i});var n=a(36669),o=a(55729),s=a(96316);let i=o.forwardRef(({as:e,display:t,element:a="ICON",size:i,color:h,title:l,decorative:r},d)=>{let c=`ClearIcon-${(0,n.GV)()}`;if(!r&&null==l)throw Error("[ClearIcon]: Missing a title for non-decorative icon.");return o.createElement(s.IconWrapper,{as:e,display:t,element:a,size:i,color:h,ref:d},o.createElement("svg",{role:"img","aria-hidden":r,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":c},l?o.createElement("title",{id:c},l):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M10 16.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm.897-6.5l1.917 1.917a.635.635 0 01-.897.897L10 10.897l-1.917 1.917a.635.635 0 01-.897-.897L9.103 10 7.186 8.083a.635.635 0 01.897-.897L10 9.103l1.917-1.917a.635.635 0 01.897.897L10.897 10z"})))});i.displayName="ClearIcon"},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>m});var n=a(72387),o=a(76127),s=a(95669),i=a.n(s),h=a(81278);a(55729);var l=a(10511),r=a(43084),d=a(10732),c=a(62887),g=a(63437),u=a(38992);let C={h1:()=>null},m=({children:e,meta:t,navigationData:a,data:s,mdxHeadings:m,pageHeaderData:{categoryRoute:p,githubUrl:b,storybookUrl:M}})=>{let y=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,v=t.description||u.DZ.DESCRIPTION,I=(0,h.useRouter)();return(0,n.FD)(g.T,{navigationData:a,children:[(0,n.FD)(i(),{children:[(0,n.Y)("title",{children:y}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${I.pathname}`}),(0,n.Y)("meta",{name:"description",content:v},"description")]}),(0,n.FD)(l.s,{children:[(0,n.Y)(c.c,{categoryRoute:p,githubUrl:b,storybookUrl:M,data:s}),(0,n.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(d.i,{data:m}),(0,n.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(r.Q,{componentOverrides:t.package?C:{},children:e})})]})]})]})}},60780:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/chat-log",function(){return a(86179)}])},60951:(e,t,a)=>{"use strict";a.r(t),a.d(t,{DownloadIcon:()=>i});var n=a(36669),o=a(55729),s=a(96316);let i=o.forwardRef(({as:e,display:t,element:a="ICON",size:i,color:h,title:l,decorative:r},d)=>{let c=`DownloadIcon-${(0,n.GV)()}`;if(!r&&null==l)throw Error("[DownloadIcon]: Missing a title for non-decorative icon.");return o.createElement(s.IconWrapper,{as:e,display:t,element:a,size:i,color:h,ref:d},o.createElement("svg",{role:"img","aria-hidden":r,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":c},l?o.createElement("title",{id:c},l):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M10.625 3.5a.625.625 0 10-1.25 0v8.491L7.342 9.958a.625.625 0 10-.884.884l3.125 3.125c.244.244.64.244.884 0l3.125-3.125a.625.625 0 00-.884-.884l-2.083 2.083V3.5zm-7.75 13c0-.345.28-.625.625-.625h13a.625.625 0 110 1.25h-13a.625.625 0 01-.625-.625z"})))});i.displayName="DownloadIcon"},86179:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>A,default:()=>R,getStaticProps:()=>x,mdxHeadings:()=>w,meta:()=>k}),a(55729);var n=a(11885),o=a(11881),s=a(76127),i=a(16505),h=a(60951),l=a(95036),r=a(8478),d=a(84498);let c=`
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
)`.trim(),g=`
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
)`.trim(),u=`
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
)`.trim(),C=`
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
)`.trim(),m=`
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
)`.trim(),p=`
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
`.trim(),b=`
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
)`.trim(),M=`
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
`.trim(),y=`
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
`.trim(),v=`
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
`.trim(),I=`
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
`.trim(),f=`
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
`.trim();var B=a(40615),A=!0;let k={title:"Chat Log",package:"@twilio-paste/chat-log",description:"A Chat Log is a collection of Chat components for displaying conversations between people.",slug:"/components/chat-log/"},x=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:w,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/chat-log",storybookUrl:"/?path=/story/components-chatlog--example-chat-log"}}}),w=[{value:"Guidelines",depth:2},{value:"About Chat Log",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Basic Message",depth:3},{value:"Inbound",depth:4},{value:"Outbound",depth:4},{value:"Message with Message Meta",depth:3},{value:"Inbound",depth:4},{value:"Outbound",depth:4},{value:"Message with Attachment",depth:3},{value:"Inbound",depth:4},{value:"Outbound",depth:4},{value:"Complex Message",depth:3},{value:"Inbound",depth:4},{value:"Outbound",depth:4},{value:"Chat Event",depth:3},{value:"Chat Bookend",depth:3},{value:"Example Chat Log",depth:3},{value:"useChatLogger hook",depth:3},{value:"ChatLogger component",depth:5},{value:"Adding and removing a chat",depth:5},{value:"Composition Notes",depth:2},{value:"Error messages",depth:3}],L=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},T={meta:k,getStaticProps:x,mdxHeadings:w},E=B.A;function R({components:e,...t}){return(0,n.yg)(E,{...T,...t,components:e,mdxType:"MDXLayout"},(0,n.yg)(L,{scope:{ChatLog:i.b4,ChatMessage:i.cM,ChatBubble:i.RO,ChatMessageMeta:i.f0,ChatMessageMetaItem:i.qS,Avatar:o.e},language:"jsx",mdxType:"LivePreview"},`<ChatLog>
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
</ChatLog>`),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About Chat Log"),(0,n.yg)("p",null,"A Chat Log is a way to display conversations between people and can include complex content like attachments. The chat can be between two or more people. If you are looking for a chat between a human and an AI please refer to ",(0,n.yg)("a",{parentName:"p",href:"/components/ai-chat-log"},"AIChatLog"),"."),(0,n.yg)("p",null,"The Chat Log package includes these main components:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"ChatLog"),(0,n.yg)("li",{parentName:"ul"},"ChatMessage"),(0,n.yg)("li",{parentName:"ul"},"ChatBubble"),(0,n.yg)("li",{parentName:"ul"},"ChatBookend"),(0,n.yg)("li",{parentName:"ul"},"ChatEvent"),(0,n.yg)("li",{parentName:"ul"},"ChatAttachment"),(0,n.yg)("li",{parentName:"ul"},"ChatMessageMeta")),(0,n.yg)("h3",null,"Accessibility"),(0,n.yg)("p",null,"To ensure the chat is accessible, only use the Chat components within a ChatLog component and use ChatMessage to wrap ChatBubbles and ChatMessageMeta components together."),(0,n.yg)("p",null,"The only other accessibility requirement is providing the ChatMessageMeta a descriptive label via the ",(0,n.yg)("inlineCode",{parentName:"p"},"aria-label")," React prop."),(0,n.yg)("p",null,"The ChatLog component has ",(0,n.yg)("inlineCode",{parentName:"p"},`role=”log”`)," which means that any new messages added to it are announced by assistive technology."),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Basic Message"),(0,n.yg)("p",null,"A basic message is simply text sent from a chat participant and is built with the ChatMessage and ChatBubble components. It can either be inbound or outbound."),(0,n.yg)("h4",null,"Inbound"),(0,n.yg)(L,{scope:{ChatLog:i.b4,ChatMessage:i.cM,ChatBubble:i.RO},language:"jsx",noInline:!0,mdxType:"LivePreview"},c),(0,n.yg)("h4",null,"Outbound"),(0,n.yg)(L,{scope:{ChatLog:i.b4,ChatMessage:i.cM,ChatBubble:i.RO},language:"jsx",noInline:!0,mdxType:"LivePreview"},g),(0,n.yg)("h3",null,"Message with Message Meta"),(0,n.yg)("p",null,"Use Message Meta to append additional information to a message such as the name of the sender, the time, or a read receipt."),(0,n.yg)("p",null,"ChatMessageMeta should be a child of ChatMessage so that the text and meta information are correctly grouped together for assistive technologies. It also needs a readable ",(0,n.yg)("inlineCode",{parentName:"p"},"aria-label")," that summarizes what the meta information says."),(0,n.yg)("h4",null,"Inbound"),(0,n.yg)(L,{scope:{ChatLog:i.b4,ChatMessage:i.cM,ChatBubble:i.RO,ChatMessageMeta:i.f0,ChatMessageMetaItem:i.qS,Avatar:o.e},language:"jsx",noInline:!0,mdxType:"LivePreview"},u),(0,n.yg)("h4",null,"Outbound"),(0,n.yg)(L,{scope:{ChatLog:i.b4,ChatMessage:i.cM,ChatBubble:i.RO,ChatMessageMeta:i.f0,ChatMessageMetaItem:i.qS},language:"jsx",noInline:!0,mdxType:"LivePreview"},C),(0,n.yg)("h3",null,"Message with Attachment"),(0,n.yg)("p",null,"A message can include an attachment. If sent with additional text, the attachment should be in its own ChatBubble."),(0,n.yg)("h4",null,"Inbound"),(0,n.yg)(L,{scope:{ChatLog:i.b4,ChatMessage:i.cM,ChatBubble:i.RO,ChatAttachment:i.ix,ChatAttachmentDescription:i.AD,ChatAttachmentLink:i.mT,DownloadIcon:h.DownloadIcon},language:"jsx",noInline:!0,mdxType:"LivePreview"},m),(0,n.yg)("h4",null,"Outbound"),(0,n.yg)(L,{scope:{ChatLog:i.b4,ChatMessage:i.cM,ChatBubble:i.RO,ChatAttachment:i.ix,ChatAttachmentDescription:i.AD,ChatAttachmentLink:i.mT,DownloadIcon:h.DownloadIcon},language:"jsx",noInline:!0,mdxType:"LivePreview"},p),(0,n.yg)("h3",null,"Complex Message"),(0,n.yg)("p",null,"ChatMessages can contain multiple ChatBubbles and ChatMessageMetas."),(0,n.yg)("h4",null,"Inbound"),(0,n.yg)(L,{scope:{ChatLog:i.b4,ChatAttachment:i.ix,ChatAttachmentDescription:i.AD,ChatAttachmentLink:i.mT,ChatBubble:i.RO,ChatMessage:i.cM,ChatMessageMeta:i.f0,ChatMessageMetaItem:i.qS,DownloadIcon:h.DownloadIcon,Avatar:o.e},language:"jsx",noInline:!0,mdxType:"LivePreview"},b),(0,n.yg)("h4",null,"Outbound"),(0,n.yg)(L,{scope:{ChatLog:i.b4,ChatAttachment:i.ix,ChatAttachmentDescription:i.AD,ChatAttachmentLink:i.mT,ChatBubble:i.RO,ChatMessage:i.cM,ChatMessageMeta:i.f0,ChatMessageMetaItem:i.qS,DownloadIcon:h.DownloadIcon},language:"jsx",noInline:!0,mdxType:"LivePreview"},M),(0,n.yg)("h3",null,"Chat Event"),(0,n.yg)("p",null,"Chat Events are for things that can happen during the chat, like someone joining or the chat transferring to a different agent."),(0,n.yg)(L,{scope:{ChatLog:i.b4,ChatEvent:i.b$},language:"jsx",noInline:!0,mdxType:"LivePreview"},y),(0,n.yg)("h3",null,"Chat Bookend"),(0,n.yg)("p",null,"Chat Bookends are for when the chat starts, ends, and the day when the chat spans multiple days."),(0,n.yg)(L,{scope:{ChatLog:i.b4,ChatBookend:i.Zz,ChatBookendItem:i.SG},language:"jsx",noInline:!0,mdxType:"LivePreview"},v),(0,n.yg)("h3",null,"Example Chat Log"),(0,n.yg)("p",null,"This example combines all the separate features displayed previously into one example. It shows how all the features work together harmoniously through composition."),(0,n.yg)(L,{scope:{ChatAttachment:i.ix,ChatAttachmentDescription:i.AD,ChatAttachmentLink:i.mT,ChatBookend:i.Zz,ChatBookendItem:i.SG,ChatBubble:i.RO,ChatEvent:i.b$,ChatLog:i.b4,ChatMessage:i.cM,ChatMessageMeta:i.f0,ChatMessageMetaItem:i.qS,Avatar:o.e,DownloadIcon:h.DownloadIcon,Box:s.az},language:"jsx",noInline:!0,mdxType:"LivePreview"},I),(0,n.yg)("h3",null,"useChatLogger hook"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"useChatLogger")," hook provides a hook based approach to managing chat state. It is best used with the ",(0,n.yg)("inlineCode",{parentName:"p"},"<ChatLogger />")," component."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useChatLogger")," returns 4 things:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"An array of ",(0,n.yg)("inlineCode",{parentName:"li"},"chats"),"."),(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("inlineCode",{parentName:"li"},"push")," method used to add a chat, optionally with a custom ID"),(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("inlineCode",{parentName:"li"},"pop")," method used to remove a chat, optionally via its ID."),(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("inlineCode",{parentName:"li"},"clear")," method used to remove all chats.")),(0,n.yg)("h5",null,"ChatLogger component"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"<ChatLogger />")," component handles rendering the chats it is passed via props. It handles how chats enter and leave the UI."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},`const { chats }= useChatLogger();
return <ChatLogger chats={chats} />;
`)),(0,n.yg)("h5",null,"Adding and removing a chat"),(0,n.yg)("p",null,"You can push or pop a chat based on an action or event. In this example it's based on a button click:"),(0,n.yg)(L,{scope:{useChatLogger:i._X,ChatBubble:i.RO,ChatLogger:i.Tk,ChatMessage:i.cM,ChatMessageMeta:i.f0,ChatMessageMetaItem:i.qS,Button:l.$n,ButtonGroup:r.e,Stack:d.B},language:"jsx",noInline:!0,mdxType:"LivePreview"},f),(0,n.yg)("h2",null,"Composition Notes"),(0,n.yg)("p",null,"Keep content as concise as possible given the space constraints."),(0,n.yg)("h3",null,"Error messages"),(0,n.yg)("p",null,"To convey an error related to whether a message was sent, use Help Text inside the Message Meta. Limit the message to a single sentence and focus on how the user can resolve the issue. Offer a ",(0,n.yg)("a",{parentName:"p",href:"/components/button#link-style-button"},"link-style retry button")," when applicable."),(0,n.yg)("p",null,"To convey an error related to other actions taken in the Chat Log, like a file upload validation error, use a ",(0,n.yg)("a",{parentName:"p",href:"/components/toast"},"Toast")," at the top of the individual chat window."),(0,n.yg)("p",null,"To convey an error that applies to the whole page, not just a particular Chat Log, use a page-level ",(0,n.yg)("a",{parentName:"p",href:"/patterns/error-state#when-to-use-which-component"},"Callout or Alert"),"."))}R.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=60780)),_N_E=e.O()}]);