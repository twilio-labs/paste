(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1777],{10185:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>A,default:()=>C,getStaticProps:()=>D,mdxHeadings:()=>k,meta:()=>S}),t(55729);var n=t(11885),o=t(4073),r=t(11881),i=t(76127),l=t(95036),T=t(17938),d=t(84498),s=t(85152),h=t(629),c=t(44255),p=t(99786),g=t(83889),m=t(36146),u=t(57580),y=t(127),b=t(51895),x=t(54652),w=t(89564),f=t(67663),v=t(40615),A=!0;let S={title:"Table",package:"@twilio-paste/table",description:"A Table is a collection of information displayed across columns and rows.",slug:"/components/table/"},D=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:k,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/table",storybookUrl:"/?path=/story/components-table--default-table"}}}),k=[{value:"Guidelines",depth:2},{value:"About Table",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Layouts",depth:3},{value:"Default",depth:4},{value:"Fixed column width",depth:4},{value:"Specified column widths",depth:4},{value:"Responsive Layouts",depth:4},{value:"Density",depth:4},{value:"Alignment",depth:3},{value:"Column alignment",depth:4},{value:"Row alignment",depth:4},{value:"Borderless",depth:3},{value:"Row headers",depth:3},{value:"Table with footer",depth:3},{value:"Table with sticky header",depth:3},{value:"Composition Notes",depth:2},{value:"Formatting",depth:3},{value:"Columns",depth:4},{value:"Text alignment in cells",depth:4},{value:"Zebra striping",depth:4},{value:"Table with description text",depth:4},{value:"Table with avatars",depth:4},{value:"Table with status indicators",depth:4},{value:"Table with tooltips on headers",depth:4},{value:"Table with truncated cells",depth:4},{value:"Displaying missing data",depth:3},{value:"Errors",depth:3},{value:"When to use Table",depth:2}],F=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},N={meta:S,getStaticProps:D,mdxHeadings:k},B=v.A;function C({components:e,...a}){return(0,n.yg)(B,{...N,...a,components:e,mdxType:"MDXLayout"},(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,Tr:s.Tr,Th:s.Th,Td:s.Td,Text:h.EY},language:"jsx",mdxType:"LivePreview"},`<Table>
  <THead>
    <Tr>
      <Th>Date</Th>
      <Th>SID</Th>
      <Th>From</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Td>
        <Text as="p">16:24:28 PDT</Text>
        <Text as="p">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
    <Tr>
      <Td>
        <Text as="p">16:24:28 PDT</Text>
        <Text as="p">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMl29llgoihx286uhxfb0yc5n0sg391x5n
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
    <Tr>
      <Td>
        <Text as="p">16:24:28 PDT</Text>
        <Text as="p">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMxarke3v30fv17hauqn86a7nhgm3b5d87
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About Table"),(0,n.yg)("p",null,`A Table is a grid of static textual and numeric data of the same content structure presented in rows and columns of cells.
For example, a Table would be a good way to represent a list of multiple support agents and their respective skills
and online/offline status.`),(0,n.yg)("h3",null,"Accessibility"),(0,n.yg)("p",null,`Tables are used to organize data with a logical relationship in grids. Accessible tables need HTML markup that indicates
header cells and data cells and defines their relationship. Assistive technologies use this information to provide
context to users.`),(0,n.yg)("p",null,"Accessibility requirements:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Tables must have a ",(0,n.yg)("inlineCode",{parentName:"li"},"THead"),", containing a Th for each column."),(0,n.yg)("li",{parentName:"ul"},"Tables must have a ",(0,n.yg)("inlineCode",{parentName:"li"},"TBody")," wrapping the table body of rows.")),(0,n.yg)("p",null,"Accessibility recommendations:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"It is a best practice to include row headers, which can be added by including a header (",(0,n.yg)("inlineCode",{parentName:"li"},"Th"),`) as the first cell in
each row (`,(0,n.yg)("inlineCode",{parentName:"li"},"Tr"),"), with ",(0,n.yg)("inlineCode",{parentName:"li"},'scope="row"'),`. This is not relevant for all tables, but you should follow this practice when
the first cell in a row is the key value for that row, such as a username. You can find an example of this in
the section on `,(0,n.yg)("a",{parentName:"li",href:"#row-headers"},"row headers"),"."),(0,n.yg)("li",{parentName:"ul"},`Any component can be placed in a Table, but tables should only contain static textual and numeric data, rather
than actionable components like buttons, whenever possible. This is because, if the table is reasonably long—say
50 rows—with multiple actions per row—say 4 actions—a keyboard-only user would have to press the tab key 200
times to get past that table. If you do need to include interactive elements (such as linking to object details,
selecting rows, or deleting rows), use `,(0,n.yg)(f.A,{href:"/components/data-grid",mdxType:"SiteLink"},"Data Grid")," instead.")),(0,n.yg)(x.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,n.yg)(x.v,{as:"h4",mdxType:"CalloutHeading"},"Accessibility insight: navigating tables with a screen reader"),(0,n.yg)(x.wz,{mdxType:"CalloutText"},"Learn more about why semantic table markup is important in ",(0,n.yg)(o.Mz,{href:"https://youtu.be/tlpQ0d2ADNo",showExternal:!0,mdxType:"Anchor"},"this demo video by Inclusive Components"),"that shows what it's like to explore a data table with a screen reader.")),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Layouts"),(0,n.yg)("h4",null,"Default"),(0,n.yg)("p",null,"The Default Table uses an automatic table layout algorithm dictated by the browser. The width of the table cells are adjusted to fit the content."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,Tr:s.Tr,Th:s.Th,Td:s.Td,Text:h.EY},language:"jsx",mdxType:"LivePreview"},`<Table>
  <THead>
    <Tr>
      <Th>Date</Th>
      <Th>SID</Th>
      <Th>From</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Td>
        <Text as="p">16:24:28 PDT</Text>
        <Text as="p">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
    <Tr>
      <Td>
        <Text as="p">16:24:28 PDT</Text>
        <Text as="p">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMl29llgoihx286uhxfb0yc5n0sg391x5n
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
    <Tr>
      <Td>
        <Text as="p">16:24:28 PDT</Text>
        <Text as="p">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMxarke3v30fv17hauqn86a7nhgm3b5d87
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h4",null,"Fixed column width"),(0,n.yg)("p",null,"The Fixed Table variant sets equal column widths for the table."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,TFoot:s.xx,Tr:s.Tr,Th:s.Th,Td:s.Td,Text:h.EY},language:"jsx",mdxType:"LivePreview"},`<Table tableLayout="fixed">
  <THead>
    <Tr>
      <Th>Agents</Th>
      <Th>Skills</Th>
      <Th textAlign="right">Tasks</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Th scope="row">Adam Brown</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">35</Td>
    </Tr>
    <Tr>
      <Th scope="row">Adriana Lovelock</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">28</Td>
    </Tr>
    <Tr>
      <Th scope="row">Amanda Cutlack</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">7</Td>
    </Tr>
  </TBody>
  <TFoot>
    <Tr>
      <Td/>
      <Td/>
      <Td textAlign="right">70</Td>
    </Tr>
  </TFoot>
</Table>`),(0,n.yg)("h4",null,"Specified column widths"),(0,n.yg)("p",null,"THead cells (",(0,n.yg)("inlineCode",{parentName:"p"},"Th"),") can be given a width in order to fill a section of the Table row (",(0,n.yg)("inlineCode",{parentName:"p"},"Tr"),"). Widths can be set with Paste Size Tokens or a number value, e.g. 120px."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,Tr:s.Tr,Th:s.Th,Td:s.Td},language:"jsx",mdxType:"LivePreview"},`<Table>
  <THead>
    <Tr>
      <Th width="size20">First name</Th>
      <Th>Last name</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Td>Tamir</Td>
      <Td>Rice</Td>
    </Tr>
    <Tr>
      <Td>Philando</Td>
      <Td>Castile</Td>
    </Tr>
    <Tr>
      <Td>Trayvon</Td>
      <Td>Martin</Td>
    </Tr>
    <Tr>
      <Td>Breonna</Td>
      <Td>Taylor</Td>
    </Tr>
    <Tr>
      <Td>Shantel</Td>
      <Td>Davis</Td>
    </Tr>
    <Tr>
      <Td>Walter</Td>
      <Td>Scott</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h4",null,"Responsive Layouts"),(0,n.yg)("p",null,"Tabular data on small screens can be problematic. The data can often cause tables to overflow the browser window. If you need to support small screens, you can set ",(0,n.yg)("inlineCode",{parentName:"p"},"scrollHorizontally")," and the table will scroll horizontally when the data can no longer fit on the screen."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,TFoot:s.xx,Tr:s.Tr,Th:s.Th,Td:s.Td,Anchor:o.Mz,Text:h.EY,Truncate:p.P},language:"jsx",mdxType:"LivePreview"},`<Table scrollHorizontally>
  <THead>
    <Tr>
      <Th>Date</Th>
      <Th>SID</Th>
      <Th>From</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Td>
        16:24:28 PDT 2020-09-17
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
    <Tr>
      <Td>
        16:24:28 PDT 2020-09-17
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMl29llgoihx286uhxfb0yc5n0sg391x5n
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
    <Tr>
      <Td>
        16:24:28 PDT 2020-09-17
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMxarke3v30fv17hauqn86a7nhgm3b5d87
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h4",null,"Density"),(0,n.yg)("p",null,"You can control a tables vertical density by either setting ",(0,n.yg)("inlineCode",{parentName:"p"},"noWrap")," on the table. This will ensure table cell content stays on a single line."),(0,n.yg)("p",null,"You can also optionally set the ",(0,n.yg)("inlineCode",{parentName:"p"},"whiteSpace")," prop on individual table cells, for more granular control."),(0,n.yg)("p",null,"Coupled with a fixed table layout and ",(0,n.yg)("a",{parentName:"p",href:"/components/table/#table-with-truncated-cells"},"truncation")," you can increase the data density of a table dramatically. You should be extremely mindful of readability trade-offs when doing so."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,TFoot:s.xx,Tr:s.Tr,Th:s.Th,Td:s.Td,Anchor:o.Mz,Text:h.EY,Truncate:p.P},language:"jsx",mdxType:"LivePreview"},`<Table scrollHorizontally noWrap>
  <THead>
    <Tr>
      <Th>Date</Th>
      <Th>SID</Th>
      <Th>From</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Td>
        16:24:28 PDT 2020-09-17
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
    <Tr>
      <Td whitespace="wrap">
        16:24:28 PDT 2020-09-17
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMl29llgoihx286uhxfb0yc5n0sg391x5n
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
    <Tr>
      <Td>
        16:24:28 PDT 2020-09-17
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMxarke3v30fv17hauqn86a7nhgm3b5d87
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h3",null,"Alignment"),(0,n.yg)("h4",null,"Column alignment"),(0,n.yg)("p",null,"You can adjust the text alignment within Table cells (",(0,n.yg)("inlineCode",{parentName:"p"},"Td")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"Th"),"). By default they are left-aligned."),(0,n.yg)("p",null,`In general, text should be left-aligned, numbers should be right-aligned, and the header should be aligned with the data.
Data should rarely ever be centered. Numbers only need to be right-aligned when they indicate size or are meant to be
compared to each other. Numbers like ID numbers, phone numbers, etc. should stay left-aligned.`),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,Tr:s.Tr,Th:s.Th,Td:s.Td},language:"jsx",mdxType:"LivePreview"},`<Table>
  <THead>
    <Tr>
      <Th>First name</Th>
      <Th textAlign="right">Last name</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Td>Tamir</Td>
      <Td textAlign="right">Rice</Td>
    </Tr>
    <Tr>
      <Td>Philando</Td>
      <Td textAlign="right">Castile</Td>
    </Tr>
    <Tr>
      <Td>Trayvon</Td>
      <Td textAlign="right">Martin</Td>
    </Tr>
    <Tr>
      <Td>Breonna</Td>
      <Td textAlign="right">Taylor</Td>
    </Tr>
    <Tr>
      <Td>Shantel</Td>
      <Td textAlign="right">Davis</Td>
    </Tr>
    <Tr>
      <Td>Walter</Td>
      <Td textAlign="right">Scott</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h4",null,"Row alignment"),(0,n.yg)("p",null,"Table rows (",(0,n.yg)("inlineCode",{parentName:"p"},"Tr"),") can be set with either top, middle, or bottom vertical alignment. By default they are middle-aligned."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,Tr:s.Tr,Th:s.Th,Td:s.Td},language:"jsx",mdxType:"LivePreview"},`<Table>
  <THead>
    <Tr>
      <Th width="size20">Author</Th>
      <Th>Quote</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr verticalAlign="top">
      <Th scope="row">Chinua Achebe</Th>
      <Td>The impatient idealist says: ‘Give me a place to stand and I shall move the earth.' But such a place does not exist. We all have to stand on the earth itself and go with her at her pace.</Td>
    </Tr>
    <Tr verticalAlign="middle">
      <Th scope="row">James Baldwin</Th>
      <Td>Anyone who has ever struggled with poverty knows how extremely expensive it is to be poor.</Td>
    </Tr>
    <Tr verticalAlign="middle">
      <Th scope="row">Dorothy West</Th>
      <Td>To know how much there is to know is the beginning of learning to live.</Td>
    </Tr>
    <Tr verticalAlign="bottom">
      <Th scope="row">W.E.B. Du Bois</Th>
      <Td>Herein lies the tragedy of the age: not that men are poor—all men know something of poverty; not that men are wicked—who is good? Not that men are ignorant—what is truth? Nay, but that men know so little of men.</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h3",null,"Borderless"),(0,n.yg)("p",null,"Tables can support a ",(0,n.yg)("inlineCode",{parentName:"p"},"borderless"),` variant, which can be useful in cases where the Table is placed inside of another
containing element, such as a `,(0,n.yg)("a",{parentName:"p",href:"/components/modal/"},"modal")," or a ",(0,n.yg)("a",{parentName:"p",href:"/components/card/"},"card"),`. Tables have borders by default, but these can optionally be
turned off by setting `,(0,n.yg)("inlineCode",{parentName:"p"},'variant="borderless"')," on ",(0,n.yg)("inlineCode",{parentName:"p"},"Table"),"."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,TFoot:s.xx,Tr:s.Tr,Th:s.Th,Td:s.Td,Card:T.Z,Text:h.EY},language:"jsx",mdxType:"LivePreview"},`<Card>
  <Table variant="borderless">
    <THead>
      <Tr>
        <Th>Agents</Th>
        <Th>Skills</Th>
        <Th textAlign="right">Tasks</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Th scope="row">Adam Brown</Th>
        <Td>English, French, Sales, Spanish</Td>
        <Td textAlign="right">35</Td>
      </Tr>
      <Tr>
        <Th scope="row">Adriana Lovelock</Th>
        <Td>English, French, Sales, Spanish</Td>
        <Td textAlign="right">28</Td>
      </Tr>
      <Tr>
        <Th scope="row">Amanda Cutlack</Th>
        <Td>English, French, Sales, Spanish</Td>
        <Td textAlign="right">7</Td>
      </Tr>
    </TBody>
    <TFoot>
      <Tr>
        <Td/>
        <Td/>
        <Td textAlign="right">70</Td>
      </Tr>
    </TFoot>
  </Table>
</Card>`),(0,n.yg)("h3",null,"Row headers"),(0,n.yg)("p",null,"Tables support row headers in addition to the more commonly seen column headers. It is a ",(0,n.yg)("a",{parentName:"p",href:"#accessibility"},"best practice"),` to provide
row headers in cases where the first cell in a row is the key value for that row, such as a username or the
name of an email campaign.`),(0,n.yg)("p",null,"Row headers can be added by including a ",(0,n.yg)("inlineCode",{parentName:"p"},"Th")," as the first cell in each ",(0,n.yg)("inlineCode",{parentName:"p"},"Tr"),", with ",(0,n.yg)("inlineCode",{parentName:"p"},'scope="row"'),"."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,Tr:s.Tr,Th:s.Th,Td:s.Td},language:"jsx",mdxType:"LivePreview"},`<Table>
  <THead>
    <Tr>
      <Th>User</Th>
      <Th>Email address</Th>
      <Th>Last log-in time</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Th scope="row">tamir.rice</Th>
      <Td>tamir@rice.com</Td>
      <Td>12:24:00 PDT</Td>
    </Tr>
    <Tr>
      <Th scope="row">philando.castile</Th>
      <Td>philando@castile.com</Td>
      <Td>08:24:20 PDT</Td>
    </Tr>
    <Tr>
      <Th scope="row">trayvon.martin</Th>
      <Td>trayvon@martin.com</Td>
      <Td>16:05:10 PDT</Td>
    </Tr>
    <Tr>
      <Th scope="row">breonna.taylor</Th>
      <Td>breonna@taylor.com</Td>
      <Td>13:10:28 PDT</Td>
    </Tr>
    <Tr>
      <Th scope="row">shantel.davis</Th>
      <Td>shantel@davis.com</Td>
      <Td>01:04:54 PDT</Td>
    </Tr>
    <Tr>
      <Th scope="row">walter.scott</Th>
      <Td>walter@scott.com</Td>
      <Td>08:19:10 PDT</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h3",null,"Table with footer"),(0,n.yg)("p",null,"Tables support an optional ",(0,n.yg)("inlineCode",{parentName:"p"},"TFoot"),", which comes after the ",(0,n.yg)("inlineCode",{parentName:"p"},"TBody"),". The ",(0,n.yg)("inlineCode",{parentName:"p"},"TFoot")," must contain at least one ",(0,n.yg)("inlineCode",{parentName:"p"},"Tr"),`.
A good use case for a `,(0,n.yg)("inlineCode",{parentName:"p"},"TFoot")," is when you want to provide a summary or total for the rows of data in your table."),(0,n.yg)("p",null,"The placement of the ",(0,n.yg)("inlineCode",{parentName:"p"},"TFoot"),` is based on classic HTML table design, so it can not be placed anywhere except at
the bottom of a table. In cases where you do want to show a summary or total, and that information is of high
importance to the user, you can place it above the table or at the top of the table in a regular table row,
rather than using the `,(0,n.yg)("inlineCode",{parentName:"p"},"TFoot"),"."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,TFoot:s.xx,Tr:s.Tr,Th:s.Th,Td:s.Td,Text:h.EY},language:"jsx",mdxType:"LivePreview"},`<Table tableLayout="fixed">
  <THead>
    <Tr>
      <Th>Agents</Th>
      <Th>Skills</Th>
      <Th textAlign="right">Tasks</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Th scope="row">Adam Brown</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">35</Td>
    </Tr>
    <Tr>
      <Th scope="row">Adriana Lovelock</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">28</Td>
    </Tr>
    <Tr>
      <Th scope="row">Amanda Cutlack</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">7</Td>
    </Tr>
  </TBody>
  <TFoot>
    <Tr>
      <Th scope="row">Total tasks</Th>
      <Td/>
      <Td textAlign="right">70</Td>
    </Tr>
  </TFoot>
</Table>`),(0,n.yg)("h3",null,"Table with sticky header"),(0,n.yg)("p",null,`Tables support a "sticky header", which can be useful in tables with a large amount of data. A sticky header will allow
a user to keep the context of what each column contains as they scroll through the data contained in the table.`),(0,n.yg)("p",null,"Set the boolean property ",(0,n.yg)("inlineCode",{parentName:"p"},"stickyHeader")," on the ",(0,n.yg)("inlineCode",{parentName:"p"},"THead")," component, to enable the sticky header."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,TFoot:s.xx,Tr:s.Tr,Th:s.Th,Td:s.Td,Text:h.EY,Box:i.az},language:"jsx",mdxType:"LivePreview"},`<Box overflowY="auto" maxHeight="500px">
  <Table tableLayout="fixed">
    <THead stickyHeader top={0}>
      <Tr>
        <Th>Agents</Th>
        <Th>Skills</Th>
        <Th textAlign="right">Tasks</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Th scope="row">Adam Brown</Th>
        <Td>English, French, Sales, Spanish</Td>
        <Td textAlign="right">35</Td>
      </Tr>
      <Tr>
        <Th scope="row">Adriana Lovelock</Th>
        <Td>English, French, Sales, Spanish</Td>
        <Td textAlign="right">28</Td>
      </Tr>
      <Tr>
        <Th scope="row">Amanda Cutlack</Th>
        <Td>English, French, Sales, Spanish</Td>
        <Td textAlign="right">7</Td>
      </Tr>
      <Tr>
        <Th scope="row">Sofie Korneliya</Th>
        <Td>English, French, Sales, Spanish</Td>
        <Td textAlign="right">47</Td>
      </Tr>
      <Tr>
        <Th scope="row">Gerarda Che</Th>
        <Td>English, French, Sales, Spanish</Td>
        <Td textAlign="right">2</Td>
      </Tr>
      <Tr>
        <Th scope="row">Natalia Hiroshi</Th>
        <Td>English, French, Sales, Spanish</Td>
        <Td textAlign="right">9</Td>
      </Tr>
      <Tr>
        <Th scope="row">Ga\xebl Kambiz</Th>
        <Td>English, French, Sales, Spanish</Td>
        <Td textAlign="right">18</Td>
      </Tr>
      <Tr>
        <Th scope="row">Amelina Muriel</Th>
        <Td>English, French, Sales, Spanish</Td>
        <Td textAlign="right">29</Td>
      </Tr>
      <Tr>
        <Th scope="row">Luisa Hip\xf3lito</Th>
        <Td>English, French</Td>
        <Td textAlign="right">9</Td>
      </Tr>
      <Tr>
        <Th scope="row">Machteld Vašek</Th>
        <Td>English, Spanish</Td>
        <Td textAlign="right">18</Td>
      </Tr>
      <Tr>
        <Th scope="row">Cayetano Helmuth</Th>
        <Td>French</Td>
        <Td textAlign="right">29</Td>
      </Tr>
    </TBody>
    <TFoot>
      <Tr>
        <Th scope="row">Total tasks</Th>
        <Td/>
        <Td textAlign="right">70</Td>
      </Tr>
    </TFoot>
  </Table>
</Box>`),(0,n.yg)("h2",null,"Composition Notes"),(0,n.yg)("p",null,"Tables must be created using a combination of:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Table"),": The table wrapper"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"THead"),": The header of your table"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"TBody"),": The main body of your table"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"TFoot"),": The footer of your table (optional)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Tr"),": A row of cells in your table"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Th"),": A header cell which can be used as a column title and row title"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Td"),": A cell of table content")),(0,n.yg)("p",null,"Tables fill 100% width of the space of their containing element. Use Layout components, like ",(0,n.yg)("a",{parentName:"p",href:"/components/grid"},"Grid"),`, to control the size and
placement of Tables within a page.`),(0,n.yg)("h3",null,"Formatting"),(0,n.yg)("h4",null,"Columns"),(0,n.yg)("p",null,`In many cases, each table row has some kind of identifier, such as a username, SID, or friendly name. In cases
where the data in each row is associated with an overarching, named object, the name of that object should generally
be the first column in the table. In these cases, the cells in that first column should be `,(0,n.yg)("a",{parentName:"p",href:"#row-headers"},"Row Headers"),"."),(0,n.yg)("p",null,`To determine the order of the remaining columns, conduct usability testing to find out what column ordering works
best for your users and their particular needs. Generally, it is a good practice to put columns that are closely
related to one another (such as a unit price, quantity purchased, and total price) near each other in a table.`),(0,n.yg)("p",null,"If the data contained in a particular column has a measurement symbol, like a percentage, include the symbol in the column header rather than including it in each cell."),(0,n.yg)("p",null,"When data is represented using decimals, keep the number of decimal places consistent."),(0,n.yg)("h4",null,"Text alignment in cells"),(0,n.yg)("p",null,`In general, text should be left-aligned, numbers should be right-aligned, and the header should be aligned with
the data. Data should rarely ever be centered. Numbers only need to be right-aligned when they indicate size and/or
are meant to be compared to each other. Numbers like ID numbers, phone numbers, etc. should stay left-aligned.`),(0,n.yg)("h4",null,"Zebra striping"),(0,n.yg)("p",null,`Tables can have zebra stripes (i.e. alternating row highlighting), which can improve readability of particularly
large data sets. Tables have zebra stripes turned off by default, but these can optionally be turned on by
setting `,(0,n.yg)("inlineCode",{parentName:"p"},"striped")," on ",(0,n.yg)("inlineCode",{parentName:"p"},"Table"),"."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,TFoot:s.xx,Tr:s.Tr,Th:s.Th,Td:s.Td,Text:h.EY},language:"jsx",mdxType:"LivePreview"},`<Table striped>
  <THead>
    <Tr>
      <Th>Agents</Th>
      <Th>Skills</Th>
      <Th textAlign="right">Tasks</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Th scope="row">Adam Brown</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">35</Td>
    </Tr>
    <Tr>
      <Th scope="row">Adriana Lovelock</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">28</Td>
    </Tr>
    <Tr>
      <Th scope="row">Amanda Cutlack</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">7</Td>
    </Tr>
  </TBody>
  <TFoot>
    <Tr>
      <Th scope="row">Total tasks</Th>
      <Td/>
      <Td textAlign="right">70</Td>
    </Tr>
  </TFoot>
</Table>`),(0,n.yg)("h4",null,"Table with description text"),(0,n.yg)("p",null,`Each individual table cell can support multiple rows of text, which we'll refer to as "description text".
This is useful when you want to provide related details in a table without adding additional columns, such as
placing a user's email address beneath their username in a single cell under a column header titled "user".`),(0,n.yg)("p",null,`Description text is recommended in cases where the user would benefit from having additional context about a
particular cell, but that additional context is not the primary data that is being presented in the table.
For example, in a table that lists a user's email campaigns with open rates, click rates, etc. for each,
it may help the user identify a particular campaign by knowing both the campaign name and what time it was
sent, so the first column of this table may include the campaign name with the send time included as
description text. In this example, the send time is not being compared across rows like the open rates and
click rates are; instead, the send time is used to add additional detail that helps the user identify and
understand data in an individual row.`),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,Tr:s.Tr,Th:s.Th,Td:s.Td,Text:h.EY,DetailText:b.z},language:"jsx",mdxType:"LivePreview"},`<Table>
  <THead>
    <Tr>
      <Th>User</Th>
      <Th>Skills</Th>
      <Th textAlign="right">Tasks</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Th scope="row">
        <Text as="span">
          Adam Brown
        </Text>
        <DetailText marginTop='space0'>adam@brown.com</DetailText>
      </Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">35</Td>
    </Tr>
    <Tr>
      <Th scope="row">
        <Text as="span">
          Adriana Lovelock
        </Text>
        <DetailText marginTop='space0'>adriana@lovelock.com</DetailText>
      </Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">28</Td>
    </Tr>
    <Tr>
      <Th scope="row">
        <Text as="span">
          Amanda Cutlack
        </Text>
        <DetailText marginTop='space0'>amanda@cutlack.com</DetailText>
      </Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">7</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h4",null,"Table with avatars"),(0,n.yg)("p",null,`Tables can be composed using Avatar, which can be used to make a table of user data more scannable.
You can put an avatar next to a user's first and last name using `,(0,n.yg)("inlineCode",{parentName:"p"},"Stack")," inside a single ",(0,n.yg)("inlineCode",{parentName:"p"},"Td"),"."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,Tr:s.Tr,Th:s.Th,Td:s.Td,Text:h.EY,Avatar:r.e,Box:i.az,Stack:d.B},language:"jsx",mdxType:"LivePreview"},`<Table>
  <THead>
    <Tr>
      <Th>User</Th>
      <Th>Skills</Th>
      <Th textAlign="right">Tasks</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Th scope="row">
        <Stack orientation="horizontal" spacing="space40">
          <Avatar size="sizeIcon60" name="Adam Brown" src="/images/avatars/avatar1.png" />
          <Box>
            <Text as="p">
              Adam Brown
            </Text>
            <Text as="p" color="colorTextWeak" fontWeight="fontWeightNormal">adam@brown.com</Text>
          </Box>
        </Stack>
      </Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">35</Td>
    </Tr>
    <Tr>
      <Th scope="row">
        <Stack orientation="horizontal" spacing="space40">
          <Avatar size="sizeIcon60" name="Adriana Lovelock" src="/images/avatars/avatar4.png" />
          <Box>
            <Text as="p">
              Adriana Lovelock
            </Text>
            <Text as="p" color="colorTextWeak" fontWeight="fontWeightNormal">adriana@lovelock.com</Text>
          </Box>
        </Stack>
      </Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">28</Td>
    </Tr>
    <Tr>
      <Th scope="row">
        <Stack orientation="horizontal" spacing="space40">
          <Avatar size="sizeIcon60" name="Amanda Cutlack" src="/images/avatars/avatar3.png" />
          <Box>
            <Text as="p">
              Amanda Cutlack
            </Text>
            <Text as="p" color="colorTextWeak" fontWeight="fontWeightNormal">amanda@cutlack.com</Text>
          </Box>
        </Stack>
      </Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td textAlign="right">7</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h4",null,"Table with status indicators"),(0,n.yg)("p",null,"Tables can support custom compositions using ",(0,n.yg)("inlineCode",{parentName:"p"},"Box")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"Text"),`, such as custom status indicators.
