(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2969],{2427:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/form-layout/api",function(){return t(26304)}])},26304:(e,o,t)=>{"use strict";t.r(o),t.d(o,{__N_SSG:()=>n,default:()=>d,getStaticProps:()=>l,mdxHeadings:()=>s,meta:()=>i}),t(55729);var a=t(11885),r=t(40615),n=!0;let i={title:"Form - API",package:"@twilio-paste/form",description:"A Form groups related form elements that allow users to input information or configure options.",slug:"/components/form-layout/api"},l=async()=>({props:{data:{...packageJson,...feature,nameOverride:"Form Layout",descriptionOverride:"A Form Layout groups related form elements that allow users to input information or configure options."},componentApi,mdxHeadings:[...s,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/form",storybookUrl:"/?path=/story/components-form--default"}}}),s=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],p=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},m={meta:i,getStaticProps:l,mdxHeadings:s},c=r.A;function d({components:e,...o}){return(0,a.yg)(c,{...m,...o,components:e,mdxType:"MDXLayout"},(0,a.yg)("h2",null,"Installation"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/form - or - yarn add @twilio-paste/core
`)),(0,a.yg)("h2",null,"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  Form,
  FormSection,
  FormSectionHeading,
  FormControl
} from '@twilio-paste/core/form;
import {Input} from '@twilio-paste/core/input;
import {Label} from '@twilio-paste/core/label;

const SampleForm = () => (
 <Form maxWidth="size30">
   <FormSection>
     <FormSectionHeading variant="heading30">
       Personal information
     </FormSectionHeading>
     <FormControl>
       <Label htmlFor="first-name">First name</Label>
       <Input id="first-name" />
     </FormControl>
     <FormControl>
       <Label htmlFor="last-name">Last name</Label>
       <Input id="last-name" />
     </FormControl>
   </FormSection>
 </CheckboxGroup>
);
`)),(0,a.yg)("h2",null,"Props"),(0,a.yg)(p,{componentApi:o.componentApi,mdxType:"PropsTable"}))}d.isMDXComponent=!0},40615:(e,o,t)=>{"use strict";t.d(o,{A:()=>h});var a=t(72387),r=t(76127),n=t(95669),i=t.n(n),l=t(81278);t(55729);var s=t(10511),p=t(43084),m=t(10732),c=t(62887),d=t(63437),u=t(38992);let g={h1:()=>null},h=({children:e,meta:o,navigationData:t,data:n,mdxHeadings:h,pageHeaderData:{categoryRoute:f,githubUrl:y,storybookUrl:F}})=>{let b=o.title?`${o.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,w=o.description||u.DZ.DESCRIPTION,T=(0,l.useRouter)();return(0,a.FD)(d.T,{navigationData:t,children:[(0,a.FD)(i(),{children:[(0,a.Y)("title",{children:b}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,a.Y)("meta",{name:"description",content:w},"description")]}),(0,a.FD)(s.s,{children:[(0,a.Y)(c.c,{categoryRoute:f,githubUrl:y,storybookUrl:F,data:n}),(0,a.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,a.Y)(m.i,{data:h}),(0,a.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,a.Y)(p.Q,{componentOverrides:o.package?g:{},children:e})})]})]})]})}}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=2427)),_N_E=e.O()}]);