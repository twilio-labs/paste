(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8732],{2062:(e,a,n)=>{"use strict";n.r(a),n.d(a,{__N_SSG:()=>H,default:()=>q,getStaticProps:()=>U,mdxHeadings:()=>j,meta:()=>V}),n(55729);var t=n(11885),o=n(33359),r=n(17938),i=n(629),l=n(60798),d=n(95036),c=n(88017),s=n(41621),g=n(83889),p=n(73123),u=n(2136),m=n(87305),y=n(56769),h=n(47543),v=n(57928),B=n(41571),x=n(93780),b=n(24622),f=n(32961),I=n(25125),w=n(99327),C=n(67022),T=n(18583),E=n(3738),N=n(94304),z=n(87668),S=n(76127),P=n(84498),k=n(50010),D=n(61593),R=n(85152),M=n(36669),A=n(89564);let L=`<Table tableLayout="auto">
  <THead>
    <Tr>
      <Th>Call SID</Th>
      <Th>Direction</Th>
      <Th>Date</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Td>
        <Text fontFamily="fontFamilyCode" as="span">
          CA0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>
        <Badge variant="decorative20" as="span">
          Inbound
        </Badge>
      </Td>
      <Td>2020-09-17, 16:24:28 PDT</Td>
    </Tr>
    <Tr>
      <Td>
        <Text fontFamily="fontFamilyCode" as="span">
          CA0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>
        <Badge variant="decorative40" as="span">
          Outbound
        </Badge>
      </Td>
      <Td>2020-09-17, 16:24:28 PDT</Td>
    </Tr>
    <Tr>
      <Td>
        <Text fontFamily="fontFamilyCode" as="span">
          CA0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>
        <Badge variant="decorative40" as="span">
          Outbound
        </Badge>
      </Td>
      <Td>2020-09-17, 16:24:28 PDT</Td>
    </Tr>
    <Tr>
      <Td>
        <Text fontFamily="fontFamilyCode" as="span">
          CA0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>
        <Badge variant="decorative20" as="span">
          Inbound
        </Badge>
      </Td>
      <Td>2020-09-17, 16:24:28 PDT</Td>
    </Tr>
  </TBody>
</Table>`,_=`<Card>
  <Box display="flex" columnGap="space40">
    <Heading as="h3" variant="heading40">
      Emergency Calling
    </Heading>
    <Box height="min-content" display="inherit" columnGap="space30">
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="new">
          <NewIcon decorative/>
          Beta
        </PopoverBadgeButton>
        <Popover aria-label="Popover">

        This product is in beta, which means we're still working out all the kinks. Let us know if you spot any bugs.

        </Popover>
      </PopoverContainer>
    </Box>
  </Box>
  <Paragraph marginBottom="space0">
    Twilio’s Emergency Calling for SIP Trunking feature enables
    emergency call routing to Public Safety Answering Points (PSAPs) in
    the US, Canada, and the UK.
  </Paragraph>
</Card>`,W=`const SettingsAndProducts = () => {
  const [callRecording, setCallRecording] = React.useState("always");

  const handleOnChange = React.useCallback(
    (newValue) => {
      setCallRecording(newValue);
    },
    [setCallRecording]
  );
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      columnGap="space40"
    >
      <RadioGroup
        name="call-recording"
        value={callRecording}
        legend="Would you like to enable call recording?"
        helpText="Applies to all incoming and outbound calls."
        onChange={handleOnChange}
      >
        <Radio id="always" value="always">
          Always
        </Radio>
        <Radio id="never" value="never">
          Never
        </Radio>
      </RadioGroup>

      <Box display="flex" columnGap="space20">
        <Badge variant="decorative20" as="span">
          <ProductElasticSIPTrunkingIcon decorative size="sizeIcon10" />
          SIP Trunking
        </Badge>
        <Badge variant="decorative30" as="span">
          <ProductVoiceIcon decorative size="sizeIcon10" />
          Voice
        </Badge>
      </Box>
    </Box>
  );
};

render(
  SettingsAndProducts
)
`.trim(),O=`
const InteractiveTrigger = () => {
  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <Box display="flex" columnGap="space80">
      <Badge as="button" variant="new" onClick={handleOpen}>
        <NewIcon decorative/>
        Beta
      </Badge>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Beta mode
          </ModalHeading>
        </ModalHeader>
        <ModalBody>

          <Paragraph marginBottom="space0">
            This product is in beta, which means we're still working out all the kinks. Let us know if you spot any bugs.
          </Paragraph>

        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="primary" onClick={handleClose}>Got it</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="new">
          <NewIcon decorative/>
          Beta
        </PopoverBadgeButton>
        <Popover aria-label="Popover">

        This product is in beta, which means we're still working out all the kinks. Let us know if you spot any bugs.

        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <InteractiveTrigger />
)
`.trim(),$=`
const HorizontalTabsExample = () => {
  const selectedId = useUID();
  return (
    <Tabs selectedId={selectedId} baseId="horizontal-tabs-example">
      <TabList aria-label="Horizontal product tabs">
        <Tab id={selectedId}>Owl Inc.</Tab>
        <Tab>Out of Organization</Tab>
        <Tab>
          <Stack orientation="horizontal" spacing="space20">
            Invitations
            <Badge as="span" variant="neutral_counter">50</Badge>
          </Stack>
        </Tab>
      </TabList>
    </Tabs>
  );
};


render(
  <HorizontalTabsExample />
)
`.trim();var G=n(40615),H=!0;let V={title:"Badge - Components",package:"@twilio-paste/badge",description:"A badge is a visually highlighted text label that describes an attribute of an object.",slug:"/components/badge/"},U=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:j,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/badge",storybookUrl:"/?path=/story/components-badge--all-badges"}}}),j=[{value:"Guidelines",depth:2},{value:"About Badge",depth:2},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Variants",depth:3},{value:"Neutral",depth:4},{value:"Warning",depth:4},{value:"Error Badge",depth:4},{value:"Success Badge",depth:4},{value:"New Badge",depth:4},{value:"Subaccount Badge",depth:4},{value:"Decorative",depth:3},{value:"Brand",depth:3},{value:"Counter",depth:3},{value:"Badge with anchor functionality",depth:3},{value:"Badge with button functionality",depth:3},{value:"Small Badges",depth:3},{value:"Composition notes",depth:2},{value:"Use cases",depth:3},{value:"Call attention to attributes of table items",depth:4},{value:"Identify an item as as a beta release",depth:4},{value:"Highlight products",depth:4},{value:"Show an invitation count",depth:4},{value:"Do and don't",depth:3},{value:"Usage Guide",depth:2},{value:"API",depth:3},{value:"Installation",depth:4},{value:"Usage",depth:4},{value:"Props",depth:4},{value:"Badge",depth:5}],F=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)},X={meta:V,getStaticProps:U,mdxHeadings:j},Y=G.A;function q({components:e,...a}){return(0,t.yg)(Y,{...X,...a,components:e,mdxType:"MDXLayout"},(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,InformationIcon:g.InformationIcon,ErrorIcon:m.ErrorIcon,WarningIcon:p.WarningIcon,SuccessIcon:u.SuccessIcon,NewIcon:y.NewIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space40" rowGap="space60" flexWrap="wrap">
  <Badge as="span" variant="neutral">
    Neutral
  </Badge>
  <Badge as="span" variant="warning">
    Warning
  </Badge>
  <Badge as="span" variant="error">
    Error
  </Badge>
  <Badge as="span" variant="success">
    Success
  </Badge>
  <Badge as="span" variant="new">
    New
  </Badge>
  <Badge as="span" variant="subaccount">
    Subaccount
  </Badge>
  <Badge as="span" variant="decorative10">
    Decorative 10
  </Badge>
  <Badge as="span" variant="decorative20">
    Decorative 20
  </Badge>
  <Badge as="span" variant="decorative30">
    Decorative 30
  </Badge>
  <Badge as="span" variant="decorative40">
    Decorative 40
  </Badge>
  <Badge as="span" variant="brand10">
    Brand 10
  </Badge>
  <Badge as="span" variant="brand20">
    Brand 20
  </Badge>
  <Badge as="span" variant="brand30">
    Brand 30
  </Badge>
  <Badge as="span" variant="neutral_counter">
    1
  </Badge>
  <Badge as="span" variant="error_counter">
    1
  </Badge>
  <Badge as="span" variant="notification_counter">
    100
  </Badge>
</Box>
`.trim()),(0,t.yg)("h2",null,"Guidelines"),(0,t.yg)("h2",null,"About Badge"),(0,t.yg)("p",null,`A Badge can be used to label a piece of UI for quick identification.
It can be used in a wide variety of situations, such as labeling Beta product features
or an attribute such as “Inbound” or “Outbound”. A Badge can also be used to show a count,
such as the number of new messages.`),(0,t.yg)("p",null,"A Badge should contain text content and can optionally contain an ",(0,t.yg)("a",{parentName:"p",href:"/components/icon"},"Icon"),`.
Text length should be kept short, generally 1-3 words.`),(0,t.yg)("h3",null,"Accessibility"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Ensure that Badge text can be understood immediately, so the user does not have to rely on color to communicate meaning."),(0,t.yg)("li",{parentName:"ul"},"For Status Badges, it's recommended to include an icon to reinforce meaning.")),(0,t.yg)("h2",null,"Examples"),(0,t.yg)("h3",null,"Variants"),(0,t.yg)("p",null,"Use Badge variants such as ",(0,t.yg)("inlineCode",{parentName:"p"},"success")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"warning"),` when the Badge is intended to communicate a specific,
semantic attribute, such as “warning” or “new”. These Badges should generally have an `,(0,t.yg)("a",{parentName:"p",href:"/components/icon"},"Icon"),` that
should be prefixed before the text.`),(0,t.yg)("h4",null,"Neutral"),(0,t.yg)("p",null,"Use the neutral Badge to highlight neutral attributes of an object. An information icon is optional."),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,InformationIcon:g.InformationIcon,ErrorIcon:m.ErrorIcon,WarningIcon:p.WarningIcon,SuccessIcon:u.SuccessIcon,NewIcon:y.NewIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space80">
  <Badge as="span" variant="neutral">
    Neutral
  </Badge>
  <Badge as="span" variant="neutral">
    <InformationIcon decorative />
    Neutral
  </Badge>
</Box>
`.trim()),(0,t.yg)("h4",null,"Warning"),(0,t.yg)("p",null,"Use the warning Badge to highlight attributes of an object that the user must be made aware of to avoid incurring an error. A warning icon is recommended."),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,InformationIcon:g.InformationIcon,ErrorIcon:m.ErrorIcon,WarningIcon:p.WarningIcon,SuccessIcon:u.SuccessIcon,NewIcon:y.NewIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space80">
  <Badge as="span" variant="warning">
    Warning
  </Badge>
  <Badge as="span" variant="warning">
    <WarningIcon decorative />
    Warning
  </Badge>
</Box>
`.trim()),(0,t.yg)("h4",null,"Error Badge"),(0,t.yg)("p",null,"Use the error Badge to highlight attributes of an object that signal to the user that they object is in bad or broken state. An error icon is recommended."),(0,t.yg)("p",null,"Do not use an error Badge unless there is additional guidance elsewhere on the page that explains to the user how to fix the broken state."),(0,t.yg)("p",null,"For additional guidance on how to compose error messages, refer to the ",(0,t.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,InformationIcon:g.InformationIcon,ErrorIcon:m.ErrorIcon,WarningIcon:p.WarningIcon,SuccessIcon:u.SuccessIcon,NewIcon:y.NewIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space80">
  <Badge as="span" variant="error">
    Error
  </Badge>
  <Badge as="span" variant="error">
    <ErrorIcon decorative />
    Error
  </Badge>
</Box>
`.trim()),(0,t.yg)("h4",null,"Success Badge"),(0,t.yg)("p",null,`Use the success Badge to highlight attributes of an object that were completed or are considered to be in a good
state. A success icon is recommended.`),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,InformationIcon:g.InformationIcon,ErrorIcon:m.ErrorIcon,WarningIcon:p.WarningIcon,SuccessIcon:u.SuccessIcon,NewIcon:y.NewIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space80">
  <Badge as="span" variant="success">
    Success
  </Badge>
  <Badge as="span" variant="success">
    <SuccessIcon decorative />
    Success
  </Badge>
</Box>
`.trim()),(0,t.yg)("h4",null,"New Badge"),(0,t.yg)("p",null,"Use the new Badge to highlight an object that is new, beta, pilot, or experimental. A new icon is recommended."),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,InformationIcon:g.InformationIcon,ErrorIcon:m.ErrorIcon,WarningIcon:p.WarningIcon,SuccessIcon:u.SuccessIcon,NewIcon:y.NewIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space80">
  <Badge as="span" variant="new">
    New
  </Badge>
  <Badge as="span" variant="new">
    <NewIcon decorative />
    New
  </Badge>
</Box>
`.trim()),(0,t.yg)("h4",null,"Subaccount Badge"),(0,t.yg)("p",null,`The subaccount Badge is reserved for specific use cases only. Consult with the Console team before implementing this variant.
A users icon is recommended.`),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,UsersIcon:h.UsersIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space80">
  <Badge as="span" variant="subaccount">
    Subaccount
  </Badge>
  <Badge as="span" variant="subaccount">
    <UsersIcon decorative />
    Subaccount
  </Badge>