When including statuses in a table, be sure to include supporting text so color isn't the only
indicator of status.`),(0,n.yg)("p",null,"Refer to our Status Indicator pattern (coming soon!) for guidance on displaying statuses in your tables."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,Tr:s.Tr,Th:s.Th,Td:s.Td,Box:i.az,Stack:d.B,Text:h.EY,ProcessSuccessIcon:y.ProcessSuccessIcon,ProcessWarningIcon:u.ProcessWarningIcon,ProcessErrorIcon:m.ProcessErrorIcon},language:"jsx",mdxType:"LivePreview"},`<Table>
  <THead>
    <Tr>
      <Th>Result</Th>
      <Th>SID</Th>
      <Th>Email address</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Td>
        <Box display="flex" alignItems="center">
          <ProcessSuccessIcon
            color="colorTextIconSuccess"
            decorative={false}
            title="valid" />
          <Text as="p" marginLeft="space20">Valid</Text>
        </Box>
        <Text as="p" color="colorTextWeak" marginLeft="space70">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>hayden74@hotmail.com</Td>
    </Tr>
    <Tr>
      <Td>
        <Box display="flex" alignItems="center">
          <ProcessWarningIcon
            color="colorTextIconWarning"
            decorative={false}
            title="risky" />
          <Text as="p" marginLeft="space20">Risky</Text>
        </Box>
        <Text as="p" color="colorTextWeak" marginLeft="space70">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMl29llgoihx286uhxfb0yc5n0sg391x5n
        </Text>
      </Td>
      <Td>beyrek70@hotmail.com</Td>
    </Tr>
    <Tr>
      <Td>
        <Box display="flex" alignItems="center">
          <ProcessErrorIcon
            color="colorTextIconError"
            decorative={false}
            title="invalid" />
          <Text as="p" marginLeft="space20">Invalid</Text>
        </Box>
        <Text as="p" color="colorTextWeak" marginLeft="space70">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMxarke3v30fv17hauqn86a7nhgm3b5d87
        </Text>
      </Td>
      <Td>kevin@hotmail.com</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h4",null,"Table with tooltips on headers"),(0,n.yg)("p",null,"A ",(0,n.yg)("inlineCode",{parentName:"p"},"Th")," can be composed to include ",(0,n.yg)("a",{parentName:"p",href:"/components/button#link-style-button"},"icon buttons"),`, such as an information icon button with additional
