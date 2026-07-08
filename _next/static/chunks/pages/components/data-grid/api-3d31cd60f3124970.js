(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5185],{40615:(a,e,t)=>{"use strict";t.d(e,{A:()=>g});var i=t(72387),r=t(76127),d=t(95669),l=t.n(d),o=t(81278);t(55729);var n=t(10511),D=t(43084),s=t(10732),G=t(62887),p=t(63437),c=t(38992);let C={h1:()=>null},g=({children:a,meta:e,navigationData:t,data:d,mdxHeadings:g,pageHeaderData:{categoryRoute:m,githubUrl:u,storybookUrl:h}})=>{let y=e.title?`${e.title} - ${c.DZ.TITLE}`:c.DZ.TITLE,w=e.description||c.DZ.DESCRIPTION,b=(0,o.useRouter)();return(0,i.FD)(p.T,{navigationData:t,children:[(0,i.FD)(l(),{children:[(0,i.Y)("title",{children:y}),(0,i.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${b.pathname}`}),(0,i.Y)("meta",{name:"description",content:w},"description")]}),(0,i.FD)(n.s,{children:[(0,i.Y)(G.c,{categoryRoute:m,githubUrl:u,storybookUrl:h,data:d}),(0,i.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,i.Y)(s.i,{data:g}),(0,i.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,i.Y)(D.Q,{componentOverrides:e.package?C:{},children:a})})]})]})]})}},53851:(a,e,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-grid/api",function(){return t(67208)}])},67208:(a,e,t)=>{"use strict";t.r(e),t.d(e,{__N_SSG:()=>d,default:()=>p,getStaticProps:()=>o,mdxHeadings:()=>n,meta:()=>l}),t(55729);var i=t(11885),r=t(40615),d=!0;let l={title:"Data Grid - API",package:"@twilio-paste/data-grid",description:"A data grid is an interactive table used for working with a large collection of data in a scannable way.",slug:"/components/data-grid/api"},o=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...n,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/data-grid",storybookUrl:"/?path=/story/components-data-grid--plain-data-grid"}}}),n=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],D=function(a){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",a)},s={meta:l,getStaticProps:o,mdxHeadings:n},G=r.A;function p({components:a,...e}){return(0,i.yg)(G,{...s,...e,components:a,mdxType:"MDXLayout"},(0,i.yg)("h2",null,"Installation"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/data-grid - or - yarn add @twilio-paste/core
`)),(0,i.yg)("h2",null,"Usage"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  DataGrid,
  DataGridHead,
  DataGridRow,
  DataGridHeader,
  DataGridBody,
  DataGridCell,
  DataGridFoot,
} from '@twilio-paste/core/data-grid';

const Component = () => (
  <DataGrid aria-label="User information table" striped>
    <DataGridHead>
      <DataGridRow>
        <DataGridHeader>First Name</DataGridHeader>
        <DataGridHeader>Last Name</DataGridHeader>
        <DataGridHeader>Country</DataGridHeader>
        <DataGridHeader>Email</DataGridHeader>
        <DataGridHeader>Phone</DataGridHeader>
      </DataGridRow>
    </DataGridHead>
    <DataGridBody>
      <DataGridRow>
        <DataGridCell>Devyn</DataGridCell>
        <DataGridCell>Weimann</DataGridCell>
        <DataGridCell>Congo</DataGridCell>
        <DataGridCell>Matilde86@gmail.com</DataGridCell>
        <DataGridCell>652-441-1766 x377</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridCell>Fritz</DataGridCell>
        <DataGridCell>Bashirian</DataGridCell>
        <DataGridCell>France</DataGridCell>
        <DataGridCell>Magali.Harber@hotmail.com</DataGridCell>
        <DataGridCell>1-229-278-7567</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridCell>Jovanny</DataGridCell>
        <DataGridCell>Mante</DataGridCell>
        <DataGridCell>Pitcairn Islands</DataGridCell>
        <DataGridCell>Fausto_Vandervort15@gmail.com</DataGridCell>
        <DataGridCell>(629) 375-5743 x726</DataGridCell>
      </DataGridRow>
    </DataGridBody>
    <DataGridFoot>
      <DataGridRow>
        <DataGridCell>Devyn</DataGridCell>
        <DataGridCell>Weimann</DataGridCell>
        <DataGridCell>Congo</DataGridCell>
        <DataGridCell>Matilde86@gmail.com</DataGridCell>
        <DataGridCell>652-441-1766 x377</DataGridCell>
      </DataGridRow>
    </DataGridFoot>
  </DataGrid>
);
`)),(0,i.yg)("h2",null,"Props"),(0,i.yg)(D,{componentApi:e.componentApi,mdxType:"PropsTable"}))}p.isMDXComponent=!0}},a=>{a.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>a(a.s=53851)),_N_E=a.O()}]);