</Box>
`.trim()),(0,t.yg)("h3",null,"Decorative"),(0,t.yg)("p",null,`Use the decorative Badge to highlight attributes that do not have a strictly semantic meaning (like warning, error, or success)
but would benefit from the visual affordance of differently-colored Badges. Icons are optional, and should appear before the text.`),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,SMSCapableIcon:x.SMSCapableIcon,MMSCapableIcon:b.MMSCapableIcon,VoiceCapableIcon:f.VoiceCapableIcon,FaxCapableIcon:I.FaxCapableIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space80">
  <Badge as="span" variant="decorative10">
    <VoiceCapableIcon decorative />
    Voice
  </Badge>
  <Badge as="span" variant="decorative20">
    <SMSCapableIcon decorative />
    SMS
  </Badge>
  <Badge as="span" variant="decorative30">
    <MMSCapableIcon decorative />
    MMS
  </Badge>
  <Badge as="span" variant="decorative40">
    <FaxCapableIcon decorative />
    MMS
  </Badge>
</Box>
`.trim()),(0,t.yg)("h3",null,"Brand"),(0,t.yg)("p",null,"Use the brand Badge for cross-selling opportunities across platforms (e.g., Segment, SendGrid, Communications, Flex) and pricing plans. Use these sparingly."),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,ProductSendGridIcon:C.ProductSendGridIcon,ProductSegmentIcon:T.ProductSegmentIcon,ProductCommsIcon:w.ProductCommsIcon,FaxCapableIcon:I.FaxCapableIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space80">
  <Badge as="span" variant="brand10">
    <ProductCommsIcon decorative />
    Twilio CPaaS
  </Badge>
  <Badge as="span" variant="brand20">
    <ProductSendGridIcon decorative />
    Twilio SendGrid
  </Badge>
  <Badge as="span" variant="brand30">
    <ProductSegmentIcon decorative />
    Twilio Segment CDP
  </Badge>
</Box>
`.trim()),(0,t.yg)("h3",null,"Counter"),(0,t.yg)("p",null,"Use the counter Badge to visually highlight a count in a UI, like the number of pending invitations or the number of errors."),(0,t.yg)("p",null,"Counter Badges have neutral, error, and notification variants. The error variant should always include an error icon. The notification variant informs users of new or unread items, such as messages, notifications, or updates."),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,InformationIcon:g.InformationIcon,ErrorIcon:m.ErrorIcon,WarningIcon:p.WarningIcon,SuccessIcon:u.SuccessIcon,NewIcon:y.NewIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space80">
  <Badge as="span" variant="neutral_counter">
    100
  </Badge>
  <Badge as="span" variant="error_counter">
    100
  </Badge>
  <Badge as="span" variant="notification_counter">
    100
  </Badge>
</Box>
`.trim()),(0,t.yg)("h3",null,"Badge with anchor functionality"),(0,t.yg)("p",null,`A badge can link to other pages.
To do so, add an `,(0,t.yg)("inlineCode",{parentName:"p"},"href")," prop and set ",(0,t.yg)("inlineCode",{parentName:"p"},'as="a"')," on the Badge."),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,InformationIcon:g.InformationIcon,ErrorIcon:m.ErrorIcon,WarningIcon:p.WarningIcon,SuccessIcon:u.SuccessIcon,NewIcon:y.NewIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space40" rowGap="space60" flexWrap="wrap">
  <Badge as="a" href="https://www.twilio.com/docs" variant="neutral">
    <InformationIcon decorative/>
    Info
  </Badge>
