(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6706],{17905:(i,e,a)=>{"use strict";a.r(e),a.d(e,{__N_SSG:()=>o,default:()=>g,getStaticProps:()=>r,mdxHeadings:()=>p,meta:()=>l}),a(55729);var n=a(11885),t=a(40615),o=!0;let l={title:"Minimizable Dialog",package:"@twilio-paste/minimizable-dialog",description:"An accessible, non-modal dialog that can be minimized to the bottom of the page.",slug:"/components/minimizable-dialog/api"},r=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...p,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/minimizable-dialog",storybookUrl:"/?path=/story/components-minimizable-dialog--default-for-vrt"}}}),p=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],m=function(i){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",i)},s={meta:l,getStaticProps:r,mdxHeadings:p},d=t.A;function g({components:i,...e}){return(0,n.yg)(d,{...s,...e,components:i,mdxType:"MDXLayout"},(0,n.yg)("h2",null,"Installation"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/minimizable-dialog - or - yarn add @twilio-paste/core
`)),(0,n.yg)("h2",null,"Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  MinimizableDialog,
  MinimizableDialogButton,
  MinimizableDialogHeader,
  MinimizableDialogContainer,
  MinimizableDialogContent,
} from '@twilio-paste/core/minimizable-dialog';

const MinimizableDialogExample: React.FC = () => {
  return (
    <MinimizableDialogContainer>
      <MinimizableDialogButton variant="primary">Open dialog</MinimizableDialogButton>
      <MinimizableDialog aria-label="My Dialog">
        <MinimizableDialogHeader>Dialog header</MinimizableDialogHeader>
        <MinimizableDialogContent>Dialog content</MinimizableDialogContent>
      </MinimizableDialog>
    </MinimizableDialogContainer>
  );
};
`)),(0,n.yg)("h2",null,"Props"),(0,n.yg)(m,{componentApi:e.componentApi,mdxType:"PropsTable"}))}g.isMDXComponent=!0},40615:(i,e,a)=>{"use strict";a.d(e,{A:()=>u});var n=a(72387),t=a(76127),o=a(95669),l=a.n(o),r=a(81278);a(55729);var p=a(10511),m=a(43084),s=a(10732),d=a(62887),g=a(63437),c=a(38992);let b={h1:()=>null},u=({children:i,meta:e,navigationData:a,data:o,mdxHeadings:u,pageHeaderData:{categoryRoute:D,githubUrl:h,storybookUrl:z}})=>{let y=e.title?`${e.title} - ${c.DZ.TITLE}`:c.DZ.TITLE,M=e.description||c.DZ.DESCRIPTION,T=(0,r.useRouter)();return(0,n.FD)(g.T,{navigationData:a,children:[(0,n.FD)(l(),{children:[(0,n.Y)("title",{children:y}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,n.Y)("meta",{name:"description",content:M},"description")]}),(0,n.FD)(p.s,{children:[(0,n.Y)(d.c,{categoryRoute:D,githubUrl:h,storybookUrl:z,data:o}),(0,n.FD)(t.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(s.i,{data:u}),(0,n.Y)(t.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(m.Q,{componentOverrides:e.package?b:{},children:i})})]})]})]})}},90377:(i,e,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/minimizable-dialog/api",function(){return a(17905)}])}},i=>{i.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>i(i.s=90377)),_N_E=i.O()}]);