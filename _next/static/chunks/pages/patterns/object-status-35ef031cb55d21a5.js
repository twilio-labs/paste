(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7924],{3738:(e,t,a)=>{"use strict";a.d(t,{V:()=>l,x:()=>c});var s=a(76127),r=a(55729),o=e=>"margin"===e?"auto":"space0",n=(e,t,a)=>{let s=o(t),r=(({prefix:e,responsive:t,defaultValue:a})=>{let s=()=>t?[,,,].fill(a):a;return{[`${e}Top`]:s(),[`${e}Bottom`]:s(),[`${e}Right`]:s(),[`${e}Left`]:s()}})({prefix:t,responsive:!1,defaultValue:s});return void 0===a||(e?(r[`${t}Top`]=a,r[`${t}Bottom`]=a):(r[`${t}Right`]=a,r[`${t}Left`]=a)),r},i=(e,t,a)=>{let s=o(t),r={[`${t}Top`]:[s,s,s],[`${t}Bottom`]:[s,s,s],[`${t}Right`]:[s,s,s],[`${t}Left`]:[s,s,s]},n=Array.isArray(a)&&0===a.length;return void 0===a||n||e.forEach((e,s)=>{let o=Array.isArray(a)?a[s]:a;e?(r[`${t}Top`][s]=o,r[`${t}Bottom`][s]=o):(r[`${t}Right`][s]=o,r[`${t}Left`][s]=o)}),r},c=r.forwardRef(({as:e,children:t,element:a="GRID",equalColumnHeights:o,gutter:c,marginTop:l,marginBottom:d,vertical:u=!1,...y},p)=>{let g=r.useMemo(()=>r.Children.map(t,e=>r.isValidElement(e)?r.cloneElement(e,{count:r.Children.count(t),gutter:c,vertical:u,stretchColumnContent:o}):e),[t,u,o,c]),T=r.useMemo(()=>((e,t=!1)=>{let a=(e=>Array.isArray(e)?e.map(e=>"space0"!==e?e.replace("space","spaceNegative"):"space0"===e?"space0":null):"space0"===e?"space0":e&&"string"==typeof e?e.replace("space","spaceNegative"):"auto")(e);return Array.isArray(t)?i(t,"margin",a):n(t,"margin",a)})(c,u),[c,u]),m=r.useMemo(()=>(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e&&!0===e?"column":"row"):e?"column":"row")(u),[u]);return r.createElement(s.az,{...(0,s.x8)(y),ref:p,as:e,alignItems:o?"stretch":null,element:a,flexDirection:m,flexWrap:"wrap",display:"flex",...T,marginTop:l,marginBottom:d,minWidth:"size0",rowGap:y.rowGap,columnGap:y.columnGap},g)});c.displayName="Grid";var l=r.forwardRef(({as:e,children:t,count:a,element:o="COLUMN",gutter:c,offset:l,span:d,stretchColumnContent:u,vertical:y,...p},g)=>{let T=r.useMemo(()=>(({count:e,span:t,gutter:a,offset:s,vertical:r,stretchColumnContent:o})=>{let c={width:(({count:e,span:t})=>Array.isArray(t)&&e?t.map(e=>`${e/12*100}%`):"number"==typeof t&&e&&e<=12?`${t/12*100}%`:void 0!==e?`${1/e*100}%`:"8.333333333333332%")({count:e,span:t}),...(({vertical:e,gutter:t})=>Array.isArray(e)?i(e,"padding",t):n(e,"padding",t))({gutter:a,vertical:r})};return s&&(c.marginLeft=(e=>Array.isArray(e)?e.map(e=>`${e/12*100}%`):`${e/12*100}%`)(s)),r&&!s&&(c.minWidth=(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e?!0===e?"100%":"0":null):e?"100%":"0")(r),c.marginLeft="space0"),o&&(c.alignContent="stretch",c.display="flex"),c})({count:a,gutter:c,offset:l,span:d,stretchColumnContent:u,vertical:y}),[a,c,l,d,u,y]);return r.createElement(s.az,{...(0,s.x8)(p),...T,as:e,element:o,ref:g},t)});l.displayName="Column"},8478:(e,t,a)=>{"use strict";a.d(t,{e:()=>c});var s=a(76127),r=a(27717),o=a(55729),n=r.I4.span((0,r.AH)({"& > button":{zIndex:1},"& > button:hover, & > button[aria-pressed=true]":{zIndex:2},"& > button:focus":{zIndex:3},"& > button:disabled":{zIndex:0},"& > button:first-of-type":{borderTopRightRadius:0,borderBottomRightRadius:0},"& > button:not(:first-of-type):not(:last-of-type)":{borderRadius:0,marginLeft:"1px"},"& > button:last-of-type":{marginLeft:"1px",borderTopLeftRadius:0,borderBottomLeftRadius:0}})),i=r.I4.span((0,r.AH)({display:"flex",columnGap:"space40"})),c=o.forwardRef(({element:e="BUTTON_GROUP",children:t,attached:a=!1,justifyContent:r="flex-start",...c},l)=>o.createElement(s.az,{...(0,s.x8)(c),as:a?n:i,ref:l,element:e,display:"inline-flex",flexWrap:a?"nowrap":"wrap",justifyContent:a?"flex-start":r,rowGap:"space40",role:"group"},t));c.displayName="ButtonGroup"},13114:(e,t,a)=>{"use strict";a.r(t),a.d(t,{MoreIcon:()=>n});var s=a(36669),r=a(55729),o=a(96316);let n=r.forwardRef(({as:e,display:t,element:a="ICON",size:n,color:i,title:c,decorative:l},d)=>{let u=`MoreIcon-${(0,s.GV)()}`;if(!l&&null==c)throw Error("[MoreIcon]: Missing a title for non-decorative icon.");return r.createElement(o.IconWrapper,{as:e,display:t,element:a,size:n,color:i,ref:d},r.createElement("svg",{role:"img","aria-hidden":l,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":u},c?r.createElement("title",{id:u},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 14.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-6c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-6c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S8.5 4.827 8.5 4s.673-1.5 1.5-1.5z"})))});n.displayName="MoreIcon"},15598:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/patterns/object-status",function(){return a(56278)}])},15780:(e,t,a)=>{"use strict";a.d(t,{A:()=>y});var s=a(72387),r=a(95669),o=a.n(r),n=a(81278);a(55729);var i=a(10511),c=a(43084),l=a(63437),d=a(38992);let u={h1:()=>null},y=({children:e,meta:t,navigationData:a})=>{let r=t.title?`${t.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,y=t.description||d.DZ.DESCRIPTION,p=(0,n.useRouter)();return(0,s.FD)(l.T,{navigationData:a,children:[(0,s.FD)(o(),{children:[(0,s.Y)("title",{children:r}),(0,s.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${p.pathname}`}),(0,s.Y)("meta",{name:"description",content:y},"description")]}),(0,s.Y)(i.s,{children:(0,s.Y)(c.Q,{componentOverrides:t.package?u:{},children:e})})]})}},17938:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var s=a(76127),r=a(55729),o=r.forwardRef(({children:e,element:t="CARD",padding:a="space100",paddingBottom:o,paddingLeft:n,paddingRight:i,paddingTop:c,fillHeight:l,fillWidth:d,...u},y)=>r.createElement(s.az,{...(0,s.x8)(u),ref:y,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:t,padding:a,paddingBottom:o,paddingLeft:n,paddingRight:i,paddingTop:c,backgroundColor:"colorBackgroundWeakest",height:l?"100%":void 0,width:d?"100%":void 0},e));o.displayName="Card"},51895:(e,t,a)=>{"use strict";a.d(t,{z:()=>o});var s=a(76127),r=a(55729),o=r.forwardRef(({element:e="DETAIL_TEXT",as:t="div",children:a,marginTop:o="space30",...n},i)=>r.createElement(s.az,{as:t,ref:i,element:e,...(0,s.x8)(n),marginTop:o,color:"colorTextWeak",fontSize:"fontSize20",lineHeight:"lineHeight20",fontWeight:"fontWeightMedium"},a));o.displayName="DetailText"},56278:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>et,default:()=>eu,getStaticProps:()=>es,mdxHeadings:()=>er,meta:()=>ea}),a(55729);var s=a(11885),r=a(4073),o=a(11881),n=a(33359),i=a(76127),c=a(95036),l=a(8478),d=a(83454),u=a(89564),y=a(17938),p=a(51895),g=a(62498),T=a(3738),m=a(60798),x=a(50010),h=a(97215),v=a(84498),f=a(51582),I=a(85152),b=a(629),S=a(80088),B=a(13114),P=a(37654),C=a(16011),M=a(36146),w=a(48866),N=a(99207),D=a(127),k=a(57580),A=a(53849),E=a(31661),O=a(46344),R=a(83753),z=a(35321),W=a(72387);let H=`
const ObjectStatusPatternComponents = () => {
  const [process, setProcess] = React.useState(ProcessObject.Success);
  const menu = useStatusMenuState();
  const onClick = (status) => {
    setProcess(ProcessObject[status]);
    menu.hide();
  };
  return (
    <Box display="flex" flexDirection="column" rowGap="space60">
      <Box display="flex">
        <ProcessSuccessIcon
          color="colorTextIconSuccess"
          decorative={false}
          title="success" />
        <Text marginLeft="space20">Success</Text>
      </Box>
      <StatusBadge variant="ProcessSuccess" size="borderless">Success</StatusBadge>
      <StatusBadge variant="ConnectivityAvailable">Available</StatusBadge>
      <Box>
        <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={process.variant}>
          {process.children}
        </StatusMenuBadge>
        <StatusMenu {...menu} aria-label="Preferences">
          <StatusMenuItemRadio
            {...menu}
            name="process"
            value="success"
            checked={process.children === ProcessObject.Success.children}
            onClick={() => onClick('Success')}
            variant="default"
          >
            <StatusMenuItemChild variant="ProcessSuccess">{ProcessObject.Success.children}</StatusMenuItemChild>
          </StatusMenuItemRadio>
          <StatusMenuItemRadio
            {...menu}
            name="process"
            value="neutral"
            checked={process.children === ProcessObject.Neutral.children}
            onClick={() => onClick('Neutral')}
            variant="default"
          >
            <StatusMenuItemChild variant="ProcessNeutral">{ProcessObject.Neutral.children}</StatusMenuItemChild>
          </StatusMenuItemRadio>
          <StatusMenuItemRadio
            {...menu}
            name="process"
            value="warning"
            checked={process.children === ProcessObject.Warning.children}
            onClick={() => onClick('Warning')}
            variant="default"
          >
            <StatusMenuItemChild variant="ProcessWarning">{ProcessObject.Warning.children}</StatusMenuItemChild>
          </StatusMenuItemRadio>
          <StatusMenuItemRadio
            {...menu}
            name="process"
            value="error"
            checked={process.children === ProcessObject.Error.children}
            onClick={() => onClick('Error')}
            variant="default"
          >
            <StatusMenuItemChild variant="ProcessError">{ProcessObject.Error.children}</StatusMenuItemChild>
          </StatusMenuItemRadio>
          <StatusMenuItemRadio
            {...menu}
            name="process"
            value="InProgress"
            checked={process.children === ProcessObject.InProgress.children}
            onClick={() => onClick('InProgress')}
            variant="default"
          >
            <StatusMenuItemChild variant="ProcessInProgress">{ProcessObject.InProgress.children}</StatusMenuItemChild>
          </StatusMenuItemRadio>
          <StatusMenuItemRadio
            {...menu}
            name="process"
            value="disabled"
            checked={process.children === ProcessObject.Disabled.children}
            onClick={() => onClick('Disabled')}
            variant="default"
          >
            <StatusMenuItemChild variant="ProcessDisabled">{ProcessObject.Disabled.children}</StatusMenuItemChild>
          </StatusMenuItemRadio>
          <StatusMenuItemRadio
            {...menu}
            name="process"
            value="draft"
            checked={process.children === ProcessObject.Draft.children}
            onClick={() => onClick('Draft')}
            variant="default"
          >
            <StatusMenuItemChild variant="ProcessDraft">{ProcessObject.Draft.children}</StatusMenuItemChild>
          </StatusMenuItemRadio>
        </StatusMenu>
      </Box>
    </Box>
  );
};

