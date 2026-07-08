(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8576],{5374:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/detail-text",function(){return a(8170)}])},8170:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>f,default:()=>k,getStaticProps:()=>b,mdxHeadings:()=>v,meta:()=>w}),a(55729);var i=a(11885),o=a(51895),n=a(54652),r=a(76127),l=a(4073),d=a(60798),s=a(50010),p=a(85152),c=a(629),h=a(81651),T=a(17938),g=a(89564);let m=`
const DetailTextExample = () => {
  return (
    <Box maxWidth='size30'>
      <Box as='img' alt='' src='/images/detail-text/detail-text-image.png' maxWidth='100%' />
      <DetailText>
        Your sender identity is the “from” email address your recipients will see in their inbox.
      </DetailText>
    </Box>
  );
};
render(<DetailTextExample />)
`.trim(),x=`
const DetailTextExample = () => {
  return (
    <Table>
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
    </Table>
  );
};
render(<DetailTextExample />)
`.trim(),u=`
const DetailTextExample = () => {
  return (
    <Box maxWidth='size30'>
      <Card>
        <Heading
          as='h3'
          variant='heading50'
          marginBottom='space0'
        >
          Average handle time
        </Heading>
        <Box display='grid' gridTemplateColumns='1fr auto' marginTop='space70' marginBottom='space90'>
          <Text
            fontWeight='fontWeightSemibold'
            fontSize='fontSize90'
            lineHeight='lineHeight70'
          >
            3m
          </Text>
          <Box display='flex' flexDirection='row' alignItems='center' color='colorTextPrimary'>
            <ArrowUpIcon decorative={true} size='sizeIcon80' />
            <Text
              fontWeight='fontWeightSemibold'
              fontSize='fontSize90'
              lineHeight='lineHeight70'
              color='inherit'
            >
              8%
            </Text>
          </Box>
        </Box>
        <Text fontSize='fontSize30' lineHeight='lineHeight60'>Handle time by hour</Text>
        <Box
          as='img'
          src='/images/detail-text/graph.png'
          maxWidth='100%'
          marginBottom='space90'
          alt='Sample graph showing how the handle time increased after 10:00 AM today compared to yesterday.'
        />
        <Box display='grid' gridTemplateColumns='1fr auto' columnGap='space50'>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='flex-end'
            columnGap='space40'
            alignItems='center'
          >
            <Box
              borderTopStyle='solid'
              borderTopColor='colorBorderPrimary'
              borderTopWidth='borderWidth20'
              width='sizeSquare50'
            />
            <DetailText marginTop='space0'>Today</DetailText>
          </Box>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='flex-end'
            columnGap='space40'
            alignItems='center'
          >
            <Box
              borderTopStyle='dashed'
              borderTopColor='colorBorderWeak'
              borderTopWidth='borderWidth20'
              width='sizeSquare50'
            />
            <DetailText marginTop='space0'>Yesterday</DetailText>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
render(<DetailTextExample />)
`.trim(),y=`
const DetailTextExample = () => {
  return (
    <>
      <Heading as='h2' variant='heading20'>Auth tokens</Heading>
      <Paragraph>
        Auth tokens can be used to authenticate while making API requests. You will need to use HTTP Basic Authentication with user = Account SID and password = AuthToken. Auth tokens are specific to your account and can be used to access all API’s for the account.
      </Paragraph>
      <DetailText>
        *Please keep the auth tokens in a secure place and rotate them periodically.
      </DetailText>
    </>
  );
};
render(<DetailTextExample />)
`.trim();var D=a(40615),f=!0;let w={title:"Detail Text",package:"@twilio-paste/detail-text",description:"Detail Text is typography used for short pieces of secondary text content.",slug:"/components/detail-text/"},b=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:v,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/detail-text",storybookUrl:"/?path=/story/components-detail-text--default"}}}),v=[{value:"Guidelines",depth:2},{value:"About Detail Text",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Detail Text below an image",depth:3},{value:"Detail Text below primary content",depth:3},{value:"Detail Text with no top margin",depth:3},{value:"Detail Text as a footnote",depth:3},{value:"When to use Detail Text",depth:2}],E=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",e)},A={meta:w,getStaticProps:b,mdxHeadings:v},C=D.A;function k({components:e,...t}){return(0,i.yg)(C,{...A,...t,components:e,mdxType:"MDXLayout"},(0,i.yg)(E,{scope:{DetailText:o.z,Box:r.az},noInline:!0,mdxType:"LivePreview"},m),(0,i.yg)("h2",null,"Guidelines"),(0,i.yg)("h3",null,"About Detail Text"),(0,i.yg)("p",null,"The Detail Text component is used for small pieces of text that are secondary to body text in the hierarchy of a page. Common examples include an image caption, chart element legend, or a paragraph footnote."),(0,i.yg)("p",null,"Detail Text should not be used for body text, and should be reserved for small pieces of content only. It should not be used solely for its stylistic properties within other typographic elements."),(0,i.yg)("h3",null,"Accessibility"),(0,i.yg)("p",null,"The Detail Text component is a ",(0,i.yg)("inlineCode",{parentName:"p"},"div")," element by default. You can modify the element in situations where a ",(0,i.yg)("inlineCode",{parentName:"p"},"div"),` isn’t semantically correct. For example, set `,(0,i.yg)("inlineCode",{parentName:"p"},`as=”figcaption”`)," if working with Detail Text inside a ",(0,i.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"},(0,i.yg)("inlineCode",{parentName:"a"},"figure")," element"),"."),(0,i.yg)("p",null,"If your Detail Text is used to describe another element, use an ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," for the Detail Text component and ",(0,i.yg)("inlineCode",{parentName:"p"},"aria-describedby")," for the other element to make the connection clear."),(0,i.yg)(n.Pq,{variant:"neutral",mdxType:"Callout"},(0,i.yg)(n.wz,{mdxType:"CalloutText"},"Detail Text is not the same as alt text on images. The context and content of your usage might mean including alt text for further detail, or making alt text an empty string to prevent redundancy."," ",(0,i.yg)(l.Mz,{href:"https://www.w3.org/WAI/tutorials/images/decision-tree/",showExternal:!0,mdxType:"Anchor"},"Learn more about alt text and when to use it."))),(0,i.yg)(r.az,{paddingBottom:"space70",mdxType:"Box"}),(0,i.yg)("hr",null),(0,i.yg)("h2",null,"Examples"),(0,i.yg)("h3",null,"Detail Text below an image"),(0,i.yg)("p",null,"Use Detail Text to add a caption below an image."),(0,i.yg)(E,{scope:{DetailText:o.z,Box:r.az},noInline:!0,mdxType:"LivePreview"},m),(0,i.yg)("h3",null,"Detail Text below primary content"),(0,i.yg)("p",null,"Use Detail Text to add a description below primary content for extra context."),(0,i.yg)(E,{scope:{DetailText:o.z,Table:p.XI,THead:p.D1,Tr:p.Tr,Th:p.Th,Td:p.Td,TBody:p.vc,Text:c.EY},noInline:!0,mdxType:"LivePreview"},x),(0,i.yg)("h3",null,"Detail Text with no top margin"),(0,i.yg)("p",null,"Detail Text includes a marginTop prop to remove its default top margin of ",(0,i.yg)("inlineCode",{parentName:"p"},"space30"),"."),(0,i.yg)(E,{scope:{DetailText:o.z,Text:c.EY,Box:r.az,Heading:d.D,ArrowUpIcon:h.ArrowUpIcon,Card:T.Z},noInline:!0,mdxType:"LivePreview"},u),(0,i.yg)("h3",null,"Detail Text as a footnote"),(0,i.yg)("p",null,"Use Detail Text to add a footnote below a paragraph."),(0,i.yg)(E,{scope:{DetailText:o.z,Heading:d.D,Paragraph:s.f},noInline:!0,mdxType:"LivePreview"},y),(0,i.yg)("hr",null),(0,i.yg)("h2",null,"When to use Detail Text"),(0,i.yg)(g.l,{mdxType:"DoDont"},(0,i.yg)(g.Do,{title:"Do",body:"Use Detail Text for small pieces of text that are not the main content of the UI, like graph legends and image captions",mdxType:"Do"}),(0,i.yg)(g.w,{title:"Don't",body:"Don’t use Detail Text for body content. Consider using Paragraph instead.",mdxType:"Dont"})),(0,i.yg)(g.l,{mdxType:"DoDont"},(0,i.yg)(g.Do,{title:"Do",body:"Use Detail Text semantically",mdxType:"Do"}),(0,i.yg)(g.w,{title:"Don't",body:"Don’t use Detail Text for stylistic purposes within other typography. Consider using the Text primitive instead.",mdxType:"Dont"})))}k.isMDXComponent=!0},17938:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var i=a(76127),o=a(55729),n=o.forwardRef(({children:e,element:t="CARD",padding:a="space100",paddingBottom:n,paddingLeft:r,paddingRight:l,paddingTop:d,fillHeight:s,fillWidth:p,...c},h)=>o.createElement(i.az,{...(0,i.x8)(c),ref:h,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:t,padding:a,paddingBottom:n,paddingLeft:r,paddingRight:l,paddingTop:d,backgroundColor:"colorBackgroundWeakest",height:s?"100%":void 0,width:p?"100%":void 0},e));n.displayName="Card"},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>m});var i=a(72387),o=a(76127),n=a(95669),r=a.n(n),l=a(81278);a(55729);var d=a(10511),s=a(43084),p=a(10732),c=a(62887),h=a(63437),T=a(38992);let g={h1:()=>null},m=({children:e,meta:t,navigationData:a,data:n,mdxHeadings:m,pageHeaderData:{categoryRoute:x,githubUrl:u,storybookUrl:y}})=>{let D=t.title?`${t.title} - ${T.DZ.TITLE}`:T.DZ.TITLE,f=t.description||T.DZ.DESCRIPTION,w=(0,l.useRouter)();return(0,i.FD)(h.T,{navigationData:a,children:[(0,i.FD)(r(),{children:[(0,i.Y)("title",{children:D}),(0,i.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${w.pathname}`}),(0,i.Y)("meta",{name:"description",content:f},"description")]}),(0,i.FD)(d.s,{children:[(0,i.Y)(c.c,{categoryRoute:x,githubUrl:u,storybookUrl:y,data:n}),(0,i.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,i.Y)(p.i,{data:m}),(0,i.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,i.Y)(s.Q,{componentOverrides:t.package?g:{},children:e})})]})]})]})}},51895:(e,t,a)=>{"use strict";a.d(t,{z:()=>n});var i=a(76127),o=a(55729),n=o.forwardRef(({element:e="DETAIL_TEXT",as:t="div",children:a,marginTop:n="space30",...r},l)=>o.createElement(i.az,{as:t,ref:l,element:e,...(0,i.x8)(r),marginTop:n,color:"colorTextWeak",fontSize:"fontSize20",lineHeight:"lineHeight20",fontWeight:"fontWeightMedium"},a));n.displayName="DetailText"},81651:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ArrowUpIcon:()=>r});var i=a(36669),o=a(55729),n=a(96316);let r=o.forwardRef(({as:e,display:t,element:a="ICON",size:r,color:l,title:d,decorative:s},p)=>{let c=`ArrowUpIcon-${(0,i.GV)()}`;if(!s&&null==d)throw Error("[ArrowUpIcon]: Missing a title for non-decorative icon.");return o.createElement(n.IconWrapper,{as:e,display:t,element:a,size:r,color:l,ref:p},o.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},d?o.createElement("title",{id:c},d):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 5h.011a.45.45 0 01.059.005L10 5c.038 0 .075.004.11.013l.029.009a.489.489 0 01.272.205l3.444 3.832a.596.596 0 010 .78.459.459 0 01-.632.063l-.069-.063-2.659-2.957v7.605A.504.504 0 0110 15a.5.5 0 01-.488-.42l-.008-.093V6.883L6.846 9.839a.459.459 0 01-.632.063l-.069-.063a.598.598 0 01-.057-.704l.057-.076L9.59 5.227a.498.498 0 01.272-.206l.028-.007A.533.533 0 0110 5z"})))});r.displayName="ArrowUpIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=5374)),_N_E=e.O()}]);