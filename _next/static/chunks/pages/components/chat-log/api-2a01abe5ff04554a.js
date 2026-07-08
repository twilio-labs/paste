(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3161],{23562:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>n,default:()=>c,getStaticProps:()=>l,mdxHeadings:()=>r,meta:()=>i}),t(55729);var o=t(11885),s=t(40615),n=!0;let i={title:"Chat Log",package:"@twilio-paste/chat-log",description:"A Chat Log is a collection of Chat components for displaying conversations between people.",slug:"/components/chat-log/api"},l=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...r,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/chat-log",storybookUrl:"/?path=/story/components-chatlog--example-chat-log"}}}),r=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],g=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},p={meta:i,getStaticProps:l,mdxHeadings:r},h=s.A;function c({components:e,...a}){return(0,o.yg)(h,{...p,...a,components:e,mdxType:"MDXLayout"},(0,o.yg)("h2",null,"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/chat-log - or - yarn add @twilio-paste/core
`)),(0,o.yg)("h2",null,"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  ChatLog,
  ChatMessage,
  ChatMessageMeta,
  ChatMessageMetaItem,
  ChatBubble,
  ChatBookend,
  ChatBookendItem,
} from '@twilio-paste/core/chat-log';

export const Basic = () => {
  return (
    <ChatLog>
      <ChatMessage variant="inbound">
        <ChatBubble>Ahoy!</ChatBubble>
        <ChatMessageMeta aria-label="said by Gibby Radki 4 minutes ago">
          <ChatMessageMetaItem>Gibby Radki ・ 4 minutes ago</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
      <ChatMessage variant="outbound">
        <ChatBubble>Howdy!</ChatBubble>
        <ChatMessageMeta aria-label="said by you 2 minutes ago">
          <ChatMessageMetaItem>2 minutes ago</ChatMessageMetaItem>
        </ChatMessageMeta>
        <ChatMessageMeta aria-label="(read)">
          <ChatMessageMetaItem>Read</ChatMessageMetaItem>
        </ChatMessageMeta>
      </ChatMessage>
    </ChatLog>
  );
};
`)),(0,o.yg)("h2",null,"Props"),(0,o.yg)(g,{componentApi:a.componentApi,mdxType:"PropsTable"}))}c.isMDXComponent=!0},40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>m});var o=t(72387),s=t(76127),n=t(95669),i=t.n(n),l=t(81278);t(55729);var r=t(10511),g=t(43084),p=t(10732),h=t(62887),c=t(63437),d=t(38992);let u={h1:()=>null},m=({children:e,meta:a,navigationData:t,data:n,mdxHeadings:m,pageHeaderData:{categoryRoute:C,githubUrl:b,storybookUrl:M}})=>{let y=a.title?`${a.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,T=a.description||d.DZ.DESCRIPTION,k=(0,l.useRouter)();return(0,o.FD)(c.T,{navigationData:t,children:[(0,o.FD)(i(),{children:[(0,o.Y)("title",{children:y}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${k.pathname}`}),(0,o.Y)("meta",{name:"description",content:T},"description")]}),(0,o.FD)(r.s,{children:[(0,o.Y)(h.c,{categoryRoute:C,githubUrl:b,storybookUrl:M,data:n}),(0,o.FD)(s.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(p.i,{data:m}),(0,o.Y)(s.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(g.Q,{componentOverrides:a.package?u:{},children:e})})]})]})]})}},51393:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/chat-log/api",function(){return t(23562)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=51393)),_N_E=e.O()}]);