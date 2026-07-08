(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2590],{6925:(e,a,n)=>{"use strict";n.r(a),n.d(a,{__N_SSG:()=>o,default:()=>u,getStaticProps:()=>s,mdxHeadings:()=>d,meta:()=>l}),n(55729);var t=n(11885),i=n(40615),o=!0;let l={title:"Side Panel - API",package:"@twilio-paste/side-panel",description:"Side Panel is a container that pushes the main page content when open.",slug:"/components/side-panel/api"},s=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...d,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/side-panel",storybookUrl:"/?path=/story/components-side-panel--default"}}}),d=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],r=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)},p={meta:l,getStaticProps:s,mdxHeadings:d},c=i.A;function u({components:e,...a}){return(0,t.yg)(c,{...p,...a,components:e,mdxType:"MDXLayout"},(0,t.yg)("h2",null,"Installation"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/side-panel - or - yarn add @twilio-paste/core
`)),(0,t.yg)("h2",null,"Usage"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  SidePanelContainer,
  SidePanel,
  SidePanelHeader,
  SidePanelHeaderActions,
  SidePanelBody,
  SidePanelPushContentWrapper,
  SidePanelButton,
} from '@twilio-paste/core/side-panel';

const SideModalExample: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <SidePanelContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <SidePanel>
        <SidePanelHeader>
          Heading goes here.
          <SidePanelHeaderActions>
            Actions go here.
          </SidePanelHeaderActions>
        </SidePanelHeader>
        <SidePanelBody>
          Side Panel content goes here.
        </SidePanelBody>
      </SidePanel>
      <SidePanelPushContentWrapper>
          <SidePanelButton variant="secondary">Toggle Side Panel</SidePanelButton>
      </SidePanelPushContentWrapper>
    </SidePanelContainer>
  );
};
`)),(0,t.yg)("h2",null,"Props"),(0,t.yg)(r,{componentApi:a.componentApi,mdxType:"PropsTable"}))}u.isMDXComponent=!0},40615:(e,a,n)=>{"use strict";n.d(a,{A:()=>h});var t=n(72387),i=n(76127),o=n(95669),l=n.n(o),s=n(81278);n(55729);var d=n(10511),r=n(43084),p=n(10732),c=n(62887),u=n(63437),g=n(38992);let P={h1:()=>null},h=({children:e,meta:a,navigationData:n,data:o,mdxHeadings:h,pageHeaderData:{categoryRoute:m,githubUrl:S,storybookUrl:y}})=>{let T=a.title?`${a.title} - ${g.DZ.TITLE}`:g.DZ.TITLE,N=a.description||g.DZ.DESCRIPTION,b=(0,s.useRouter)();return(0,t.FD)(u.T,{navigationData:n,children:[(0,t.FD)(l(),{children:[(0,t.Y)("title",{children:T}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${b.pathname}`}),(0,t.Y)("meta",{name:"description",content:N},"description")]}),(0,t.FD)(d.s,{children:[(0,t.Y)(c.c,{categoryRoute:m,githubUrl:S,storybookUrl:y,data:o}),(0,t.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(p.i,{data:h}),(0,t.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(r.Q,{componentOverrides:a.package?P:{},children:e})})]})]})]})}},44389:(e,a,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/side-panel/api",function(){return n(6925)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=44389)),_N_E=e.O()}]);