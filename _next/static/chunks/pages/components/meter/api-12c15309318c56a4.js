(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8779],{40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var o=a(72387),r=a(76127),n=a(95669),i=a.n(n),l=a(81278);a(55729);var p=a(10511),s=a(43084),d=a(10732),c=a(62887),m=a(63437),u=a(38992);let g={h1:()=>null},h=({children:e,meta:t,navigationData:a,data:n,mdxHeadings:h,pageHeaderData:{categoryRoute:y,githubUrl:b,storybookUrl:T}})=>{let D=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,v=t.description||u.DZ.DESCRIPTION,w=(0,l.useRouter)();return(0,o.FD)(m.T,{navigationData:a,children:[(0,o.FD)(i(),{children:[(0,o.Y)("title",{children:D}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${w.pathname}`}),(0,o.Y)("meta",{name:"description",content:v},"description")]}),(0,o.FD)(p.s,{children:[(0,o.Y)(c.c,{categoryRoute:y,githubUrl:b,storybookUrl:T,data:n}),(0,o.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(d.i,{data:h}),(0,o.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(s.Q,{componentOverrides:t.package?g:{},children:e})})]})]})]})}},61578:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>n,default:()=>m,getStaticProps:()=>l,mdxHeadings:()=>p,meta:()=>i}),a(55729);var o=a(11885),r=a(40615),n=!0;let i={title:"Meter",package:"@twilio-paste/meter",description:"Meter is a visual representation of a numerical value within a known range.",slug:"/components/meter/api"},l=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...p,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/meter",storybookUrl:"/?path=/story/components-meter--default"}}}),p=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],s=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},d={meta:i,getStaticProps:l,mdxHeadings:p},c=r.A;function m({components:e,...t}){return(0,o.yg)(c,{...d,...t,components:e,mdxType:"MDXLayout"},(0,o.yg)("h2",null,"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/core - or - yarn add @twilio-paste/meter
`)),(0,o.yg)("h2",null,"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`import {Meter, MeterLabel} from '@twilio-paste/core/meter';
import {HelpText} from '@twilio-paste/core/help-text'
import {useUID} from '@twilio-paste/core/uid-library'

const Component = () => {
  const meterId = useUID();
  const helpTextId = useUID(); // Help text is optional

  return (
    <>
      <MeterLabel htmlFor={meterId} valueLabel="50%">Label</Label>
      <Meter id={meterId} value={50} aria-describedby={helpTextId} />
      <HelpText id={helpTextId}>Help text</HelpText>
    </>
  );
};
`)),(0,o.yg)("h2",null,"Props"),(0,o.yg)(s,{componentApi:t.componentApi,mdxType:"PropsTable"}))}m.isMDXComponent=!0},84823:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/meter/api",function(){return a(61578)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=84823)),_N_E=e.O()}]);