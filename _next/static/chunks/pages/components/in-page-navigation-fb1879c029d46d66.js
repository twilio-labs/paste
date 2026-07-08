(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5269],{40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>u});var n=t(72387),i=t(76127),o=t(95669),g=t.n(o),l=t(81278);t(55729);var s=t(10511),r=t(43084),p=t(10732),c=t(62887),d=t(63437),v=t(38992);let h={h1:()=>null},u=({children:e,meta:a,navigationData:t,data:o,mdxHeadings:u,pageHeaderData:{categoryRoute:m,githubUrl:I,storybookUrl:y}})=>{let N=a.title?`${a.title} - ${v.DZ.TITLE}`:v.DZ.TITLE,P=a.description||v.DZ.DESCRIPTION,f=(0,l.useRouter)();return(0,n.FD)(d.T,{navigationData:t,children:[(0,n.FD)(g(),{children:[(0,n.Y)("title",{children:N}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${f.pathname}`}),(0,n.Y)("meta",{name:"description",content:P},"description")]}),(0,n.FD)(s.s,{children:[(0,n.Y)(c.c,{categoryRoute:m,githubUrl:I,storybookUrl:y,data:o}),(0,n.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(p.i,{data:u}),(0,n.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(r.Q,{componentOverrides:a.package?h:{},children:e})})]})]})]})}},48192:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>c,default:()=>y,getStaticProps:()=>v,mdxHeadings:()=>h,meta:()=>d}),t(55729);var n=t(11885),i=t(62498),o=t(76127),g=t(89564);let l=`
const BasicInPageNavigation = () => {

  return (
    <InPageNavigation aria-label="get started">
      <InPageNavigationItem href="#" currentPage>
        Super SIM
      </InPageNavigationItem>
      <InPageNavigationItem href="#">Programmable Wireless</InPageNavigationItem>
    </InPageNavigation>
  );
};

render(
  <BasicInPageNavigation />
)
`.trim(),s=`
const FullWidthInPageNavigation = () => {

  return (
    <InPageNavigation aria-label="privacy" variant="fullWidth">
      <InPageNavigationItem href="#" currentPage>
        Home
      </InPageNavigationItem>
      <InPageNavigationItem href="#">Detection</InPageNavigationItem>
      <InPageNavigationItem href="#">Settings</InPageNavigationItem>
    </InPageNavigation>
  );
};

render(
  <FullWidthInPageNavigation />
)
`.trim(),r=`
const VerticalInPageNavigation = () => {
  
  return (
    <Box marginRight="space110">
      <InPageNavigation aria-label="privacy" orientation="vertical">
        <InPageNavigationItem href="#" currentPage>
          Space name
        </InPageNavigationItem>
        <InPageNavigationItem href="#">Connection policy</InPageNavigationItem>
        <InPageNavigationItem href="#">Labels</InPageNavigationItem>
      </InPageNavigation>
    </Box>
  );
};

render(
  <VerticalInPageNavigation />
)
`.trim();var p=t(40615),c=!0;let d={title:"In Page Navigation",package:"@twilio-paste/in-page-navigation",description:"In Page Navigation is a set of links that lets users navigate between related pages.",slug:"/components/in-page-navigation/"},v=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:h,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/in-page-navigation",storybookUrl:"/?path=/story/components-in-page-navigation--default"}}}),h=[{value:"Guidelines",depth:2},{value:"About In Page Navigation",depth:3},{value:"In Page Navigation vs Tabs",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Horizontal In Page Navigation",depth:3},{value:"Full width In Page Navigation",depth:3},{value:"Vertical In Page Navigation",depth:3},{value:"Composition notes",depth:2}],u=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},m={meta:d,getStaticProps:v,mdxHeadings:h},I=p.A;function y({components:e,...a}){return(0,n.yg)(I,{...m,...a,components:e,mdxType:"MDXLayout"},(0,n.yg)(u,{scope:{InPageNavigation:i.J,InPageNavigationItem:i.i},noInline:!0,mdxType:"LivePreview"},l),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About In Page Navigation"),(0,n.yg)("p",null,"In Page Navigation allows users to navigate between related pages using a styled set of links. Each In Page Navigation Item is an anchor that links to a related page. Each of the related pages should have its own In Page Navigation component so that users can easily navigate back and forth within a set of related pages."),(0,n.yg)("p",null,"If you need to switch between multiple views within a single page without taking users to a new URL, use ",(0,n.yg)("a",{parentName:"p",href:"/components/tabs"},"Tabs"),"."),(0,n.yg)("p",null,"In Page Navigation contains the following elements:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"InPageNavigationItem"),": Clickable element that navigates to a new URL"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"InPageNavigation"),": A collection of ",(0,n.yg)("inlineCode",{parentName:"li"},"InPageNavigationItem"),"s")),(0,n.yg)("h3",null,"In Page Navigation vs Tabs"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/components/tabs"},"Tabs")," are used to layer related pieces of information together and display one layer at a time on the same URL. Use Tabs to alternate between views within the same context. Tabs are especially useful when each view presents similar, parallel information, like code in different languages or data visualization in different formats."),(0,n.yg)("p",null,"In Page Navigation is a collection of anchors, rather than buttons. Use In Page Navigation to switch between different but related pages, especially when there are actions to take on each page."),(0,n.yg)("h3",null,"Accessibility"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Each In Page Navigation must have a unique label. To add the label, add the ",(0,n.yg)("inlineCode",{parentName:"li"},"aria-label")," prop to the ",(0,n.yg)("inlineCode",{parentName:"li"},"<InPageNavigation>"),` tag. Omit the term 'navigation'—it’s redundant since the role is already defined as 'navigation'.`),(0,n.yg)("li",{parentName:"ul"},"Each In Page Navigation must specify the selected page. To specify which page is selected, set the ",(0,n.yg)("inlineCode",{parentName:"li"},"currentPage")," prop to the respective ",(0,n.yg)("inlineCode",{parentName:"li"},"<InPageNavigationItem>"),". Doing so will set ",(0,n.yg)("inlineCode",{parentName:"li"},'aria-current="page"')," on that link."),(0,n.yg)("li",{parentName:"ul"},"To interact with In Page Navigation using the keyboard, use the tab key to navigate between items and the enter key to select an item.")),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Horizontal In Page Navigation"),(0,n.yg)("p",null,"Use Horizontal In Page Navigation in most cases."),(0,n.yg)(u,{scope:{InPageNavigation:i.J,InPageNavigationItem:i.i},noInline:!0,mdxType:"LivePreview"},l),(0,n.yg)("h3",null,"Full width In Page Navigation"),(0,n.yg)("p",null,"Use full-width In Page Navigation to fit the width of a containing element. Each item will expand equally to the same width. The full-width variant is recommended for compact spaces."),(0,n.yg)(u,{scope:{InPageNavigation:i.J,InPageNavigationItem:i.i},noInline:!0,mdxType:"LivePreview"},s),(0,n.yg)("h3",null,"Vertical In Page Navigation"),(0,n.yg)("p",null,"Use Vertical In Page Navigation when creating a second layer of hierarchy underneath a horizontal or full-width In Page Navigation."),(0,n.yg)("p",null,"Place this vertical In Page Navigation on the left side of the page, and wrap it in a ",(0,n.yg)("a",{parentName:"p",href:"/primitives/box"},"Box")," with a right margin of ",(0,n.yg)("inlineCode",{parentName:"p"},"space-110"),"."),(0,n.yg)(u,{scope:{InPageNavigation:i.J,InPageNavigationItem:i.i,Box:o.az},noInline:!0,mdxType:"LivePreview"},r),(0,n.yg)("h2",null,"Composition notes"),(0,n.yg)("p",null,"Don't add interactive elements to an In Page Navigation item since it makes it difficult for users of assistive technologies to focus or click on an item."),(0,n.yg)("p",null,"In Page Navigation labels should be short to improve readability. Users should be able to easily scan the items and know what type of content to expect. Try to keep labels to 1-2 words each."),(0,n.yg)("p",null,"Labels should be parallel parts of speech. For example, all nouns (Documents, Images, Downloads)."),(0,n.yg)(g.l,{mdxType:"DoDont"},(0,n.yg)(g.Do,{title:"Do",body:"Use In Page Navigation for navigating users to different but related pages, such as different pages of settings.",center:!0,mdxType:"Do"}),(0,n.yg)(g.w,{title:"Don't",body:"Don’t use In Page Navigation when swapping between views on the same page. Use Tabs instead.",center:!0,mdxType:"Dont"})),(0,n.yg)(g.l,{mdxType:"DoDont"},(0,n.yg)(g.Do,{title:"Do",body:"Keep In Page Navigation labels concise.",center:!0,mdxType:"Do"}),(0,n.yg)(g.w,{title:"Don't",body:"Don’t use more than 2 words in an In Page Navigation label, unless absolutely necessary.",center:!0,mdxType:"Dont"})))}y.isMDXComponent=!0},68752:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/in-page-navigation",function(){return t(48192)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=68752)),_N_E=e.O()}]);