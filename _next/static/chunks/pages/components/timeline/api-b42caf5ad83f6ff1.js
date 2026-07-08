(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[215],{11592:(e,t,i)=>{"use strict";i.r(t),i.d(t,{__N_SSG:()=>l,default:()=>d,getStaticProps:()=>s,mdxHeadings:()=>r,meta:()=>o}),i(55729);var n=i(11885),a=i(40615),l=!0;let o={title:"Timeline - API - Components",package:"@twilio-paste/timeline",description:"A Timeline is a visual representation of events displayed in chronological order.",slug:"/components/timeline/api"},s=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...r,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/timeline",storybookUrl:"/?path=/story/components-timeline--default-timeline"}}}),r=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],p=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},m={meta:o,getStaticProps:s,mdxHeadings:r},c=a.A;function d({components:e,...t}){return(0,n.yg)(c,{...m,...t,components:e,mdxType:"MDXLayout"},(0,n.yg)("h2",null,"Installation"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/timeline - or - yarn add @twilio-paste/core
`)),(0,n.yg)("h2",null,"Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`import {Timeline, TimelineItem} from '@twilio-paste/core/timeline';

const TimePickerExample = () => {
  return (
    <Timeline>
      <TimelineItem title="Event title" timestamp="August 24, 2024">
        Event details
      </TimelineItem>

      <TimelineItem title="Event title" timestamp="August 29, 2024">
        Event details
      </TimelineItem>

      <TimelineItem title="Event title" timestamp="August 30, 2024">
        Event details
      </TimelineItem>
    </Timeline>
  );
};
`)),(0,n.yg)("h2",null,"Props"),(0,n.yg)(p,{componentApi:t.componentApi,mdxType:"PropsTable"}))}d.isMDXComponent=!0},14093:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/timeline/api",function(){return i(11592)}])},40615:(e,t,i)=>{"use strict";i.d(t,{A:()=>T});var n=i(72387),a=i(76127),l=i(95669),o=i.n(l),s=i(81278);i(55729);var r=i(10511),p=i(43084),m=i(10732),c=i(62887),d=i(63437),u=i(38992);let g={h1:()=>null},T=({children:e,meta:t,navigationData:i,data:l,mdxHeadings:T,pageHeaderData:{categoryRoute:h,githubUrl:y,storybookUrl:v}})=>{let E=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,N=t.description||u.DZ.DESCRIPTION,b=(0,s.useRouter)();return(0,n.FD)(d.T,{navigationData:i,children:[(0,n.FD)(o(),{children:[(0,n.Y)("title",{children:E}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${b.pathname}`}),(0,n.Y)("meta",{name:"description",content:N},"description")]}),(0,n.FD)(r.s,{children:[(0,n.Y)(c.c,{categoryRoute:h,githubUrl:y,storybookUrl:v,data:l}),(0,n.FD)(a.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(m.i,{data:T}),(0,n.Y)(a.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(p.Q,{componentOverrides:t.package?g:{},children:e})})]})]})]})}}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=14093)),_N_E=e.O()}]);