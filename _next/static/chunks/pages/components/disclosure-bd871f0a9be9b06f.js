(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2500],{36781:(e,s,i)=>{"use strict";i.r(s),i.d(s,{__N_SSG:()=>v,default:()=>S,getStaticProps:()=>C,mdxHeadings:()=>H,meta:()=>f}),i(55729);var t=i(11885),o=i(4073),n=i(76127),a=i(95036),r=i(71853),l=i(629),c=i(84498),u=i(7658),d=i(87305),h=i(2136),g=i(15677),D=i(51582);let p=`
const useDelayedDisclosureState = ({delay, ...initialState}) => {
  const disclosure = useDisclosureState(initialState);
  const [transitioning, setTransitioning] = React.useState(false);
  return {
    ...disclosure,
    transitioning,
    toggle: () => {
      setTransitioning(true);
      setTimeout(() => {
        disclosure.toggle();
        setTransitioning(false);
      }, delay);
    },
  };
};

const StateHookDisclosure = () => {
  const {transitioning, ...disclosure} = useDelayedDisclosureState({
    delay: 500,
  });
  const clickableHeading = disclosure.visible ? 'Hide with delay' : 'Show with delay';
  return (
    <>
      <Disclosure variant="contained" state={disclosure}>
        <DisclosureHeading as="h2" variant="heading20">
          {transitioning ? 'Please wait...' : clickableHeading}
        </DisclosureHeading>
        <DisclosureContent>Disclosure content</DisclosureContent>
      </Disclosure>
    </>
  );
};

render(
  <StateHookDisclosure />
)
`.trim(),y=`
const StateHookToggleDisclosure = () => {
  const [show, setShow] = React.useState(false);
  const disclosure = useDisclosureState();
  const toggleDisclosure = () => setShow(state => !state);
  const customDisclosureState = {
    ...disclosure,
    toggle: toggleDisclosure,
    visible: show
  };

  return (
    <>
      <Disclosure variant="contained" state={customDisclosureState}>
        <DisclosureHeading as="h2" variant="heading20">
          Disclosure Heading
        </DisclosureHeading>
        <DisclosureContent>Disclosure content</DisclosureContent>
      </Disclosure>
      <Box marginTop="space60">
        <Button onClick={toggleDisclosure} variant="primary">
          Toggle Disclosure
        </Button>
      </Box>
    </>
  );
};

render(
  <StateHookToggleDisclosure />
)
`.trim();var m=i(40615),v=!0;let f={title:"Disclosure",package:"@twilio-paste/disclosure",description:"The Disclosure is used to create accessible, hierarchical, and collapsible structure to your pages.",slug:"/components/disclosure/"},C=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:H,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/disclosure",storybookUrl:"/?path=/story/components-disclosure--heading-variant-10"}}}),H=[{value:"Guidelines",depth:2},{value:"About Disclosure",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Default Disclosure",depth:3},{value:"Contained Disclosure",depth:3},{value:"Controlling initial state",depth:3},{value:"Using state hooks",depth:3},{value:"States",depth:2},{value:"Disabled",depth:3},{value:"Composition notes",depth:2}],b=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)},w={meta:f,getStaticProps:C,mdxHeadings:H},T=m.A;function S({components:e,...s}){return(0,t.yg)(T,{...w,...s,components:e,mdxType:"MDXLayout"},(0,t.yg)(b,{scope:{Disclosure:g.EN,DisclosureHeading:g.iF,DisclosureContent:g.L7},mdxType:"LivePreview"},`<Disclosure>
    <DisclosureHeading as="h2" variant="heading30">
      Between the World and Me by Ta-Nehisi Coates
    </DisclosureHeading>
    <DisclosureContent>
      But race is the child of racism, not the father. And the process of naming “the people” has never been a matter of genealogy and physiognomy so much as one of hierarchy. Difference in hue and hair is old. But the belief in the preeminence of hue and hair, the notion that these factors can correctly organize a society and that they signify deeper attributes, which are indelible—this is the new idea at the heart of these new people who have been brought up hopelessly, tragically, deceitfully, to believe that they are white.
    </DisclosureContent>
  </Disclosure>`),(0,t.yg)("h2",null,"Guidelines"),(0,t.yg)("h3",null,"About Disclosure"),(0,t.yg)("p",null,f.description," It uses the ",(0,t.yg)(o.Mz,{href:"/components/heading",mdxType:"Anchor"},"Paste Heading")," component to create consistency across pages and content hierarchy."),(0,t.yg)("h3",null,"Accessibility"),(0,t.yg)("p",null,"You ",(0,t.yg)("strong",{parentName:"p"},"must not")," nest focusable or actionable elements inside the ",(0,t.yg)("inlineCode",{parentName:"p"},"DisclosureHeading"),". Nested actionable elements are difficult to discover for users of assistive technology as their existence is often not announced."),(0,t.yg)("h2",null,"Examples"),(0,t.yg)("h3",null,"Default Disclosure"),(0,t.yg)("p",null,"The default variant of a Disclosure is a composition of the ",(0,t.yg)("a",{parentName:"p",href:"/components/heading"},"Paste Heading"),' and a chevron button icon as the "trigger" for the disclosure. This trigger controls the appearance of content that is below it.'),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"DisclosureHeading")," takes the same props as the ",(0,t.yg)("a",{parentName:"p",href:"/components/heading"},"Heading")," component so you can control the semantic heading level and it's visual appearance through variants."),(0,t.yg)(b,{scope:{Disclosure:g.EN,DisclosureHeading:g.iF,DisclosureContent:g.L7,Stack:c.B},mdxType:"LivePreview"},`<Stack orientation="vertical" spacing="space70">
  <Disclosure>
    <DisclosureHeading as="h2" variant="heading30">
      Between the World and Me by Ta-Nehisi Coates
    </DisclosureHeading>
    <DisclosureContent>
      But race is the child of racism, not the father. And the process of naming “the people” has never been a matter of genealogy and physiognomy so much as one of hierarchy. Difference in hue and hair is old. But the belief in the preeminence of hue and hair, the notion that these factors can correctly organize a society and that they signify deeper attributes, which are indelible—this is the new idea at the heart of these new people who have been brought up hopelessly, tragically, deceitfully, to believe that they are white.
    </DisclosureContent>
  </Disclosure>
  <Disclosure>
    <DisclosureHeading as="h2" variant="heading10">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
  <Disclosure>
    <DisclosureHeading as="h2" variant="heading20">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
  <Disclosure>
    <DisclosureHeading as="h2" variant="heading30">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
  <Disclosure>
    <DisclosureHeading as="h2" variant="heading40">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
  <Disclosure>
    <DisclosureHeading as="h2" variant="heading50">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
  <Disclosure>
    <DisclosureHeading as="h2" variant="heading60">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
</Stack>`),(0,t.yg)("h3",null,"Contained Disclosure"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"contained")," variant of the Disclosure takes the default composition and wraps it in the ",(0,t.yg)("a",{parentName:"p",href:"/components/card"},"Paste Card")," component. In this instance we do not expose the props used by Card, but all previously mentioned Disclosure props behave in the same way as the default variant."),(0,t.yg)(b,{scope:{Disclosure:g.EN,DisclosureHeading:g.iF,DisclosureContent:g.L7,Stack:c.B},mdxType:"LivePreview"},`<Stack orientation="vertical" spacing="space70">
  <Disclosure variant="contained">
    <DisclosureHeading as="h2" variant="heading10">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
  <Disclosure variant="contained">
    <DisclosureHeading as="h2" variant="heading20">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
  <Disclosure variant="contained">
    <DisclosureHeading as="h2" variant="heading30">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
  <Disclosure variant="contained">
    <DisclosureHeading as="h2" variant="heading40">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
  <Disclosure variant="contained">
    <DisclosureHeading as="h2" variant="heading50">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
  <Disclosure variant="contained">
    <DisclosureHeading as="h2" variant="heading60">
      Disclosure Heading
    </DisclosureHeading>
    <DisclosureContent>
      Content
    </DisclosureContent>
  </Disclosure>
</Stack>`),(0,t.yg)("h3",null,"Controlling initial state"),(0,t.yg)("p",null,"You can control the initial state of the disclosure to be expanded or collapsed by setting the ",(0,t.yg)("inlineCode",{parentName:"p"},"visible")," prop."),(0,t.yg)(b,{scope:{Disclosure:g.EN,DisclosureHeading:g.iF,DisclosureContent:g.L7},mdxType:"LivePreview"},`<Disclosure visible>
  <DisclosureHeading as="h2" variant="heading30">
    Disclosure Heading
  </DisclosureHeading>
  <DisclosureContent>
    Content
  </DisclosureContent>
</Disclosure>`),(0,t.yg)("h3",null,"Using state hooks"),(0,t.yg)("p",null,`Disclosure comes with the option of "hooking" into the internal state by using the state hook originally provided by
`,(0,t.yg)("a",{parentName:"p",href:"https://reakit.io/docs/disclosure/#usedisclosurestate"},"Reakit"),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"state")," prop allows you to hook into, and keep in sync the state of the Disclosure and the state of your application."),(0,t.yg)("p",null,`This will allow you to set initial state and merge the returned state from the hook with the application state,
and keep it in sync with user interactions.`),(0,t.yg)("p",null,`It should be noted that when doing so, the state prop takes precident over the other properties that affect
the state or initial state of the Disclosure. They will be ignored in favour of them being provided as arguments
to the useDisclosureState hook.`),(0,t.yg)("p",null,`For full details on how to use the state hook, and what props to provide it, follow the
`,(0,t.yg)("a",{parentName:"p",href:"/primitives/disclosure-primitive"},"Disclosure Primitive documentation"),". It's the same hook, just renamed."),(0,t.yg)("p",null,`You could use this if you need to wait for a response from an API before opening the Disclosure content. In the
example below, we're simulating the response time by adding a delay.`),(0,t.yg)(b,{scope:{useDisclosureState:D.Ec,Disclosure:g.EN,DisclosureHeading:g.iF,DisclosureContent:g.L7},noInline:!0,language:"jsx",mdxType:"LivePreview"},p),(0,t.yg)("p",null,`Another usecase of this might be programmatically opening/closing a Disclosure. In the example below we are
using a separate button to toggle the visibilty of the disclosure content.`),(0,t.yg)(b,{scope:{useDisclosureState:D.Ec,Disclosure:g.EN,DisclosureHeading:g.iF,DisclosureContent:g.L7,Box:n.az,Button:a.$n},noInline:!0,language:"jsx",mdxType:"LivePreview"},y),(0,t.yg)("h2",null,"States"),(0,t.yg)("h3",null,"Disabled"),(0,t.yg)("p",null,"Each Disclosure can be disabled by setting the ",(0,t.yg)("inlineCode",{parentName:"p"},"disabled")," prop on the ",(0,t.yg)("inlineCode",{parentName:"p"},"DisclosureHeading")),(0,t.yg)(b,{scope:{Disclosure:g.EN,DisclosureHeading:g.iF,DisclosureContent:g.L7},mdxType:"LivePreview"},`<Disclosure visible>
  <DisclosureHeading as="h2" disabled variant="heading30">
    Disclosure Heading
  </DisclosureHeading>
  <DisclosureContent>
    Content
  </DisclosureContent>
</Disclosure>`),(0,t.yg)("h2",null,"Composition notes"),(0,t.yg)("p",null,"Both ",(0,t.yg)("inlineCode",{parentName:"p"},"DisclosureHeading")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"DisclosureContent")," accept any child component. However, ",(0,t.yg)("a",{parentName:"p",href:"/components/disclosure#accessibility"},"avoid placing a focusable element inside the ",(0,t.yg)("inlineCode",{parentName:"a"},"DisclosureHeading")),"."),(0,t.yg)(b,{scope:{Disclosure:g.EN,DisclosureHeading:g.iF,DisclosureContent:g.L7,Flex:r.s,Text:l.EY},mdxType:"LivePreview"},`<Disclosure>
  <DisclosureHeading as="h2" variant="heading30">
    <Flex vAlignContent="center">
      Disclosure Heading
      <Text as="span" color="colorTextWeak" fontSize="fontSize50" marginLeft="space20">
        (3 new items)
      </Text>
    </Flex>
  </DisclosureHeading>
  <DisclosureContent>
    Content
  </DisclosureContent>
</Disclosure>`),(0,t.yg)("p",null,"Disclosure headers should be short, no more than 1 line, and prioritize the user goal. Use sentence case for the headers."),(0,t.yg)("p",null,"Any content contained within a disclosure can be formatted into multiple paragraphs with sub-headers, if needed."),(0,t.yg)("p",null,"Disclosures with an error icon in the header must include additional information on the nature of the error and how the user can fix it within the disclosure content. For additional guidance on how to compose error messages, refer to the ",(0,t.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,t.yg)(b,{scope:{Disclosure:g.EN,DisclosureHeading:g.iF,DisclosureContent:g.L7,ErrorIcon:d.ErrorIcon,MediaObject:u.Ss,MediaFigure:u.pV,MediaBody:u.To,Text:l.EY},mdxType:"LivePreview"},`<Disclosure variant="contained" visible>
  <DisclosureHeading as="h2" variant="heading30">
    <MediaObject verticalAlign="center">
      <MediaBody>
        Message details <Text color="colorTextWeak" fontSize="fontSize50" marginRight="space30" as="span">- Request timeout</Text>
      </MediaBody>
      <MediaFigure>
        <ErrorIcon color="colorTextError" decorative={false} title="Error" />
      </MediaFigure>
    </MediaObject>
  </DisclosureHeading>
  <DisclosureContent>
    Server connection failed. Try again later.
  </DisclosureContent>
</Disclosure>`),(0,t.yg)(b,{scope:{Disclosure:g.EN,DisclosureHeading:g.iF,DisclosureContent:g.L7,SuccessIcon:h.SuccessIcon,MediaObject:u.Ss,MediaFigure:u.pV,MediaBody:u.To,Text:l.EY},mdxType:"LivePreview"},`<Disclosure variant="contained" visible>
  <DisclosureHeading as="h2" variant="heading30">
    <MediaObject verticalAlign="center">
      <MediaBody>
        Message details <Text color="colorTextWeak" fontSize="fontSize50" marginRight="space30" as="span">- Successful send</Text>
      </MediaBody>
      <MediaFigure>
        <SuccessIcon color="colorTextSuccess" decorative={false} title="Success" />
      </MediaFigure>
    </MediaObject>
  </DisclosureHeading>
  <DisclosureContent>
    Your message was sent successfully.
  </DisclosureContent>
</Disclosure>`))}S.isMDXComponent=!0},40615:(e,s,i)=>{"use strict";i.d(s,{A:()=>p});var t=i(72387),o=i(76127),n=i(95669),a=i.n(n),r=i(81278);i(55729);var l=i(10511),c=i(43084),u=i(10732),d=i(62887),h=i(63437),g=i(38992);let D={h1:()=>null},p=({children:e,meta:s,navigationData:i,data:n,mdxHeadings:p,pageHeaderData:{categoryRoute:y,githubUrl:m,storybookUrl:v}})=>{let f=s.title?`${s.title} - ${g.DZ.TITLE}`:g.DZ.TITLE,C=s.description||g.DZ.DESCRIPTION,H=(0,r.useRouter)();return(0,t.FD)(h.T,{navigationData:i,children:[(0,t.FD)(a(),{children:[(0,t.Y)("title",{children:f}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${H.pathname}`}),(0,t.Y)("meta",{name:"description",content:C},"description")]}),(0,t.FD)(l.s,{children:[(0,t.Y)(d.c,{categoryRoute:y,githubUrl:m,storybookUrl:v,data:n}),(0,t.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(u.i,{data:p}),(0,t.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(c.Q,{componentOverrides:s.package?D:{},children:e})})]})]})]})}},98080:(e,s,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/disclosure",function(){return i(36781)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=98080)),_N_E=e.O()}]);