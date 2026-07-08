(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4376],{40615:(e,i,a)=>{"use strict";a.d(i,{A:()=>p});var o=a(72387),t=a(76127),n=a(95669),r=a.n(n),s=a(81278);a(55729);var d=a(10511),c=a(43084),g=a(10732),l=a(62887),u=a(63437),v=a(38992);let b={h1:()=>null},p=({children:e,meta:i,navigationData:a,data:n,mdxHeadings:p,pageHeaderData:{categoryRoute:S,githubUrl:N,storybookUrl:m}})=>{let h=i.title?`${i.title} - ${v.DZ.TITLE}`:v.DZ.TITLE,I=i.description||v.DZ.DESCRIPTION,D=(0,s.useRouter)();return(0,o.FD)(u.T,{navigationData:a,children:[(0,o.FD)(r(),{children:[(0,o.Y)("title",{children:h}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${D.pathname}`}),(0,o.Y)("meta",{name:"description",content:I},"description")]}),(0,o.FD)(d.s,{children:[(0,o.Y)(l.c,{categoryRoute:S,githubUrl:N,storybookUrl:m,data:n}),(0,o.FD)(t.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(g.i,{data:p}),(0,o.Y)(t.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(c.Q,{componentOverrides:i.package?b:{},children:e})})]})]})]})}},49891:(e,i,a)=>{"use strict";a.r(i),a.d(i,{__N_SSG:()=>B,default:()=>_,getStaticProps:()=>x,mdxHeadings:()=>T,meta:()=>W}),a(55729);var o=a(11885),t=a(76127),n=a(95036),r=a(18523),s=a(8371),d=a(93877),c=a(65730),g=a(14863),l=a(57507),u=a(47461),v=a(20580),b=a(20941),p=a(97753),S=a(80515),N=a(38433),m=a(61218),h=a(68885),I=a(95010),D=a(31079),y=a(13114),C=a(50163),P=a(51582),H=a(99560),f=a(40615);let k=`
const SidebarNavigationExample = () => {
  const menu = useMenuState();
  const menuLookup = useMenuState();
  return (
    <Box backgroundColor="colorBackgroundInverse">
      <SidebarBody>
        <SidebarNavigation aria-label="Main navigation" hierarchical hideItemsOnCollapse>
          <SidebarNavigationDisclosure>
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading icon={<ProductMessagingIcon decorative />} selected>
                Messaging
              </SidebarNavigationDisclosureHeading>
              <MenuButton {...menu} variant="inverse_link" size="icon_small">
                <MoreIcon decorative={false} title="More" />
              </MenuButton>
              <Menu {...menu} aria-label="Preferences">
                <MenuItem {...menu} onClick={()=>{}}>
                  Unpin from sidebar
                </MenuItem>
                <MenuItem {...menu} href="http://www.google.com">
                  Go to docs
                </MenuItem>
              </Menu>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
          <SidebarNavigationDisclosure>
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading icon={<ProductLookupIcon decorative />}>
                Lookup
              </SidebarNavigationDisclosureHeading>
              <SidebarBetaBadge as="button" onClick={()=>{}}>Beta</SidebarBetaBadge>
              <MenuButton {...menuLookup} variant="inverse_link" size="icon_small">
                <MoreIcon decorative={false} title="More" />
              </MenuButton>
              <Menu {...menuLookup} aria-label="Preferences">
                <MenuItem {...menuLookup} onClick={()=>{}}>
                  Unpin from sidebar
                </MenuItem>
                <MenuItem {...menuLookup} href="http://www.google.com">
                  Go to docs
                </MenuItem>
              </Menu>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationItem href="https://google.com">Lookup a phone number</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
        </SidebarNavigation>
      </SidebarBody>
    </Box>
  )
}
render(
  <SidebarNavigationExample/>
)
`.trim(),w=`
const SidebarNavigationStateHookExample  = () => {
  const messagingDisclosure = useSidebarNavigationDisclosureState();
  const lookupDisclosure = useSidebarNavigationDisclosureState();
  return (
    <>
    <Box display="flex" columnGap="space20" alignItems="center" paddingBottom="space60">
      <Button variant="secondary" onClick={messagingDisclosure.toggle}>Toggle messaging</Button>
      <Button variant="secondary" onClick={lookupDisclosure.toggle}>Toggle lookup</Button>
    </Box>
    <Box backgroundColor="colorBackgroundInverse">
      <SidebarBody>
        <SidebarNavigation aria-label="Main navigation" hierarchical hideItemsOnCollapse>
          <SidebarNavigationDisclosure state={messagingDisclosure}>
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading icon={<ProductMessagingIcon decorative />} selected>
                Messaging
              </SidebarNavigationDisclosureHeading>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
          <SidebarNavigationDisclosure state={lookupDisclosure}>
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading icon={<ProductLookupIcon decorative />}>
                Lookup
              </SidebarNavigationDisclosureHeading>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationItem href="https://google.com">Lookup a phone number</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
        </SidebarNavigation>
      </SidebarBody>
    </Box>
    </>
  )
}
render(
  <SidebarNavigationStateHookExample/>
)
`.trim();var B=!0;let W={title:"Sidebar Navigation",package:"@twilio-paste/sidebar",description:"Sidebar Navigation controls both flat and hierarchical navigation structures within an application's sidebar.",slug:"/components/sidebar-navigation/"},x=async()=>({props:{data:{...packageJson,...feature,nameOverride:"Sidebar Navigation",descriptionOverride:"Sidebar Navigation controls both flat and hierarchical navigation structures within an application's sidebar."},navigationData,mdxHeadings:T,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/sidebar",storybookUrl:"/?path=/story/components-sidebar-navigation--default"}}}),T=[{value:"Guidelines",depth:2},{value:"About Sidebar Navigation",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Flat",depth:3},{value:"Hierarchical",depth:3},{value:"Mixed",depth:3},{value:"Composition notes",depth:2},{value:"Handling a collapsing Sidebar",depth:3},{value:"Navigation item actions",depth:3},{value:"State hooks",depth:3}],L=e=>function(i){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",i)},M=L("LivePreview"),E=L("StoryPreview"),A={meta:W,getStaticProps:x,mdxHeadings:T},O=f.A;function _({components:e,...i}){return(0,o.yg)(O,{...A,...i,components:e,mdxType:"MDXLayout"},(0,o.yg)(M,{scope:{Box:t.az,SidebarBody:H.P_,SidebarNavigation:H.jZ,SidebarNavigationItem:H.eZ,SidebarNavigationDisclosure:H.as,SidebarNavigationDisclosureHeading:H.sA,SidebarNavigationDisclosureHeadingWrapper:H.fJ,SidebarNavigationDisclosureContent:H.bd,SidebarBetaBadge:H.Ar,ProductHomeIcon:r.ProductHomeIcon,ProductConnectionsIcon:s.ProductConnectionsIcon,ProductReverseETLIcon:d.ProductReverseETLIcon,ProductPrivacyIcon:c.ProductPrivacyIcon,ProductProtocolsIcon:g.ProductProtocolsIcon,ProductEngageIcon:l.ProductEngageIcon,ProductSettingsIcon:u.ProductSettingsIcon},language:"jsx",mdxType:"LivePreview"},`<Box backgroundColor="colorBackgroundInverse">
  <SidebarBody>
    <SidebarNavigation aria-label="main" hierarchical hideItemsOnCollapse>
      <SidebarNavigationItem href="https://google.com" icon={<ProductHomeIcon decorative />}>
        Home
      </SidebarNavigationItem>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductConnectionsIcon decorative />} selected>
            Connections
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com" selected>
            Overview
          </SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductReverseETLIcon decorative />}>
            Reverse ETL
          </SidebarNavigationDisclosureHeading>
          <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductPrivacyIcon decorative />}>
            Privacy
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductProtocolsIcon decorative />}>
            Protocols
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductEngageIcon decorative />}>
            Enagage
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductSettingsIcon decorative />}>
            Settings
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
    </SidebarNavigation>
  </SidebarBody>
</Box>`),(0,o.yg)("h2",null,"Guidelines"),(0,o.yg)("h3",null,"About Sidebar Navigation"),(0,o.yg)("p",null,"Sidebar Navigation controls both flat and hierarchical navigation structures within an application's sidebar. The navigation components are presentational and can be used to create navigation structures ranging from simple lists to complex, deeply nested structures."),(0,o.yg)("p",null,"We recommend limiting the nesting depth to 3 levels. For navigation beyond this depth, consider also using the ",(0,o.yg)("a",{parentName:"p",href:"/components/in-page-navigation"},"In-page Navigation"),"."),(0,o.yg)("h3",null,"Accessibility"),(0,o.yg)("p",null,"Nested sidebar navigation uses the ",(0,o.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/"},"ARIA Disclosure pattern"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You must provide an ",(0,o.yg)("inlineCode",{parentName:"li"},"aria-label")," prop for screen reader software. ",(0,o.yg)("inlineCode",{parentName:"li"},'aria-label="Main"'),' is read as "Main Navigation", with the word "navigation" being pulled from the navigation element.'),(0,o.yg)("li",{parentName:"ul"},"Additional controls or actions should be placed as siblings to each ",(0,o.yg)("inlineCode",{parentName:"li"},"SidebarNavigationItem")," in the navigation, not nested within."),(0,o.yg)("li",{parentName:"ul"},"Every ",(0,o.yg)("inlineCode",{parentName:"li"},"SidebarNavigationItem")," must implement an anchor element by assigning a valid URL to the ",(0,o.yg)("inlineCode",{parentName:"li"},"href")," attribute."),(0,o.yg)("li",{parentName:"ul"},"A ",(0,o.yg)("inlineCode",{parentName:"li"},"selected")," ",(0,o.yg)("inlineCode",{parentName:"li"},"SidebarNavigationItem"),' is designated as the "current page" via ',(0,o.yg)("inlineCode",{parentName:"li"},'aria-current="page"'),".")),(0,o.yg)("h2",null,"Examples"),(0,o.yg)("h3",null,"Flat"),(0,o.yg)("p",null,"In its most basic form, Sidebar Navigation can be used to create a flat list of navigation items. This is ideal for smaller applications or single-product use cases."),(0,o.yg)("p",null,"Each ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationItem")," should be provided with an ",(0,o.yg)("inlineCode",{parentName:"p"},"href"),", a valid URL that the user will navigate to upon interaction. This facilitates opening links in new tabs via CMD/CTRL + clicking or right-clicking on the item, ensuring proper keyboard navigation for keyboard-only users."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationItem")," can be decorated with an icon by setting the icon property value to any valid ",(0,o.yg)("a",{parentName:"p",href:"/components/icon"},"Paste Icon"),"."),(0,o.yg)("p",null,"To indicate the current page, the ",(0,o.yg)("inlineCode",{parentName:"p"},"selected")," property should be set on the item that represents the user's current location in the application."),(0,o.yg)(M,{scope:{Box:t.az,SidebarBody:H.P_,SidebarNavigation:H.jZ,SidebarNavigationItem:H.eZ,ProductHomeIcon:r.ProductHomeIcon,ProductContactCenterAdminIcon:v.ProductContactCenterAdminIcon,ProductContactCenterTasksIcon:b.ProductContactCenterTasksIcon,ProductContactCenterTeamsIcon:p.ProductContactCenterTeamsIcon,ProductContactCenterQueuesIcon:S.ProductContactCenterQueuesIcon,ProductPrivacyIcon:c.ProductPrivacyIcon,ProductUsageIcon:N.ProductUsageIcon},language:"jsx",mdxType:"LivePreview"},`<Box backgroundColor="colorBackgroundInverse">
  <SidebarBody>
    <SidebarNavigation aria-label="main">
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
</Box>`),(0,o.yg)("h3",null,"Hierarchical"),(0,o.yg)("p",null,'Sidebar Navigation also supports hierarchical information architectures with nested navigation items. You can establish "groups" of navigation sections by using ',(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationSeparator")," between groups of items."),(0,o.yg)("p",null,"Each ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationDisclosure")," pairs a heading with its content. ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationDisclosureHeading")," accepts a string as content, which describes the navigation items beneath it in the hierarchy. It should not contain clickable actions. For additional actions associated with a parent navigation item, refer to the ",(0,o.yg)("a",{parentName:"p",href:"#navigation-item-actions"},"Navigation item actions")," section below."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"icon")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"selected")," properties from ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationItem")," can be used on the ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationDisclosureHeading")," to display an icon and indicate the user's current section. When implementing multiple levels of navigation, ensure each ",(0,o.yg)("inlineCode",{parentName:"p"},"selected"),' parent item is displayed down the navigation tree. For instance, in the example below, I can see that I am currently on the "Send a Whatsapp message" item, which is a child page of "Try it out" and "Messaging".'),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationItems")," are listed in the ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationDisclosureContent")," and are displayed when the disclosure is expanded using the ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationDisclosureHeading"),"."),(0,o.yg)("p",null,"When creating a hierarchical navigation structure, ensure the ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigation")," component's ",(0,o.yg)("inlineCode",{parentName:"p"},"hierarchical")," property is set, as it provides additional context for children placed within."),(0,o.yg)(M,{scope:{Box:t.az,SidebarBody:H.P_,SidebarNavigation:H.jZ,SidebarNavigationItem:H.eZ,SidebarNavigationDisclosure:H.as,SidebarNavigationDisclosureHeading:H.sA,SidebarNavigationDisclosureHeadingWrapper:H.fJ,SidebarNavigationDisclosureContent:H.bd,SidebarNavigationSeparator:H.kz,ProductMessagingIcon:m.ProductMessagingIcon,ProductVideoIcon:h.ProductVideoIcon,ProductLookupIcon:I.ProductLookupIcon,PlusIcon:D.PlusIcon},language:"jsx",mdxType:"LivePreview"},`<Box backgroundColor="colorBackgroundInverse">
  <SidebarBody>
    <SidebarNavigation aria-label="main" hierarchical hideItemsOnCollapse>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductMessagingIcon decorative />} selected>
            Messaging
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
          <SidebarNavigationDisclosure>
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading selected>Try it out</SidebarNavigationDisclosureHeading>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationItem href="https://google.com">Send an SMS</SidebarNavigationItem>
              <SidebarNavigationItem href="https://google.com" selected>
                Send a Whatsapp message
              </SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
          <SidebarNavigationItem href="https://google.com">Services</SidebarNavigationItem>
          <SidebarNavigationDisclosure>
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading>Senders</SidebarNavigationDisclosureHeading>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationItem href="https://google.com">Addons</SidebarNavigationItem>
              <SidebarNavigationItem href="https://google.com">Navigation Item</SidebarNavigationItem>
              <SidebarNavigationItem href="https://google.com">Navigation Item</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
          <SidebarNavigationDisclosure>
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading>Settings</SidebarNavigationDisclosureHeading>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationItem href="#">
                Addons
              </SidebarNavigationItem>
              <SidebarNavigationItem href="https://google.com">Navigation Item</SidebarNavigationItem>
              <SidebarNavigationItem href="https://google.com">Navigation Item</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductLookupIcon decorative />}>
            Lookup
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Lookup a phone number</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationSeparator />
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductVideoIcon decorative />}>
            Video
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
    </SidebarNavigation>
  </SidebarBody>
</Box>`),(0,o.yg)("h3",null,"Mixed"),(0,o.yg)("p",null,"There may be situations where a combination of simple flat structures and nested pages is necessary. The components provided by Sidebar Navigation allow for easy, flexible composition to suit your navigation needs. Pair ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationItems")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationDisclosures")," to create this form of navigation structure."),(0,o.yg)("p",null,"When mixing, you ",(0,o.yg)("strong",{parentName:"p"},"must")," ensure ",(0,o.yg)("inlineCode",{parentName:"p"},"hierarchical")," is set on ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigation")," to achieve correct indentation."),(0,o.yg)(M,{scope:{Box:t.az,SidebarBody:H.P_,SidebarNavigation:H.jZ,SidebarNavigationItem:H.eZ,SidebarNavigationDisclosure:H.as,SidebarNavigationDisclosureHeading:H.sA,SidebarNavigationDisclosureHeadingWrapper:H.fJ,SidebarNavigationDisclosureContent:H.bd,SidebarBetaBadge:H.Ar,ProductHomeIcon:r.ProductHomeIcon,ProductConnectionsIcon:s.ProductConnectionsIcon,ProductReverseETLIcon:d.ProductReverseETLIcon,ProductPrivacyIcon:c.ProductPrivacyIcon,ProductProtocolsIcon:g.ProductProtocolsIcon,ProductEngageIcon:l.ProductEngageIcon,ProductSettingsIcon:u.ProductSettingsIcon},language:"jsx",mdxType:"LivePreview"},`<Box backgroundColor="colorBackgroundInverse">
  <SidebarBody>
    <SidebarNavigation aria-label="main" hierarchical hideItemsOnCollapse>
      <SidebarNavigationItem href="https://google.com" icon={<ProductHomeIcon decorative />}>
        Home
      </SidebarNavigationItem>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductConnectionsIcon decorative />} selected>
            Connections
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com" selected>
            Overview
          </SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationItem href="https://google.com" icon={<ProductReverseETLIcon decorative />}>
        Reverse ETL <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
      </SidebarNavigationItem>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductPrivacyIcon decorative />}>
            Privacy
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
    </SidebarNavigation>
  </SidebarBody>
