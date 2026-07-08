(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4556],{17661:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/table/api",function(){return a(50769)}])},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>g});var o=a(72387),n=a(76127),l=a(95669),i=a.n(l),r=a(81278);a(55729);var s=a(10511),d=a(43084),p=a(10732),c=a(62887),T=a(63437),u=a(38992);let m={h1:()=>null},g=({children:e,meta:t,navigationData:a,data:l,mdxHeadings:g,pageHeaderData:{categoryRoute:h,githubUrl:b,storybookUrl:y}})=>{let N=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,f=t.description||u.DZ.DESCRIPTION,v=(0,r.useRouter)();return(0,o.FD)(T.T,{navigationData:a,children:[(0,o.FD)(i(),{children:[(0,o.Y)("title",{children:N}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${v.pathname}`}),(0,o.Y)("meta",{name:"description",content:f},"description")]}),(0,o.FD)(s.s,{children:[(0,o.Y)(c.c,{categoryRoute:h,githubUrl:b,storybookUrl:y,data:l}),(0,o.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(p.i,{data:g}),(0,o.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(d.Q,{componentOverrides:t.package?m:{},children:e})})]})]})]})}},50769:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>l,default:()=>T,getStaticProps:()=>r,mdxHeadings:()=>s,meta:()=>i}),a(55729);var o=a(11885),n=a(40615),l=!0;let i={title:"Table - API",package:"@twilio-paste/table",description:"A Table is a collection of information displayed across columns and rows.",slug:"/components/table/api"},r=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...s,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/table",storybookUrl:"/?path=/story/components-table--default-table"}}}),s=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],d=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},p={meta:i,getStaticProps:r,mdxHeadings:s},c=n.A;function T({components:e,...t}){return(0,o.yg)(c,{...p,...t,components:e,mdxType:"MDXLayout"},(0,o.yg)("h2",null,"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/table - or - yarn add @twilio-paste/core
`)),(0,o.yg)("h2",null,"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`import {Table, THead, Tr, Th, TBody, Td, TFoot} from '@twilio-paste/core/table';

const TableExample: React.FC = () => {
  return (
    <Table tableLayout="fixed" variant="default" striped>
      <THead>
        <Tr verticalAlign="middle">
          <Th width="size40" textAlign="left">
            Column 1
          </Th>
          <Th>Column 2</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Content</Td>
          <Td>Content</Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td>Content</Td>
          <Td>Content</Td>
        </Tr>
      </TFoot>
    </Table>
  );
};
`)),(0,o.yg)("h2",null,"Props"),(0,o.yg)(d,{componentApi:t.componentApi,mdxType:"PropsTable"}))}T.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=17661)),_N_E=e.O()}]);