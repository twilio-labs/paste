(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2090],{8478:(e,o,t)=>{"use strict";t.d(o,{e:()=>p});var n=t(76127),a=t(27717),r=t(55729),i=a.I4.span((0,a.AH)({"& > button":{zIndex:1},"& > button:hover, & > button[aria-pressed=true]":{zIndex:2},"& > button:focus":{zIndex:3},"& > button:disabled":{zIndex:0},"& > button:first-of-type":{borderTopRightRadius:0,borderBottomRightRadius:0},"& > button:not(:first-of-type):not(:last-of-type)":{borderRadius:0,marginLeft:"1px"},"& > button:last-of-type":{marginLeft:"1px",borderTopLeftRadius:0,borderBottomLeftRadius:0}})),l=a.I4.span((0,a.AH)({display:"flex",columnGap:"space40"})),p=r.forwardRef(({element:e="BUTTON_GROUP",children:o,attached:t=!1,justifyContent:a="flex-start",...p},s)=>r.createElement(n.az,{...(0,n.x8)(p),as:t?i:l,ref:s,element:e,display:"inline-flex",flexWrap:t?"nowrap":"wrap",justifyContent:t?"flex-start":a,rowGap:"space40",role:"group"},o));p.displayName="ButtonGroup"},31079:(e,o,t)=>{"use strict";t.r(o),t.d(o,{PlusIcon:()=>i});var n=t(36669),a=t(55729),r=t(96316);let i=a.forwardRef(({as:e,display:o,element:t="ICON",size:i,color:l,title:p,decorative:s},d)=>{let c=`PlusIcon-${(0,n.GV)()}`;if(!s&&null==p)throw Error("[PlusIcon]: Missing a title for non-decorative icon.");return a.createElement(r.IconWrapper,{as:e,display:o,element:t,size:i,color:l,ref:d},a.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},p?a.createElement("title",{id:c},p):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.043 9.043h-4.086V4.957a.958.958 0 00-1.914 0v4.086H4.957a.958.958 0 000 1.914h4.086v4.086a.958.958 0 001.914 0v-4.086h4.086a.958.958 0 000-1.914z"})))});i.displayName="PlusIcon"},40615:(e,o,t)=>{"use strict";t.d(o,{A:()=>m});var n=t(72387),a=t(76127),r=t(95669),i=t.n(r),l=t(81278);t(55729);var p=t(10511),s=t(43084),d=t(10732),c=t(62887),u=t(63437),h=t(38992);let v={h1:()=>null},m=({children:e,meta:o,navigationData:t,data:r,mdxHeadings:m,pageHeaderData:{categoryRoute:g,githubUrl:y,storybookUrl:P}})=>{let b=o.title?`${o.title} - ${h.DZ.TITLE}`:h.DZ.TITLE,f=o.description||h.DZ.DESCRIPTION,B=(0,l.useRouter)();return(0,n.FD)(u.T,{navigationData:t,children:[(0,n.FD)(i(),{children:[(0,n.Y)("title",{children:b}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${B.pathname}`}),(0,n.Y)("meta",{name:"description",content:f},"description")]}),(0,n.FD)(p.s,{children:[(0,n.Y)(c.c,{categoryRoute:g,githubUrl:y,storybookUrl:P,data:r}),(0,n.FD)(a.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(d.i,{data:m}),(0,n.Y)(a.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(s.Q,{componentOverrides:o.package?v:{},children:e})})]})]})]})}},47837:(e,o,t)=>{"use strict";t.d(o,{$Q:()=>f,Ri:()=>P,Sc:()=>b,iA:()=>y,zc:()=>B});var n=t(79559),a=t(76127),r=t(98536),i=t(81423),l=t(86146),p=t(7658),s=t(36669),d=t(55729),c=t(22275),u=t(8909),h=d.createContext({disabled:!1,name:void 0,hasError:void 0,onChange:()=>{}}),v={paddingTop:"space20",paddingRight:"space30",paddingBottom:"space20",paddingLeft:"space30",borderRadius:"borderRadius20",backgroundColor:"colorBackground"},m={...v,backgroundColor:"colorBackground"},g={paddingLeft:"space30",paddingRight:"space30"},y=d.forwardRef((e,o)=>d.createElement(a.az,{...e,ref:o,as:"input",type:"checkbox",size:"size0",border:"none",overflow:"hidden",padding:"space0",margin:"space0",whiteSpace:"nowrap",textTransform:"none",position:"absolute",clip:"rect(0 0 0 0)"}));y.displayName="HiddenCheckbox";var P=({checked:e,element:o,indeterminate:t})=>t?d.createElement(i.MinusIcon,{element:o,decorative:!0,color:"inherit",size:"sizeIcon10"}):d.createElement(r.CheckboxCheckIcon,{element:o,display:e?"block":"none",decorative:!0,color:"inherit",size:"sizeIcon10"});P.displayName="CheckboxIcon";var b=d.forwardRef(({checked:e,defaultChecked:o,element:t="CHECKBOX",children:r,helpText:i,id:c,indeterminate:u,isSelectAll:b,isSelectAllChild:f,required:B,onChange:x,...C},w)=>{if(null!=e&&null!=o)throw Error('[Paste Checkbox] Do not provide both "defaultChecked" and "checked" to Checkbox at the same time. Please consider if you want this component to be controlled or uncontrolled.');let[T,I]=d.useState(o),E=d.useContext(h),k=(0,s.GV)(),A=c||(0,s.GV)(),N=d.useMemo(()=>void 0!==e,[]),z=N?e:T,D=d.useCallback(e=>{N?x?x(e):E.onChange(e):I(e.target.checked)},[x,E.onChange]),R=null!=C.disabled?C.disabled:E.disabled,F=null!=C.name?C.name:E.name,S=null!=C.hasError?C.hasError:E.hasError,O={};return b&&(O=!R&&(z||u)?m:v),f&&(O=g),d.createElement(a.az,{element:t,display:"inline-flex",position:"relative",flexDirection:"column",...O},d.createElement(y,{...(0,a.x8)(C),checked:e,defaultChecked:o,disabled:R,name:F,onChange:D,"aria-describedby":k,"aria-checked":u?"mixed":e,"aria-invalid":S,id:A,required:B,ref:w}),d.createElement(n.g$,{disabled:R,htmlFor:A},d.createElement(n.BJ,{alignItems:"center",borderRadius:"borderRadius20",element:`${t}_CONTROL`,disabled:R,position:"relative",type:"checkbox"},d.createElement(P,{element:`${t}_ICON`,checked:z,indeterminate:u})),d.createElement(n.pX,{element:`${t}_LABEL_TEXT`,fontWeight:b?null:"fontWeightMedium"},d.createElement(p.Ss,{verticalAlign:"top"},B&&d.createElement(p.pV,{spacing:"space20"},d.createElement(l.j,null)),d.createElement(p.To,null,r)))),i&&d.createElement(n._v,{element:`${t}_HELP_TEXT_WRAPPER`,helpTextId:k},i))});b.displayName="Checkbox";var f=d.forwardRef(({children:e,element:o="CHECKBOX_GROUP",disabled:t=!1,errorText:n,isSelectAll:a=!1,name:r,onChange:i,orientation:l="vertical",i18nRequiredLabel:p="(required)",...s},u)=>{let v=d.useCallback(e=>{i?.(e.target.checked)},[i]),m=d.useMemo(()=>({disabled:t,name:r,onChange:v,hasError:!!n||void 0}),[t,r,v]);return d.createElement(h.Provider,{value:m},d.createElement(c.a,{...s,element:o,disabled:t,errorText:n,name:r,orientation:l,ref:u,i18nRequiredLabel:p},d.Children.map(e,(e,o)=>d.isValidElement(e)?d.cloneElement(e,{isSelectAll:a&&0===o,isSelectAllChild:a&&"vertical"===l&&0!==o}):e)))});f.displayName="CheckboxGroup";var B=d.forwardRef(({children:e,element:o="CHECKBOX_DISCLAIMER",errorText:t,...n},r)=>d.createElement(d.Fragment,null,d.createElement(a.az,{element:o,backgroundColor:"colorBackground",borderRadius:"borderRadius20",padding:"space50"},d.createElement(b,{...n,hasError:null!=t,ref:r},e)),t&&d.createElement(a.az,{marginTop:"space30",element:`${o}_ERROR_TEXT_WRAPPER`,marginLeft:"space50"},d.createElement(u.$,{variant:"error"},t))));B.displayName="CheckboxDisclaimer"},48346:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popover",function(){return t(65254)}])},65254:(e,o,t)=>{"use strict";t.r(o),t.d(o,{__N_SSG:()=>M,default:()=>Y,getStaticProps:()=>_,mdxHeadings:()=>G,meta:()=>H});var n=t(55729),a=t(11885),r=t(61593),i=t(87084),l=t(59508),p=t(76127),s=t(95036),d=t(8478),c=t(47837),u=t(31910),h=t(23768),v=t(60798),m=t(16704),g=t(86146),y=t(50010),P=t(81724),b=t(28019),f=t(629),B=t(36669),x=t(31079),C=t(56769),w=t(73123),T=t(83889);let I=`
const PopoverExample = () => {
  return (
    <PopoverContainer baseId="popover-example">
      <PopoverButton variant="primary">✊ Action</PopoverButton>
      <Popover aria-label="Popover">
        <Heading as="h3" variant="heading30">Heads up!</Heading>
        <Separator orientation="horizontal" verticalSpacing="space50" />
        <Text as="span">
          Black Lives Matter. We stand with the Black community
        </Text>
        <Separator orientation="horizontal" verticalSpacing="space50" />
        <Button onClick={() => {}} variant="primary">Agree</Button>
      </Popover>
    </PopoverContainer>
  );
};

render(
  <PopoverExample />
)
`.trim(),E=`
const PopoverExample = () => {
  const saveButtonRef = React.createRef();

  return (
    <PopoverContainer baseId="popover-interactive-example">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Update API key permissions" initialFocusRef={saveButtonRef}>
        <Heading as="h3" variant="heading30">Update API key permissions</Heading>
        <Paragraph>
          It is really important to update your permissions.
        </Paragraph>
        <CheckboxGroup name="permissions" legend="API key permissions">
          <Checkbox id="full_access" value="full_access">
            Full access
          </Checkbox>
          <Checkbox id="restricted_access" value="restricted_access">
            Restricted access
          </Checkbox>
        </CheckboxGroup>
        <Box marginTop='space70'>
          <ButtonGroup>
            <Button onClick={() => {}} variant="primary" ref={saveButtonRef}>Save</Button>
            <Button onClick={() => {}} variant="secondary">Cancel</Button>
          </ButtonGroup>
        </Box>
      </Popover>
    </PopoverContainer>
  );
};

render(
  <PopoverExample />
)`.trim(),k=`
const countryList = [
  {code: 'AD', label: 'Andorra', phone: '376'},
  {code: 'AE', label: 'United Arab Emirates', phone: '971'},
  {code: 'AF', label: 'Afghanistan', phone: '93'},
  {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
  {code: 'AI', label: 'Anguilla', phone: '1-264'},
  {code: 'AL', label: 'Albania', phone: '355'},
  {code: 'AM', label: 'Armenia', phone: '374'},
  {code: 'AO', label: 'Angola', phone: '244'},
  {code: 'AQ', label: 'Antarctica', phone: '672'},
  {code: 'AR', label: 'Argentina', phone: '54'},
  {code: 'AS', label: 'American Samoa', phone: '1-684'},
  {code: 'AT', label: 'Austria', phone: '44'},
  {code: 'BS', label: 'Bahamas', phone: '43'},
  {code: 'BH', label: 'Bahrain', phone: '48'},
  {code: 'BD', label: 'Bangladesh', phone: '50'},
  {code: 'BB', label: 'Barbados', phone: '52'},
  {code: 'BY', label: 'Belarus', phone: '112'},
  {code: 'BE', label: 'Belgium', phone: '56'},
  {code: 'BZ', label: 'Belize', phone: '84'},
  {code: 'BJ', label: 'Benin', phone: '204'},
  {code: 'BM', label: 'Bermuda', phone: '60'},
  {code: 'BT', label: 'Bhutan', phone: '64'},
  {code: 'BO', label: 'Bolivia', phone: '68'},
  {code: 'BW', label: 'Botswana', phone: '72'},
  {code: 'BR', label: 'Brazil', phone: '76'},
  {code: 'KH', label: 'Cambodia', phone: '116'},
  {code: 'CA', label: 'Canada', phone: '124'},
];

const PopoverExample = () => {
  const phoneInputRef = React.createRef();
  const seed = useUIDSeed();

  return (
    <PopoverContainer baseId="popover-interactive-example">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover
        aria-label="Edit phone number"
        initialFocusRef={phoneInputRef}
        width='size40'
      >
        <Form aria-labelledby={seed('phone-heading')}>
          <Heading
            as="h3"
            variant="heading40"
            id={seed('phone-heading')}
            marginBottom='space0'
          >
            Edit phone number
          </Heading>
          <FormControl>
            <Label htmlFor={seed('phone-input')}>Phone number</Label>
            <Input type='text' id={seed('phone-input')} ref={phoneInputRef} />
          </FormControl>
          <FormControl>
            <Label htmlFor={seed('country-input')}>Country</Label>
            <Select id={seed('country-input')}>
              {
                countryList.map(({code, label}) => (
                  <Option value={code}>{label}</Option>
                ))
              }
            </Select>
          </FormControl>
          <FormActions>
            <Button onClick={() => {}} variant="primary">Save</Button>
            <Button onClick={() => {}} variant="secondary">Cancel</Button>
          </FormActions>
        </Form>
      </Popover>
    </PopoverContainer>
  );
};

render(
  <PopoverExample />
)`.trim(),A=`
const PopoverPositionExample = () => {
  return (
    <Box display='flex' columnGap='space40'>
      <PopoverContainer baseId="popover-top-example" placement="top-start">
        <PopoverButton variant="primary">Open top</PopoverButton>
        <Popover aria-label="Popover" width={['size20', 'size40']}>
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-right-example" placement="right-start">
        <PopoverButton variant="primary">Open right</PopoverButton>
        <Popover aria-label="Popover" width={['size20', 'size40']}>
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-bottom-example" placement="bottom-start">
        <PopoverButton variant="primary">Open bottom</PopoverButton>
        <Popover aria-label="Popover" width={['size20', 'size40']}>
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-left-example" placement="left-start">
        <PopoverButton variant="primary">Open left</PopoverButton>
        <Popover aria-label="Popover" width={['size20', 'size40']}>
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <PopoverPositionExample />
)
`.trim(),N=`
const StateHookExample = () => {
  const popover = usePopoverState({baseId: 'test-id'});
  return (
    <Box display='flex' columnGap='space40'>
      <PopoverContainer state={popover}>
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
      <Button variant="primary" onClick={() => popover.show()}>
        Open popover on click
      </Button>
      <Button variant="primary" onClick={() => popover.hide()}>
        Close popover on click
      </Button>
    </Box>
  );
};

render(
  <StateHookExample />
)
`.trim(),z=`
const PopoverBadgeExample = () => {
  return (
    <Box display="flex" columnGap="space40">
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="primary" size="small">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="secondary_icon" size="icon_small">
          <PlusIcon decorative={false}  title="Open popover" />
        </PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="reset" size="reset">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <PopoverBadgeExample />
)
`.trim(),D=`
const PopoverBadgeExample = () => {
  return (
    <Box display="flex" columnGap="space40">
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="decorative10">Open popover</PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="neutral">
          <>
            <InformationIcon decorative={false} title="Information" />
            Open popover
          </>
        </PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="warning">
          <>
            <WarningIcon decorative={false} title="Warning" />
            Open popover
          </>
        </PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="new">
          <>
            <NewIcon decorative={false} title="New" />
            Open popover
          </>
        </PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <PopoverBadgeExample />
)
`.trim(),R=`
const countryList = [
  {code: 'AD', label: 'Andorra', phone: '376'},
  {code: 'AE', label: 'United Arab Emirates', phone: '971'},
  {code: 'AF', label: 'Afghanistan', phone: '93'},
  {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
  {code: 'AI', label: 'Anguilla', phone: '1-264'},
  {code: 'AL', label: 'Albania', phone: '355'},
  {code: 'AM', label: 'Armenia', phone: '374'},
  {code: 'AO', label: 'Angola', phone: '244'},
  {code: 'AQ', label: 'Antarctica', phone: '672'},
  {code: 'AR', label: 'Argentina', phone: '54'},
  {code: 'AS', label: 'American Samoa', phone: '1-684'},
  {code: 'AT', label: 'Austria', phone: '44'},
  {code: 'BS', label: 'Bahamas', phone: '43'},
  {code: 'BH', label: 'Bahrain', phone: '48'},
  {code: 'BD', label: 'Bangladesh', phone: '50'},
  {code: 'BB', label: 'Barbados', phone: '52'},
  {code: 'BY', label: 'Belarus', phone: '112'},
  {code: 'BE', label: 'Belgium', phone: '56'},
  {code: 'BZ', label: 'Belize', phone: '84'},
  {code: 'BJ', label: 'Benin', phone: '204'},
  {code: 'BM', label: 'Bermuda', phone: '60'},
  {code: 'BT', label: 'Bhutan', phone: '64'},
  {code: 'BO', label: 'Bolivia', phone: '68'},
  {code: 'BW', label: 'Botswana', phone: '72'},
  {code: 'BR', label: 'Brazil', phone: '76'},
  {code: 'KH', label: 'Cambodia', phone: '116'},
  {code: 'CA', label: 'Canada', phone: '124'},
];

const PopoverExample = () => {
  const seed = useUIDSeed();
  return (
    <Box display='flex' columnGap='space40'>
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="primary">Auto width popover</PopoverButton>
        <Popover aria-label="Edit phone number">
          <Form aria-labelledby={seed('phone-heading-0')}>
            <Heading
              as="h3"
              variant="heading40"
              id={seed('phone-heading-0')}
              marginBottom='space0'
            >
              Edit phone number
            </Heading>
            <FormControl>
              <Label htmlFor={seed('phone-input-0')}>Phone number</Label>
              <Input type='text' id={seed('phone-input-0')} />
            </FormControl>
            <FormControl>
              <Label htmlFor={seed('country-input-0')}>Country</Label>
              <Select id={seed('country-input-0')}>
                {
                  countryList.map(({code, label}) => (
                    <Option value={code}>{label}</Option>
                  ))
                }
              </Select>
            </FormControl>
            <FormActions>
              <Button onClick={() => {}} variant="primary">Save</Button>
              <Button onClick={() => {}} variant="secondary">Cancel</Button>
            </FormActions>
          </Form>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="primary">size40 popover</PopoverButton>
        <Popover aria-label="Edit phone number" width="size40">
          <Form aria-labelledby={seed('phone-heading-1')}>
            <Heading
              as="h3"
              variant="heading40"
              id={seed('phone-heading-1')}
              marginBottom='space0'
            >
              Edit phone number
            </Heading>
            <FormControl>
              <Label htmlFor={seed('phone-input-1')}>Phone number</Label>
              <Input type='text' id={seed('phone-input-1')} />
            </FormControl>
            <FormControl>
              <Label htmlFor={seed('country-input-1')}>Country</Label>
              <Select id={seed('country-input-1')}>
                {
                  countryList.map(({code, label}) => (
                    <Option value={code}>{label}</Option>
                  ))
                }
              </Select>
            </FormControl>
            <FormActions>
              <Button onClick={() => {}} variant="primary">Save</Button>
              <Button onClick={() => {}} variant="secondary">Cancel</Button>
            </FormActions>
          </Form>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <PopoverExample />
)
`.trim(),F=`
const I18nExample = () => {
  return (
    <PopoverContainer baseId="popover-example">
      <PopoverButton variant="primary">Abrir popover</PopoverButton>
      <Popover aria-label="Popover" i18nDismissLabel="Cerrar popover">
        <Text as="span">
          "Vivir en las fronteras y en los m\xe1rgenes, mantener intacta la identidad m\xfaltiple y la integridad, es
          como tratar de nadar en un nuevo elemento, un elemento 'extranjero'" — Gloria E. Anzald\xfaa
        </Text>
      </Popover>
    </PopoverContainer>
  );
};

render(
  <I18nExample />
)
`.trim(),S=`
const PopoverFormPillExample = () => {
  const uniqueBaseID = useUID();
  const pillState = useFormPillState();
  const [selected, setSelected] = useState(true);

  return (
    <FormPillGroup {...pillState} aria-label="filter-group" variant="tree">
      <PopoverContainer baseId={uniqueBaseID}>
        <PopoverFormPillButton
          {...pillState}
          selected={selected}
          onDismiss={() => {}}
        >
          Open popover
        </PopoverFormPillButton>
        <Popover aria-label="Popover" data-testid="form-pill-popover">
          <Box margin="space60">
            <Button
              variant="primary"
              size="small"
              onClick={() => {
                setSelected(!selected);
              }}
            >
              Toggle Form Pill selection
            </Button>
          </Box>
        </Popover>
      </PopoverContainer>
    </FormPillGroup>
  );
};

render(
  <PopoverFormPillExample />
)
`.trim();var O=t(40615),L=t(89564),M=!0;let H={title:"Popover",package:"@twilio-paste/popover",description:"An accessible and styled popover component.",slug:"/components/popover/"},_=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:G,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/popover",storybookUrl:"/?path=/story/components-popover--default"}}}),G=[{value:"Guidelines",depth:2},{value:"About Popover",depth:3},{value:"Accessibility",depth:3},{value:"Popover vs. Tooltip",depth:3},{value:"Differences",depth:4},{value:"Usage",depth:4},{value:"Popover vs. Modal",depth:3},{value:"Examples",depth:2},{value:"Basic Popover",depth:3},{value:"Popover with interactive content",depth:3},{value:"Setting initial focus",depth:3},{value:"Controlling placement",depth:3},{value:"Adjusting size",depth:3},{value:"PopoverButton",depth:3},{value:"PopoverBadgeButton",depth:3},{value:"PopoverFormPillButton",depth:3},{value:"Using state hooks",depth:3},{value:"Internationalization",depth:3},{value:"Composition notes",depth:2},{value:"Do and don't",depth:2}],W=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},U={meta:H,getStaticProps:_,mdxHeadings:G},$=O.A;function Y({components:e,...o}){return(0,a.yg)($,{...U,...o,components:e,mdxType:"MDXLayout"},(0,a.yg)(W,{scope:{Popover:r.AM,PopoverContainer:r.de,PopoverButton:r.ut,Text:f.EY,Heading:v.D,Separator:b.w,Button:s.$n},noInline:!0,mdxType:"LivePreview"},I),(0,a.yg)("h2",null,"Guidelines"),(0,a.yg)("h3",null,"About Popover"),(0,a.yg)("p",null,"The Popover component can be used for displaying supplemental or contextual interactive content over your UI. It is built on top of our ",(0,a.yg)("a",{parentName:"p",href:"/primitives/non-modal-dialog-primitive/#about-non-modal-dialog-primitive"},"Non-modal Dialog primitive"),". A Popover can contain a wide variety of information and interactive content and does not block the user from interacting with the rest of the page."),(0,a.yg)("p",null,"Popovers remain actively open until a user dismisses it in one of the following ways:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Presses the Esc key"),(0,a.yg)("li",{parentName:"ul"},'Presses the close "x" button in the Popover'),(0,a.yg)("li",{parentName:"ul"},'Presses a "Cancel" button in in the Popover'),(0,a.yg)("li",{parentName:"ul"},"Clicks outside of the Popover"),(0,a.yg)("li",{parentName:"ul"},"Performs another action that closes the Popover")),(0,a.yg)("h3",null,"Accessibility"),(0,a.yg)("p",null,"Popovers and non-modal dialogs follow these accessibility guidelines:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A Popover must be triggered by an explicit user action, e.g., clicking a button."),(0,a.yg)("li",{parentName:"ul"},"It must contain at least one focusable element, usually the close button."),(0,a.yg)("li",{parentName:"ul"},"There should be a close button so screen readers have a specific close action to target."),(0,a.yg)("li",{parentName:"ul"},`When a Popover is shown, focus is placed inside it, as it is a focus trap. A user cannot tab outside of the Popover until it is closed. After the Popover is closed, focus is placed back on the element that triggered it. Focus doesn’t return to the page until the user closes the Popover.`),(0,a.yg)("li",{parentName:"ul"},"The Popover should be labeled:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Setting a value for the aria-labelledby property that refers to a visible Heading within the Popover ."),(0,a.yg)("li",{parentName:"ul"},"Providing a label directly specifying by aria-label attribute on the Popover.")))),(0,a.yg)("h3",null,"Popover vs. Tooltip"),(0,a.yg)("h4",null,"Differences"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Popovers allow for much more dynamic content than Tooltips. They can display additional content that can contain interactive elements, like Buttons or Anchors. It is not possible to add interactivity inside a Tooltip. This is because a user cannot focus within a Tooltip; the content of the Tooltip is only visible when the trigger is hovered or focused."),(0,a.yg)("li",{parentName:"ol"},"A Popover is opened on Click or Enter. A Tooltip is opened on Hover or Focus.")),(0,a.yg)("h4",null,"Usage"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If you want to provide a concise description of how or what an interactive element in your UI does, use a Tooltip."),(0,a.yg)("li",{parentName:"ul"},"For displaying rich content or interactive elements, such as headings, anchors, or buttons, use a Popover.")),(0,a.yg)("p",null,"For additional information on Tooltips, ",(0,a.yg)("a",{parentName:"p",href:"https://inclusive-components.design/tooltips-toggletips/"},`check out Heydon Pickering’s Inclusive Components guidance`),"."),(0,a.yg)(p.az,{marginBottom:"space70",mdxType:"Box"},(0,a.yg)(l.g,{ratio:"16:9",mdxType:"AspectRatio"},(0,a.yg)("iframe",{src:"https://www.loom.com/embed/f70204bd8a4f4f21a5b1ded17f4559d1",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowfullscreen:!0}))),(0,a.yg)("h3",null,"Popover vs. Modal"),(0,a.yg)("p",null,`A Modal is a dialog that overlays the entire page. They can display interactive content, and place the users into a “mode” for inputting or reviewing information. It temporarily changes the user’s context for a more focused experience. We recommend using Modals to present critical information or request required input needed to complete a workflow instead of a Popover.`),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For displaying contextual content, use a Popover. Popover content should be contextual to the page and be optional or supplementary. It should also be concise. For longer pieces of content, consider using a Modal instead."),(0,a.yg)("li",{parentName:"ul"},`For a temporary change of context, use a Modal. Modals serve to place users into a “mode” or focused state for more complex interactions, inputting information, or displaying critical information.`),(0,a.yg)("li",{parentName:"ul"},"For displaying a series of steps that ask for user input or forms, use a modal over a Popover.")),(0,a.yg)("hr",null),(0,a.yg)("h2",null,"Examples"),(0,a.yg)("h3",null,"Basic Popover"),(0,a.yg)("p",null,"Use a Popover to display supplemental information and interactive controls."),(0,a.yg)(W,{scope:{Popover:r.AM,PopoverContainer:r.de,PopoverButton:r.ut,Text:f.EY,Heading:v.D,Separator:b.w,Button:s.$n},noInline:!0,mdxType:"LivePreview"},I),(0,a.yg)("h3",null,"Popover with interactive content"),(0,a.yg)("p",null,"The benefit of using a Popover is its ability to display interactive content to help provide additional information or functionality to your UI. It can essentially contain anything, like links, buttons, images, or headings."),(0,a.yg)(W,{scope:{Popover:r.AM,PopoverContainer:r.de,PopoverButton:r.ut,Heading:v.D,Button:s.$n,ButtonGroup:d.e,Paragraph:y.f,CheckboxGroup:c.$Q,Checkbox:c.Sc,Box:p.az},noInline:!0,mdxType:"LivePreview"},E),(0,a.yg)("h3",null,"Setting initial focus"),(0,a.yg)("p",null,"When a user opens a Popover, the focus is set inside the Popover. By default, user focus is set on the first focusable element, which is the close button. You can choose to explicitly set focus to any focusable UI control inside the Popover."),(0,a.yg)("p",null,"We recommend the following when adjusting the focus:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},`We caution against setting the focus on an element that does a non-reversible action, in case a user accidentally selects it. (e.g. an “Agree” button that a user hits by mistake, thinking they were exiting the Popover.)`),(0,a.yg)("li",{parentName:"ul"},"Changing the focus placement away from the close button could aid in more efficient in-context editing (e.g. the first text input).")),(0,a.yg)("p",null,"To set a different initial focus target, set the ",(0,a.yg)("inlineCode",{parentName:"p"},"initialFocusRef")," prop on the Popover component to a ref of a focusable element inside the Popover."),(0,a.yg)(W,{scope:{Popover:r.AM,PopoverContainer:r.de,PopoverButton:r.ut,Heading:v.D,Button:s.$n,Input:m.p,Select:P.l6,Option:P.c$,Label:g.J,Form:u.lV,FormActions:u.IY,FormControl:u.MJ,useUIDSeed:B.nu},noInline:!0,mdxType:"LivePreview"},k),(0,a.yg)("h3",null,"Controlling placement"),(0,a.yg)("p",null,"Use the placement prop to configure where to position the Popover in relation to its trigger. The available placement options are available in the ",(0,a.yg)("a",{parentName:"p",href:"#popover-container"},"props description here"),"."),(0,a.yg)(W,{scope:{Popover:r.AM,PopoverContainer:r.de,PopoverButton:r.ut,Text:f.EY,Box:p.az},noInline:!0,mdxType:"LivePreview"},A),(0,a.yg)("h3",null,"Adjusting size"),(0,a.yg)("p",null,"The Popover's width will grow to fit its content up to a maximum width of our size50 token. To set the size of the Popover, set a ",(0,a.yg)("inlineCode",{parentName:"p"},"width")," prop. It will accept any valid size token up to size50."),(0,a.yg)(W,{scope:{Popover:r.AM,PopoverContainer:r.de,PopoverButton:r.ut,Heading:v.D,Button:s.$n,Input:m.p,Select:P.l6,Option:P.c$,Label:g.J,Form:u.lV,FormActions:u.IY,FormControl:u.MJ,useUIDSeed:B.nu,Box:p.az},noInline:!0,mdxType:"LivePreview"},R),(0,a.yg)("h3",null,"PopoverButton"),(0,a.yg)("p",null,"The PopoverButton renders a Button component and accepts all of its props, which are listed ",(0,a.yg)("a",{parentName:"p",href:"/components/button#props"},"on the Button page"),"."),(0,a.yg)(W,{scope:{Box:p.az,PlusIcon:x.PlusIcon,Popover:r.AM,PopoverContainer:r.de,PopoverButton:r.ut,Text:f.EY},noInline:!0,mdxType:"LivePreview"},z),(0,a.yg)("h3",null,"PopoverBadgeButton"),(0,a.yg)("p",null,"To launch a Popover from a Badge component, use the PopoverBadgeButton component. It renders a Badge and accepts all of its props except for ",(0,a.yg)("inlineCode",{parentName:"p"},"as"),", which are listed ",(0,a.yg)("a",{parentName:"p",href:"/components/badge#props"},"on the Badge page"),"."),(0,a.yg)(W,{scope:{Box:p.az,Popover:r.AM,PopoverContainer:r.de,PopoverBadgeButton:r.Fy,Text:f.EY,NewIcon:C.NewIcon,InformationIcon:T.InformationIcon,WarningIcon:w.WarningIcon},noInline:!0,mdxType:"LivePreview"},D),(0,a.yg)("h3",null,"PopoverFormPillButton"),(0,a.yg)("p",null,"This component should ",(0,a.yg)("strong",{parentName:"p"},"only be used as part of the ",(0,a.yg)("a",{parentName:"strong",href:"/patterns/filter"},"filter pattern")),". It renders a FormPill and accepts all of its props, which are listed ",(0,a.yg)("a",{parentName:"p",href:"/components/form-pill-group#basic"},"on the Form Pill Group page"),"."),(0,a.yg)(W,{scope:{Box:p.az,Popover:r.AM,PopoverContainer:r.de,PopoverFormPillButton:r.pr,FormPillGroup:h.FD,useFormPillState:h.c8,useState:n.useState,Button:s.$n,useUID:B.GV},noInline:!0,mdxType:"LivePreview"},S),(0,a.yg)("h3",null,"Using state hooks"),(0,a.yg)("p",null,`Popover comes with the option of "hooking" into the internal state by using the state hook originally provided by
`,(0,a.yg)("a",{parentName:"p",href:"https://reakit.io/docs/popover/#usepopoverstate"},"Reakit"),"."),(0,a.yg)("p",null,"Rather than the state be internal to the component, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"usePopoverState"),` hook and pass the returned state
to `,(0,a.yg)("inlineCode",{parentName:"p"},"PopoverContainer")," as the ",(0,a.yg)("inlineCode",{parentName:"p"},"state")," prop."),(0,a.yg)("p",null,"This allows you to use certain returned props from the state hook, including functions like ",(0,a.yg)("inlineCode",{parentName:"p"},"hide")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"show"),"."),(0,a.yg)("p",null,`An example usecase of this might be programmatically providing the user a popover when a certain user action is taken.
In the example below we are showing a popover when another button is pressed. When pressed the button uses the `,(0,a.yg)("inlineCode",{parentName:"p"},"show"),`
function from the hook. Another button using the `,(0,a.yg)("inlineCode",{parentName:"p"},"hide"),` function from the hook is also provided to hide the popover
when pressed.`),(0,a.yg)("p",null,`It should be noted that when doing so, the state prop takes precedent over the other properties that affect
the state or initial state of the Popover. They will be ignored in favour of them being provided as arguments
to the usePopoverState hook.`),(0,a.yg)("p",null,`For full details on how to use the state hook, and what props to provide it, follow the
`,(0,a.yg)("a",{parentName:"p",href:"/primitives/non-modal-dialog-primitive"},"Non-Modal Dialog Primitive documentation"),". It's the same hook, just renamed."),(0,a.yg)(W,{scope:{usePopoverState:i.aH,Popover:r.AM,PopoverContainer:r.de,PopoverButton:r.ut,Text:f.EY,Box:p.az,Button:s.$n},noInline:!0,language:"jsx",mdxType:"LivePreview"},N),(0,a.yg)("h3",null,"Internationalization"),(0,a.yg)("p",null,"To internationalize the Popover, pass different text as children to the Popover's contents and the ",(0,a.yg)("inlineCode",{parentName:"p"},"aria-label"),` prop. The only exception is the dismiss button. To change the dismiss button’s text, use the `,(0,a.yg)("inlineCode",{parentName:"p"},"i18nDismissLabel")," prop."),(0,a.yg)(W,{scope:{Popover:r.AM,PopoverContainer:r.de,PopoverButton:r.ut,Text:f.EY},noInline:!0,mdxType:"LivePreview"},F),(0,a.yg)("hr",null),(0,a.yg)("h2",null,"Composition notes"),(0,a.yg)("p",null,"Use a Popover to present supplemental information with interactive elements, like an ",(0,a.yg)("a",{parentName:"p",href:"/components/anchor"},"Anchor"),". Information in a Popover should never be essential to task completion."),(0,a.yg)("p",null,"Popover content should use full sentences and punctuation. Titles are optional."),(0,a.yg)("h2",null,"Do and don't"),(0,a.yg)(L.l,{mdxType:"DoDont"},(0,a.yg)(L.Do,{title:"Do",body:"Use Popover when you need to display supplemental interactive content over the top of your UI. It should have at least one focusable element.",mdxType:"Do"}),(0,a.yg)(L.w,{title:"Don't",body:"Don’t present critical information or required inputs in Popovers, use the Modal instead.",mdxType:"Dont"})),(0,a.yg)(L.l,{mdxType:"DoDont"},(0,a.yg)(L.Do,{title:"Do",body:"Use Popover to present additional contextual information that is not essential to completing a task.",mdxType:"Do"}),(0,a.yg)(L.w,{title:"Don't",body:"After the Popover closes, don’t change the focus placement from the trigger. If focus is moved from the original trigger, it can cause confusion and frustration for where a keyboard user’s location is on the page.",mdxType:"Dont"})),(0,a.yg)(L.l,{mdxType:"DoDont"},(0,a.yg)(L.Do,{title:"Do",body:"When the Popover is triggered, the focus should be placed on the first focusable element, which is usually the close button.",mdxType:"Do"}),(0,a.yg)(L.w,{title:"Don't",body:"Don’t place Popovers on non-focusable elements, like an icon. Wrap them in a focusable element and place the Popover on that.",mdxType:"Dont"})),(0,a.yg)(L.l,{mdxType:"DoDont"},(0,a.yg)(L.Do,{title:"Do",body:"Popovers should be triggered by a button.",mdxType:"Do"}),(0,a.yg)(L.w,{title:"Don't",body:"Don’t place more than one primary action in a Popover.",mdxType:"Dont"})),(0,a.yg)(L.l,{mdxType:"DoDont"},(0,a.yg)(L.Do,{title:"Do",body:"Consider the best size (up to size50) for the Popover container, based on its content. ",mdxType:"Do"}),(0,a.yg)(L.w,{title:"Don't",body:"Don’t use a Popover to guide users through a complex workflow with a series of steps or for presenting critical information. Use a Modal for workflows, and an Alert Dialog for critical information.",mdxType:"Dont"})),"import ",n.useState,' from "react"')}Y.isMDXComponent=!0},81423:(e,o,t)=>{"use strict";t.r(o),t.d(o,{MinusIcon:()=>i});var n=t(36669),a=t(55729),r=t(96316);let i=a.forwardRef(({as:e,display:o,element:t="ICON",size:i,color:l,title:p,decorative:s},d)=>{let c=`MinusIcon-${(0,n.GV)()}`;if(!s&&null==p)throw Error("[MinusIcon]: Missing a title for non-decorative icon.");return a.createElement(r.IconWrapper,{as:e,display:o,element:t,size:i,color:l,ref:d},a.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},p?a.createElement("title",{id:c},p):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.167 9.5c.46 0 .833.448.833 1 0 .513-.322.936-.736.993l-.097.007H5.833c-.46 0-.833-.448-.833-1 0-.513.322-.936.736-.993l.097-.007h8.334z"})))});i.displayName="MinusIcon"},81724:(e,o,t)=>{"use strict";t.d(o,{c$:()=>l,l6:()=>d,zQ:()=>p});var n=t(76127),a=t(55729),r=t(92980),i=t(34280),l=a.forwardRef(({children:e,element:o="OPTION",...t},r)=>(t.selected&&console.warn('"selected" is a blocked prop on this component, please use "value" on the select element.'),a.createElement(n.az,{as:"option",ref:r,...(0,n.x8)(t),element:o,size:void 0,height:void 0,width:void 0,backgroundColor:"inherit",color:"inherit",fontFamily:"inherit",lineHeight:"lineHeight50",paddingTop:"space30",paddingBottom:"space30",paddingLeft:"space20"},e)));l.displayName="Option";var p=a.forwardRef(({label:e,children:o,element:t="OPTION_GROUP",...r},i)=>a.createElement(n.az,{ref:i,label:e,...(0,n.x8)(r),element:t,as:"optgroup",backgroundColor:"inherit",color:"inherit",fontFamily:"inherit",fontWeight:"fontWeightMedium",fontStyle:"normal",margin:"space20"},o));p.displayName="OptionGroup";var s=a.forwardRef(({element:e="SELECT_ELEMENT",variant:o,size:t,...r},i)=>a.createElement(n.az,{...(0,n.x8)(r),element:e,as:"select",ref:i,size:t,height:void 0,appearance:"none",backgroundColor:"inverse"===o?"colorBackgroundInverse":"colorBackgroundBody",border:"none",borderRadius:"borderRadius30",boxShadow:"none",color:"inherit",cursor:"pointer",display:"block",fontFamily:"inherit",fontSize:"fontSize30",fontWeight:"fontWeightMedium",lineHeight:"lineHeight20",margin:"space0",outline:"none",paddingBottom:"space30",paddingLeft:"space40",paddingRight:"space100",paddingTop:"space30",resize:"none",width:"100%",_disabled:{color:"inverse"===o?"colorTextInverseWeakest":"colorTextWeaker",backgroundColor:"transparent",cursor:"not-allowed",opacity:1},variant:o}));s.displayName="SelectElement";var d=a.forwardRef(({disabled:e,element:o="SELECT",hasError:t,insertBefore:l,insertAfter:p,children:d,size:c,multiple:u,variant:h="default",...v},m)=>{let[g,y]=a.useState(!1);return a.useEffect(()=>{y(!0)},[]),a.createElement(i.cl,{disabled:e,element:o,hasError:t,insertAfter:p,insertBefore:l,variant:h},a.createElement(n.az,{display:"flex",width:"100%",position:"relative"},g?a.createElement(s,{"aria-invalid":t,"data-not-selectize":"true",disabled:e,ref:m,element:`${o}_ELEMENT`,...v,multiple:u,size:u?c:0,variant:h,key:"mounted"},d):a.createElement(s,{key:"unmounted",variant:h}),!u&&a.createElement(i.JO,{element:`${o}_CHEVRON_WRAPPER`},a.createElement(r.ChevronDownIcon,{"aria-hidden":"true",decorative:!0,element:`${o}_ICON`,color:(0,i.YN)(h,e,!1),size:"sizeIcon30"}))))});d.displayName="Select"},83889:(e,o,t)=>{"use strict";t.r(o),t.d(o,{InformationIcon:()=>i});var n=t(36669),a=t(55729),r=t(96316);let i=a.forwardRef(({as:e,display:o,element:t="ICON",size:i,color:l,title:p,decorative:s},d)=>{let c=`InformationIcon-${(0,n.GV)()}`;if(!s&&null==p)throw Error("[InformationIcon]: Missing a title for non-decorative icon.");return a.createElement(r.IconWrapper,{as:e,display:o,element:t,size:i,color:l,ref:d},a.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},p?a.createElement("title",{id:c},p):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 2a8 8 0 110 16 8 8 0 010-16zm0 1.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM10 9a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z"})))});i.displayName="InformationIcon"},98536:(e,o,t)=>{"use strict";t.r(o),t.d(o,{CheckboxCheckIcon:()=>i});var n=t(36669),a=t(55729),r=t(96316);let i=a.forwardRef(({as:e,display:o,element:t="ICON",size:i,color:l,title:p,decorative:s},d)=>{let c=`CheckboxCheckIcon-${(0,n.GV)()}`;if(!s&&null==p)throw Error("[CheckboxCheckIcon]: Missing a title for non-decorative icon.");return a.createElement(r.IconWrapper,{as:e,display:o,element:t,size:i,color:l,ref:d},a.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},p?a.createElement("title",{id:c},p):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.59 5.916a1.386 1.386 0 00-1.98 0l-5.04 5.138L6.39 8.83a1.38 1.38 0 00-1.98 0 1.448 1.448 0 000 2.018l3.171 3.233a1.382 1.382 0 001.98 0l6.03-6.148a1.448 1.448 0 000-2.018z"})))});i.displayName="CheckboxCheckIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,8921,636,6593,8792],()=>e(e.s=48346)),_N_E=e.O()}]);