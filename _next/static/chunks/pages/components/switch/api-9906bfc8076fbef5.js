(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2998],{23589:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>n,default:()=>d,getStaticProps:()=>r,mdxHeadings:()=>l,meta:()=>s}),a(55729);var i=a(11885),o=a(40615),n=!0;let s={title:"Switch - API",package:"@twilio-paste/switch",description:"A Switch is an interactive binary control.",slug:"/components/switch/api"},r=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...l,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/switch",storybookUrl:"/?path=/story/components-switch--default-switch"}}}),l=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],c=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",e)},p={meta:s,getStaticProps:r,mdxHeadings:l},h=o.A;function d({components:e,...t}){return(0,i.yg)(h,{...p,...t,components:e,mdxType:"MDXLayout"},(0,i.yg)("h2",null,"Installation"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/switch - or - yarn add @twilio-paste/core
`)),(0,i.yg)("h2",null,"Usage"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},`import {Switch, SwitchGroup} from '@twilio-paste/core/switch';
export const Basic = () => {
  return (
    <SwitchGroup name="bar" legend="This is the legend text" required disabled>
      <Switch value="1" helpText="This is some help text.">
        First
      </Switch>
      <Switch value="2" helpText="This is some help text.">
        Second
      </Switch>
      <Switch value="3" helpText="This is some help text.">
        Third
      </Switch>
    </SwitchGroup>
  );
};
`)),(0,i.yg)("h2",null,"Props"),(0,i.yg)(c,{componentApi:t.componentApi,mdxType:"PropsTable"}))}d.isMDXComponent=!0},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>m});var i=a(72387),o=a(76127),n=a(95669),s=a.n(n),r=a(81278);a(55729);var l=a(10511),c=a(43084),p=a(10732),h=a(62887),d=a(63437),u=a(38992);let g={h1:()=>null},m=({children:e,meta:t,navigationData:a,data:n,mdxHeadings:m,pageHeaderData:{categoryRoute:w,githubUrl:T,storybookUrl:y}})=>{let b=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,S=t.description||u.DZ.DESCRIPTION,v=(0,r.useRouter)();return(0,i.FD)(d.T,{navigationData:a,children:[(0,i.FD)(s(),{children:[(0,i.Y)("title",{children:b}),(0,i.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${v.pathname}`}),(0,i.Y)("meta",{name:"description",content:S},"description")]}),(0,i.FD)(l.s,{children:[(0,i.Y)(h.c,{categoryRoute:w,githubUrl:T,storybookUrl:y,data:n}),(0,i.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,i.Y)(p.i,{data:m}),(0,i.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,i.Y)(c.Q,{componentOverrides:t.package?g:{},children:e})})]})]})]})}},52129:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/switch/api",function(){return a(23589)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=52129)),_N_E=e.O()}]);