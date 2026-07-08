(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{17587:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>r,default:()=>d,getStaticProps:()=>p,mdxHeadings:()=>l,meta:()=>n}),a(55729);var o=a(11885),i=a(40615),r=!0;let n={title:"Time Picker - API - Components",package:"@twilio-paste/time-picker",description:"A form component used to select a time.",slug:"/components/time-picker/api"},p=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...l,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/time-picker",storybookUrl:"/?path=/story/components-time-picker--default-time-picker"}}}),l=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],s=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},c={meta:n,getStaticProps:p,mdxHeadings:l},m=i.A;function d({components:e,...t}){return(0,o.yg)(m,{...c,...t,components:e,mdxType:"MDXLayout"},(0,o.yg)("h2",null,"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/time-picker - or - yarn add @twilio-paste/core
`)),(0,o.yg)("h2",null,"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`import {TimePicker, formatReturnTime} from '@twilio-paste/core/time-picker';
import {Label} from '@twilio-paste/core/label';
import {HelpText} from '@twilio-paste/core/helptext';

const TimePickerExample = () => {
  return (
    <>
      <Label htmlFor="foo" required>
        Start time
      </Label>
      <TimePicker
        aria-describedby="foo_text"
        id="foo"
        name="foo"
        onChange={(evt) => formatReturnTime(evt.target.value, 'hh:mm aa')}
        required
      />
      <HelpText id="foo_text">Select a time.</HelpText>
    </>
  );
};
`)),(0,o.yg)("h2",null,"Props"),(0,o.yg)(s,{componentApi:t.componentApi,mdxType:"PropsTable"}))}d.isMDXComponent=!0},38037:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/time-picker/api",function(){return a(17587)}])},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var o=a(72387),i=a(76127),r=a(95669),n=a.n(r),p=a(81278);a(55729);var l=a(10511),s=a(43084),c=a(10732),m=a(62887),d=a(63437),u=a(38992);let g={h1:()=>null},h=({children:e,meta:t,navigationData:a,data:r,mdxHeadings:h,pageHeaderData:{categoryRoute:T,githubUrl:k,storybookUrl:y}})=>{let b=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,f=t.description||u.DZ.DESCRIPTION,_=(0,p.useRouter)();return(0,o.FD)(d.T,{navigationData:a,children:[(0,o.FD)(n(),{children:[(0,o.Y)("title",{children:b}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${_.pathname}`}),(0,o.Y)("meta",{name:"description",content:f},"description")]}),(0,o.FD)(l.s,{children:[(0,o.Y)(m.c,{categoryRoute:T,githubUrl:k,storybookUrl:y,data:r}),(0,o.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(c.i,{data:h}),(0,o.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(s.Q,{componentOverrides:t.package?g:{},children:e})})]})]})]})}}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=38037)),_N_E=e.O()}]);