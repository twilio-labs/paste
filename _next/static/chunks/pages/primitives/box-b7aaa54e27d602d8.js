(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7908],{3910:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/primitives/box",function(){return t(16600)}])},16600:(e,o,t)=>{"use strict";t.r(o),t.d(o,{__N_SSG:()=>l,default:()=>g,getStaticProps:()=>p,mdxHeadings:()=>c,meta:()=>d}),t(55729);var a=t(11885),n=t(76127),s=t(54652),i=t(89564),r=t(40615),l=!0;let d={title:"Box",package:"@twilio-paste/box",description:"The Box component is one of the pillars of our system. It can be any HTML element and can receive many of our token values as props. We use Box to build most of our other components.",slug:"/primitives/box/"},p=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:c,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.PRIMITIVES,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/primitives/box",storybookUrl:"/?path=/story/primitives-box--default"}}}),c=[{value:"Guidelines",depth:2},{value:"About Box",depth:3},{value:"Accessibility",depth:4},{value:"Examples",depth:3},{value:"Tokens as props",depth:4},{value:"Tokens as pseudo-class props",depth:4},{value:"Composition Notes",depth:3},{value:"When to use Box",depth:3}],u=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},m={meta:d,getStaticProps:p,mdxHeadings:c},y=r.A;function g({components:e,...o}){return(0,a.yg)(y,{...m,...o,components:e,mdxType:"MDXLayout"},(0,a.yg)(u,{scope:{Box:n.az},language:"jsx",mdxType:"LivePreview"},`<Box
  as="article"
  backgroundColor="colorBackgroundBody"
  padding="space60"
>
Parent box on the hill side
  <Box
    backgroundColor="colorBackgroundSuccessWeakest"
    display="inline-block"
    padding="space40"
  >
    nested box 1 made out of ticky tacky
  </Box>
</Box>`),(0,a.yg)("h2",null,"Guidelines"),(0,a.yg)("p",null,`The Box component is one of the pillars of our system. It can be any HTML element
and can receive many of our token values as props. We use Box to build most of
our other components.`),(0,a.yg)("h3",null,"About Box"),(0,a.yg)("p",null,"All HTML elements can be considered as ",(0,a.yg)("strong",{parentName:"p"},"boxes"),". In CSS, the term ",(0,a.yg)("strong",{parentName:"p"},'"box model"'),` is used when
talking about design and layout. It consists of: margins, borders, padding, and the actual content.`),(0,a.yg)("p",null,`The Box component is inspired from the “box model". It is a simple wrapper component
that takes tokens instead of using CSS. The limited but scoped set of tokens allowed
on Box act as guardrails. They provide quick and direct access to the Twilio design
language while preventing any other value. We prevent other values to protect our
product from inconsistent and inaccessible designs.`),(0,a.yg)("p",null,`For this reason, we can use the Box component to build out most of the interfaces at
Twilio. Using this component will make our products resilient to design changes and
themeable.`),(0,a.yg)("p",null,"The Box component takes original inspiration from ",(0,a.yg)("a",{parentName:"p",href:"https://rebassjs.org/"},"RebassJs")," and is powered by ",(0,a.yg)("a",{parentName:"p",href:"https://styled-system.com/"},"Styled System"),". The pseudo class functionality was inspired by and mimics ",(0,a.yg)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra UI"),"."),(0,a.yg)("h4",null,"Accessibility"),(0,a.yg)("p",null,`The Box component is an all purpose component. By default, it has no accessibility
concerns. If you use the Box as a custom element, it is up to you to manage the
resulting accessibility implications.`),(0,a.yg)(s.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,a.yg)(s.wz,{mdxType:"CalloutText"},"Be sure to use the ",(0,a.yg)("strong",null,"as")," prop to select semantically meaningful HTML elements. By default the Box component renders as a ",(0,a.yg)("strong",null,"div")," which doesn’t provide much meaning to the user.")),(0,a.yg)("h3",null,"Examples"),(0,a.yg)("h4",null,"Tokens as props"),(0,a.yg)(u,{scope:{Box:n.az},language:"jsx",mdxType:"LivePreview"},`<Box
  as="article"
  backgroundColor="colorBackgroundBody"
  padding="space60"
>
Parent box on the hill side
  <Box
    backgroundColor="colorBackgroundSuccessWeakest"
    display="inline-block"
    padding="space40"
  >
    nested box 1 made out of ticky tacky
  </Box>
  <Box
    backgroundColor="colorBackgroundPrimaryWeak"
    display="inline-block"
    padding="space40"
  >
    Nested box 2 may look the same
  </Box>
</Box>`),(0,a.yg)("h4",null,"Tokens as pseudo-class props"),(0,a.yg)("p",null,"To view the full list of pseudo-class props, check the ",(0,a.yg)("a",{parentName:"p",href:"/primitives/box#props"},"props table"),"."),(0,a.yg)(u,{scope:{Box:n.az},language:"jsx",mdxType:"LivePreview"},`<Box
  backgroundColor="colorBackgroundPrimaryWeak"
  padding="space60"
  transition="all 200ms ease-in"
  _hover={{padding: "space30", backgroundColor: "colorBackgroundPrimaryWeakest", cursor: "pointer"}}
>
Hover over me!
</Box>`),(0,a.yg)("h3",null,"Composition Notes"),(0,a.yg)("p",null,`The Box component is used to compose other experiences. If you imagine everything on
a webpage as a Box, you can see how they all come together. Let's assume we need to
build a modal component: it has a header, a body and a footer. Here's how we’ll
compose the modal using Box:`),(0,a.yg)(u,{scope:{Box:n.az},language:"jsx",mdxType:"LivePreview"},`<Box
  overflow="hidden"
  borderRadius="borderRadius20"
  borderStyle="solid"
  borderWidth="borderWidth10"
  borderColor="colorBorderPrimaryWeak"
  >
  <Box backgroundColor="colorBackgroundPrimaryWeak" padding="space40">
    Header area
  </Box>
  <Box backgroundColor="colorBackgroundPrimaryWeakest" padding="space40">
    Body area
    <Box
      width="size20"
      marginTop="space30"
      marginBottom="space30"
      padding="space30"
    >
      An inner box with margin and padding
    </Box>
  </Box>
  <Box backgroundColor="colorBackgroundPrimaryWeak" padding="space40">
    Footer area
  </Box>
</Box>`),(0,a.yg)("h3",null,"When to use Box"),(0,a.yg)("p",null,`The Paste component library aims to cover the widest range of base use-cases.
Sometimes, product requirements are more specific than what is offered here.
When no other component in Paste works, use the Box component to build
new experiences.`),(0,a.yg)("p",null,`Be wary of building slightly different versions of existing Paste components.
If what you need is only a little different, try to constrain the design into
one of our provided solutions. This will allow you to leverage more of our
system and reduce your maintenance costs. On the surface our components may
look simple or restrictive. They are often limited for very specific reasons,
such as accessibility.`),(0,a.yg)(i.l,{mdxType:"DoDont"},(0,a.yg)(i.Do,{title:"Do",body:"Use Box to build new components and experiences.",preview:!1,mdxType:"Do"}),(0,a.yg)(i.w,{title:"Don't",body:"Use Box to build slightly different versions of existing Paste components.",preview:!1,mdxType:"Dont"})),(0,a.yg)(i.l,{mdxType:"DoDont"},(0,a.yg)(i.Do,{title:"Do",body:"Use Box to layout your page or to apply padding to your components.",preview:!1,mdxType:"Do"}),(0,a.yg)(i.w,{title:"Don't",body:"Use inline CSS, the CSS Cascade, or classNames to add styles that Box can provide.",preview:!1,mdxType:"Dont"})),(0,a.yg)(i.l,{mdxType:"DoDont"},(0,a.yg)(i.Do,{title:"Do",body:"Use Box with an 'as' prop to style custom HTML elements with tokens.",preview:!1,mdxType:"Do"}),(0,a.yg)(i.w,{title:"Don't",body:"Use HTML elements for functionality covered by the Box component.",preview:!1,mdxType:"Dont"})))}g.isMDXComponent=!0},40615:(e,o,t)=>{"use strict";t.d(o,{A:()=>g});var a=t(72387),n=t(76127),s=t(95669),i=t.n(s),r=t(81278);t(55729);var l=t(10511),d=t(43084),p=t(10732),c=t(62887),u=t(63437),m=t(38992);let y={h1:()=>null},g=({children:e,meta:o,navigationData:t,data:s,mdxHeadings:g,pageHeaderData:{categoryRoute:h,githubUrl:x,storybookUrl:b}})=>{let B=o.title?`${o.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,k=o.description||m.DZ.DESCRIPTION,v=(0,r.useRouter)();return(0,a.FD)(u.T,{navigationData:t,children:[(0,a.FD)(i(),{children:[(0,a.Y)("title",{children:B}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${v.pathname}`}),(0,a.Y)("meta",{name:"description",content:k},"description")]}),(0,a.FD)(l.s,{children:[(0,a.Y)(c.c,{categoryRoute:h,githubUrl:x,storybookUrl:b,data:s}),(0,a.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,a.Y)(p.i,{data:g}),(0,a.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,a.Y)(d.Q,{componentOverrides:o.package?y:{},children:e})})]})]})]})}}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=3910)),_N_E=e.O()}]);