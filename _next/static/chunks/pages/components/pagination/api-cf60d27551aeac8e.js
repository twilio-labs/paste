(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2742],{40615:(a,e,n)=>{"use strict";n.d(e,{A:()=>b});var t=n(72387),i=n(76127),o=n(95669),r=n.n(o),l=n(81278);n(55729);var s=n(10511),p=n(43084),g=n(10732),u=n(62887),c=n(63437),d=n(38992);let m={h1:()=>null},b=({children:a,meta:e,navigationData:n,data:o,mdxHeadings:b,pageHeaderData:{categoryRoute:P,githubUrl:h,storybookUrl:N}})=>{let y=e.title?`${e.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,v=e.description||d.DZ.DESCRIPTION,w=(0,l.useRouter)();return(0,t.FD)(c.T,{navigationData:n,children:[(0,t.FD)(r(),{children:[(0,t.Y)("title",{children:y}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${w.pathname}`}),(0,t.Y)("meta",{name:"description",content:v},"description")]}),(0,t.FD)(s.s,{children:[(0,t.Y)(u.c,{categoryRoute:P,githubUrl:h,storybookUrl:N,data:o}),(0,t.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(g.i,{data:b}),(0,t.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(p.Q,{componentOverrides:e.package?m:{},children:a})})]})]})]})}},70309:(a,e,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/pagination/api",function(){return n(91981)}])},91981:(a,e,n)=>{"use strict";n.r(e),n.d(e,{__N_SSG:()=>o,default:()=>c,getStaticProps:()=>l,mdxHeadings:()=>s,meta:()=>r}),n(55729);var t=n(11885),i=n(40615),o=!0;let r={title:"Pagination",package:"@twilio-paste/pagination",description:"Pagination lets users navigate through content or a dataset that’s been broken up into multiple pages.",slug:"/components/pagination/api"},l=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...s,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/pagination",storybookUrl:"/?path=/story/components-pagination--arrows"}}}),s=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],p=function(a){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",a)},g={meta:r,getStaticProps:l,mdxHeadings:s},u=i.A;function c({components:a,...e}){return(0,t.yg)(u,{...g,...e,components:a,mdxType:"MDXLayout"},(0,t.yg)("h2",null,"Installation"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/pagination - or - yarn add @twilio-paste/core
`)),(0,t.yg)("h2",null,"Usage"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  Pagination,
  PaginationItems,
  PaginationArrow,
  PaginationLabel,
  PaginationNumbers,
  PaginationNumber,
  PaginationEllipsis,
} from '@twilio-paste/core/pagination';

const Component = () => {
  return (
    <Pagination label="pagination navigation">
      <PaginationItems>
        <PaginationArrow variant="back" label="Go to previous page" visibleLabel="Previous" />
        <PaginationNumbers pageLabel="Page 5 of 10">
          <PaginationNumber label="Go to page 1">1</PaginationNumber>
          <PaginationEllipsis label="Collapsed previous pages" />
          <PaginationNumber label="Go to page 4">4</PaginationNumber>
          <PaginationNumber label="Go to page 5" isCurrent>
            5
          </PaginationNumber>
          <PaginationNumber label="Go to page 6">6</PaginationNumber>
          <PaginationEllipsis label="Collapsed next pages" />
          <PaginationNumber label="Go to page 10">10</PaginationNumber>
        </PaginationNumbers>
        <PaginationArrow variant="forward" label="Go to next page" visibleLabel="Next" />
      </PaginationItems>
    </Pagination>
  );
};
`)),(0,t.yg)("h2",null,"Props"),(0,t.yg)(p,{componentApi:e.componentApi,mdxType:"PropsTable"}))}c.isMDXComponent=!0}},a=>{a.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>a(a.s=70309)),_N_E=a.O()}]);