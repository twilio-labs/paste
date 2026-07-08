(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67],{3738:(e,o,t)=>{"use strict";t.d(o,{V:()=>c,x:()=>d});var r=t(76127),a=t(55729),n=e=>"margin"===e?"auto":"space0",i=(e,o,t)=>{let r=n(o),a=(({prefix:e,responsive:o,defaultValue:t})=>{let r=()=>o?[,,,].fill(t):t;return{[`${e}Top`]:r(),[`${e}Bottom`]:r(),[`${e}Right`]:r(),[`${e}Left`]:r()}})({prefix:o,responsive:!1,defaultValue:r});return void 0===t||(e?(a[`${o}Top`]=t,a[`${o}Bottom`]=t):(a[`${o}Right`]=t,a[`${o}Left`]=t)),a},l=(e,o,t)=>{let r=n(o),a={[`${o}Top`]:[r,r,r],[`${o}Bottom`]:[r,r,r],[`${o}Right`]:[r,r,r],[`${o}Left`]:[r,r,r]},i=Array.isArray(t)&&0===t.length;return void 0===t||i||e.forEach((e,r)=>{let n=Array.isArray(t)?t[r]:t;e?(a[`${o}Top`][r]=n,a[`${o}Bottom`][r]=n):(a[`${o}Right`][r]=n,a[`${o}Left`][r]=n)}),a},d=a.forwardRef(({as:e,children:o,element:t="GRID",equalColumnHeights:n,gutter:d,marginTop:c,marginBottom:s,vertical:p=!1,...u},m)=>{let g=a.useMemo(()=>a.Children.map(o,e=>a.isValidElement(e)?a.cloneElement(e,{count:a.Children.count(o),gutter:d,vertical:p,stretchColumnContent:n}):e),[o,p,n,d]),h=a.useMemo(()=>((e,o=!1)=>{let t=(e=>Array.isArray(e)?e.map(e=>"space0"!==e?e.replace("space","spaceNegative"):"space0"===e?"space0":null):"space0"===e?"space0":e&&"string"==typeof e?e.replace("space","spaceNegative"):"auto")(e);return Array.isArray(o)?l(o,"margin",t):i(o,"margin",t)})(d,p),[d,p]),y=a.useMemo(()=>(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e&&!0===e?"column":"row"):e?"column":"row")(p),[p]);return a.createElement(r.az,{...(0,r.x8)(u),ref:m,as:e,alignItems:n?"stretch":null,element:t,flexDirection:y,flexWrap:"wrap",display:"flex",...h,marginTop:c,marginBottom:s,minWidth:"size0",rowGap:u.rowGap,columnGap:u.columnGap},g)});d.displayName="Grid";var c=a.forwardRef(({as:e,children:o,count:t,element:n="COLUMN",gutter:d,offset:c,span:s,stretchColumnContent:p,vertical:u,...m},g)=>{let h=a.useMemo(()=>(({count:e,span:o,gutter:t,offset:r,vertical:a,stretchColumnContent:n})=>{let d={width:(({count:e,span:o})=>Array.isArray(o)&&e?o.map(e=>`${e/12*100}%`):"number"==typeof o&&e&&e<=12?`${o/12*100}%`:void 0!==e?`${1/e*100}%`:"8.333333333333332%")({count:e,span:o}),...(({vertical:e,gutter:o})=>Array.isArray(e)?l(e,"padding",o):i(e,"padding",o))({gutter:t,vertical:a})};return r&&(d.marginLeft=(e=>Array.isArray(e)?e.map(e=>`${e/12*100}%`):`${e/12*100}%`)(r)),a&&!r&&(d.minWidth=(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e?!0===e?"100%":"0":null):e?"100%":"0")(a),d.marginLeft="space0"),n&&(d.alignContent="stretch",d.display="flex"),d})({count:t,gutter:d,offset:c,span:s,stretchColumnContent:p,vertical:u}),[t,d,c,s,p,u]);return a.createElement(r.az,{...(0,r.x8)(m),...h,as:e,element:n,ref:g},o)});c.displayName="Column"},15780:(e,o,t)=>{"use strict";t.d(o,{A:()=>u});var r=t(72387),a=t(95669),n=t.n(a),i=t(81278);t(55729);var l=t(10511),d=t(43084),c=t(63437),s=t(38992);let p={h1:()=>null},u=({children:e,meta:o,navigationData:t})=>{let a=o.title?`${o.title} - ${s.DZ.TITLE}`:s.DZ.TITLE,u=o.description||s.DZ.DESCRIPTION,m=(0,i.useRouter)();return(0,r.FD)(c.T,{navigationData:t,children:[(0,r.FD)(n(),{children:[(0,r.Y)("title",{children:a}),(0,r.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${m.pathname}`}),(0,r.Y)("meta",{name:"description",content:u},"description")]}),(0,r.Y)(l.s,{children:(0,r.Y)(d.Q,{componentOverrides:o.package?p:{},children:e})})]})}},17938:(e,o,t)=>{"use strict";t.d(o,{Z:()=>n});var r=t(76127),a=t(55729),n=a.forwardRef(({children:e,element:o="CARD",padding:t="space100",paddingBottom:n,paddingLeft:i,paddingRight:l,paddingTop:d,fillHeight:c,fillWidth:s,...p},u)=>a.createElement(r.az,{...(0,r.x8)(p),ref:u,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:o,padding:t,paddingBottom:n,paddingLeft:i,paddingRight:l,paddingTop:d,backgroundColor:"colorBackgroundWeakest",height:c?"100%":void 0,width:s?"100%":void 0},e));n.displayName="Card"},18761:(e,o,t)=>{"use strict";t.r(o),t.d(o,{ExportIcon:()=>i});var r=t(36669),a=t(55729),n=t(96316);let i=a.forwardRef(({as:e,display:o,element:t="ICON",size:i,color:l,title:d,decorative:c},s)=>{let p=`ExportIcon-${(0,r.GV)()}`;if(!c&&null==d)throw Error("[ExportIcon]: Missing a title for non-decorative icon.");return a.createElement(n.IconWrapper,{as:e,display:o,element:t,size:i,color:l,ref:s},a.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":p},d?a.createElement("title",{id:p},d):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M10.625 3.5a.625.625 0 10-1.25 0v8.491L7.342 9.958a.625.625 0 10-.884.884l3.125 3.125c.244.244.64.244.884 0l3.125-3.125a.625.625 0 00-.884-.884l-2.083 2.083V3.5zm-7.75 13c0-.345.28-.625.625-.625h13a.625.625 0 110 1.25h-13a.625.625 0 01-.625-.625z"})))});i.displayName="ExportIcon"},22275:(e,o,t)=>{"use strict";t.d(o,{a:()=>l});var r=t(76127),a=t(8909),n=t(86146),i=t(55729),l=i.forwardRef(({children:e,disabled:o,element:t="INLINE_CONTROL_GROUP",errorText:l,helpText:d,legend:c,orientation:s="vertical",required:p,i18nRequiredLabel:u,fieldStyleProps:m,...g},h)=>{let y=!!m;return i.createElement(r.az,{...(0,r.x8)(g),as:"fieldset",element:t,margin:"space0",padding:"space0",minWidth:"0px",borderWidth:"borderWidth0",ref:h},i.createElement(n.J,{as:"legend",element:"LEGEND",htmlFor:void 0,required:p,marginBottom:"space0",disabled:o,i18nRequiredLabel:u},c),d&&i.createElement(a.$,{marginTop:"space0"},d),i.createElement(r.az,{element:`${t}_SET`,marginRight:y?void 0:"space20"},i.createElement(r.az,{display:y&&"horizontal"===s?"inline-flex":"block",width:y?"100%":void 0},i.Children.map(e,(e,o)=>i.createElement(r.az,{element:`${t}_FIELD`,display:"horizontal"===s?"inline-block":"block",flexBasis:y?"50%":void 0,marginTop:m?.marginTop?0===o&&"vertical"===s?"space40":m?.marginTop:"space40",marginRight:"horizontal"!==s||y?null:"space70",marginLeft:y&&"horizontal"===s?0===o?"space0":"space30":"space0"},e))),l&&i.createElement(r.az,{element:`${t}_ERROR_TEXT_WRAPPER`,marginTop:"space40"},i.createElement(a.$,{variant:"error"},l))))});l.displayName="InlineControlGroup"},47837:(e,o,t)=>{"use strict";t.d(o,{$Q:()=>E,Ri:()=>b,Sc:()=>f,iA:()=>x,zc:()=>T});var r=t(79559),a=t(76127),n=t(98536),i=t(81423),l=t(86146),d=t(7658),c=t(36669),s=t(55729),p=t(22275),u=t(8909),m=s.createContext({disabled:!1,name:void 0,hasError:void 0,onChange:()=>{}}),g={paddingTop:"space20",paddingRight:"space30",paddingBottom:"space20",paddingLeft:"space30",borderRadius:"borderRadius20",backgroundColor:"colorBackground"},h={...g,backgroundColor:"colorBackground"},y={paddingLeft:"space30",paddingRight:"space30"},x=s.forwardRef((e,o)=>s.createElement(a.az,{...e,ref:o,as:"input",type:"checkbox",size:"size0",border:"none",overflow:"hidden",padding:"space0",margin:"space0",whiteSpace:"nowrap",textTransform:"none",position:"absolute",clip:"rect(0 0 0 0)"}));x.displayName="HiddenCheckbox";var b=({checked:e,element:o,indeterminate:t})=>t?s.createElement(i.MinusIcon,{element:o,decorative:!0,color:"inherit",size:"sizeIcon10"}):s.createElement(n.CheckboxCheckIcon,{element:o,display:e?"block":"none",decorative:!0,color:"inherit",size:"sizeIcon10"});b.displayName="CheckboxIcon";var f=s.forwardRef(({checked:e,defaultChecked:o,element:t="CHECKBOX",children:n,helpText:i,id:p,indeterminate:u,isSelectAll:f,isSelectAllChild:E,required:T,onChange:v,...C},w)=>{if(null!=e&&null!=o)throw Error('[Paste Checkbox] Do not provide both "defaultChecked" and "checked" to Checkbox at the same time. Please consider if you want this component to be controlled or uncontrolled.');let[k,I]=s.useState(o),B=s.useContext(m),S=(0,c.GV)(),R=p||(0,c.GV)(),A=s.useMemo(()=>void 0!==e,[]),N=A?e:k,D=s.useCallback(e=>{A?v?v(e):B.onChange(e):I(e.target.checked)},[v,B.onChange]),z=null!=C.disabled?C.disabled:B.disabled,M=null!=C.name?C.name:B.name,_=null!=C.hasError?C.hasError:B.hasError,$={};return f&&($=!z&&(N||u)?h:g),E&&($=y),s.createElement(a.az,{element:t,display:"inline-flex",position:"relative",flexDirection:"column",...$},s.createElement(x,{...(0,a.x8)(C),checked:e,defaultChecked:o,disabled:z,name:M,onChange:D,"aria-describedby":S,"aria-checked":u?"mixed":e,"aria-invalid":_,id:R,required:T,ref:w}),s.createElement(r.g$,{disabled:z,htmlFor:R},s.createElement(r.BJ,{alignItems:"center",borderRadius:"borderRadius20",element:`${t}_CONTROL`,disabled:z,position:"relative",type:"checkbox"},s.createElement(b,{element:`${t}_ICON`,checked:N,indeterminate:u})),s.createElement(r.pX,{element:`${t}_LABEL_TEXT`,fontWeight:f?null:"fontWeightMedium"},s.createElement(d.Ss,{verticalAlign:"top"},T&&s.createElement(d.pV,{spacing:"space20"},s.createElement(l.j,null)),s.createElement(d.To,null,n)))),i&&s.createElement(r._v,{element:`${t}_HELP_TEXT_WRAPPER`,helpTextId:S},i))});f.displayName="Checkbox";var E=s.forwardRef(({children:e,element:o="CHECKBOX_GROUP",disabled:t=!1,errorText:r,isSelectAll:a=!1,name:n,onChange:i,orientation:l="vertical",i18nRequiredLabel:d="(required)",...c},u)=>{let g=s.useCallback(e=>{i?.(e.target.checked)},[i]),h=s.useMemo(()=>({disabled:t,name:n,onChange:g,hasError:!!r||void 0}),[t,n,g]);return s.createElement(m.Provider,{value:h},s.createElement(p.a,{...c,element:o,disabled:t,errorText:r,name:n,orientation:l,ref:u,i18nRequiredLabel:d},s.Children.map(e,(e,o)=>s.isValidElement(e)?s.cloneElement(e,{isSelectAll:a&&0===o,isSelectAllChild:a&&"vertical"===l&&0!==o}):e)))});E.displayName="CheckboxGroup";var T=s.forwardRef(({children:e,element:o="CHECKBOX_DISCLAIMER",errorText:t,...r},n)=>s.createElement(s.Fragment,null,s.createElement(a.az,{element:o,backgroundColor:"colorBackground",borderRadius:"borderRadius20",padding:"space50"},s.createElement(f,{...r,hasError:null!=t,ref:n},e)),t&&s.createElement(a.az,{marginTop:"space30",element:`${o}_ERROR_TEXT_WRAPPER`,marginLeft:"space50"},s.createElement(u.$,{variant:"error"},t))));T.displayName="CheckboxDisclaimer"},60951:(e,o,t)=>{"use strict";t.r(o),t.d(o,{DownloadIcon:()=>i});var r=t(36669),a=t(55729),n=t(96316);let i=a.forwardRef(({as:e,display:o,element:t="ICON",size:i,color:l,title:d,decorative:c},s)=>{let p=`DownloadIcon-${(0,r.GV)()}`;if(!c&&null==d)throw Error("[DownloadIcon]: Missing a title for non-decorative icon.");return a.createElement(n.IconWrapper,{as:e,display:o,element:t,size:i,color:l,ref:s},a.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":p},d?a.createElement("title",{id:p},d):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M10.625 3.5a.625.625 0 10-1.25 0v8.491L7.342 9.958a.625.625 0 10-.884.884l3.125 3.125c.244.244.64.244.884 0l3.125-3.125a.625.625 0 00-.884-.884l-2.083 2.083V3.5zm-7.75 13c0-.345.28-.625.625-.625h13a.625.625 0 110 1.25h-13a.625.625 0 01-.625-.625z"})))});i.displayName="DownloadIcon"},64280:(e,o,t)=>{"use strict";t.r(o),t.d(o,{__N_SSG:()=>D,default:()=>V,getStaticProps:()=>M,mdxHeadings:()=>_,meta:()=>z}),t(55729);var r=t(11885),a=t(4073),n=t(76127),i=t(17938),l=t(3738),d=t(60798),c=t(50010),s=t(44255),p=t(95036),u=t(629),m=t(84498),g=t(50163),h=t(51582),y=t(92980),x=t(18761),b=t(60951),f=t(47837),E=t(96483),T=t(85152),v=t(88017),C=t(36669);let w=`
const ExportButton = () => {
  const [submitting, setSubmitting] = React.useState(false);

  const handleClick = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Tooltip text="Export first 10,000 message log lines">
      <Button variant="secondary" onClick={handleClick} loading={submitting}>
        <ExportIcon decorative />
        Export CSV
      </Button>
    </Tooltip>
  );
};

render(
  <ExportButton />
)
`.trim(),k=`
const ExportButton = () => {
  const [submitting, setSubmitting] = React.useState(false);

  const handleClick = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Tooltip text="Export first 10,000 message log lines">
      <Button variant="secondary" onClick={handleClick} loading={submitting}>
        <ExportIcon decorative />
        Export CSV
      </Button>
    </Tooltip>
  );
};

const ExportMenu = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="secondary">
        <ExportIcon decorative />
        Export
        <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Export options">
        <MenuItem
          {...menu}
          onClick={() => {
            alert("Data as CSV");
          }}
        >
          Data as CSV
        </MenuItem>
        <MenuItem
          {...menu}
          onClick={() => {
            alert("Graph as PNG");
          }}
        >
          Graph as PNG
        </MenuItem>
      </Menu>
    </>
  );
};

const ExportImmediate = () => {
  return (
    <Stack orientation="horizontal" spacing="space60">
      <ExportButton />
      <ExportMenu />
    </Stack>
  );
};

render(
  <ExportImmediate />
)
`.trim(),I=`
const ExportOptionsModal = ({ isOpen, closeAction }) => {
  const seed = useUIDSeed();
  const modalHeadingID = seed("modal-heading");

  return (
    <Modal
      ariaLabelledby={modalHeadingID}
      isOpen={isOpen}
      onDismiss={closeAction}
      size="default"
    >
      <ModalHeader>
        <ModalHeading as="h3" id={modalHeadingID}>
          Data export options
        </ModalHeading>
      </ModalHeader>
      <ModalBody>
        <CheckboxGroup
          name="desktop"
          legend="Select the columns you would like to export"
        >
          <Checkbox id={seed("timestamp")} value="timestamp">
            Timestamp
          </Checkbox>
          <Checkbox id={seed("event")} value="event">
            Event
          </Checkbox>
          <Checkbox id={seed("product")} value="product">
            Product
          </Checkbox>
          <Checkbox id={seed("debug_event_sid")} value="debug_event_sid">
            Debug event SID
          </Checkbox>
          <Checkbox id={seed("service_sid")} value="service_sid">
            Service SID
          </Checkbox>
          <Checkbox id={seed("resource_sid")} value="resource_sid">
            Resource SID
          </Checkbox>
          <Checkbox id={seed("message")} value="message">
            Message
          </Checkbox>
        </CheckboxGroup>
      </ModalBody>
      <ModalFooter>
        <ModalFooterActions>
          <Button variant="secondary" onClick={closeAction}>
            Cancel
          </Button>
          <Button variant="primary" onClick={closeAction}>
            <ExportIcon decorative /> Export
          </Button>
        </ModalFooterActions>
      </ModalFooter>
    </Modal>
  );
};

const ExportModal = () => {
  const [showExportModal, setShowExportModal] = React.useState(false);
  const handleOpen = () => setShowExportModal(true);
  const handleClose = () => setShowExportModal(false);

  return (
    <>
      <Tooltip text="Export first 10,000 message log lines">
        <Button variant="secondary" onClick={handleOpen}>
          <ExportIcon decorative />
          Export CSV
        </Button>
      </Tooltip>
      <ExportOptionsModal isOpen={showExportModal} closeAction={handleClose} />
    </>
  );
};

render(
  <ExportModal />
)
`.trim(),B=`
const ExportDelayed = () => {
  const toaster = useToaster();

  const handleClick = () => {
    toaster.push({
      message:
        "Successfully initiated data export. You will receive an email when your export is ready to download.",
      variant: "success"
    });
  };

  return (
    <>
      <Button variant="secondary" onClick={handleClick}>
        <ExportIcon decorative />
        Export CSV
      </Button>
      <Toaster {...toaster} />
    </>
  );
};

render(
  <ExportDelayed />
)
`.trim(),S=`
const ExportDownloadPage = () => (
  <>
    <Heading as="h2" variant="heading20">
      Active Exports
    </Heading>
    <Table scrollHorizontally>
      <THead>
        <Tr>
          <Th>Status</Th>
          <Th>Export name</Th>
          <Th>Actions</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>
            <Box display="flex" alignItems="center">
              <Box
                width="sizeSquare40"
                height="sizeSquare40"
                backgroundColor="colorBackgroundSuccess"
                borderRadius="borderRadiusCircle"
              />
              <Text as="p" marginLeft="space30">
                Ready for download
              </Text>
            </Box>
            <Text as="p" color="colorTextWeak" marginLeft="space60">
              Tuesday, June 1, 2021
            </Text>
          </Td>
          <Td>
            <strong>Contacts who did not click</strong>
          </Td>
          <Td>
            <Button variant="link">
              <DownloadIcon decorative />
              Download CSV
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Box display="flex" alignItems="center">
              <Box
                width="sizeSquare40"
                height="sizeSquare40"
                backgroundColor="colorBackgroundSuccess"
                borderRadius="borderRadiusCircle"
              />
              <Text as="p" marginLeft="space30">
                Ready for download
              </Text>
            </Box>
            <Text as="p" color="colorTextWeak" marginLeft="space60">
              Tuesday, February 2, 2021
            </Text>
          </Td>
          <Td>
            <strong>All contacts</strong>
          </Td>
          <Td>
            <Button variant="link">
              <DownloadIcon decorative />
              Download CSV
            </Button>
          </Td>
        </Tr>
      </TBody>
    </Table>
  </>
);

render(
  <ExportDownloadPage />
)
`.trim(),R=`
const ExportPlacement = () => (
  <>
    <Heading as="h2" variant="heading20">
      90s Music
    </Heading>
    <Box display="flex" justifyContent="flex-end" marginBottom="space60">
      <Tooltip text="Export first 10,000 message log lines">
        <Button variant="secondary" onClick={() => {}}>
          <ExportIcon decorative />
          Export CSV
        </Button>
      </Tooltip>
    </Box>
    <Table>
      <THead>
        <Tr>
          <Th>Artist</Th>
          <Th>Title</Th>
          <Th>Year</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Blackstreet</Td>
          <Td>No Diggity</Td>
          <Td>1996</Td>
        </Tr>
        <Tr>
          <Td>Oasis</Td>
          <Td>Wonderwall</Td>
          <Td>1995</Td>
        </Tr>
        <Tr>
          <Td>Daft Punk</Td>
          <Td>Around the World</Td>
          <Td>1997</Td>
        </Tr>
      </TBody>
    </Table>
  </>
);


render(
  <ExportPlacement />
)
`.trim(),A=`
const ExportCard = () => (
  <Card>
    <Heading as="h3" variant="heading30">
      August 2021 usage
    </Heading>
    <Paragraph>Balance: -$10,512.02</Paragraph>
    <Button variant="secondary" onClick={() => {}}>
      <ExportIcon decorative />
      Export PDF
    </Button>
  </Card>
);

render(
  <ExportCard />
)
`.trim();var N=t(15780),D=!0;let z={title:"Data Export",description:"The Data Export pattern provides a way for the user to extract data from their account.",slug:"/patterns/data-export/"},M=async()=>({props:{data:{...feature},navigationData}}),_=[{value:"Ingredients",depth:2},{value:"Usage",depth:2},{value:"General",depth:3},{value:"Variations",depth:2},{value:"Immediate export",depth:3},{value:"Delayed export",depth:3},{value:"Positioning the export action",depth:2},{value:"Starter kits",depth:2},{value:"Related Discussions",depth:2}],$=e=>function(o){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",o)},O=$("NormalizedPatternHeader"),P=$("PageAside"),W=$("LivePreview"),L={meta:z,getStaticProps:M,mdxHeadings:_},H=N.A;function V({components:e,...o}){return(0,r.yg)(H,{...L,...o,components:e,mdxType:"MDXLayout"},(0,r.yg)(O,{description:z.description,name:z.title,data:o.data,mdxType:"NormalizedPatternHeader"}),(0,r.yg)("contentwrapper",null,(0,r.yg)(P,{data:_,mdxType:"PageAside"}),(0,r.yg)("content",null,(0,r.yg)("h2",null,"Ingredients"),(0,r.yg)(l.x,{gutter:"space30",marginBottom:"space80",mdxType:"Grid"},(0,r.yg)(l.V,{mdxType:"Column"},(0,r.yg)(i.Z,{mdxType:"Card"},(0,r.yg)(d.D,{as:"h3",variant:"heading40",marginBottom:"space0",mdxType:"Heading"},(0,r.yg)(a.Mz,{href:"/components/button",mdxType:"Anchor"},"Button")))),(0,r.yg)(l.V,{mdxType:"Column"},(0,r.yg)(i.Z,{mdxType:"Card"},(0,r.yg)(d.D,{as:"h3",variant:"heading40",marginBottom:"space0",mdxType:"Heading"},(0,r.yg)(a.Mz,{href:"/components/menu",mdxType:"Anchor"},"Menu")))),(0,r.yg)(l.V,{mdxType:"Column"},(0,r.yg)(i.Z,{mdxType:"Card"},(0,r.yg)(d.D,{as:"h3",variant:"heading40",marginBottom:"space0",mdxType:"Heading"},(0,r.yg)(a.Mz,{href:"/components/anchor",mdxType:"Anchor"},"Anchor"))))),(0,r.yg)(l.x,{gutter:"space30",marginBottom:"space80",mdxType:"Grid"},(0,r.yg)(l.V,{mdxType:"Column"},(0,r.yg)(i.Z,{mdxType:"Card"},(0,r.yg)(d.D,{as:"h3",variant:"heading40",marginBottom:"space0",mdxType:"Heading"},(0,r.yg)(a.Mz,{href:"/components/icon",mdxType:"Anchor"},"Export Icon")))),(0,r.yg)(l.V,{mdxType:"Column"},(0,r.yg)(i.Z,{mdxType:"Card"},(0,r.yg)(d.D,{as:"h3",variant:"heading40",marginBottom:"space0",mdxType:"Heading"},(0,r.yg)(a.Mz,{href:"/components/toast",mdxType:"Anchor"},"Toast")))),(0,r.yg)(l.V,{mdxType:"Column"},(0,r.yg)(i.Z,{mdxType:"Card"},(0,r.yg)(d.D,{as:"h3",variant:"heading40",marginBottom:"space0",mdxType:"Heading"},(0,r.yg)(a.Mz,{href:"/components/tooltip",mdxType:"Anchor"},"Tooltip"))))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},`// import all ingredients for the Data export pattern

import {​ Button } from "@twilio-paste/core/button";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { Menu } from "@twilio-paste/core/menu";
import { Tooltip } from "@twilio-paste/core/tooltip";
import { Anchor } from "@twilio-paste/core/anchor";
import { Toast } from "@twilio-paste/core/toast";
`)),(0,r.yg)("h2",null,"Usage"),(0,r.yg)("h3",null,"General"),(0,r.yg)("p",null,`The Data export pattern enables customers to extract all or selected data
from a data table or graph. Data is usually placed into a CSV, PNG, PDF,
or JSON file. In general, data exports are generated by the server in
Twilio products (particularly CSVs in Voice & Video, SIP trunking, and Messaging).`),(0,r.yg)("p",null,"Exporting should:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Be triggered by a ",(0,r.yg)("a",{parentName:"li",href:"/components/button"},"Button")," (or ",(0,r.yg)("a",{parentName:"li",href:"/patterns/button-vs-anchor#buttons-with-link-functionality"},"Button as Anchor"),`)
or `,(0,r.yg)("a",{parentName:"li",href:"/components/menu"},"Menu item"),`. The Button or Menu item should clearly state what type of file
will be exported. E.g. “Export CSV”.`),(0,r.yg)("li",{parentName:"ul"},`Tell the customer if there are any limitations to the data that can be exported.
Use a `,(0,r.yg)("a",{parentName:"li",href:"/components/tooltip"},"Tooltip")," to communicate this information.")),(0,r.yg)(W,{scope:{Tooltip:s.m,Button:p.$n,ExportIcon:x.ExportIcon},noInline:!0,language:"jsx",mdxType:"LivePreview"},w),(0,r.yg)("p",null,`Using the word “Export” and the `,(0,r.yg)("a",{parentName:"p",href:"/components/icon"},"ExportIcon")," are predictable signals to customers that they can extract data from Twilio."),(0,r.yg)("p",null,`Twilio products generally enable customers to convert files to a range of formats before downloading and saving. However if you can’t provide a format conversion, you should still use the word “Export” and the ExportIcon.`),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"#delayed-export"},"delayed export"),` is an exception to this copy guideline and uses the word “Download” and the `,(0,r.yg)("a",{parentName:"p",href:"/components/icon"},"DownloadIcon")," instead."),(0,r.yg)("h2",null,"Variations"),(0,r.yg)("h3",null,"Immediate export"),(0,r.yg)("p",null,`An immediate export happens when a customer can download their export on
the same page where they clicked the export Button or Menu item.`),(0,r.yg)("p",null,`When using a Button, while an export is in progress, show the Button loading
state. When it’s in a loading state, it will disable by default.`),(0,r.yg)(W,{scope:{Stack:m.B,MenuButton:g.IU,MenuItem:g.Dr,Menu:g.W1,Tooltip:s.m,useMenuState:h.EH,Button:p.$n,ChevronDownIcon:y.ChevronDownIcon,ExportIcon:x.ExportIcon},noInline:!0,language:"jsx",mdxType:"LivePreview"},k),(0,r.yg)("p",null,`Most often, selecting the export Button or Menu item should trigger a “save as”
dialog in the browser. Customers will be able to track the export’s download
status through their browser.`),(0,r.yg)("p",null,`However in cases where you might offer more customization of the data, you
can trigger a Modal first. In the Modal, customers can select what columns
to export, additional file formats, etc.`),(0,r.yg)(W,{scope:{useUIDSeed:C.nu,CheckboxGroup:f.$Q,Checkbox:f.Sc,Modal:v.aF,ModalHeader:v.rQ,ModalHeading:v.EZ,ModalBody:v.cw,ModalFooter:v.jl,ModalFooterActions:v.ox,Tooltip:s.m,Button:p.$n,ExportIcon:x.ExportIcon},noInline:!0,language:"jsx",mdxType:"LivePreview"},I),(0,r.yg)("h3",null,"Delayed export"),(0,r.yg)("p",null,`A delayed export happens when a customer needs to wait for data to be ready.
Use the same components as the immediate export pattern, but make sure to:`),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},`Confirm the export was initiated by using a Toast component. Inform the customer that they’ll receive an email notification when it’s ready.`)),(0,r.yg)(W,{scope:{Toaster:E.l$,useToaster:E._k,Button:p.$n,ExportIcon:x.ExportIcon},noInline:!0,language:"jsx",mdxType:"LivePreview"},B),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},`Send an email notification to the customer when the export is ready, with a link to or attachment of the file(s). In this second step, use the word “Download” (example: “Download CSV”) to trigger the actual file download since the customer already clicked an export action to start the export process.`)),(0,r.yg)(W,{scope:{Heading:d.D,Box:n.az,Tooltip:s.m,Table:T.XI,THead:T.D1,TBody:T.vc,Tr:T.Tr,Td:T.Td,Th:T.Th,Text:u.EY,Button:p.$n,DownloadIcon:b.DownloadIcon},noInline:!0,language:"jsx",mdxType:"LivePreview"},S),(0,r.yg)("h2",null,"Positioning the export action"),(0,r.yg)("p",null,`Place the export Button above and right-aligned to the data it’s exporting,
usually a data table or graph.`),(0,r.yg)(W,{scope:{Heading:d.D,Box:n.az,Tooltip:s.m,Table:T.XI,THead:T.D1,TBody:T.vc,Tr:T.Tr,Td:T.Td,Th:T.Th,Button:p.$n,ExportIcon:x.ExportIcon},noInline:!0,language:"jsx",mdxType:"LivePreview"},R),(0,r.yg)("p",null,`It can also be placed in a card component that shows the specific data that will
be exported, such as a billing invoice.`),(0,r.yg)(W,{scope:{Heading:d.D,Card:i.Z,Paragraph:c.f,Button:p.$n,ExportIcon:x.ExportIcon},noInline:!0,language:"jsx",mdxType:"LivePreview"},A),(0,r.yg)("h2",null,"Starter kits"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.figma.com/file/S4z0Kqjb9AYosnkRQldLte/Paste-Patterns?node-id=304%3A19078"},"Figma")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://codesandbox.io/dashboard/all/Patterns/data-export?workspace=219744aa-c106-40cc-b308-dffc5b5c5b01"},"CodeSandbox"))),(0,r.yg)("h2",null,"Related Discussions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/discussions/990"},'Content question - "Download" or "Export"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/twilio-labs/paste/discussions/848"},"Button for downloading a file"))))))}V.isMDXComponent=!0},79559:(e,o,t)=>{"use strict";t.d(o,{BJ:()=>c,_v:()=>u,g$:()=>s,pX:()=>p});var r=t(76127),a=t(8909),n=t(86146),i=t(86860),l=t(629),d=t(55729),c=d.forwardRef(({children:e,disabled:o,applyHoverStyles:t=!1,element:r="BASE_RADIO_CHECKBOX_CONTROL",...a},n)=>d.createElement(i.K,{as:"span",ref:n,display:"flex",element:r,backgroundColor:"colorBackgroundBody",borderColor:t?"colorBorderPrimaryStronger":"colorBorder",borderStyle:"solid",borderWidth:"borderWidth10",height:"sizeSquare50",marginRight:"space20",marginY:"space10",width:"sizeSquare50",color:"colorTextWeakest",_hoverSibling:{borderColor:"colorBorderPrimaryStronger",color:"colorTextWeakest"},_focusSibling:{borderColor:"colorBorder",boxShadow:"shadowFocus",color:"colorTextInverse"},_activeSibling:o?void 0:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger",color:"colorTextWeakest"},_checkedSibling:{borderColor:"colorBorderPrimary",backgroundColor:"colorBackgroundPrimary",color:"colorTextInverse"},_disabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground"},_invalidSibling:{borderColor:"colorBorderError"},_invalidAndHoverSibling:{borderColor:"colorBorderErrorStronger"},_invalidAndDisabledSibling:{borderColor:"colorBorderWeak"},_checkedAndHoverSibling:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger",color:"colorTextWeakest"},_checkedAndFocusSibling:{borderColor:"colorBorderPrimary",backgroundColor:"colorBackgroundPrimary",color:"colorTextInverse"},_checkedAndActiveSibling:o?void 0:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger"},_checkedAndDisabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground",color:"colorTextWeaker"},_checkedAndInvalidSibling:{borderColor:"colorBorderError",backgroundColor:"colorBackgroundError",color:"colorTextInverse"},_checkedAndInvalidAndHoverSibling:{borderColor:"colorBorderErrorStronger",backgroundColor:"colorBackgroundErrorStronger"},_checkedAndInvalidAndDisabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground",color:"colorTextWeaker"},...a},e));c.displayName="BaseRadioCheckboxControl";var s=d.forwardRef(({children:e,...o},t)=>d.createElement(n.J,{...o,marginBottom:"space0",ref:t},d.createElement(r.az,{as:"span",display:"flex"},e)));s.displayName="BaseRadioCheckboxLabel";var p=d.forwardRef(({children:e,element:o="BASE_RADIO_CHECKBOX_LABEL_TEXT",...t},r)=>d.createElement(l.EY,{as:"span",color:"currentColor",marginLeft:"space20",element:o,ref:r,...t},e));p.displayName="BaseRadioCheckboxLabelText";var u=d.forwardRef(({children:e,helpTextId:o,element:t="BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER"},n)=>d.createElement(r.az,{as:"span",display:"block",element:t,marginLeft:"space70",ref:n},d.createElement(a.$,{id:o,marginTop:"space0"},e)));u.displayName="BaseRadioCheckboxHelpText"},81096:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/patterns/data-export",function(){return t(64280)}])},81423:(e,o,t)=>{"use strict";t.r(o),t.d(o,{MinusIcon:()=>i});var r=t(36669),a=t(55729),n=t(96316);let i=a.forwardRef(({as:e,display:o,element:t="ICON",size:i,color:l,title:d,decorative:c},s)=>{let p=`MinusIcon-${(0,r.GV)()}`;if(!c&&null==d)throw Error("[MinusIcon]: Missing a title for non-decorative icon.");return a.createElement(n.IconWrapper,{as:e,display:o,element:t,size:i,color:l,ref:s},a.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":p},d?a.createElement("title",{id:p},d):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.167 9.5c.46 0 .833.448.833 1 0 .513-.322.936-.736.993l-.097.007H5.833c-.46 0-.833-.448-.833-1 0-.513.322-.936.736-.993l.097-.007h8.334z"})))});i.displayName="MinusIcon"},86860:(e,o,t)=>{"use strict";t.d(o,{K:()=>l});var r=t(76127),a=t(27717),n=t(55729),i=(0,a.I4)(r.az)(({_activeSibling:e,_boxChild:o,_checkedAndActiveSibling:t,_checkedAndDisabledSibling:r,_checkedAndFocusSibling:n,_checkedAndHoverSibling:i,_checkedAndInvalidSibling:l,_checkedAndInvalidAndDisabledSibling:d,_checkedAndInvalidAndHoverSibling:c,_checkedSibling:s,_checkedSiblingAndBoxChild:p,_disabledSibling:u,_focusSibling:m,_hoverSibling:g,_invalidSibling:h,_invalidAndHoverSibling:y,_invalidAndDisabledSibling:x,type:b="checkbox"})=>{let f=`input[type=${b}]:active + label &`,E=`input[type=${b}]:checked + label &, input[type=${b}][aria-checked=mixed] + label &`,T=`input[type=${b}]:checked:active + label &, input[type=${b}][aria-checked=mixed]:active + label &`,v=`input[type=${b}]:checked + label & > *, input[type=${b}][aria-checked=mixed] + label & > *`,C=`input[type=${b}]:checked:disabled + label &, input[type=${b}][aria-checked=mixed]:disabled + label &`,w=`input[type=${b}]:checked:focus + label &, input[type=${b}][aria-checked=mixed]:focus + label &`,k=`input[type=${b}]:checked:hover:not(:disabled) + label &, input[type=${b}][aria-checked=mixed]:hover:not(:disabled) + label &`,I=`input[type=${b}][aria-invalid=true]:checked + label &`,B=`input[type=${b}][aria-invalid=true]:checked:disabled + label &`,S=`input[type=${b}][aria-invalid=true]:checked:hover:not(:disabled) + label &`,R=`input[type=${b}] + label & > *`,A=`input[type=${b}]:disabled + label &`,N=`input[type=${b}]:focus + label &`,D=`input[type=${b}]:hover:not(:disabled):not(:checked) + label &`,z=`input[type=${b}][aria-invalid=true] + label &`,M=`input[type=${b}][aria-invalid=true]:hover:not(:disabled) + label &`,_=`input[type=${b}][aria-invalid=true]:disabled + label &`;return(0,a.AH)({[f]:e,[E]:s,[T]:t,[v]:p,[C]:r,[w]:n,[k]:i,[I]:l,[B]:d,[S]:c,[R]:o,[A]:u,[N]:m,[D]:g,[z]:h,[M]:y,[_]:x})}),l=n.forwardRef(({"aria-hidden":e="true",alignItems:o="center",display:t="inline-flex",element:r="SIBLING_BOX",flexShrink:a=0,justifyContent:l="center",transition:d="all 120ms",...c},s)=>n.createElement(i,{alignItems:o,"aria-hidden":e,display:t,element:r,flexShrink:a,justifyContent:l,ref:s,transition:d,...c}));l.displayName="SiblingBox"},88017:(e,o,t)=>{"use strict";t.d(o,{EZ:()=>f,Vn:()=>y,aF:()=>x,cw:()=>E,eL:()=>h,jl:()=>T,ox:()=>v,rQ:()=>b});var r=t(58001),a=t(76127),n=t(86110),i=t(27717),l=t(25630),d=t(55729),c=t(95036),s=t(71853),p=t(40123),u=t(69277),m=t(60798),g=d.createContext(null),h=(0,r.CS)((0,i.I4)(n.j)((0,i.AH)({position:"fixed",top:0,right:0,bottom:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",backgroundColor:"colorBackgroundOverlay",zIndex:"zIndex80"}),l.$,a.mP)),y=(0,r.CS)((0,i.I4)(n.S)(({size:e})=>(0,i.AH)({width:"100%",maxWidth:"wide"===e?"size80":"size60",maxHeight:"90%",minHeight:"170px",backgroundColor:"colorBackgroundBody",borderRadius:"borderRadius30",boxShadow:"shadowElevationTop20",display:"flex",flexDirection:"column"}))),x=d.forwardRef(({children:e,element:o="MODAL",isOpen:t,onDismiss:n,allowPinchZoom:i=!0,initialFocusRef:l,ariaLabelledby:c,size:s,...p},u)=>{let m=(0,r.pn)(t,{from:{opacity:0,transform:"scale(0.675)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.675)"},config:{mass:.5,tension:370,friction:26}});return d.createElement(g.Provider,{value:{onDismiss:n}},m((t,r)=>r&&d.createElement(h,{onDismiss:n,allowPinchZoom:i,initialFocusRef:l,style:{opacity:t.opacity},"data-paste-element":`${o}_OVERLAY`,variant:s},d.createElement(a.az,{as:y,"aria-labelledby":c,...(0,a.x8)(p),element:o,ref:u,style:t,size:s,variant:s},e))))});x.displayName="Modal";var b=d.forwardRef(({children:e,element:o="MODAL_HEADER",i18nDismissLabel:t="Close modal",...r},n)=>{let{onDismiss:i}=(()=>{let e=d.useContext(g);if(!e)throw Error("useModalContext must be used with ModalContextProvider");return e})();return d.createElement(a.az,{...(0,a.x8)(r),as:"div",element:o,ref:n,padding:"space90",flexShrink:0},d.createElement(s.s,{hAlignContent:"between"},d.createElement(s.s,{vAlignContent:"center",grow:1,marginRight:"space70"},e),d.createElement(c.$n,{element:`${o}_CLOSE_BUTTON`,variant:"secondary_icon",size:"reset",onClick:()=>i()},d.createElement(p.CloseIcon,{element:`${o}_CLOSE_ICON`,decorative:!0,size:"sizeIcon60"}),d.createElement(u.E,null,t))))});b.displayName="ModalHeader";var f=d.forwardRef(({children:e,as:o="h2",element:t="MODAL_HEADING",...r},a)=>d.createElement(m.D,{...r,as:o,element:t,marginBottom:"space0",variant:"heading30",ref:a},e));f.displayName="ModalHeading";var E=d.forwardRef(({children:e,element:o="MODAL_BODY",...t},r)=>d.createElement(a.az,{...(0,a.x8)(t),overflowY:"auto",paddingX:"space90",paddingY:"space10",as:"div",element:o,ref:r},e));E.displayName="ModalBody";var T=d.forwardRef(({children:e,element:o="MODAL_FOOTER",...t},r)=>d.createElement(a.az,{...(0,a.x8)(t),flexShrink:0,display:"flex",padding:"space90",as:"div",element:o,ref:r},e));T.displayName="ModalFooter";var v=d.forwardRef(({children:e,element:o="MODAL_FOOTER_ACTIONS",justify:t,...r},n)=>{let i=d.Children.count(e);return d.createElement(a.az,{...(0,a.x8)(r),display:"flex",justifyContent:"start"===t?"flex-start":"flex-end",flexShrink:"start"===t?null:0,flexWrap:"wrap",flexGrow:1,element:o,alignItems:"center",ref:n},d.Children.map(e,(e,t)=>d.createElement(a.az,{marginRight:i!==t+1?"space50":null,element:`${o}_ITEM`},e)))});v.displayName="ModalFooterActions"},96483:(e,o,t)=>{"use strict";t.d(o,{_k:()=>S,l$:()=>B,y8:()=>w});var r=t(95036),a=t(40123),n=t(87305),i=t(35380),l=t(2136),d=t(73123),c=t(7658),s=t(69277),p=t(55729),u=t(76127),m=t(84498),g=t(51582),h=t(25630),y=t(58001),x=t(36669),b=p.forwardRef(({element:e="TOAST",variant:o,...t},r)=>p.createElement(u.az,{...(0,u.x8)(t),ref:r,color:"colorTextError",width:["100%","size40","size40"],backgroundColor:"colorBackgroundErrorWeakest",borderColor:"colorBorderErrorWeak",borderRadius:"borderRadius30",borderStyle:"solid",borderWidth:"borderWidth10",boxShadow:"shadowElevation20",element:e,padding:"space60",variant:o},t.children));b.displayName="ErrorToast";var f=p.forwardRef(({element:e="TOAST",variant:o,...t},r)=>p.createElement(u.az,{...(0,u.x8)(t),ref:r,color:"colorTextNeutral",width:["100%","size40","size40"],backgroundColor:"colorBackgroundNeutralWeakest",borderColor:"colorBorderNeutralWeak",borderRadius:"borderRadius30",borderStyle:"solid",borderWidth:"borderWidth10",boxShadow:"shadowElevation20",element:e,padding:"space60",variant:o},t.children));f.displayName="NeutralToast";var E=p.forwardRef(({element:e="TOAST",variant:o,...t},r)=>p.createElement(u.az,{...(0,u.x8)(t),ref:r,color:"colorTextSuccess",width:["100%","size40","size40"],backgroundColor:"colorBackgroundSuccessWeakest",borderColor:"colorBorderSuccessWeak",borderRadius:"borderRadius30",borderStyle:"solid",borderWidth:"borderWidth10",boxShadow:"shadowElevation20",element:e,padding:"space60",variant:o},t.children));E.displayName="SuccessToast";var T=p.forwardRef(({element:e="TOAST",variant:o,...t},r)=>p.createElement(u.az,{...(0,u.x8)(t),ref:r,color:"colorTextWarningStrong",width:["100%","size40","size40"],backgroundColor:"colorBackgroundWarningWeakest",borderColor:"colorBorderWarningWeak",borderRadius:"borderRadius30",borderStyle:"solid",borderWidth:"borderWidth10",boxShadow:"shadowElevation20",element:e,padding:"space60",variant:o},t.children));T.displayName="WarningToast";var v={ERROR:"error",NEUTRAL:"neutral",SUCCESS:"success",WARNING:"warning"},C={error:b,neutral:f,success:E,warning:T},w=p.forwardRef(({children:e,onDismiss:o,variant:t="neutral",element:u="TOAST",setFocus:m,i18nDismissLabel:g="Dismiss toast",i18nErrorLabel:h="(error)",i18nNeutralLabel:y="(information)",i18nSuccessLabel:x="(success)",i18nWarningLabel:b="(warning)",...f},E)=>{let T=C[t],w=p.useRef(null);return p.useEffect(()=>{m&&w.current&&w.current.focus({preventScroll:!0})},[m]),p.createElement(T,{role:"status",variant:t,element:u,ref:E,...f},p.createElement(c.Ss,{as:"div"},p.createElement(c.pV,{as:"div",spacing:"space60"},((e,o,t)=>{switch(e){case v.ERROR:return p.createElement(n.ErrorIcon,{color:"colorTextIconError",decorative:!1,title:o,element:`${t}_ICON`,size:"sizeIcon20"});case v.SUCCESS:return p.createElement(l.SuccessIcon,{color:"colorTextIconSuccess",decorative:!1,title:o,element:`${t}_ICON`,size:"sizeIcon20"});case v.WARNING:return p.createElement(d.WarningIcon,{color:"colorTextIconWarning",decorative:!1,title:o,element:`${t}_ICON`,size:"sizeIcon20"});case v.NEUTRAL:default:return p.createElement(i.NeutralIcon,{color:"colorTextIconNeutral",decorative:!1,title:o,element:`${t}_ICON`,size:"sizeIcon20"})}})(t,{error:h,neutral:y,success:x,warning:b}[t],u)),p.createElement(c.To,{as:"div"},e),o&&"function"==typeof o&&p.createElement(c.pV,{align:"end",spacing:"space40"},p.createElement(r.$n,{onClick:o,variant:"secondary_icon",ref:w,size:"reset",element:`${u}_CLOSE_BUTTON`},p.createElement(a.CloseIcon,{decorative:!0,size:"sizeIcon20",element:`${u}_CLOSE_ICON`}),p.createElement(s.E,null,g)))))});w.displayName="Toast";var k=p.forwardRef(({children:e,left:o,...t},r)=>p.createElement(g.ZL,null,p.createElement(h.pd,null,p.createElement(u.az,{...(0,u.x8)(t),position:"fixed",right:"space40",top:"space90",left:o,zIndex:"zIndex90",ref:r},e))));k.displayName="ToastPortal",p.forwardRef(({children:e,...o},t)=>p.createElement(k,{...o},p.createElement(m.B,{orientation:"vertical",spacing:"space40",ref:t},e))).displayName="ToastContainer";var I=(0,y.CS)(u.az),B=({toasts:e,pop:o,...t})=>{let r=(0,y.Ib)(),[a]=p.useState(()=>new WeakMap),[n,i]=p.useState({trigger:null}),l=(0,h.DP)(),d=(0,y.pn)(e,{from:{marginBottom:"0rem",opacity:0,transform:"translateX(100%) scale(1)",height:r?"auto":0},enter:r?{marginBottom:l.space.space40,opacity:1,transform:"translateX(0px) scale(1)"}:e=>async o=>{await o({marginBottom:l.space.space40,opacity:1,transform:"translateX(0px) scale(1)",height:a.get(e).offsetHeight})},leave:{marginBottom:"0rem",opacity:0,transform:"translateX(0px) scale(0.8)",height:r?"auto":0},config:{mass:1,tension:150,friction:20}}),c=p.useCallback(()=>{i({trigger:null})},[n]);return p.useEffect(()=>{null!=n.trigger&&0===e.length&&(n.trigger.focus(),c())},[e]),p.createElement(k,{...t},d((e,t,r,l)=>p.createElement(I,{as:"div",key:r.key,style:e},p.createElement(w,{key:t.id,...t,onDismiss:()=>{null!=t.onDismiss&&t.onDismiss(),o(t.id)},ref:e=>{null!=e&&a.set(t,e)},setFocus:0===l,onFocus:e=>{e.relatedTarget&&!n.trigger&&i({trigger:e.relatedTarget})}},t.message))))};B.displayName="Toaster";var S=()=>{let e=p.useRef(null),[o,t]=p.useState([]);p.useEffect(()=>(e.current=!0,()=>{e.current=!1,o.forEach(e=>{e.timeOutId&&window.clearTimeout(e.timeOutId)})}),[]);let r=o=>{e.current&&t(e=>e.filter(e=>(e.id===o&&(e.timeOutId&&window.clearTimeout(e.timeOutId),e.onDismiss&&e.onDismiss()),e.id!==o)))};return{toasts:o,push:o=>{if(!e.current)return;let a=(0,x.Ld)(o),n;null!=o.dismissAfter&&Number.isInteger(o.dismissAfter)&&(n=window.setTimeout(r,o.dismissAfter,o.id||a)),t(e=>{let t=e.map(e=>(e.setFocus=!1,e));return[{id:a,timeOutId:n,setFocus:!0,...o},...t]})},pop:r}}},98536:(e,o,t)=>{"use strict";t.r(o),t.d(o,{CheckboxCheckIcon:()=>i});var r=t(36669),a=t(55729),n=t(96316);let i=a.forwardRef(({as:e,display:o,element:t="ICON",size:i,color:l,title:d,decorative:c},s)=>{let p=`CheckboxCheckIcon-${(0,r.GV)()}`;if(!c&&null==d)throw Error("[CheckboxCheckIcon]: Missing a title for non-decorative icon.");return a.createElement(n.IconWrapper,{as:e,display:o,element:t,size:i,color:l,ref:s},a.createElement("svg",{role:"img","aria-hidden":c,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":p},d?a.createElement("title",{id:p},d):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.59 5.916a1.386 1.386 0 00-1.98 0l-5.04 5.138L6.39 8.83a1.38 1.38 0 00-1.98 0 1.448 1.448 0 000 2.018l3.171 3.233a1.382 1.382 0 001.98 0l6.03-6.148a1.448 1.448 0 000-2.018z"})))});i.displayName="CheckboxCheckIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,6110,636,6593,8792],()=>e(e.s=81096)),_N_E=e.O()}]);