details placed in a `,(0,n.yg)("a",{parentName:"p",href:"/components/tooltip/"},"Tooltip")," or ",(0,n.yg)("a",{parentName:"p",href:"/components/popover/"},"Popover"),"."),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,Tr:s.Tr,Th:s.Th,Td:s.Td,Text:h.EY,Box:i.az,Button:l.$n,Tooltip:c.m,InformationIcon:g.InformationIcon},language:"jsx",mdxType:"LivePreview"},`<Table>
  <THead>
    <Tr>
      <Th>Date</Th>
      <Th>
        <Box display="flex" alignItems="center">
          <Text as="span" marginRight="space10">SID</Text>
          <Tooltip text="SID Number">
            <Button variant="reset" size="reset">
              <InformationIcon decorative={false} title="Open Tooltip" display="block" />
            </Button>
          </Tooltip>
        </Box>
      </Th>
      <Th>From</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Td>
        <Text as="p">16:24:28 PDT</Text>
        <Text as="p">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
    <Tr>
      <Td>
        <Text as="p">16:24:28 PDT</Text>
        <Text as="p">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMl29llgoihx286uhxfb0yc5n0sg391x5n
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
    <Tr>
      <Td>
        <Text as="p">16:24:28 PDT</Text>
        <Text as="p">2020-09-17</Text>
      </Td>
      <Td>
        <Text as="span" fontFamily="fontFamilyCode">
          SMxarke3v30fv17hauqn86a7nhgm3b5d87
        </Text>
      </Td>
      <Td>(602) 609-6747</Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h4",null,"Table with truncated cells"),(0,n.yg)("p",null,"In rare cases, you may want to ",(0,n.yg)("a",{parentName:"p",href:"/components/truncate"},"truncate"),` the text in a given cell. For example, when a table contains
