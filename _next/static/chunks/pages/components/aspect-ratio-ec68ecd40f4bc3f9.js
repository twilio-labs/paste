(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8329],{33272:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/aspect-ratio",function(){return o(97795)}])},40615:(e,t,o)=>{"use strict";o.d(t,{A:()=>g});var i=o(72387),a=o(76127),s=o(95669),r=o.n(s),n=o(81278);o(55729);var d=o(10511),l=o(43084),c=o(10732),p=o(62887),h=o(63437),u=o(38992);let m={h1:()=>null},g=({children:e,meta:t,navigationData:o,data:s,mdxHeadings:g,pageHeaderData:{categoryRoute:y,githubUrl:b,storybookUrl:w}})=>{let x=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,v=t.description||u.DZ.DESCRIPTION,f=(0,n.useRouter)();return(0,i.FD)(h.T,{navigationData:o,children:[(0,i.FD)(r(),{children:[(0,i.Y)("title",{children:x}),(0,i.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${f.pathname}`}),(0,i.Y)("meta",{name:"description",content:v},"description")]}),(0,i.FD)(d.s,{children:[(0,i.Y)(p.c,{categoryRoute:y,githubUrl:b,storybookUrl:w,data:s}),(0,i.FD)(a.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,i.Y)(c.i,{data:g}),(0,i.Y)(a.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,i.Y)(l.Q,{componentOverrides:t.package?m:{},children:e})})]})]})]})}},97795:(e,t,o)=>{"use strict";o.r(t),o.d(t,{__N_SSG:()=>l,default:()=>y,getStaticProps:()=>p,mdxHeadings:()=>h,meta:()=>c}),o(55729);var i=o(11885),a=o(4073),s=o(59508),r=o(76127),n=o(89564),d=o(40615),l=!0;let c={title:"Aspect Ratio - Layout",package:"@twilio-paste/aspect-ratio",description:"The Aspect Ratio layout component is used to embed images, video, media, components, or other HTML elements. It prevents skewing, cropping, etc.",slug:"/components/aspect-ratio/"},p=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:h,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/layout/aspect-ratio",storybookUrl:"/?path=/story/layout-aspect-ratio--default"}}}),h=[{value:"Guidelines",depth:2},{value:"About Aspect Ratio",depth:3},{value:"Composition Notes",depth:2},{value:"When to use Aspect Ratio",depth:3}],u=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",e)},m={meta:c,getStaticProps:p,mdxHeadings:h},g=d.A;function y({components:e,...t}){return(0,i.yg)(g,{...m,...t,components:e,mdxType:"MDXLayout"},(0,i.yg)(u,{scope:{AspectRatio:s.g,Box:r.az},language:"jsx",mdxType:"LivePreview"},`<Box
  padding="space30"
  maxWidth="size60"
  borderColor="colorBorderWeak"
  borderStyle="solid"
  borderWidth="borderWidth10"
>
  <AspectRatio ratio="16:9">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/UBFDdTIYZ6Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </AspectRatio>
</Box>`),(0,i.yg)("h2",null,"Guidelines"),(0,i.yg)("h3",null,"About Aspect Ratio"),(0,i.yg)("p",null,`The Aspect Ratio layout component dynamically modifies the height of an element based on its
current width to match a width-to-height ratio. For example, a 4:3 ratio would make
an element with a width of 400px have a height of 300px. This updates in real time
when you resize the screen.`),(0,i.yg)("h2",null,"Composition Notes"),(0,i.yg)("p",null,`Aspect Ratio must contain exactly one child element. The child element should be sized
fully to the Aspect Ratio bounding box so that it resizes correctly. One way of achieving
this is using an absolutely positioned `,(0,i.yg)("a",{parentName:"p",href:"/primitives/box"},"Box primitive"),"."),(0,i.yg)("p",null,`Be considerate of smaller devices when using this component. If necessary, you can
modify the aspect ratio property at certain media query breakpoints.`),(0,i.yg)("h3",null,"When to use Aspect Ratio"),(0,i.yg)("p",null,"Aspect Ratio can be used to embed images and videos."),(0,i.yg)("p",null,`Use Aspect Ratio to make sure images and videos are scaled correctly on
displays of various sizes. For example, you can use Aspect Ratio when a
customer needs to see a preview of an uploaded document.`),(0,i.yg)(u,{scope:{AspectRatio:s.g,Box:r.az},language:"jsx",mdxType:"LivePreview"},`<Box
  padding="space30"
  maxWidth="size60"
  borderColor="colorBorderWeak"
  borderStyle="solid"
  borderWidth="borderWidth10"
>
  <AspectRatio ratio="16:9">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/UBFDdTIYZ6Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </AspectRatio>
</Box>`),(0,i.yg)("p",null,`Aspect Ratio can also be used to embed components, or other HTML elements that
needs to be set to a specific width-to-height ratio. A component or other HTML
element use case is the need to align an HTML element with an image in two columns.`),(0,i.yg)(u,{scope:{Anchor:a.Mz,AspectRatio:s.g,Box:r.az},language:"jsx",mdxType:"LivePreview"},`<Box
  padding="space30"
  maxWidth="size50"
  borderColor="colorBorderWeak"
  borderStyle="solid"
  borderWidth="borderWidth10"
>
  <AspectRatio ratio="4:3">
    <Box position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
      <Anchor href="https://org2.salsalabs.com/o/6857/p/salsa/donation/common/public/?donate_page_KEY=15780">Donate to the NAACP Legal Defense Fund</Anchor>
    </Box>
  </AspectRatio>
</Box>`),(0,i.yg)("p",null,`Another use case is for color swatches on a documentation site. These color swatches
could be a specific height/width div that need to resize on specific devices.
Aspect Ratio will allow the color swatches to resize correctly based on a ratio.`),(0,i.yg)(u,{scope:{AspectRatio:s.g,Box:r.az},language:"jsx",mdxType:"LivePreview"},`<Box
  padding="space30"
  maxWidth="size50"
  borderColor="colorBorderWeak"
  borderStyle="solid"
  borderWidth="borderWidth10"
>
  <AspectRatio ratio="4:3">
    <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="colorBackgroundBrand" />
  </AspectRatio>
</Box>`),(0,i.yg)(n.l,{mdxType:"DoDont"},(0,i.yg)(n.Do,{title:"Do",body:"Use for an image or embedded video, and have it resize at a specific ratio.",preview:!1,mdxType:"Do"}),(0,i.yg)(n.w,{title:"Don't",body:"Don’t use with fixed size (width & height) elements, as those will not adhere to the width-to-height ratio.",preview:!1,mdxType:"Dont"})),(0,i.yg)(n.l,{mdxType:"DoDont"},(0,i.yg)(n.Do,{title:"Do",body:"Use to embed a component or other HTML element.",preview:!1,mdxType:"Do"}),(0,i.yg)(n.w,{title:"Don't",body:"Don’t use without any child elements, because this is only a container element.",preview:!1,mdxType:"Dont"})))}y.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=33272)),_N_E=e.O()}]);