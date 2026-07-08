(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2191],{40615:(e,r,a)=>{"use strict";a.d(r,{A:()=>h});var t=a(72387),o=a(76127),s=a(95669),n=a.n(s),i=a(81278);a(55729);var p=a(10511),l=a(43084),c=a(10732),d=a(62887),g=a(63437),u=a(38992);let m={h1:()=>null},h=({children:e,meta:r,navigationData:a,data:s,mdxHeadings:h,pageHeaderData:{categoryRoute:b,githubUrl:y,storybookUrl:T}})=>{let D=r.title?`${r.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,x=r.description||u.DZ.DESCRIPTION,P=(0,i.useRouter)();return(0,t.FD)(g.T,{navigationData:a,children:[(0,t.FD)(n(),{children:[(0,t.Y)("title",{children:D}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${P.pathname}`}),(0,t.Y)("meta",{name:"description",content:x},"description")]}),(0,t.FD)(p.s,{children:[(0,t.Y)(d.c,{categoryRoute:b,githubUrl:y,storybookUrl:T,data:s}),(0,t.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(c.i,{data:h}),(0,t.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(l.Q,{componentOverrides:r.package?m:{},children:e})})]})]})]})}},78797:(e,r,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/progress-bar/api",function(){return a(89620)}])},89620:(e,r,a)=>{"use strict";a.r(r),a.d(r,{__N_SSG:()=>s,default:()=>g,getStaticProps:()=>i,mdxHeadings:()=>p,meta:()=>n}),a(55729);var t=a(11885),o=a(40615),s=!0;let n={title:"Progress Bar - API",package:"@twilio-paste/progress-bar",description:"A Progress Bar communicates the completion status of a process or task.",slug:"/components/progress-bar/api"},i=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...p,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/progress-bar",storybookUrl:"/?path=/story/components-progressbar--default"}}}),p=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],l=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)},c={meta:n,getStaticProps:i,mdxHeadings:p},d=o.A;function g({components:e,...r}){return(0,t.yg)(d,{...c,...r,components:e,mdxType:"MDXLayout"},(0,t.yg)("h2",null,"Installation"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/progress-bar - or - yarn add @twilio-paste/core
`)),(0,t.yg)("h2",null,"Usage"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-jsx"},`import {ProgressBar, ProgressBarLabel} from '@twilio-paste/core/progress-bar';
import {Box} from '@twilio-paste/core/box';
import {HelpText} from '@twilio-paste/core/help-text';
import {useUID} from '@twilio-paste/core/uid-library';

const AlertDialogExample = () => {
  const progressBarId = useUID();
  const helpTextId = useUID();

  return (
    <Box>
      <ProgressBarLabel htmlFor={progressBarId}>Downloading more RAM</ProgressBarLabel>
      <ProgressBar id={progressBarId} aria-describedby={helpTextId} isIndeterminate />
      <HelpText id={helpTextId}>Increasing your RAM helps your computer run faster.</HelpText>
    </Box>
  );
};
`)),(0,t.yg)("h2",null,"Props"),(0,t.yg)(l,{componentApi:r.componentApi,mdxType:"PropsTable"}))}g.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=78797)),_N_E=e.O()}]);