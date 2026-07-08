(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8635],{16704:(e,t,a)=>{"use strict";a.d(t,{$:()=>h,p:()=>m});var i=a(76127),r=a(34280),o=a(19950),n=a(55729),l=a(95036),d=a(92980),s=a(38441),c=n.forwardRef(({i18nStepDownLabel:e="step value down",element:t,variant:a,...i},r)=>n.createElement(l.$n,{...i,ref:r,element:`${t}_DECREMENT_BUTTON`,variant:"reset",size:"reset",type:"button",borderRadius:"borderRadius20",backgroundColor:"inverse"===a?"colorBackgroundInverseElevation":"colorBackgroundBodyElevation",marginRight:"space30",_focus:{boxShadow:"inverse"===a?"shadowBorderInverseStrong":"shadowBorderPrimary"}},n.createElement(d.ChevronDownIcon,{decorative:!1,title:e,size:"sizeIcon05",element:`${t}_DECREMENT_ICON`})));c.displayName="Decrement";var p=n.forwardRef(({i18nStepUpLabel:e="step value up",element:t,variant:a,...i},r)=>n.createElement(l.$n,{...i,ref:r,element:`${t}_INCREMENT_BUTTON`,variant:"reset",size:"reset",type:"button",borderRadius:"borderRadius20",backgroundColor:"inverse"===a?"colorBackgroundInverseElevation":"colorBackgroundBodyElevation",marginRight:"space30",_focus:{boxShadow:"inverse"===a?"shadowBorderInverseStrong":"shadowBorderPrimary"}},n.createElement(s.ChevronUpIcon,{decorative:!1,title:e,size:"sizeIcon05",element:`${t}_INCREMENT_ICON`})));p.displayName="Increment";var u=["className","style","size","height","width"],h=n.forwardRef(({element:e,...t},a)=>n.createElement(i.az,{appearance:"none",as:"input",backgroundColor:"transparent",border:"none",borderRadius:"borderRadius20",boxShadow:"none",color:"inherit",cursor:"date"!==t.type&&"time"!==t.type||t.readOnly||t.disabled?"auto":"text",display:"block",element:e,fontFamily:"inherit",fontSize:"fontSize30",fontWeight:"fontWeightMedium",lineHeight:"lineHeight20",margin:"space0",outline:"none",paddingBottom:"space30",paddingLeft:"space40",paddingRight:"space40",paddingTop:"space30",resize:"none",width:"100%",variant:t.variant,ref:a,_placeholder:{color:"inverse"===t.variant?"colorTextInverseWeaker":"colorTextWeak",fontStyle:"italic"},_focus_placeholder:{color:"inverse"===t.variant?"colorTextInverseWeaker":"colorTextWeak"},_disabled:{color:"inverse"===t.variant?"colorTextInverseWeakest":"colorTextWeaker",cursor:"not-allowed","-webkit-text-fill-color":"inverse"===t.variant?"colorTextInverseWeakest":"colorTextWeaker","-webkit-opacity":"1"},__webkit_datetime_edit:{display:"flex"},__webkit_calendar_picker_indicator_hover:{cursor:t.readOnly||t.disabled?"default":"pointer"},__webkit_inner_spin_button:{display:"none",margin:"space0"},__webkit_outer_spin_button:{display:"none",margin:"space0"},"-moz-appearance":"textfield",...t}));h.displayName="InputElement";var m=n.forwardRef(({disabled:e,element:t="INPUT",hasError:a,id:l,insertAfter:d,insertBefore:s,max:m,min:b,name:g,placeholder:y,readOnly:x,required:T,step:v,type:w,value:f,variant:D,i18nStepUpLabel:L,i18nStepDownLabel:E,..._},k)=>{let P=n.useRef(void 0),I=(0,o.SV)(P,k),[C,H]=n.useState(!0),[S,R]=n.useState(!0),[N,O]=n.useState(f??_.defaultValue??"0");return n.useEffect(()=>{if("number"!==w)return;if(e){R(!1),H(!1);return}let t=Number(N),a=v&&!isNaN(Number(v))?Number(v):1,i=Number(m);if(isNaN(i))return;let r=Number(b);isNaN(r)||((i-r)%a!=0&&console.error("[Paste Input]: when using min/max, and step values with a Number Input, please make sure that the min and max are multiples of the step value."),t<i&&t+a<=i?H(!0):H(!1),t>r&&t-a>=r?R(!0):R(!1))},[m,b,v,e,w,N]),n.createElement(r.cl,{disabled:e,element:t,hasError:a,insertAfter:d,insertBefore:s,readOnly:x,type:w,variant:D},n.createElement(h,{"aria-invalid":a,"aria-readonly":x,...(e=>Object.keys(e).reduce((t,a)=>(u.includes(a)||(t[a]=e[a]),t),{}))(_),...{type:w},disabled:e,element:`${t}_ELEMENT`,id:l,name:g,max:m,min:b,placeholder:y,readOnly:x,ref:I,required:T,step:v,value:f,variant:D,onChange:e=>{null!=_.onChange&&"function"==typeof _.onChange&&_.onChange(e),O(e.target.value)}}),"number"===w?n.createElement(i.az,{display:"flex",flexDirection:"column",rowGap:"space10",justifyContent:"center",element:`${t}_STEP_WRAPPER`},C?n.createElement(p,{element:t,onClick:()=>{P.current?.stepUp();let e=new Event("change",{bubbles:!0});P.current?.dispatchEvent(e),P.current?.focus()},i18nStepUpLabel:L,variant:D}):n.createElement(i.az,{height:"12px",width:"12px",element:`${t}_INCREMENT_PLACEHOLDER`}),S?n.createElement(c,{element:t,onClick:()=>{P.current?.stepDown();let e=new Event("change",{bubbles:!0});P.current?.dispatchEvent(e),P.current?.focus()},i18nStepDownLabel:E,variant:D}):n.createElement(i.az,{height:"12px",width:"12px",element:`${t}_DECREMENT_PLACEHOLDER`})):n.createElement(n.Fragment,null))});m.displayName="Input"},24744:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/label",function(){return a(82975)}])},38441:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ChevronUpIcon:()=>n});var i=a(36669),r=a(55729),o=a(96316);let n=r.forwardRef(({as:e,display:t,element:a="ICON",size:n,color:l,title:d,decorative:s},c)=>{let p=`ChevronUpIcon-${(0,i.GV)()}`;if(!s&&null==d)throw Error("[ChevronUpIcon]: Missing a title for non-decorative icon.");return r.createElement(o.IconWrapper,{as:e,display:t,element:a,size:n,color:l,ref:c},r.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":p},d?r.createElement("title",{id:p},d):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.293 7.293a1 1 0 011.32-.083l.094.083 3 3a1 1 0 01-1.32 1.497l-.094-.083L10 9.415l-2.293 2.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 3-3z"})))});n.displayName="ChevronUpIcon"},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>b});var i=a(72387),r=a(76127),o=a(95669),n=a.n(o),l=a(81278);a(55729);var d=a(10511),s=a(43084),c=a(10732),p=a(62887),u=a(63437),h=a(38992);let m={h1:()=>null},b=({children:e,meta:t,navigationData:a,data:o,mdxHeadings:b,pageHeaderData:{categoryRoute:g,githubUrl:y,storybookUrl:x}})=>{let T=t.title?`${t.title} - ${h.DZ.TITLE}`:h.DZ.TITLE,v=t.description||h.DZ.DESCRIPTION,w=(0,l.useRouter)();return(0,i.FD)(u.T,{navigationData:a,children:[(0,i.FD)(n(),{children:[(0,i.Y)("title",{children:T}),(0,i.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${w.pathname}`}),(0,i.Y)("meta",{name:"description",content:v},"description")]}),(0,i.FD)(d.s,{children:[(0,i.Y)(p.c,{categoryRoute:g,githubUrl:y,storybookUrl:x,data:o}),(0,i.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,i.Y)(c.i,{data:b}),(0,i.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,i.Y)(s.Q,{componentOverrides:t.package?m:{},children:e})})]})]})]})}},81724:(e,t,a)=>{"use strict";a.d(t,{c$:()=>l,l6:()=>c,zQ:()=>d});var i=a(76127),r=a(55729),o=a(92980),n=a(34280),l=r.forwardRef(({children:e,element:t="OPTION",...a},o)=>(a.selected&&console.warn('"selected" is a blocked prop on this component, please use "value" on the select element.'),r.createElement(i.az,{as:"option",ref:o,...(0,i.x8)(a),element:t,size:void 0,height:void 0,width:void 0,backgroundColor:"inherit",color:"inherit",fontFamily:"inherit",lineHeight:"lineHeight50",paddingTop:"space30",paddingBottom:"space30",paddingLeft:"space20"},e)));l.displayName="Option";var d=r.forwardRef(({label:e,children:t,element:a="OPTION_GROUP",...o},n)=>r.createElement(i.az,{ref:n,label:e,...(0,i.x8)(o),element:a,as:"optgroup",backgroundColor:"inherit",color:"inherit",fontFamily:"inherit",fontWeight:"fontWeightMedium",fontStyle:"normal",margin:"space20"},t));d.displayName="OptionGroup";var s=r.forwardRef(({element:e="SELECT_ELEMENT",variant:t,size:a,...o},n)=>r.createElement(i.az,{...(0,i.x8)(o),element:e,as:"select",ref:n,size:a,height:void 0,appearance:"none",backgroundColor:"inverse"===t?"colorBackgroundInverse":"colorBackgroundBody",border:"none",borderRadius:"borderRadius30",boxShadow:"none",color:"inherit",cursor:"pointer",display:"block",fontFamily:"inherit",fontSize:"fontSize30",fontWeight:"fontWeightMedium",lineHeight:"lineHeight20",margin:"space0",outline:"none",paddingBottom:"space30",paddingLeft:"space40",paddingRight:"space100",paddingTop:"space30",resize:"none",width:"100%",_disabled:{color:"inverse"===t?"colorTextInverseWeakest":"colorTextWeaker",backgroundColor:"transparent",cursor:"not-allowed",opacity:1},variant:t}));s.displayName="SelectElement";var c=r.forwardRef(({disabled:e,element:t="SELECT",hasError:a,insertBefore:l,insertAfter:d,children:c,size:p,multiple:u,variant:h="default",...m},b)=>{let[g,y]=r.useState(!1);return r.useEffect(()=>{y(!0)},[]),r.createElement(n.cl,{disabled:e,element:t,hasError:a,insertAfter:d,insertBefore:l,variant:h},r.createElement(i.az,{display:"flex",width:"100%",position:"relative"},g?r.createElement(s,{"aria-invalid":a,"data-not-selectize":"true",disabled:e,ref:b,element:`${t}_ELEMENT`,...m,multiple:u,size:u?p:0,variant:h,key:"mounted"},c):r.createElement(s,{key:"unmounted",variant:h}),!u&&r.createElement(n.JO,{element:`${t}_CHEVRON_WRAPPER`},r.createElement(o.ChevronDownIcon,{"aria-hidden":"true",decorative:!0,element:`${t}_ICON`,color:(0,n.YN)(h,e,!1),size:"sizeIcon30"}))))});c.displayName="Select"},82975:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>v,default:()=>k,getStaticProps:()=>f,mdxHeadings:()=>D,meta:()=>w}),a(55729);var i=a(11885),r=a(36669),o=a(86146),n=a(16704),l=a(8909),d=a(4073),s=a(76127),c=a(629),p=a(81724),u=a(44140),h=a(28409),m=a(47442),b=a(41960),g=a(54652),y=a(89564),x=a(86874),T=a(40615),v=!0;let w={title:"Label - Components",package:"@twilio-paste/label",description:"The Label component is used to provide a visible, accessible name to any form element.",slug:"/components/label/"},f=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:D,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/label",storybookUrl:"/?path=/story/components-label--default"}}}),D=[{value:"Guidelines",depth:2},{value:"About Label",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Label with Input",depth:3},{value:"Label with Select",depth:3},{value:"Label with TextArea",depth:3},{value:"Label with DatePicker",depth:3},{value:"Label with TimePicker",depth:3},{value:"States",depth:2},{value:"Default Label",depth:3},{value:"Required Label",depth:3},{value:"Optional Label",depth:3},{value:"Disabled Label",depth:3},{value:"When to use a Label",depth:2}],L=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",e)},E={meta:w,getStaticProps:f,mdxHeadings:D},_=T.A;function k({components:e,...t}){return(0,i.yg)(_,{...E,...t,components:e,mdxType:"MDXLayout"},(0,i.yg)(L,{scope:{Input:n.p,Label:o.J,HelpText:l.$},language:"jsx",mdxType:"LivePreview"},`<>
  <Label htmlFor="email_address" required>Email address</Label>
  <Input aria-describedby="email_help_text" id="email_address" name="email_address" type="email" placeholder="example@twilio.com" onChange={() => {}} required/>
  <HelpText id="email_help_text">Use your work email address.</HelpText>
</>`),(0,i.yg)("h2",null,"Guidelines"),(0,i.yg)("h3",null,"About Label"),(0,i.yg)("p",null,"A Label is text that is placed above a form field to describe the form field. Labels should clearly describe the value being requested. They should be concise and descriptive, not instructional. To do this:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'Use help text to provide instruction if needed. For example, don\'t use "Enter the registration code on the back of your SIM card below" as label text. Instead, use "SIM registration code" as a label and "Find the registration code on the back of your SIM card" as help text.'),(0,i.yg)("li",{parentName:"ul"},'Avoid articles ("a", "the") and punctuation. For example, use "SIM registration code" rather than "The SIM registration code".')),(0,i.yg)("p",null,'To support internationalization, avoid starting a sentence with the label and using the field to finish it since sentence structures vary across languages. For example, use "Call log expiration date" or "How long should logs be stored?". Don\'t use "Remove logs after:".'),(0,i.yg)("h3",null,"Accessibility"),(0,i.yg)(b.Xy,{mdxType:"UnorderedList"},(0,i.yg)(b.ck,{mdxType:"ListItem"},"Include a visible label on ",(0,i.yg)("strong",null,"all")," form fields."),(0,i.yg)(b.ck,{mdxType:"ListItem"},"Each label must use the ",(0,i.yg)("inlineCode",null,"htmlFor")," prop that equals the ",(0,i.yg)("inlineCode",null,"id")," of the associated input."),(0,i.yg)(b.ck,{mdxType:"ListItem"},"The text of the label needs to remain same. It should not change based on the state of the input.")),(0,i.yg)(g.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,i.yg)(g.wz,{mdxType:"CalloutText"},"Make sure to connect the ",(0,i.yg)("inlineCode",null,"Label")," to the ",(0,i.yg)("inlineCode",null,"Input"),". This is done with the"," ",(0,i.yg)("inlineCode",null,"htmlFor")," prop on the label, and the ",(0,i.yg)("inlineCode",null,"id")," prop on the form field. Those two need to match.")),(0,i.yg)("h2",null,"Examples"),(0,i.yg)("h3",null,"Label with Input"),(0,i.yg)(L,{scope:{Input:n.p,Label:o.J,HelpText:l.$},language:"jsx",mdxType:"LivePreview"},`<>
  <Label htmlFor="email_address" required>Email address</Label>
  <Input aria-describedby="email_help_text" id="email_address" name="email_address" type="email" placeholder="example@twilio.com" onChange={() => {}} required/>
  <HelpText id="email_help_text">Use your work email address.</HelpText>
</>`),(0,i.yg)("h3",null,"Label with Select"),(0,i.yg)(L,{scope:{Select:p.l6,Option:p.c$,Label:o.J},language:"jsx",mdxType:"LivePreview"},`<>
  <Label htmlFor="author">Select an author</Label>
  <Select id="author">
    <Option value="baldwin">James Baldwin</Option>
    <Option value="brown">adrienne maree brown</Option>
    <Option value="butler">Octavia Butler</Option>
    <Option value="coates">Ta-Nehisi Coates</Option>
    <Option value="lorde">Audre Lorde</Option>
    <Option value="nnedi">Nnedi Okorafor</Option>
  </Select>
</>`),(0,i.yg)("h3",null,"Label with TextArea"),(0,i.yg)(L,{scope:{Label:o.J,HelpText:l.$,TextArea:u.f},language:"jsx",mdxType:"LivePreview"},`<>
  <Label htmlFor="message" required>Message (at least 120 characters)</Label>
  <TextArea onChange={()=>{}} onChange={()=>{}} aria-describedby="message_help_text" id="message" name="message" placeholder="Enter message" required />
  <HelpText id="message_help_text">Enter at least 120 characters</HelpText>
</>`),(0,i.yg)("h3",null,"Label with DatePicker"),(0,i.yg)(L,{scope:{DatePicker:h.l,Label:o.J,HelpText:l.$,useUID:r.GV,Anchor:d.Mz},noInline:!0,mdxType:"LivePreview"},x.IC),(0,i.yg)("h3",null,"Label with TimePicker"),(0,i.yg)(L,{scope:{TimePicker:m.A,Label:o.J,HelpText:l.$},language:"jsx",mdxType:"LivePreview"},`<>
  <Label htmlFor="appointment-time">What time is your appointment?</Label>
  <TimePicker id="appointment-time" aria-describedby="appointment-time-help-text" />
  <HelpText id="appointment-time-help-text">Select a time above.</HelpText>
</>`),(0,i.yg)("h2",null,"States"),(0,i.yg)("h3",null,"Default Label"),(0,i.yg)(L,{scope:{Input:n.p,Label:o.J,HelpText:l.$},language:"jsx",mdxType:"LivePreview"},`<>
  <Label htmlFor="email_address">Email address</Label>
  <Input aria-describedby="email_help_text" id="email_address" name="email_address" type="email" placeholder="example@twilio.com" onChange={() => {}}/>
  <HelpText id="email_help_text">Use your work email address.</HelpText>
</>`),(0,i.yg)("h3",null,"Required Label"),(0,i.yg)("p",null,"Use required indicators to show users which fields they must fill out."),(0,i.yg)(L,{scope:{Input:n.p,Label:o.J,HelpText:l.$},language:"jsx",mdxType:"LivePreview"},`<>
  <Label htmlFor="email_address" required>Email address</Label>
  <Input aria-describedby="email_help_text" id="email_address" name="email_address" type="email" placeholder="example@twilio.com" onChange={() => {}} required/>
  <HelpText id="email_help_text">Use your work email address.</HelpText>
</>`),(0,i.yg)("h3",null,"Optional Label"),(0,i.yg)("p",null,"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"optional")," prop to show users which fields are optional to fill out."),(0,i.yg)(L,{scope:{Input:n.p,Label:o.J,HelpText:l.$},language:"jsx",mdxType:"LivePreview"},`<>
  <Label htmlFor="email_address_1" optional>Email address</Label>
  <Input aria-describedby="email_help_text" id="email_address_1" name="email_address_1" type="email" placeholder="example@twilio.com" onChange={() => {}}/>
  <HelpText id="email_help_text">Use your work email address.</HelpText>
</>`),(0,i.yg)("h3",null,"Disabled Label"),(0,i.yg)("p",null,"Use the disabled prop if a the label is associated with a disabled form field to show users that they can't interact with the field."),(0,i.yg)(L,{scope:{Input:n.p,Label:o.J,HelpText:l.$},language:"jsx",mdxType:"LivePreview"},`<>
  <Label htmlFor="email_disabled" disabled>Email address</Label>
  <Input aria-describedby="email_disabled_help_text" id="email_disabled" name="email_disabled" type="email" placeholder="example@twilio.com" onChange={() => {}} disabled />
  <HelpText id="email_disabled_help_text">Use your work email address.</HelpText>
</>`),(0,i.yg)("h2",null,"When to use a Label"),(0,i.yg)("p",null,"Use a Label to clearly describe the the form field."),(0,i.yg)(y.l,{mdxType:"DoDont"},(0,i.yg)(y.Do,{title:"Do",body:"Use Label in composition with a form element.",center:!0,mdxType:"Do"},(0,i.yg)(s.az,{width:"100%",padding:"space60",mdxType:"Box"},(0,i.yg)(o.J,{htmlFor:"short_do",mdxType:"Label"},"Name"),(0,i.yg)(n.p,{id:"short_do",name:"short_do",type:"text",onChange:()=>{},mdxType:"Input"}))),(0,i.yg)(y.w,{title:"Don't",body:"Don't use Label as a stand-alone component.",center:!0,mdxType:"Dont"},(0,i.yg)(s.az,{width:"100%",padding:"space60",mdxType:"Box"},(0,i.yg)(o.J,{htmlFor:"short_dont",mdxType:"Label"},"Tell us your life story")))),(0,i.yg)(y.l,{mdxType:"DoDont"},(0,i.yg)(y.Do,{title:"Do",body:"Include a visible label on every form field.",center:!0,mdxType:"Do"},(0,i.yg)(s.az,{width:"100%",padding:"space60",mdxType:"Box"},(0,i.yg)(o.J,{htmlFor:"label_do",mdxType:"Label"},"Name"),(0,i.yg)(n.p,{id:"label_do",name:"label_do",type:"text",onChange:()=>{},mdxType:"Input"}))),(0,i.yg)(y.w,{title:"Don't",body:"Don't use prefix/suffix text as a replacement for a label.",center:!0,mdxType:"Dont"},(0,i.yg)(s.az,{width:"100%",padding:"space60",mdxType:"Box"},(0,i.yg)(n.p,{id:"label_dont",name:"label_dont",type:"text",onChange:()=>{},insertBefore:(0,i.yg)(c.EY,{color:"colorTextWeak",as:"span",fontWeight:"fontWeightSemibold",mdxType:"Text"},"Name"),mdxType:"Input"})))))}k.isMDXComponent=!0},86874:(e,t,a)=>{"use strict";a.d(t,{Hr:()=>d,IC:()=>i,Ur:()=>r,Uv:()=>p,oy:()=>o,rA:()=>u,rN:()=>c,t3:()=>l,xC:()=>s,xg:()=>n});let i=`
const RequiredDatePicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP} required>
        When was the abolition of slavery announced in Galveston Bay, Texas (also known as Juneteenth)?
      </Label>
      <DatePicker required id={uidDP} aria-describedby={uidHT} {...props} />
      <HelpText id={uidHT}>
        Enter a date above.
        <Anchor href="https://nmaahc.si.edu/blog-post/historical-legacy-juneteenth" showExternal>
          Read more about Juneteenth
        </Anchor>
      </HelpText>
    </>
  );
};
render(<RequiredDatePicker />)
`.trim(),r=`
const DateRangePicker = (props) => {
  const [startDate, setStartDate] = React.useState('');
  const startUidDP = useUID();
  const endUidDP = useUID();
  return (
    <Stack orientation="horizontal" spacing="space80">
      <Box>
      <Label htmlFor={startUidDP}>Start date</Label>
      <DatePicker id={startUidDP} onChange={(evt) => setStartDate(evt.target.value)} {...props} />
      </Box>
      <Box>
      <Label htmlFor={endUidDP}>End date</Label>
      <DatePicker id={endUidDP} min={startDate} {...props} />
      </Box>
    </Stack>
  );
}
render(<DateRangePicker />)`.trim(),o=`
const OnChangePicker = (props) => {
  const [value, setValue] = React.useState('');
  const [dateFormat, setDateFormat] = React.useState('MM dd yy');
  const uidDP = useUID();
  const uidHT = useUID();
  const dateFormatOptions = ['MM dd yyyy', 'MMMM do yyyy', 'EEEEEE MMM do yy', 'MM/dd/yyyy'];
  const handleChange = (val, format) => {
    setValue(formatReturnDate(val, format));
    return value;
  };
  return (
    <>
      <Box marginBottom="space60">
        <Combobox
          items={dateFormatOptions}
          labelText="Return date format:"
          onInputValueChange={({inputValue}) => {
            if (inputValue !== undefined) setDateFormat(inputValue);
          }}
        />
      </Box>
      <Label htmlFor={uidDP}>On what day was Apartheid legislation repealed in South Africa?</Label>
      <DatePicker
        id={uidDP}
        aria-describedby={uidHT}
        onChange={(evt) => handleChange(evt.target.value, dateFormat)}
        {...props}
      />
      <HelpText id={uidHT}>
        Enter a date above.
        <Anchor href="https://www.sahistory.org.za/article/history-apartheid-south-africa" showExternal>
          Read more about Apartheid in South Africa
        </Anchor>
      </HelpText>
      <Box marginTop="space60">
        <b>Return value </b>(will only change when the onChange event fires): {value}
      </Box>
    </>
  );
}
render(<OnChangePicker />)
`.trim(),n=`
const HasErrorPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When did the Jallianwala Bagh massacre take place?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} hasError {...props} />
      <HelpText id={uidHT} variant="error">
        Enter a date above.
        <Anchor
          href="https://www.hindustantimes.com/india-news/jallianwala-bagh-massacre-here-is-how-the-deadly-incident-transpired-102-years-ago-101618276752335.html"
          showExternal
        >
          Read more about the Jallianwala Bagh massacre
        </Anchor>
      </HelpText>
    </>
  );
}
render(<HasErrorPicker />)
`.trim(),l=`
const DisabledPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP} disabled>
        When did the Supreme Court ban anti-miscegenation laws (in Loving v. Virginia)?
      </Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} disabled defaultValue="1967-06-12" {...props} />
      <HelpText id={uidHT}>
        <Anchor href="https://www.oyez.org/cases/1966/395" showExternal>
          Read more about Loving Day
        </Anchor>
      </HelpText>
    </>
  );
}
render(<DisabledPicker />)`.trim(),d=`
const ReadOnlyPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>In what month was the Combahee River Collective (CRC) Statement published?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} readOnly defaultValue="1977-04-01" {...props} />
      <HelpText id={uidHT}>
        {' '}
        <Anchor href="https://combaheerivercollective.weebly.com/" showExternal>
          Read more about the CRC
        </Anchor>{' '}
      </HelpText>
    </>
  );
}
render(<ReadOnlyPicker />)
`.trim(),s=`
const LabelOnlyPicker = (props) => {
  const uidDP = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When does this year&apos;s LGBTQ+ Pride month begin in the US?</Label>
      <DatePicker id={uidDP} {...props} />
    </>
  );
}
render(<LabelOnlyPicker />)
`.trim(),c=`
const StackOfPickers = (props) => {
  const uidDPOne = useUID();
  const uidHTOne = useUID();
  const uidDPTwo = useUID();
  const uidHTTwo = useUID();
  return (
    <Stack orientation="vertical" spacing="space80">
      <Box>
        <Label htmlFor={uidDPOne}>When was the NAACP Legal Defense Fund (LDF) founded?</Label>
        <DatePicker id={uidDPOne} aria-describedby={uidHTOne} {...props} />
        <HelpText id={uidHTOne}>
          Enter a date above.
          <Anchor href="https://www.naacpldf.org/about-us/history/" showExternal>
            Read more about the NAACP LDF
          </Anchor>
        </HelpText>
      </Box>
      <Box>
        <Label htmlFor={uidDPTwo}>
          When did Thurgood Marshall become the first African American Supreme Court Justice?
        </Label>
        <DatePicker id={uidDPTwo} aria-describedby={uidHTTwo} {...props} />
        <HelpText id={uidHTTwo}>
          Enter a date above.
          <Anchor
            href="https://constitutioncenter.org/blog/thurgood-marshalls-unique-supreme-court-legacy"
            showExternal
          >
            Read more about Marshall&apos;s legacy
          </Anchor>
        </HelpText>
      </Box>
    </Stack>
  );
}
render(<StackOfPickers/>)
`.trim(),p=`
const MinAndMaxPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When was Grace Hopper awarded the Presidential Medal of Freedom?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} min="2016-10-15" max="2016-10-25" {...props} />
      <HelpText id={uidHT}>
        Hint: it was awarded posthumously by President Obama.
        <Anchor
          href="https://news.yale.edu/2017/02/10/grace-murray-hopper-1906-1992-legacy-innovation-and-service"
          showExternal
        >
          Read more about Grace Hopper
        </Anchor>
      </HelpText>
    </>
  );
}
render(<MinAndMaxPicker />)
`.trim(),u=`
const DateTimeRangePicker = (props) => {
  const [selectedItem, setSelectedItem] = React.useState('')
  const uidStartDP = useUID();
  return selectedItem === "Custom" ? (
    <>
      <Box margin="space60">
        <Label htmlFor="uidStartDP">Date range</Label>
      </Box>
      <Stack orientation="horizontal" spacing="space80">
        <Box marginLeft="space60">
          <DatePicker id="uidStartDP" aria-describedby="start-date" />
          <HelpText id="start-date">Start date</HelpText>
        </Box>
        <Box>
          <TimePicker aria-describedby="start-time" />
          <HelpText id="start-time">Start time</HelpText>
        </Box>
      </Stack>
      <Stack orientation="horizontal" spacing="space80">
        <Box marginLeft="space60" marginTop="space60">
          <DatePicker aria-describedby="end-date" />
          <HelpText id="end-date">End date</HelpText>
        </Box>
        <Box marginTop="space60">
          <TimePicker aria-describedby="end-time" />
          <HelpText id="end-time">End time</HelpText>
        </Box>
      </Stack>
    </>
    ) : (
      <Box margin="space60">
        <Combobox
          insertAfter={<CalendarIcon color="colorTextIcon" decorative />}
          items={["Last 7 days", "Last 30 days", "Last 6 months", "Custom"]}
          labelText="Date range"
          onSelectedItemChange={(changes) => {
            setSelectedItem(changes.selectedItem)
          }}
        />
      </Box>
    )
  }

render(<DateTimeRangePicker />)
`.trim()}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,8409,4140,7442,636,6593,8792],()=>e(e.s=24744)),_N_E=e.O()}]);