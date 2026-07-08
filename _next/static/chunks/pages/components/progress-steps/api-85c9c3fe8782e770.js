(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9121],{27226:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__N_SSG:()=>a,default:()=>d,getStaticProps:()=>n,mdxHeadings:()=>i,meta:()=>p}),r(55729);var s=r(11885),o=r(40615),a=!0;let p={title:"Progress Steps",package:"@twilio-paste/progress-steps",description:"Progress Steps show a user a clear path to complete a complex multi-step task.",slug:"/components/progress-steps/api"},n=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...i,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/progress-steps",storybookUrl:"/?path=/story/components-progress-steps-horizontal--divs"}}}),i=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],l=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,s.yg)("div",e)},c={meta:p,getStaticProps:n,mdxHeadings:i},g=o.A;function d({components:e,...t}){return(0,s.yg)(g,{...c,...t,components:e,mdxType:"MDXLayout"},(0,s.yg)("h2",null,"Installation"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/progress-steps - or - yarn add @twilio-paste/core
`)),(0,s.yg)("h2",null,"Usage"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  ProgressSteps,
  ProgressStepIncomplete,
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepError,
  ProgressStepSeparator,
} from '@twilio-paste/core/progress-steps';

const PopoverExample: React.FC = () => {
  return (
    <ProgressSteps>
      <ProgressStepComplete as="button" onClick={() => {}}>
        Sign up
      </ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="button" onClick={() => {}}>
        Validate email
      </ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="button" onClick={() => {}}>
        Complete profile
      </ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="button" onClick={() => {}}>
        Add friends
      </ProgressStepIncomplete>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="button" onClick={() => {}} disabled>
        Start event
      </ProgressStepIncomplete>
    </ProgressSteps>
  );
};
`)),(0,s.yg)("h2",null,"Props"),(0,s.yg)(l,{componentApi:t.componentApi,mdxType:"PropsTable"}))}d.isMDXComponent=!0},40615:(e,t,r)=>{"use strict";r.d(t,{A:()=>P});var s=r(72387),o=r(76127),a=r(95669),p=r.n(a),n=r(81278);r(55729);var i=r(10511),l=r(43084),c=r(10732),g=r(62887),d=r(63437),u=r(38992);let m={h1:()=>null},P=({children:e,meta:t,navigationData:r,data:a,mdxHeadings:P,pageHeaderData:{categoryRoute:S,githubUrl:h,storybookUrl:y}})=>{let b=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,C=t.description||u.DZ.DESCRIPTION,k=(0,n.useRouter)();return(0,s.FD)(d.T,{navigationData:r,children:[(0,s.FD)(p(),{children:[(0,s.Y)("title",{children:b}),(0,s.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${k.pathname}`}),(0,s.Y)("meta",{name:"description",content:C},"description")]}),(0,s.FD)(i.s,{children:[(0,s.Y)(g.c,{categoryRoute:S,githubUrl:h,storybookUrl:y,data:a}),(0,s.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,s.Y)(c.i,{data:P}),(0,s.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,s.Y)(l.Q,{componentOverrides:t.package?m:{},children:e})})]})]})]})}},62609:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/progress-steps/api",function(){return r(27226)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=62609)),_N_E=e.O()}]);