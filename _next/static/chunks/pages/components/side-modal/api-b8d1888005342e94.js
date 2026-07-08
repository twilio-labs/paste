(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8707],{40615:(e,a,o)=>{"use strict";o.d(a,{A:()=>h});var t=o(72387),i=o(76127),d=o(95669),n=o.n(d),l=o(81278);o(55729);var r=o(10511),s=o(43084),p=o(10732),c=o(62887),g=o(63437),m=o(38992);let u={h1:()=>null},h=({children:e,meta:a,navigationData:o,data:d,mdxHeadings:h,pageHeaderData:{categoryRoute:y,githubUrl:S,storybookUrl:M}})=>{let D=a.title?`${a.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,b=a.description||m.DZ.DESCRIPTION,T=(0,l.useRouter)();return(0,t.FD)(g.T,{navigationData:o,children:[(0,t.FD)(n(),{children:[(0,t.Y)("title",{children:D}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,t.Y)("meta",{name:"description",content:b},"description")]}),(0,t.FD)(r.s,{children:[(0,t.Y)(c.c,{categoryRoute:y,githubUrl:S,storybookUrl:M,data:d}),(0,t.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(p.i,{data:h}),(0,t.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(s.Q,{componentOverrides:a.package?u:{},children:e})})]})]})]})}},55425:(e,a,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/side-modal/api",function(){return o(76628)}])},76628:(e,a,o)=>{"use strict";o.r(a),o.d(a,{__N_SSG:()=>d,default:()=>g,getStaticProps:()=>l,mdxHeadings:()=>r,meta:()=>n}),o(55729);var t=o(11885),i=o(40615),d=!0;let n={title:"Side Modal - API",package:"@twilio-paste/side-modal",description:"A Side Modal is a page overlay that displays information that does not block the user from interacting with the rest of the page.",slug:"/components/side-modal/api"},l=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...r,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/side-modal",storybookUrl:"/?path=/story/components-side-modal--default"}}}),r=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],s=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)},p={meta:n,getStaticProps:l,mdxHeadings:r},c=i.A;function g({components:e,...a}){return(0,t.yg)(c,{...p,...a,components:e,mdxType:"MDXLayout"},(0,t.yg)("h2",null,"Installation"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/side-modal - or - yarn add @twilio-paste/core
`)),(0,t.yg)("h2",null,"Usage"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  SideModal,
  SideModalBody,
  SideModalButton,
  SideModalContainer,
  SideModalHeader,
  SideModalHeading,
} from '@twilio-paste/core/side-modal';

const SideModalExample: React.FC = () => {
  return (
    <SideModalContainer>
      <SideModalButton variant="primary">Open dialog</SideModalButton>
      <SideModal aria-label="My Dialog">
        <SideModalHeader>
          <SideModalHeading>Dialog header</SideModalHeading>
        </SideModalHeader>
        <SideModalBody>Dialog content</SideModalBody>
      </SideModal>
    </SideModalContainer>
  );
};
`)),(0,t.yg)("h2",null,"Props"),(0,t.yg)(s,{componentApi:a.componentApi,mdxType:"PropsTable"}))}g.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=55425)),_N_E=e.O()}]);