(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8806],{14365:(e,a,t)=>{"use strict";t.d(a,{j:()=>l});var o=t(76127),n=t(27717),i=t(55729),r=(0,n.i7)`
  0% {
    transform: translateX(-100%) skew(155deg);
  }
  50%,
  100% {
    transform: translateX(100%) skew(155deg);
  }
`,d=n.I4.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    transparent,
    ${(0,n.yB)("backgroundColors.colorBackground")} 40%,
    ${(0,n.yB)("backgroundColors.colorBackground")} 60%,
    transparent
  );
  transform: translateX(-100%) skew(155deg);
  animation-timing-function: cubic-bezier(0.06, 0.42, 0.57, 0.89);
  animation-name: ${r};
  animation-duration: 4.5s;
  animation-iteration-count: infinite;
`,l=i.forwardRef(({borderBottomLeftRadius:e,borderBottomRightRadius:a,borderRadius:t="borderRadius20",borderTopLeftRadius:n,borderTopRightRadius:r,element:l="SKELETON_LOADER",display:s,height:c="sizeIcon20",maxHeight:p,maxWidth:h,minHeight:g,minWidth:u,size:m=null,width:k=null,...L},S)=>i.createElement(o.az,{...(0,o.x8)(L),"aria-busy":"true",backgroundColor:"colorBackgroundStrong",borderBottomLeftRadius:e,borderBottomRightRadius:a,borderRadius:t,borderTopLeftRadius:n,borderTopRightRadius:r,display:s,element:l,height:c,maxHeight:p,maxWidth:h,minHeight:g,minWidth:u,overflow:"hidden",pointerEvents:"none",position:"relative",userSelect:"none",size:m,width:k,ref:S},i.createElement(d,null)));l.displayName="SkeletonLoader"},17938:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var o=t(76127),n=t(55729),i=n.forwardRef(({children:e,element:a="CARD",padding:t="space100",paddingBottom:i,paddingLeft:r,paddingRight:d,paddingTop:l,fillHeight:s,fillWidth:c,...p},h)=>n.createElement(o.az,{...(0,o.x8)(p),ref:h,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:a,padding:t,paddingBottom:i,paddingLeft:r,paddingRight:d,paddingTop:l,backgroundColor:"colorBackgroundWeakest",height:s?"100%":void 0,width:c?"100%":void 0},e));i.displayName="Card"},40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>m});var o=t(72387),n=t(76127),i=t(95669),r=t.n(i),d=t(81278);t(55729);var l=t(10511),s=t(43084),c=t(10732),p=t(62887),h=t(63437),g=t(38992);let u={h1:()=>null},m=({children:e,meta:a,navigationData:t,data:i,mdxHeadings:m,pageHeaderData:{categoryRoute:k,githubUrl:L,storybookUrl:S}})=>{let T=a.title?`${a.title} - ${g.DZ.TITLE}`:g.DZ.TITLE,v=a.description||g.DZ.DESCRIPTION,x=(0,d.useRouter)();return(0,o.FD)(h.T,{navigationData:t,children:[(0,o.FD)(r(),{children:[(0,o.Y)("title",{children:T}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${x.pathname}`}),(0,o.Y)("meta",{name:"description",content:v},"description")]}),(0,o.FD)(l.s,{children:[(0,o.Y)(p.c,{categoryRoute:k,githubUrl:L,storybookUrl:S,data:i}),(0,o.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(c.i,{data:m}),(0,o.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(s.Q,{componentOverrides:a.package?u:{},children:e})})]})]})]})}},41319:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>b,default:()=>H,getStaticProps:()=>C,mdxHeadings:()=>z,meta:()=>f}),t(55729);var o=t(11885),n=t(11881),i=t(76127),r=t(95036),d=t(17938),l=t(60798),s=t(50010),c=t(14365),p=t(84498),h=t(85152),g=t(629),u=t(52121);let m=`
const SkeletonLoaderComposition = () => {
  const [loaded] = React.useState(false);

  return (
    <>
      {loaded ?
      <Text as="span">Single line of text</Text> :
      <SkeletonLoader width="100px" />
      }
    </>
  );
};

render(
  <SkeletonLoaderComposition />
)
`.trim(),k=`
const SkeletonLoaderText = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? <Text as="span">Single line of text</Text> : <SkeletonLoader width="100px" />}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderText />
)
`.trim(),L=`
const SkeletonLoaderParagraph = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? (
        <Box width="500px">
          <Paragraph>
            Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It's a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.
          </Paragraph>
        </Box>
      ) : (
        <Box width="500px">
          <Stack orientation="vertical" spacing="space20">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader width="80px" />
          </Stack>
        </Box>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderParagraph />
)
`.trim(),S=`
const SkeletonLoaderHeading = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? (
        <Stack orientation="vertical" spacing="space60">
          <Heading as="h1" variant="heading10">
            Heading one
          </Heading>
          <Heading as="h2" variant="heading20">
            Heading two
          </Heading>
          <Heading as="h3" variant="heading30">
            Heading three
          </Heading>
          <Heading as="h4" variant="heading40">
            Heading four
          </Heading>
          <Heading as="h5" variant="heading50">
            Heading five
          </Heading>
          <Heading as="h6" variant="heading60">
            Heading six
          </Heading>
        </Stack>
      ) : (
        <Stack orientation="vertical" spacing="space60">
          <SkeletonLoader height="44px" width="100px" />
          <SkeletonLoader height="32px" width="100px" />
          <SkeletonLoader height="28px" width="100px" />
          <SkeletonLoader height="24px" width="100px" />
          <SkeletonLoader height="20px" width="100px" />
          <SkeletonLoader height="20px" width="100px" />
        </Stack>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderHeading />
)
`.trim(),T=`
const SkeletonLoaderButtons = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? (
        <Stack orientation="horizontal" spacing="space40">
          <Button variant="primary">Button one</Button>
          <Button variant="secondary">Button two</Button>
          <Button variant="secondary">Button three</Button>
        </Stack>
      ) : (
        <Stack orientation="horizontal" spacing="space40">
          <SkeletonLoader width="98px" height="36px" />
          <SkeletonLoader width="98px" height="36px" />
          <SkeletonLoader width="108px" height="36px" />
        </Stack>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderButtons />
)
`.trim(),v=`
const SkeletonLoaderAvatar = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? (
        <Avatar size="sizeIcon70" name="Paste Engineer" />
      ) : (
        <SkeletonLoader borderRadius="borderRadiusCircle" size="sizeIcon70" />
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderAvatar />
)
`.trim(),x=`
const SkeletonLoaderIcon = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? <CalendarIcon decorative={false} title="Calendar icon" /> : <SkeletonLoader size="sizeIcon30" />}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderIcon />
)
`.trim(),y=`
const SkeletonLoaderCard = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {loaded ? (
        <Box width="500px">
          <Card>
            <Heading as="h1" variant="heading10">
              Impossible
            </Heading>
            <Paragraph>Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It's a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.</Paragraph>
          </Card>
        </Box>
      ) : (
        <Box width="500px">
          <Card>
            <Box marginBottom="space80">
              <SkeletonLoader height="44px" width="100px" />
            </Box>
            <Stack orientation="vertical" spacing="space20">
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </Stack>
            <Box marginTop="space20" marginBottom="space80">
              <SkeletonLoader width="200px" />
            </Box>
          </Card>
        </Box>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderCard />
)
`.trim(),B=`
const SkeletonLoaderTable = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      <Table tableLayout="fixed">
        <THead>
          <Tr>
            <Th width="300px">Contacts</Th>
            <Th>Date Added</Th>
            <Th>Last Opened</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>{loaded ? <Text as="span">Adriana Lovelock</Text> : <SkeletonLoader width="50%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-09-17</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-06-28</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
          <Tr>
            <Td>{loaded ? <Text as="span">Adam Brown</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-03-06</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-08-17</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
          <Tr>
            <Td>{loaded ? <Text as="span">Amanda Cutlack</Text> : <SkeletonLoader width="55%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-02-11</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-12-27</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
          <Tr>
            <Td>{loaded ? <Text as="span">John Daily</Text> : <SkeletonLoader width="30%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-04-92</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-09-17</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
        </TBody>
      </Table>
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

render(
  <SkeletonLoaderTable />
)
`.trim();var w=t(40615),b=!0;let f={title:"Skeleton Loader - Components",description:"A component that gives users a hint of what type of information will be loaded on a page and helps reduce the perceived time a page takes to load.",slug:"/components/skeleton-loader/"},C=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:z,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/skeleton-loader",storybookUrl:"/?path=/story/components-skeleton-loader--default"}}}),z=[{value:"Guidelines",depth:2},{value:"About Skeleton Loader",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Default Skeleton Loader",depth:3},{value:"Changing the Skeleton Loader height",depth:3},{value:"Loading text",depth:3},{value:"Loading a paragraph",depth:3},{value:"Loading a heading",depth:3},{value:"Loading buttons",depth:3},{value:"Loading an avatar",depth:3},{value:"Loading an icon",depth:3},{value:"Loading a card",depth:3},{value:"Loading a table",depth:3}],I=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},N={meta:f,getStaticProps:C,mdxHeadings:z},R=w.A;function H({components:e,...a}){return(0,o.yg)(R,{...N,...a,components:e,mdxType:"MDXLayout"},(0,o.yg)(I,{scope:{SkeletonLoader:c.j},mdxType:"LivePreview"},"<SkeletonLoader />"),(0,o.yg)("h2",null,"Guidelines"),(0,o.yg)("h3",null,"About Skeleton Loader"),(0,o.yg)("p",null,"The Skeleton Loader displays a placeholder representing the page's content before the page is ready to display. This component is used to improve ",(0,o.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Performance/Perceived_performance"},"perceived performance"),". This tends to improve user experience by reducing load time frustration and making the page feel more responsive."),(0,o.yg)("p",null,"This loader is an alternative to the ",(0,o.yg)("a",{parentName:"p",href:"/components/spinner"},"Spinner component"),". Rather than showing an abstract spinner, it frames the content of what is to come which creates anticipation."),(0,o.yg)("p",null,"The component is designed to be used in place of the content being loaded. For example:"),(0,o.yg)(I,{scope:{SkeletonLoader:c.j,Text:g.EY},noInline:!0,mdxType:"LivePreview"},m),(0,o.yg)("h3",null,"Accessibility"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The animation can be disabled by enabling the ",(0,o.yg)("inlineCode",{parentName:"li"},"prefers-reduced-motion")," setting at the OS level."),(0,o.yg)("li",{parentName:"ul"},"Skeleton Loader has the ",(0,o.yg)("inlineCode",{parentName:"li"},"aria-busy")," attribute set to ",(0,o.yg)("inlineCode",{parentName:"li"},"true")," by default. This is to indicate that the content is loading.")),(0,o.yg)("h2",null,"Examples"),(0,o.yg)("h3",null,"Default Skeleton Loader"),(0,o.yg)("p",null,"The default Skeleton Loader can be used to represent a line of text. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"sizeIcon20")," token for the ",(0,o.yg)("inlineCode",{parentName:"p"},"height"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"borderRadius20")," for the ",(0,o.yg)("inlineCode",{parentName:"p"},"border-radius"),". The ",(0,o.yg)("inlineCode",{parentName:"p"},"width")," will be 100% unless a different ",(0,o.yg)("inlineCode",{parentName:"p"},"width")," is specified."),(0,o.yg)(I,{scope:{SkeletonLoader:c.j},mdxType:"LivePreview"},"<SkeletonLoader />"),(0,o.yg)("h3",null,"Changing the Skeleton Loader height"),(0,o.yg)("p",null,"Use the ",(0,o.yg)("inlineCode",{parentName:"p"},"height")," prop to change the height of the Skeleton Loader. The height can be any valid height unit, such as ",(0,o.yg)("inlineCode",{parentName:"p"},"px"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"rem"),", or ",(0,o.yg)("inlineCode",{parentName:"p"},"%"),". It can also be one of the ",(0,o.yg)("a",{parentName:"p",href:"/tokens/list/#sizings"},"Paste size tokens"),"."),(0,o.yg)(I,{scope:{SkeletonLoader:c.j},mdxType:"LivePreview"},'<SkeletonLoader height="150px" />'),(0,o.yg)("h3",null,"Loading text"),(0,o.yg)(I,{scope:{Box:i.az,Button:r.$n,SkeletonLoader:c.j,Stack:p.B,Text:g.EY},noInline:!0,mdxType:"LivePreview"},k),(0,o.yg)("h3",null,"Loading a paragraph"),(0,o.yg)("p",null,"In order to simulate a paragraph's line spacing, you can use the ",(0,o.yg)("a",{parentName:"p",href:"/components/stack"},"Stack component"),"."),(0,o.yg)(I,{scope:{Box:i.az,Button:r.$n,Paragraph:s.f,SkeletonLoader:c.j,Stack:p.B},noInline:!0,mdxType:"LivePreview"},L),(0,o.yg)("h3",null,"Loading a heading"),(0,o.yg)(I,{scope:{Box:i.az,Button:r.$n,Heading:l.D,SkeletonLoader:c.j,Stack:p.B},noInline:!0,mdxType:"LivePreview"},S),(0,o.yg)("h3",null,"Loading buttons"),(0,o.yg)(I,{scope:{Box:i.az,Button:r.$n,SkeletonLoader:c.j,Stack:p.B},noInline:!0,mdxType:"LivePreview"},T),(0,o.yg)("h3",null,"Loading an avatar"),(0,o.yg)(I,{scope:{Avatar:n.e,Box:i.az,Button:r.$n,SkeletonLoader:c.j,Stack:p.B},noInline:!0,mdxType:"LivePreview"},v),(0,o.yg)("h3",null,"Loading an icon"),(0,o.yg)(I,{scope:{Box:i.az,CalendarIcon:u.CalendarIcon,Button:r.$n,SkeletonLoader:c.j,Stack:p.B},noInline:!0,mdxType:"LivePreview"},x),(0,o.yg)("h3",null,"Loading a card"),(0,o.yg)(I,{scope:{Box:i.az,Button:r.$n,Card:d.Z,Heading:l.D,Paragraph:s.f,SkeletonLoader:c.j,Stack:p.B},noInline:!0,mdxType:"LivePreview"},y),(0,o.yg)("h3",null,"Loading a table"),(0,o.yg)(I,{scope:{Box:i.az,Button:r.$n,SkeletonLoader:c.j,Text:g.EY,Table:h.XI,THead:h.D1,TBody:h.vc,Tr:h.Tr,Td:h.Td,Th:h.Th,Stack:p.B},noInline:!0,mdxType:"LivePreview"},B))}H.isMDXComponent=!0},52121:(e,a,t)=>{"use strict";t.r(a),t.d(a,{CalendarIcon:()=>r});var o=t(36669),n=t(55729),i=t(96316);let r=n.forwardRef(({as:e,display:a,element:t="ICON",size:r,color:d,title:l,decorative:s},c)=>{let p=`CalendarIcon-${(0,o.GV)()}`;if(!s&&null==l)throw Error("[CalendarIcon]: Missing a title for non-decorative icon.");return n.createElement(i.IconWrapper,{as:e,display:a,element:t,size:r,color:d,ref:c},n.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":p},l?n.createElement("title",{id:p},l):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.5 2a.5.5 0 01.492.41L14 2.5v1.499L17.5 4a.5.5 0 01.492.41L18 4.5v13a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5L6 3.999V2.5a.5.5 0 01.992-.09L7 2.5v1.499h6V2.5a.5.5 0 01.5-.5zm3.499 6.999h-14v8h14V9zM5.745 14l.118.008a.748.748 0 01.325.133l.091.077a.75.75 0 11-.63-.211L5.745 14zm4.252 0l.118.009a.75.75 0 01.324.132l.09.077a.75.75 0 11-.63-.212L9.997 14zm4.253 0l.116.009a.75.75 0 01.323.132l.09.077a.75.75 0 11-.53-.218zm-8.5-3.5l.115.008a.75.75 0 01.324.134l.091.077a.75.75 0 11-.53-.22zm8.5 0l.094.005a.75.75 0 11-.188 0l.094-.006zm-4.25 0l.094.005a.75.75 0 11-.194.001l.1-.007zM6 4.998H3l-.001 3h14v-3H14v1a.5.5 0 01-.992.09L13 6V5H7v1a.5.5 0 01-.992.09L6 6V5z"})))});r.displayName="CalendarIcon"},80362:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/skeleton-loader",function(){return t(41319)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=80362)),_N_E=e.O()}]);