(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9282],{15780:(e,i,t)=>{"use strict";t.d(i,{A:()=>g});var a=t(72387),s=t(95669),r=t.n(s),n=t(81278);t(55729);var o=t(10511),l=t(43084),c=t(63437),d=t(38992);let p={h1:()=>null},g=({children:e,meta:i,navigationData:t})=>{let s=i.title?`${i.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,g=i.description||d.DZ.DESCRIPTION,m=(0,n.useRouter)();return(0,a.FD)(c.T,{navigationData:t,children:[(0,a.FD)(r(),{children:[(0,a.Y)("title",{children:s}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${m.pathname}`}),(0,a.Y)("meta",{name:"description",content:g},"description")]}),(0,a.Y)(o.s,{children:(0,a.Y)(l.Q,{componentOverrides:i.package?p:{},children:e})})]})}},15936:(e,i,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/page-templates/object-details",function(){return t(18772)}])},16947:(e,i,t)=>{"use strict";t.d(i,{DK:()=>n,K_:()=>l,mg:()=>o});var a=t(72387),s=t(76127),r=t(17938);t(55729);let n=({children:e})=>(0,a.Y)(s.az,{display:"flex",flexDirection:"row",columnGap:"space130",justifyContent:"center",marginBottom:"space70",children:e}),o=({children:e})=>(0,a.Y)(s.az,{maxWidth:"size40",children:(0,a.Y)(r.Z,{padding:"space0",children:(0,a.FD)(s.az,{paddingX:"space70",paddingBottom:"space40",paddingTop:"space60",children:[(0,a.Y)("strong",{children:"Required"}),e]})})}),l=({children:e})=>(0,a.Y)(s.az,{maxWidth:"size40",children:(0,a.Y)(r.Z,{padding:"space0",children:(0,a.FD)(s.az,{paddingX:"space70",paddingBottom:"space40",paddingTop:"space60",children:[(0,a.Y)("strong",{children:"Related"}),e]})})})},17938:(e,i,t)=>{"use strict";t.d(i,{Z:()=>r});var a=t(76127),s=t(55729),r=s.forwardRef(({children:e,element:i="CARD",padding:t="space100",paddingBottom:r,paddingLeft:n,paddingRight:o,paddingTop:l,fillHeight:c,fillWidth:d,...p},g)=>s.createElement(a.az,{...(0,a.x8)(p),ref:g,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:i,padding:t,paddingBottom:r,paddingLeft:n,paddingRight:o,paddingTop:l,backgroundColor:"colorBackgroundWeakest",height:c?"100%":void 0,width:d?"100%":void 0},e));r.displayName="Card"},18772:(e,i,t)=>{"use strict";t.r(i),t.d(i,{__N_SSG:()=>m,default:()=>v,getStaticProps:()=>h,mdxHeadings:()=>u,meta:()=>D}),t(55729);var a=t(11885),s=t(72387),r=t(4073),n=t(41960),o=t(16947);let l=()=>(0,s.FD)(o.DK,{children:[(0,s.Y)(o.mg,{children:(0,s.FD)(n.Xy,{children:[(0,s.FD)(n.ck,{children:[(0,s.Y)(r.Mz,{href:"/components/breadcrumb",children:"Breadcrumb"})," and"," ",(0,s.Y)(r.Mz,{href:"/components/heading",children:"Heading"})]}),(0,s.Y)(n.ck,{children:(0,s.Y)(r.Mz,{href:"/components/description-list",children:"Description List"})}),(0,s.FD)(n.ck,{children:[(0,s.Y)(r.Mz,{href:"/components/stack",children:"Stack"})," and ",(0,s.Y)(r.Mz,{href:"/components/grid",children:"Grid"})]})]})}),(0,s.Y)(o.K_,{children:(0,s.FD)(n.Xy,{children:[(0,s.Y)(n.ck,{children:(0,s.Y)(r.Mz,{href:"/components/anchor",children:"Anchor"})}),(0,s.FD)(n.ck,{children:[(0,s.Y)(r.Mz,{href:"/components/button",children:"Button"})," and"," ",(0,s.Y)(r.Mz,{href:"components/button-group",children:"Button Group"})]}),(0,s.FD)(n.ck,{children:[(0,s.Y)(r.Mz,{href:"/components/in-page-navigation",children:"In Page Navigation"})," and"," ",(0,s.Y)(r.Mz,{href:"/components/tabs",children:"Tabs"})]}),(0,s.Y)(n.ck,{children:(0,s.Y)(r.Mz,{href:"/components/icon",children:"Icon: Information"})})]})})]}),c=`
<Box paddingX="space100" paddingTop="space130" paddingBottom="space160">
  <PageHeader size="default">
    <PageHeaderSetting>
      <Breadcrumb aria-label={useUID()}>
        <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </PageHeaderSetting>
    <PageHeaderDetails>
      <PageHeaderHeading>Object details</PageHeaderHeading>
      <PageHeaderActions>
        <Button variant="secondary">Label</Button>
      </PageHeaderActions>
    </PageHeaderDetails>
    <PageHeaderInPageNavigation>
      <InPageNavigation aria-label={useUID()}>
        <InPageNavigationItem href="#" currentPage>
          Nav item
        </InPageNavigationItem>
        <InPageNavigationItem href="#">Nav item</InPageNavigationItem>
        <InPageNavigationItem href="#">Nav item</InPageNavigationItem>
      </InPageNavigation>
    </PageHeaderInPageNavigation>
  </PageHeader>
  <Box display="flex" flexDirection="column">
    <Box display="flex" flexDirection="column" rowGap="space100">
      <Box>
        <Heading as="h2" variant="heading20">
          Heading
        </Heading>
        <Box display="flex" columnGap="space70" width="size80">
          <Box width="size40">
            <DescriptionList>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
            </DescriptionList>
          </Box>
          <Box width="size40">
            <DescriptionList>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>Details</DescriptionListDetails>
              </DescriptionListSet>
            </DescriptionList>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box display="flex" width="100%" justifyContent="space-between" alignItems="flex-start">
          <Heading as="h2" variant="heading20">
            Heading
          </Heading>
          <Button variant="secondary">Label</Button>
        </Box>
        <Box maxWidth="size80">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
            faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
          </Paragraph>
        </Box>
        <Table>
          <THead>
            <Tr>
              <Th>Header</Th>
              <Th>Header</Th>
              <Th>Header</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>Content</Td>
              <Td>Content</Td>
              <Td>Content</Td>
            </Tr>
            <Tr>
              <Td>Content</Td>
              <Td>Content</Td>
              <Td>Content</Td>
            </Tr>
            <Tr>
              <Td>Content</Td>
              <Td>Content</Td>
              <Td>Content</Td>
            </Tr>
          </TBody>
        </Table>
      </Box>
    </Box>
  </Box>
</Box>`.trim(),d=`
<Box paddingX="space100" paddingTop="space130" paddingBottom="space160">
  <PageHeader size="default">
    <PageHeaderSetting>
      <Breadcrumb aria-label={useUID()}>
        <BreadcrumbItem href="#">Voice</BreadcrumbItem>
        <BreadcrumbItem href="#">Calls</BreadcrumbItem>
      </Breadcrumb>
    </PageHeaderSetting>
    <PageHeaderDetails>
      <PageHeaderHeading>Call details</PageHeaderHeading>
      <PageHeaderActions>
        <Button variant="secondary">Give call quality feedback</Button>
      </PageHeaderActions>
    </PageHeaderDetails>
    <PageHeaderInPageNavigation>
      <InPageNavigation aria-label={useUID()}>
        <InPageNavigationItem href="#" currentPage>
          Overview
        </InPageNavigationItem>
        <InPageNavigationItem href="#">Insights summary</InPageNavigationItem>
      </InPageNavigation>
    </PageHeaderInPageNavigation>
  </PageHeader>
  <Box display="flex" flexDirection="column">
    <Box display="flex" flexDirection="column" rowGap="space130">
      <Box>
        <Heading as="h2" variant="heading20">
          Properties
        </Heading>
        <Box display="flex" columnGap="space70" width="size80">
          <Box width="size40">
            <DescriptionList>
              <DescriptionListSet>
                <DescriptionListTerm>Message SID</DescriptionListTerm>
                <DescriptionListDetails>MG48n1d86b68737525hfd84w91dah0w3088n</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Message service</DescriptionListTerm>
                <DescriptionListDetails>N/A</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Created at</DescriptionListTerm>
                <DescriptionListDetails>13:42:57 PDT 2020-09-29</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>From</DescriptionListTerm>
                <DescriptionListDetails>(606) 609-4293</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>To</DescriptionListTerm>
                <DescriptionListDetails>(323) 754-2093</DescriptionListDetails>
              </DescriptionListSet>
            </DescriptionList>
          </Box>
          <Box width="size40">
            <DescriptionList>
              <DescriptionListSet>
                <DescriptionListTerm>Direction</DescriptionListTerm>
                <DescriptionListDetails>Incoming</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>API endpoint</DescriptionListTerm>
                <DescriptionListDetails>N/A</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Message segments</DescriptionListTerm>
                <DescriptionListDetails>1</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>Encoding</DescriptionListTerm>
                <DescriptionListDetails>N/A</DescriptionListDetails>
              </DescriptionListSet>
              <DescriptionListSet>
                <DescriptionListTerm>
                  <Box display="flex" height="space60" columnGap="space20">
                    Term
                    <Button variant="primary_icon" size="reset">
                      <InformationIcon decorative={false} title="what are terms?" />
                    </Button>
                  </Box>
                </DescriptionListTerm>
                <DescriptionListDetails>$0.0075</DescriptionListDetails>
              </DescriptionListSet>
            </DescriptionList>
          </Box>
        </Box>
        <DescriptionList>
          <DescriptionListSet>
            <DescriptionListTerm>Term</DescriptionListTerm>
            <DescriptionListDetails>
              <Box
                backgroundColor="colorBackground"
                maxWidth="size80"
                padding="space50"
                borderRadius="borderRadius20"
              >
                <Text as="span" fontFamily="fontFamilyCode">
                  Want to know what a day in the life of a Robotics Engineer is like? Join UAT tomorrow at 4PM MST
                  to learn about our innovative degrees. Registration is free but space is limited. Sign up here:
                </Text>
              </Box>
            </DescriptionListDetails>
          </DescriptionListSet>
        </DescriptionList>
      </Box>
      <Box>
        <Heading as="h2" variant="heading20">
          Errors and warnings
        </Heading>
        <Table>
          <THead>
            <Tr>
              <Th>Code</Th>
              <Th>Type</Th>
              <Th>Description</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Box display="flex" columnGap="space30">
                  <WarningIcon decorative={false} title="warning" color="colorTextIconWarning" />
                  <Text as="span" fontWeight="fontWeightSemibold">
                    11200 HTTP retrieval failure
                  </Text>
                </Box>
              </Td>
              <Td>Warning</Td>
              <Td>Twilio’s servers were unable to fetch a non-error response from the designated URL.</Td>
            </Tr>
          </TBody>
        </Table>
      </Box>
    </Box>
  </Box>
</Box>`.trim();var p=t(38992),g=t(15780),m=!0;let D={title:"Object details",description:"The object details page template allows customers to view and take action on properties of a single object.",slug:"/page-templates/object-details/"},h=async()=>({props:{data:{...feature},navigationData}}),u=[{value:"About object details",depth:2},{value:"Accessibility",depth:2},{value:"Ingredients",depth:2},{value:"How to use this template",depth:2},{value:"Page header",depth:3},{value:"Body",depth:3},{value:"Starter kits",depth:2},{value:"CodeSandbox",depth:3},{value:"Figma",depth:3},{value:"Related discussions",depth:2}],T=e=>function(i){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",i)},L=T("NormalizedPatternHeader"),y=T("PageAside"),f=T("StoryPreview"),b={meta:D,getStaticProps:h,mdxHeadings:u},x=g.A;function v({components:e,...i}){return(0,a.yg)(x,{...b,...i,components:e,mdxType:"MDXLayout"},(0,a.yg)(L,{description:D.description,name:D.title,data:i.data,categoryRoute:p.t4.PAGE_TEMPLATES,mdxType:"NormalizedPatternHeader"}),(0,a.yg)("contentwrapper",null,(0,a.yg)(y,{data:u,mdxType:"PageAside"}),(0,a.yg)("content",null,(0,a.yg)(f,{title:"Object details page template",storyID:"website-pagetemplateexamples--full-object-details-example",code:c,mdxType:"StoryPreview"}),(0,a.yg)("h2",null,"About object details"),(0,a.yg)("p",null,"Object details give customers a primarily read-only view of the properties of an object, such as a message log or sent email."),(0,a.yg)("p",null,"If the customer is primarily editing information, use the ",(0,a.yg)("a",{parentName:"p",href:"/page-templates/settings"},"settings")," page template instead."),(0,a.yg)("h2",null,"Accessibility"),(0,a.yg)("p",null,"A well-structured ",(0,a.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/tutorials/page-structure/"},"document hierarchy")," helps provide efficient in-page navigation for keyboard users, assistive technologies, and mobile web users."),(0,a.yg)("p",null,"Proper hierarchy allows users to skip directly to content that is most relevant to them. This is especially important on an object details page where there may be many different types of information and customers are more likely to skim through."),(0,a.yg)("p",null,"To structure a page:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Use ",(0,a.yg)("a",{parentName:"li",href:"/components/heading"},"Headings")," to organize the page."),(0,a.yg)("li",{parentName:"ul"},`Use Headings in sequential order. For example, don’t place an H4 directly after an H2.`),(0,a.yg)("li",{parentName:"ul"},`Use sentence case for headers (“Message date” not “Message Date”).`),(0,a.yg)("li",{parentName:"ul"},"Use a ",(0,a.yg)("a",{parentName:"li",href:"/components/description-list"},"Description List")," to define relationships between a property and its label."),(0,a.yg)("li",{parentName:"ul"},"Use ",(0,a.yg)("a",{parentName:"li",href:"/components/table"},"Tables")," to organize data that are meant to be compared.")),(0,a.yg)("h2",null,"Ingredients"),(0,a.yg)(l,{mdxType:"ObjectDetailsIngredients"}),(0,a.yg)("h2",null,"How to use this template"),(0,a.yg)(f,{title:"Object details page template",storyID:"website-pagetemplateexamples--default-object-details-example",code:d,mdxType:"StoryPreview"}),(0,a.yg)("h3",null,"Page header"),(0,a.yg)("p",null,`At the top of the page, add a page heading using the format “`,"[Object name]",` details” for a generic object, or the name of the object if it’s unique or set by the customer. For example, “Call details” or “test audience.”`),(0,a.yg)("p",null,"The full header should be responsive to the width of the browser window. Heading and Paragraph should have a max width of ",(0,a.yg)("inlineCode",{parentName:"p"},"$size-80"),"."),(0,a.yg)("h3",null,"Body"),(0,a.yg)("p",null,`Object details should allow a customer to easily scan for the information they’re looking for. Show an overview of an object’s details with a `,(0,a.yg)("a",{parentName:"p",href:"/components/description-list"},"Description List"),". If there are more than 6 properties, divide the properties into 2 columns."),(0,a.yg)("p",null,"Below this, group more detailed properties into sections on the page or, if necessary, into ",(0,a.yg)("a",{parentName:"p",href:"/components/tabs"},"Tabs"),"."),(0,a.yg)("p",null,`Use customer research to inform how to order the content sections on a details page. Show customers the most relevant information first. Use sentence case for property labels (“End time” not “End Time”).`),(0,a.yg)("p",null,"The body should be full width and responsive to the size of the window, while Headings, Paragraphs, and Description Lists should have a max width of ",(0,a.yg)("inlineCode",{parentName:"p"},"$size-80"),"."),(0,a.yg)("h2",null,"Starter kits"),(0,a.yg)("h3",null,"CodeSandbox"),(0,a.yg)("p",null,"Coming soon"),(0,a.yg)("h3",null,"Figma"),(0,a.yg)("p",null,`Add the “`,(0,a.yg)("a",{parentName:"p",href:"https://www.figma.com/file/S4z0Kqjb9AYosnkRQldLte/Paste-Patterns-%26-Templates?type=design&node-id=1-4&mode=design&t=dC1B5k0lVIB0JIuX-0"},"Paste Patterns & Templates"),`” library to your file.`),(0,a.yg)("h2",null,"Related discussions"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/discussions/528"},"Label Value styling"))))))}v.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=15936)),_N_E=e.O()}]);