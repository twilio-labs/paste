(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1187],{17938:(e,a,t)=>{"use strict";t.d(a,{Z:()=>o});var n=t(76127),i=t(55729),o=i.forwardRef(({children:e,element:a="CARD",padding:t="space100",paddingBottom:o,paddingLeft:s,paddingRight:r,paddingTop:l,fillHeight:d,fillWidth:c,...h},g)=>i.createElement(n.az,{...(0,n.x8)(h),ref:g,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:a,padding:t,paddingBottom:o,paddingLeft:s,paddingRight:r,paddingTop:l,backgroundColor:"colorBackgroundWeakest",height:d?"100%":void 0,width:c?"100%":void 0},e));o.displayName="Card"},26940:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>f,default:()=>I,getStaticProps:()=>C,mdxHeadings:()=>k,meta:()=>P}),t(55729);var n=t(11885),i=t(4073),o=t(76127),s=t(95036),r=t(50010),l=t(60798),d=t(17938),c=t(84498),h=t(94304),g=t(51582),p=t(51895),b=t(36669);let u=`
const HorizontalTabsExample = () => {
  const selectedId = useUID();
  return (
    <Tabs selectedId={selectedId} baseId="horizontal-tabs-example">
      <TabList aria-label="Horizontal product tabs">
        <Tab>Programmable communications</Tab>
        <Tab disabled>Super network</Tab>
        <Tab id={selectedId}>Internet of things</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Heading as="h3" variant="heading30">Programmable communications</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Messaging</Heading>
              <Paragraph>Send and receive text messages from your app.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Voice</Heading>
              <Paragraph>Make, receive, and control calls using code.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Heading as="h3" variant="heading30">Super network</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Phone numbers</Heading>
              <Paragraph>Choose from local or global numbers, Short Codes, Alphanumeric Sender IDs, etc.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Interconnect</Heading>
              <Paragraph>Enable network-level security to protect communications.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Heading as="h3" variant="heading30">Internet of things</Heading>
          <Card>
            <Heading as="h5" variant="heading50">Internet of things</Heading>
            <Paragraph>Connect IoT devices to global cellular networks.</Paragraph>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};


render(
  <HorizontalTabsExample />
)
`.trim(),T=`
const FullWidthTabsExample = () => {
  const selectedId = useUID();
  return (
    <Tabs selectedId={selectedId} baseId="full-width-tabs-example" variant="full_width">
      <TabList aria-label="Full width product tabs">
        <Tab>Solutions</Tab>
        <Tab id={selectedId}>Account security</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Heading as="h3" variant="heading30">Solutions</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Flex</Heading>
              <Paragraph>Build with the world's most flexible cloud contact center.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Task Router</Heading>
              <Paragraph>Add intelligent task routing to assign tasks in your call center.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Heading as="h3" variant="heading30">Account security</Heading>
          <Card>
            <Heading as="h5" variant="heading50">Verify</Heading>
            <Paragraph>Verify your users with SMS, Voice, and email.</Paragraph>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

render(
  <FullWidthTabsExample />
)
`.trim(),m=`
const VerticalTabsExample = () => {
  const selectedId = useUID();
  return (
    <Tabs orientation="vertical" selectedId={selectedId} baseId="vertical-tabs-example">
      <TabList aria-label="Vertical product tabs">
        <Tab id={selectedId}>Developer tools</Tab>
        <Tab>Marketplace</Tab>
        <Tab>Solutions</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Heading as="h3" variant="heading30">Developer tools</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Studio</Heading>
              <Paragraph>Use a visual communications workflow builder for IVRs, reminders, etc.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Functions</Heading>
              <Paragraph>Create serverless functions for custom logic and integrations.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Heading as="h3" variant="heading30">Marketplace</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Add-ons</Heading>
              <Paragraph>Choose add-ons to expand the functionality of your app.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Channels</Heading>
              <Paragraph>Add Facebook Messenger channel.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Heading as="h3" variant="heading30">Solutions</Heading>
          <Card>
            <Heading as="h5" variant="heading50">Flex</Heading>
            <Paragraph>Build with the world's most flexible cloud contact center.</Paragraph>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};


render(
  <VerticalTabsExample />
)
`.trim(),y=`
const useButtonClickTabState = () => {
  const tab = useTabState();
  return {
    ...tab,
    baseId: 'state-hook-tab-example',
  };
};

const StateHookExample = () => {
  const {...tab} = useButtonClickTabState();
  return (
    <Tabs state={tab}>
      <TabList aria-label="State hook tabs">
      <Tab>Programmable communications</Tab>
      <Tab>Internet of things</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box marginBottom="space50">
            <Button variant="primary" onClick={() => tab.select('state-hook-tab-example-2')}>
              Go to internet of things tab
            </Button>
          </Box>
          <Heading as="h3" variant="heading30">Programmable communications</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Messaging</Heading>
              <Paragraph>Send and receive text messages from your app.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Voice</Heading>
              <Paragraph>Make, receive, and control calls using code.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Box marginBottom="space50">
            <Button variant="primary" onClick={() => tab.select('state-hook-tab-example-1')}>
              Go back to programmable communications tab
            </Button>
          </Box>
          <Heading as="h3" variant="heading30">Internet of things</Heading>
          <Card>
            <Heading as="h5" variant="heading50">Internet of things</Heading>
            <Paragraph>Connect IoT devices to global cellular networks.</Paragraph>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};


render(
  <StateHookExample />
)
`.trim();var w=t(40615),v=t(89564),f=!0;let P={title:"Tabs",package:"@twilio-paste/tabs",description:"Tabs are labeled controls that allow users to switch between multiple views within a page.",slug:"/components/tabs/"},C=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:k,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/tabs",storybookUrl:"/?path=/story/components-tabs--horizontal-tabs"}}}),k=[{value:"Guidelines",depth:2},{value:"About Tabs",depth:3},{value:"Accessibility",depth:3},{value:"Tabs vs. In Page Navigation",depth:3},{value:"Examples",depth:2},{value:"Horizontal Tabs",depth:3},{value:"Full-width Tabs",depth:3},{value:"Vertical Tabs",depth:3},{value:"Using state hooks",depth:3},{value:"Composition notes",depth:2},{value:"When to use Tabs",depth:2}],H=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},x={meta:P,getStaticProps:C,mdxHeadings:k},N=w.A;function I({components:e,...a}){return(0,n.yg)(N,{...x,...a,components:e,mdxType:"MDXLayout"},(0,n.yg)(H,{scope:{Tabs:h.tU,Tab:h.oz,TabList:h.wb,TabPanels:h.T2,TabPanel:h.Kp,useUID:b.GV,Heading:l.D,Card:d.Z,Paragraph:r.f,Stack:c.B},noInline:!0,mdxType:"LivePreview"},u),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About Tabs"),(0,n.yg)("p",null,"Tabs are labeled controls that allow users to switch between multiple views within a page. Tabs do not take the user to a new URL. To take users to a new URL, use ",(0,n.yg)("a",{parentName:"p",href:"/components/in-page-navigation"},"In Page Navigation"),"."),(0,n.yg)("p",null,"Panels within a set of Tabs should present different views of similar, parallel information. For example, ",(0,n.yg)("a",{parentName:"p",href:"https://www.twilio.com/docs/usage/api"},"these Twilio docs")," contain a block of code on the right side of the page with Tabs, allowing users to view the code in different languages. ",(0,n.yg)("a",{parentName:"p",href:"https://www.reddit.com/t/technology/"},"Reddit also uses tabs"),`, switching the user’s view between `,(0,n.yg)("strong",{parentName:"p"},"Posts"),", ",(0,n.yg)("strong",{parentName:"p"},"Communities"),", and ",(0,n.yg)("strong",{parentName:"p"},"Related Topics"),`. The Tabs in both of these examples control views; they don’t direct to a new page. Conversely, `,(0,n.yg)("a",{parentName:"p",href:"https://github.com/twilio-labs/paste"},"the Github website")," demonstrates how some interactions may seem like Tabs, but are actually in-page navigation. Clicking on one of the sections at the top, like ",(0,n.yg)("strong",{parentName:"p"},"Code")," or ",(0,n.yg)("strong",{parentName:"p"},"Pull Requests"),", changes the URL."),(0,n.yg)("p",null,"Distinguishing between the two components (Tabs and In Page Navigation) leads to an improved user experience by visually communicating that interacting will lead to different behaviors. Selecting the correct component based on your use case also gives users of assistive technologies a better idea of where the interaction will lead."),(0,n.yg)("p",null,`Choose Tabs when users don’t need to see content from multiple views simultaneously. When thinking through what type of content to put in your Tabs, remember that the content should be parallel across the board. What lives in one Tab should be a different view of what lives in another Tab.`),(0,n.yg)(p.z,{mdxType:"DetailText"},"Source:"," ",(0,n.yg)(i.Mz,{showExternal:!0,href:"https://www.nngroup.com/articles/tabs-used-right/",mdxType:"Anchor"},"Nielsen Norman Group")),(0,n.yg)("br",null),(0,n.yg)("p",null,"The Tabs component contains the following elements:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Tab"),": Clickable element that causes a selection within a tabset"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"TabPanel"),": Contains the content associated with the selected ",(0,n.yg)("inlineCode",{parentName:"li"},"Tab")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"TabList"),": A collection of ",(0,n.yg)("inlineCode",{parentName:"li"},"Tab"),"s"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"TabPanels"),": A collection of ",(0,n.yg)("inlineCode",{parentName:"li"},"TabPanel"),"s"),(0,n.yg)("li",{parentName:"ul"},"Tabset (or ",(0,n.yg)("inlineCode",{parentName:"li"},"Tabs"),"): Composition of ",(0,n.yg)("inlineCode",{parentName:"li"},"TabList")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"TabPanel"),"s")),(0,n.yg)("h3",null,"Accessibility"),(0,n.yg)("p",null,"A Tab should never contain an interactive element, as doing so makes it difficult for users of assistive technologies to focus or click on the Tabs. Interactive elements may live within the TabPanels."),(0,n.yg)("p",null,"When the user is focused on a tab in a TabList, the following keyboard interactions apply:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Horizontal Tabs: ",(0,n.yg)("inlineCode",{parentName:"li"},"Right")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"Left")," arrow keys move the user between Tabs and open the currently focused Tab's panel"),(0,n.yg)("li",{parentName:"ul"},"Vertical Tabs: ",(0,n.yg)("inlineCode",{parentName:"li"},"Up")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"Down")," arrow keys move between Tabs and open the currently focused Tab's panel"),(0,n.yg)("li",{parentName:"ul"},"If the currently focused Tab is disabled, the TabPanel does not open")),(0,n.yg)("h3",null,"Tabs vs. In Page Navigation"),(0,n.yg)("p",null,"Tabs are used to layer related pieces of information together and display one layer at a time on the same URL. Use Tabs to alternate between views within the same context. ",(0,n.yg)("a",{parentName:"p",href:"/components/in-page-navigation"},"In Page Navigation")," is a collection of anchors, rather than buttons. Use In Page Navigation to switch between different, related pages. Tabs replace the entire view based on the selected tab. In Page Navigation links navigate the user to a new page."),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Horizontal Tabs"),(0,n.yg)("p",null,`Use Horizontal Tabs in most cases, as they most realistically mimic a physical tab, and they catch the user’s attention because they live directly above the content.`),(0,n.yg)(H,{scope:{Tabs:h.tU,Tab:h.oz,TabList:h.wb,TabPanels:h.T2,TabPanel:h.Kp,useUID:b.GV,Heading:l.D,Card:d.Z,Paragraph:r.f,Stack:c.B},noInline:!0,mdxType:"LivePreview"},u),(0,n.yg)("h3",null,"Full-width Tabs"),(0,n.yg)("p",null,"Use full-width Tabs to fill a parent element with a set width. Each Tab will equally expand and fit the width of the containing element. Full-width Tabs are recommended for compact spaces."),(0,n.yg)(H,{scope:{Tabs:h.tU,Tab:h.oz,TabList:h.wb,TabPanels:h.T2,TabPanel:h.Kp,useUID:b.GV,Heading:l.D,Card:d.Z,Paragraph:r.f,Stack:c.B},noInline:!0,mdxType:"LivePreview"},T),(0,n.yg)("h3",null,"Vertical Tabs"),(0,n.yg)("p",null,"Use Vertical Tabs when the TabPanels are tall and narrow, or when users tend to swap views often as they scroll through the content."),(0,n.yg)(H,{scope:{Tabs:h.tU,Tab:h.oz,TabList:h.wb,TabPanels:h.T2,TabPanel:h.Kp,useUID:b.GV,Heading:l.D,Card:d.Z,Paragraph:r.f,Stack:c.B},noInline:!0,mdxType:"LivePreview"},m),(0,n.yg)("h3",null,"Using state hooks"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"state")," prop allows you to hook into, and keep in sync the state of the Tabs and the state of your application."),(0,n.yg)("p",null,"This will allow you to set the initial state and merge the returned state from the hook with the application state, and keep it in sync with user interactions."),(0,n.yg)("p",null,"You could use this if you want to add functionality to a Button within the Tab content. In the example below we're using the ",(0,n.yg)("inlineCode",{parentName:"p"},"select")," function from the Tab state to advance to the next Tab, and go back to the previous Tab."),(0,n.yg)(H,{scope:{useTabState:g.i2,Tabs:h.tU,Tab:h.oz,TabList:h.wb,TabPanels:h.T2,TabPanel:h.Kp,Button:s.$n,Paragraph:r.f,Heading:l.D,Card:d.Z,Box:o.az,Stack:c.B},noInline:!0,language:"jsx",mdxType:"LivePreview"},y),(0,n.yg)("h2",null,"Composition notes"),(0,n.yg)("p",null,"Don't add interactive elements to a Tab, as doing so makes it difficult for users of assistive technologies to focus or click on the Tabs. Interactive elements may live within the TabPanels."),(0,n.yg)("p",null,"Tab labels should be short to improve readability. Users should be able to easily scan the Tabs and know what type of content to expect. Try to keep labels to 1-2 words each."),(0,n.yg)("p",null,"Labels should be parallel parts of speech. For example, all nouns (Documents, Images, Downloads)."),(0,n.yg)("h2",null,"When to use Tabs"),(0,n.yg)(v.l,{mdxType:"DoDont"},(0,n.yg)(v.Do,{title:"Do",body:"Use Tabs for displaying different views of similar information, such as one same block of code shown in different languages.",preview:!1,mdxType:"Do"}),(0,n.yg)(v.w,{title:"Don't",body:"Don’t use Tabs when the selection of a new Tab will direct the user to a new URL.",preview:!1,mdxType:"Dont"})),(0,n.yg)(v.l,{mdxType:"DoDont"},(0,n.yg)(v.Do,{title:"Do",body:"Keep Tab labels concise.",preview:!1,mdxType:"Do"}),(0,n.yg)(v.w,{title:"Don't",body:"Don’t use more than 2 words in a Tab label, unless absolutely necessary.",preview:!1,mdxType:"Dont"})))}I.isMDXComponent=!0},40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>u});var n=t(72387),i=t(76127),o=t(95669),s=t.n(o),r=t(81278);t(55729);var l=t(10511),d=t(43084),c=t(10732),h=t(62887),g=t(63437),p=t(38992);let b={h1:()=>null},u=({children:e,meta:a,navigationData:t,data:o,mdxHeadings:u,pageHeaderData:{categoryRoute:T,githubUrl:m,storybookUrl:y}})=>{let w=a.title?`${a.title} - ${p.DZ.TITLE}`:p.DZ.TITLE,v=a.description||p.DZ.DESCRIPTION,f=(0,r.useRouter)();return(0,n.FD)(g.T,{navigationData:t,children:[(0,n.FD)(s(),{children:[(0,n.Y)("title",{children:w}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${f.pathname}`}),(0,n.Y)("meta",{name:"description",content:v},"description")]}),(0,n.FD)(l.s,{children:[(0,n.Y)(h.c,{categoryRoute:T,githubUrl:m,storybookUrl:y,data:o}),(0,n.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(c.i,{data:u}),(0,n.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(d.Q,{componentOverrides:a.package?b:{},children:e})})]})]})]})}},51895:(e,a,t)=>{"use strict";t.d(a,{z:()=>o});var n=t(76127),i=t(55729),o=i.forwardRef(({element:e="DETAIL_TEXT",as:a="div",children:t,marginTop:o="space30",...s},r)=>i.createElement(n.az,{as:a,ref:r,element:e,...(0,n.x8)(s),marginTop:o,color:"colorTextWeak",fontSize:"fontSize20",lineHeight:"lineHeight20",fontWeight:"fontWeightMedium"},t));o.displayName="DetailText"},98300:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tabs",function(){return t(26940)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=98300)),_N_E=e.O()}]);