long URLs, and the user does not need to read the full URL.`),(0,n.yg)(F,{scope:{Table:s.XI,THead:s.D1,TBody:s.vc,TFoot:s.xx,Tr:s.Tr,Th:s.Th,Td:s.Td,Anchor:o.Mz,Truncate:p.P},language:"jsx",mdxType:"LivePreview"},`<Table tableLayout="fixed">
  <THead>
    <Tr>
      <Th>Agents</Th>
      <Th>Skills</Th>
      <Th>Profile URL</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Th scope="row">Adam Brown</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td>
        <Truncate title="Learn more about Paste">
          <Anchor href="/introduction/about-paste">
            https://paste.twilio.design/introduction/about-paste
          </Anchor>
        </Truncate>
      </Td>
    </Tr>
    <Tr>
      <Th scope="row">Adriana Lovelock</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td>
        <Truncate title="Learn more about Paste">
          <Anchor href="/introduction/about-paste">
            https://paste.twilio.design/introduction/about-paste
          </Anchor>
        </Truncate>
      </Td>
    </Tr>
    <Tr>
      <Th scope="row">Amanda Cutlack</Th>
      <Td>English, French, Sales, Spanish</Td>
      <Td>
        <Truncate title="Learn more about Paste">
          <Anchor href="/introduction/about-paste">
            https://paste.twilio.design/introduction/about-paste
          </Anchor>
        </Truncate>
      </Td>
    </Tr>
  </TBody>
