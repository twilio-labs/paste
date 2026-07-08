(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8146],{40615:(e,o,a)=>{"use strict";a.d(o,{A:()=>y});var l=a(72387),t=a(76127),r=a(95669),i=a.n(r),n=a(81278);a(55729);var s=a(10511),d=a(43084),x=a(10732),p=a(62887),c=a(63437),g=a(38992);let u={h1:()=>null},y=({children:e,meta:o,navigationData:a,data:r,mdxHeadings:y,pageHeaderData:{categoryRoute:h,githubUrl:m,storybookUrl:F}})=>{let b=o.title?`${o.title} - ${g.DZ.TITLE}`:g.DZ.TITLE,k=o.description||g.DZ.DESCRIPTION,w=(0,n.useRouter)();return(0,l.FD)(c.T,{navigationData:a,children:[(0,l.FD)(i(),{children:[(0,l.Y)("title",{children:b}),(0,l.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${w.pathname}`}),(0,l.Y)("meta",{name:"description",content:k},"description")]}),(0,l.FD)(s.s,{children:[(0,l.Y)(p.c,{categoryRoute:h,githubUrl:m,storybookUrl:F,data:r}),(0,l.FD)(t.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,l.Y)(x.i,{data:y}),(0,l.Y)(t.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,l.Y)(d.Q,{componentOverrides:o.package?u:{},children:e})})]})]})]})}},42188:(e,o,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/flex",function(){return a(67996)}])},67996:(e,o,a)=>{"use strict";a.r(o),a.d(o,{__N_SSG:()=>d,default:()=>h,getStaticProps:()=>p,mdxHeadings:()=>c,meta:()=>x}),a(55729);var l=a(11885),t=a(76127),r=a(71853),i=a(50010),n=a(89564),s=a(40615),d=!0;let x={title:"Flex - Layout",package:"@twilio-paste/flex",description:"Flex is a layout component that allows you to build flexbox based elements and layouts. These flexible elements and layouts allow your components to adapt to the available space or screen size.",slug:"/components/flex/"},p=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:c,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/layout/flex",storybookUrl:"/?path=/story/layout-flex--flex-options"}}}),c=[{value:"Guidelines",depth:2},{value:"About Flex",depth:3},{value:"Accessibility",depth:4},{value:"Examples",depth:2},{value:"Flex Properties",depth:4},{value:"Vertical Property",depth:4},{value:"Wrap Property",depth:4},{value:"Vertical Alignment Properties",depth:4},{value:"Horizontal Alignment Properties",depth:4},{value:"Composition Notes",depth:3},{value:"When to use Flex",depth:3}],g=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,l.yg)("div",e)},u={meta:x,getStaticProps:p,mdxHeadings:c},y=s.A;function h({components:e,...o}){return(0,l.yg)(y,{...u,...o,components:e,mdxType:"MDXLayout"},(0,l.yg)(g,{scope:{Box:t.az,Flex:r.s},language:"jsx",mdxType:"LivePreview"},`<Flex>
    <Flex>
      <Box
        backgroundColor="colorBackgroundPrimaryWeak"
        padding="space40"
      >
        Left area
      </Box>
    </Flex>
    <Flex grow>
      <Box
        backgroundColor="colorBackgroundPrimaryWeaker"
        padding="space40"
        width="100%"
      >
        Right area
      </Box>
    </Flex>
  </Flex>`),(0,l.yg)("h2",null,"Guidelines"),(0,l.yg)(i.f,{mdxType:"Paragraph"},x.description),(0,l.yg)("h3",null,"About Flex"),(0,l.yg)("p",null,`Flex utilizes a simplified flexbox API that allows you more efficient ways to layout, align, and
distribute space among elements in a container. The Flex API helps take the confusion out of using
flexbox CSS properties, by giving you simple methods to change properties like flex,
flex-direction, flex-wrap, and so on.`),(0,l.yg)("p",null,`Flexible elements can adapt to fill space within the layout. This allows Flex to work well for
product layouts or elements that change orientation, resize, stretch, or shrink.`),(0,l.yg)("p",null,`The Flex API was created because flexbox can be a difficult CSS property to wrap your head around,
which leads to confusion on how it all works. If you’d like to learn more about flexbox, the
learning resources below provide further information:`),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"},"MDN Learn Flexbox")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},"CSS Tricks Guide to Flexbox"))),(0,l.yg)("h4",null,"Accessibility"),(0,l.yg)("p",null,`The Flex component is an all purpose component. By default, it has no accessibility concerns. If
you use the Flex as a custom element, it is up to you to manage the resulting accessibility implications.`),(0,l.yg)("h2",null,"Examples"),(0,l.yg)(g,{scope:{Box:t.az,Flex:r.s},language:"jsx",mdxType:"LivePreview"},`<Flex>
    <Flex>
      <Box
        backgroundColor="colorBackgroundPrimaryWeak"
        padding="space40"
      >
        Left area
      </Box>
    </Flex>
    <Flex grow>
      <Box
        backgroundColor="colorBackgroundPrimaryWeaker"
        padding="space40"
        width="100%"
      >
        Right area
      </Box>
    </Flex>
  </Flex>`),(0,l.yg)("h4",null,"Flex Properties"),(0,l.yg)(g,{scope:{Box:t.az,Flex:r.s},language:"jsx",mdxType:"LivePreview"},`<Flex>
    <Flex grow shrink basis="1px">
      <Box
        backgroundColor="colorBackgroundPrimaryWeak"
        padding="space40"
        width="100%"
      >
        Left area
      </Box>
    </Flex>
    <Flex grow shrink basis="1px">
      <Box
        backgroundColor="colorBackgroundPrimaryWeaker"
        padding="space40"
        width="100%"
      >
        Right area
      </Box>
    </Flex>
  </Flex>`),(0,l.yg)("h4",null,"Vertical Property"),(0,l.yg)(g,{scope:{Box:t.az,Flex:r.s},language:"jsx",mdxType:"LivePreview"},`<Flex vertical>
    <Flex grow>
      <Box
        backgroundColor="colorBackgroundPrimaryWeak"
        padding="space40"
        width="100%"
      >
        Left area
      </Box>
    </Flex>
    <Flex grow>
      <Box
        backgroundColor="colorBackgroundPrimaryWeaker"
        padding="space40"
        width="100%"
      >
        Right area
      </Box>
    </Flex>
  </Flex>`),(0,l.yg)("h4",null,"Wrap Property"),(0,l.yg)(g,{scope:{Box:t.az,Flex:r.s},language:"jsx",mdxType:"LivePreview"},`<Flex wrap>
    <Flex basis="800px">
      <Box
        backgroundColor="colorBackgroundPrimaryWeak"
        padding="space40"
        width="100%"
      >
        Left area
      </Box>
    </Flex>
    <Flex>
      <Box
        backgroundColor="colorBackgroundPrimaryWeaker"
        padding="space40"
        width="100%"
      >
        Right area
      </Box>
    </Flex>
  </Flex>`),(0,l.yg)("h4",null,"Vertical Alignment Properties"),(0,l.yg)(g,{scope:{Box:t.az,Flex:r.s},language:"jsx",mdxType:"LivePreview"},`<Flex vAlignContent="center">
    <Flex grow>
      <Box
        backgroundColor="colorBackgroundPrimaryWeak"
        padding="space40"
        width="100%"
      >
        Left area
      </Box>
    </Flex>
    <Flex grow>
      <Box
        backgroundColor="colorBackgroundPrimaryWeaker"
        padding="space40"
        width="100%"
        height="size10"
      >
        Right area
      </Box>
    </Flex>
  </Flex>`),(0,l.yg)("h4",null,"Horizontal Alignment Properties"),(0,l.yg)(g,{scope:{Box:t.az,Flex:r.s},language:"jsx",mdxType:"LivePreview"},`<Flex hAlignContent="center" vertical>
    <Flex>
      <Box
        backgroundColor="colorBackgroundPrimaryWeak"
        padding="space40"
        width="100%"
      >
        Left area
      </Box>
    </Flex>
    <Flex>
      <Box
        backgroundColor="colorBackgroundPrimaryWeaker"
        padding="space40"
        width="size30"
      >
        Right area
      </Box>
    </Flex>
  </Flex>`),(0,l.yg)("h3",null,"Composition Notes"),(0,l.yg)("p",null,`The Flex component is used to compose flexible layout experiences. Let's look at an example
where we need to build a flexible content layout with two sidebars: its has a left sidebar,
a content area, and a right sidebar. Here's how we’ll compose the flexible layout using Flex:`),(0,l.yg)(g,{scope:{Box:t.az,Flex:r.s},language:"jsx",mdxType:"LivePreview"},`<Flex>
    <Flex>
      <Box
        backgroundColor="colorBackgroundPrimaryWeak"
        padding="space40"
        height="size20"
      >
        Left sidebar area
      </Box>
    </Flex>
    <Flex grow>
      <Box
        backgroundColor="colorBackgroundPrimaryWeaker"
        padding="space40"
        width="100%"
        height="size20"
      >
        Content area
      </Box>
    </Flex>
    <Flex>
      <Box
        backgroundColor="colorBackgroundPrimaryWeak"
        padding="space40"
        height="size20"
      >
        Right sidebar area
      </Box>
    </Flex>
  </Flex>`),(0,l.yg)("h3",null,"When to use Flex"),(0,l.yg)("p",null,"The Flex component should be used when a flexible layout is needed with a page layout or custom component layout."),(0,l.yg)(n.l,{mdxType:"DoDont"},(0,l.yg)(n.Do,{title:"Do",body:"Use Flex to layout your page or custom component.",preview:!1,mdxType:"Do"}),(0,l.yg)(n.w,{title:"Don't",body:"Use Flex to set margins or padding within layouts and components.",preview:!1,mdxType:"Dont"})),(0,l.yg)(n.l,{mdxType:"DoDont"},(0,l.yg)(n.Do,{title:"Do",body:"Use Flex to build responsive experiences.",preview:!1,mdxType:"Do"}),(0,l.yg)(n.w,{title:"Don't",body:"Use inline CSS or classNames to add styles that Flex can provide.",preview:!1,mdxType:"Dont"})))}h.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=42188)),_N_E=e.O()}]);