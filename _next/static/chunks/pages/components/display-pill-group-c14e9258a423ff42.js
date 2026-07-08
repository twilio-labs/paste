(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9363],{6236:(e,l,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/display-pill-group",function(){return i(99654)}])},87668:(e,l,i)=>{"use strict";i.d(l,{D:()=>s,E:()=>t});var o=i(4073),a=i(76127),n=i(55729),t=n.forwardRef(({element:e="DISPLAY_PILL",...l},i)=>n.createElement(a.az,{as:"li",listStyleType:"none"},n.createElement(a.az,{...(0,a.x8)(l),...l.href?(0,o.Nx)(l.href):{},ref:i,element:e,as:l.href?"a":"div",alignItems:"center",backgroundColor:"colorBackgroundWeak",borderRadius:"borderRadiusPill",boxShadow:"shadowBorderWeaker",color:"colorTextWeak",columnGap:"space20",cursor:l.href?"pointer":"default",display:"flex",fontSize:"fontSize20",fontWeight:"fontWeightMedium",lineHeight:"lineHeight10",paddingX:"space30",paddingY:"space20",outline:"none",_hover:l.href?{backgroundColor:"colorBackground",boxShadow:"shadowBorder",textDecoration:"none"}:void 0,_focus:{boxShadow:"shadowFocus",textDecoration:"none"}},l.children)));t.displayName="DisplayPill";var s=n.forwardRef(({element:e="DISPLAY_PILL_GROUP",...l},i)=>n.createElement(a.az,{...(0,a.x8)(l),element:e,ref:i,as:"ul",margin:"space0",padding:"space0",display:"flex",flexWrap:"wrap",rowGap:"space20",columnGap:"space20"},l.children));s.displayName="DisplayPillGroup"},99654:(e,l,i)=>{"use strict";i.r(l),i.d(l,{__N_SSG:()=>L,default:()=>R,getStaticProps:()=>_,mdxHeadings:()=>W,meta:()=>B}),i(55729);var o=i(11885),a=i(11881),n=i(76127),t=i(87668),s=i(99786),r=i(9098),p=i(93548),c=i(24622),y=i(63289),d=i(30584),u=i(76882),P=i(80759),g=i(41763),D=i(54576),h=i(23441),m=i(95010),I=i(52543),f=i(61218),v=i(97994),x=i(18583),b=i(46101),w=i(93780),G=i(89564),z=i(64709);let A=`
const DisplayPillGroupExample = () => {
  return (
    <DisplayPillGroup aria-label="Products:">
      <DisplayPill>Voice</DisplayPill>
      <DisplayPill href="https://google.com">
        Studio
      </DisplayPill>
      <DisplayPill>
        <SMSCapableIcon decorative size="sizeIcon10" />
        SMS
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <MMSCapableIcon decorative size="sizeIcon10" />
        MMS
      </DisplayPill>
      <DisplayPill>
      <Avatar size="sizeIcon10" name='Customer' src="/images/avatars/avatar4.png" />
        Customer
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <Avatar size="sizeIcon10" name='Agent' icon={AgentIcon} />
        Agent
      </DisplayPill>
    </DisplayPillGroup>
  );
}

render(
  <DisplayPillGroupExample />
)
`.trim(),T=`
const BasicDisplayPillGroup = () => {
  return (
    <DisplayPillGroup>
      <DisplayPill>Notify</DisplayPill>
      <DisplayPill>Proxy</DisplayPill>
      <DisplayPill>
        <ProductVerifyIcon decorative size="sizeIcon10" />
        Verify
      </DisplayPill>
      <DisplayPill>
        <ProductInterconnectIcon decorative size="sizeIcon10" />
        Interconnect
      </DisplayPill>
      <DisplayPill>Transcriptions</DisplayPill>
      <DisplayPill>Chat</DisplayPill>
    </DisplayPillGroup>
  );
}

render(
  <BasicDisplayPillGroup />
)
`.trim(),C=`
const LinkedDisplayPillGroup = () => {
  return (
    <DisplayPillGroup aria-label="Products:">
      <DisplayPill href="https://google.com">Authy</DisplayPill>
      <DisplayPill href="https://google.com">
        <ProductPhoneNumbersIcon decorative size="sizeIcon10" />
        Phone Numbers
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <ProductFrontlineIcon decorative size="sizeIcon10" />
        Frontline
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <Avatar size="sizeIcon10" name='Customer' src="/images/avatars/avatar4.png" />
        Customer
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <Avatar size="sizeIcon10" name='Agent' icon={AgentIcon} />
        Agent
      </DisplayPill>
    </DisplayPillGroup>
  );
}

render(
  <LinkedDisplayPillGroup />
)
`.trim(),k=`
const DisplayPillGroupExample = () => {
  return (
    <DisplayPillGroup aria-label="Products:">
      <DisplayPill href="https://www.twilio.com/segment-hello">
        <ProductSegmentIcon decorative size="sizeIcon10" />
        Segment
      </DisplayPill>
      <DisplayPill>Flex</DisplayPill>
      <DisplayPill href="https://sendgrid.com/">SendGrid</DisplayPill>
      <DisplayPill>
        <LogoTwilioIcon decorative size="sizeIcon10" />
        Twilio
      </DisplayPill>
    </DisplayPillGroup>
  );
}

render(
  <DisplayPillGroupExample />
)
`.trim(),E=`
const TruncateDisplayPillGroup = () => {
  return (
    <DisplayPillGroup aria-label="Products:">
      <DisplayPill>
        <ProductInternetOfThingsIcon decorative size="sizeIcon10" />
        <Box maxWidth="size10">
          <Truncate title="Internet of Things">Internet of Things</Truncate>
        </Box>
      </DisplayPill>
      <DisplayPill>
        <ProductMarketingCampaignsIcon decorative size="sizeIcon10" />
        <Box maxWidth="size10">
          <Truncate title="Marketing Campaigns">Marketing Campaigns</Truncate>
        </Box>
      </DisplayPill>
      <DisplayPill>
        <ProductCodeExchangePartnerIcon decorative size="sizeIcon10" />
        <Box maxWidth="size10">
          <Truncate title="CodeExchange Partner">CodeExchange Partner</Truncate>
        </Box>
      </DisplayPill>
      <DisplayPill>
        <ProductEngagementIntelligencePlatformIcon decorative size="sizeIcon10" />
        <Box maxWidth="size10">
          <Truncate title="Engagement Intelligence Platform">Engagement Intelligence Platform</Truncate>
        </Box>
      </DisplayPill>
    </DisplayPillGroup>
  );
};

render(
  <TruncateDisplayPillGroup />
)
`.trim(),N=`
const AvatarDisplayPillGroupExample = () => {
  return (
    <DisplayPillGroup aria-label="People:">
      <DisplayPill href="https://google.com">
        <Avatar size="sizeIcon10" name='Customer' src="/images/avatars/avatar4.png" />
        Customer
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <Avatar size="sizeIcon10" name='Agent' icon={AgentIcon} />
        Agent
      </DisplayPill>
    </DisplayPillGroup>
  );
}

render(
  <AvatarDisplayPillGroupExample />
)
`.trim(),S=`
const IconDisplayPillGroup = () => {
  return (
    <DisplayPillGroup aria-label="Products:">
      <DisplayPill>
        <ProductMessagingIcon decorative size="sizeIcon10" />
        Messaging
      </DisplayPill>
      <DisplayPill>
        <ProductBillingIcon decorative size="sizeIcon10" />
        Billing
      </DisplayPill>
      <DisplayPill>
        <ProductLookupIcon decorative size="sizeIcon10" />
        Lookup
      </DisplayPill>
      <DisplayPill>
        <ProductConversationsIcon decorative size="sizeIcon10" />
        Conversations
      </DisplayPill>
    </DisplayPillGroup>
  );
};

render(
  <IconDisplayPillGroup />
)
`.trim();var M=i(40615),L=!0;let B={title:"Display Pill Group",package:"@twilio-paste/display-pill-group",description:"A Display Pill Group is a non-editable set of Pills that represent a collection of static objects.",slug:"/components/display-pill-group/"},_=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:W,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/display-pill-group",storybookUrl:"/?path=/story/components-display-pill-group--basic"}}}),W=[{value:"Guidelines",depth:2},{value:"About Display Pill Group",depth:3},{value:"Accessibility",depth:3},{value:"Keyboard navigation",depth:4},{value:"Display Pill vs. Form Pill",depth:3},{value:"Examples",depth:2},{value:"Basic",depth:3},{value:"Linked",depth:3},{value:"Display Pill Group",depth:3},{value:"Composition Notes",depth:2},{value:"Truncating text",depth:3},{value:"Adding an avatar",depth:3},{value:"Adding an icon",depth:3},{value:"When to use a Display Pill Group",depth:2}],F=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},O={meta:B,getStaticProps:_,mdxHeadings:W},U=M.A;function R({components:e,...l}){return(0,o.yg)(U,{...O,...l,components:e,mdxType:"MDXLayout"},(0,o.yg)(F,{scope:{DisplayPill:t.E,DisplayPillGroup:t.D,MMSCapableIcon:c.MMSCapableIcon,SMSCapableIcon:w.SMSCapableIcon,AgentIcon:r.AgentIcon,Avatar:a.e},noInline:!0,mdxType:"LivePreview"},A),(0,o.yg)("h2",null,"Guidelines"),(0,o.yg)("h3",null,"About Display Pill Group"),(0,o.yg)("p",null,`A Display Pill Group represents a collection of static objects. Display Pills are static text and should be used where Pills aren’t in a state where they’re actively being modified.`),(0,o.yg)("h3",null,"Accessibility"),(0,o.yg)("p",null,"A label helps explain what a collection of data objects represents. Set a non-visual label on a Display Pill Group using ",(0,o.yg)("inlineCode",{parentName:"p"},"aria-label"),"."),(0,o.yg)("h4",null,"Keyboard navigation"),(0,o.yg)("p",null,"A ",(0,o.yg)("a",{parentName:"p",href:"/components/display-pill-group#linked"},"linked Display Pill")," is a focusable element and a single tab stop to a keyboard user. Once a user focuses on a linked Display Pill, pressing the enter key will open the link."),(0,o.yg)("h3",null,"Display Pill vs. Form Pill"),(0,o.yg)("p",null,"Display Pill Group creates a list of static items, whereas ",(0,o.yg)("a",{parentName:"p",href:"/components/form-pill-group"},"Form Pill Group")," creates a list from which a user may select items."),(0,o.yg)("p",null,"Use the table below to get a better understanding of when to use Display Pill or Form Pill."),(0,o.yg)(z.K,{mdxType:"DisplayPillVsFormPillTable"}),(0,o.yg)("h2",null,"Examples"),(0,o.yg)("h3",null,"Basic"),(0,o.yg)("p",null,"Use a Basic Display Pill to display read-only text, such as a list of email addresses or keywords."),(0,o.yg)("p",null,"A Display Pill can have an optional ",(0,o.yg)("a",{parentName:"p",href:"/components/avatar"},"Avatar")," or ",(0,o.yg)("a",{parentName:"p",href:"/components/icon"},"Icon"),". Use no more than one icon before or after the text."),(0,o.yg)(F,{scope:{DisplayPill:t.E,DisplayPillGroup:t.D,ProductVerifyIcon:b.ProductVerifyIcon,ProductInterconnectIcon:D.ProductInterconnectIcon},noInline:!0,mdxType:"LivePreview"},T),(0,o.yg)("h3",null,"Linked"),(0,o.yg)("p",null,"A Display Pill can link to other pages. This can be useful when the entity the pill represents has its own detail page. To do so, pass an ",(0,o.yg)("inlineCode",{parentName:"p"},"href")," prop to the Display Pill."),(0,o.yg)("p",null,"When provided with an ",(0,o.yg)("inlineCode",{parentName:"p"},"href")," the ",(0,o.yg)("inlineCode",{parentName:"p"},"DisplayPill")," will render itself as an HTML Anchor element, and will respond to any anchor-based events and accept any event handlers."),(0,o.yg)(F,{scope:{DisplayPill:t.E,DisplayPillGroup:t.D,ProductPhoneNumbersIcon:v.ProductPhoneNumbersIcon,ProductFrontlineIcon:g.ProductFrontlineIcon,AgentIcon:r.AgentIcon,Avatar:a.e},noInline:!0,mdxType:"LivePreview"},C),(0,o.yg)("h3",null,"Display Pill Group"),(0,o.yg)("p",null,"A Display Pill Group wraps a collection of basic and linked Display Pills with a common group component."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DisplayPillGroup")," takes ",(0,o.yg)("inlineCode",{parentName:"p"},"DisplayPill"),`s as children. Don’t place any other type of child component directly inside of a `,(0,o.yg)("inlineCode",{parentName:"p"},"DisplayPillGroup"),"."),(0,o.yg)(F,{scope:{DisplayPill:t.E,DisplayPillGroup:t.D,ProductSegmentIcon:x.ProductSegmentIcon,LogoTwilioIcon:p.LogoTwilioIcon},noInline:!0,mdxType:"LivePreview"},k),(0,o.yg)("h2",null,"Composition Notes"),(0,o.yg)("h3",null,"Truncating text"),(0,o.yg)("p",null,`Pill text should never wrap to the next line. If the text length is longer than the max width of the pill group’s container, consider moving the Pill to a new row or use `,(0,o.yg)("a",{parentName:"p",href:"/components/truncate"},"Truncate")," to truncate the Display Pill text."),(0,o.yg)(F,{scope:{DisplayPill:t.E,DisplayPillGroup:t.D,Truncate:s.P,Box:n.az,ProductInternetOfThingsIcon:h.ProductInternetOfThingsIcon,ProductMarketingCampaignsIcon:I.ProductMarketingCampaignsIcon,ProductCodeExchangePartnerIcon:d.ProductCodeExchangePartnerIcon,ProductEngagementIntelligencePlatformIcon:P.ProductEngagementIntelligencePlatformIcon},noInline:!0,mdxType:"LivePreview"},E),(0,o.yg)("h3",null,"Adding an avatar"),(0,o.yg)("p",null,"A Display Pill can have an optional ",(0,o.yg)("a",{parentName:"p",href:"/components/avatar"},"Avatar"),". Considering the size of a Display Pill, it is recommended to use either an image or icon within an Avatar, and to avoid using initials as some initials may get cut off if the characters are particularly wide."),(0,o.yg)("p",null,"We recommend placing the Avatar ahead of the pill text. Use no more than one before or after the text."),(0,o.yg)(F,{scope:{DisplayPill:t.E,DisplayPillGroup:t.D,Avatar:a.e,AgentIcon:r.AgentIcon},noInline:!0,mdxType:"LivePreview"},N),(0,o.yg)("h3",null,"Adding an icon"),(0,o.yg)("p",null,"A Display Pill can have an optional ",(0,o.yg)("a",{parentName:"p",href:"/components/icon"},"Icon"),". We recommend placing the Icon ahead of the pill text. Use no more than one before or after the text."),(0,o.yg)(F,{scope:{DisplayPill:t.E,DisplayPillGroup:t.D,ProductMessagingIcon:f.ProductMessagingIcon,ProductBillingIcon:y.ProductBillingIcon,ProductLookupIcon:m.ProductLookupIcon,ProductConversationsIcon:u.ProductConversationsIcon},noInline:!0,mdxType:"LivePreview"},S),(0,o.yg)("h2",null,"When to use a Display Pill Group"),(0,o.yg)(G.l,{mdxType:"DoDont"},(0,o.yg)(G.Do,{title:"Do",body:"Use Display Pills in non-editable situations to represent a collection of similar objects.",mdxType:"Do"}),(0,o.yg)(G.w,{title:"Don't",body:"Don’t use Display Pills inside of a form or when editing a collection of data. Use a Multi-select Combobox or Form Pill Group instead.",mdxType:"Dont"})),(0,o.yg)(G.l,{mdxType:"DoDont"},(0,o.yg)(G.Do,{title:"Do",body:"Use Display Pills to display a list of objects, usually nouns, such as email addresses or keywords.",mdxType:"Do"}),(0,o.yg)(G.w,{title:"Don't",body:"Don’t use Display Pills to highlight an attribute of an object for quick identification. Consider using a Badge instead.",mdxType:"Dont"})),(0,o.yg)(G.l,{mdxType:"DoDont"},(0,o.yg)(G.Do,{title:"Do",body:"Only pass DisplayPill as a direct descendent of a DisplayPillGroup.",mdxType:"Do"}),(0,o.yg)(G.w,{title:"Don't",body:"Don’t pass DisplayPillGroup in any other component type, and do not wrap DisplayPill in any other component of the DOM element.",mdxType:"Dont"})))}R.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,5177,1489,636,6593,8792],()=>e(e.s=6236)),_N_E=e.O()}]);