</Table>`),(0,n.yg)("h3",null,"Displaying missing data"),(0,n.yg)("p",null,`If the data grid is not capable of showing data yet (for example, if it’s in a draft state), leave cells blank.`),(0,n.yg)("p",null,`If a piece of data is missing because the metric in a certain column does not apply to a given row, show “N/A” and use the HTML abbreviation element to communicate the full meaning of the abbreviation (“Not applicable”). This ensures any customers using assistive technologies will understand the cell entry.`),(0,n.yg)("h3",null,"Errors"),(0,n.yg)("p",null,"Avoid documenting an entire error message within a row. Use an indicator, like an icon or an icon with a short message. The short message can be displayed in a ",(0,n.yg)("a",{parentName:"p",href:"/components/popover"},"Popover")," on the icon, or in a cell. Then use other methods, like a ",(0,n.yg)("a",{parentName:"p",href:"/components/popover"},"Popover"),", ",(0,n.yg)("a",{parentName:"p",href:"/components/side-modal"},"Side Modal"),", or full page to communicate complete error and resolution information."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"When multiple errors affect a single row,")," indicate the number of errors and provide specific error and resolution information within a ",(0,n.yg)("a",{parentName:"p",href:"/components/popover"},"Popover"),", ",(0,n.yg)("a",{parentName:"p",href:"/components/side-modal"},"Side Modal"),", or full page."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"When an error affects an entire column,")," consider an indicator near the column header with additional information available in a popover or other component."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"When all data in a Data Grid does not load,")," show an ",(0,n.yg)("a",{parentName:"p",href:"/patterns/empty-state"},"error empty state"),"."),(0,n.yg)("h2",null,"When to use Table"),(0,n.yg)("p",null,`Tables are used to represent static, tabular data. For example, a list of users' first names, last names,
and email addresses.`),(0,n.yg)(w.l,{mdxType:"DoDont"},(0,n.yg)(w.Do,{title:"Do",body:"Left-align textual table data, such as an email address.",preview:!1,mdxType:"Do"}),(0,n.yg)(w.w,{title:"Don't",body:"Don't right- or center-align textual table data.",preview:!1,mdxType:"Dont"})),(0,n.yg)(w.l,{mdxType:"DoDont"},(0,n.yg)(w.Do,{title:"Do",body:"Right-align numeric table data that is meant to be compared along a single column, such as the open rate on an email campaign.",preview:!1,mdxType:"Do"}),(0,n.yg)(w.w,{title:"Don't",body:"Don't left- or center-align numeric table data that is meant to be compared along a single column.",preview:!1,mdxType:"Dont"})),(0,n.yg)(w.l,{mdxType:"DoDont"},(0,n.yg)(w.Do,{title:"Do",body:"Provide numeric data that is meant to be compared along a single column at the same level of precision, so that the decimal point aligns across all rows and the numbers can be easily compared. For example, show all numbers to two decimal places.",preview:!1,mdxType:"Do"}),(0,n.yg)(w.w,{title:"Don't",body:"Don't provide numeric data that is meant to be compared along a single column at differing levels of precision. For example, don't show some numbers to one decimal place and others to two.",preview:!1,mdxType:"Dont"})),(0,n.yg)(w.l,{mdxType:"DoDont"},(0,n.yg)(w.Do,{title:"Do",body:"Include supporting text when providing a status in a table row.",preview:!1,mdxType:"Do"}),(0,n.yg)(w.w,{title:"Don't",body:"Don't use color as the only indicator of status in a table row.",preview:!1,mdxType:"Dont"})))}C.isMDXComponent=!0},17938:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});var n=t(76127),o=t(55729),r=o.forwardRef(({children:e,element:a="CARD",padding:t="space100",paddingBottom:r,paddingLeft:i,paddingRight:l,paddingTop:T,fillHeight:d,fillWidth:s,...h},c)=>o.createElement(n.az,{...(0,n.x8)(h),ref:c,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:a,padding:t,paddingBottom:r,paddingLeft:i,paddingRight:l,paddingTop:T,backgroundColor:"colorBackgroundWeakest",height:d?"100%":void 0,width:s?"100%":void 0},e));r.displayName="Card"},40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>m});var n=t(72387),o=t(76127),r=t(95669),i=t.n(r),l=t(81278);t(55729);var T=t(10511),d=t(43084),s=t(10732),h=t(62887),c=t(63437),p=t(38992);let g={h1:()=>null},m=({children:e,meta:a,navigationData:t,data:r,mdxHeadings:m,pageHeaderData:{categoryRoute:u,githubUrl:y,storybookUrl:b}})=>{let x=a.title?`${a.title} - ${p.DZ.TITLE}`:p.DZ.TITLE,w=a.description||p.DZ.DESCRIPTION,f=(0,l.useRouter)();return(0,n.FD)(c.T,{navigationData:t,children:[(0,n.FD)(i(),{children:[(0,n.Y)("title",{children:x}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${f.pathname}`}),(0,n.Y)("meta",{name:"description",content:w},"description")]}),(0,n.FD)(T.s,{children:[(0,n.Y)(h.c,{categoryRoute:u,githubUrl:y,storybookUrl:b,data:r}),(0,n.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(s.i,{data:m}),(0,n.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(d.Q,{componentOverrides:a.package?g:{},children:e})})]})]})]})}},51895:(e,a,t)=>{"use strict";t.d(a,{z:()=>r});var n=t(76127),o=t(55729),r=o.forwardRef(({element:e="DETAIL_TEXT",as:a="div",children:t,marginTop:r="space30",...i},l)=>o.createElement(n.az,{as:a,ref:l,element:e,...(0,n.x8)(i),marginTop:r,color:"colorTextWeak",fontSize:"fontSize20",lineHeight:"lineHeight20",fontWeight:"fontWeightMedium"},t));r.displayName="DetailText"},52180:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/table",function(){return t(10185)}])},83889:(e,a,t)=>{"use strict";t.r(a),t.d(a,{InformationIcon:()=>i});var n=t(36669),o=t(55729),r=t(96316);let i=o.forwardRef(({as:e,display:a,element:t="ICON",size:i,color:l,title:T,decorative:d},s)=>{let h=`InformationIcon-${(0,n.GV)()}`;if(!d&&null==T)throw Error("[InformationIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:t,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":d,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":h},T?o.createElement("title",{id:h},T):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 2a8 8 0 110 16 8 8 0 010-16zm0 1.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM10 9a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z"})))});i.displayName="InformationIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=52180)),_N_E=e.O()}]);