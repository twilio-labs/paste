(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6597],{40615:(e,a,i)=>{"use strict";i.d(a,{A:()=>S});var t=i(72387),o=i(76127),r=i(95669),n=i.n(r),d=i(81278);i(55729);var s=i(10511),l=i(43084),c=i(10732),p=i(62887),b=i(63437),g=i(38992);let v={h1:()=>null},S=({children:e,meta:a,navigationData:i,data:r,mdxHeadings:S,pageHeaderData:{categoryRoute:u,githubUrl:m,storybookUrl:h}})=>{let y=a.title?`${a.title} - ${g.DZ.TITLE}`:g.DZ.TITLE,N=a.description||g.DZ.DESCRIPTION,I=(0,d.useRouter)();return(0,t.FD)(b.T,{navigationData:i,children:[(0,t.FD)(n(),{children:[(0,t.Y)("title",{children:y}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${I.pathname}`}),(0,t.Y)("meta",{name:"description",content:N},"description")]}),(0,t.FD)(s.s,{children:[(0,t.Y)(p.c,{categoryRoute:u,githubUrl:m,storybookUrl:h,data:r}),(0,t.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(c.i,{data:S}),(0,t.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(l.Q,{componentOverrides:a.package?v:{},children:e})})]})]})]})}},58825:(e,a,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/sidebar-navigation/api",function(){return i(99310)}])},99310:(e,a,i)=>{"use strict";i.r(a),i.d(a,{__N_SSG:()=>r,default:()=>b,getStaticProps:()=>d,mdxHeadings:()=>s,meta:()=>n}),i(55729);var t=i(11885),o=i(40615),r=!0;let n={title:"Sidebar Navigation - API",package:"@twilio-paste/sidebar",description:"Sidebar Navigation controls both flat and hierarchical navigation structures within an application's sidebar.",slug:"/components/sidebar-navigation/api"},d=async()=>({props:{data:{...packageJson,...feature,nameOverride:"Sidebar Navigation",descriptionOverride:"Sidebar Navigation controls both flat and hierarchical navigation structures within an application's sidebar."},componentApi,mdxHeadings:[...s,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/sidebar",storybookUrl:"/?path=/story/components-sidebar-navigation--default"}}}),s=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],l=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)},c={meta:n,getStaticProps:d,mdxHeadings:s},p=o.A;function b({components:e,...a}){return(0,t.yg)(p,{...c,...a,components:e,mdxType:"MDXLayout"},(0,t.yg)("h2",null,"Installation"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/sidebar - or - yarn add @twilio-paste/core
`)),(0,t.yg)("h2",null,"Usage"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  Sidebar,
  SidebarOverlayContentWrapper,
  SidebarBody,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarHeaderIconButton,
  SidebarFooter,
  SidebarCollapseButton,
  SidebarNavigation,
  SidebarNavigationItem,
  SidebarNavigationDisclosure,
  SidebarNavigationDisclosureHeading,
  SidebarNavigationDisclosureHeadingWrapper,
  SidebarNavigationDisclosureContent,
} from '@twilio-paste/core/sidebar';

const SideModalExample: React.FC = () => {
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(true);
  return (
    <Box>
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={overlaySidebarExpanded}
        variant="compact"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarNavigation aria-label="Main navigation">
            <SidebarNavigationItem
              href="https://google.com"
              selected
              icon={<ProductContactCenterAdminIcon decorative={false} title="Admin" />}
            >
              Admin
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductContactCenterTasksIcon decorative={false} title="Agent dashboard" />}
            >
              Agent dashboard
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductContactCenterTeamsIcon decorative={false} title="Teams view" />}
            >
              Teams view
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductContactCenterQueuesIcon decorative={false} title="Queue stats" />}
            >
              Queue stats
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductPrivacyIcon decorative={false} title="Privacy" />}
            >
              Privacy
            </SidebarNavigationItem>
            <SidebarNavigationItem
              href="https://google.com"
              icon={<ProductUsageIcon decorative={false} title="Insights" />}
            >
              Insights
            </SidebarNavigationItem>
          </SidebarNavigation>
        </SidebarBody>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>

      <SidebarOverlayContentWrapper collapsed={overlaySidebarExpanded} variant="compact">
        <Box padding="space70" id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
            Toggle Overlay Sidebar
          </Button>
        </Box>
      </SidebarOverlayContentWrapper>
    </Box>
  );
};
`)),(0,t.yg)("h2",null,"Props"),(0,t.yg)(l,{componentApi:a.componentApi,mdxType:"PropsTable"}))}b.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=58825)),_N_E=e.O()}]);