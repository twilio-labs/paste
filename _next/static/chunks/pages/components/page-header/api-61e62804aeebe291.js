(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3429],{16983:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/page-header/api",function(){return t(98040)}])},40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>m});var r=t(72387),n=t(76127),o=t(95669),i=t.n(o),g=t(81278);t(55729);var d=t(10511),s=t(43084),p=t(10732),l=t(62887),c=t(63437),P=t(38992);let u={h1:()=>null},m=({children:e,meta:a,navigationData:t,data:o,mdxHeadings:m,pageHeaderData:{categoryRoute:h,githubUrl:H,storybookUrl:v}})=>{let y=a.title?`${a.title} - ${P.DZ.TITLE}`:P.DZ.TITLE,N=a.description||P.DZ.DESCRIPTION,b=(0,g.useRouter)();return(0,r.FD)(c.T,{navigationData:t,children:[(0,r.FD)(i(),{children:[(0,r.Y)("title",{children:y}),(0,r.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${b.pathname}`}),(0,r.Y)("meta",{name:"description",content:N},"description")]}),(0,r.FD)(d.s,{children:[(0,r.Y)(l.c,{categoryRoute:h,githubUrl:H,storybookUrl:v,data:o}),(0,r.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,r.Y)(p.i,{data:m}),(0,r.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,r.Y)(s.Q,{componentOverrides:a.package?u:{},children:e})})]})]})]})}},98040:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>o,default:()=>c,getStaticProps:()=>g,mdxHeadings:()=>d,meta:()=>i}),t(55729);var r=t(11885),n=t(40615),o=!0;let i={title:"Page Header",package:"@twilio-paste/page-header",description:"Page Header is a layout component that wraps all top-level components on a page.",slug:"/components/page-header/api"},g=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...d,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/page-header",storybookUrl:"/?path=/story/components-page-header--default"}}}),d=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],s=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)},p={meta:i,getStaticProps:g,mdxHeadings:d},l=n.A;function c({components:e,...a}){return(0,r.yg)(l,{...p,...a,components:e,mdxType:"MDXLayout"},(0,r.yg)("h2",null,"Installation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/page-header - or - yarn add @twilio-paste/core
`)),(0,r.yg)("h2",null,"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  PageHeader,
  PageHeaderActions,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderInPageNavigation,
  PageHeaderKeyword,
  PageHeaderMeta,
  PageHeaderParagraph,
  PageHeaderPrefix,
  PageHeaderSetting,
  PageHeaderSeparator,
} from '@twilio-paste/core/page-header';

const MyPageHeader = () => {
  return (
    <PageHeader size="default">
      <PageHeaderSetting>
        <Breadcrumb>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </PageHeaderSetting>
      <PageHeaderDetails>
        <PageHeaderKeyword>Wizard title</PageHeaderKeyword>
        <PageHeaderPrefix>
          <Avatar size="sizeIcon90" name="Avatar Name" />
        </PageHeaderPrefix>
        <PageHeaderHeading>Page title</PageHeaderHeading>
        <PageHeaderActions>
          <ButtonGroup>
            <Button variant="secondary">Action</Button>
            <Button variant="secondary">Action</Button>
          </ButtonGroup>
        </PageHeaderActions>
        <PageHeaderMeta>
          <Badge variant="success" as="span">
            Badge
          </Badge>
          Meta
          <Anchor href="#">Meta</Anchor>
        </PageHeaderMeta>
        <PageHeaderParagraph>Paragraph text</PageHeaderParagraph>
      </PageHeaderDetails>
      <PageHeaderInPageNavigation>
        <InPageNavigation aria-label="get started">
          <InPageNavigationItem href="#" currentPage>
            Label
          </InPageNavigationItem>
          <InPageNavigationItem href="#">Label</InPageNavigationItem>
          <InPageNavigationItem href="#">Label</InPageNavigationItem>
        </InPageNavigation>
      </PageHeaderInPageNavigation>
    </PageHeader>
  );
};
`)),(0,r.yg)("h2",null,"Props"),(0,r.yg)(s,{componentApi:a.componentApi,mdxType:"PropsTable"}))}c.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=16983)),_N_E=e.O()}]);