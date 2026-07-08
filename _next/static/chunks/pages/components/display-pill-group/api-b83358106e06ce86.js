(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4266],{31165:(e,a,l)=>{"use strict";l.r(a),l.d(a,{__N_SSG:()=>t,default:()=>g,getStaticProps:()=>s,mdxHeadings:()=>n,meta:()=>p}),l(55729);var i=l(11885),o=l(40615),t=!0;let p={title:"Display Pill Group - API",package:"@twilio-paste/display-pill-group",description:"A Display Pill Group is a non-editable set of Pills that represent a collection of static objects.",slug:"/components/display-pill-group/api"},s=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...n,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/display-pill-group",storybookUrl:"/?path=/story/components-display-pill-group--basic"}}}),n=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],r=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",e)},c={meta:p,getStaticProps:s,mdxHeadings:n},d=o.A;function g({components:e,...a}){return(0,i.yg)(d,{...c,...a,components:e,mdxType:"MDXLayout"},(0,i.yg)("h2",null,"Installation"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/display-pill-group - or - yarn add @twilio-paste/core
`)),(0,i.yg)("h2",null,"Usage"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},`import {AgentIcon} from '@twilio-paste/icons/esm/AgentIcon';
import {Avatar} from '@twilio-paste/core/display-pill-group';
import {DisplayPillGroup, DisplayPill} from '@twilio-paste/core/display-pill-group';
import {MMSCapableIcon} from '@twilio-paste/icons/esm/MMSCapableIcon';
import {SMSCapableIcon} from '@twilio-paste/icons/esm/SMSCapableIcon';

const DisplayPillGroupExample = () => {
  return (
    <DisplayPillGroup aria-label="Products:">
      <DisplayPill>Voice</DisplayPill>
      <DisplayPill href="https://google.com">Studio</DisplayPill>
      <DisplayPill>
        <SMSCapableIcon decorative size="sizeIcon10" />
        SMS
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <MMSCapableIcon decorative size="sizeIcon10" />
        MMS
      </DisplayPill>
      <DisplayPill>
        <Avatar size="sizeIcon10" name="Customer" src="/images/avatars/avatar4.png" />
        Customer
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <Avatar size="sizeIcon10" name="Agent" icon={AgentIcon} />
        Agent
      </DisplayPill>
    </DisplayPillGroup>
  );
};
`)),(0,i.yg)("h2",null,"Props"),(0,i.yg)(r,{componentApi:a.componentApi,mdxType:"PropsTable"}))}g.isMDXComponent=!0},40615:(e,a,l)=>{"use strict";l.d(a,{A:()=>y});var i=l(72387),o=l(76127),t=l(95669),p=l.n(t),s=l(81278);l(55729);var n=l(10511),r=l(43084),c=l(10732),d=l(62887),g=l(63437),u=l(38992);let m={h1:()=>null},y=({children:e,meta:a,navigationData:l,data:t,mdxHeadings:y,pageHeaderData:{categoryRoute:h,githubUrl:D,storybookUrl:P}})=>{let b=a.title?`${a.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,v=a.description||u.DZ.DESCRIPTION,I=(0,s.useRouter)();return(0,i.FD)(g.T,{navigationData:l,children:[(0,i.FD)(p(),{children:[(0,i.Y)("title",{children:b}),(0,i.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${I.pathname}`}),(0,i.Y)("meta",{name:"description",content:v},"description")]}),(0,i.FD)(n.s,{children:[(0,i.Y)(d.c,{categoryRoute:h,githubUrl:D,storybookUrl:P,data:t}),(0,i.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,i.Y)(c.i,{data:y}),(0,i.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,i.Y)(r.Q,{componentOverrides:a.package?m:{},children:e})})]})]})]})}},69301:(e,a,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/display-pill-group/api",function(){return l(31165)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=69301)),_N_E=e.O()}]);