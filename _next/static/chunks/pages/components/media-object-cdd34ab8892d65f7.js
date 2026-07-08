(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[511],{15367:(e,i,a)=>{"use strict";a.d(i,{Cv:()=>s,PK:()=>g,xP:()=>c});var t=a(76127),o=a(41456),n=a(55729),d=a(4073),r=a(629),l=n.createContext({}),s=n.forwardRef(({children:e,element:i="BLOCKQUOTE",url:a,marginBottom:d="space70",...r},s)=>n.createElement(t.az,{...(0,t.x8)(r),ref:s,display:"flex",columnGap:"space50",alignItems:"flex-start",lineHeight:"lineHeight30",fontSize:"fontSize30",marginBottom:d,element:i},n.createElement(o.BlockquoteIcon,{element:`${i}_ICON`,decorative:!0,color:"colorTextIcon"}),n.createElement(l.Provider,{value:{url:a}},n.createElement(t.az,{element:`INNER_${i}`},e))));s.displayName="Blockquote";var c=n.forwardRef(({children:e,element:i="BLOCKQUOTE_CONTENT",...a},o)=>{let{url:d}=n.useContext(l);return n.createElement(t.az,{...(0,t.x8)(a),as:"blockquote",margin:"space0",ref:o,element:i,cite:d},e)});c.displayName="BlockquoteContent";var g=n.forwardRef(({element:e="BLOCKQUOTE_CITATION",author:i,source:a,...o},s)=>{let{url:c}=n.useContext(l);return n.createElement(t.az,{...(0,t.x8)(o),marginTop:"space30",marginBottom:"space0",as:"p",element:e,ref:s},"—"," ",n.createElement(r.EY,{as:"span",fontWeight:"fontWeightSemibold",element:`${e}_AUTHOR`},i),a?n.createElement(n.Fragment,null,","," ",n.createElement(t.az,{as:"cite",fontStyle:"normal",element:`${e}_CITE`},c?n.createElement(d.Mz,{href:c,showExternal:!0,element:`${e}_ANCHOR`},a):n.createElement(r.EY,{as:"span",element:`${e}_TEXT`},a))):null)});g.displayName="BlockquoteCitation"},25293:(e,i,a)=>{"use strict";a.r(i),a.d(i,{__N_SSG:()=>u,default:()=>x,getStaticProps:()=>y,mdxHeadings:()=>m,meta:()=>h}),a(55729);var t=a(11885),o=a(76127),n=a(15367),d=a(629),r=a(11881),l=a(5962),s=a(7658),c=a(38992),g=a(48643),p=a(40615),u=!0;let h={title:"Media Object - Layout",package:"@twilio-paste/media-object",description:"Media Object is a layout utility that allows an image or figure to be positioned horizontally next to some form of content.",slug:"/components/media-object/"},y=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:m,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/layout/media-object",storybookUrl:"/?path=/story/layout-media-object--default"}}}),m=[{value:"Guidelines",depth:2},{value:"About Media Object",depth:3},{value:"Accessibility",depth:4},{value:"Examples",depth:2},{value:"Basic Media Object",depth:3},{value:"MediaFigure Spacing",depth:3},{value:"Vertical alignment",depth:3},{value:"MediaFigure at the end",depth:3},{value:"Double figure",depth:3},{value:"Example use cases",depth:3},{value:"The Alert component",depth:4},{value:"A social feed item header",depth:4},{value:"Chat log bubble",depth:4},{value:"Composing a Media Object",depth:2}],M=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)},b={meta:h,getStaticProps:y,mdxHeadings:m},v=p.A;function x({components:e,...i}){return(0,t.yg)(v,{...b,...i,components:e,mdxType:"MDXLayout"},(0,t.yg)(M,{scope:{PasteIcon:g.v,Text:d.EY,MediaObject:s.Ss,MediaFigure:s.pV,MediaBody:s.To,TWILIO_RED:c.Fu},language:"jsx",mdxType:"LivePreview"},`<MediaObject verticalAlign="center">
  <MediaFigure spacing="space40">
    <PasteIcon color={TWILIO_RED} display="block" size={42} />
  </MediaFigure>
  <MediaBody>
    <Text as="h2" fontSize="fontSize60" lineHeight="lineHeight60">
      <Text href="/" as="a" color="inherit" fontSize="inherit" lineHeight="inherit" textDecoration="none">Paste</Text>
    </Text>
    <Text as="h3" fontSize="fontSize20" lineHeight="lineHeight20" color="colorTextWeak">
      Design System
    </Text>
  </MediaBody>
</MediaObject>`),(0,t.yg)("h2",null,"Guidelines"),(0,t.yg)("h3",null,"About Media Object"),(0,t.yg)("p",null,"First created by ",(0,t.yg)("a",{parentName:"p",href:"http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/"},"Nicole Sullivan")," back in 2010, the Media Object in Paste aims to serve many of the same purposes as the original concept. It's a layout pattern that you will see all across the web, on almost all the websites you will come across. We're pretty sure you'll ",(0,t.yg)("strong",{parentName:"p"},"never unsee this going forward"),"."),(0,t.yg)(n.Cv,{url:"http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/",mdxType:"Blockquote"},(0,t.yg)(n.xP,{mdxType:"BlockquoteContent"},"What is the internet made of? At least the UI layer is mainly composed of media blocks."),(0,t.yg)(n.PK,{author:"Nicole Sullivan",source:"Stubbornella",mdxType:"BlockquoteCitation"})),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"So what's a media object?")," An image or figure positioned horizontally next to some form of content. The figure can sit on either or both sides of the content. That's it. It sounds really simple, but it's literally everywhere on the Internet. For example, the top left of this website uses a Media Object."),(0,t.yg)(M,{scope:{PasteIcon:g.v,Text:d.EY,MediaObject:s.Ss,MediaFigure:s.pV,MediaBody:s.To,TWILIO_RED:c.Fu},language:"jsx",mdxType:"LivePreview"},`<MediaObject verticalAlign="center">
  <MediaFigure spacing="space40">
    <PasteIcon color={TWILIO_RED} display="block" size={42} />
  </MediaFigure>
  <MediaBody>
    <Text as="h2" fontSize="fontSize60" lineHeight="lineHeight60">
      <Text href="/" as="a" color="inherit" fontSize="inherit" lineHeight="inherit" textDecoration="none">Paste</Text>
    </Text>
    <Text as="h3" fontSize="fontSize20" lineHeight="lineHeight20" color="colorTextWeak">
      Design System
    </Text>
  </MediaBody>
</MediaObject>`),(0,t.yg)("p",null,"If you were to draw the concept, it might look something like this:"),(0,t.yg)(o.az,{as:"div",backgroundColor:"colorBackgroundStrong",padding:"space40",marginBottom:"space70",mdxType:"Box"},(0,t.yg)(s.Ss,{as:"div",mdxType:"MediaObject"},(0,t.yg)(s.pV,{as:"div",spacing:"space40",mdxType:"MediaFigure"},(0,t.yg)(o.az,{backgroundColor:"colorBackgroundPrimary",height:"sizeIcon110",width:"sizeIcon110",mdxType:"Box"})),(0,t.yg)(s.To,{as:"div",mdxType:"MediaBody"},(0,t.yg)(o.az,{backgroundColor:"colorBackgroundPrimary",height:"sizeIcon110",width:"100%",mdxType:"Box"})))),(0,t.yg)("p",null,"The aim of the Media Object to make this common layout pattern easy and efficient to implement."),(0,t.yg)("h4",null,"Accessibility"),(0,t.yg)("p",null,`Media Object has no specific accessibility concerns. While using this layout component, it is up to you to manage the resulting
accessibility implications. You may want to consider how the Media Object affects readability due to ordering, and
the visual or content hierarchy of your page.`),(0,t.yg)("h2",null,"Examples"),(0,t.yg)("h3",null,"Basic Media Object"),(0,t.yg)(M,{scope:{Box:o.az,MediaObject:s.Ss,MediaFigure:s.pV,MediaBody:s.To},language:"jsx",mdxType:"LivePreview"},`<MediaObject as="div">
  <MediaFigure as="div">
    <Box backgroundColor="colorBackgroundStrong" borderRadius="borderRadius20" height="sizeIcon100" width="sizeIcon100" />
  </MediaFigure>
  <MediaBody as="div">
    Some Text
  </MediaBody>
</MediaObject>`),(0,t.yg)("h3",null,"MediaFigure Spacing"),(0,t.yg)("p",null,"To set some spacing between the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaBody"),", set the ",(0,t.yg)("inlineCode",{parentName:"p"},"spacing")," property on the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure"),". This prop takes any spacing token."),(0,t.yg)(M,{scope:{Box:o.az,MediaObject:s.Ss,MediaFigure:s.pV,MediaBody:s.To},language:"jsx",mdxType:"LivePreview"},`<MediaObject as="div">
  <MediaFigure
    as="div"
    spacing="space40"
  >
    <Box backgroundColor="colorBackgroundStrong" borderRadius="borderRadius20" height="sizeIcon100" width="sizeIcon100"></Box>
  </MediaFigure>
  <MediaBody as="div">
    Some Text
  </MediaBody>
</MediaObject>`),(0,t.yg)("h3",null,"Vertical alignment"),(0,t.yg)("p",null,"By default the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaBody")," is top-aligned to the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure"),". By setting the ",(0,t.yg)("inlineCode",{parentName:"p"},"verticalAlign")," prop on the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaObject"),' to "center", you can align the ',(0,t.yg)("inlineCode",{parentName:"p"},"MediaBody")," to the middle of the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure"),"."),(0,t.yg)(M,{scope:{Box:o.az,MediaObject:s.Ss,MediaFigure:s.pV,MediaBody:s.To},language:"jsx",mdxType:"LivePreview"},`<MediaObject as="div" verticalAlign="center">
  <MediaFigure
    as="div"
    spacing="space40"
  >
    <Box backgroundColor="colorBackgroundStrong" borderRadius="borderRadius20" height="sizeIcon100" width="sizeIcon100"></Box>
  </MediaFigure>
  <MediaBody as="div">
    Some Text
  </MediaBody>
</MediaObject>`),(0,t.yg)("h3",null,"MediaFigure at the end"),(0,t.yg)("p",null,"To place the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure")," after the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaBody"),", at the end of the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaObject"),", place the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure")," after the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaBody")," in the DOM. Be sure to set the ",(0,t.yg)("inlineCode",{parentName:"p"},"align")," prop on the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure"),' to "end" to reverse the spacing.'),(0,t.yg)(M,{scope:{Box:o.az,MediaObject:s.Ss,MediaFigure:s.pV,MediaBody:s.To},language:"jsx",mdxType:"LivePreview"},`<MediaObject as="div" verticalAlign="center">
  <MediaBody as="div">
    Some Text
  </MediaBody>
  <MediaFigure
    as="div"
    align="end"
    spacing="space40"
  >
    <Box backgroundColor="colorBackgroundStrong" borderRadius="borderRadius20" height="sizeIcon100" width="sizeIcon100"></Box>
  </MediaFigure>
</MediaObject>`),(0,t.yg)("h3",null,"Double figure"),(0,t.yg)("p",null,"To have a ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure")," at either end of the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaObject"),", add a ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure")," before and after the ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaBody"),", setting the second ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure")," to ",(0,t.yg)("inlineCode",{parentName:"p"},'align="end"'),"."),(0,t.yg)(M,{scope:{Box:o.az,MediaObject:s.Ss,MediaFigure:s.pV,MediaBody:s.To},language:"jsx",mdxType:"LivePreview"},`<MediaObject as="div" verticalAlign="center">
  <MediaFigure
    as="div"
    spacing="space40"
  >
    <Box backgroundColor="colorBackgroundStrong" borderRadius="borderRadius20" height="sizeIcon100" width="sizeIcon100"></Box>
  </MediaFigure>
  <MediaBody as="div">
    Some Text
  </MediaBody>
  <MediaFigure
    as="div"
    align="end"
    spacing="space40"
  >
    <Box backgroundColor="colorBackgroundStrong" borderRadius="borderRadius20" height="sizeIcon100" width="sizeIcon100"></Box>
  </MediaFigure>
</MediaObject>`),(0,t.yg)("h3",null,"Example use cases"),(0,t.yg)("h4",null,"The Alert component"),(0,t.yg)("p",null,"The Alert is a classic Media Object layout. The status level icon is the Media Figure, and the alert description is the Media Body."),(0,t.yg)(M,{scope:{Alert:l.F},language:"jsx",mdxType:"LivePreview"},`<Alert variant="warning">
  <strong>Chimamanda Ngozi Adichie:</strong> Racism should never have happened and so you don't get a cookie for reducing it.
</Alert>`),(0,t.yg)("h4",null,"A social feed item header"),(0,t.yg)("p",null,"Here we're center aligning an avatar next to a timestamp and username."),(0,t.yg)(M,{scope:{Text:d.EY,Avatar:r.e,MediaObject:s.Ss,MediaFigure:s.pV,MediaBody:s.To},language:"jsx",mdxType:"LivePreview"},`<MediaObject as="div" verticalAlign="center">
  <MediaFigure as="div" spacing="space40">
    <Avatar size="sizeIcon70" name="James Baldwin" />
  </MediaFigure>
  <MediaBody as="div">
    <Text as="div" color="colorTextWeak" fontSize="fontSize20" lineHeight="lineHeight10">
      3h
    </Text>
    <Text as="div" fontSize="fontSize30" fontWeight="fontWeightSemibold" lineHeight="lineHeight10">
      James Baldwin
    </Text>
  </MediaBody>
</MediaObject>`),(0,t.yg)("h4",null,"Chat log bubble"),(0,t.yg)("p",null,"By placing the figure at the end of the Media Object and top aligning it to a chat bubble, we can start to compose a custom chat log UI."),(0,t.yg)(M,{scope:{Box:o.az,Text:d.EY,Avatar:r.e,MediaObject:s.Ss,MediaFigure:s.pV,MediaBody:s.To},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" justifyContent="flex-end">
  <MediaObject as="div">
    <MediaBody as="div">
      <Box
        as="div"
        color="colorTextInverse"
        backgroundColor="colorBackgroundPrimary"
        borderRadius="borderRadius20"
        borderTopRightRadius="borderRadius0"
        fontSize="fontSize30"
        lineHeight="lineHeight20"
        padding="space30"
        maxWidth="size30"
      >
        Racism should never have happened and so you don't get a cookie for reducing it.
      </Box>
      <Text as="div" color="colorTextWeak" fontSize="fontSize20" textAlign="right">
        Chimamanda Ngozi Adichie
      </Text>
    </MediaBody>
    <MediaFigure as="div" align="end" spacing="space40">
      <Avatar size="sizeIcon50" name="Chimamanda Ngozi Adichie" />
    </MediaFigure>
  </MediaObject>
</Box>`),(0,t.yg)("h2",null,"Composing a Media Object"),(0,t.yg)("p",null,"The Media Object is a composition of three things;"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"MediaObject")),(0,t.yg)("li",{parentName:"ul"},"A ",(0,t.yg)("inlineCode",{parentName:"li"},"MediaFigure")),(0,t.yg)("li",{parentName:"ul"},"A ",(0,t.yg)("inlineCode",{parentName:"li"},"MediaBody"))),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaObject")," acts as the outer wrapper of the pattern. The ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure")," is the container for the content that is often graphical in nature and fixed in size. The ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaBody")," is a container typically for accompanying text content and fills the remaining space."),(0,t.yg)("p",null,"The content of a ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaBody")," is entirely up to you."),(0,t.yg)("p",null,"The size of ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaFigure")," is determined by the content that is placed inside of it. ",(0,t.yg)("inlineCode",{parentName:"p"},"MediaBody")," will fill the remaining space in the row."))}x.isMDXComponent=!0},40615:(e,i,a)=>{"use strict";a.d(i,{A:()=>y});var t=a(72387),o=a(76127),n=a(95669),d=a.n(n),r=a(81278);a(55729);var l=a(10511),s=a(43084),c=a(10732),g=a(62887),p=a(63437),u=a(38992);let h={h1:()=>null},y=({children:e,meta:i,navigationData:a,data:n,mdxHeadings:y,pageHeaderData:{categoryRoute:m,githubUrl:M,storybookUrl:b}})=>{let v=i.title?`${i.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,x=i.description||u.DZ.DESCRIPTION,T=(0,r.useRouter)();return(0,t.FD)(p.T,{navigationData:a,children:[(0,t.FD)(d(),{children:[(0,t.Y)("title",{children:v}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,t.Y)("meta",{name:"description",content:x},"description")]}),(0,t.FD)(l.s,{children:[(0,t.Y)(g.c,{categoryRoute:m,githubUrl:M,storybookUrl:b,data:n}),(0,t.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(c.i,{data:y}),(0,t.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(s.Q,{componentOverrides:i.package?h:{},children:e})})]})]})]})}},41456:(e,i,a)=>{"use strict";a.r(i),a.d(i,{BlockquoteIcon:()=>d});var t=a(36669),o=a(55729),n=a(96316);let d=o.forwardRef(({as:e,display:i,element:a="ICON",size:d,color:r,title:l,decorative:s},c)=>{let g=`BlockquoteIcon-${(0,t.GV)()}`;if(!s&&null==l)throw Error("[BlockquoteIcon]: Missing a title for non-decorative icon.");return o.createElement(n.IconWrapper,{as:e,display:i,element:a,size:d,color:r,ref:c},o.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":g},l?o.createElement("title",{id:g},l):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M15.865 16.305a44.92 44.92 0 01-1.698.028c-.707 0-1.264-.011-1.699-.028-1.018-.039-1.754-.819-1.781-1.824a62.15 62.15 0 01-.02-1.67V9.646c0-3.19 2.12-5.165 4.585-5.926.335-.103.765-.073 1.061.236.224.232.378.5.484.738.267.605-.107 1.181-.552 1.454-.707.433-1.218.918-1.554 1.48-.29.485-.459 1.044-.498 1.705.635 0 1.148.007 1.56.017 1.065.025 1.87.833 1.896 1.897a65.173 65.173 0 01-.002 3.234c-.028 1.005-.764 1.785-1.782 1.824zm-8.333 0a44.92 44.92 0 01-1.699.028c-.706 0-1.263-.011-1.698-.028-1.018-.039-1.754-.819-1.782-1.824-.011-.432-.02-.981-.02-1.67V9.646c0-3.19 2.12-5.164 4.585-5.925.336-.104.765-.074 1.062.235.224.232.378.5.483.738.268.606-.106 1.182-.552 1.454-.707.434-1.217.918-1.553 1.48-.29.485-.459 1.044-.499 1.705.636 0 1.149.007 1.56.017 1.065.025 1.87.833 1.897 1.897.01.415.017.93.017 1.564 0 .689-.008 1.238-.02 1.67-.027 1.005-.764 1.785-1.78 1.824z"})))});d.displayName="BlockquoteIcon"},86628:(e,i,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/media-object",function(){return a(25293)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=86628)),_N_E=e.O()}]);