render(
  <ObjectStatusPatternComponents />
)
`.trim(),j=()=>(0,W.Y)(M.ProcessErrorIcon,{color:"colorTextIconError",decorative:!1,title:"Error"}),L=()=>(0,W.Y)(k.ProcessWarningIcon,{color:"colorTextIconWarning",decorative:!1,title:"Warning"}),U=()=>(0,W.Y)(D.ProcessSuccessIcon,{color:"colorTextIconSuccess",decorative:!1,title:"Success"}),G=()=>(0,W.Y)(N.ProcessNeutralIcon,{color:"colorTextIconNeutral",decorative:!1,title:"Neutral"}),$=()=>(0,W.Y)(w.ProcessInProgressIcon,{color:"colorTextIconNeutral",decorative:!1,title:"In-progress"}),Y=()=>(0,W.Y)(P.ProcessDisabledIcon,{color:"colorTextIcon",decorative:!1,title:"Disabled"}),_=()=>(0,W.Y)(C.ProcessDraftIcon,{color:"colorTextIcon",decorative:!1,title:"Draft"}),X=`
<Box display="flex" rowGap="space100" flexWrap="wrap">
  <Box display="flex" columnGap="space50" rowGap="space60" flexWrap="wrap">
    <Box display="flex">
      <ProcessSuccessIcon
        color="colorTextIconSuccess"
        decorative={false}
        title="success" />
      <Text marginLeft="space20">Success</Text>
    </Box>
    <Box display="flex">
      <ProcessErrorIcon
        color="colorTextIconError"
        decorative={false}
        title="error" />
      <Text marginLeft="space20">Error</Text>
    </Box>
    <Box display="flex">
      <ProcessWarningIcon
        color="colorTextIconWarning"
        decorative={false}
        title="warning" />
      <Text marginLeft="space20">Warning</Text>
    </Box>
    <Box display="flex">
      <ProcessNeutralIcon
        color="colorTextIconNeutral"
        decorative={false}
        title="neutral" />
      <Text marginLeft="space20">Neutral</Text>
    </Box>
    <Box display="flex">
      <ProcessInProgressIcon
        color="colorTextIconNeutral"
        decorative={false}
        title="In-progress" />
      <Text marginLeft="space20">In progress</Text>
    </Box>
    <Box display="flex">
      <ProcessDisabledIcon
        color="colorTextIcon"
        decorative={false}
        title="disabled" />
      <Text marginLeft="space20">Disabled</Text>
    </Box>
    <Box display="flex">
      <ProcessDraftIcon
        color="colorTextIcon"
        decorative={false}
        title="draft" />
      <Text marginLeft="space20">Draft</Text>
    </Box>
  </Box>
  <Box display="flex" columnGap="space50" rowGap="space60" flexWrap="wrap">
    <StatusBadge variant="ProcessSuccess" size="borderless">Success</StatusBadge>
    <StatusBadge variant="ProcessError" size="borderless">Error</StatusBadge>
    <StatusBadge variant="ProcessWarning" size="borderless">Warning</StatusBadge>
    <StatusBadge variant="ProcessNeutral" size="borderless">Neutral</StatusBadge>
    <StatusBadge variant="ProcessInProgress" size="borderless">In progress</StatusBadge>
    <StatusBadge variant="ProcessDisabled" size="borderless">Disabled</StatusBadge>
    <StatusBadge variant="ProcessDraft" size="borderless">Draft</StatusBadge>
  </Box>
  <Box display="flex" columnGap="space50" rowGap="space60" flexWrap="wrap">
    <StatusBadge variant="ProcessSuccess">Success</StatusBadge>
    <StatusBadge variant="ProcessError">Error</StatusBadge>
    <StatusBadge variant="ProcessWarning">Warning</StatusBadge>
    <StatusBadge variant="ProcessNeutral">Neutral</StatusBadge>
    <StatusBadge variant="ProcessInProgress">In progress</StatusBadge>
    <StatusBadge variant="ProcessDisabled">Disabled</StatusBadge>
    <StatusBadge variant="ProcessDraft">Draft</StatusBadge>
  </Box>
