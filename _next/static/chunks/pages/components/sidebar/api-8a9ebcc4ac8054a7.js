(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8476],{16085:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/sidebar/api",function(){return t(53033)}])},40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>h});var i=t(72387),n=t(76127),o=t(95669),r=t.n(o),d=t(81278);t(55729);var s=t(10511),l=t(43084),p=t(10732),c=t(62887),b=t(63437),u=t(38992);let S={h1:()=>null},h=({children:e,meta:a,navigationData:t,data:o,mdxHeadings:h,pageHeaderData:{categoryRoute:g,githubUrl:m,storybookUrl:k}})=>{let C=a.title?`${a.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,y=a.description||u.DZ.DESCRIPTION,D=(0,d.useRouter)();return(0,i.FD)(b.T,{navigationData:t,children:[(0,i.FD)(r(),{children:[(0,i.Y)("title",{children:C}),(0,i.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${D.pathname}`}),(0,i.Y)("meta",{name:"description",content:y},"description")]}),(0,i.FD)(s.s,{children:[(0,i.Y)(c.c,{categoryRoute:g,githubUrl:m,storybookUrl:k,data:o}),(0,i.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,i.Y)(p.i,{data:h}),(0,i.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,i.Y)(l.Q,{componentOverrides:a.package?S:{},children:e})})]})]})]})}},53033:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>o,default:()=>b,getStaticProps:()=>d,mdxHeadings:()=>s,meta:()=>r}),t(55729);var i=t(11885),n=t(40615),o=!0;let r={title:"Sidebar Container - API",package:"@twilio-paste/sidebar",description:"Sidebar contains navigation controls that rest on the left side of the screen.",slug:"/components/sidebar/api"},d=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...s,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/sidebar",storybookUrl:"/?path=/story/components-sidebar-sidebar-push--default"}}}),s=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],l=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",e)},p={meta:r,getStaticProps:d,mdxHeadings:s},c=n.A;function b({components:e,...a}){return(0,i.yg)(c,{...p,...a,components:e,mdxType:"MDXLayout"},(0,i.yg)("h2",null,"Installation"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/sidebar - or - yarn add @twilio-paste/core
`)),(0,i.yg)("h2",null,"Usage"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  Sidebar,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarHeaderIconButton,
  SidebarCollapseButton,
  SidebarBody,
  SidebarFooter,
  SidebarPushContentWrapper,
  SidebarOverlayContentWrapper,
} from '@twilio-paste/core/sidebar';

const SideModalExample: React.FC = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={pushSidebarCollapsed}
        variant="default"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="/">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
        </SidebarBody>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="default">
        <main id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </main>
      </SidebarPushContentWrapper>
    </Box>
  );
};
`)),(0,i.yg)("h2",null,"Props"),(0,i.yg)(l,{componentApi:a.componentApi,mdxType:"PropsTable"}))}b.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=16085)),_N_E=e.O()}]);