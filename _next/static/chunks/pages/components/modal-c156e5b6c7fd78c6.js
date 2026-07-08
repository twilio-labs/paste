(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2326],{3738:(e,t,o)=>{"use strict";o.d(t,{V:()=>s,x:()=>d});var a=o(76127),n=o(55729),r=e=>"margin"===e?"auto":"space0",l=(e,t,o)=>{let a=r(t),n=(({prefix:e,responsive:t,defaultValue:o})=>{let a=()=>t?[,,,].fill(o):o;return{[`${e}Top`]:a(),[`${e}Bottom`]:a(),[`${e}Right`]:a(),[`${e}Left`]:a()}})({prefix:t,responsive:!1,defaultValue:a});return void 0===o||(e?(n[`${t}Top`]=o,n[`${t}Bottom`]=o):(n[`${t}Right`]=o,n[`${t}Left`]=o)),n},i=(e,t,o)=>{let a=r(t),n={[`${t}Top`]:[a,a,a],[`${t}Bottom`]:[a,a,a],[`${t}Right`]:[a,a,a],[`${t}Left`]:[a,a,a]},l=Array.isArray(o)&&0===o.length;return void 0===o||l||e.forEach((e,a)=>{let r=Array.isArray(o)?o[a]:o;e?(n[`${t}Top`][a]=r,n[`${t}Bottom`][a]=r):(n[`${t}Right`][a]=r,n[`${t}Left`][a]=r)}),n},d=n.forwardRef(({as:e,children:t,element:o="GRID",equalColumnHeights:r,gutter:d,marginTop:s,marginBottom:c,vertical:u=!1,...p},h)=>{let m=n.useMemo(()=>n.Children.map(t,e=>n.isValidElement(e)?n.cloneElement(e,{count:n.Children.count(t),gutter:d,vertical:u,stretchColumnContent:r}):e),[t,u,r,d]),g=n.useMemo(()=>((e,t=!1)=>{let o=(e=>Array.isArray(e)?e.map(e=>"space0"!==e?e.replace("space","spaceNegative"):"space0"===e?"space0":null):"space0"===e?"space0":e&&"string"==typeof e?e.replace("space","spaceNegative"):"auto")(e);return Array.isArray(t)?i(t,"margin",o):l(t,"margin",o)})(d,u),[d,u]),y=n.useMemo(()=>(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e&&!0===e?"column":"row"):e?"column":"row")(u),[u]);return n.createElement(a.az,{...(0,a.x8)(p),ref:h,as:e,alignItems:r?"stretch":null,element:o,flexDirection:y,flexWrap:"wrap",display:"flex",...g,marginTop:s,marginBottom:c,minWidth:"size0",rowGap:p.rowGap,columnGap:p.columnGap},m)});d.displayName="Grid";var s=n.forwardRef(({as:e,children:t,count:o,element:r="COLUMN",gutter:d,offset:s,span:c,stretchColumnContent:u,vertical:p,...h},m)=>{let g=n.useMemo(()=>(({count:e,span:t,gutter:o,offset:a,vertical:n,stretchColumnContent:r})=>{let d={width:(({count:e,span:t})=>Array.isArray(t)&&e?t.map(e=>`${e/12*100}%`):"number"==typeof t&&e&&e<=12?`${t/12*100}%`:void 0!==e?`${1/e*100}%`:"8.333333333333332%")({count:e,span:t}),...(({vertical:e,gutter:t})=>Array.isArray(e)?i(e,"padding",t):l(e,"padding",t))({gutter:o,vertical:n})};return a&&(d.marginLeft=(e=>Array.isArray(e)?e.map(e=>`${e/12*100}%`):`${e/12*100}%`)(a)),n&&!a&&(d.minWidth=(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e?!0===e?"100%":"0":null):e?"100%":"0")(n),d.marginLeft="space0"),r&&(d.alignContent="stretch",d.display="flex"),d})({count:o,gutter:d,offset:s,span:c,stretchColumnContent:u,vertical:p}),[o,d,s,c,u,p]);return n.createElement(a.az,{...(0,a.x8)(h),...g,as:e,element:r,ref:m},t)});s.displayName="Column"},16704:(e,t,o)=>{"use strict";o.d(t,{$:()=>h,p:()=>m});var a=o(76127),n=o(34280),r=o(19950),l=o(55729),i=o(95036),d=o(92980),s=o(38441),c=l.forwardRef(({i18nStepDownLabel:e="step value down",element:t,variant:o,...a},n)=>l.createElement(i.$n,{...a,ref:n,element:`${t}_DECREMENT_BUTTON`,variant:"reset",size:"reset",type:"button",borderRadius:"borderRadius20",backgroundColor:"inverse"===o?"colorBackgroundInverseElevation":"colorBackgroundBodyElevation",marginRight:"space30",_focus:{boxShadow:"inverse"===o?"shadowBorderInverseStrong":"shadowBorderPrimary"}},l.createElement(d.ChevronDownIcon,{decorative:!1,title:e,size:"sizeIcon05",element:`${t}_DECREMENT_ICON`})));c.displayName="Decrement";var u=l.forwardRef(({i18nStepUpLabel:e="step value up",element:t,variant:o,...a},n)=>l.createElement(i.$n,{...a,ref:n,element:`${t}_INCREMENT_BUTTON`,variant:"reset",size:"reset",type:"button",borderRadius:"borderRadius20",backgroundColor:"inverse"===o?"colorBackgroundInverseElevation":"colorBackgroundBodyElevation",marginRight:"space30",_focus:{boxShadow:"inverse"===o?"shadowBorderInverseStrong":"shadowBorderPrimary"}},l.createElement(s.ChevronUpIcon,{decorative:!1,title:e,size:"sizeIcon05",element:`${t}_INCREMENT_ICON`})));u.displayName="Increment";var p=["className","style","size","height","width"],h=l.forwardRef(({element:e,...t},o)=>l.createElement(a.az,{appearance:"none",as:"input",backgroundColor:"transparent",border:"none",borderRadius:"borderRadius20",boxShadow:"none",color:"inherit",cursor:"date"!==t.type&&"time"!==t.type||t.readOnly||t.disabled?"auto":"text",display:"block",element:e,fontFamily:"inherit",fontSize:"fontSize30",fontWeight:"fontWeightMedium",lineHeight:"lineHeight20",margin:"space0",outline:"none",paddingBottom:"space30",paddingLeft:"space40",paddingRight:"space40",paddingTop:"space30",resize:"none",width:"100%",variant:t.variant,ref:o,_placeholder:{color:"inverse"===t.variant?"colorTextInverseWeaker":"colorTextWeak",fontStyle:"italic"},_focus_placeholder:{color:"inverse"===t.variant?"colorTextInverseWeaker":"colorTextWeak"},_disabled:{color:"inverse"===t.variant?"colorTextInverseWeakest":"colorTextWeaker",cursor:"not-allowed","-webkit-text-fill-color":"inverse"===t.variant?"colorTextInverseWeakest":"colorTextWeaker","-webkit-opacity":"1"},__webkit_datetime_edit:{display:"flex"},__webkit_calendar_picker_indicator_hover:{cursor:t.readOnly||t.disabled?"default":"pointer"},__webkit_inner_spin_button:{display:"none",margin:"space0"},__webkit_outer_spin_button:{display:"none",margin:"space0"},"-moz-appearance":"textfield",...t}));h.displayName="InputElement";var m=l.forwardRef(({disabled:e,element:t="INPUT",hasError:o,id:i,insertAfter:d,insertBefore:s,max:m,min:g,name:y,placeholder:f,readOnly:v,required:w,step:b,type:M,value:x,variant:I,i18nStepUpLabel:E,i18nStepDownLabel:B,...C},N)=>{let T=l.useRef(void 0),k=(0,r.SV)(T,N),[D,O]=l.useState(!0),[R,A]=l.useState(!0),[F,_]=l.useState(x??C.defaultValue??"0");return l.useEffect(()=>{if("number"!==M)return;if(e){A(!1),O(!1);return}let t=Number(F),o=b&&!isNaN(Number(b))?Number(b):1,a=Number(m);if(isNaN(a))return;let n=Number(g);isNaN(n)||((a-n)%o!=0&&console.error("[Paste Input]: when using min/max, and step values with a Number Input, please make sure that the min and max are multiples of the step value."),t<a&&t+o<=a?O(!0):O(!1),t>n&&t-o>=n?A(!0):A(!1))},[m,g,b,e,M,F]),l.createElement(n.cl,{disabled:e,element:t,hasError:o,insertAfter:d,insertBefore:s,readOnly:v,type:M,variant:I},l.createElement(h,{"aria-invalid":o,"aria-readonly":v,...(e=>Object.keys(e).reduce((t,o)=>(p.includes(o)||(t[o]=e[o]),t),{}))(C),...{type:M},disabled:e,element:`${t}_ELEMENT`,id:i,name:y,max:m,min:g,placeholder:f,readOnly:v,ref:k,required:w,step:b,value:x,variant:I,onChange:e=>{null!=C.onChange&&"function"==typeof C.onChange&&C.onChange(e),_(e.target.value)}}),"number"===M?l.createElement(a.az,{display:"flex",flexDirection:"column",rowGap:"space10",justifyContent:"center",element:`${t}_STEP_WRAPPER`},D?l.createElement(u,{element:t,onClick:()=>{T.current?.stepUp();let e=new Event("change",{bubbles:!0});T.current?.dispatchEvent(e),T.current?.focus()},i18nStepUpLabel:E,variant:I}):l.createElement(a.az,{height:"12px",width:"12px",element:`${t}_INCREMENT_PLACEHOLDER`}),R?l.createElement(c,{element:t,onClick:()=>{T.current?.stepDown();let e=new Event("change",{bubbles:!0});T.current?.dispatchEvent(e),T.current?.focus()},i18nStepDownLabel:B,variant:I}):l.createElement(a.az,{height:"12px",width:"12px",element:`${t}_DECREMENT_PLACEHOLDER`})):l.createElement(l.Fragment,null))});m.displayName="Input"},34280:(e,t,o)=>{"use strict";o.d(t,{JO:()=>f,YN:()=>g,cl:()=>p});var a=o(55729),n=o(76127),r=a.forwardRef(({disabled:e,element:t,hasError:o,readOnly:r,children:l,type:i,variant:d},s)=>{let c="colorBackgroundWeakest",u="shadowBorder",p="shadowBorderPrimary",h="shadowBorderPrimaryStronger";return e&&"hidden"!==i?(u="shadowBorderWeak",p="shadowBorderWeak",c="colorBackground",h="shadowBorderWeak"):r&&"hidden"!==i?(p="shadowBorder",c="colorBackground"):o&&"hidden"!==i?(u="shadowBorderError",p="shadowBorderErrorStronger"):"hidden"===i&&(u=null,p=null,c=null,h=null),a.createElement(n.az,{element:t,ref:s,display:"flex",width:"100%",backgroundColor:c,boxShadow:u,borderRadius:"borderRadius30",transition:"box-shadow 100ms ease-in",cursor:e?"not-allowed":"text",variant:d,_hover:{boxShadow:p},_focusWithin:{boxShadow:e?u:"shadowFocusShadowBorder"},_active:{boxShadow:h}},l)});r.displayName="DefaultFauxInput";var l=a.forwardRef(({disabled:e,element:t,hasError:o,readOnly:r,children:l,type:i,variant:d},s)=>{let c="colorBackgroundInverse",u="shadowBorderInverse",p="shadowBorderInverseStrongest";return e&&"hidden"!==i?(c="colorBackgroundInverse",u="shadowBorderInverseWeaker",p="shadowBorderInverseWeaker"):r&&"hidden"!==i?(c="colorBackgroundInverseStrong",p="shadowBorderInverse"):o&&"hidden"!==i?u="shadowBorderErrorWeak":"hidden"===i&&(c=null,u=null,p=null),a.createElement(n.az,{element:t,ref:s,display:"flex",width:"100%",backgroundColor:c,boxShadow:u,borderRadius:"borderRadius30",color:"colorTextInverse",transition:"box-shadow 100ms ease-in",cursor:e?"not-allowed":"text",variant:d,_hover:{boxShadow:p},_focusWithin:{backgroundColor:"colorBackgroundInverse",boxShadow:e?u:"shadowFocusInverse"},_active:{boxShadow:p}},l)});l.displayName="InverseFauxInput";var i={default:r,inverse:l},d=a.forwardRef(({children:e,disabled:t,element:o,hasError:n,readOnly:r,type:l,variant:d="default"},s)=>{let c=i[d];return a.createElement(c,{disabled:t,element:o,hasError:n,readOnly:r,type:l,variant:d,ref:s},e)});d.displayName="FieldWrapper";var s=a.createContext(null),c=a.forwardRef(({children:e,disabled:t,element:o="PREFIX",variant:r},l)=>{let i="colorBackgroundBodyElevation";return t&&"inverse"===r?i="none":"inverse"===r?i="colorBackgroundInverseElevation":t&&(i="none"),null==e?null:a.createElement(n.az,{alignItems:"flex-start",backgroundColor:i,borderBottomLeftRadius:"borderRadius30",borderTopLeftRadius:"borderRadius30",display:"flex",element:`${o}_PREFIX`,lineHeight:"lineHeight20",padding:"space30",variant:r,ref:l},e)});c.displayName="Prefix";var u=a.forwardRef(({children:e,disabled:t,element:o="SUFFIX",variant:r},l)=>{let i="colorBackgroundBodyElevation";return t&&"inverse"===r?i="none":"inverse"===r?i="colorBackgroundInverseElevation":t&&(i="none"),null==e?null:a.createElement(n.az,{alignItems:"flex-start",backgroundColor:i,borderBottomRightRadius:"borderRadius30",borderTopRightRadius:"borderRadius30",display:"flex",element:`${o}_SUFFIX`,lineHeight:"lineHeight20",padding:"space30",variant:r,ref:l},e)});u.displayName="Suffix";var p=a.forwardRef(({children:e,disabled:t=!1,readOnly:o=!1,element:n="INPUT_BOX",hasError:r,insertAfter:l,insertBefore:i,type:p,variant:h="default",...m},g)=>a.createElement(s.Provider,{value:{disabled:t,readOnly:o,variant:h}},a.createElement(d,{disabled:t,element:n,hasError:r,readOnly:o,type:p,variant:h,ref:g,...m},i&&a.createElement(c,{disabled:t,element:n,variant:h},i),e,l&&a.createElement(u,{disabled:t,element:n,variant:h},l))));p.displayName="InputBox";var h=(e,t)=>e?"disabled":t?"readOnly":"default",m={default:{default:"colorTextIcon",disabled:"colorTextWeaker",readOnly:"colorTextWeaker"},inverse:{default:"colorTextIconInverse",disabled:"colorTextInverseWeakest",readOnly:"colorTextInverseWeakest"}},g=(e="default",t=!1,o=!1)=>m[e][h(t,o)],y={default:{default:"colorBackgroundBodyElevation",disabled:"colorBackground",readOnly:"colorBackgroundBodyElevation"},inverse:{default:"colorBackgroundInverseElevation",disabled:"colorBackgroundInverse",readOnly:"colorBackgroundInverseElevation"}},f=a.forwardRef(({children:e,element:t="CHEVRON_WRAPPER"},o)=>{let{disabled:r,readOnly:l,variant:i}=(()=>{let e=a.useContext(s);if(!e)throw Error("useInputBoxContext must be used within a <InputBox> component.");return e})();return a.createElement(n.az,{backgroundColor:y[i][h(r,l)],borderRadius:"borderRadius20",cursor:"pointer",alignItems:"center",display:"inline-flex",position:"absolute",pointerEvents:"none",right:"space30",top:"50%",transform:"translateY(-50%)",zIndex:"zIndex10",element:t,ref:o},e)});f.displayName="InputChevronWrapper"},38441:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ChevronUpIcon:()=>l});var a=o(36669),n=o(55729),r=o(96316);let l=n.forwardRef(({as:e,display:t,element:o="ICON",size:l,color:i,title:d,decorative:s},c)=>{let u=`ChevronUpIcon-${(0,a.GV)()}`;if(!s&&null==d)throw Error("[ChevronUpIcon]: Missing a title for non-decorative icon.");return n.createElement(r.IconWrapper,{as:e,display:t,element:o,size:l,color:i,ref:c},n.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":u},d?n.createElement("title",{id:u},d):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.293 7.293a1 1 0 011.32-.083l.094.083 3 3a1 1 0 01-1.32 1.497l-.094-.083L10 9.415l-2.293 2.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 3-3z"})))});l.displayName="ChevronUpIcon"},40615:(e,t,o)=>{"use strict";o.d(t,{A:()=>g});var a=o(72387),n=o(76127),r=o(95669),l=o.n(r),i=o(81278);o(55729);var d=o(10511),s=o(43084),c=o(10732),u=o(62887),p=o(63437),h=o(38992);let m={h1:()=>null},g=({children:e,meta:t,navigationData:o,data:r,mdxHeadings:g,pageHeaderData:{categoryRoute:y,githubUrl:f,storybookUrl:v}})=>{let w=t.title?`${t.title} - ${h.DZ.TITLE}`:h.DZ.TITLE,b=t.description||h.DZ.DESCRIPTION,M=(0,i.useRouter)();return(0,a.FD)(p.T,{navigationData:o,children:[(0,a.FD)(l(),{children:[(0,a.Y)("title",{children:w}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${M.pathname}`}),(0,a.Y)("meta",{name:"description",content:b},"description")]}),(0,a.FD)(d.s,{children:[(0,a.Y)(u.c,{categoryRoute:y,githubUrl:f,storybookUrl:v,data:r}),(0,a.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,a.Y)(c.i,{data:g}),(0,a.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,a.Y)(s.Q,{componentOverrides:t.package?m:{},children:e})})]})]})]})}},53915:(e,t,o)=>{"use strict";o.r(t),o.d(t,{__N_SSG:()=>M,default:()=>T,getStaticProps:()=>I,mdxHeadings:()=>E,meta:()=>x}),o(55729);var a=o(11885),n=o(36669),r=o(76127),l=o(629),i=o(50010),d=o(95036),s=o(3738),c=o(88017),u=o(86146),p=o(16704),h=o(81724),m=o(89564),g=o(54652);let y=`
const ModalTrigger = () => {
  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Choose an author
          </ModalHeading>
        </ModalHeader>
        <ModalBody>

          <Paragraph>
            “If there’s a book that you want to read, but it hasn’t been written yet, then you must write it.”
             — Toni Morrison
          </Paragraph>

          <Label htmlFor="author">Choose an author</Label>
          <Select id="author">
            <Option value="baldwin">James Baldwin</Option>
            <Option value="brown">adrienne maree brown</Option>
            <Option value="butler">Octavia Butler</Option>
            <Option value="coates">Ta-Nehisi Coates</Option>
            <Option value="lorde">Audre Lorde</Option>
            <Option value="nnedi">Nnedi Okorafor</Option>
          </Select>

        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Done</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

render(
  <ModalTrigger />
)
`.trim(),f=`
const ModalTrigger = () => {
  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();

  // Content properties
  const [documentName, setDocumentName] = React.useState('');
  const [address1, setAddress1Name] = React.useState('');
  const [address2, setAddress2Name] = React.useState('');
  const documentNameInputID = useUID();
  const address1InputID = useUID();
  const address2InputID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Add supporting document
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="wide">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Add supporting document
          </ModalHeading>
        </ModalHeader>
        <ModalBody>

          <Grid gutter="space50">
            <Column>
              <Box marginBottom="space50">
                <Label htmlFor={documentNameInputID}>Supporting document name</Label>
                <Input onChange={(e) => setDocumentName(e.currentTarget.value)} id={documentNameInputID} type="text" value={documentName} />
              </Box>
              <Box marginBottom="space50">
                <Label htmlFor={address1InputID}>Address 1</Label>
                <Input onChange={(e) => setAddress1Name(e.currentTarget.value)} id={address1InputID} type="text" value={address1} />
              </Box>
              <Box>
                <Label htmlFor={address2InputID}>Address 2</Label>
                <Input onChange={(e) => setAddress2Name(e.currentTarget.value)} id={address2InputID} type="text" value={address2} />
              </Box>
            </Column>
            <Column>
              <Box backgroundColor="colorBackground" height="size20" display="flex" alignItems="center" justifyContent="center">
                <Text as="p" textAlign="center">Upload supporting document</Text>
              </Box>
            </Column>
          </Grid>

        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Add document</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

render(
  <ModalTrigger />
)
`.trim(),v=`
const ModalTrigger = () => {
  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();
  // ref of target intial focus element
  const nameInputRef = React.createRef();

  // Content properties
  const [name, setName] = React.useState('');
  const inputID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        New project
      </Button>
      <Modal
        ariaLabelledby={modalHeadingID}
        isOpen={isOpen}
        onDismiss={handleClose}
        // set inital focus here
        initialFocusRef={nameInputRef}
        size="default"
      >
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Create a new project
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Box as="form">
            <Label htmlFor={inputID}>Project Name</Label>
            <Input
              id={inputID}
              value={name}
              // assign the target ref here
              ref={nameInputRef}
              onChange={e => setName(e.currentTarget.value)}
              type="text"
            />
          </Box>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

render(
  <ModalTrigger />
)
`.trim(),w=`
const ModalTrigger = () => {
  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Abrir modal
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader i18nDismissLabel='Cerrar modal'>
          <ModalHeading as="h3" id={modalHeadingID}>
            Escoja una autora
          </ModalHeading>
        </ModalHeader>
        <ModalBody>

          <Paragraph>
            "Vivir en las fronteras y en los m\xe1rgenes, mantener intacta la identidad m\xfaltiple y la integridad, es como tratar de nadar en un nuevo elemento, un elemento 'extranjero'"
             — Gloria E. Anzald\xfaa
          </Paragraph>

          <Label htmlFor="author">Escoja una autora</Label>
          <Select id="author">
            <Option value="allende">Isabel Allende</Option>
            <Option value="cisneros">Sandra Cisneros</Option>
            <Option value="santiago">Esmeralda Santiago</Option>
            <Option value="anzald\xfaa">Gloria E. Anzald\xfaa</Option>
          </Select>

        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary">Confirmar</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

render(
  <ModalTrigger />
)
`.trim();var b=o(40615),M=!0;let x={title:"Modal",package:"@twilio-paste/modal",description:"A modal displays content over the main page and blocks any interaction with the page.",slug:"/components/modal/"},I=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:E,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/modal",storybookUrl:"/?path=/story/components-modal--default"}}}),E=[{value:"Guidelines",depth:2},{value:"About Modals",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Default Modal",depth:3},{value:"Wide Modal",depth:3},{value:"Setting initial focus",depth:3},{value:"Internationalization",depth:3},{value:"Composition notes",depth:2},{value:"Footer actions alignment",depth:3},{value:"Footer actions left alignment",depth:4},{value:"Footer actions directional alignment",depth:4},{value:"When to use Modal",depth:3}],B=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},C={meta:x,getStaticProps:I,mdxHeadings:E},N=b.A;function T({components:e,...t}){return(0,a.yg)(N,{...C,...t,components:e,mdxType:"MDXLayout"},(0,a.yg)(B,{scope:{Modal:c.aF,ModalBody:c.cw,ModalFooter:c.jl,ModalFooterActions:c.ox,ModalHeader:c.rQ,ModalHeading:c.EZ,useUID:n.GV,Button:d.$n,Label:u.J,Select:h.l6,Option:h.c$,Paragraph:i.f},noInline:!0,mdxType:"LivePreview"},y),(0,a.yg)("h2",null,"Guidelines"),(0,a.yg)("h3",null,"About Modals"),(0,a.yg)("p",null,"A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction. Modals are typically used to focus a user's attention for any of these scenarios:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When you want to capture information from the user without having them leave the parent page."),(0,a.yg)("li",{parentName:"ul"},"When you want to show additional information to the user without losing context of the parent page.")),(0,a.yg)("p",null,"If you need to to guarantee a user acknowledges a critical piece of information, use an ",(0,a.yg)("a",{parentName:"p",href:"/components/alert-dialog"},"Alert Dialog")," instead."),(0,a.yg)("p",null,"Users cannot interact with content outside an active modal window until the user explicitly closes it. When the modal opens, focus moves to an element contained in it (by default, the first element that can be focused) in the modal, and the focus should stay in and cycle through the modal's content. Focus shouldn't return to the underlying page until the user closes the modal. This can happen in any of the following ways:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Presses the Esc key"),(0,a.yg)("li",{parentName:"ul"},'Presses the close "x" button in the Modal header'),(0,a.yg)("li",{parentName:"ul"},'Presses a "Cancel" button in the Modal footer'),(0,a.yg)("li",{parentName:"ul"},"Clicks outside of the Modal"),(0,a.yg)("li",{parentName:"ul"},"Performs another action that closes the Modal")),(0,a.yg)("p",null,"You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts."),(0,a.yg)("h3",null,"Accessibility"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"All elements required to interact with the modal, including closing or acknowledging it, are contained in the modal since they trap focus, and users can't interact with the underlying page."),(0,a.yg)("li",{parentName:"ul"},"Tabbing through a Modal will cycle through its content in the same way it does on a page. A Modal also supports pressing the Escape key to close the Modal."),(0,a.yg)("li",{parentName:"ul"},"The element that serves as the modal container has a role of dialog."),(0,a.yg)("li",{parentName:"ul"},"The modal must be labelled. It can be labelled either by:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Setting a value for the ",(0,a.yg)("inlineCode",{parentName:"li"},"aria-labelledby")," property that refers to a visible ",(0,a.yg)("inlineCode",{parentName:"li"},"ModalHeading"),"."),(0,a.yg)("li",{parentName:"ul"},"Providing a label directly specifing by ",(0,a.yg)("inlineCode",{parentName:"li"},"aria-label")," attribute on the Modal container.")))),(0,a.yg)("h2",null,"Examples"),(0,a.yg)("h3",null,"Default Modal"),(0,a.yg)("p",null,"A modal is composed of:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Header"),` — Headers include a Heading and close button. Heading text should be concise (2-4 words and no more than one line) and describe the information or action the modal is presenting.`),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Body"),` — This container has no content requirements and allows you to compose a Modal as you need. Common components you might use include supporting body copy (with Paragraph) and form elements.`),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Footer"),` — This contains all possible modal actions aligned to the right side of the modal (by default) to show users they're progressing through their task, whether that's on the parent page, on a new page, or in another step in the modal.`)),(0,a.yg)(g.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,a.yg)(g.v,{as:"h4",mdxType:"CalloutHeading"},"Provide an accessible label"),(0,a.yg)(g.wz,{mdxType:"CalloutText"},"Be sure to assign the ",(0,a.yg)("inlineCode",null,"aria-labelledby")," property on the modal container to the id of the modal heading.")),(0,a.yg)("p",null,"A Modal has a default width of 608 px to allow for an optimal reading length at 70-75 characters per line at default Paragraph size at 100% magnification. At viewports smaller than 608 px, the Modal will fill the width of the viewport and pin to the bottom. The Modal will grow in height with the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll."),(0,a.yg)(B,{scope:{Modal:c.aF,ModalBody:c.cw,ModalFooter:c.jl,ModalFooterActions:c.ox,ModalHeader:c.rQ,ModalHeading:c.EZ,useUID:n.GV,Button:d.$n,Label:u.J,Select:h.l6,Option:h.c$,Paragraph:i.f},noInline:!0,mdxType:"LivePreview"},y),(0,a.yg)("h3",null,"Wide Modal"),(0,a.yg)("p",null,"Use a wide modal (816px) when your content requires it. For example, you may need to place a two-column Grid layout or video player in a wide modal."),(0,a.yg)("p",null,"At viewports smaller than 816 px, the Modal will shift to the default width (608px). The wide Modal follows all other sizing behavior as the default Modal."),(0,a.yg)(B,{scope:{Modal:c.aF,ModalBody:c.cw,ModalFooter:c.jl,ModalFooterActions:c.ox,ModalHeader:c.rQ,ModalHeading:c.EZ,useUID:n.GV,Button:d.$n,Box:r.az,Text:l.EY,Grid:s.x,Column:s.V,Label:u.J,Input:p.p},noInline:!0,mdxType:"LivePreview"},f),(0,a.yg)("h3",null,"Setting initial focus"),(0,a.yg)("p",null,"When a Modal opens user focus is set inside the Modal. By default, user focus will be set on the first focusable element which is the close button. You can choose to explicitly set focus to any focusable UI control inside the modal."),(0,a.yg)("p",null,"To set a different initial focus target, set the ",(0,a.yg)("inlineCode",{parentName:"p"},"initialFocusRef")," prop on the ",(0,a.yg)("inlineCode",{parentName:"p"},"Modal")," container to a ",(0,a.yg)("inlineCode",{parentName:"p"},"ref")," of a focusable element inside the Modal."),(0,a.yg)(B,{scope:{Modal:c.aF,ModalBody:c.cw,ModalFooter:c.jl,ModalFooterActions:c.ox,ModalHeader:c.rQ,ModalHeading:c.EZ,useUID:n.GV,Button:d.$n,Box:r.az,Text:l.EY,Grid:s.x,Column:s.V,Label:u.J,Input:p.p},noInline:!0,mdxType:"LivePreview"},v),(0,a.yg)("h3",null,"Internationalization"),(0,a.yg)("p",null,"To internationalize the modal, simply pass different text as children to the Modal components. The only exception is the dismiss button in the ",(0,a.yg)("inlineCode",{parentName:"p"},"ModalHeader"),` component–to change the button’s text, use the `,(0,a.yg)("inlineCode",{parentName:"p"},"i18nDismissLabel")," prop."),(0,a.yg)(B,{scope:{Modal:c.aF,ModalBody:c.cw,ModalFooter:c.jl,ModalFooterActions:c.ox,ModalHeader:c.rQ,ModalHeading:c.EZ,useUID:n.GV,Button:d.$n,Label:u.J,Select:h.l6,Option:h.c$,Paragraph:i.f},noInline:!0,mdxType:"LivePreview"},w),(0,a.yg)("h2",null,"Composition notes"),(0,a.yg)("p",null,"Include a header, body, and footer in your modal."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The header should be concise (2-4 words), start with a verb, and clearly describe the information or action the modal presents."),(0,a.yg)("li",{parentName:"ul"},"The body should expand on the topic in the header. If you need multiple sections of content with Headings in the body, use a ",(0,a.yg)("a",{parentName:"li",href:"/components/heading#heading-as-h-2-with-heading-40-variant"},"Heading with the ",(0,a.yg)("inlineCode",{parentName:"a"},"heading40")," variant"),"."),(0,a.yg)("li",{parentName:"ul"},`The footers should include 1–2 actions aligned to the right side of the modal. Place the primary action farthest on the right to indicate to users they're progressing through their task.`)),(0,a.yg)("h3",null,"Footer actions alignment"),(0,a.yg)("p",null,"By default the footer actions are aligned to the right of the modal using the Flexbox property ",(0,a.yg)("inlineCode",{parentName:"p"},"justify-content"),". This should be the most common configuration you should choose."),(0,a.yg)(B,{scope:{ModalFooter:c.jl,ModalFooterActions:c.ox,Button:d.$n},mdxType:"LivePreview"},`<ModalFooter>
  <ModalFooterActions>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Save</Button>
  </ModalFooterActions>
</ModalFooter>`),(0,a.yg)("h4",null,"Footer actions left alignment"),(0,a.yg)("p",null,"Sometimes you may need to do left alignment of buttons. This is less common. To do so use the ",(0,a.yg)("inlineCode",{parentName:"p"},"justify")," property on the ",(0,a.yg)("inlineCode",{parentName:"p"},"ModalFooterActions")," component and set it to ",(0,a.yg)("inlineCode",{parentName:"p"},"start"),"."),(0,a.yg)(B,{scope:{ModalFooter:c.jl,ModalFooterActions:c.ox,Button:d.$n},mdxType:"LivePreview"},`<ModalFooter>
  <ModalFooterActions justify="start">
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Save</Button>
  </ModalFooterActions>
</ModalFooter>`),(0,a.yg)("h4",null,"Footer actions directional alignment"),(0,a.yg)("p",null,"By using both alignment types, you are able to create directional alignments of footer actions."),(0,a.yg)(B,{scope:{ModalFooter:c.jl,ModalFooterActions:c.ox,Button:d.$n},mdxType:"LivePreview"},`<ModalFooter>
  <ModalFooterActions justify="start">
    <Button variant="secondary">Back</Button>
  </ModalFooterActions>
  <ModalFooterActions>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Save</Button>
  </ModalFooterActions>
</ModalFooter>`),(0,a.yg)("h3",null,"When to use Modal"),(0,a.yg)("p",null,"Use a Modal to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Request the user enter information to continue the current process."),(0,a.yg)("li",{parentName:"ul"},"Guide the user through a complex workflow with a series of steps, while still maintaining context of the task that initiated the modal.")),(0,a.yg)("p",null,"Do not use modals to show important warnings, since they can be dismissed without the user acknowledging the information. Instead, use an ",(0,a.yg)("a",{parentName:"p",href:"/components/alert-dialog"},"Alert Dialog"),"."),(0,a.yg)("p",null,"Do not use modals to show error messages. Refer to the error state pattern for ",(0,a.yg)("a",{parentName:"p",href:"/patterns/error-state#when-to-use-which-component"},"additional guidance on components"),"."),(0,a.yg)(m.l,{mdxType:"DoDont"},(0,a.yg)(m.Do,{title:"Do",body:"Use a clear and concise heading to describe the purpose of the Modal.",preview:!1,mdxType:"Do"}),(0,a.yg)(m.w,{title:"Don't",body:"Don't go into unnecessary detail in the heading about the purpose of the Modal.",preview:!1,mdxType:"Dont"})),(0,a.yg)(m.l,{mdxType:"DoDont"},(0,a.yg)(m.Do,{title:"Do",body:"Keep the main call to action in the footer. If you're asking the user to perform an action, use a primary action (primary button or destructive button). If you need only to give the user a way to close the Modal, use a secondary button or rely on the close 'x' button.",preview:!1,mdxType:"Do"}),(0,a.yg)(m.w,{title:"Don't",body:"Don't put buttons that close the Modal, or confirm and submit content, in the body.",preview:!1,mdxType:"Dont"})),(0,a.yg)(m.l,{mdxType:"DoDont"},(0,a.yg)(m.Do,{title:"Do",body:"Use at most one primary and one secondary action in a Modal. Make the secondary action a 'Cancel' button, especially when you want to give users an explicit choice to decline the primary action. This is especially useful when the primary action is a destructive action.",preview:!1,mdxType:"Do"}),(0,a.yg)(m.w,{title:"Don't",body:"Don't put more than one primary action in the footer. Avoid using the secondary button for an action that isn't 'Close' or 'Cancel' since users will be used to pressing a secondary button that escapes the Modal. If you need to provide another action, add a third button to the footer, or consider showing it elsewhere.",preview:!1,mdxType:"Dont"})))}T.isMDXComponent=!0},80526:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/modal",function(){return o(53915)}])},81724:(e,t,o)=>{"use strict";o.d(t,{c$:()=>i,l6:()=>c,zQ:()=>d});var a=o(76127),n=o(55729),r=o(92980),l=o(34280),i=n.forwardRef(({children:e,element:t="OPTION",...o},r)=>(o.selected&&console.warn('"selected" is a blocked prop on this component, please use "value" on the select element.'),n.createElement(a.az,{as:"option",ref:r,...(0,a.x8)(o),element:t,size:void 0,height:void 0,width:void 0,backgroundColor:"inherit",color:"inherit",fontFamily:"inherit",lineHeight:"lineHeight50",paddingTop:"space30",paddingBottom:"space30",paddingLeft:"space20"},e)));i.displayName="Option";var d=n.forwardRef(({label:e,children:t,element:o="OPTION_GROUP",...r},l)=>n.createElement(a.az,{ref:l,label:e,...(0,a.x8)(r),element:o,as:"optgroup",backgroundColor:"inherit",color:"inherit",fontFamily:"inherit",fontWeight:"fontWeightMedium",fontStyle:"normal",margin:"space20"},t));d.displayName="OptionGroup";var s=n.forwardRef(({element:e="SELECT_ELEMENT",variant:t,size:o,...r},l)=>n.createElement(a.az,{...(0,a.x8)(r),element:e,as:"select",ref:l,size:o,height:void 0,appearance:"none",backgroundColor:"inverse"===t?"colorBackgroundInverse":"colorBackgroundBody",border:"none",borderRadius:"borderRadius30",boxShadow:"none",color:"inherit",cursor:"pointer",display:"block",fontFamily:"inherit",fontSize:"fontSize30",fontWeight:"fontWeightMedium",lineHeight:"lineHeight20",margin:"space0",outline:"none",paddingBottom:"space30",paddingLeft:"space40",paddingRight:"space100",paddingTop:"space30",resize:"none",width:"100%",_disabled:{color:"inverse"===t?"colorTextInverseWeakest":"colorTextWeaker",backgroundColor:"transparent",cursor:"not-allowed",opacity:1},variant:t}));s.displayName="SelectElement";var c=n.forwardRef(({disabled:e,element:t="SELECT",hasError:o,insertBefore:i,insertAfter:d,children:c,size:u,multiple:p,variant:h="default",...m},g)=>{let[y,f]=n.useState(!1);return n.useEffect(()=>{f(!0)},[]),n.createElement(l.cl,{disabled:e,element:t,hasError:o,insertAfter:d,insertBefore:i,variant:h},n.createElement(a.az,{display:"flex",width:"100%",position:"relative"},y?n.createElement(s,{"aria-invalid":o,"data-not-selectize":"true",disabled:e,ref:g,element:`${t}_ELEMENT`,...m,multiple:p,size:p?u:0,variant:h,key:"mounted"},c):n.createElement(s,{key:"unmounted",variant:h}),!p&&n.createElement(l.JO,{element:`${t}_CHEVRON_WRAPPER`},n.createElement(r.ChevronDownIcon,{"aria-hidden":"true",decorative:!0,element:`${t}_ICON`,color:(0,l.YN)(h,e,!1),size:"sizeIcon30"}))))});c.displayName="Select"},88017:(e,t,o)=>{"use strict";o.d(t,{EZ:()=>w,Vn:()=>y,aF:()=>f,cw:()=>b,eL:()=>g,jl:()=>M,ox:()=>x,rQ:()=>v});var a=o(58001),n=o(76127),r=o(86110),l=o(27717),i=o(25630),d=o(55729),s=o(95036),c=o(71853),u=o(40123),p=o(69277),h=o(60798),m=d.createContext(null),g=(0,a.CS)((0,l.I4)(r.j)((0,l.AH)({position:"fixed",top:0,right:0,bottom:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",backgroundColor:"colorBackgroundOverlay",zIndex:"zIndex80"}),i.$,n.mP)),y=(0,a.CS)((0,l.I4)(r.S)(({size:e})=>(0,l.AH)({width:"100%",maxWidth:"wide"===e?"size80":"size60",maxHeight:"90%",minHeight:"170px",backgroundColor:"colorBackgroundBody",borderRadius:"borderRadius30",boxShadow:"shadowElevationTop20",display:"flex",flexDirection:"column"}))),f=d.forwardRef(({children:e,element:t="MODAL",isOpen:o,onDismiss:r,allowPinchZoom:l=!0,initialFocusRef:i,ariaLabelledby:s,size:c,...u},p)=>{let h=(0,a.pn)(o,{from:{opacity:0,transform:"scale(0.675)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.675)"},config:{mass:.5,tension:370,friction:26}});return d.createElement(m.Provider,{value:{onDismiss:r}},h((o,a)=>a&&d.createElement(g,{onDismiss:r,allowPinchZoom:l,initialFocusRef:i,style:{opacity:o.opacity},"data-paste-element":`${t}_OVERLAY`,variant:c},d.createElement(n.az,{as:y,"aria-labelledby":s,...(0,n.x8)(u),element:t,ref:p,style:o,size:c,variant:c},e))))});f.displayName="Modal";var v=d.forwardRef(({children:e,element:t="MODAL_HEADER",i18nDismissLabel:o="Close modal",...a},r)=>{let{onDismiss:l}=(()=>{let e=d.useContext(m);if(!e)throw Error("useModalContext must be used with ModalContextProvider");return e})();return d.createElement(n.az,{...(0,n.x8)(a),as:"div",element:t,ref:r,padding:"space90",flexShrink:0},d.createElement(c.s,{hAlignContent:"between"},d.createElement(c.s,{vAlignContent:"center",grow:1,marginRight:"space70"},e),d.createElement(s.$n,{element:`${t}_CLOSE_BUTTON`,variant:"secondary_icon",size:"reset",onClick:()=>l()},d.createElement(u.CloseIcon,{element:`${t}_CLOSE_ICON`,decorative:!0,size:"sizeIcon60"}),d.createElement(p.E,null,o))))});v.displayName="ModalHeader";var w=d.forwardRef(({children:e,as:t="h2",element:o="MODAL_HEADING",...a},n)=>d.createElement(h.D,{...a,as:t,element:o,marginBottom:"space0",variant:"heading30",ref:n},e));w.displayName="ModalHeading";var b=d.forwardRef(({children:e,element:t="MODAL_BODY",...o},a)=>d.createElement(n.az,{...(0,n.x8)(o),overflowY:"auto",paddingX:"space90",paddingY:"space10",as:"div",element:t,ref:a},e));b.displayName="ModalBody";var M=d.forwardRef(({children:e,element:t="MODAL_FOOTER",...o},a)=>d.createElement(n.az,{...(0,n.x8)(o),flexShrink:0,display:"flex",padding:"space90",as:"div",element:t,ref:a},e));M.displayName="ModalFooter";var x=d.forwardRef(({children:e,element:t="MODAL_FOOTER_ACTIONS",justify:o,...a},r)=>{let l=d.Children.count(e);return d.createElement(n.az,{...(0,n.x8)(a),display:"flex",justifyContent:"start"===o?"flex-start":"flex-end",flexShrink:"start"===o?null:0,flexWrap:"wrap",flexGrow:1,element:t,alignItems:"center",ref:r},d.Children.map(e,(e,o)=>d.createElement(n.az,{marginRight:l!==o+1?"space50":null,element:`${t}_ITEM`},e)))});x.displayName="ModalFooterActions"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,6110,636,6593,8792],()=>e(e.s=80526)),_N_E=e.O()}]);