</Box>
`.trim(),Z=`
<>
  <Heading as="h2" variant="heading20">
    Exports
  </Heading>
  <Table>
    <THead>
      <Tr>
        <Th>Status</Th>
        <Th>Export name</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Td>
          <Box display="flex" flexDirection="column">
            <Box display="flex">
              <ProcessWarningIcon
                color="colorTextIconWarning"
                decorative={false}
                title="warning" />
              <Text marginLeft="space20">Pre-registration needed</Text>
            </Box>
            <Box marginLeft="space60">
              <Anchor showExternal href="#" marginLeft="space20">Fill out the registration form here</Anchor>
            </Box>
          </Box>
        </Td>
        <Td>
          <strong>Contacts who did not click</strong>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Box display="inline-flex" columnGap="space20">
            <ProcessSuccessIcon
              color="colorTextIconSuccess"
              decorative={false}
              title="success"
            />
            <Box>
              <Text as="div">Successfully exported</Text>
              <Text as="div" color="colorTextWeak">Tuesday, February 2, 2021</Text>
            </Box>
          </Box>
        </Td>
        <Td>
          <strong>All contacts</strong>
        </Td>
      </Tr>
    </TBody>
  </Table>
  <Box marginTop="space110">
    <Heading as="h2" variant="heading20">
      IDs
    </Heading>
  </Box>
  <Table>
    <THead>
      <Tr>
        <Th>ID</Th>
        <Th>Unique name</Th>
        <Th>Region</Th>
        <Th>Status</Th>
        <Th>Order Date</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Td>90294808908109537</Td>
        <Td>WE902990c21gjioGasd</Td>
        <Td>North America</Td>
        <Td>
          <StatusBadge variant="ProcessSuccess" size="borderless">Active</StatusBadge>
        </Td>
        <Td>2020-10-15</Td>
      </Tr>
      <Tr>
        <Td>90294808908872345</Td>
        <Td>WE928471c21gjioGasd</Td>
        <Td>North America</Td>
        <Td>
          <StatusBadge variant="ProcessNeutral" size="borderless">Ready</StatusBadge>
        </Td>
        <Td>2020-10-15</Td>
      </Tr>
    </TBody>
  </Table>
</>
`.trim(),F=`
<>
  <Heading as="h2" variant="heading20">
    Agent queues
  </Heading>
  <Table>
    <THead>
      <Tr>
        <Th>Title</Th>
        <Th>Media</Th>
        <Th>Status</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Td>Bewitched</Td>
        <Td>Series</Td>
        <Td>
          <StatusBadge variant="ProcessWarning" size="borderless">Progress halted</StatusBadge>
        </Td>
      </Tr>
      <Tr>
        <Td>Mulan</Td>
        <Td>Feature</Td>
        <Td>Released</Td>
      </Tr>
      <Tr>
        <Td>Little Women</Td>
        <Td>Feature</Td>
        <Td>Released</Td>
      </Tr>
    </TBody>
  </Table>