</Box>`),(0,o.yg)("h2",null,"Composition notes"),(0,o.yg)("h3",null,"Handling a collapsing Sidebar"),(0,o.yg)("p",null,"When using a flat navigation list and a ",(0,o.yg)("inlineCode",{parentName:"p"},"compact")," Sidebar variant, only the icons remain visible when the Sidebar collapses. In this situation, ensure the navigation item icons have a title and are not decorative to maintain accessible names for collapsed navigation items."),(0,o.yg)(E,{title:"Collapsing sidebar visible icons",storyID:"components-sidebar-navigation--flex-example",code:`<Sidebar
    sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
    topbarSkipLinkID={topbarSkipLinkID}
    mainContentSkipLinkID={mainContentSkipLinkID}
    collapsed={false}
    variant="compact"
  >
  <SidebarHeader>
    <SidebarHeaderIconButton as="a" href="#">
      <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex homepage" />
    </SidebarHeaderIconButton>
    <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
  </SidebarHeader>
  <SidebarBody>
    <SidebarNavigation aria-label="main navigation">
      <SidebarNavigationItem
        href=""
        selected
        icon={<ProductContactCenterAdminIcon decorative={false} title="Admin" />}
      >
        Admin
      </SidebarNavigationItem>
      <SidebarNavigationItem
        href=""
        icon={<ProductContactCenterTasksIcon decorative={false} title="Agent dashboard" />}
      >
        Agent dashboard
      </SidebarNavigationItem>
      <SidebarNavigationItem
        href=""
        icon={<ProductContactCenterTeamsIcon decorative={false} title="Teams view" />}
      >
        Teams view
      </SidebarNavigationItem>
      <SidebarNavigationItem
        href=""
        icon={<ProductContactCenterQueuesIcon decorative={false} title="Queue stats" />}
      >
        Queue stats
      </SidebarNavigationItem>
      <SidebarNavigationItem
        href=""
        icon={<ProductPrivacyIcon decorative={false} title="Privacy" />}
      >
        Privacy
      </SidebarNavigationItem>
      <SidebarNavigationItem
        href=""
        icon={<ProductUsageIcon decorative={false} title="Insights" />}
      >
        Insights
      </SidebarNavigationItem>
    </SidebarNavigation>
  </SidebarBody>
