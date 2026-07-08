(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8857],{40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var o=a(72387),n=a(76127),s=a(95669),i=a.n(s),r=a(81278);a(55729);var l=a(10511),p=a(43084),c=a(10732),d=a(62887),u=a(63437),m=a(38992);let g={h1:()=>null},h=({children:e,meta:t,navigationData:a,data:s,mdxHeadings:h,pageHeaderData:{categoryRoute:y,githubUrl:T,storybookUrl:N}})=>{let b=t.title?`${t.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,f=t.description||m.DZ.DESCRIPTION,v=(0,r.useRouter)();return(0,o.FD)(u.T,{navigationData:a,children:[(0,o.FD)(i(),{children:[(0,o.Y)("title",{children:b}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${v.pathname}`}),(0,o.Y)("meta",{name:"description",content:f},"description")]}),(0,o.FD)(l.s,{children:[(0,o.Y)(d.c,{categoryRoute:y,githubUrl:T,storybookUrl:N,data:s}),(0,o.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(c.i,{data:h}),(0,o.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(p.Q,{componentOverrides:t.package?g:{},children:e})})]})]})]})}},53284:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>s,default:()=>u,getStaticProps:()=>r,mdxHeadings:()=>l,meta:()=>i}),a(55729);var o=a(11885),n=a(40615),s=!0;let i={title:"Toast - API",package:"@twilio-paste/toast",description:"A toast communicates an immediate and direct response to a user action.",slug:"/components/toast/api"},r=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...l,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/toast",storybookUrl:"/?path=/story/components-toast--neutral"}}}),l=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Toaster component",depth:3},{value:"Props",depth:2}],p=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},c={meta:i,getStaticProps:r,mdxHeadings:l},d=n.A;function u({components:e,...t}){return(0,o.yg)(d,{...c,...t,components:e,mdxType:"MDXLayout"},(0,o.yg)("h2",null,"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/toast - or - yarn add @twilio-paste/core
`)),(0,o.yg)("h2",null,"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`import {Toast, Toaster} from '@twilio-paste/core/toast';

const Component = () => {
  const toaster = useToaster();
  return <Toaster left={['space40', 'unset', 'unset']} {...toaster} />;
};
`)),(0,o.yg)("h3",null,"Toaster component"),(0,o.yg)("p",null,"If you choose to handle state entirely yourself, you can use ",(0,o.yg)("inlineCode",{parentName:"p"},"<Toaster />")," on its own, but you are fully responsible for handling state, time-outs, and the dismiss functionality."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},`<Toaster
  left={['space40', 'unset', 'unset']}
  toasts={[{
    id: '',
    message: '',
    variant: ''
    dismissAfter: ''
  }]}
  pop={(id) =>{
    // called when a toast is dismissed
  }}
/>
`)),(0,o.yg)("h2",null,"Props"),(0,o.yg)(p,{componentApi:t.componentApi,mdxType:"PropsTable"}))}u.isMDXComponent=!0},53679:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/toast/api",function(){return a(53284)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=53679)),_N_E=e.O()}]);