</>
`.trim(),q=`
<>
  <Heading as="h2" variant="heading20">
    Reboots
  </Heading>
  <Table>
    <THead>
      <Tr>
        <Th>Agents</Th>
        <Th>Queues</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Td>
          <Box display="flex" columnGap="space20" alignItems="center">
            <Avatar name="Adaline Baxter" size="sizeIcon70" />
            <Box display="flex" flexDirection="column">
              <Text fontWeight="fontWeightMedium" marginLeft="space20">Adaline Baxter</Text>
              <Box display="flex">
                <ConnectivityAvailableIcon
                  color="colorTextIconSuccess"
                  decorative={false}
                  title="success"
                />
                <DetailText marginTop="space0">Available | 12:43</DetailText>
              </Box>
            </Box>
          </Box>
        </Td>
        <Td><Badge variant="decorative10">Queue name</Badge></Td>
      </Tr>
      <Tr>
        <Td>
          <Box display="flex" columnGap="space20" alignItems="center">
            <Avatar name="Jane Cooper" size="sizeIcon70" />
            <Box display="flex" flexDirection="column">
              <Text fontWeight="fontWeightMedium" marginLeft="space20">Jane Cooper</Text>
              <Box display="flex">
                <ConnectivityBusyIcon
                  color="colorTextIconBusy"
                  decorative={false}
                  title="success"
                />
                <DetailText marginTop="space0">On break | 02:23</DetailText>
              </Box>
            </Box>
          </Box>
        </Td>
        <Td><Badge variant="decorative10">Queue name</Badge></Td>
      </Tr>
      <Tr>
        <Td>
          <Box display="flex" columnGap="space20" alignItems="center">
            <Avatar name="Dan Reynolds" size="sizeIcon70" />
            <Box display="flex" flexDirection="column">
              <Text fontWeight="fontWeightMedium" marginLeft="space20">Dan Reynolds</Text>
              <Box display="flex">
                <ConnectivityAvailableIcon
                  color="colorTextIconSuccess"
                  decorative={false}
                  title="success"
                />
                <DetailText marginTop="space0">Available | 10:21</DetailText>
              </Box>
            </Box>
          </Box>
        </Td>
        <Td><Badge variant="decorative10">Queue name</Badge></Td>
      </Tr>
    </TBody>
  </Table>
</>
`.trim(),V=`
<Stack orientation="vertical" spacing="space60">
  <Box width="60%">
    <Card>
      <Box
        as="span"
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="space70"
      >
        <Heading as="h3" variant="heading40" marginBottom="space0">
          Business Profile
        </Heading>
        <StatusBadge variant="ProcessSuccess">
          Approved
        </StatusBadge>
      </Box>
      <Paragraph marginBottom="space0">Information about your business</Paragraph>
    </Card>
  </Box>
</Stack>
`.trim(),J=`
<Box display="flex" rowGap="space100" flexWrap="wrap">
  <Box display="flex" columnGap="space50" rowGap="space60" flexWrap="wrap">
    <Box display="inherit">
      <ConnectivityAvailableIcon
        color="colorTextIconAvailable"
        decorative={false}
        title="available"
      />
      Available
    </Box>
    <Box display="inherit">
      <ConnectivityBusyIcon
        color="colorTextIconBusy"
        decorative={false}
        title="busy"
      />
      Busy
    </Box>
    <Box display="inherit">
      <ConnectivityUnavailableIcon
        color="colorTextIconUnavailable"
        decorative={false}
        title="unavailable"
      />
      Unavailable
    </Box>
    <Box display="inherit">
    <ConnectivityNeutralIcon
      color="colorTextIconNeutral"
      decorative={false}
      title="neutral"
    />
    Neutral
  </Box>
    <Box display="inherit">
      <ConnectivityOfflineIcon
        color="colorTextIconOffline"
        decorative={false}
        title="offline"
      />
      Offline
    </Box>
  </Box>
  <Box display="flex" columnGap="space50" rowGap="space60" flexWrap="wrap">
    <StatusBadge variant="ConnectivityAvailable">
      Available
    </StatusBadge>
    <StatusBadge variant="ConnectivityUnavailable">
      Unavailable
    </StatusBadge>
    <StatusBadge variant="ConnectivityBusy">
      Busy
    </StatusBadge>
    <StatusBadge variant="ConnectivityNeutral">
      Neutral
    </StatusBadge>
    <StatusBadge variant="ConnectivityOffline">
      Offline
    </StatusBadge>
  </Box>
    <Box display="flex" columnGap="space50" rowGap="space60" flexWrap="wrap">
    <StatusBadge size="borderless" variant="ConnectivityAvailable">
      Available
    </StatusBadge>
    <StatusBadge size="borderless" variant="ConnectivityUnavailable">
      Unavailable
    </StatusBadge>
    <StatusBadge size="borderless" variant="ConnectivityBusy">
      Busy
    </StatusBadge>
    <StatusBadge size="borderless" variant="ConnectivityNeutral">
      Neutral
    </StatusBadge>
    <StatusBadge size="borderless" variant="ConnectivityOffline">
      Offline
    </StatusBadge>
  </Box>
