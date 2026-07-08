(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4060],{14250:(e,n,t)=>{"use strict";t.r(n),t.d(n,{__N_SSG:()=>g,default:()=>f,getStaticProps:()=>m,mdxHeadings:()=>v,meta:()=>T}),t(55729);var a=t(11885),o=t(69277),r=t(629),i=t(71853),l=t(50010),d=t(60798),s=t(17938),c=t(95036),h=t(4073),u=t(85152),y=t(89564),p=t(40615),g=!0;let T={title:"Screen Reader Only - Components",package:"@twilio-paste/screen-reader-only",description:"The Screen Reader Only component should be used to visually hide content that is necessary to provide appropriate context to users who experience a page using assistive technology.",slug:"/components/screen-reader-only/"},m=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:v,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/screen-reader-only",storybookUrl:"/?path=/story/components-screen-reader-only--default"}}}),v=[{value:"Guidelines",depth:2},{value:"About Screen Reader Only",depth:3},{value:"Examples",depth:2},{value:"Providing visually hidden headings to sectioned content",depth:3},{value:"Providing clear actions while still reducing visual repetition",depth:3},{value:"When to use Screen Reader Only",depth:2}],b=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},w={meta:T,getStaticProps:m,mdxHeadings:v},x=p.A;function f({components:e,...n}){return(0,a.yg)(x,{...w,...n,components:e,mdxType:"MDXLayout"},(0,a.yg)("h2",null,"Guidelines"),(0,a.yg)("h3",null,"About Screen Reader Only"),(0,a.yg)(l.f,{mdxType:"Paragraph"},T.description),(0,a.yg)("p",null,"When wrapped with the Screen Reader Only component, content is visually hidden but still available to assistive technology. This can be useful when information or relationships between UI controls are only communicated ",(0,a.yg)("em",{parentName:"p"},"visually"),". By being able to visually hide some content you are able to provide clarifying information to non-sighted users without adding redundancy to the visual design."),(0,a.yg)("h2",null,"Examples"),(0,a.yg)("h3",null,"Providing visually hidden headings to sectioned content"),(0,a.yg)("p",null,'All sectioning elements, such as Cards, should contain a heading to provide a clear document outline and form of navigation to assistive technology users. However, there may be times a heading is not required (or even redundant) in a particular UI for sighted users. By using the Screen Reader Only component you can provide a visually hidden heading to give additional context and hierarchy. In the example below, we\'ve added "Flex" as a heading that is accessible to assistive technology, but hidden visually.'),(0,a.yg)(b,{scope:{Card:s.Z,ScreenReaderOnly:o.E,Heading:d.D,Paragraph:l.f,Button:c.$n,Anchor:h.Mz,Flex:i.s},language:"jsx",mdxType:"LivePreview"},`<Card>
  <ScreenReaderOnly as="div">
    <Heading as="h2" variant="heading20">Flex</Heading>
  </ScreenReaderOnly>
  <Paragraph>
    Deploy an omnichannel contact center within minutes and customize every element of the experience, including the agent desktop, channels, interaction routing, and reporting using common web frameworks like React.js and REST APIs.
  </Paragraph>
  <Flex vAlignContent="center">
    <Flex marginRight="space40">
      <Button variant="primary">
        Launch Flex
      </Button>
    </Flex>
    <Anchor href="#">
      View all projects
    </Anchor>
  </Flex>
</Card>`),(0,a.yg)("h3",null,"Providing clear actions while still reducing visual repetition"),(0,a.yg)("p",null,"Each column in a table is required to have a column header. Sometimes those column headers can be visually hidden from sighted users if desired. To do so use the Screen Reader Only component to hide the cell content for that column header."),(0,a.yg)("p",null,'Another common use case is for providing correct context to repetitive actions. In the example below, the "Buy" button is clearly visually associated with the phone number via row highlighting. However, to a screen reader user, this association may not be as clear. To provide additional clarification we can add ',(0,a.yg)("em",{parentName:"p"},"what")," you would be buying (Buy ) as visually hidden text to the button. This way, we can keep the same level of context for all users."),(0,a.yg)(b,{scope:{Table:u.XI,THead:u.D1,TBody:u.vc,Tr:u.Tr,Td:u.Td,Th:u.Th,Button:c.$n,Text:r.EY,ScreenReaderOnly:o.E},language:"jsx",mdxType:"LivePreview"},`<Table>
  <THead>
    <Tr>
      <Th>Number</Th>
      <Th>Type</Th>
      <Th>Monthly Fee</Th>
      <Th>
        <ScreenReaderOnly>Actions</ScreenReaderOnly>
      </Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Th>
        <strong>+1 (903) 603-9469</strong>
        <Text as="div" color="colorTextWeak" fontWeight="normal">
          Mabank, TX
        </Text>
      </Th>
      <Td>local</Td>
      <Td>$1.00</Td>
      <Td>
        <Button variant="secondary" size="small">
          Buy <ScreenReaderOnly>+1 (903) 603-9469</ScreenReaderOnly>
        </Button>
      </Td>
    </Tr>
    <Tr>
      <Th>
        <strong>+1 (470) 309-0026</strong>
        <Text as="div" color="colorTextWeak" fontWeight="normal">
          Adairsville, GA
        </Text>
      </Th>
      <Td>local</Td>
      <Td>$1.00</Td>
      <Td>
        <Button variant="secondary" size="small">
          Buy <ScreenReaderOnly>+1 (470) 309-0026</ScreenReaderOnly>
        </Button>
      </Td>
    </Tr>
    <Tr>
      <Th>
        <strong>+1 (484) 662-4088</strong>
        <Text as="div" color="colorTextWeak" fontWeight="normal">
          Hamburg, PA
        </Text>
      </Th>
      <Td>local</Td>
      <Td>$1.00</Td>
      <Td>
        <Button variant="secondary" size="small">
          Buy <ScreenReaderOnly>+1 (484) 662-4088</ScreenReaderOnly>
        </Button>
      </Td>
    </Tr>
  </TBody>
</Table>`),(0,a.yg)("h2",null,"When to use Screen Reader Only"),(0,a.yg)("p",null,"Use the Screen Reader Only component when you are required to provide additional or contextual information to a screen reader user which a sighted user maybe able to infer and when you cannot do so via semantic HTML."),(0,a.yg)(y.l,{mdxType:"DoDont"},(0,a.yg)(y.Do,{title:"Do",body:"Use to provide additional text content to users of assistive technology",preview:!1,mdxType:"Do"}),(0,a.yg)(y.w,{title:"Don't",body:"Don't use to hide interactive content",preview:!1,mdxType:"Dont"})))}f.isMDXComponent=!0},17938:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var a=t(76127),o=t(55729),r=o.forwardRef(({children:e,element:n="CARD",padding:t="space100",paddingBottom:r,paddingLeft:i,paddingRight:l,paddingTop:d,fillHeight:s,fillWidth:c,...h},u)=>o.createElement(a.az,{...(0,a.x8)(h),ref:u,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:n,padding:t,paddingBottom:r,paddingLeft:i,paddingRight:l,paddingTop:d,backgroundColor:"colorBackgroundWeakest",height:s?"100%":void 0,width:c?"100%":void 0},e));r.displayName="Card"},40615:(e,n,t)=>{"use strict";t.d(n,{A:()=>g});var a=t(72387),o=t(76127),r=t(95669),i=t.n(r),l=t(81278);t(55729);var d=t(10511),s=t(43084),c=t(10732),h=t(62887),u=t(63437),y=t(38992);let p={h1:()=>null},g=({children:e,meta:n,navigationData:t,data:r,mdxHeadings:g,pageHeaderData:{categoryRoute:T,githubUrl:m,storybookUrl:v}})=>{let b=n.title?`${n.title} - ${y.DZ.TITLE}`:y.DZ.TITLE,w=n.description||y.DZ.DESCRIPTION,x=(0,l.useRouter)();return(0,a.FD)(u.T,{navigationData:t,children:[(0,a.FD)(i(),{children:[(0,a.Y)("title",{children:b}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${x.pathname}`}),(0,a.Y)("meta",{name:"description",content:w},"description")]}),(0,a.FD)(d.s,{children:[(0,a.Y)(h.c,{categoryRoute:T,githubUrl:m,storybookUrl:v,data:r}),(0,a.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,a.Y)(c.i,{data:g}),(0,a.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,a.Y)(s.Q,{componentOverrides:n.package?p:{},children:e})})]})]})]})}},83832:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/screen-reader-only",function(){return t(14250)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=83832)),_N_E=e.O()}]);