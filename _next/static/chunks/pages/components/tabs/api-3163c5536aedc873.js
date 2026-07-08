(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4954],{40615:(a,e,t)=>{"use strict";t.d(e,{A:()=>g});var n=t(72387),s=t(76127),o=t(95669),l=t.n(o),i=t(81278);t(55729);var r=t(10511),p=t(43084),d=t(10732),b=t(62887),c=t(63437),T=t(38992);let u={h1:()=>null},g=({children:a,meta:e,navigationData:t,data:o,mdxHeadings:g,pageHeaderData:{categoryRoute:m,githubUrl:h,storybookUrl:y}})=>{let P=e.title?`${e.title} - ${T.DZ.TITLE}`:T.DZ.TITLE,w=e.description||T.DZ.DESCRIPTION,D=(0,i.useRouter)();return(0,n.FD)(c.T,{navigationData:t,children:[(0,n.FD)(l(),{children:[(0,n.Y)("title",{children:P}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${D.pathname}`}),(0,n.Y)("meta",{name:"description",content:w},"description")]}),(0,n.FD)(r.s,{children:[(0,n.Y)(b.c,{categoryRoute:m,githubUrl:h,storybookUrl:y,data:o}),(0,n.FD)(s.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(d.i,{data:g}),(0,n.Y)(s.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(p.Q,{componentOverrides:e.package?u:{},children:a})})]})]})]})}},86481:(a,e,t)=>{"use strict";t.r(e),t.d(e,{__N_SSG:()=>o,default:()=>c,getStaticProps:()=>i,mdxHeadings:()=>r,meta:()=>l}),t(55729);var n=t(11885),s=t(40615),o=!0;let l={title:"Tabs - API",package:"@twilio-paste/tabs",description:"Tabs are labeled controls that allow users to switch between multiple views within a page.",slug:"/components/tabs/api"},i=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...r,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/tabs",storybookUrl:"/?path=/story/components-tabs--horizontal-tabs"}}}),r=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],p=function(a){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",a)},d={meta:l,getStaticProps:i,mdxHeadings:r},b=s.A;function c({components:a,...e}){return(0,n.yg)(b,{...d,...e,components:a,mdxType:"MDXLayout"},(0,n.yg)("h2",null,"Installation"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/tabs - or - yarn add @twilio-paste/core
`)),(0,n.yg)("h2",null,"Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@twilio-paste/core/tabs';

const HorizontalTabsExample: React.FC = () => {
  const selectedId = useUID();
  return (
    <Tabs selectedId={selectedId} baseId="horizontal-tabs-example">
      <TabList aria-label="My tabs">
        <Tab>Tab 1</Tab>
        <Tab disabled>Tab 2</Tab>
        <Tab id={selectedId}>Tab 3</Tab>
      </TabList>
      <TabPanels paddingTop="space20">
        <TabPanel>Tab 1</TabPanel>
        <TabPanel>Tab 2</TabPanel>
        <TabPanel>Tab 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
`)),(0,n.yg)("h2",null,"Props"),(0,n.yg)(p,{componentApi:e.componentApi,mdxType:"PropsTable"}))}c.isMDXComponent=!0},97533:(a,e,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tabs/api",function(){return t(86481)}])}},a=>{a.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>a(a.s=97533)),_N_E=a.O()}]);