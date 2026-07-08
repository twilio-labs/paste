(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4962],{4990:(e,a,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio-group",function(){return o(9307)}])},9307:(e,a,o)=>{"use strict";o.r(a),o.d(a,{__N_SSG:()=>f,default:()=>N,getStaticProps:()=>x,mdxHeadings:()=>C,meta:()=>k}),o(55729);var t=o(11885),r=o(41621),i=o(76127),n=o(33359),l=o(36669),d=o(50010);let s=`
const CampaignRadioGroup = () => {
  const [value, setValue] = React.useState();
  return (
    <RadioGroup
      name="campaign"
      value={value}
      legend="When should your campaign run?"
      helpText="We recommend at least two weeks."
      onChange={newValue => {
        setValue(newValue);
      }}
    >
      <Radio
        id="ongoing"
        value="ongoing"
        name="campaign"
      >
        Run my ads as ongoing
      </Radio>
      <Radio
        id="enddate"
        value="enddate"
        name="campaign"
      >
        Set a start and end date
      </Radio>
    </RadioGroup>
  );
};

render(
  <CampaignRadioGroup />
)
`.trim(),u=`
const AccountRadioGroup = () => {
  const [value, setValue] = React.useState('accountSid');
  return (
    <RadioGroup
      name="account"
      value={value}
      legend="How should we identify your account?"
      onChange={newValue => {
        setValue(newValue);
      }}
    >
      <Radio
        id="accountSid"
        value="accountSid"
        name="account"
      >
        Account SID
      </Radio>
      <Radio
        id="messageSid"
        value="messageSid"
        name="account"
      >
        Message SID
      </Radio>
    </RadioGroup>
  );
};

render(
  <AccountRadioGroup />
)
`.trim(),c=`
const PaymentMethodRadioGroup = () => {
  const [value, setValue] = React.useState('credit');
  return (
    <RadioGroup
      name="payment"
      value={value}
      legend="Select payment method"
      onChange={newValue => {
        setValue(newValue);
      }}
      orientation="horizontal"
    >
      <Radio
        id="credit"
        value="credit"
        name="payment"
      >
        Credit Card
      </Radio>
      <Radio
        id="paypal"
        value="paypal"
        name="payment"
      >
        PayPal
      </Radio>
    </RadioGroup>
  );
};

render(
  <PaymentMethodRadioGroup />
)
`.trim(),p=`
const NetworkRadioGroup = () => {
  const [value, setValue] = React.useState('lowest');
  return (
    <RadioGroup
      name="network"
      value={value}
      legend="Choose Network Access Profile"
      helpText="Network Access Profile specifies what networks your SIM's would connect to and how you will be billed."
      onChange={newValue => {
        setValue(newValue);
      }}
    >
      <Radio
        id="lowest"
        value="lowest"
        name="network"
      >
        Select lowest priced networks globally
      </Radio>
      <Radio
        id="existing"
        value="existing"
        name="network"
      >
        Select existing network access profile
      </Radio>
      <Radio
        id="new"
        value="new"
        name="network"
      >
        Create new network access profile
      </Radio>
    </RadioGroup>
  );
};

render(
  <NetworkRadioGroup />
)
`.trim(),g=`
const DateRadioGroup = () => {
  const [value, setValue] = React.useState('lowest');
  return (
    <RadioGroup
      name="date"
      value={value}
      legend="Select date"
      onChange={newValue => {
        setValue(newValue);
      }}
    >
      <Radio
        id="today"
        value="today"
        name="date"
      >
        Today
      </Radio>
      <Radio
        id="last-15-days"
        value="last-15-days"
        name="date"
      >
        Last 15 days
      </Radio>
      <Radio
        id="last-month"
        value="last-month"
        name="date"
      >
        Last month
      </Radio>
      <Radio
        id="custom"
        value="custom"
        name="date"
      >
        <Box display="flex" columnGap="space30">Custom <Badge variant="success" size="small">Premium</Badge></Box>
      </Radio>
    </RadioGroup>
  );
};

render(
  <DateRadioGroup />
)
`.trim(),h=`
const SslRadioGroup = () => {
  const [value, setValue] = React.useState('on');
  return (
    <RadioGroup
      name="ssl"
      value={value}
      legend="SSL Certificate Validation"
      helpText="Determines if certificate validation is performed on all Twilio originated requests."
      onChange={newValue => {
        setValue(newValue);
      }}
      required
    >
      <Radio
        id="on"
        value="on"
        name="ssl"
      >
        Validation on
      </Radio>
      <Radio
        id="off"
        value="off"
        name="ssl"
      >
        Validation off
      </Radio>
    </RadioGroup>
  );
};

render(
  <SslRadioGroup />
)
`.trim(),m=`
const CriteriaRadioGroup = () => {
  const [value, setValue] = React.useState();
  return (
    <RadioGroup
      name="exit"
      value={value}
      legend="Exit Criteria"
      errorText="Select an exit criteria."
      onChange={newValue => {
        setValue(newValue);
      }}
    >
      <Radio
        id="automation"
        value="automation"
        name="exit"
      >
        Contact have received all emails in the automation.
      </Radio>
      <Radio
        id="entry"
        value="entry"
        name="exit"
      >
        Contacts no longer meet entry criteria
      </Radio>
    </RadioGroup>
  );
};

render(
  <CriteriaRadioGroup />
)
`.trim(),y=`
const DisabledRadio = () => {
  const [value, setValue] = React.useState('disabled_automation');
  return (
    <RadioGroup
      name="disabled_exit"
      value={value}
      legend="Exit Criteria"
      onChange={newValue => {
        setValue(newValue);
      }}
      disabled
    >
      <Radio
        id="disabled_automation"
        value="disabled_automation"
        name="disabled_exit"
      >
        Contact have received all emails in the automation.
      </Radio>
      <Radio
        id="disabled_entry"
        value="disabled_entry"
        name="disabled_exit"
      >
        Contacts no longer meet entry criteria
      </Radio>
    </RadioGroup>
  );
};

render(
  <DisabledRadio />
)
`.trim(),v=`
const PaymentMethodRadioGroup = () => {
  const [value, setValue] = React.useState('credit');
  return (
    <RadioGroup
      name="payment"
      value={value}
      legend="Choisissez votre mode de paiement"
      onChange={newValue => {
        setValue(newValue);
      }}
      required
      i18nRequiredLabel="(requis)"
    >
      <Radio
        id="credit"
        value="credit"
        name="payment"
      >
        Carte de cr\xe9dit
      </Radio>
      <Radio
        id="paypal"
        value="paypal"
        name="payment"
      >
        PayPal
      </Radio>
    </RadioGroup>
  );
};

render(
  <PaymentMethodRadioGroup />
)
`.trim(),R=`
const NetworkRadioGroup = () => {
  return (
    <RadioGroup
      name="uncontrolled-radio-group"
      legend="Choose Network Access Profile"
      helpText="Network Access Profile specifies what networks your SIM's would connect to and how you will be billed."
    >
      <Radio
        id={useUID()}
        value="lowest"
        name="uncontrolled-radio-group"
      >
        Select lowest priced networks globally
      </Radio>
      <Radio
        id={useUID()}
        value="existing"
        name="uncontrolled-radio-group"
      >
        Select existing network access profile
      </Radio>
      <Radio
        id={useUID()}
        value="new"
        name="uncontrolled-radio-group"
        defaultChecked
      >
        Create new network access profile
      </Radio>
    </RadioGroup>
  );
};

render(
  <NetworkRadioGroup />
)
`.trim(),b=`
const NetworkRadioGroup = () => {
  const [value, setValue] = React.useState('lowest');
  return (
    <RadioGroup
      name="controlled-radio-group"
      legend="Choose Network Access Profile"
      helpText="Network Access Profile specifies what networks your SIM's would connect to and how you will be billed."
      value={value}
      onChange={newValue => {
        setValue(newValue);
      }}
    >
      <Radio
        id={useUID()}
        value="lowest"
        name="controlled-radio-group"
      >
        Select lowest priced networks globally
      </Radio>
      <Radio
        id={useUID()}
        value="existing"
        name="controlled-radio-group"
      >
        Select existing network access profile
      </Radio>
      <Radio
        id={useUID()}
        value="new"
        name="controlled-radio-group"
      >
        Create new network access profile
      </Radio>
    </RadioGroup>
  );
};

render(
  <NetworkRadioGroup />
)
`.trim();var w=o(40615),f=!0;let k={title:"Radio Group - Components",package:"@twilio-paste/radio-group",description:"A radio group is used for selecting a single choice from a list of at least two options. The user can only select one radio option at a time.",slug:"/components/radio-group/"},x=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:C,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/radio-group",storybookUrl:"/?path=/story/components-radio--radio-default"}}}),C=[{value:"Guidelines",depth:2},{value:"About Radio Group",depth:3},{value:"Best practices",depth:4},{value:"Accessibility",depth:3},{value:"Controlled vs. uncontrolled RadioGroup",depth:2},{value:"Examples",depth:2},{value:"Vertically-stacked Radio Group",depth:3},{value:"Pre-selected value",depth:3},{value:"With Help Text",depth:3},{value:"With suffix",depth:3},{value:"Required usage",depth:3},{value:"Horizontal alignment",depth:3},{value:"Internationalization",depth:3},{value:"States",depth:2},{value:"Disabled",depth:3},{value:"Checked and disabled",depth:3},{value:"Disabled group",depth:3},{value:"Group error",depth:3},{value:"Individual error",depth:3},{value:"Composition notes",depth:2},{value:"Validation",depth:3}],T=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)},S={meta:k,getStaticProps:x,mdxHeadings:C},E=w.A;function N({components:e,...a}){return(0,t.yg)(E,{...S,...a,components:e,mdxType:"MDXLayout"},(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6,useUID:l.GV},noInline:!0,mdxType:"LivePreview"},R),(0,t.yg)("h2",null,"Guidelines"),(0,t.yg)(d.f,{mdxType:"Paragraph"},k.description),(0,t.yg)("h3",null,"About Radio Group"),(0,t.yg)("p",null,"Radio groups are used when a user must make a single choice from two or more options. The user can only choose one radio selection at a time."),(0,t.yg)("p",null,"Radio groups should:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Include at least two or more options."),(0,t.yg)("li",{parentName:"ul"},"Allow users to select only one option."),(0,t.yg)("li",{parentName:"ul"},"Include at most 6 options. If there's a chance the Radio might later expand to include more than 6 options, use a ",(0,t.yg)("a",{parentName:"li",href:"/components/select"},"Select")," instead."),(0,t.yg)("li",{parentName:"ul"},"List options in an order that is contextual.")),(0,t.yg)("h4",null,"Best practices"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Avoid nesting radio buttons within other radio buttons."),(0,t.yg)("li",{parentName:"ul"},'If an option is strongly recommended, add "(Recommended)" to the label. Be sure to add it to the label, not the help text.'),(0,t.yg)("li",{parentName:"ul"},"Use the same name attribute on all radio buttons in the group. This ensures that if there is more than one group in the form, each one stays associated with its own group"),(0,t.yg)("li",{parentName:"ul"},`If a radio group is “Optional”, users won't be able to unselect a selected radio. If you need to give users a way to unselect, consider adding a clear button or using another type of form field.`)),(0,t.yg)("h3",null,"Accessibility"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"A radio group must have a visible label that is in close proximity to the control."),(0,t.yg)("li",{parentName:"ul"},"HTML radio groups don't natively support the ",(0,t.yg)("inlineCode",{parentName:"li"},"required")," attribute. If a radio must be checked, display a required indicator."),(0,t.yg)("li",{parentName:"ul"},"Display error messages in an inline error below the radio group that clearly describes the error."),(0,t.yg)("li",{parentName:"ul"},"Radio groups act as a single tab stop. When focused on a radio, use the arrow keys to navigate to the other radios.")),(0,t.yg)("h2",null,"Controlled vs. uncontrolled RadioGroup"),(0,t.yg)("p",null,"The radio and radio group components can either be controlled, meaning there is an external state that determines if it is checked, or uncontrolled, meaning the component manages its own state."),(0,t.yg)("p",null,"To make an uncontrolled radio group, do not pass the ",(0,t.yg)("inlineCode",{parentName:"p"},"value")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"onChange")," props. To check the radio by default, use the ",(0,t.yg)("inlineCode",{parentName:"p"},"defaultChecked")," prop."),(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6,useUID:l.GV},noInline:!0,mdxType:"LivePreview"},R),(0,t.yg)("p",null,"To make a controlled radio group, pass the ",(0,t.yg)("inlineCode",{parentName:"p"},"value")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"onChange")," props."),(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6,useUID:l.GV},noInline:!0,mdxType:"LivePreview"},b),(0,t.yg)("h2",null,"Examples"),(0,t.yg)("h3",null,"Vertically-stacked Radio Group"),(0,t.yg)("p",null,"The vertically-stacked Radio Group is the easiest for users to scan, in particular if labels are more than 3 words. Use the vertical stack if the list wraps to two lines."),(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6},noInline:!0,mdxType:"LivePreview"},s),(0,t.yg)("h3",null,"Pre-selected value"),(0,t.yg)("p",null,"By default, the Radio Group component doesn't apply a pre-selected value."),(0,t.yg)("p",null,"Apply a pre-selected value only if:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The default value is a safe, secure, and reversible option, and you're willing to collect biased data. Defaulting to a value biases or alters the experience so that your data may be skewed."),(0,t.yg)("li",{parentName:"ul"},"The user doesn't need to make an explicit choice for safety, security, or legal reasons.")),(0,t.yg)("p",null,"For additional guidance on whether to use a default selection, check out ",(0,t.yg)("a",{parentName:"p",href:"https://www.nngroup.com/articles/radio-buttons-default-selection/"},"this article from the Nielsen Norman Group"),"."),(0,t.yg)("p",null,"If you do apply a pre-selected value, make the first option the default option."),(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6},noInline:!0,mdxType:"LivePreview"},u),(0,t.yg)("h3",null,"With Help Text"),(0,t.yg)("p",null,"Use the ",(0,t.yg)("inlineCode",{parentName:"p"},"helpText")," prop, rather than the ",(0,t.yg)("a",{parentName:"p",href:"/components/help-text"},"Help Text"),' component, to provide information that helps users understand the radio options. Avoid using help text to tell users how to use the component (for example, "Select an option.").'),(0,t.yg)("p",null,"Help text appears after the group label but before the first radio option."),(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6},noInline:!0,mdxType:"LivePreview"},p),(0,t.yg)("h3",null,"With suffix"),(0,t.yg)("p",null,"You can provide additional information about an individual item by adding a non-string element as a suffix. The suffix can be any non-string element that is not interactive."),(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6,Box:i.az,Badge:n.Ex},noInline:!0,mdxType:"LivePreview"},g),(0,t.yg)("h3",null,"Required usage"),(0,t.yg)("p",null,"Use the required dot to denote a required field. The required dot appears before the fieldset legend."),(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6},noInline:!0,mdxType:"LivePreview"},h),(0,t.yg)("h3",null,"Horizontal alignment"),(0,t.yg)("p",null,"Use horizontal alignment sparingly, as the options are harder to scan. Use labels that are 3 words or less, or less than 20 characters."),(0,t.yg)("p",null,"Place options next to each other with appropriate spacing. Avoid letting options run onto two lines."),(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6},noInline:!0,mdxType:"LivePreview"},c),(0,t.yg)("h3",null,"Internationalization"),(0,t.yg)("p",null,"To internationalize a radio group, pass different text as children to the radios. The only exception to this is the required dot in the legend of a required radio group. To change the required dot's text, use the ",(0,t.yg)("inlineCode",{parentName:"p"},"i18nRequiredLabel")," prop."),(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6},noInline:!0,mdxType:"LivePreview"},v),(0,t.yg)("h2",null,"States"),(0,t.yg)("h3",null,"Disabled"),(0,t.yg)(T,{scope:{Radio:r.sx},language:"jsx",mdxType:"LivePreview"},`<>
  <Radio id="option" value="option" name="option" disabled>
    Option 1
  </Radio>
</>`),(0,t.yg)("h3",null,"Checked and disabled"),(0,t.yg)(T,{scope:{Radio:r.sx},language:"jsx",mdxType:"LivePreview"},`<>
  <Radio id="option" value="option" name="option" checked disabled>
    Option 2
  </Radio>
</>`),(0,t.yg)("h3",null,"Disabled group"),(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6},noInline:!0,mdxType:"LivePreview"},y),(0,t.yg)("h3",null,"Group error"),(0,t.yg)("p",null,"If the selected items don't pass the group validation requirements, use ",(0,t.yg)("a",{parentName:"p",href:"/components/help-text"},"Help Text")," to show an inline error message below the group."),(0,t.yg)("p",null,"For required field errors, consider the following formats depending on the use case:"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Situation"),(0,t.yg)("th",{parentName:"tr",align:null},"Recommended phrasing"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"When the option being selected is not a noun"),(0,t.yg)("td",{parentName:"tr",align:null},"Select an option.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"When the option to be selected is a noun"),(0,t.yg)("td",{parentName:"tr",align:null},"Select a ","[noun in group label]",".")))),(0,t.yg)("p",null,"For additional guidance on how to compose error messages, refer to the ",(0,t.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,t.yg)(T,{scope:{Radio:r.sx,RadioGroup:r.z6},noInline:!0,mdxType:"LivePreview"},m),(0,t.yg)("h3",null,"Individual error"),(0,t.yg)(T,{scope:{Radio:r.sx},language:"jsx",mdxType:"LivePreview"},`<>
  <Radio id="criteria" value="criteria" name="criteria" checked hasError>
    Contacts no longer meet entry criteria
  </Radio>
</>`),(0,t.yg)("h2",null,"Composition notes"),(0,t.yg)("p",null,"Start all options with a capital letter."),(0,t.yg)("p",null,"Avoid using periods with radio option text, even if it's a sentence."),(0,t.yg)("p",null,"If using ",(0,t.yg)("a",{parentName:"p",href:"/components/help-text"},"Help Text")," for radio options, include it for each option."),(0,t.yg)("h3",null,"Validation"),(0,t.yg)("p",null,"Validate the group on form submission. Don't validate each item in the group, treat validation on the group as a whole."))}N.isMDXComponent=!0},22275:(e,a,o)=>{"use strict";o.d(a,{a:()=>l});var t=o(76127),r=o(8909),i=o(86146),n=o(55729),l=n.forwardRef(({children:e,disabled:a,element:o="INLINE_CONTROL_GROUP",errorText:l,helpText:d,legend:s,orientation:u="vertical",required:c,i18nRequiredLabel:p,fieldStyleProps:g,...h},m)=>{let y=!!g;return n.createElement(t.az,{...(0,t.x8)(h),as:"fieldset",element:o,margin:"space0",padding:"space0",minWidth:"0px",borderWidth:"borderWidth0",ref:m},n.createElement(i.J,{as:"legend",element:"LEGEND",htmlFor:void 0,required:c,marginBottom:"space0",disabled:a,i18nRequiredLabel:p},s),d&&n.createElement(r.$,{marginTop:"space0"},d),n.createElement(t.az,{element:`${o}_SET`,marginRight:y?void 0:"space20"},n.createElement(t.az,{display:y&&"horizontal"===u?"inline-flex":"block",width:y?"100%":void 0},n.Children.map(e,(e,a)=>n.createElement(t.az,{element:`${o}_FIELD`,display:"horizontal"===u?"inline-block":"block",flexBasis:y?"50%":void 0,marginTop:g?.marginTop?0===a&&"vertical"===u?"space40":g?.marginTop:"space40",marginRight:"horizontal"!==u||y?null:"space70",marginLeft:y&&"horizontal"===u?0===a?"space0":"space30":"space0"},e))),l&&n.createElement(t.az,{element:`${o}_ERROR_TEXT_WRAPPER`,marginTop:"space40"},n.createElement(r.$,{variant:"error"},l))))});l.displayName="InlineControlGroup"},40615:(e,a,o)=>{"use strict";o.d(a,{A:()=>m});var t=o(72387),r=o(76127),i=o(95669),n=o.n(i),l=o(81278);o(55729);var d=o(10511),s=o(43084),u=o(10732),c=o(62887),p=o(63437),g=o(38992);let h={h1:()=>null},m=({children:e,meta:a,navigationData:o,data:i,mdxHeadings:m,pageHeaderData:{categoryRoute:y,githubUrl:v,storybookUrl:R}})=>{let b=a.title?`${a.title} - ${g.DZ.TITLE}`:g.DZ.TITLE,w=a.description||g.DZ.DESCRIPTION,f=(0,l.useRouter)();return(0,t.FD)(p.T,{navigationData:o,children:[(0,t.FD)(n(),{children:[(0,t.Y)("title",{children:b}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${f.pathname}`}),(0,t.Y)("meta",{name:"description",content:w},"description")]}),(0,t.FD)(d.s,{children:[(0,t.Y)(c.c,{categoryRoute:y,githubUrl:v,storybookUrl:R,data:i}),(0,t.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(u.i,{data:m}),(0,t.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(s.Q,{componentOverrides:a.package?h:{},children:e})})]})]})]})}},41621:(e,a,o)=>{"use strict";o.d(a,{Sw:()=>s,sx:()=>u,z6:()=>c});var t=o(79559),r=o(76127),i=o(36669),n=o(55729),l=o(22275),d=n.createContext({name:"",value:"",disabled:!1,hasError:!1,onChange:()=>{}}),s=n.forwardRef((e,a)=>n.createElement(r.az,{as:"input",type:"radio",size:"size0",border:"none",overflow:"hidden",padding:"space0",margin:"space0",whiteSpace:"nowrap",textTransform:"none",position:"absolute",clip:"rect(0 0 0 0)",ref:a,...e}));s.displayName="HiddenRadio";var u=n.forwardRef(({id:e,name:a,element:o="RADIO",value:l,checked:u,defaultChecked:c,disabled:p,hasError:g,onChange:h,children:m,helpText:y,...v},R)=>{if(null!=u&&null!=c)throw Error("[Paste Radio] Do not provide both 'defaultChecked' and 'checked' to Radio at the same time. Please consider if you want this component to be controlled or uncontrolled.");let[b,w]=n.useState(c),f=n.useContext(d),k=(0,i.GV)(),x=e||(0,i.GV)(),C=n.useMemo(()=>void 0!==u||""!==f.value,[]),T=n.useCallback(e=>{h?h(e):f.onChange(e),C||w(e.target.checked)},[h,f,C]),S={name:a??f.name,disabled:p??f.disabled,hasError:g??f.hasError};C?""!==f.value?S.checked=f.value===l:S.checked=u:S.defaultChecked=c;let E=C?S.checked||S.defaultChecked:b;return n.createElement(r.az,{element:o,position:"relative",display:"inline-flex",alignItems:"flex-start",flexDirection:"column",verticalAlign:"top"},n.createElement(s,{...v,...S,value:l,"aria-describedby":k,"aria-invalid":S.hasError,onChange:T,id:x,ref:R}),n.createElement(t.g$,{disabled:S.disabled,htmlFor:x},n.createElement(t.BJ,{element:`${o}_CONTROL`,borderRadius:"borderRadiusCircle",disabled:S.disabled,type:"radio",_checkedAndDisabledSibling:{color:"colorTextWeaker"}},n.createElement(r.az,{as:"span",element:`${o}_CONTROL_CIRCLE`,lineHeight:"lineHeight0",display:E?"block":"none",color:"inherit",size:"sizeIcon10"},n.createElement("svg",{role:"img","aria-hidden":!0,width:"100%",height:"100%",viewBox:"0 0 16 16",fill:"none"},n.createElement("circle",{fill:"currentColor",cx:8,cy:8,r:3})))),n.createElement(t.pX,{element:`${o}_LABEL_TEXT`,fontWeight:"fontWeightMedium"},m)),y&&n.createElement(t._v,{element:`${o}_HELP_TEXT_WRAPPER`,helpTextId:k},y))});u.displayName="Radio";var c=n.forwardRef(({name:e,element:a="RADIO_GROUP",value:o,onChange:t,disabled:r=!1,errorText:i,children:s,i18nRequiredLabel:u="(required)",...c},p)=>{let g=n.useCallback(e=>{t?.(e.target.value)},[t]),h=n.useMemo(()=>({name:e,value:o||"",disabled:r,hasError:null!=i,onChange:g}),[e,o,r,i,g]);return n.createElement(d.Provider,{value:h},n.createElement(l.a,{element:a,...c,disabled:r,errorText:i,name:e,ref:p,i18nRequiredLabel:u},s))});c.displayName="RadioGroup"},79559:(e,a,o)=>{"use strict";o.d(a,{BJ:()=>s,_v:()=>p,g$:()=>u,pX:()=>c});var t=o(76127),r=o(8909),i=o(86146),n=o(86860),l=o(629),d=o(55729),s=d.forwardRef(({children:e,disabled:a,applyHoverStyles:o=!1,element:t="BASE_RADIO_CHECKBOX_CONTROL",...r},i)=>d.createElement(n.K,{as:"span",ref:i,display:"flex",element:t,backgroundColor:"colorBackgroundBody",borderColor:o?"colorBorderPrimaryStronger":"colorBorder",borderStyle:"solid",borderWidth:"borderWidth10",height:"sizeSquare50",marginRight:"space20",marginY:"space10",width:"sizeSquare50",color:"colorTextWeakest",_hoverSibling:{borderColor:"colorBorderPrimaryStronger",color:"colorTextWeakest"},_focusSibling:{borderColor:"colorBorder",boxShadow:"shadowFocus",color:"colorTextInverse"},_activeSibling:a?void 0:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger",color:"colorTextWeakest"},_checkedSibling:{borderColor:"colorBorderPrimary",backgroundColor:"colorBackgroundPrimary",color:"colorTextInverse"},_disabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground"},_invalidSibling:{borderColor:"colorBorderError"},_invalidAndHoverSibling:{borderColor:"colorBorderErrorStronger"},_invalidAndDisabledSibling:{borderColor:"colorBorderWeak"},_checkedAndHoverSibling:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger",color:"colorTextWeakest"},_checkedAndFocusSibling:{borderColor:"colorBorderPrimary",backgroundColor:"colorBackgroundPrimary",color:"colorTextInverse"},_checkedAndActiveSibling:a?void 0:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger"},_checkedAndDisabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground",color:"colorTextWeaker"},_checkedAndInvalidSibling:{borderColor:"colorBorderError",backgroundColor:"colorBackgroundError",color:"colorTextInverse"},_checkedAndInvalidAndHoverSibling:{borderColor:"colorBorderErrorStronger",backgroundColor:"colorBackgroundErrorStronger"},_checkedAndInvalidAndDisabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground",color:"colorTextWeaker"},...r},e));s.displayName="BaseRadioCheckboxControl";var u=d.forwardRef(({children:e,...a},o)=>d.createElement(i.J,{...a,marginBottom:"space0",ref:o},d.createElement(t.az,{as:"span",display:"flex"},e)));u.displayName="BaseRadioCheckboxLabel";var c=d.forwardRef(({children:e,element:a="BASE_RADIO_CHECKBOX_LABEL_TEXT",...o},t)=>d.createElement(l.EY,{as:"span",color:"currentColor",marginLeft:"space20",element:a,ref:t,...o},e));c.displayName="BaseRadioCheckboxLabelText";var p=d.forwardRef(({children:e,helpTextId:a,element:o="BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER"},i)=>d.createElement(t.az,{as:"span",display:"block",element:o,marginLeft:"space70",ref:i},d.createElement(r.$,{id:a,marginTop:"space0"},e)));p.displayName="BaseRadioCheckboxHelpText"},86860:(e,a,o)=>{"use strict";o.d(a,{K:()=>l});var t=o(76127),r=o(27717),i=o(55729),n=(0,r.I4)(t.az)(({_activeSibling:e,_boxChild:a,_checkedAndActiveSibling:o,_checkedAndDisabledSibling:t,_checkedAndFocusSibling:i,_checkedAndHoverSibling:n,_checkedAndInvalidSibling:l,_checkedAndInvalidAndDisabledSibling:d,_checkedAndInvalidAndHoverSibling:s,_checkedSibling:u,_checkedSiblingAndBoxChild:c,_disabledSibling:p,_focusSibling:g,_hoverSibling:h,_invalidSibling:m,_invalidAndHoverSibling:y,_invalidAndDisabledSibling:v,type:R="checkbox"})=>{let b=`input[type=${R}]:active + label &`,w=`input[type=${R}]:checked + label &, input[type=${R}][aria-checked=mixed] + label &`,f=`input[type=${R}]:checked:active + label &, input[type=${R}][aria-checked=mixed]:active + label &`,k=`input[type=${R}]:checked + label & > *, input[type=${R}][aria-checked=mixed] + label & > *`,x=`input[type=${R}]:checked:disabled + label &, input[type=${R}][aria-checked=mixed]:disabled + label &`,C=`input[type=${R}]:checked:focus + label &, input[type=${R}][aria-checked=mixed]:focus + label &`,T=`input[type=${R}]:checked:hover:not(:disabled) + label &, input[type=${R}][aria-checked=mixed]:hover:not(:disabled) + label &`,S=`input[type=${R}][aria-invalid=true]:checked + label &`,E=`input[type=${R}][aria-invalid=true]:checked:disabled + label &`,N=`input[type=${R}][aria-invalid=true]:checked:hover:not(:disabled) + label &`,G=`input[type=${R}] + label & > *`,_=`input[type=${R}]:disabled + label &`,P=`input[type=${R}]:focus + label &`,I=`input[type=${R}]:hover:not(:disabled):not(:checked) + label &`,B=`input[type=${R}][aria-invalid=true] + label &`,V=`input[type=${R}][aria-invalid=true]:hover:not(:disabled) + label &`,A=`input[type=${R}][aria-invalid=true]:disabled + label &`;return(0,r.AH)({[b]:e,[w]:u,[f]:o,[k]:c,[x]:t,[C]:i,[T]:n,[S]:l,[E]:d,[N]:s,[G]:a,[_]:p,[P]:g,[I]:h,[B]:m,[V]:y,[A]:v})}),l=i.forwardRef(({"aria-hidden":e="true",alignItems:a="center",display:o="inline-flex",element:t="SIBLING_BOX",flexShrink:r=0,justifyContent:l="center",transition:d="all 120ms",...s},u)=>i.createElement(n,{alignItems:a,"aria-hidden":e,display:o,element:t,flexShrink:r,justifyContent:l,ref:u,transition:d,...s}));l.displayName="SiblingBox"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=4990)),_N_E=e.O()}]);