</Box>
`.trim()),(0,t.yg)("h3",null,"Badge with button functionality"),(0,t.yg)("p",null,"A Badge can also be used to trigger an in-page action, such as showing a ",(0,t.yg)("a",{parentName:"p",href:"/components/popover"},"Popover")," or ",(0,t.yg)("a",{parentName:"p",href:"/components/modal"},"Modal"),`.
To do so, provide an `,(0,t.yg)("inlineCode",{parentName:"p"},"onClick")," event handler and set ",(0,t.yg)("inlineCode",{parentName:"p"},'as="button"'),` on the Badge.
Refer to the `,(0,t.yg)("a",{parentName:"p",href:"/components/popover/#popoverbadgebutton"},"PopoverBadgeButton"),` section
of the Popover docs to add a Popover to a Badge.`),(0,t.yg)(F,{scope:{Modal:c.aF,ModalBody:c.cw,ModalFooter:c.jl,ModalFooterActions:c.ox,ModalHeader:c.rQ,ModalHeading:c.EZ,useUID:M.GV,Button:d.$n,Paragraph:k.f,Badge:o.Ex,Box:S.az,NewIcon:y.NewIcon,Popover:D.AM,PopoverBadgeButton:D.Fy,PopoverContainer:D.de,Text:i.EY},noInline:!0,mdxType:"LivePreview"},O),(0,t.yg)("h3",null,"Small Badges"),(0,t.yg)("p",null,"Use a small Badge only when vertical density is a concern. The guidelines for using variants in a small Badge are the same as in their default size."),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,InformationIcon:g.InformationIcon,ErrorIcon:m.ErrorIcon,WarningIcon:p.WarningIcon,SuccessIcon:u.SuccessIcon,NewIcon:y.NewIcon},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" columnGap="space40" rowGap="space60" flexWrap="wrap">
  <Badge as="span" size="small" variant="neutral">
    Neutral
  </Badge>
  <Badge as="span" size="small" variant="warning">
    Warning
  </Badge>
  <Badge as="span" size="small" variant="error">
    Error
  </Badge>
  <Badge as="span" size="small" variant="success">
    Success
  </Badge>
  <Badge as="span" size="small" variant="new">
    New
  </Badge>
  <Badge as="span" size="small" variant="subaccount">
    Subaccount
  </Badge>
</Box>
`.trim()),(0,t.yg)("hr",null),(0,t.yg)("h2",null,"Composition notes"),(0,t.yg)("p",null,"Use a Badge when you want to add a label to a piece of UI for quick identification and navigation."),(0,t.yg)("p",null,"Badge labels should be 1-3 words and ideally less than 20 characters. Badge labels can also be numbers."),(0,t.yg)("p",null,"Use sentence case for Badge labels. Do not wrap Badge text to more than one line."),(0,t.yg)("p",null,"Use the same grammatical construction for a set of Badges. For example, if a set of Badges highlights statuses, make each Badge an adjective."),(0,t.yg)("h3",null,"Use cases"),(0,t.yg)("h4",null,"Call attention to attributes of table items"),(0,t.yg)(F,{scope:{Box:S.az,Table:R.XI,THead:R.D1,Td:R.Td,Th:R.Th,Tr:R.Tr,Text:i.EY,TBody:R.vc,Badge:o.Ex},language:"jsx",mdxType:"LivePreview"},L.trim()),(0,t.yg)("h4",null,"Identify an item as as a beta release"),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,Card:r.Z,NewIcon:y.NewIcon,Heading:l.D,Paragraph:k.f,Popover:D.AM,PopoverBadgeButton:D.Fy,PopoverContainer:D.de},language:"jsx",mdxType:"LivePreview"},_.trim()),(0,t.yg)("h4",null,"Highlight products"),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,Grid:E.x,Column:E.V,RadioGroup:s.z6,Radio:s.sx,ProductElasticSIPTrunkingIcon:B.ProductElasticSIPTrunkingIcon,ProductVoiceIcon:v.ProductVoiceIcon},language:"jsx",noInline:!0,mdxType:"LivePreview"},W.trim()),(0,t.yg)("h4",null,"Show an invitation count"),(0,t.yg)(F,{scope:{Box:S.az,Badge:o.Ex,Tabs:N.tU,Tab:N.oz,TabList:N.wb,TabPanels:N.T2,TabPanel:N.Kp,useUID:M.GV,Heading:l.D,Card:r.Z,Paragraph:k.f,Stack:P.B},language:"jsx",noInline:!0,mdxType:"LivePreview"},$.trim()),(0,t.yg)("hr",null),(0,t.yg)("h3",null,"Do and don't"),(0,t.yg)(A.l,{mdxType:"DoDont"},(0,t.yg)(A.Do,{title:"Do",body:"Use Badge to highlight an attribute of an object for quick identification.",mdxType:"Do"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(o.Ex,{variant:"new",as:"span",mdxType:"Badge"},(0,t.yg)(y.NewIcon,{title:"Beta",size:"sizeIcon10",mdxType:"NewIcon"}),"Beta"))),(0,t.yg)(A.w,{title:"Don't",body:"Don’t use Display Pill or Form Pill to highlight an attribute of an object for quick identification.",mdxType:"Dont"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(z.E,{mdxType:"DisplayPill"},"Beta")))),(0,t.yg)(A.l,{mdxType:"DoDont"},(0,t.yg)(A.Do,{title:"Do",body:"Use 1-3 words and sentence case for Badge text.",mdxType:"Do"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(o.Ex,{variant:"new",as:"span",mdxType:"Badge"},(0,t.yg)(y.NewIcon,{title:"New Badge component",size:"sizeIcon10",mdxType:"NewIcon"}),"New Component"))),(0,t.yg)(A.w,{title:"Don't",body:"Don't use lengthy copy inside a Badge.",mdxType:"Dont"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(o.Ex,{variant:"error",as:"span",mdxType:"Badge"},"This is some very long text inside a Badge that creates a very large Badge.")))),(0,t.yg)(A.l,{mdxType:"DoDont"},(0,t.yg)(A.Do,{title:"Do",body:"Set the Badge children to be inline.",mdxType:"Do"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(o.Ex,{variant:"new",as:"span",mdxType:"Badge"},"Inline Badge"))),(0,t.yg)(A.w,{title:"Don't",body:"Don't use multiline Badge text.",mdxType:"Dont"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(o.Ex,{variant:"new",as:"span",mdxType:"Badge"},"This",(0,t.yg)(S.az,{as:"br",mdxType:"Box"})," is ",(0,t.yg)(S.az,{as:"br",mdxType:"Box"}),"not ideal")))),(0,t.yg)(A.l,{mdxType:"DoDont"},(0,t.yg)(A.Do,{title:"Do",body:"Use semantic variants, such as Error, Warning, and Success, in semantic ways.",mdxType:"Do"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(P.B,{orientation:"vertical",spacing:"space30",mdxType:"Stack"},(0,t.yg)(o.Ex,{variant:"warning",as:"span",mdxType:"Badge"},(0,t.yg)(p.WarningIcon,{decorative:!0,mdxType:"WarningIcon"}),"Token expiring"),(0,t.yg)(o.Ex,{variant:"error",as:"span",mdxType:"Badge"},(0,t.yg)(m.ErrorIcon,{decorative:!0,mdxType:"ErrorIcon"}),"Token Missing")))),(0,t.yg)(A.w,{title:"Don't",body:"Don’t use semantic variants for non-semantic use cases. Instead, use the Decorative variants.",mdxType:"Dont"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(P.B,{orientation:"vertical",spacing:"space30",mdxType:"Stack"},(0,t.yg)(o.Ex,{variant:"warning",as:"span",mdxType:"Badge"},"Inbound"),(0,t.yg)(o.Ex,{variant:"error",as:"span",mdxType:"Badge"},"Outbound"))))),(0,t.yg)(A.l,{mdxType:"DoDont"},(0,t.yg)(A.Do,{title:"Do",body:"Match the icon to the Badge variant (when not using Decorative Badges).",mdxType:"Do"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(o.Ex,{variant:"warning",as:"span",mdxType:"Badge"},(0,t.yg)(p.WarningIcon,{title:"warning",size:"sizeIcon10",mdxType:"WarningIcon"}),"Warning"))),(0,t.yg)(A.w,{title:"Don't",body:"Don’t use the wrong icon in the wrong Badge variant.",mdxType:"Dont"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(o.Ex,{variant:"warning",as:"span",mdxType:"Badge"},(0,t.yg)(g.InformationIcon,{title:"warning",size:"sizeIcon10",mdxType:"InformationIcon"}),"Warning")))),(0,t.yg)(A.l,{mdxType:"DoDont"},(0,t.yg)(A.Do,{title:"Do",body:"When using Icons in Badge, place the Icon before the label.",mdxType:"Do"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(o.Ex,{variant:"success",as:"span",mdxType:"Badge"},(0,t.yg)(u.SuccessIcon,{title:"success",size:"sizeIcon10",mdxType:"SuccessIcon"}),"Success"))),(0,t.yg)(A.w,{title:"Don't",body:"When using Icons in Badge, don’t place the icon after the label.",mdxType:"Dont"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(o.Ex,{variant:"success",as:"span",mdxType:"Badge"},"Success",(0,t.yg)(u.SuccessIcon,{title:"success",size:"sizeIcon10",mdxType:"SuccessIcon"}))))),(0,t.yg)(A.l,{mdxType:"DoDont"},(0,t.yg)(A.Do,{title:"Do",body:"Ensure badge text communicates the problem.",mdxType:"Do"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(o.Ex,{variant:"error",as:"span",mdxType:"Badge"},(0,t.yg)(m.ErrorIcon,{title:"error",size:"sizeIcon10",mdxType:"ErrorIcon"}),"Token missing"))),(0,t.yg)(A.w,{title:"Don't",body:"Don’t rely just on color to communicate meaning.",mdxType:"Dont"},(0,t.yg)(S.az,{alignItems:"center",display:"flex",justifyContent:"space-around",height:"100%",paddingX:"space60",mdxType:"Box"},(0,t.yg)(o.Ex,{variant:"error",as:"span",mdxType:"Badge"},(0,t.yg)(m.ErrorIcon,{title:"error",size:"sizeIcon10",mdxType:"ErrorIcon"}),"Token")))),(0,t.yg)("hr",null),(0,t.yg)("h2",null,"Usage Guide"),(0,t.yg)("h3",null,"API"),(0,t.yg)("h4",null,"Installation"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/badge - or - yarn add @twilio-paste/core
`)),(0,t.yg)("h4",null,"Usage"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-jsx"},`import { Badge } from "@twilio-paste/core/badge";

const BadgeExample = () => (
  <Badge as="span" variant="neutral">
    Default Badge
  </Badge>
);
`)),(0,t.yg)("h4",null,"Props"),(0,t.yg)("h5",null,"Badge"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Prop"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"),(0,t.yg)("th",{parentName:"tr",align:null},"Default"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"children"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"NonNullable<React.ReactNode>")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"null"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"variant"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"BadgeVariants")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"neutral"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"success"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"warning"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"error"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"new"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"subaccount"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"decorative10"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"decorative20"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"decorative30"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"decorative40"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"neutral_counter"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"error_counter")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"null"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"size"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"BadgeSizes")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"default"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"small")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"default"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"as"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"BadgeBaseElements")),(0,t.yg)("td",{parentName:"tr",align:null},"The HTML tag to use as base - ",(0,t.yg)("inlineCode",{parentName:"td"},"span"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"button"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"a")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"null"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"href?"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"string")),(0,t.yg)("td",{parentName:"tr",align:null},"A URL to route to. Must use ",(0,t.yg)("inlineCode",{parentName:"td"},'as="a"')," for this prop to work."),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"undefined"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"onClick?"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"MouseEventHandler<HTMLButtonElement>")),(0,t.yg)("td",{parentName:"tr",align:null},"React event handler. Must use ",(0,t.yg)("inlineCode",{parentName:"td"},'as="button"')," for this prop to work."),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"undefined"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"element?"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"string")),(0,t.yg)("td",{parentName:"tr",align:null},"Overrides the default element name to apply unique styles with the Customization Provider"),(0,t.yg)("td",{parentName:"tr",align:null},"'BADGE'")))))}q.isMDXComponent=!0},3738:(e,a,n)=>{"use strict";n.d(a,{V:()=>c,x:()=>d});var t=n(76127),o=n(55729),r=e=>"margin"===e?"auto":"space0",i=(e,a,n)=>{let t=r(a),o=(({prefix:e,responsive:a,defaultValue:n})=>{let t=()=>a?[,,,].fill(n):n;return{[`${e}Top`]:t(),[`${e}Bottom`]:t(),[`${e}Right`]:t(),[`${e}Left`]:t()}})({prefix:a,responsive:!1,defaultValue:t});return void 0===n||(e?(o[`${a}Top`]=n,o[`${a}Bottom`]=n):(o[`${a}Right`]=n,o[`${a}Left`]=n)),o},l=(e,a,n)=>{let t=r(a),o={[`${a}Top`]:[t,t,t],[`${a}Bottom`]:[t,t,t],[`${a}Right`]:[t,t,t],[`${a}Left`]:[t,t,t]},i=Array.isArray(n)&&0===n.length;return void 0===n||i||e.forEach((e,t)=>{let r=Array.isArray(n)?n[t]:n;e?(o[`${a}Top`][t]=r,o[`${a}Bottom`][t]=r):(o[`${a}Right`][t]=r,o[`${a}Left`][t]=r)}),o},d=o.forwardRef(({as:e,children:a,element:n="GRID",equalColumnHeights:r,gutter:d,marginTop:c,marginBottom:s,vertical:g=!1,...p},u)=>{let m=o.useMemo(()=>o.Children.map(a,e=>o.isValidElement(e)?o.cloneElement(e,{count:o.Children.count(a),gutter:d,vertical:g,stretchColumnContent:r}):e),[a,g,r,d]),y=o.useMemo(()=>((e,a=!1)=>{let n=(e=>Array.isArray(e)?e.map(e=>"space0"!==e?e.replace("space","spaceNegative"):"space0"===e?"space0":null):"space0"===e?"space0":e&&"string"==typeof e?e.replace("space","spaceNegative"):"auto")(e);return Array.isArray(a)?l(a,"margin",n):i(a,"margin",n)})(d,g),[d,g]),h=o.useMemo(()=>(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e&&!0===e?"column":"row"):e?"column":"row")(g),[g]);return o.createElement(t.az,{...(0,t.x8)(p),ref:u,as:e,alignItems:r?"stretch":null,element:n,flexDirection:h,flexWrap:"wrap",display:"flex",...y,marginTop:c,marginBottom:s,minWidth:"size0",rowGap:p.rowGap,columnGap:p.columnGap},m)});d.displayName="Grid";var c=o.forwardRef(({as:e,children:a,count:n,element:r="COLUMN",gutter:d,offset:c,span:s,stretchColumnContent:g,vertical:p,...u},m)=>{let y=o.useMemo(()=>(({count:e,span:a,gutter:n,offset:t,vertical:o,stretchColumnContent:r})=>{let d={width:(({count:e,span:a})=>Array.isArray(a)&&e?a.map(e=>`${e/12*100}%`):"number"==typeof a&&e&&e<=12?`${a/12*100}%`:void 0!==e?`${1/e*100}%`:"8.333333333333332%")({count:e,span:a}),...(({vertical:e,gutter:a})=>Array.isArray(e)?l(e,"padding",a):i(e,"padding",a))({gutter:n,vertical:o})};return t&&(d.marginLeft=(e=>Array.isArray(e)?e.map(e=>`${e/12*100}%`):`${e/12*100}%`)(t)),o&&!t&&(d.minWidth=(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e?!0===e?"100%":"0":null):e?"100%":"0")(o),d.marginLeft="space0"),r&&(d.alignContent="stretch",d.display="flex"),d})({count:n,gutter:d,offset:c,span:s,stretchColumnContent:g,vertical:p}),[n,d,c,s,g,p]);return o.createElement(t.az,{...(0,t.x8)(u),...y,as:e,element:r,ref:m},a)});c.displayName="Column"},17938:(e,a,n)=>{"use strict";n.d(a,{Z:()=>r});var t=n(76127),o=n(55729),r=o.forwardRef(({children:e,element:a="CARD",padding:n="space100",paddingBottom:r,paddingLeft:i,paddingRight:l,paddingTop:d,fillHeight:c,fillWidth:s,...g},p)=>o.createElement(t.az,{...(0,t.x8)(g),ref:p,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:a,padding:n,paddingBottom:r,paddingLeft:i,paddingRight:l,paddingTop:d,backgroundColor:"colorBackgroundWeakest",height:c?"100%":void 0,width:s?"100%":void 0},e));r.displayName="Card"},18583:(e,a,n)=>{"use strict";n.r(a),n.d(a,{ProductSegmentIcon:()=>i});var t=n(36669),o=n(55729),r=n(96316);let i=o.forwardRef(({as:e,display:a,element:n="ICON",size:i,color:l,title:d,decorative:c},s)=>{let g=`ProductSegmentIcon-${(0,t.GV)()}`;if(!c&&null==d)throw Error("[ProductSegmentIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:n,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":g},d?o.createElement("title",{id:g},d):null,o.createElement("path",{fill:"currentColor",d:"M11.6 4.25C11.1 4.1 10.55 4 10 4 7.55 4 5.5 5.45 4.55 7.55c-.1.25-.35.35-.6.25L3 7.45c-.3-.1-.4-.45-.3-.7C3.95 3.95 6.75 2 10 2c.75 0 1.5.1 2.2.35.3.1.45.4.35.65l-.35.95c-.1.25-.35.35-.6.3zm3.9.25a1 1 0 11-2 0 1 1 0 012 0zM9.05 9h7.9c.3 0 .55-.25.6-.55V7.5c0-.3-.25-.55-.55-.55H9.05c-.3 0-.55.25-.55.55v.95c0 .3.25.55.55.55zm-6 4h7.9c.3 0 .55-.25.6-.5v-.95c0-.3-.25-.55-.55-.55H3.05c-.3 0-.55.25-.55.5v.95c0 .3.25.55.55.55zm2.45 3.5a1 1 0 100-2 1 1 0 000 2zM10 16c-.55 0-1.1-.1-1.6-.25-.25-.05-.5.05-.6.3l-.35.95c-.1.25.05.55.35.65.7.25 1.45.35 2.2.35 3.25 0 6.05-1.95 7.3-4.75.1-.25 0-.6-.3-.7l-.95-.35c-.25-.1-.5 0-.6.25-.95 2.1-3 3.55-5.45 3.55z"})))});i.displayName="ProductSegmentIcon"},22275:(e,a,n)=>{"use strict";n.d(a,{a:()=>l});var t=n(76127),o=n(8909),r=n(86146),i=n(55729),l=i.forwardRef(({children:e,disabled:a,element:n="INLINE_CONTROL_GROUP",errorText:l,helpText:d,legend:c,orientation:s="vertical",required:g,i18nRequiredLabel:p,fieldStyleProps:u,...m},y)=>{let h=!!u;return i.createElement(t.az,{...(0,t.x8)(m),as:"fieldset",element:n,margin:"space0",padding:"space0",minWidth:"0px",borderWidth:"borderWidth0",ref:y},i.createElement(r.J,{as:"legend",element:"LEGEND",htmlFor:void 0,required:g,marginBottom:"space0",disabled:a,i18nRequiredLabel:p},c),d&&i.createElement(o.$,{marginTop:"space0"},d),i.createElement(t.az,{element:`${n}_SET`,marginRight:h?void 0:"space20"},i.createElement(t.az,{display:h&&"horizontal"===s?"inline-flex":"block",width:h?"100%":void 0},i.Children.map(e,(e,a)=>i.createElement(t.az,{element:`${n}_FIELD`,display:"horizontal"===s?"inline-block":"block",flexBasis:h?"50%":void 0,marginTop:u?.marginTop?0===a&&"vertical"===s?"space40":u?.marginTop:"space40",marginRight:"horizontal"!==s||h?null:"space70",marginLeft:h&&"horizontal"===s?0===a?"space0":"space30":"space0"},e))),l&&i.createElement(t.az,{element:`${n}_ERROR_TEXT_WRAPPER`,marginTop:"space40"},i.createElement(o.$,{variant:"error"},l))))});l.displayName="InlineControlGroup"},24622:(e,a,n)=>{"use strict";n.r(a),n.d(a,{MMSCapableIcon:()=>i});var t=n(36669),o=n(55729),r=n(96316);let i=o.forwardRef(({as:e,display:a,element:n="ICON",size:i,color:l,title:d,decorative:c},s)=>{let g=`MMSCapableIcon-${(0,t.GV)()}`;if(!c&&null==d)throw Error("[MMSCapableIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:n,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":g},d?o.createElement("title",{id:g},d):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.5 3A1.502 1.502 0 0118 4.5v10a1.502 1.502 0 01-1.5 1.5H9.667L5.8 18.9a.5.5 0 01-.8-.4V16H3.5A1.502 1.502 0 012 14.5v-10A1.502 1.502 0 013.5 3zm0 1h-13a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h2a.5.5 0 01.5.5v2l3.2-2.4a.5.5 0 01.3-.1h7a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5zm-4.985 2.886a1 1 0 01.82.445l2.582 3.893c.008.013.01.028.017.041.03.06.05.124.057.191.002.015.009.028.009.044l-.01.047a.484.484 0 01-.18.336c-.012.01-.02.025-.034.034l-.103.048A.497.497 0 0114.5 12h-9a.5.5 0 110-1h.746l1.55-2.323a.976.976 0 01.72-.44c.263-.03.529.046.736.213l.407.327 1.026-1.464a1 1 0 01.83-.427zm-.012.999l-1.332 1.903a.5.5 0 01-.723.102l-.821-.66L7.447 11h6.121l-2.065-3.115zM6.807 5.5a.75.75 0 110 1.5.75.75 0 010-1.5z"})))});i.displayName="MMSCapableIcon"},25125:(e,a,n)=>{"use strict";n.r(a),n.d(a,{FaxCapableIcon:()=>i});var t=n(36669),o=n(55729),r=n(96316);let i=o.forwardRef(({as:e,display:a,element:n="ICON",size:i,color:l,title:d,decorative:c},s)=>{let g=`FaxCapableIcon-${(0,t.GV)()}`;if(!c&&null==d)throw Error("[FaxCapableIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:n,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":g},d?o.createElement("title",{id:g},d):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.08 2l.135.009c.179.024.349.094.492.204l.103.09 2.887 2.887.09.103c.11.143.18.313.204.492l.009.136V8l-.007.083c.543.189.944.68 1 1.273L18 9.5v7a1.5 1.5 0 01-1.356 1.493L16.5 18h-14a1.5 1.5 0 01-1.493-1.356L1 16.5v-7a1.5 1.5 0 011.356-1.493L2.5 8H3V5.5a1.5 1.5 0 011.356-1.493L4.5 4h1a1.5 1.5 0 011.493 1.356L7 5.5V8h1V3.033l.006-.112c.052-.478.43-.858.906-.914L9.033 2h4.046zM3 9h-.5a.5.5 0 00-.492.41L2 9.5v7a.5.5 0 00.41.492L2.5 17h14a.5.5 0 00.492-.41L17 16.5v-7a.5.5 0 00-.41-.492L16.5 9H7v5.5a1.5 1.5 0 01-1.356 1.493L5.5 16h-1a1.5 1.5 0 01-1.493-1.356L3 14.5V9zm6.5 6a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zM5.5 5h-1a.5.5 0 00-.492.41L4 5.5v9a.5.5 0 00.41.492L4.5 15h1a.5.5 0 00.492-.41L6 14.5v-9a.5.5 0 00-.5-.5zm4 8a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm-6-2a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm-3-8H9.033l-.016.005-.012.012L9 3.033V8h7V6.5h-2.492c-.52 0-.947-.393-1.002-.898l-.006-.11V3zm1 .407v2.085l.002.006.006.002 2.084-.001L13.5 3.407z"})))});i.displayName="FaxCapableIcon"},27578:(e,a,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/badge",function(){return n(2062)}])},32961:(e,a,n)=>{"use strict";n.r(a),n.d(a,{VoiceCapableIcon:()=>i});var t=n(36669),o=n(55729),r=n(96316);let i=o.forwardRef(({as:e,display:a,element:n="ICON",size:i,color:l,title:d,decorative:c},s)=>{let g=`VoiceCapableIcon-${(0,t.GV)()}`;if(!c&&null==d)throw Error("[VoiceCapableIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:n,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":g},d?o.createElement("title",{id:g},d):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.023 18.004a4.191 4.191 0 01-2.026-.526l-.248-.148a33.635 33.635 0 01-9.076-9.08 4.17 4.17 0 01.559-5.229l.516-.516a1.733 1.733 0 012.445 0L8.376 4.69c.627.637.66 1.638.102 2.313l-.112.123a.731.731 0 000 1.032l3.478 3.478c.11.11.25.181.4.205l.116.01a.723.723 0 00.515-.214 1.734 1.734 0 012.446-.001l2.174 2.172c.673.676.673 1.77 0 2.446l-.516.516a4.17 4.17 0 01-2.956 1.234zm-1.72-1.507c1.26.81 2.914.63 3.97-.434l.515-.515a.732.732 0 000-1.033l-2.174-2.172a.732.732 0 00-1.032 0 1.73 1.73 0 01-2.443.002l-3.48-3.48a1.732 1.732 0 010-2.446.729.729 0 00.076-.943l-.083-.096-2.166-2.168a.732.732 0 00-1.032 0l-.515.516a3.17 3.17 0 00-.436 3.966 32.641 32.641 0 008.282 8.446l.517.357z"})))});i.displayName="VoiceCapableIcon"},40615:(e,a,n)=>{"use strict";n.d(a,{A:()=>y});var t=n(72387),o=n(76127),r=n(95669),i=n.n(r),l=n(81278);n(55729);var d=n(10511),c=n(43084),s=n(10732),g=n(62887),p=n(63437),u=n(38992);let m={h1:()=>null},y=({children:e,meta:a,navigationData:n,data:r,mdxHeadings:y,pageHeaderData:{categoryRoute:h,githubUrl:v,storybookUrl:B}})=>{let x=a.title?`${a.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,b=a.description||u.DZ.DESCRIPTION,f=(0,l.useRouter)();return(0,t.FD)(p.T,{navigationData:n,children:[(0,t.FD)(i(),{children:[(0,t.Y)("title",{children:x}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${f.pathname}`}),(0,t.Y)("meta",{name:"description",content:b},"description")]}),(0,t.FD)(d.s,{children:[(0,t.Y)(g.c,{categoryRoute:h,githubUrl:v,storybookUrl:B,data:r}),(0,t.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(s.i,{data:y}),(0,t.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(c.Q,{componentOverrides:a.package?m:{},children:e})})]})]})]})}},41571:(e,a,n)=>{"use strict";n.r(a),n.d(a,{ProductElasticSIPTrunkingIcon:()=>i});var t=n(36669),o=n(55729),r=n(96316);let i=o.forwardRef(({as:e,display:a,element:n="ICON",size:i,color:l,title:d,decorative:c},s)=>{let g=`ProductElasticSIPTrunkingIcon-${(0,t.GV)()}`;if(!c&&null==d)throw Error("[ProductElasticSIPTrunkingIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:n,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":g},d?o.createElement("title",{id:g},d):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.68 15.202c.74.414.995 1.33.567 2.048-.428.717-1.376.963-2.118.55-.742-.414-.996-1.33-.569-2.048.206-.345.544-.597.942-.7.397-.103.821-.049 1.177.15zM3.55 6.097c1.644-2.846 4.91-4.442 8.254-4.034a.507.507 0 01.452.562.518.518 0 01-.581.438C8.753 2.71 5.902 4.106 4.465 6.59c-1.437 2.485-1.173 5.564.666 7.787a.489.489 0 01-.077.7v.01a.53.53 0 01-.73-.08c-2.111-2.54-2.418-6.066-.774-8.911zm7.23 1.913c.254 0 .465.177.51.41l.008.09c0 .276-.232.5-.517.5H9.747v1h1.034c.285 0 .517.223.517.5v1.998c0 .276-.232.5-.517.5H9.23a.513.513 0 01-.509-.41l-.008-.09c0-.276.232-.5.517-.5h1.034v-.999H9.23a.509.509 0 01-.517-.5V8.51c0-.276.232-.5.517-.5h1.55zm6.203 0c.286 0 .517.224.517.5v2c0 .275-.231.499-.517.499h-1.55v1.5c0 .275-.232.5-.517.5L14.823 13a.505.505 0 01-.424-.492V8.51c0-.276.231-.5.517-.5zm-4.135 0c.286 0 .517.224.517.5v3.998c0 .246-.183.45-.424.492l-.093.008a.509.509 0 01-.517-.5V8.51c0-.245.183-.45.424-.492l.093-.008zm3.618 1h-1.033v1h1.033v-1zm-3.153-6.242c.429-.717 1.377-.963 2.118-.549.742.414.996 1.33.568 2.048-.427.717-1.375.963-2.117.55a1.507 1.507 0 01-.724-.91 1.456 1.456 0 01.155-1.14z"})))});i.displayName="ProductElasticSIPTrunkingIcon"},41621:(e,a,n)=>{"use strict";n.d(a,{Sw:()=>c,sx:()=>s,z6:()=>g});var t=n(79559),o=n(76127),r=n(36669),i=n(55729),l=n(22275),d=i.createContext({name:"",value:"",disabled:!1,hasError:!1,onChange:()=>{}}),c=i.forwardRef((e,a)=>i.createElement(o.az,{as:"input",type:"radio",size:"size0",border:"none",overflow:"hidden",padding:"space0",margin:"space0",whiteSpace:"nowrap",textTransform:"none",position:"absolute",clip:"rect(0 0 0 0)",ref:a,...e}));c.displayName="HiddenRadio";var s=i.forwardRef(({id:e,name:a,element:n="RADIO",value:l,checked:s,defaultChecked:g,disabled:p,hasError:u,onChange:m,children:y,helpText:h,...v},B)=>{if(null!=s&&null!=g)throw Error("[Paste Radio] Do not provide both 'defaultChecked' and 'checked' to Radio at the same time. Please consider if you want this component to be controlled or uncontrolled.");let[x,b]=i.useState(g),f=i.useContext(d),I=(0,r.GV)(),w=e||(0,r.GV)(),C=i.useMemo(()=>void 0!==s||""!==f.value,[]),T=i.useCallback(e=>{m?m(e):f.onChange(e),C||b(e.target.checked)},[m,f,C]),E={name:a??f.name,disabled:p??f.disabled,hasError:u??f.hasError};C?""!==f.value?E.checked=f.value===l:E.checked=s:E.defaultChecked=g;let N=C?E.checked||E.defaultChecked:x;return i.createElement(o.az,{element:n,position:"relative",display:"inline-flex",alignItems:"flex-start",flexDirection:"column",verticalAlign:"top"},i.createElement(c,{...v,...E,value:l,"aria-describedby":I,"aria-invalid":E.hasError,onChange:T,id:w,ref:B}),i.createElement(t.g$,{disabled:E.disabled,htmlFor:w},i.createElement(t.BJ,{element:`${n}_CONTROL`,borderRadius:"borderRadiusCircle",disabled:E.disabled,type:"radio",_checkedAndDisabledSibling:{color:"colorTextWeaker"}},i.createElement(o.az,{as:"span",element:`${n}_CONTROL_CIRCLE`,lineHeight:"lineHeight0",display:N?"block":"none",color:"inherit",size:"sizeIcon10"},i.createElement("svg",{role:"img","aria-hidden":!0,width:"100%",height:"100%",viewBox:"0 0 16 16",fill:"none"},i.createElement("circle",{fill:"currentColor",cx:8,cy:8,r:3})))),i.createElement(t.pX,{element:`${n}_LABEL_TEXT`,fontWeight:"fontWeightMedium"},y)),h&&i.createElement(t._v,{element:`${n}_HELP_TEXT_WRAPPER`,helpTextId:I},h))});s.displayName="Radio";var g=i.forwardRef(({name:e,element:a="RADIO_GROUP",value:n,onChange:t,disabled:o=!1,errorText:r,children:c,i18nRequiredLabel:s="(required)",...g},p)=>{let u=i.useCallback(e=>{t?.(e.target.value)},[t]),m=i.useMemo(()=>({name:e,value:n||"",disabled:o,hasError:null!=r,onChange:u}),[e,n,o,r,u]);return i.createElement(d.Provider,{value:m},i.createElement(l.a,{element:a,...g,disabled:o,errorText:r,name:e,ref:p,i18nRequiredLabel:s},c))});g.displayName="RadioGroup"},47543:(e,a,n)=>{"use strict";n.r(a),n.d(a,{UsersIcon:()=>i});var t=n(36669),o=n(55729),r=n(96316);let i=o.forwardRef(({as:e,display:a,element:n="ICON",size:i,color:l,title:d,decorative:c},s)=>{let g=`UsersIcon-${(0,t.GV)()}`;if(!c&&null==d)throw Error("[UsersIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:n,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":g},d?o.createElement("title",{id:g},d):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.856 3C4.959 3 3.421 4.609 3.421 6.593s1.538 3.592 3.435 3.592 3.435-1.608 3.435-3.592S8.753 3 6.856 3zm0 .974c1.383 0 2.504 1.172 2.504 2.619 0 1.446-1.121 2.619-2.504 2.619s-2.504-1.173-2.504-2.62c0-1.446 1.121-2.618 2.504-2.618zm8.447-.175c-1.45-1.224-3.567-1.016-4.774.469a.502.502 0 00.054.686.45.45 0 00.656-.056c.879-1.082 2.423-1.234 3.48-.342 1.056.892 1.24 2.503.414 3.63-.825 1.128-2.36 1.361-3.458.526a2.634 2.634 0 01-.295-.264.451.451 0 00-.658 0 .503.503 0 00.001.689c.125.13.26.252.402.361 1.51 1.147 3.614.827 4.747-.72 1.133-1.546.88-3.756-.57-4.98zM1.5 16.513c0-3.094 2.398-5.602 5.356-5.602 2.958 0 5.356 2.508 5.356 5.602a.476.476 0 01-.465.487H1.965a.476.476 0 01-.465-.487zm9.73-.705c-.313-2.145-2.034-3.806-4.146-3.918l-.228-.006c-2.215 0-4.05 1.702-4.374 3.924l-.028.218h8.803l-.027-.218zm5.114-3.786a5.17 5.17 0 00-4.73-.88.49.49 0 00-.314.606.462.462 0 00.58.328 4.272 4.272 0 013.908.727l.204.17a4.697 4.697 0 011.546 2.997l.005.056h-4.05l-.094.01a.482.482 0 00-.371.477c0 .269.208.487.465.487h4.542l.093-.01a.482.482 0 00.372-.477c-.001-1.769-.8-3.433-2.156-4.49z",clipRule:"evenodd"})))});i.displayName="UsersIcon"},57928:(e,a,n)=>{"use strict";n.r(a),n.d(a,{ProductVoiceIcon:()=>i});var t=n(36669),o=n(55729),r=n(96316);let i=o.forwardRef(({as:e,display:a,element:n="ICON",size:i,color:l,title:d,decorative:c},s)=>{let g=`ProductVoiceIcon-${(0,t.GV)()}`;if(!c&&null==d)throw Error("[ProductVoiceIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:n,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":g},d?o.createElement("title",{id:g},d):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.55 18c-.239 0-.473-.065-.678-.187a34.61 34.61 0 01-4.01-2.791A35.318 35.318 0 017.3 12.726c-.72-.72-1.504-1.6-2.4-2.668a33.233 33.233 0 01-2.726-3.945 1.34 1.34 0 01.208-1.601l2.134-2.135a1.365 1.365 0 011.883 0l2.597 2.6c.519.52.519 1.363 0 1.883l-.715.71a26.959 26.959 0 002 2.22c.676.68 1.389 1.32 2.134 1.922l.715-.71c.52-.519 1.362-.519 1.882 0l2.598 2.6c.519.52.519 1.363 0 1.884l-2.134 2.135a1.338 1.338 0 01-.928.379zM5.481 3.033a.267.267 0 00-.186.08L3.162 5.248a.272.272 0 00-.043.326 31.99 31.99 0 002.614 3.795 33.798 33.798 0 002.33 2.594 32.988 32.988 0 006.358 4.921.277.277 0 00.326-.042l2.133-2.135a.267.267 0 000-.38l-2.592-2.599a.272.272 0 00-.379 0l-1.066 1.068a.533.533 0 01-.71.037l-.373-.299a27.742 27.742 0 01-2.219-1.996 28.139 28.139 0 01-2.053-2.333l-.299-.373a.534.534 0 01.043-.71l1.066-1.068a.267.267 0 000-.379L5.664 3.113a.272.272 0 00-.182-.08z"})))});i.displayName="ProductVoiceIcon"},67022:(e,a,n)=>{"use strict";n.r(a),n.d(a,{ProductSendGridIcon:()=>i});var t=n(36669),o=n(55729),r=n(96316);let i=o.forwardRef(({as:e,display:a,element:n="ICON",size:i,color:l,title:d,decorative:c},s)=>{let g=`ProductSendGridIcon-${(0,t.GV)()}`;if(!c&&null==d)throw Error("[ProductSendGridIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:n,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20","aria-labelledby":g},d?o.createElement("title",{id:g},d):null,o.createElement("path",{fill:"currentColor",d:"M8.5 2.5H17c.275 0 .5.225.5.5v8.5c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-3c0-.55-.45-1-1-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1zm3 15H3a.501.501 0 01-.5-.5V8.5c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55.45 1 1 1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1z"})))});i.displayName="ProductSendGridIcon"},79559:(e,a,n)=>{"use strict";n.d(a,{BJ:()=>c,_v:()=>p,g$:()=>s,pX:()=>g});var t=n(76127),o=n(8909),r=n(86146),i=n(86860),l=n(629),d=n(55729),c=d.forwardRef(({children:e,disabled:a,applyHoverStyles:n=!1,element:t="BASE_RADIO_CHECKBOX_CONTROL",...o},r)=>d.createElement(i.K,{as:"span",ref:r,display:"flex",element:t,backgroundColor:"colorBackgroundBody",borderColor:n?"colorBorderPrimaryStronger":"colorBorder",borderStyle:"solid",borderWidth:"borderWidth10",height:"sizeSquare50",marginRight:"space20",marginY:"space10",width:"sizeSquare50",color:"colorTextWeakest",_hoverSibling:{borderColor:"colorBorderPrimaryStronger",color:"colorTextWeakest"},_focusSibling:{borderColor:"colorBorder",boxShadow:"shadowFocus",color:"colorTextInverse"},_activeSibling:a?void 0:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger",color:"colorTextWeakest"},_checkedSibling:{borderColor:"colorBorderPrimary",backgroundColor:"colorBackgroundPrimary",color:"colorTextInverse"},_disabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground"},_invalidSibling:{borderColor:"colorBorderError"},_invalidAndHoverSibling:{borderColor:"colorBorderErrorStronger"},_invalidAndDisabledSibling:{borderColor:"colorBorderWeak"},_checkedAndHoverSibling:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger",color:"colorTextWeakest"},_checkedAndFocusSibling:{borderColor:"colorBorderPrimary",backgroundColor:"colorBackgroundPrimary",color:"colorTextInverse"},_checkedAndActiveSibling:a?void 0:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger"},_checkedAndDisabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground",color:"colorTextWeaker"},_checkedAndInvalidSibling:{borderColor:"colorBorderError",backgroundColor:"colorBackgroundError",color:"colorTextInverse"},_checkedAndInvalidAndHoverSibling:{borderColor:"colorBorderErrorStronger",backgroundColor:"colorBackgroundErrorStronger"},_checkedAndInvalidAndDisabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground",color:"colorTextWeaker"},...o},e));c.displayName="BaseRadioCheckboxControl";var s=d.forwardRef(({children:e,...a},n)=>d.createElement(r.J,{...a,marginBottom:"space0",ref:n},d.createElement(t.az,{as:"span",display:"flex"},e)));s.displayName="BaseRadioCheckboxLabel";var g=d.forwardRef(({children:e,element:a="BASE_RADIO_CHECKBOX_LABEL_TEXT",...n},t)=>d.createElement(l.EY,{as:"span",color:"currentColor",marginLeft:"space20",element:a,ref:t,...n},e));g.displayName="BaseRadioCheckboxLabelText";var p=d.forwardRef(({children:e,helpTextId:a,element:n="BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER"},r)=>d.createElement(t.az,{as:"span",display:"block",element:n,marginLeft:"space70",ref:r},d.createElement(o.$,{id:a,marginTop:"space0"},e)));p.displayName="BaseRadioCheckboxHelpText"},83889:(e,a,n)=>{"use strict";n.r(a),n.d(a,{InformationIcon:()=>i});var t=n(36669),o=n(55729),r=n(96316);let i=o.forwardRef(({as:e,display:a,element:n="ICON",size:i,color:l,title:d,decorative:c},s)=>{let g=`InformationIcon-${(0,t.GV)()}`;if(!c&&null==d)throw Error("[InformationIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:n,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":g},d?o.createElement("title",{id:g},d):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 2a8 8 0 110 16 8 8 0 010-16zm0 1.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM10 9a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z"})))});i.displayName="InformationIcon"},86860:(e,a,n)=>{"use strict";n.d(a,{K:()=>l});var t=n(76127),o=n(27717),r=n(55729),i=(0,o.I4)(t.az)(({_activeSibling:e,_boxChild:a,_checkedAndActiveSibling:n,_checkedAndDisabledSibling:t,_checkedAndFocusSibling:r,_checkedAndHoverSibling:i,_checkedAndInvalidSibling:l,_checkedAndInvalidAndDisabledSibling:d,_checkedAndInvalidAndHoverSibling:c,_checkedSibling:s,_checkedSiblingAndBoxChild:g,_disabledSibling:p,_focusSibling:u,_hoverSibling:m,_invalidSibling:y,_invalidAndHoverSibling:h,_invalidAndDisabledSibling:v,type:B="checkbox"})=>{let x=`input[type=${B}]:active + label &`,b=`input[type=${B}]:checked + label &, input[type=${B}][aria-checked=mixed] + label &`,f=`input[type=${B}]:checked:active + label &, input[type=${B}][aria-checked=mixed]:active + label &`,I=`input[type=${B}]:checked + label & > *, input[type=${B}][aria-checked=mixed] + label & > *`,w=`input[type=${B}]:checked:disabled + label &, input[type=${B}][aria-checked=mixed]:disabled + label &`,C=`input[type=${B}]:checked:focus + label &, input[type=${B}][aria-checked=mixed]:focus + label &`,T=`input[type=${B}]:checked:hover:not(:disabled) + label &, input[type=${B}][aria-checked=mixed]:hover:not(:disabled) + label &`,E=`input[type=${B}][aria-invalid=true]:checked + label &`,N=`input[type=${B}][aria-invalid=true]:checked:disabled + label &`,z=`input[type=${B}][aria-invalid=true]:checked:hover:not(:disabled) + label &`,S=`input[type=${B}] + label & > *`,P=`input[type=${B}]:disabled + label &`,k=`input[type=${B}]:focus + label &`,D=`input[type=${B}]:hover:not(:disabled):not(:checked) + label &`,R=`input[type=${B}][aria-invalid=true] + label &`,M=`input[type=${B}][aria-invalid=true]:hover:not(:disabled) + label &`,A=`input[type=${B}][aria-invalid=true]:disabled + label &`;return(0,o.AH)({[x]:e,[b]:s,[f]:n,[I]:g,[w]:t,[C]:r,[T]:i,[E]:l,[N]:d,[z]:c,[S]:a,[P]:p,[k]:u,[D]:m,[R]:y,[M]:h,[A]:v})}),l=r.forwardRef(({"aria-hidden":e="true",alignItems:a="center",display:n="inline-flex",element:t="SIBLING_BOX",flexShrink:o=0,justifyContent:l="center",transition:d="all 120ms",...c},s)=>r.createElement(i,{alignItems:a,"aria-hidden":e,display:n,element:t,flexShrink:o,justifyContent:l,ref:s,transition:d,...c}));l.displayName="SiblingBox"},87668:(e,a,n)=>{"use strict";n.d(a,{D:()=>l,E:()=>i});var t=n(4073),o=n(76127),r=n(55729),i=r.forwardRef(({element:e="DISPLAY_PILL",...a},n)=>r.createElement(o.az,{as:"li",listStyleType:"none"},r.createElement(o.az,{...(0,o.x8)(a),...a.href?(0,t.Nx)(a.href):{},ref:n,element:e,as:a.href?"a":"div",alignItems:"center",backgroundColor:"colorBackgroundWeak",borderRadius:"borderRadiusPill",boxShadow:"shadowBorderWeaker",color:"colorTextWeak",columnGap:"space20",cursor:a.href?"pointer":"default",display:"flex",fontSize:"fontSize20",fontWeight:"fontWeightMedium",lineHeight:"lineHeight10",paddingX:"space30",paddingY:"space20",outline:"none",_hover:a.href?{backgroundColor:"colorBackground",boxShadow:"shadowBorder",textDecoration:"none"}:void 0,_focus:{boxShadow:"shadowFocus",textDecoration:"none"}},a.children)));i.displayName="DisplayPill";var l=r.forwardRef(({element:e="DISPLAY_PILL_GROUP",...a},n)=>r.createElement(o.az,{...(0,o.x8)(a),element:e,ref:n,as:"ul",margin:"space0",padding:"space0",display:"flex",flexWrap:"wrap",rowGap:"space20",columnGap:"space20"},a.children));l.displayName="DisplayPillGroup"},88017:(e,a,n)=>{"use strict";n.d(a,{EZ:()=>x,Vn:()=>h,aF:()=>v,cw:()=>b,eL:()=>y,jl:()=>f,ox:()=>I,rQ:()=>B});var t=n(58001),o=n(76127),r=n(86110),i=n(27717),l=n(25630),d=n(55729),c=n(95036),s=n(71853),g=n(40123),p=n(69277),u=n(60798),m=d.createContext(null),y=(0,t.CS)((0,i.I4)(r.j)((0,i.AH)({position:"fixed",top:0,right:0,bottom:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",backgroundColor:"colorBackgroundOverlay",zIndex:"zIndex80"}),l.$,o.mP)),h=(0,t.CS)((0,i.I4)(r.S)(({size:e})=>(0,i.AH)({width:"100%",maxWidth:"wide"===e?"size80":"size60",maxHeight:"90%",minHeight:"170px",backgroundColor:"colorBackgroundBody",borderRadius:"borderRadius30",boxShadow:"shadowElevationTop20",display:"flex",flexDirection:"column"}))),v=d.forwardRef(({children:e,element:a="MODAL",isOpen:n,onDismiss:r,allowPinchZoom:i=!0,initialFocusRef:l,ariaLabelledby:c,size:s,...g},p)=>{let u=(0,t.pn)(n,{from:{opacity:0,transform:"scale(0.675)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.675)"},config:{mass:.5,tension:370,friction:26}});return d.createElement(m.Provider,{value:{onDismiss:r}},u((n,t)=>t&&d.createElement(y,{onDismiss:r,allowPinchZoom:i,initialFocusRef:l,style:{opacity:n.opacity},"data-paste-element":`${a}_OVERLAY`,variant:s},d.createElement(o.az,{as:h,"aria-labelledby":c,...(0,o.x8)(g),element:a,ref:p,style:n,size:s,variant:s},e))))});v.displayName="Modal";var B=d.forwardRef(({children:e,element:a="MODAL_HEADER",i18nDismissLabel:n="Close modal",...t},r)=>{let{onDismiss:i}=(()=>{let e=d.useContext(m);if(!e)throw Error("useModalContext must be used with ModalContextProvider");return e})();return d.createElement(o.az,{...(0,o.x8)(t),as:"div",element:a,ref:r,padding:"space90",flexShrink:0},d.createElement(s.s,{hAlignContent:"between"},d.createElement(s.s,{vAlignContent:"center",grow:1,marginRight:"space70"},e),d.createElement(c.$n,{element:`${a}_CLOSE_BUTTON`,variant:"secondary_icon",size:"reset",onClick:()=>i()},d.createElement(g.CloseIcon,{element:`${a}_CLOSE_ICON`,decorative:!0,size:"sizeIcon60"}),d.createElement(p.E,null,n))))});B.displayName="ModalHeader";var x=d.forwardRef(({children:e,as:a="h2",element:n="MODAL_HEADING",...t},o)=>d.createElement(u.D,{...t,as:a,element:n,marginBottom:"space0",variant:"heading30",ref:o},e));x.displayName="ModalHeading";var b=d.forwardRef(({children:e,element:a="MODAL_BODY",...n},t)=>d.createElement(o.az,{...(0,o.x8)(n),overflowY:"auto",paddingX:"space90",paddingY:"space10",as:"div",element:a,ref:t},e));b.displayName="ModalBody";var f=d.forwardRef(({children:e,element:a="MODAL_FOOTER",...n},t)=>d.createElement(o.az,{...(0,o.x8)(n),flexShrink:0,display:"flex",padding:"space90",as:"div",element:a,ref:t},e));f.displayName="ModalFooter";var I=d.forwardRef(({children:e,element:a="MODAL_FOOTER_ACTIONS",justify:n,...t},r)=>{let i=d.Children.count(e);return d.createElement(o.az,{...(0,o.x8)(t),display:"flex",justifyContent:"start"===n?"flex-start":"flex-end",flexShrink:"start"===n?null:0,flexWrap:"wrap",flexGrow:1,element:a,alignItems:"center",ref:r},d.Children.map(e,(e,n)=>d.createElement(o.az,{marginRight:i!==n+1?"space50":null,element:`${a}_ITEM`},e)))});I.displayName="ModalFooterActions"},93780:(e,a,n)=>{"use strict";n.r(a),n.d(a,{SMSCapableIcon:()=>i});var t=n(36669),o=n(55729),r=n(96316);let i=o.forwardRef(({as:e,display:a,element:n="ICON",size:i,color:l,title:d,decorative:c},s)=>{let g=`SMSCapableIcon-${(0,t.GV)()}`;if(!c&&null==d)throw Error("[SMSCapableIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:n,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":g},d?o.createElement("title",{id:g},d):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.5 3A1.502 1.502 0 0118 4.5v10a1.502 1.502 0 01-1.5 1.5H9.667L5.8 18.9a.5.5 0 01-.8-.4V16H3.5A1.502 1.502 0 012 14.5v-10A1.502 1.502 0 013.5 3zm0 1h-13a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h2a.5.5 0 01.5.5v2l3.2-2.4a.5.5 0 01.3-.1h7a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5zm-5 7a.5.5 0 110 1h-6a.5.5 0 110-1h6zm3-3a.5.5 0 110 1h-9a.5.5 0 010-1h9z"})))});i.displayName="SMSCapableIcon"},99327:(e,a,n)=>{"use strict";n.r(a),n.d(a,{ProductCommsIcon:()=>i});var t=n(36669),o=n(55729),r=n(96316);let i=o.forwardRef(({as:e,display:a,element:n="ICON",size:i,color:l,title:d,decorative:c},s)=>{let g=`ProductCommsIcon-${(0,t.GV)()}`;if(!c&&null==d)throw Error("[ProductCommsIcon]: Missing a title for non-decorative icon.");return o.createElement(r.IconWrapper,{as:e,display:a,element:n,size:i,color:l,ref:s},o.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":g},d?o.createElement("title",{id:g},d):null,o.createElement("path",{fill:"currentColor",d:"M4.213 10.942c-.213.448-.88.352-.954-.139v.005L2 2.582v-.128a.52.52 0 01.443-.449h12.832c.224.027.4.198.437.422l.661 4.337h-.005a.505.505 0 01-.501.576H6.24a.496.496 0 00-.459.289l-1.568 3.313zM18 17.477v.059a.503.503 0 01-.507.464l-.032-.005H4.795a.514.514 0 01-.502-.427l-.661-4.332a.5.5 0 01.501-.577h9.627a.517.517 0 00.459-.288l1.562-3.307c.214-.443.886-.353.955.138l1.259 8.227a.208.208 0 01.005.048z"})))});i.displayName="ProductCommsIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,6110,636,6593,8792],()=>e(e.s=27578)),_N_E=e.O()}]);