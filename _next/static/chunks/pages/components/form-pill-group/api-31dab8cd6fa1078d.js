(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6244],{4473:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/form-pill-group/api",function(){return t(13513)}])},13513:(e,o,t)=>{"use strict";t.r(o),t.d(o,{__N_SSG:()=>i,default:()=>m,getStaticProps:()=>n,mdxHeadings:()=>p,meta:()=>a}),t(55729);var r=t(11885),l=t(40615),i=!0;let a={title:"Form Pill Group - API",package:"@twilio-paste/form-pill-group",description:"A Form Pill Group is an editable set of Pills that represent a collection of selectable or removable objects.",slug:"/components/form-pill-group/api"},n=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...p,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/form-pill-group",storybookUrl:"/?path=/story/components-form-pill-group--basic"}}}),p=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],s=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)},c={meta:a,getStaticProps:n,mdxHeadings:p},d=l.A;function m({components:e,...o}){return(0,r.yg)(d,{...c,...o,components:e,mdxType:"MDXLayout"},(0,r.yg)("h2",null,"Installation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/form-pill-group - or - yarn add @twilio-paste/core
`)),(0,r.yg)("h2",null,"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},`import {useFormPillState, FormPillGroup, FormPill} from '@twilio-paste/core/form-pill-group';
import {ProductVideoIcon} from '@twilio-paste/icons/esm/ProductVideoIcon';
import {ProductVerifyIcon} from '@twilio-paste/icons/esm/ProductVerifyIcon';

export const BasicFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState}>Voice</FormPill>
        <FormPill {...pillState}>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState}>
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
      </FormPillGroup>
    </form>
  );
};
`)),(0,r.yg)("h2",null,"Props"),(0,r.yg)(s,{componentApi:o.componentApi,mdxType:"PropsTable"}))}m.isMDXComponent=!0},40615:(e,o,t)=>{"use strict";t.d(o,{A:()=>P});var r=t(72387),l=t(76127),i=t(95669),a=t.n(i),n=t(81278);t(55729);var p=t(10511),s=t(43084),c=t(10732),d=t(62887),m=t(63437),u=t(38992);let g={h1:()=>null},P=({children:e,meta:o,navigationData:t,data:i,mdxHeadings:P,pageHeaderData:{categoryRoute:h,githubUrl:y,storybookUrl:f}})=>{let b=o.title?`${o.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,F=o.description||u.DZ.DESCRIPTION,T=(0,n.useRouter)();return(0,r.FD)(m.T,{navigationData:t,children:[(0,r.FD)(a(),{children:[(0,r.Y)("title",{children:b}),(0,r.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,r.Y)("meta",{name:"description",content:F},"description")]}),(0,r.FD)(p.s,{children:[(0,r.Y)(d.c,{categoryRoute:h,githubUrl:y,storybookUrl:f,data:i}),(0,r.FD)(l.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,r.Y)(c.i,{data:P}),(0,r.Y)(l.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,r.Y)(s.Q,{componentOverrides:o.package?g:{},children:e})})]})]})]})}}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=4473)),_N_E=e.O()}]);