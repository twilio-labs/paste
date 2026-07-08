(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[388],{25221:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ai-chat-log/api",function(){return t(55177)}])},40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>A});var o=t(72387),s=t(76127),n=t(95669),r=t.n(n),i=t(81278);t(55729);var l=t(10511),c=t(43084),h=t(10732),g=t(62887),p=t(63437),d=t(38992);let u={h1:()=>null},A=({children:e,meta:a,navigationData:t,data:n,mdxHeadings:A,pageHeaderData:{categoryRoute:I,githubUrl:m,storybookUrl:C}})=>{let y=a.title?`${a.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,M=a.description||d.DZ.DESCRIPTION,b=(0,i.useRouter)();return(0,o.FD)(p.T,{navigationData:t,children:[(0,o.FD)(r(),{children:[(0,o.Y)("title",{children:y}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${b.pathname}`}),(0,o.Y)("meta",{name:"description",content:M},"description")]}),(0,o.FD)(l.s,{children:[(0,o.Y)(g.c,{categoryRoute:I,githubUrl:m,storybookUrl:C,data:n}),(0,o.FD)(s.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(h.i,{data:A}),(0,o.Y)(s.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(c.Q,{componentOverrides:a.package?u:{},children:e})})]})]})]})}},55177:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>n,default:()=>p,getStaticProps:()=>i,mdxHeadings:()=>l,meta:()=>r}),t(55729);var o=t(11885),s=t(40615),n=!0;let r={title:"AI Chat Log - API",package:"@twilio-paste/ai-chat-log",description:"An AI Chat Log is a collection of Chat components for displaying conversations between a human and an AI bot",slug:"/components/ai-chat-log/api"},i=async()=>({props:{data:{...packageJson,...feature,nameOverride:"AI Chat Log"},componentApi,mdxHeadings:[...l,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/ai-chat-log",storybookUrl:"/?path=/story/components-ai-chat-log--example-ai-chat-log"}}}),l=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],c=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},h={meta:r,getStaticProps:i,mdxHeadings:l},g=s.A;function p({components:e,...a}){return(0,o.yg)(g,{...h,...a,components:e,mdxType:"MDXLayout"},(0,o.yg)("h2",null,"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/ai-chat-log - or - yarn add @twilio-paste/core
`)),(0,o.yg)("h2",null,"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  AIChatLog,
  AIChatMessage,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageLoading,
  AIChatMessageActionGroup,
  AIChatMessageActionCard,
} from "@twilio-paste/ai-chat-log";

export const Basic = () => {
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
          Error codes can be returned from various parts of the process. What error codes are you encountering?
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
`)),(0,o.yg)("h2",null,"Props"),(0,o.yg)(c,{componentApi:a.componentApi,mdxType:"PropsTable"}))}p.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=25221)),_N_E=e.O()}]);