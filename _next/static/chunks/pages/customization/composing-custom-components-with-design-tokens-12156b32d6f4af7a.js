(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5501],{15780:(e,t,o)=>{"use strict";o.d(t,{A:()=>u});var n=o(72387),i=o(95669),s=o.n(i),a=o(81278);o(55729);var r=o(10511),l=o(43084),p=o(63437),d=o(38992);let h={h1:()=>null},u=({children:e,meta:t,navigationData:o})=>{let i=t.title?`${t.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,u=t.description||d.DZ.DESCRIPTION,c=(0,a.useRouter)();return(0,n.FD)(p.T,{navigationData:o,children:[(0,n.FD)(s(),{children:[(0,n.Y)("title",{children:i}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${c.pathname}`}),(0,n.Y)("meta",{name:"description",content:u},"description")]}),(0,n.Y)(r.s,{children:(0,n.Y)(l.Q,{componentOverrides:t.package?h:{},children:e})})]})}},61160:(e,t,o)=>{"use strict";o.r(t),o.d(t,{__N_SSG:()=>h,default:()=>T,getStaticProps:()=>c,mdxHeadings:()=>m,meta:()=>u}),o(55729);var n=o(11885),i=o(97215),s=o(28019),a=o(76127),r=o(629),l=o(54652),p=o(38992),d=o(15780),h=!0;let u={title:"How to build custom UI with Paste Tokens and Primitives",description:"You may encounter times where you are required to build an experience that isn't covered by out of the box Paste components. This guide aims to help you create custom experiences while still using the design system.",slug:"/customization/composing-custom-components-with-design-tokens/"},c=async()=>({props:{navigationData}}),m=[{value:"Why would I need to build Custom Components?",depth:2},{value:"The Happy Path",depth:2},{value:"Design Primitive Components",depth:2},{value:"Box Primitive",depth:3},{value:"Text",depth:3},{value:"Creating Thoughtful Compositions",depth:3},{value:"Other alternatives to Design Primitives",depth:2},{value:"Not using React?",depth:3},{value:"Epilogue",depth:2}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},y=g("GenericHeader"),f=g("PageAside"),x=g("LivePreview"),b={meta:u,getStaticProps:c,mdxHeadings:m},w=d.A;function T({components:e,...t}){return(0,n.yg)(w,{...b,...t,components:e,mdxType:"MDXLayout"},(0,n.yg)(y,{name:u.title,description:u.description,categoryRoute:p.t4.CUSTOMIZATION,mdxType:"GenericHeader"},(0,n.yg)(i.iD,{mdxType:"PageHeaderSeparator"},(0,n.yg)(s.w,{orientation:"horizontal",mdxType:"Separator"}))),(0,n.yg)("contentwrapper",null,(0,n.yg)(f,{data:m,mdxType:"PageAside"}),(0,n.yg)("content",null,(0,n.yg)("h2",null,"Why would I need to build Custom Components?"),(0,n.yg)("p",null,"While Paste will aim to provide ample coverage of components for teams to compose UIs, there will be occasions where you may need to build a custom component. This may be because:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"It's in Paste's future roadmap, but you need a component for your product ",(0,n.yg)("em",{parentName:"li"},"right now"),". In such cases, while the creation of parallel workstreams is not ideal, it may be necessary to ensure that your product ships on time while we still build the right experience from a system perspective."),(0,n.yg)("li",{parentName:"ul"},"It's not in Paste's roadmap yet, or will never be: Paste will never aim to cover every experience that Twilio ships to customers, since doing so will make the Design System bloated and hard to maintain for our small (but mighty) team."),(0,n.yg)("li",{parentName:"ul"},"It's an unique product experience: while most UIs will eventually be expressed by Paste, there will still be extremely specific product experiences that don't make sense as generic components or design patterns.")),(0,n.yg)("p",null,"In these cases, it's still critical to ensure that your component looks like a Paste component in order to build a seamless experience. With that in mind we have devised some ways to help you and your team ship products while still being able to use assets from the design system."),(0,n.yg)("h2",null,"The Happy Path"),(0,n.yg)("p",null,"Obviously, the first (and ideal) option is to work with your design partner and identify all the existing Paste components that can be used to create your desired experience. We're invested in helping you through this process - come through with your questions to our weekly Design System Office Hours or post in ",(0,n.yg)("em",null,"#help-design-system"),"."),(0,n.yg)("p",null,"The ideal way to evaluate Paste components that will work for your project is:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Find all the Paste components that exactly match your UI needs."),(0,n.yg)("li",{parentName:"ol"},"Work with your design partner to evaluate compositional methods to use Paste components to create a larger, more complex component. For example, a Filter that needs to be placed above a table may not exist in Paste, but could be expressed using Inputs, Buttons, and Selects. This will help you reduce your list of ",(0,n.yg)("strong",{parentName:"li"},"truly custom")," components."),(0,n.yg)("li",{parentName:"ol"},"Consider if your UI can be refactored to reduce the need of custom components by expressing the same interface with Paste components. The cost of building (and importantly, maintaining) custom components as a product team is really large, and you may want to avoid technical and design debt in the future.")),(0,n.yg)("p",null,"The list of components you're left with may not be expressed via Paste. At this point, we recommend using our Design Primitive Components."),(0,n.yg)("h2",null,"Design Primitive Components"),(0,n.yg)("p",null,"Design Primitive Components are React components that expose style properties using ",(0,n.yg)("a",{parentName:"p",href:"https://www.styled-system.com"},"Styled-System"),". These style properties are typed React props that only expose design tokens as values. There are style properties for each of the categories that are included on the ",(0,n.yg)("a",{parentName:"p",href:"/theme/#theme"},"Theme Object")," from the ",(0,n.yg)("a",{parentName:"p",href:"/theme"},"Theme Package"),"."),(0,n.yg)("p",null,"We use these components internally to create almost everything in Paste. When used, they provide more than enough combinations of design tokens to to create new, unique things while still looking like a part of the Design System. They also support the themes Paste offers out of the box, and allow for easy upgrades to design language updates in the future. ",(0,n.yg)("em",{parentName:"p"},"Your custom components are important and will never be left behind.")),(0,n.yg)("p",null,"Each Design Primitive is a ",(0,n.yg)("a",{parentName:"p",href:"https://emotion.sh/docs/styled"},"Styled Component")," that creates styles which are encapsulated to the component. This way you can style your custom components with the confidence that your styles should never clash with another team's work."),(0,n.yg)("h3",null,"Box Primitive"),(0,n.yg)("p",null,"The Box Primitive component is designed to be a block level primitive. Think of it as a ",(0,n.yg)("inlineCode",{parentName:"p"},"div"),", except with super powers. By exposing the ",(0,n.yg)("inlineCode",{parentName:"p"},"as")," prop, Box can become any ",(0,n.yg)("em",{parentName:"p"},"valid")," HTML element (obviously the sensible choices would be box or block style things). It exposes important styling properties like background color, padding, margin, border styles, etc., to allow you to create custom block level containers. The values the styling properties take are the names of the design tokens exposed on the theme object."),(0,n.yg)(l.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,n.yg)(l.v,{as:"h4",mdxType:"CalloutHeading"},"RIP Hex Values!"),(0,n.yg)(l.wz,{mdxType:"CalloutText"},"To ensure design system resiliency, Box and Text ",(0,n.yg)("strong",null,"do not")," accept HTML Color Codes, Font Sizes, or arbitrary pixel values. Any styling choices must be expressed using tokens, and tokens only.")),(0,n.yg)("p",null,"You can compose any number of Boxes together to create new UI components. Here's an example of three boxes, two of which are nested."),(0,n.yg)(x,{scope:{Box:a.az},language:"jsx",mdxType:"LivePreview"},`<Box
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
</Box>`),(0,n.yg)("h3",null,"Text"),(0,n.yg)("p",null,"The Text component is designed to be a general purpose text primitive. Similar to Box, it too exposes the ",(0,n.yg)("inlineCode",{parentName:"p"},"as")," prop to allow transformation into any valid HTML element and comes with a number of text styling properties. These properties include font-size, text color, weight and line height, allowing you to create text styles that should match the design system."),(0,n.yg)(x,{scope:{Box:a.az,Text:r.EY},language:"jsx",mdxType:"LivePreview"},`<Box padding="space20">
  <Text as="p" marginBottom="space40">the</Text>
  <Text as="h1" fontSize="fontSize70" fontWeight="fontWeightMedium" lineHeight="lineHeight70" marginBottom="space80">Plan</Text>
  <Text as="ol" marginLeft="space60">
    <Text as="li" fontSize="fontSize40">collect components</Text>
    <Text as="li" fontSize="fontSize40">???</Text>
    <Text as="li" fontSize="fontSize40">Profit</Text>
  </Text>
  <Text as="p" color="colorTextError" fontSize="fontSize30" fontWeight="fontWeightBold">Custom Error Message</Text>
</Box>`),(0,n.yg)("h3",null,"Creating Thoughtful Compositions"),(0,n.yg)("p",null,"You can use combinations of Box and Text to create custom compositions utilizing design token values from Paste. By doing this, your custom components can look and feel like standard Paste components (which will hopefully be expressing the rest of your UI, leading to a seamless experience). Remember that in spite of our approach with Tokens, you can still create broken experiences if you don't pair with a design partner. Always talk to your designer (and reach out to us on ",(0,n.yg)("em",null,"#help-design-system")," or visit Design System Office Hours as well)!"),(0,n.yg)("p",null,"These compositions will automatically respond to the theme that the provider has set. To see this in action, try the theme switcher in this site's header and see how the examples below respond to switching the theme."),(0,n.yg)(x,{scope:{Box:a.az,Text:r.EY},language:"jsx",mdxType:"LivePreview"},`<Box padding="space20">
  <Box
    as="article"
    backgroundColor="colorBackgroundBody"
    borderBottomLeftRadius="borderRadius30"
    borderBottomRightRadius="borderRadius30"
    borderWidth="borderWidth0"
    borderTopWidth="borderWidth20"
    borderStyle="solid"
    borderColor="colorBorderPrimary"
    marginBottom="space60"
    paddingLeft="space80"
    paddingRight="space80"
    paddingTop="space60"
    paddingBottom="space60"
>
    <Text as="h2" fontSize="fontSize60" fontWeight="fontWeightMedium" marginBottom="space40">
      The Last Question
    </Text>
    <Text as="p">
      The last question was asked for the first time, half in jest, on May 21, 2061, at a time when humanity first stepped into the light. The question came about as a result of a fivedollar bet over highballs, and it happened this way:
    </Text>
  </Box>
  <Box
    role="alert"
    backgroundColor="colorBackgroundErrorWeakest"
    borderRadius="borderRadius20"
    borderWidth="borderWidth10"
    borderStyle="solid"
    borderColor="colorBorderError"
    paddingLeft="space40"
    paddingRight="space40"
    paddingTop="space30"
    paddingBottom="space30"
  >
    <Text fontWeight="fontWeightMedium" color="colorTextError">
      LET THERE BE LIGHT!
    </Text>
  </Box>
</Box>`),(0,n.yg)("h2",null,"Other alternatives to Design Primitives"),(0,n.yg)("p",null,"If you choose to not use the design primitive components directly (and, if so, we'd love to learn more about your use case), check out the options provided by ",(0,n.yg)("a",{parentName:"p",href:"/theme"},"Theme Package"),". This package showcases ways to harness design tokens in React in a few different ways."),(0,n.yg)("h3",null,"Not using React?"),(0,n.yg)("p",null,"If you aren't using React, hop on over to the ",(0,n.yg)("a",{parentName:"p",href:"/tokens/design-tokens-package"},"Design Tokens Package"),". This package distributes the tokens and their values via NPM in a variety of different formats, for a bunch of different technologies. Also, if you're doing this, reach out at ",(0,n.yg)("em",null,"#help-design-system")," - we're really curious about what you're up to!"),(0,n.yg)("h2",null,"Epilogue"),(0,n.yg)("p",null,"Remember, Paste is not a component library. It's a design system - and design systems come with carefully curated opinions defined by our product design team over the years. By using this guide, we believe that you can express even the most unique UI needs while maintaining a seamless Twilio experience. ",(0,n.yg)("strong",{parentName:"p"},"We can't wait to see what you build.")))))}T.isMDXComponent=!0},79171:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/customization/composing-custom-components-with-design-tokens",function(){return o(61160)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=79171)),_N_E=e.O()}]);