</Box>
`.trim(),Q=`
const PageHeaderExample = () => {
  return (
    <Box maxWidth="size50" borderStyle="solid" padding="space50" borderWidth="borderWidth10" borderColor="colorBorderDecorative10Weaker" borderRadius="borderRadius20">
      <PageHeader size="compact">
        <PageHeaderDetails>
          <PageHeaderPrefix><Avatar name="parker smith" size="sizeIcon100" icon={UserIcon} /></PageHeaderPrefix>
          <PageHeaderHeading>Parker Smith</PageHeaderHeading>
          <PageHeaderActions>
            <ButtonGroup>
              <Button variant="secondary" size="small">Edit</Button>
              <Button variant="secondary" size="small"><MoreIcon decorative={false} title="more menu" /></Button>
            </ButtonGroup>
          </PageHeaderActions>
          <PageHeaderMeta>
            Customer since June 11, 2009
            <StatusBadge variant="ConnectivityAvailable">
              Online
            </StatusBadge>
          </PageHeaderMeta>
        </PageHeaderDetails>
        <PageHeaderInPageNavigation>
          <InPageNavigation aria-label="get started">
            <InPageNavigationItem href="#" currentPage>
              Customer details
            </InPageNavigationItem>
            <InPageNavigationItem href="#">Customer history</InPageNavigationItem>
          </InPageNavigation>
        </PageHeaderInPageNavigation>
      </PageHeader>
    </Box>
  );
};
render(
  <PageHeaderExample />
)
`.trim();var K=a(63049),ee=a(15780),et=!0;let ea={title:"Object status",description:"The Object status pattern informs the user of the dynamic state or condition of an object.",slug:"/patterns/object-status/"},es=async()=>({props:{data:{...feature},navigationData}}),er=[{value:"Ingredients",depth:2},{value:"Usage",depth:2},{value:"General usage",depth:3},{value:"Accessibility",depth:3},{value:"Status types",depth:2},{value:"Process status",depth:3},{value:"Icon and token pairings",depth:4},{value:"Plain text status",depth:3},{value:"Connectivity status",depth:3},{value:"Connectivity icon and token pairings",depth:4},{value:"Swapping statuses with Status Menu",depth:3},{value:"Dos and Don'ts",depth:2},{value:"Related Discussions",depth:2}],eo=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.yg)("div",t)},en=eo("NormalizedPatternHeader"),ei=eo("PageAside"),ec=eo("LivePreview"),el={meta:ea,getStaticProps:es,mdxHeadings:er},ed=ee.A;function eu({components:e,...t}){return(0,s.yg)(ed,{...el,...t,components:e,mdxType:"MDXLayout"},(0,s.yg)(en,{description:ea.description,name:ea.title,data:t.data,mdxType:"NormalizedPatternHeader"}),(0,s.yg)("contentwrapper",null,(0,s.yg)(ei,{data:er,mdxType:"PageAside"}),(0,s.yg)("content",null,(0,s.yg)(ec,{scope:{Box:i.az,Text:b.EY,Badge:n.Ex,StatusBadge:d.Wh,ProcessSuccessIcon:D.ProcessSuccessIcon,useStatusMenuState:f.EH,StatusMenu:d.Wq,StatusMenuItemRadio:d.Ui,StatusMenuBadge:d.rW,StatusMenuItemChild:d.pf,ProcessObject:K.ZG},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},H),(0,s.yg)("h2",null,"Ingredients"),(0,s.yg)(T.x,{gutter:"space30",marginBottom:"space80",mdxType:"Grid"},(0,s.yg)(T.V,{mdxType:"Column"},(0,s.yg)(y.Z,{mdxType:"Card"},(0,s.yg)(m.D,{as:"h3",variant:"heading40",marginBottom:"space0",mdxType:"Heading"},(0,s.yg)(r.Mz,{href:"/components/status-badge",mdxType:"Anchor"},"Status Badge")))),(0,s.yg)(T.V,{mdxType:"Column"},(0,s.yg)(y.Z,{mdxType:"Card"},(0,s.yg)(m.D,{as:"h3",variant:"heading40",marginBottom:"space0",mdxType:"Heading"},(0,s.yg)(r.Mz,{href:"/components/status-menu",mdxType:"Anchor"},"Status Menu")))),(0,s.yg)(T.V,{mdxType:"Column"},(0,s.yg)(y.Z,{mdxType:"Card"},(0,s.yg)(m.D,{as:"h3",variant:"heading40",mdxType:"Heading"},"Component composition"),(0,s.yg)(x.f,{marginBottom:"space0",mdxType:"Paragraph"},"Create a composition with ",(0,s.yg)(r.Mz,{href:"/primitives/box",mdxType:"Anchor"},"Box"),","," ",(0,s.yg)(r.Mz,{href:"/components/icon",mdxType:"Anchor"},"Icon"),", and ",(0,s.yg)(r.Mz,{href:"/primitives/text",mdxType:"Anchor"},"Text"),".")))),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-jsx"},`// import all components for Object status patterns

import { Box } from "@twilio-paste/core/box";
import {​ Text } from "@twilio-paste/core/text";
import {​ StatusBadge } from "@twilio-paste/core/status-badge";
import {​ StatusMenu } from "@twilio-paste/core/status-menu";
import { ProcessDisabledIcon } from "@twilio-paste/icons/esm/ProcessDisabledIcon";
import { ProcessDraftIcon } from "@twilio-paste/icons/esm/ProcessDraftIcon";
import { ProcessErrorIcon } from "@twilio-paste/icons/esm/ProcessErrorIcon";
import { ProcessInProgressIcon } from "@twilio-paste/icons/esm/ProcessInProgressIcon";
import { ProcessNeutralIcon } from "@twilio-paste/icons/esm/ProcessNeutralIcon";
import { ProcessSuccessIcon } from "@twilio-paste/icons/esm/ProcessSuccessIcon";
import { ProcessWarningIcon } from "@twilio-paste/icons/esm/ProcessWarningIcon";

