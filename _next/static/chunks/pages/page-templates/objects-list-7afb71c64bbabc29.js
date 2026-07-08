(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2883],{15780:(e,a,t)=>{"use strict";t.d(a,{A:()=>h});var r=t(72387),l=t(95669),i=t.n(l),o=t(81278);t(55729);var n=t(10511),d=t(43084),c=t(63437),s=t(38992);let p={h1:()=>null},h=({children:e,meta:a,navigationData:t})=>{let l=a.title?`${a.title} - ${s.DZ.TITLE}`:s.DZ.TITLE,h=a.description||s.DZ.DESCRIPTION,u=(0,o.useRouter)();return(0,r.FD)(c.T,{navigationData:t,children:[(0,r.FD)(i(),{children:[(0,r.Y)("title",{children:l}),(0,r.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${u.pathname}`}),(0,r.Y)("meta",{name:"description",content:h},"description")]}),(0,r.Y)(n.s,{children:(0,r.Y)(d.Q,{componentOverrides:a.package?p:{},children:e})})]})}},16947:(e,a,t)=>{"use strict";t.d(a,{DK:()=>o,K_:()=>d,mg:()=>n});var r=t(72387),l=t(76127),i=t(17938);t(55729);let o=({children:e})=>(0,r.Y)(l.az,{display:"flex",flexDirection:"row",columnGap:"space130",justifyContent:"center",marginBottom:"space70",children:e}),n=({children:e})=>(0,r.Y)(l.az,{maxWidth:"size40",children:(0,r.Y)(i.Z,{padding:"space0",children:(0,r.FD)(l.az,{paddingX:"space70",paddingBottom:"space40",paddingTop:"space60",children:[(0,r.Y)("strong",{children:"Required"}),e]})})}),d=({children:e})=>(0,r.Y)(l.az,{maxWidth:"size40",children:(0,r.Y)(i.Z,{padding:"space0",children:(0,r.FD)(l.az,{paddingX:"space70",paddingBottom:"space40",paddingTop:"space60",children:[(0,r.Y)("strong",{children:"Related"}),e]})})})},17938:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var r=t(76127),l=t(55729),i=l.forwardRef(({children:e,element:a="CARD",padding:t="space100",paddingBottom:i,paddingLeft:o,paddingRight:n,paddingTop:d,fillHeight:c,fillWidth:s,...p},h)=>l.createElement(r.az,{...(0,r.x8)(p),ref:h,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:a,padding:t,paddingBottom:i,paddingLeft:o,paddingRight:n,paddingTop:d,backgroundColor:"colorBackgroundWeakest",height:c?"100%":void 0,width:s?"100%":void 0},e));i.displayName="Card"},37394:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>u,default:()=>C,getStaticProps:()=>g,mdxHeadings:()=>D,meta:()=>m}),t(55729);var r=t(11885),l=t(72387),i=t(4073),o=t(41960),n=t(16947);let d=()=>(0,l.FD)(n.DK,{children:[(0,l.Y)(n.mg,{children:(0,l.FD)(o.Xy,{children:[(0,l.FD)(o.ck,{children:[(0,l.Y)(i.Mz,{href:"/components/breadcrumb",children:"Breadcrumb"})," and"," ",(0,l.Y)(i.Mz,{href:"/components/heading",children:"Heading"})]}),(0,l.Y)(o.ck,{children:(0,l.Y)(i.Mz,{href:"/components/data-grid",children:"Data Grid"})})]})}),(0,l.Y)(n.K_,{children:(0,l.FD)(o.Xy,{children:[(0,l.Y)(o.ck,{children:(0,l.Y)(i.Mz,{href:"/components/anchor",children:"Anchor"})}),(0,l.FD)(o.ck,{children:[(0,l.Y)(i.Mz,{href:"/components/button",children:"Button"})," and"," ",(0,l.Y)(i.Mz,{href:"components/button-group",children:"Button Group"})]}),(0,l.FD)(o.ck,{children:[(0,l.Y)(i.Mz,{href:"/components/in-page-navigation",children:"In Page Navigation"})," and"," ",(0,l.Y)(i.Mz,{href:"/components/tabs",children:"Tabs"})]}),(0,l.Y)(o.ck,{children:(0,l.Y)(i.Mz,{href:"/components/paragraph",children:"Paragraph"})}),(0,l.Y)(o.ck,{children:(0,l.Y)(i.Mz,{href:"/components/icon",children:"Icons: Export, Filter, More, Search"})}),(0,l.FD)(o.ck,{children:[(0,l.Y)(i.Mz,{href:"/patterns/filter-group",children:"Filter group pattern"}),(0,l.FD)(o.Xy,{children:[(0,l.FD)(o.ck,{children:[(0,l.Y)(i.Mz,{href:"/components/select",children:"Select"})," and"," ",(0,l.Y)(i.Mz,{href:"/components/combobox",children:"Combobox"})]}),(0,l.Y)(o.ck,{children:(0,l.Y)(i.Mz,{href:"/components/separator",children:"Separator"})}),(0,l.Y)(o.ck,{children:(0,l.Y)(i.Mz,{href:"/components/input",children:"Input"})})]})]}),(0,l.Y)(o.ck,{children:(0,l.Y)(i.Mz,{href:"/patterns/data-export",children:"Data export pattern"})})]})})]}),c=`
<Box paddingX="space100" paddingTop="space130" paddingBottom="space160">
  <PageHeader size="default">
    <PageHeaderSetting>
      <Breadcrumb aria-label={useUID()}>
        <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </PageHeaderSetting>
    <PageHeaderDetails>
      <PageHeaderHeading>Objects</PageHeaderHeading>
      <PageHeaderActions>
        <ButtonGroup>
          <Button variant="secondary">Label</Button>
          <Button variant="primary">Label</Button>
        </ButtonGroup>
      </PageHeaderActions>
      <PageHeaderParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
        faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
      </PageHeaderParagraph>
    </PageHeaderDetails>
  </PageHeader>
  <Box>
    <Box display="flex" flexDirection="column" rowGap="space50" marginBottom="space90">
      <Box display="flex" columnGap="space80" alignItems="flex-end">
        <Box minWidth="size30" maxWidth="size60" width="100%" display="flex" columnGap="space50">
          <Box width="100%">
            <Label htmlFor={criteria1}>Label</Label>
            <Select id={criteria1}>1</Select>
          </Box>
          <Box width="100%">
            <Label htmlFor={criteria2}>Label</Label>
            <Select id={criteria2}>2</Select>
          </Box>
          <Box width="100%">
            <Label htmlFor={criteria3}>Label</Label>
            <Select id={criteria3}>3</Select>
          </Box>
        </Box>

        <Box
          height="100%"
          display="flex"
          width="size20"
          justifyContent="flex-start"
          alignItems="flex-end"
          whiteSpace="nowrap"
        >
          <ButtonGroup>
            <Button variant="primary">
              <FilterIcon decorative />
              Apply
            </Button>
            <Button variant="secondary">Clear all</Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Separator orientation="horizontal" />
      <Box display="flex" columnGap="space80" maxWidth="size110">
        <Box maxWidth="size40">
          <Input
            type="text"
            insertBefore={<SearchIcon decorative color="colorTextPrimary" />}
            placeholder="Search"
            aria-label={useUID()}
          />
        </Box>
        <Separator orientation="vertical" />
        <Box>
          <ButtonGroup>
            <Button variant="secondary">
              <DownloadIcon decorative />
              Export
            </Button>
            <Button variant="secondary" size="icon">
              <MoreIcon decorative={false} title="menu" />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
    <DataGrid aria-label="label1">
      <DataGridHead>
        <DataGridRow>
          <DataGridHeader width="52px">
            <Checkbox>
              <ScreenReaderOnly>label</ScreenReaderOnly>
            </Checkbox>
          </DataGridHeader>
          <DataGridHeader>
            <Box display="flex" columnGap="space20">
              Header
              <UnsortedIcon decorative={false} title="sort column" />
            </Box>
          </DataGridHeader>
          <DataGridHeader>
            <Box display="flex" columnGap="space20">
              Header
              <UnsortedIcon decorative={false} title="sort column" />
            </Box>
          </DataGridHeader>
          <DataGridHeader>
            <Box display="flex" columnGap="space20">
              Header
              <UnsortedIcon decorative={false} title="sort column" />
            </Box>
          </DataGridHeader>
          <DataGridHeader>
            <Box display="flex" columnGap="space20" justifyContent="flex-end">
              Header
              <UnsortedIcon decorative={false} title="sort column" />
            </Box>
          </DataGridHeader>
        </DataGridRow>
      </DataGridHead>
      <DataGridBody>
        <DataGridRow>
          <DataGridCell>
            <Checkbox>
              <ScreenReaderOnly>label</ScreenReaderOnly>
            </Checkbox>
          </DataGridCell>
          <DataGridCell>
            <Anchor href="#">Anchor</Anchor>
          </DataGridCell>
          <DataGridCell>Content</DataGridCell>
          <DataGridCell>Content</DataGridCell>
          <DataGridCell textAlign="right">Content</DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>
            <Checkbox>
              <ScreenReaderOnly>label</ScreenReaderOnly>
            </Checkbox>
          </DataGridCell>
          <DataGridCell>
            <Anchor href="#">Anchor</Anchor>
          </DataGridCell>
          <DataGridCell>Content</DataGridCell>
          <DataGridCell>Content</DataGridCell>
          <DataGridCell textAlign="right">Content</DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>
            <Checkbox>
              <ScreenReaderOnly>label</ScreenReaderOnly>
            </Checkbox>
          </DataGridCell>
          <DataGridCell>
            <Anchor href="#">Anchor</Anchor>
          </DataGridCell>
          <DataGridCell>Content</DataGridCell>
          <DataGridCell>Content</DataGridCell>
          <DataGridCell textAlign="right">Content</DataGridCell>
        </DataGridRow>
      </DataGridBody>
    </DataGrid>
  </Box>
</Box>`.trim(),s=`
<Box paddingX="space100" paddingTop="space130" paddingBottom="space160">
  <PageHeader size="default">
    <PageHeaderSetting>
      <Breadcrumb aria-label={useUID()}>
        <BreadcrumbItem href="#">Phone numbers</BreadcrumbItem>
        <BreadcrumbItem href="#">Manage</BreadcrumbItem>
      </Breadcrumb>
    </PageHeaderSetting>
    <PageHeaderDetails>
      <PageHeaderHeading>Verified caller IDs</PageHeaderHeading>
      <PageHeaderActions>
        <Button variant="primary">Add caller ID</Button>
      </PageHeaderActions>
      <PageHeaderParagraph>
        Use numbers you own as caller ID or the &quot;To&quot; number for outbound calls and messages. Phone numbers
        you buy from Twilio or port to Twilio can always be used as caller IDs.
      </PageHeaderParagraph>
    </PageHeaderDetails>
  </PageHeader>
  <Box>
    <Box maxWidth="size70" marginBottom="space90" display="flex" columnGap="space80" alignItems="flex-end">
      <Box maxWidth="size90" display="flex" columnGap="space50">
        <Box width="100%">
          <Label htmlFor={input1}>Phone number</Label>
          <Input type="text" id={input1} />
        </Box>
        <Box width="100%">
          <Label htmlFor={input2}>Friendly name</Label>
          <Input type="text" id={input2} />
        </Box>
      </Box>
      <Box display="flex" width="size20" justifyContent="flex-start">
        <ButtonGroup>
          <Button variant="secondary">
            <FilterIcon decorative />
            Apply
          </Button>
          <Button variant="secondary">Clear</Button>
        </ButtonGroup>
      </Box>
    </Box>
    <DataGrid aria-label={useUID()}>
      <DataGridHead>
        <DataGridRow>
          <DataGridHeader width="52px">
            <Checkbox>
              <ScreenReaderOnly>label</ScreenReaderOnly>
            </Checkbox>
          </DataGridHeader>
          <DataGridHeader>
            <Box display="flex" columnGap="space20">
              Phone number
              <UnsortedIcon decorative={false} title="sort column" />
            </Box>
          </DataGridHeader>
          <DataGridHeader>
            <Box display="flex" columnGap="space20">
              Friendly name
              <UnsortedIcon decorative={false} title="sort column" />
            </Box>
          </DataGridHeader>
          <DataGridHeader>
            <Box display="flex" columnGap="space20">
              Actions
              <UnsortedIcon decorative={false} title="sort column" />
            </Box>
          </DataGridHeader>
        </DataGridRow>
      </DataGridHead>
      <DataGridBody>
        <DataGridRow>
          <DataGridCell>
            <Checkbox>
              <ScreenReaderOnly>label</ScreenReaderOnly>
            </Checkbox>
          </DataGridCell>
          <DataGridCell>+1 512 809 4343</DataGridCell>
          <DataGridCell>(512) 809-4343</DataGridCell>
          <DataGridCell>
            <Button variant="destructive_secondary" size="small">
              Delete
            </Button>
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>
            <Checkbox>
              <ScreenReaderOnly>label</ScreenReaderOnly>
            </Checkbox>
          </DataGridCell>
          <DataGridCell>+86 591 1093 1093</DataGridCell>
          <DataGridCell>+86 591 1093 1093</DataGridCell>
          <DataGridCell>
            <Button variant="destructive_secondary" size="small">
              Delete
            </Button>
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>
            <Checkbox>
              <ScreenReaderOnly>label</ScreenReaderOnly>
            </Checkbox>
          </DataGridCell>
          <DataGridCell>+1 213 343 1345</DataGridCell>
          <DataGridCell>(213) 343-1345</DataGridCell>
          <DataGridCell>
            <Button variant="destructive_secondary" size="small">
              Delete
            </Button>
          </DataGridCell>
        </DataGridRow>
      </DataGridBody>
    </DataGrid>
  </Box>
</Box>`.trim();var p=t(38992),h=t(15780),u=!0;let m={title:"Objects list",description:"The objects list page template shows a list of unique items for when a customer needs to perform an action on the items.",slug:"/page-templates/objects-list/"},g=async()=>({props:{data:{...feature},navigationData}}),D=[{value:"About objects list",depth:2},{value:"Ingredients",depth:2},{value:"How to use this template",depth:2},{value:"Page header",depth:3},{value:"Body",depth:3},{value:"Starter kits",depth:2},{value:"CodeSandbox",depth:3},{value:"Figma",depth:3}],y=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",a)},b=y("NormalizedPatternHeader"),x=y("PageAside"),G=y("StoryPreview"),f={meta:m,getStaticProps:g,mdxHeadings:D},B=h.A;function C({components:e,...a}){return(0,r.yg)(B,{...f,...a,components:e,mdxType:"MDXLayout"},(0,r.yg)(b,{description:m.description,name:m.title,data:a.data,categoryRoute:p.t4.PAGE_TEMPLATES,mdxType:"NormalizedPatternHeader"}),(0,r.yg)("contentwrapper",null,(0,r.yg)(x,{data:D,mdxType:"PageAside"}),(0,r.yg)("content",null,(0,r.yg)(G,{title:"Object list page template - full",storyID:"website-pagetemplateexamples--full-objects-list-example",code:c,mdxType:"StoryPreview"}),(0,r.yg)("h2",null,"About objects list"),(0,r.yg)("p",null,"An objects list shows a list of unique items or records (objects), such as logs or contacts. The page can include ",(0,r.yg)("a",{parentName:"p",href:"/patterns/filter"},"search and filtering"),` to help customers find an item they’re looking for, and bulk actions like `,(0,r.yg)("a",{parentName:"p",href:"/patterns/data-export"},"export")," or ",(0,r.yg)("a",{parentName:"p",href:"/patterns/delete"},"delete"),"."),(0,r.yg)("p",null,"Use an objects list when a customer needs to:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"View objects of a single type"),(0,r.yg)("li",{parentName:"ul"},"Find specific objects quickly so they can view more ",(0,r.yg)("a",{parentName:"li",href:"/page-templates/object-details"},"object details"),", edit, or delete them"),(0,r.yg)("li",{parentName:"ul"},"Create a new object of this type"),(0,r.yg)("li",{parentName:"ul"},"Perform bulk actions on multiple objects")),(0,r.yg)("p",null,"If the customer is primarily editing information, use the ",(0,r.yg)("a",{parentName:"p",href:"/page-templates/settings"},"settings")," page instead."),(0,r.yg)("h2",null,"Ingredients"),(0,r.yg)(d,{mdxType:"ObjectsListIngredients"}),(0,r.yg)("h2",null,"How to use this template"),(0,r.yg)(G,{title:"Object list page template - example",storyID:"website-pagetemplateexamples--default-objects-list-example",code:s,mdxType:"StoryPreview"}),(0,r.yg)("h3",null,"Page header"),(0,r.yg)("p",null,"At the top of the page, use the type of object as the page heading. Use the primary action in the header only for adding a new object. Optionally, use text under the heading to explain the primary use of the page."),(0,r.yg)("p",null,"The full header should be responsive to the width of the browser window. Heading and Paragraph should have a max width of ",(0,r.yg)("inlineCode",{parentName:"p"},"$size-70"),"."),(0,r.yg)("h3",null,"Body"),(0,r.yg)("p",null,"The rest of the page follows the ",(0,r.yg)("a",{parentName:"p",href:"/patterns/filter"},"filter pattern")," and uses a ",(0,r.yg)("a",{parentName:"p",href:"/components/data-grid"},"Data Grid"),". If there are no interactive cells, use a Table instead of a Data Grid."),(0,r.yg)("p",null,"If the customer needs to examine each object in more detail, link each object to its ",(0,r.yg)("a",{parentName:"p",href:"/page-templates/object-details"},"object details")," page."),(0,r.yg)("p",null,"The body should be responsive to the width of the browser window."),(0,r.yg)("h2",null,"Starter kits"),(0,r.yg)("h3",null,"CodeSandbox"),(0,r.yg)("p",null,"Coming soon"),(0,r.yg)("h3",null,"Figma"),(0,r.yg)("p",null,`Add the “`,(0,r.yg)("a",{parentName:"p",href:"https://www.figma.com/file/S4z0Kqjb9AYosnkRQldLte/Paste-Patterns-%26-Templates?type=design&node-id=5310-79458&mode=design"},"Paste Patterns & Templates"),`” library to your file.`))))}C.isMDXComponent=!0},58252:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/page-templates/objects-list",function(){return t(37394)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=58252)),_N_E=e.O()}]);