</Sidebar>`,mdxType:"StoryPreview"}),(0,o.yg)("p",null,"If you are using a collapsible, compact sidebar and decide to hide the navigation items completely when collapsed, remember to set ",(0,o.yg)("inlineCode",{parentName:"p"},"hideItemsOnCollapse")," on ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigation"),"."),(0,o.yg)("p",null,"Regardless of the situation, Sidebar Navigation Disclosures will always be hidden in a collapsed Sidebar."),(0,o.yg)(E,{title:"Collapsing sidebar hidden icons",storyID:"components-sidebar-navigation--segment-example",code:`
<Sidebar
  sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
  topbarSkipLinkID={topbarSkipLinkID}
  mainContentSkipLinkID={mainContentSkipLinkID}
  collapsed={pushSidebarCollapsed}
  variant="compact"
>
  <SidebarHeader>
    <SidebarHeaderIconButton as="a" href="#">
      <ProductSegmentIcon size="sizeIcon20" decorative={false} title="Go to Segment homepage" />
    </SidebarHeaderIconButton>
    <SidebarHeaderLabel>Twilio Segment</SidebarHeaderLabel>
  </SidebarHeader>
  <SidebarBody>
    <SidebarNavigation aria-label={id} hierarchical hideItemsOnCollapse>
      <SidebarNavigationItem href="https://google.com" icon={<ProductHomeIcon decorative />}>
        Home
      </SidebarNavigationItem>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductConnectionsIcon decorative />} selected>
            Connections
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com" selected>
            Overview
          </SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductReverseETLIcon decorative />}>
            Reverse ETL
          </SidebarNavigationDisclosureHeading>
          <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductPrivacyIcon decorative />}>
            Privacy
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductProtocolsIcon decorative />}>
            Protocols
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductEngageIcon decorative />}>
            Enagage
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
      <SidebarNavigationDisclosure>
        <SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureHeading icon={<ProductSettingsIcon decorative />}>
            Settings
          </SidebarNavigationDisclosureHeading>
        </SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureContent>
          <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
        </SidebarNavigationDisclosureContent>
      </SidebarNavigationDisclosure>
    </SidebarNavigation>
  </SidebarBody>
  <SidebarFooter>
    <SidebarCollapseButton
      onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
      i18nCollapseLabel="Close sidebar"
      i18nExpandLabel="Open sidebar"
    />
  </SidebarFooter>
