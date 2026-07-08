(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7336],{40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>g});var n=a(72387),o=a(76127),i=a(95669),r=a.n(i),l=a(81278);a(55729);var m=a(10511),s=a(43084),p=a(10732),d=a(62887),u=a(63437),c=a(38992);let y={h1:()=>null},g=({children:e,meta:t,navigationData:a,data:i,mdxHeadings:g,pageHeaderData:{categoryRoute:h,githubUrl:D,storybookUrl:T}})=>{let S=t.title?`${t.title} - ${c.DZ.TITLE}`:c.DZ.TITLE,b=t.description||c.DZ.DESCRIPTION,C=(0,l.useRouter)();return(0,n.FD)(u.T,{navigationData:a,children:[(0,n.FD)(r(),{children:[(0,n.Y)("title",{children:S}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${C.pathname}`}),(0,n.Y)("meta",{name:"description",content:b},"description")]}),(0,n.FD)(m.s,{children:[(0,n.Y)(d.c,{categoryRoute:h,githubUrl:D,storybookUrl:T,data:i}),(0,n.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(p.i,{data:g}),(0,n.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(s.Q,{componentOverrides:t.package?y:{},children:e})})]})]})]})}},45123:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>i,default:()=>u,getStaticProps:()=>l,mdxHeadings:()=>m,meta:()=>r}),a(55729);var n=a(11885),o=a(40615),i=!0;let r={title:"Summary Detail - Components - API",description:"A Summary Detail is a collapsible container that can be used to hide or show content.",slug:"/components/summary-detail/api"},l=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...m,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/summary-detail",storybookUrl:"/?path=/story/components-summarydetail--default"}}}),m=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],s=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},p={meta:r,getStaticProps:l,mdxHeadings:m},d=o.A;function u({components:e,...t}){return(0,n.yg)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,n.yg)("h2",null,"Installation"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/summary-detail - or - yarn add @twilio-paste/core
`)),(0,n.yg)("h2",null,"Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  SummaryDetail,
  SummaryDetailContent,
  SummaryDetailHeading,
  SummaryDetailHeadingContent,
  SummaryDetailToggleButton,
} from '@twilio-paste/core/summary-detail';
import {Text} from '@twilio-paste/core/text';

const SummaryDetailExample = () => {
  return (
    <SummaryDetail>
      <SummaryDetailHeading>
        <SummaryDetailToggleButton />
        <SummaryDetailHeadingContent>
            Inbound Call
        </SummaryDetailHeadingContent>
      </SummaryDetailHeading>
      <SummaryDetailContent>
        <Text as="p">This is the content of the summary detail.</Text>
      </SummaryDetailContent>
    </SummaryDetail>
  );
};
`)),(0,n.yg)("h2",null,"Props"),(0,n.yg)(s,{componentApi:t.componentApi,mdxType:"PropsTable"}))}u.isMDXComponent=!0},73253:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/summary-detail/api",function(){return a(45123)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=73253)),_N_E=e.O()}]);