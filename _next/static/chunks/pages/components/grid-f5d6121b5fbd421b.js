(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4343],{3738:(e,a,n)=>{"use strict";n.d(a,{V:()=>s,x:()=>l});var o=n(76127),t=n(55729),r=e=>"margin"===e?"auto":"space0",i=(e,a,n)=>{let o=r(a),t=(({prefix:e,responsive:a,defaultValue:n})=>{let o=()=>a?[,,,].fill(n):n;return{[`${e}Top`]:o(),[`${e}Bottom`]:o(),[`${e}Right`]:o(),[`${e}Left`]:o()}})({prefix:a,responsive:!1,defaultValue:o});return void 0===n||(e?(t[`${a}Top`]=n,t[`${a}Bottom`]=n):(t[`${a}Right`]=n,t[`${a}Left`]=n)),t},d=(e,a,n)=>{let o=r(a),t={[`${a}Top`]:[o,o,o],[`${a}Bottom`]:[o,o,o],[`${a}Right`]:[o,o,o],[`${a}Left`]:[o,o,o]},i=Array.isArray(n)&&0===n.length;return void 0===n||i||e.forEach((e,o)=>{let r=Array.isArray(n)?n[o]:n;e?(t[`${a}Top`][o]=r,t[`${a}Bottom`][o]=r):(t[`${a}Right`][o]=r,t[`${a}Left`][o]=r)}),t},l=t.forwardRef(({as:e,children:a,element:n="GRID",equalColumnHeights:r,gutter:l,marginTop:s,marginBottom:p,vertical:g=!1,...u},m)=>{let y=t.useMemo(()=>t.Children.map(a,e=>t.isValidElement(e)?t.cloneElement(e,{count:t.Children.count(a),gutter:l,vertical:g,stretchColumnContent:r}):e),[a,g,r,l]),h=t.useMemo(()=>((e,a=!1)=>{let n=(e=>Array.isArray(e)?e.map(e=>"space0"!==e?e.replace("space","spaceNegative"):"space0"===e?"space0":null):"space0"===e?"space0":e&&"string"==typeof e?e.replace("space","spaceNegative"):"auto")(e);return Array.isArray(a)?d(a,"margin",n):i(a,"margin",n)})(l,g),[l,g]),c=t.useMemo(()=>(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e&&!0===e?"column":"row"):e?"column":"row")(g),[g]);return t.createElement(o.az,{...(0,o.x8)(u),ref:m,as:e,alignItems:r?"stretch":null,element:n,flexDirection:c,flexWrap:"wrap",display:"flex",...h,marginTop:s,marginBottom:p,minWidth:"size0",rowGap:u.rowGap,columnGap:u.columnGap},y)});l.displayName="Grid";var s=t.forwardRef(({as:e,children:a,count:n,element:r="COLUMN",gutter:l,offset:s,span:p,stretchColumnContent:g,vertical:u,...m},y)=>{let h=t.useMemo(()=>(({count:e,span:a,gutter:n,offset:o,vertical:t,stretchColumnContent:r})=>{let l={width:(({count:e,span:a})=>Array.isArray(a)&&e?a.map(e=>`${e/12*100}%`):"number"==typeof a&&e&&e<=12?`${a/12*100}%`:void 0!==e?`${1/e*100}%`:"8.333333333333332%")({count:e,span:a}),...(({vertical:e,gutter:a})=>Array.isArray(e)?d(e,"padding",a):i(e,"padding",a))({gutter:n,vertical:t})};return o&&(l.marginLeft=(e=>Array.isArray(e)?e.map(e=>`${e/12*100}%`):`${e/12*100}%`)(o)),t&&!o&&(l.minWidth=(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e?!0===e?"100%":"0":null):e?"100%":"0")(t),l.marginLeft="space0"),r&&(l.alignContent="stretch",l.display="flex"),l})({count:n,gutter:l,offset:s,span:p,stretchColumnContent:g,vertical:u}),[n,l,s,p,g,u]);return t.createElement(o.az,{...(0,o.x8)(m),...h,as:e,element:r,ref:y},a)});s.displayName="Column"},17938:(e,a,n)=>{"use strict";n.d(a,{Z:()=>r});var o=n(76127),t=n(55729),r=t.forwardRef(({children:e,element:a="CARD",padding:n="space100",paddingBottom:r,paddingLeft:i,paddingRight:d,paddingTop:l,fillHeight:s,fillWidth:p,...g},u)=>t.createElement(o.az,{...(0,o.x8)(g),ref:u,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:a,padding:n,paddingBottom:r,paddingLeft:i,paddingRight:d,paddingTop:l,backgroundColor:"colorBackgroundWeakest",height:s?"100%":void 0,width:p?"100%":void 0},e));r.displayName="Card"},36124:(e,a,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/grid",function(){return n(91567)}])},40615:(e,a,n)=>{"use strict";n.d(a,{A:()=>h});var o=n(72387),t=n(76127),r=n(95669),i=n.n(r),d=n(81278);n(55729);var l=n(10511),s=n(43084),p=n(10732),g=n(62887),u=n(63437),m=n(38992);let y={h1:()=>null},h=({children:e,meta:a,navigationData:n,data:r,mdxHeadings:h,pageHeaderData:{categoryRoute:c,githubUrl:C,storybookUrl:x}})=>{let f=a.title?`${a.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,v=a.description||m.DZ.DESCRIPTION,T=(0,d.useRouter)();return(0,o.FD)(u.T,{navigationData:n,children:[(0,o.FD)(i(),{children:[(0,o.Y)("title",{children:f}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,o.Y)("meta",{name:"description",content:v},"description")]}),(0,o.FD)(l.s,{children:[(0,o.Y)(g.c,{categoryRoute:c,githubUrl:C,storybookUrl:x,data:r}),(0,o.FD)(t.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(p.i,{data:h}),(0,o.Y)(t.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(s.Q,{componentOverrides:a.package?y:{},children:e})})]})]})]})}},91567:(e,a,n)=>{"use strict";n.r(a),n.d(a,{__N_SSG:()=>T,default:()=>H,getStaticProps:()=>P,mdxHeadings:()=>b,meta:()=>w});var o=n(55729),t=n(11885),r=n(76127),i=n(3738),d=n(4073),l=n(95036),s=n(17938),p=n(60798),g=n(50010),u=n(629),m=n(54652),y=n(89564),h=n(67663),c=n(72387),C=n(36669);let x=o.memo(({title:e="Twilio Icon",className:a,color:n,decorative:o=!0,display:t,size:r})=>{let i=(0,C.GV)();return(0,c.Y)("span",{style:{color:n,display:t,width:r,height:r},className:a,children:(0,c.FD)("svg",{role:"img","aria-hidden":o,"aria-labelledby":i,viewBox:"0 0 30 30",width:"100%",height:"100%",children:[(0,c.Y)("title",{id:i,children:e}),(0,c.Y)("path",{fill:"currentColor",d:"M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 26C8.9 26 4 21.1 4 15S8.9 4 15 4s11 4.9 11 11-4.9 11-11 11zm6.8-14.7c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1zm0 7.4c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1zm-7.4 0c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1zm0-7.4c0 1.7-1.4 3.1-3.1 3.1S8.2 13 8.2 11.3s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1z"})]})})});var f=n(38992),v=n(40615),T=!0;let w={title:"Grid - Layout",package:"@twilio-paste/grid",description:"The grid component controls the visual layout and spacing between elements on a page or in containers.",slug:"/components/grid/"},P=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:b,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/layout/grid",storybookUrl:"/?path=/story/layout-grid--grid-12-column-and-gutter-support"}}}),b=[{value:"Guidelines",depth:2},{value:"About Grid",depth:3},{value:"Examples",depth:2},{value:"Equal column widths",depth:3},{value:"Unequal column widths, using column span",depth:3},{value:"Offset column",depth:3},{value:"Equal column heights",depth:3},{value:"Stacked columns in a vertical layout",depth:3},{value:"Nested Grids",depth:3},{value:"Responsive columns",depth:3},{value:"Responsive column offset and span",depth:4},{value:"Responsive column gutters",depth:4},{value:"Composition Notes",depth:2},{value:"Basic page layout",depth:3},{value:"Responsive page layout",depth:3},{value:"Component layout",depth:3},{value:"When to use Grid",depth:2}],G=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)},B={meta:w,getStaticProps:P,mdxHeadings:b},k=v.A;function H({components:e,...a}){return(0,t.yg)(k,{...B,...a,components:e,mdxType:"MDXLayout"},(0,t.yg)(G,{scope:{Grid:i.x,Column:i.V,Card:s.Z,Heading:p.D,Paragraph:g.f},language:"jsx",mdxType:"LivePreview"},`<Grid gutter="space30">
  <Column>
    <Card padding="space70">
      <Heading as="h4" variant="heading40">Instant Provisioning</Heading>
      <Paragraph>The API and the Console allow you to search and provision local, toll-free, or mobile numbers by capability, geography, prefix or keyword.</Paragraph>
    </Card>
  </Column>
  <Column>
    <Card padding="space70">
      <Heading as="h4" variant="heading40">Vast Inventory</Heading>
      <Paragraph>Twilio maintains phone number inventory at a rate of 50 times the quantity provisioned daily for over 600 area codes and prefixes.</Paragraph>
    </Card>
  </Column>
  <Column>
    <Card padding="space70">
      <Heading as="h4" variant="heading40">Quality Screening</Heading>
      <Paragraph>Every phone number in the inventory passes a rigorous 60-day screening process to verify capabilities and test for unwanted call traffic.</Paragraph>
    </Card>
  </Column>
</Grid>`),(0,t.yg)("h2",null,"Guidelines"),(0,t.yg)(g.f,{mdxType:"Paragraph"},w.description),(0,t.yg)("h3",null,"About Grid"),(0,t.yg)("p",null,`Grid creates organized and consistent product layouts, by providing a standard for positioning elements. Grid speeds up the designer-to-developer workflow by improving the consistency of design implementations.
Use a Grid to layout and align content by applying standard spacing between elements on a page or within a component.`),(0,t.yg)("p",null,"The standard desktop grid has 24-pixel gutters and can support up to 12 columns. The outside gutters are removed from the overall width of the grid."),(0,t.yg)("p",null,"Grid is built using the ",(0,t.yg)("a",{parentName:"p",href:"/components/flex"},"Flex component")," and is responsive. Grid column widths grow and shrink based on the parent element width."),(0,t.yg)("h2",null,"Examples"),(0,t.yg)("h3",null,"Equal column widths"),(0,t.yg)("p",null,"Use Column, which is a child component of Grid, to lay out equal-sized content, such as a feed of cards."),(0,t.yg)(G,{scope:{Grid:i.x,Column:i.V,Card:s.Z,Heading:p.D,Paragraph:g.f},language:"jsx",mdxType:"LivePreview"},`<Grid gutter="space30">
  <Column>
    <Card padding="space70">
      <Heading as="h4" variant="heading40">Instant Provisioning</Heading>
      <Paragraph>The API and the Console allow you to search and provision local, toll-free, or mobile numbers by capability, geography, prefix or keyword.</Paragraph>
    </Card>
  </Column>
  <Column>
    <Card padding="space70">
      <Heading as="h4" variant="heading40">Vast Inventory</Heading>
      <Paragraph>Twilio maintains phone number inventory at a rate of 50 times the quantity provisioned daily for over 600 area codes and prefixes.</Paragraph>
    </Card>
  </Column>
  <Column>
    <Card padding="space70">
      <Heading as="h4" variant="heading40">Quality Screening</Heading>
      <Paragraph>Every phone number in the inventory passes a rigorous 60-day screening process to verify capabilities and test for unwanted call traffic.</Paragraph>
    </Card>
  </Column>
</Grid>`),(0,t.yg)("h3",null,"Unequal column widths, using column span"),(0,t.yg)("p",null,"Use the ",(0,t.yg)("inlineCode",{parentName:"p"},"span")," prop to allow content to span multiple columns. ",(0,t.yg)("inlineCode",{parentName:"p"},"Span")," defines how many columns you want the width of your content to take up out of a 12-column grid. The value of ",(0,t.yg)("inlineCode",{parentName:"p"},"span"),` becomes the
numerator while 12 is the denominator, which gives us a percentage width value for each column. The default `,(0,t.yg)("inlineCode",{parentName:"p"},"span")," is 1 column width."),(0,t.yg)("p",null,"In our example we're setting one column to equal 8 of the 12 columns (",(0,t.yg)("inlineCode",{parentName:"p"},"span={8}"),"), and the other to be 4 of the 12 columns (",(0,t.yg)("inlineCode",{parentName:"p"},"span={4}"),")."),(0,t.yg)(G,{scope:{Grid:i.x,Column:i.V,Card:s.Z,Heading:p.D,Paragraph:g.f,Button:l.$n},language:"jsx",mdxType:"LivePreview"},`<Grid gutter="space30">
  <Column span={8}>
    <Heading as="h4" variant="heading40">Getting Started with Parse</Heading>
    <Paragraph>
      Use SendGrid to make your email a two-way street. The Parse Webhook is a powerful tool that can take incoming email for your domain or subdomain and direct it to your application. The possibilities of this are endless!
    </Paragraph>
    <Heading as="h4" variant="heading40">Your Email Funnel</Heading>
    <Paragraph>
      Expert Insights analyzes each layer of your email funnel to determine leakage points (such as blocked emails) and opportunities to improve deliverability and engagement.
    </Paragraph>
  </Column>
  <Column span={4}>
    <Card padding="space70">
      <Heading as="h4" variant="heading40">Expert Insights</Heading>
      <Paragraph>Send better email with Expert Insights. Our detailed monthly reports with expert recommendations will give you deeper visibility into the health and performance of your email program.</Paragraph>
      <Button>Add to Plan</Button>
    </Card>
  </Column>
</Grid>`),(0,t.yg)(m.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,t.yg)(m.v,{as:"h4",variant:"heading40",mdxType:"CalloutHeading"},"An important note about span and offset props"),(0,t.yg)(m.wz,{mdxType:"CalloutText"},"When using ",(0,t.yg)("strong",null,"span")," or ",(0,t.yg)("strong",null,"offset"),", base your layout off a 12-column grid. For example, if you want to have two columns with one spanning twice as much as the other, then one column would span=8 and the other would span=4.")),(0,t.yg)("h3",null,"Offset column"),(0,t.yg)("p",null,"Use ",(0,t.yg)("inlineCode",{parentName:"p"},"offset")," to push a column to the right by a certain number of columns. For example, a layout with centered columns."),(0,t.yg)(G,{scope:{Grid:i.x,Column:i.V,Card:s.Z,Button:l.$n,Heading:p.D,Paragraph:g.f,Text:u.EY},language:"jsx",mdxType:"LivePreview"},`<Grid gutter="space30">
  <Column span={8} offset={2}>
    <Card padding="space70">
      <Text as="div" textAlign="center">
        <Heading as="h4" variant="heading40">Create your first Signup Form</Heading>
        <Paragraph>Create and share a form to capture new signups and add them directly to your Contacts. You’ll grow your list the right way, knowing each new contact has opted in to receive your content.</Paragraph>
        <Button>Create a Signup Form</Button>
      </Text>
    </Card>
  </Column>
</Grid>`),(0,t.yg)("h3",null,"Equal column heights"),(0,t.yg)("p",null,"Set ",(0,t.yg)("inlineCode",{parentName:"p"},"equalColumnHeights")," on a grid container and all columns in a single row will share the height of the tallest column."),(0,t.yg)("p",null,"This can be useful when trying to visually align Cards where their content is variable."),(0,t.yg)("p",null,"When columns have equal heights, a single child element will stretch to the height of the column. You may still need to control the width of that child though."),(0,t.yg)(G,{scope:{Grid:i.x,Column:i.V,Card:s.Z,Button:l.$n,Heading:p.D,Paragraph:g.f,Box:r.az},language:"jsx",mdxType:"LivePreview"},`<Grid gutter="space30" equalColumnHeights>
  <Column span={4}>
    <Card padding="space70">
      <Heading as="h2" variant="heading20">
        Why use Paste?
      </Heading>
      <Paragraph marginBottom="space0">
        Paste helps you rapidly prototype, and ship great, inclusive customer experiences. It makes it easy to
        do the right thing, cheaply.
      </Paragraph>
    </Card>
  </Column>
  <Column span={4}>
    <Card padding="space70">
      <Heading as="h2" variant="heading20">
        Inclusive by default
      </Heading>
      <Paragraph marginBottom="space0">
        Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
        to build accessibly.
      </Paragraph>
    </Card>
  </Column>
  <Column span={4}>
    <Card padding="space70">
      <Heading as="h2" variant="heading20">
        Get up and running
      </Heading>
      <Paragraph marginBottom="space0">
        Whether you’re a designer or developer, setting up Paste is easy and only takes a few minutes!
      </Paragraph>
    </Card>
  </Column>
</Grid>`),(0,t.yg)("h3",null,"Stacked columns in a vertical layout"),(0,t.yg)("p",null,"Use the ",(0,t.yg)("inlineCode",{parentName:"p"},"vertical")," prop to stack columns vertically instead of horizontally. The ",(0,t.yg)("inlineCode",{parentName:"p"},"vertical"),` prop can work along with theme breakpoints,
so your grid can be vertical on different viewports. For example to have your grid vertical on mobile and not tablet or desktop viewports,
use `,(0,t.yg)("inlineCode",{parentName:"p"},"vertical={[true, false, false]}"),". For a visual example, ",(0,t.yg)("a",{parentName:"p",href:"https://main--5e53448165911c0022e68c74.chromatic.com/?path=/story/layout-grid--grid-2-column-responsive-stack"},"see the Storybook example"),`
and resize the browser.`),(0,t.yg)(G,{scope:{Grid:i.x,Column:i.V,Button:l.$n,Card:s.Z,Heading:p.D,Paragraph:g.f},language:"jsx",mdxType:"LivePreview"},`<Grid gutter="space30" vertical>
  <Column>
    <Card padding="space70">
      <Heading as="h4" variant="heading40">Web API</Heading>
      <Paragraph>The fastest, most flexible way to send email using languages like Node.js, Ruby, C#, and more.</Paragraph>
      <Button>Choose</Button>
    </Card>
  </Column>
  <Column>
    <Card padding="space70">
      <Heading as="h4" variant="heading40">SMTP Relay</Heading>
      <Paragraph>The easiest way to send email. It only requires modifying your application's SMTP configuration.</Paragraph>
      <Button>Choose</Button>
    </Card>
  </Column>
  <Column>
    <Card padding="space70">
      <Heading as="h4" variant="heading40">What's new at Twilio</Heading>
      <Paragraph>Check out our newest product releases on the Twilio Changelog.</Paragraph>
      <Button>Changelog</Button>
    </Card>
  </Column>
</Grid>`),(0,t.yg)("h3",null,"Nested Grids"),(0,t.yg)("p",null,"A Grid can be nested inside another Grid. For example, you can split a column into multiple smaller columns in order to stack the outer Grid in a responsive view but not the inner Grid."),(0,t.yg)(G,{scope:{Grid:i.x,Column:i.V,Box:r.az,Card:s.Z,Heading:p.D,Paragraph:g.f},language:"jsx",mdxType:"LivePreview"},`<Grid gutter="space30" vertical>
  <Column>
    <Grid gutter="space30">
      <Column>
        <Card padding="space70">
          <Heading as="h4" variant="heading40">Getting Started</Heading>
          <Paragraph>To get started with Phone Numbers, check out our Getting Started Guide.</Paragraph>
        </Card>
      </Column>
      <Column>
        <Card padding="space70">
          <Heading as="h4" variant="heading40">About Web API</Heading>
          <Paragraph>The fastest, most flexible way to send email using languages like Node.js, Ruby, C#, and more.</Paragraph>
        </Card>
      </Column>
    </Grid>
  </Column>
  <Column>
    <Card padding="space70">
      <Heading as="h4" variant="heading40">SMTP Relay</Heading>
      <Paragraph>The easiest way to send email. It only requires modifying your application's SMTP configuration.</Paragraph>
    </Card>
  </Column>
  <Column>
    <Grid gutter="space30">
      <Column>
        <Card padding="space70">
          <Heading as="h4" variant="heading40">About Phone Numbers</Heading>
          <Paragraph>Programmable phone numbers are a core part of Twilio’s platform, enabling you to receive SMS, MMS, and phone calls.</Paragraph>
        </Card>
      </Column>
      <Column>
        <Card padding="space70">
          <Heading as="h4" variant="heading40">Messaging Services</Heading>
          <Paragraph>Messaging Services allow you to organize your messages and enable specific features for groups of messages.</Paragraph>
        </Card>
      </Column>
    </Grid>
  </Column>
</Grid>`),(0,t.yg)("h3",null,"Responsive columns"),(0,t.yg)("p",null,"Grid column ",(0,t.yg)("inlineCode",{parentName:"p"},"span"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"offset"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"gutter"),` props accept responsive values, allowing them to be changed on theme breakpoints.
For example, setting `,(0,t.yg)("inlineCode",{parentName:"p"},"span={[6, 8, 2] }")," on a ",(0,t.yg)("inlineCode",{parentName:"p"},"Column")," will instruct the column to ",(0,t.yg)("inlineCode",{parentName:"p"},"span"),` 6 columns of the grid at the first breakpoint, 8 columns at the second, and 2 columns at the third breakpoint.
Check out the examples below and resize the browser to see the responsive values in action.`),(0,t.yg)("p",null,"When creating responsive layouts with the Grid, it is important to remember to control the ",(0,t.yg)("inlineCode",{parentName:"p"},"vertical")," prop accordingly. At the breakpoints you wish to stack the columns, set ",(0,t.yg)("inlineCode",{parentName:"p"},"vertical")," to equal true. This will apply the column gutters vertically, rather than horizontally."),(0,t.yg)("h4",null,"Responsive column offset and span"),(0,t.yg)(G,{scope:{Grid:i.x,Column:i.V,Box:r.az},language:"jsx",mdxType:"LivePreview"},`<Grid gutter="space20" vertical={[true, false, false]}>
    <Column span={[12, 6, 6]} offset={[0, 2, 2]}>
      <Box backgroundColor="colorBackgroundPrimaryWeaker" fontSize="fontSize100" height="size40" display="flex" justifyContent="center" alignItems="center">
        A
      </Box>
    </Column>
    <Column span={4}>
      <Box backgroundColor="colorBackgroundPrimaryWeak" fontSize="fontSize100" height="size40" display="flex" justifyContent="center" alignItems="center">
        B
      </Box>
    </Column>
</Grid>`),(0,t.yg)("h4",null,"Responsive column gutters"),(0,t.yg)(G,{scope:{Grid:i.x,Column:i.V,Box:r.az},language:"jsx",mdxType:"LivePreview"},`<Grid gutter={['space20', 'space60', 'space90']} vertical={[true, true, false]}>
    <Column>
      <Box backgroundColor="colorBackgroundPrimaryWeakest" fontSize="fontSize100" height="size40" display="flex" justifyContent="center" alignItems="center">
        A
      </Box>
    </Column>
    <Column>
      <Box backgroundColor="colorBackgroundPrimaryWeaker" fontSize="fontSize100" height="size40" display="flex" justifyContent="center" alignItems="center">
        B
      </Box>
    </Column>
    <Column>
      <Box backgroundColor="colorBackgroundPrimaryWeak" fontSize="fontSize100" height="size40" display="flex" justifyContent="center" alignItems="center">
        C
      </Box>
    </Column>
</Grid>`),(0,t.yg)("h2",null,"Composition Notes"),(0,t.yg)("p",null,"Grid can be used to compose various types of layouts ranging from whole application pages and views down to individual component layouts."),(0,t.yg)(m.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,t.yg)(m.v,{as:"h3",mdxType:"CalloutHeading"},"Gutter sizing"),(0,t.yg)(m.wz,{mdxType:"CalloutText"},"For spacing content in a layout wider than 1440 pixels, we recommend using a 24-pixel gutter. Use $space-40 to get a 24-pixel gutter."),(0,t.yg)(m.wz,{mdxType:"CalloutText"},"For spacing content in a layout narrower than 1440 pixels, we recommend using a 16-pixel gutter. Use $space-30 to get a 16-pixel gutter.")),(0,t.yg)("h3",null,"Basic page layout"),(0,t.yg)("p",null,"Let's look at a common use case where we need to layout a page with a sidebar and a grid within the page content area."),(0,t.yg)(G,{scope:{Grid:i.x,Column:i.V,Button:l.$n,Box:r.az,Card:s.Z,Heading:p.D,Paragraph:g.f,Anchor:d.Mz,Text:u.EY},language:"jsx",mdxType:"LivePreview"},`<Card padding="space70">
  <Grid gutter="space30">
    <Column span={3}>
      <Box backgroundColor="colorBackground" padding="space70" borderRadius="borderRadius20">
        <Heading as="h4" variant="heading40">Dashboard</Heading>
        <Box marginBottom="space20">
          <Anchor href="#">Billing</Anchor>
        </Box>
        <Box marginBottom="space20">
          <Anchor href="#">Usage</Anchor>
        </Box>
        <Box marginBottom="space20">
          <Anchor href="#">Settings</Anchor>
        </Box>
      </Box>
    </Column>
    <Column span={9}>
      <Box marginBottom="space50">
        <Card>
          <Heading as="h4" variant="heading40">Project Info</Heading>
          <Text as="p" marginBottom="space0" color="colorTextWeak">BALANCE</Text>
          <Text as="p" marginBottom="space50" color="colorTextSuccess" fontWeight="fontWeightBold">$33.28</Text>
          <Text as="p" marginBottom="space0" color="colorTextWeak">REFERRAL PROGRAM</Text>
          <Text as="p" marginBottom="space0">Refer your network to Twilio — give $10, get $10.</Text>
        </Card>
      </Box>
      <Grid gutter="space30">
        <Column>
          <Card>
            <Heading as="h4" variant="heading40">What's new at Twilio</Heading>
            <Paragraph>Check out our newest product releases on the Twilio Changelog.</Paragraph>
            <Button>Changelog</Button>
          </Card>
        </Column>
        <Column>
          <Card>
            <Heading as="h4" variant="heading40">Twilio Docs</Heading>
            <Paragraph>Dig into our API reference documentation and quickstarts. You're covered with everything from SDKs in your favorite languages to sample apps for web, iOS, and Android.</Paragraph>
            <Button variant="secondary">Explore the Docs</Button>
          </Card>
        </Column>
      </Grid>
    </Column>
  </Grid>
</Card>`),(0,t.yg)("h3",null,"Responsive page layout"),(0,t.yg)("p",null,"Grid can also be used for responsive layouts."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"You can determine what size columns should be based on the breakpoints set on a theme. ",(0,t.yg)("a",{parentName:"li",href:"https://main--5e53448165911c0022e68c74.chromatic.com/?path=/story/layout-grid--grid-2-column-responsive"},"See the Storybook example")),(0,t.yg)("li",{parentName:"ul"},"Grid columns can also stack based on theme breakpoints. ",(0,t.yg)("a",{parentName:"li",href:"https://main--5e53448165911c0022e68c74.chromatic.com/?path=/story/layout-grid--grid-2-column-responsive-stack"},"See the Storybook example"))),(0,t.yg)("h3",null,"Component layout"),(0,t.yg)("p",null,"Grids can also be used for layouts within other components. For example, we can set up our card content to include 2 columns."),(0,t.yg)(G,{scope:{Grid:i.x,Column:i.V,Card:s.Z,Heading:p.D,Paragraph:g.f,TwilioIcon:x,TWILIO_RED:f.Fu,Button:l.$n},language:"jsx",mdxType:"LivePreview"},`<Card padding="space70">
  <Grid gutter="space30">
    <Column span={2}>
      <TwilioIcon color={TWILIO_RED} display="block" size={65} />
    </Column>
    <Column span={10}>
      <Heading as="h4" variant="heading40">What's new at Twilio</Heading>
      <Paragraph>Check out our newest product releases on the Twilio Changelog.</Paragraph>
      <Button>Changelog</Button>
    </Column>
  </Grid>
</Card>`),(0,t.yg)("h2",null,"When to use Grid"),(0,t.yg)("p",null,`Use Grid whenever you need to layout or align content on a page or within a component. Grid should also be used for responsive page layouts.
Since the grid is sized to the full width of its parent container, you may not want to use it for fixed width columns in a variable width container.`),(0,t.yg)(y.l,{mdxType:"DoDont"},(0,t.yg)(y.Do,{title:"Do",body:"Base the Column span and offset on a 12-column layout.",mdxType:"Do"},(0,t.yg)(r.az,{padding:"space60",mdxType:"Box"},(0,t.yg)(i.x,{gutter:"space30",mdxType:"Grid"},(0,t.yg)(i.V,{span:4,mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"4 Column Card"))),(0,t.yg)(i.V,{span:8,mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"8 Column Card")))))),(0,t.yg)(y.w,{title:"Don't",body:"Don’t use more than 12 columns within Grid.",mdxType:"Dont"},(0,t.yg)(r.az,{padding:"space60",mdxType:"Box"},(0,t.yg)(i.x,{gutter:"space30",mdxType:"Grid"},(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))))))),(0,t.yg)(y.l,{mdxType:"DoDont"},(0,t.yg)(y.Do,{title:"Do",body:"Use Grid to align content to the right or left side of a page layout.",mdxType:"Do"},(0,t.yg)(r.az,{padding:"space60",mdxType:"Box"},(0,t.yg)(i.x,{mdxType:"Grid"},(0,t.yg)(i.V,{span:4,offset:8,mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content")))))),(0,t.yg)(y.w,{title:"Don't",body:"Don’t use Grid with only one full-width column of content. This causes unnecessary elements. Box is what you’re looking for here.",mdxType:"Dont"},(0,t.yg)(r.az,{padding:"space60",mdxType:"Box"},(0,t.yg)(i.x,{gutter:"space30",mdxType:"Grid"},(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Unnecessary HTML elements. Use ",(0,t.yg)(h.A,{href:"/primitives/box",mdxType:"SiteLink"},"Box")," instead."))))))),(0,t.yg)(y.l,{mdxType:"DoDont"},(0,t.yg)(y.Do,{title:"Do",body:"Use Grid to lay out UI elements into consistent columns.",mdxType:"Do"},(0,t.yg)(r.az,{padding:"space60",mdxType:"Box"},(0,t.yg)(i.x,{gutter:"space30",mdxType:"Grid"},(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content")))),(0,t.yg)(r.az,{marginTop:"space50",mdxType:"Box"},(0,t.yg)(i.x,{gutter:"space30",mdxType:"Grid"},(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))))))),(0,t.yg)(y.w,{title:"Don't",body:"Don’t let columns grow too small. Gutters should never be wider than columns.",mdxType:"Dont"},(0,t.yg)(r.az,{padding:"space60",mdxType:"Box"},(0,t.yg)(i.x,{gutter:"space120",mdxType:"Grid"},(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))),(0,t.yg)(i.V,{mdxType:"Column"},(0,t.yg)(s.Z,{mdxType:"Card"},(0,t.yg)(g.f,{mdxType:"Paragraph"},"Card content"))))))))}H.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=36124)),_N_E=e.O()}]);