`)),(0,s.yg)("h2",null,"Usage"),(0,s.yg)("h3",null,"General usage"),(0,s.yg)("p",null,"An Object status is used to communicate the dynamic state of an object. Use it to help a user identify something that requires their attention and often, their action. When a status is used to indicate to the user that they need to take action, be sure to provide clear controls to take that action (check out the example in ",(0,s.yg)("a",{parentName:"p",href:"#process-status"},"Process status"),")."),(0,s.yg)("p",null,"Object statuses are:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Always related to an object. For example, this pattern applies to SIMs and regulatory bundles, but not to a step in a wizard flow. Instead, use the ",(0,s.yg)("a",{parentName:"li",href:"/patterns/error-state"},"Error state pattern")," or ",(0,s.yg)("a",{parentName:"li",href:"/components/progress-steps"},"Progress Steps component"),"."),(0,s.yg)("li",{parentName:"ul"},`Not used for static attributes. For example, “SMS-capable” is not a status on a phone number.`),(0,s.yg)("li",{parentName:"ul"},"Different from ",(0,s.yg)("a",{parentName:"li",href:"/patterns/notifications-and-feedback"},"notification and feedback messaging"),", which is in direct response to a user action."),(0,s.yg)("li",{parentName:"ul"},"Different from ",(0,s.yg)("a",{parentName:"li",href:"/components/alert"},"alert messaging"),", which is from the system."),(0,s.yg)("li",{parentName:"ul"},`Used to draw a user’s attention to important information. Use `,(0,s.yg)("a",{parentName:"li",href:"#plain-text-status"},"plain text statuses")," when the status is not critical information for a user to know.")),(0,s.yg)("h3",null,"Accessibility"),(0,s.yg)("p",null,`Non-text status indicators (such as icons or status dots) should be paired with text whenever
possible and should always be given a `,(0,s.yg)("inlineCode",{parentName:"p"},"title"),` to give context and meaning to the icon or shape.
Check out the `,(0,s.yg)("a",{parentName:"p",href:"/components/icon/usage-guidelines"},"icon usage guidelines")," for more detailed accessibility information."),(0,s.yg)("h2",null,"Status types"),(0,s.yg)("h3",null,"Process status"),(0,s.yg)("p",null,`Process statuses indicate an object’s progress through a set of stages. `,(0,s.yg)("strong",{parentName:"p"},"Process statuses should always be paired with text.")),(0,s.yg)(ec,{scope:{Box:i.az,Text:b.EY,Stack:v.B,StatusBadge:d.Wh,ProcessDisabledIcon:P.ProcessDisabledIcon,ProcessDraftIcon:C.ProcessDraftIcon,ProcessErrorIcon:M.ProcessErrorIcon,ProcessInProgressIcon:w.ProcessInProgressIcon,ProcessNeutralIcon:N.ProcessNeutralIcon,ProcessSuccessIcon:D.ProcessSuccessIcon,ProcessWarningIcon:k.ProcessWarningIcon},language:"jsx",mdxType:"LivePreview"},X),(0,s.yg)("p",null,"To determine how to show a process status:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"If additional information is needed about the status, use Icon, Text, and ",(0,s.yg)("a",{parentName:"li",href:"/components/anchor"},"Anchor")," (optional)."),(0,s.yg)("li",{parentName:"ul"},`If it’s in a Table and no additional information is needed, use a `,(0,s.yg)("a",{parentName:"li",href:"/components/status-badge#borderless-badges"},"borderless Status Badge"),"."),(0,s.yg)("li",{parentName:"ul"},"Otherwise, use the default ",(0,s.yg)("a",{parentName:"li",href:"/components/status-badge"},"Status Badge"),".")),(0,s.yg)("p",null,"Placement of the status in a Table should depend on the importance of the status to the given user flow and should be tested with users."),(0,s.yg)("p",null,`For statuses that are not as critical to a user’s workflow, use `,(0,s.yg)("a",{parentName:"p",href:"#plain-text-status"},"plain text statuses"),"."),(0,s.yg)(ec,{scope:{Box:i.az,Text:b.EY,Card:y.Z,StatusBadge:d.Wh,Badge:n.Ex,Heading:m.D,Table:I.XI,THead:I.D1,Tr:I.Tr,Th:I.Th,Td:I.Td,TBody:I.vc,Avatar:o.e,DetailText:p.z,ProcessSuccessIcon:D.ProcessSuccessIcon,ProcessWarningIcon:k.ProcessWarningIcon,Anchor:r.Mz},language:"jsx",mdxType:"LivePreview"},Z),(0,s.yg)(ec,{scope:{Box:i.az,Paragraph:x.f,Card:y.Z,Stack:v.B,StatusBadge:d.Wh,Heading:m.D},language:"jsx",mdxType:"LivePreview"},V),(0,s.yg)("h4",null,"Icon and token pairings"),(0,s.yg)(I.XI,{scrollHorizontally:!0,mdxType:"Table"},(0,s.yg)(I.D1,{mdxType:"THead"},(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Th,{mdxType:"Th"},"Icon"),(0,s.yg)(I.Th,{mdxType:"Th"},"Icon name"),(0,s.yg)(I.Th,{width:"200px",mdxType:"Th"},"Token"),(0,s.yg)(I.Th,{mdxType:"Th"},"Status Badge variant"),(0,s.yg)(I.Th,{mdxType:"Th"},"Usage"))),(0,s.yg)(I.vc,{mdxType:"TBody"},(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(j,{mdxType:"ProcessError"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessErrorIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon-error"),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessError"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates an error or that something went wrong.")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(L,{mdxType:"ProcessWarning"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessWarningIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon-warning"),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessWarning"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates a condition requiring corrective action.")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(U,{mdxType:"ProcessSuccess"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessSuccessIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon-success"),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessSuccess"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates that something is stable, active, or successfully completed.")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(G,{mdxType:"ProcessNeutral"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessNeutralIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon-neutral"),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessNeutral"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates a neutral / informative state. Can be used to fill any gaps that the more specific statuses don’t cover.")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)($,{mdxType:"ProcessInProgress"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessInProgressIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon-neutral"),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessInProgress"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates that something is in progress, in review, or scheduled.")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(Y,{mdxType:"ProcessDisabled"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessDisabledIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon"),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessDisabled"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates that something is inactive, disabled, or paused.")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(_,{mdxType:"ProcessDraft"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessDraftIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon"),(0,s.yg)(I.Td,{mdxType:"Td"},"ProcessDraft"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates that something is a draft, unused, or not started.")))),(0,s.yg)("br",null),(0,s.yg)("h3",null,"Plain text status"),(0,s.yg)("p",null,"Not all object statuses need icons or shapes. In fact, giving every status an icon or a shape can make it difficult for a user to find and focus on the most critical information"),(0,s.yg)("p",null,`If some statuses—such as successes or failures—are critical, use plain text for the other statuses that a user doesn’t need to identify as quickly.`),(0,s.yg)(ec,{scope:{Box:i.az,Button:c.$n,Heading:m.D,Text:b.EY,Table:I.XI,THead:I.D1,TBody:I.vc,Tr:I.Tr,Td:I.Td,Th:I.Th,StatusBadge:d.Wh},language:"jsx",mdxType:"LivePreview"},F),(0,s.yg)("h3",null,"Connectivity status"),(0,s.yg)("p",null,"Connectivity statuses are used to show if a user, object, or system is online or offline. ",(0,s.yg)("strong",{parentName:"p"},"Connectivity statuses should always be paired with text.")),(0,s.yg)(ec,{scope:{Box:i.az,Text:b.EY,Card:y.Z,StatusBadge:d.Wh,ConnectivityAvailableIcon:A.ConnectivityAvailableIcon,ConnectivityBusyIcon:E.ConnectivityBusyIcon,ConnectivityUnavailableIcon:O.ConnectivityUnavailableIcon,ConnectivityOfflineIcon:R.ConnectivityOfflineIcon,ConnectivityNeutralIcon:z.ConnectivityNeutralIcon},language:"jsx",mdxType:"LivePreview"},J),(0,s.yg)("p",null,"To determine how to show a connectivity status:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"If additional information is needed to explain the status, use Icon, Text, and ",(0,s.yg)("a",{parentName:"li",href:"/components/anchor"},"Anchor"),"."),(0,s.yg)("li",{parentName:"ul"},`If it’s in a Table and no additional information is needed, use a `,(0,s.yg)("a",{parentName:"li",href:"/components/status-badge#borderless-badges"},"borderless Status Badge"),"."),(0,s.yg)("li",{parentName:"ul"},"Otherwise, use the default Status Badge.")),(0,s.yg)(ec,{scope:{Box:i.az,Text:b.EY,Card:y.Z,StatusBadge:d.Wh,Badge:n.Ex,Heading:m.D,Table:I.XI,THead:I.D1,Tr:I.Tr,Th:I.Th,Td:I.Td,TBody:I.vc,Avatar:o.e,DetailText:p.z,ConnectivityAvailableIcon:A.ConnectivityAvailableIcon,ConnectivityBusyIcon:E.ConnectivityBusyIcon,ConnectivityUnavailableIcon:O.ConnectivityUnavailableIcon,ConnectivityOfflineIcon:R.ConnectivityOfflineIcon,ConnectivityNeutralIcon:z.ConnectivityNeutralIcon},language:"jsx",mdxType:"LivePreview"},q),(0,s.yg)(ec,{scope:{PageHeader:h.zY,UserIcon:S.UserIcon,Anchor:r.Mz,Badge:n.Ex,PageHeaderPrefix:h.VR,MoreIcon:B.MoreIcon,StatusBadge:d.Wh,PageHeaderMeta:h.Ys,Avatar:o.e,PageHeaderActions:h.cA,PageHeaderHeading:h.B9,PageHeaderDetails:h.Le,ButtonGroup:l.e,Button:c.$n,Box:i.az,PageHeaderInPageNavigation:h.zJ,InPageNavigation:g.J,InPageNavigationItem:g.i},language:"jsx",noInline:!0,mdxType:"LivePreview"},Q),(0,s.yg)("h4",null,"Connectivity icon and token pairings"),(0,s.yg)(I.XI,{scrollHorizontally:!0,mdxType:"Table"},(0,s.yg)(I.D1,{mdxType:"THead"},(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Th,{mdxType:"Th"},"Icon"),(0,s.yg)(I.Th,{mdxType:"Th"},"Icon name"),(0,s.yg)(I.Th,{width:"250px",mdxType:"Th"},"Token"),(0,s.yg)(I.Th,{mdxType:"Th"},"Status Badge variant"),(0,s.yg)(I.Th,{mdxType:"Th"},"Usage"))),(0,s.yg)(I.vc,{mdxType:"TBody"},(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(A.ConnectivityAvailableIcon,{title:"available",color:"colorTextIconAvailable",mdxType:"ConnectivityAvailableIcon"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ConnectivityAvailableIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon-available"),(0,s.yg)(I.Td,{mdxType:"Td"},"ConnectivityAvailable"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates that a person or entity is available or online.")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(E.ConnectivityBusyIcon,{title:"busy",color:"colorTextIconBusy",mdxType:"ConnectivityBusyIcon"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ConnectivityBusyIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon-busy"),(0,s.yg)(I.Td,{mdxType:"Td"},"ConnectivityBusy"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates that a person or entity is busy or away.")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(O.ConnectivityUnavailableIcon,{title:"unavailable",color:"colorTextIconUnavailable",mdxType:"ConnectivityUnavailableIcon"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ConnectivityUnavailableIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon-unavailable"),(0,s.yg)(I.Td,{mdxType:"Td"},"ConnectivityUnavailable"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates that a person or entity is unavailable or at capacity.")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(z.ConnectivityNeutralIcon,{title:"neutral",color:"colorTextIconNeutral",mdxType:"ConnectivityNeutralIcon"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ConnectivityNeutralIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon-neutral"),(0,s.yg)(I.Td,{mdxType:"Td"},"ConnectivityNeutral"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates that a person or entity is neutral.")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(R.ConnectivityOfflineIcon,{title:"offline",color:"colorTextIconOffline",mdxType:"ConnectivityOfflineIcon"})),(0,s.yg)(I.Td,{mdxType:"Td"},"ConnectivityOfflineIcon"),(0,s.yg)(I.Td,{mdxType:"Td"},"$color-text-icon-offline"),(0,s.yg)(I.Td,{mdxType:"Td"},"ConnectivityOffline"),(0,s.yg)(I.Td,{mdxType:"Td"},"Indicates that a person or entity is offline.")))),(0,s.yg)("br",null),(0,s.yg)("h3",null,"Swapping statuses with Status Menu"),(0,s.yg)("p",null,"Use a ",(0,s.yg)("a",{parentName:"p",href:"/components/status-menu"},"Status Menu")," to let users swap between statuses."),(0,s.yg)(ec,{scope:{useStatusMenuState:f.EH,StatusMenu:d.Wq,StatusMenuItemRadio:d.Ui,StatusMenuBadge:d.rW,StatusMenuItemChild:d.pf,ProcessObject:K.ZG},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},K.ng),(0,s.yg)(ec,{scope:{useStatusMenuState:f.EH,StatusMenu:d.Wq,StatusMenuItemRadio:d.Ui,StatusMenuBadge:d.rW,StatusMenuItemChild:d.pf,ConnectivityObject:K.$H},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},K.FX),(0,s.yg)("h2",null,"Dos and Don'ts"),(0,s.yg)(u.l,{mdxType:"DoDont"},(0,s.yg)(u.Do,{title:"Do",body:"Use status icons to draw attention to the most important statuses. Try to limit a given set of statuses to 3–4 icons, and use plain text statuses for the rest. This helps users skim a dense set of data for the information that is most critical.",preview:!1,mdxType:"Do"},(0,s.yg)(I.XI,{mdxType:"Table"},(0,s.yg)(I.D1,{mdxType:"THead"},(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Th,{mdxType:"Th"},"Status"))),(0,s.yg)(I.vc,{mdxType:"TBody"},(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},"Not Started")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},"Archived")),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(i.az,{display:"flex",mdxType:"Box"},(0,s.yg)(M.ProcessErrorIcon,{color:"colorTextIconError",decorative:!1,title:"error",mdxType:"ProcessErrorIcon"}),(0,s.yg)(b.EY,{marginLeft:"space20",mdxType:"Text"},"Error")))),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(i.az,{display:"flex",mdxType:"Box"},(0,s.yg)(w.ProcessInProgressIcon,{color:"colorTextIconNeutral",decorative:!1,title:"In-progress",mdxType:"ProcessInProgressIcon"}),(0,s.yg)(b.EY,{marginLeft:"space20",mdxType:"Text"},"In-progress")))),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(i.az,{display:"flex",mdxType:"Box"},(0,s.yg)(D.ProcessSuccessIcon,{color:"colorTextIconSuccess",decorative:!1,title:"success",mdxType:"ProcessSuccessIcon"}),(0,s.yg)(b.EY,{marginLeft:"space20",mdxType:"Text"},"Success"))))))),(0,s.yg)(u.w,{title:"Don't",body:"Don't put a status icon or shape on every status if some statuses are more important than others. If all statuses are of equal importance, they can all have icons.",preview:!1,mdxType:"Dont"},(0,s.yg)(I.XI,{mdxType:"Table"},(0,s.yg)(I.D1,{mdxType:"THead"},(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Th,{mdxType:"Th"},"Status"))),(0,s.yg)(I.vc,{mdxType:"TBody"},(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"}," ",(0,s.yg)(i.az,{display:"flex",mdxType:"Box"},(0,s.yg)(C.ProcessDraftIcon,{color:"colorTextIcon",decorative:!1,title:"not started",mdxType:"ProcessDraftIcon"}),(0,s.yg)(b.EY,{marginLeft:"space20",mdxType:"Text"},"Not started")))),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"}," ",(0,s.yg)(i.az,{display:"flex",mdxType:"Box"},(0,s.yg)(P.ProcessDisabledIcon,{color:"colorTextIcon",decorative:!1,title:"archived",mdxType:"ProcessDisabledIcon"}),(0,s.yg)(b.EY,{marginLeft:"space20",mdxType:"Text"},"Archived")))),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(i.az,{display:"flex",mdxType:"Box"},(0,s.yg)(M.ProcessErrorIcon,{color:"colorTextIconError",decorative:!1,title:"error detected",mdxType:"ProcessErrorIcon"}),(0,s.yg)(b.EY,{marginLeft:"space20",mdxType:"Text"},"Error detected")))),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(i.az,{display:"flex",mdxType:"Box"},(0,s.yg)(w.ProcessInProgressIcon,{color:"colorTextIconNeutral",decorative:!1,title:"In-progress",mdxType:"ProcessInProgressIcon"}),(0,s.yg)(b.EY,{marginLeft:"space20",mdxType:"Text"},"In-progress")))),(0,s.yg)(I.Tr,{mdxType:"Tr"},(0,s.yg)(I.Td,{mdxType:"Td"},(0,s.yg)(i.az,{display:"flex",mdxType:"Box"},(0,s.yg)(D.ProcessSuccessIcon,{color:"colorTextIconSuccess",decorative:!1,title:"success",mdxType:"ProcessSuccessIcon"}),(0,s.yg)(b.EY,{marginLeft:"space20",mdxType:"Text"},"Success")))))))),(0,s.yg)("h2",null,"Related Discussions"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/discussions/1523"},"Adding text labels to status icons")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/discussions/1326"},"Showing error previews in a table")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/discussions/1344"},"Text color for success text and accessibility")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/discussions/887"},"Bulk Action - Table component usage")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/discussions/1176"},"Visual and accessibility for Sender Id management section")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/discussions/951"},"Status of different services and objects through out product's life-cycle")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/discussions/984"},"Event Streams (Office Hours: Thu Dec 3)"))))))}eu.isMDXComponent=!0},63049:(e,t,a)=>{"use strict";a.d(t,{$H:()=>o,FX:()=>n,ZG:()=>s,ng:()=>r});let s={Success:{variant:"ProcessSuccess",children:"Complete"},Neutral:{variant:"ProcessNeutral",children:"In review"},Warning:{variant:"ProcessWarning",children:"Needs attention"},Error:{variant:"ProcessError",children:"Rejected"},InProgress:{variant:"ProcessInProgress",children:"In-progress"},Disabled:{variant:"ProcessDisabled",children:"Paused"},Draft:{variant:"ProcessDraft",children:"Draft"}},r=`
const ProcessStatusMenu = () => {
  const [process, setProcess] = React.useState(ProcessObject.Success);
  const menu = useStatusMenuState();
  const onClick = (status) => {
    setProcess(ProcessObject[status]);
    menu.hide();
  };
  return (
    <>
      <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={process.variant}>
        {process.children}
      </StatusMenuBadge>
      <StatusMenu {...menu} aria-label="Preferences">
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="success"
          checked={process.children === ProcessObject.Success.children}
          onClick={() => onClick('Success')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessSuccess">{ProcessObject.Success.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="neutral"
          checked={process.children === ProcessObject.Neutral.children}
          onClick={() => onClick('Neutral')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessNeutral">{ProcessObject.Neutral.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="warning"
          checked={process.children === ProcessObject.Warning.children}
          onClick={() => onClick('Warning')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessWarning">{ProcessObject.Warning.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="error"
          checked={process.children === ProcessObject.Error.children}
          onClick={() => onClick('Error')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessError">{ProcessObject.Error.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="InProgress"
          checked={process.children === ProcessObject.InProgress.children}
          onClick={() => onClick('InProgress')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessInProgress">{ProcessObject.InProgress.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="disabled"
          checked={process.children === ProcessObject.Disabled.children}
          onClick={() => onClick('Disabled')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessDisabled">{ProcessObject.Disabled.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="draft"
          checked={process.children === ProcessObject.Draft.children}
          onClick={() => onClick('Draft')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessDraft">{ProcessObject.Draft.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
      </StatusMenu>
    </>
  );
};

render(
  <ProcessStatusMenu />
)
`.trim(),o={Available:{variant:"ConnectivityAvailable",children:"Available"},Busy:{variant:"ConnectivityBusy",children:"Busy"},Unavailable:{variant:"ConnectivityUnavailable",children:"Unavailable"},Neutral:{variant:"ConnectivityNeutral",children:"Neutral"},Offline:{variant:"ConnectivityOffline",children:"Offline"}},n=`
const ConnectivityStatusMenu = () => {
  const [availability, setConnectivity] = React.useState(ConnectivityObject.Available);
  const menu = useStatusMenuState();
  const onClick = (status) => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  return (
    <>
      <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={availability.variant}>
        {availability.children}
      </StatusMenuBadge>
      <StatusMenu {...menu} aria-label="Preferences">
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Available'}
          value="available"
          {...menu}
          onClick={() => onClick('Available')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityAvailable">Available</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Busy'}
          value="busy"
          {...menu}
          onClick={() => onClick('Busy')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityBusy">Busy</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Unavailable'}
          value="unavailable"
          {...menu}
          onClick={() => onClick('Unavailable')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityUnavailable">Unavailable</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Neutral'}
          value="neutral"
          {...menu}
          onClick={() => onClick('Neutral')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityNeutral">Neutral</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Offline'}
          value="offline"
          {...menu}
          onClick={() => onClick('Offline')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityOffline">Offline</StatusMenuItemChild>
        </StatusMenuItemRadio>
      </Menu>
    </>
  );
};

render(
  <ConnectivityStatusMenu />
)
`.trim()},80088:(e,t,a)=>{"use strict";a.r(t),a.d(t,{UserIcon:()=>n});var s=a(36669),r=a(55729),o=a(96316);let n=r.forwardRef(({as:e,display:t,element:a="ICON",size:n,color:i,title:c,decorative:l},d)=>{let u=`UserIcon-${(0,s.GV)()}`;if(!l&&null==c)throw Error("[UserIcon]: Missing a title for non-decorative icon.");return r.createElement(o.IconWrapper,{as:e,display:t,element:a,size:n,color:i,ref:d},r.createElement("svg",{role:"img","aria-hidden":l,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":u},c?r.createElement("title",{id:u},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M10 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM6.5 6a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm3.5 5.5A5.5 5.5 0 004.5 17a.5.5 0 01-1 0 6.5 6.5 0 1113 0 .5.5 0 01-1 0 5.5 5.5 0 00-5.5-5.5z"})))});n.displayName="UserIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=15598)),_N_E=e.O()}]);