</Sidebar>`,mdxType:"StoryPreview"}),(0,o.yg)("h3",null,"Navigation item actions"),(0,o.yg)("p",null,"There may be instances where a navigation item has some additional information or an action that a user can take, other than navigating to, or showing and hiding child pages. In such cases, these actions should be placed as siblings to the navigation items or disclosure headings. Nesting actionable UI elements can make them undiscoverable for assistive technology users."),(0,o.yg)("p",null,"Only parent ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationDisclosure")," items can have associated actions. These actions should be placed as siblings to the ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationDisclosureHeading"),", inside the ",(0,o.yg)("inlineCode",{parentName:"p"},"SidebarNavigationDisclosureHeadingWrapper"),". Alignment will be handled automatically."),(0,o.yg)(M,{scope:{Box:t.az,SidebarBody:H.P_,SidebarNavigation:H.jZ,SidebarNavigationItem:H.eZ,SidebarNavigationDisclosure:H.as,SidebarNavigationDisclosureHeading:H.sA,SidebarNavigationDisclosureHeadingWrapper:H.fJ,SidebarNavigationDisclosureContent:H.bd,SidebarBetaBadge:H.Ar,ProductMessagingIcon:m.ProductMessagingIcon,ProductVideoIcon:h.ProductVideoIcon,ProductLookupIcon:I.ProductLookupIcon,Menu:C.W1,MenuButton:C.IU,MenuItem:C.Dr,useMenuState:P.EH,MoreIcon:y.MoreIcon},language:"jsx",noInline:!0,mdxType:"LivePreview"},k),(0,o.yg)("h3",null,"State hooks"),(0,o.yg)("p",null,"State hooks allow you to integrate the disclosure state with your application state and functionality. This can be particularly useful if your application is controlled via a central state management library like Redux, or if actions within the application control how the navigation is displayed beyond the user's interaction with it."),(0,o.yg)("p",null,"In the simple example below, you can control the expanded state of each disclosure without the user interacting with it."),(0,o.yg)("p",null,"For more information on using the disclosure state hook, refer to the ",(0,o.yg)("a",{parentName:"p",href:"/components/disclosure#using-state-hooks"},"Disclosure component docs")," and ",(0,o.yg)("a",{parentName:"p",href:"/primitives/disclosure-primitive"},"Disclosure Primitive docs")),(0,o.yg)(M,{scope:{Box:t.az,Button:n.$n,SidebarBody:H.P_,SidebarNavigation:H.jZ,SidebarNavigationItem:H.eZ,SidebarNavigationDisclosure:H.as,SidebarNavigationDisclosureHeading:H.sA,SidebarNavigationDisclosureHeadingWrapper:H.fJ,SidebarNavigationDisclosureContent:H.bd,useSidebarNavigationDisclosureState:P.Ec,SidebarBetaBadge:H.Ar,ProductMessagingIcon:m.ProductMessagingIcon,ProductVideoIcon:h.ProductVideoIcon,ProductLookupIcon:I.ProductLookupIcon},language:"jsx",noInline:!0,mdxType:"LivePreview"},w))}_.isMDXComponent=!0},81916:(e,i,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/sidebar-navigation",function(){return a(49891)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,5576,636,6593,8792],()=>e(e.s=81916)),_N_E=e.O()}]);