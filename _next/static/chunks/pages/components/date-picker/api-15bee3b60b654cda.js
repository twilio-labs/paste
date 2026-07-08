(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1959],{19434:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>i,default:()=>m,getStaticProps:()=>p,mdxHeadings:()=>l,meta:()=>n}),a(55729);var o=a(11885),r=a(40615),i=!0;let n={title:"Date Picker - API",package:"@twilio-paste/date-picker",description:"A form component used to select a date.",slug:"/components/date-picker/api"},p=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...l,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/date-picker",storybookUrl:"/?path=/story/components-date-picker--default-date-picker"}}}),l=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],s=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},c={meta:n,getStaticProps:p,mdxHeadings:l},d=r.A;function m({components:e,...t}){return(0,o.yg)(d,{...c,...t,components:e,mdxType:"MDXLayout"},(0,o.yg)("h2",null,"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/date-picker - or - yarn add @twilio-paste/core
`)),(0,o.yg)("h2",null,"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`import {DatePicker, formatReturnDate} from '@twilio-paste/core/date-picker';
import {Label} from '@twilio-paste/core/label';
import {HelpText} from '@twilio-paste/core/helptext';

const DatePickerExample = () => {
  return (
    <>
      <Label htmlFor="foo" required>
        Start date
      </Label>
      <DatePicker
        aria-describedby="foo_text"
        id="foo"
        name="foo"
        onChange={(evt) => formatReturnDate(evt.target.value, 'MM/dd/yyyy')}
        required
      />
      <HelpText id="foo_text">Select a date.</HelpText>
    </>
  );
};
`)),(0,o.yg)("h2",null,"Props"),(0,o.yg)(s,{componentApi:t.componentApi,mdxType:"PropsTable"}))}m.isMDXComponent=!0},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var o=a(72387),r=a(76127),i=a(95669),n=a.n(i),p=a(81278);a(55729);var l=a(10511),s=a(43084),c=a(10732),d=a(62887),m=a(63437),u=a(38992);let g={h1:()=>null},h=({children:e,meta:t,navigationData:a,data:i,mdxHeadings:h,pageHeaderData:{categoryRoute:y,githubUrl:k,storybookUrl:b}})=>{let D=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,f=t.description||u.DZ.DESCRIPTION,T=(0,p.useRouter)();return(0,o.FD)(m.T,{navigationData:a,children:[(0,o.FD)(n(),{children:[(0,o.Y)("title",{children:D}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,o.Y)("meta",{name:"description",content:f},"description")]}),(0,o.FD)(l.s,{children:[(0,o.Y)(d.c,{categoryRoute:y,githubUrl:k,storybookUrl:b,data:i}),(0,o.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(c.i,{data:h}),(0,o.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(s.Q,{componentOverrides:t.package?g:{},children:e})})]})]})]})}},82499:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/date-picker/api",function(){return a(19434)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=82499)),_N_E=e.O()}]);