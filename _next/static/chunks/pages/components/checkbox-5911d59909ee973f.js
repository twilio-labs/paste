(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3180],{22141:(e,o,t)=>{"use strict";t.r(o),t.d(o,{__N_SSG:()=>m,default:()=>w,getStaticProps:()=>k,mdxHeadings:()=>y,meta:()=>x}),t(55729);var a=t(11885),r=t(47837),l=t(76127),i=t(33359),n=t(629),c=t(50010),d=t(4073),s=t(89564);let h=`
const CheckboxChecked = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      checked={checked}
      id="blm"
      value="blm"
      name="blm"
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Enable SSL certificate validation
    </Checkbox>
  );
};

render(
  <CheckboxChecked />
)
`.trim(),u=`
const UncontrolledCheckbox = () => {
  return (
    <Checkbox
      id="uncontrolled"
      value="uncontrolled"
      name="uncontrolled"
      defaultChecked
    >
      I am an uncontrolled checkbox
    </Checkbox>
  );
};

render(
  <UncontrolledCheckbox />
)
`.trim(),p=`
const ControlledCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      id="controlled"
      value="controlled"
      name="controlled"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      I am a controlled checkbox
    </Checkbox>
  );
};

render(
  <ControlledCheckbox />
)
`.trim(),b=`
const Results = () => {
  const [checkedItems, setCheckedItems] = React.useState([true, false]);

  const allChecked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;

  const checkboxRef = React.createRef();

  return (
    <CheckboxGroup isSelectAll name="results" legend="Include in Results">
      <Checkbox
        id="select_all"
        checked={allChecked}
        indeterminate={indeterminate}
        ref={checkboxRef}
        onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Select all
      </Checkbox>
      <Checkbox
        id="identity"
        checked={checkedItems[0]}
        onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
      >
        Identity carrier
      </Checkbox>
      <Checkbox
        id="caller_name"
        checked={checkedItems[1]}
        onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
      >
        Caller name
      </Checkbox>
    </CheckboxGroup>
  );
};

render(
  <Results />
)
`.trim();var g=t(40615),m=!0;let x={title:"Checkbox - Components",package:"@twilio-paste/checkbox",description:"The Checkbox and Checkbox Group are used to enable binary choices. These can either be used for an individual choice or to form a collection of choices.",slug:"/components/checkbox/"},k=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:y,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/checkbox",storybookUrl:"/?path=/story/components-checkbox--default-checkbox"}}}),y=[{value:"Guidelines",depth:2},{value:"Checkbox Group",depth:3},{value:"Accessibility",depth:4},{value:"Checkbox",depth:3},{value:"Accessibility",depth:4},{value:"Controlled vs. uncontrolled checkboxes",depth:2},{value:"Examples",depth:2},{value:"Basic checkbox with label",depth:3},{value:"Checkbox with help text",depth:3},{value:"Required checkbox",depth:3},{value:"Basic checkbox group",depth:3},{value:"Checkbox group with help text",depth:3},{value:"Checkbox with suffix",depth:3},{value:"Checkbox Disclaimer",depth:3},{value:"Internationalization",depth:3},{value:"States",depth:2},{value:"Unchecked, checked and indeterminate",depth:3},{value:"Disabled checkbox",depth:3},{value:"Required checkbox group",depth:3},{value:"Disabled checkbox group",depth:3},{value:"Checkbox group with an inline error",depth:3},{value:"Composition notes",depth:2},{value:"Checkbox labels, legends, and help text",depth:3},{value:"Validation and errors",depth:3},{value:"Do and don't",depth:2}],C=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},v={meta:x,getStaticProps:k,mdxHeadings:y},f=g.A;function w({components:e,...o}){return(0,a.yg)(f,{...v,...o,components:e,mdxType:"MDXLayout"},(0,a.yg)(C,{scope:{Checkbox:r.Sc},noInline:!0,mdxType:"LivePreview"},h),(0,a.yg)("h2",null,"Guidelines"),(0,a.yg)("h3",null,"Checkbox Group"),(0,a.yg)(c.f,{mdxType:"Paragraph"},x.description),(0,a.yg)("p",null,"Checkbox groups are used when you have multiple binary choices to make but all choices belong to a single group or field. For example, choosing capabilities when searching for a Phone Number to provision from Twilio. By placing them in a group, users should be able to clearly understand which options make up the collection and also how those options are related to each other."),(0,a.yg)("h4",null,"Accessibility"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Checkbox groups ",(0,a.yg)("strong",{parentName:"li"},"must")," have a group legend that describes the collection.",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"The label ",(0,a.yg)("em",{parentName:"li"},"should")," be visible."),(0,a.yg)("li",{parentName:"ul"},"The label may be visually hidden or provided via ",(0,a.yg)("inlineCode",{parentName:"li"},"aria-label")," on the group component if the entire form is just a single checkbox group with no other form elements. The grouping should be visually implicit, but a description still needs to be provided for assistive technology.")))),(0,a.yg)("h3",null,"Checkbox"),(0,a.yg)("p",null,"Use a checkbox to present a user with a binary (e.g. on/off) choice that is part of a form. A checkbox should not be used to apply a user's choice instantly. In that case, such as enabling a system feature, you should consider using the ",(0,a.yg)("a",{parentName:"p",href:"/components/switch"},"Switch component"),"."),(0,a.yg)("h4",null,"Accessibility"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A checkbox must have a visible label that is in close proximity to the control"),(0,a.yg)("li",{parentName:"ul"},"HTML checkboxes don't natively support the ",(0,a.yg)("inlineCode",{parentName:"li"},"required")," attribute. In cases where a checkbox is required to be checked:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Display a required indicator"),(0,a.yg)("li",{parentName:"ul"},"Ensure the label text includes wording that successfully describes the requirement to the user that they should check the box"))),(0,a.yg)("li",{parentName:"ul"},"When in an error state, display an inline error message below the checkbox or checkbox group that clearly describes the error along with an icon that depicts the severity."),(0,a.yg)("li",{parentName:"ul"},"When displaying additional content based on checking a checkbox, be sure that the new content appears after the checkbox so that it is naturally discoverable by assistive technology users.")),(0,a.yg)("h2",null,"Controlled vs. uncontrolled checkboxes"),(0,a.yg)("p",null,"The checkbox can either be controlled, meaning there is an external state that determines if the checkbox is checked or not, or uncontrolled, meaning the checkbox manages its own state."),(0,a.yg)("p",null,"To make an uncontrolled checkbox, you do not pass the ",(0,a.yg)("inlineCode",{parentName:"p"},"checked")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"onChange")," props. If you need the checkbox to be checked by default, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"defaultChecked")," prop."),(0,a.yg)(C,{scope:{Checkbox:r.Sc},noInline:!0,mdxType:"LivePreview"},u),(0,a.yg)("p",null,"To make a controlled checkbox, you must pass the ",(0,a.yg)("inlineCode",{parentName:"p"},"checked")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"onChange")," props. You cannot use the ",(0,a.yg)("inlineCode",{parentName:"p"},"defaultChecked")," prop in a controlled checkbox."),(0,a.yg)(C,{scope:{Checkbox:r.Sc},noInline:!0,mdxType:"LivePreview"},p),(0,a.yg)("h2",null,"Examples"),(0,a.yg)("h3",null,"Basic checkbox with label"),(0,a.yg)("p",null,"A checkbox is always displayed next to a visible label."),(0,a.yg)(C,{scope:{Checkbox:r.Sc},noInline:!0,mdxType:"LivePreview"},h),(0,a.yg)("h3",null,"Checkbox with help text"),(0,a.yg)("p",null,"In cases where the checkbox requires additional context, you can display this information as help text below the checkbox control and label. This can help keep checkbox labels concise. In order to maintain styling consistency, be sure to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"helpText")," prop here instead of using the Help Text component."),(0,a.yg)(C,{scope:{Checkbox:r.Sc},language:"jsx",mdxType:"LivePreview"},`<Checkbox id="enabled" value="enabled" name="enabled" helpText="Determines if certificate validation is performed on all Twilio originated requests">
  Enable SSL certificate validation
</Checkbox>`),(0,a.yg)("h3",null,"Required checkbox"),(0,a.yg)("p",null,"When a checkbox is required to be checked, a required indicator should be displayed alongside the label. The label text should also be written in such a way that this requirement is clear to the user."),(0,a.yg)(C,{scope:{Checkbox:r.Sc},language:"jsx",mdxType:"LivePreview"},`<Checkbox id="delete" value="delete" name="delete" required>
  Confirm this message should be deleted
</Checkbox>`),(0,a.yg)("h3",null,"Basic checkbox group"),(0,a.yg)("p",null,"Multiple checkboxes and their labels are grouped together with a common group component. The group legend must be the first element inside the group. It must appear before any checkboxes or other content."),(0,a.yg)(C,{scope:{Checkbox:r.Sc,CheckboxGroup:r.$Q},language:"jsx",mdxType:"LivePreview"},`<CheckboxGroup
  name="desktop"
  legend="Select the clients you would like to test."
>
  <Checkbox id="apple_mail" value="apple_mail">
    Apple Mail
  </Checkbox>
  <Checkbox id="outlook" value="outlook">
    Outlook
  </Checkbox>
</CheckboxGroup>`),(0,a.yg)("h3",null,"Checkbox group with help text"),(0,a.yg)("p",null,"You can provide additional information about the group with the use of help text. Help text can appear after the group label but before the first group member. Each item in the group may also provide their own, individual help text."),(0,a.yg)(C,{scope:{Checkbox:r.Sc,CheckboxGroup:r.$Q,Anchor:d.Mz,Text:n.EY},language:"jsx",mdxType:"LivePreview"},`<CheckboxGroup
  name="ad_partners"
  legend="Which ad partnes would you like to advertise on?"
  helpText="Select at least 1 ad partner to create a campaign."
>
  <Checkbox
    id="facebook"
    value="facebook"
    helpText={
      <Text as="span" color="currentColor">
        Questions? <Anchor href="http://paste.twilio.com">Click here to learn more</Anchor>.
      </Text>
    }
  >
    Facebook
  </Checkbox>
  <Checkbox
    id="instagram"
    value="instagram"
    helpText={
      <Text as="span" color="currentColor">
        Questions? <Anchor href="http://paste.twilio.com">Click here to learn more</Anchor>.
      </Text>
    }
  >
    Outlook
  </Checkbox>
</CheckboxGroup>`),(0,a.yg)("h3",null,"Checkbox with suffix"),(0,a.yg)("p",null,"You can provide additional information about an individual item by adding a non-string element as a suffix. The suffix can be any non-string element that is not interactive."),(0,a.yg)(C,{scope:{Checkbox:r.Sc,CheckboxGroup:r.$Q,Badge:i.Ex,Box:l.az},language:"jsx",mdxType:"LivePreview"},`<CheckboxGroup
  name="call logs status"
  legend="Call logs status"
  helpText="Select at least 1 status to view results"
>
  <Checkbox id="busy" value="busy">
    <Box display="flex" columnGap="space30">Busy <Badge variant="new" size="small">New</Badge></Box>
  </Checkbox>
  <Checkbox id="canceled" value="canceled">
    Canceled
  </Checkbox>
  <Checkbox id="completed" value="completed">
    Completed
  </Checkbox>
  <Checkbox id="queued" value="queued">
    Queued
  </Checkbox>
</CheckboxGroup>`),(0,a.yg)("h3",null,"Checkbox Disclaimer"),(0,a.yg)(C,{scope:{CheckboxDisclaimer:r.zc,Text:n.EY},language:"jsx",mdxType:"LivePreview"},`<CheckboxDisclaimer id="disclaimer" value="disclaimer" name="disclaimer">
  I declare the information provided above is accurate. I acknowledge that Twilio will process the information provided above for the purpose of identity verification, and will be sharing it with my local telecomm providers or authorities where required by local law. I understand that Twilio phone numbers may be taken out of service for inaccurate or false information.
</CheckboxDisclaimer>`),(0,a.yg)("h3",null,"Internationalization"),(0,a.yg)("p",null,"To internationalize a checkbox, simply pass different text to the checkbox and checkbox group. The only exception to this is the required dot in the legend of a required checkbox group. To change the required dot's text, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"i18nRequiredLabel")," prop."),(0,a.yg)(C,{scope:{Checkbox:r.Sc,CheckboxGroup:r.$Q},language:"jsx",mdxType:"LivePreview"},`<CheckboxGroup
  name="days"
  legend="Jours pr\xe9f\xe9r\xe9s"
  i18nRequiredLabel="(requis)"
  required
>
  <Checkbox id="monday" value="monday">
    lundi
  </Checkbox>
  <Checkbox id="tuesday" value="tuesday">
    mardi
  </Checkbox>
  <Checkbox id="wednesday" value="wednesday">
    mercredi
  </Checkbox>
  <Checkbox id="thursday" value="thursday">
    jeudi
  </Checkbox>
  <Checkbox id="friday" value="friday">
    vendredi
  </Checkbox>
</CheckboxGroup>`),(0,a.yg)("h2",null,"States"),(0,a.yg)("h3",null,"Unchecked, checked and indeterminate"),(0,a.yg)("p",null,"The default state of a checkbox indicates that the control is unchecked, or not selected. When a checkbox is clicked or the spacebar is pressed when focused, the checkbox will become checked. Doing so again will place the checkbox back into the unchecked state. A checkbox can be placed into a pre-checked state by setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"checked")," property."),(0,a.yg)("p",null,"The third state a checkbox can appear in is the indeterminate state. This is to indicate that a checkbox is neither checked nor unchecked. This is useful when dealing with related groups of checkboxes that have a dependent relationship, for example, a select all feature."),(0,a.yg)(C,{scope:{Checkbox:r.Sc,CheckboxGroup:r.$Q},noInline:!0,mdxType:"LivePreview"},b),(0,a.yg)("h3",null,"Disabled checkbox"),(0,a.yg)("p",null,"Use a disabled checkbox to indicate that a particular option cannot be interacted with or can be safely ignored."),(0,a.yg)(C,{scope:{Checkbox:r.Sc},language:"jsx",mdxType:"LivePreview"},`<Checkbox
  id="hammer"
  value="hammer"
  name="hammer"
  disabled
  checked
>
  Can't touch this
</Checkbox>`),(0,a.yg)("h3",null,"Required checkbox group"),(0,a.yg)("p",null,"When at least one item from the checkbox group is required, a required indicator should be displayed alongside the group legend. The group help text should be used to describe the requirement."),(0,a.yg)(C,{scope:{Checkbox:r.Sc,CheckboxGroup:r.$Q},language:"jsx",mdxType:"LivePreview"},`<CheckboxGroup
  name="email"
  legend="Email Notifications"
  helpText="We can remind you when one of your Buffer is looking a little empty."
  required
>
  <Checkbox id="empty_buffer" value="empty_buffer">
    Empty buffer
  </Checkbox>
  <Checkbox id="newsletter" value="newsletter">
    Newsletter
  </Checkbox>
  <Checkbox id="update_failures" value="update_failures">
    Update failures
  </Checkbox>
</CheckboxGroup>`),(0,a.yg)("h3",null,"Disabled checkbox group"),(0,a.yg)("p",null,"Use a disabled checkbox group to indicate that all options cannot be interacted with, with each checkbox individually disabled."),(0,a.yg)(C,{scope:{Checkbox:r.Sc,CheckboxGroup:r.$Q},language:"jsx",mdxType:"LivePreview"},`<CheckboxGroup
  name="capabilities"
  legend="Capabilities"
  orientation="horizontal"
  disabled
>
  <Checkbox id="voice" value="voice">
    Voice
  </Checkbox>
  <Checkbox id="fax" value="fax">
    Fax
  </Checkbox>
  <Checkbox id="sms" value="sms">
    SMS
  </Checkbox>
</CheckboxGroup>`),(0,a.yg)("h3",null,"Checkbox group with an inline error"),(0,a.yg)("p",null,"If the selected options don't pass the group validation requirements, display an inline error message below the checkbox group."),(0,a.yg)(C,{scope:{Checkbox:r.Sc,CheckboxGroup:r.$Q},language:"jsx",mdxType:"LivePreview"},`<CheckboxGroup
  name="api"
  legend="API Key Permissions"
  errorText="Select at least one option."
>
  <Checkbox id="full_access" value="full_access">
    Full access
  </Checkbox>
  <Checkbox id="restricted_access" value="restricted_access">
    Restricted access
  </Checkbox>
</CheckboxGroup>`),(0,a.yg)("h2",null,"Composition notes"),(0,a.yg)("h3",null,"Checkbox labels, legends, and help text"),(0,a.yg)("p",null,"Checkboxes and Checkbox Groups must have a visible label."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Aim for no more than 3 words. If the label must be longer and space is limited, wrap the label."),(0,a.yg)("li",{parentName:"ul"},"Structure each checkbox label similarly. For example, make each checkbox a noun."),(0,a.yg)("li",{parentName:"ul"},'Avoid articles ("a", "the") and punctuation. For example, use "SIM registration code" rather than "The SIM registration code".')),(0,a.yg)("p",null,'Checkbox labels should reflect what happens if the box is checked. Avoid situations where the user must check a box to negate something. For example, "Don\'t send message."'),(0,a.yg)("p",null,"Avoid constructing the legend and label text to read as a sentence."),(0,a.yg)("p",null,"Use ",(0,a.yg)("a",{parentName:"p",href:"/components/help-text"},"Help Text")," to give additional context and provide enough information to avoid errors. Consider using Help Text to indicate to users that they can select multiple options. Limit Help Text to 1-2 sentences."),(0,a.yg)("p",null,'To support internationalization, avoid starting a sentence with the legend and using the field to finish it since sentence structures vary across languages. For example, use "Phone Number capabilities", not "Phone Number capabilities include:".'),(0,a.yg)("h3",null,"Validation and errors"),(0,a.yg)("p",null,"Validate form fields on form submission. Don't validate each item in a group, treat validation on the group as a whole."),(0,a.yg)("p",null,"Use inline error text to explain how to fix an error. Because space is typically limited, focus the error text on how users can fix the issue. For additional guidance on how to compose error messages, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,a.yg)("h2",null,"Do and don't"),(0,a.yg)(s.l,{mdxType:"DoDont"},(0,a.yg)(s.Do,{title:"Do",body:"Use checkboxes to enable multiple choice.",mdxType:"Do"}),(0,a.yg)(s.w,{title:"Don't",body:"Don't use checkboxes when you need to restrict selection to a single option. Use a Radio Group or Select instead.",mdxType:"Dont"})),(0,a.yg)(s.l,{mdxType:"DoDont"},(0,a.yg)(s.Do,{title:"Do",body:"Save the choice the user made upon submission of the form.",mdxType:"Do"}),(0,a.yg)(s.w,{title:"Don't",body:"Don't save or persist a user's choice upon checking a checkbox.",mdxType:"Dont"})),(0,a.yg)(s.l,{mdxType:"DoDont"},(0,a.yg)(s.Do,{title:"Do",body:"Keep help text and error text concise and simple. If you need to use more than 2 sentences to explain a field, link out to supporting docs or trigger a popover instead.",mdxType:"Do"}),(0,a.yg)(s.w,{title:"Don't",body:"Don't use more than 2 sentences in help text or error text.",mdxType:"Dont"})),(0,a.yg)(s.l,{mdxType:"DoDont"},(0,a.yg)(s.Do,{title:"Do",body:"Include a visible label on every checkbox. Include a visible legend for the entire group of checkboxes.",mdxType:"Do"}),(0,a.yg)(s.w,{title:"Don't",body:"Don't leave floating, unlabelled checkboxes.",mdxType:"Dont"})),(0,a.yg)(s.l,{mdxType:"DoDont"},(0,a.yg)(s.Do,{title:"Do",body:"Write label text that clearly describes the value being requested.",mdxType:"Do"}),(0,a.yg)(s.w,{title:"Don't",body:"Don't use the legend and label text in a way that is intended to be read as a sentence.",mdxType:"Dont"})),(0,a.yg)(s.l,{mdxType:"DoDont"},(0,a.yg)(s.Do,{title:"Do",body:"Write legend text to describe a group and their intended relationship together.",mdxType:"Do"}),(0,a.yg)(s.w,{title:"Don't",body:"Don't use a legend as a heading or section title.",mdxType:"Dont"})),(0,a.yg)(s.l,{mdxType:"DoDont"},(0,a.yg)(s.Do,{title:"Do",body:"Provide actionable error text explaining how to fix the error.",mdxType:"Do"}),(0,a.yg)(s.w,{title:"Don't",body:"Don't display system messages as error text or only what field errored.",mdxType:"Dont"})),(0,a.yg)(s.l,{mdxType:"DoDont"},(0,a.yg)(s.Do,{title:"Do",body:"Use error text to explain how to resolve the error. For example, 'Accept the terms of agreement.'",mdxType:"Do"}),(0,a.yg)(s.w,{title:"Don't",body:"Don’t focus on whether the field is required. For example, 'Accepting the terms of agreement is required.'",mdxType:"Dont"})))}w.isMDXComponent=!0},22275:(e,o,t)=>{"use strict";t.d(o,{a:()=>n});var a=t(76127),r=t(8909),l=t(86146),i=t(55729),n=i.forwardRef(({children:e,disabled:o,element:t="INLINE_CONTROL_GROUP",errorText:n,helpText:c,legend:d,orientation:s="vertical",required:h,i18nRequiredLabel:u,fieldStyleProps:p,...b},g)=>{let m=!!p;return i.createElement(a.az,{...(0,a.x8)(b),as:"fieldset",element:t,margin:"space0",padding:"space0",minWidth:"0px",borderWidth:"borderWidth0",ref:g},i.createElement(l.J,{as:"legend",element:"LEGEND",htmlFor:void 0,required:h,marginBottom:"space0",disabled:o,i18nRequiredLabel:u},d),c&&i.createElement(r.$,{marginTop:"space0"},c),i.createElement(a.az,{element:`${t}_SET`,marginRight:m?void 0:"space20"},i.createElement(a.az,{display:m&&"horizontal"===s?"inline-flex":"block",width:m?"100%":void 0},i.Children.map(e,(e,o)=>i.createElement(a.az,{element:`${t}_FIELD`,display:"horizontal"===s?"inline-block":"block",flexBasis:m?"50%":void 0,marginTop:p?.marginTop?0===o&&"vertical"===s?"space40":p?.marginTop:"space40",marginRight:"horizontal"!==s||m?null:"space70",marginLeft:m&&"horizontal"===s?0===o?"space0":"space30":"space0"},e))),n&&i.createElement(a.az,{element:`${t}_ERROR_TEXT_WRAPPER`,marginTop:"space40"},i.createElement(r.$,{variant:"error"},n))))});n.displayName="InlineControlGroup"},39256:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox",function(){return t(22141)}])},40615:(e,o,t)=>{"use strict";t.d(o,{A:()=>g});var a=t(72387),r=t(76127),l=t(95669),i=t.n(l),n=t(81278);t(55729);var c=t(10511),d=t(43084),s=t(10732),h=t(62887),u=t(63437),p=t(38992);let b={h1:()=>null},g=({children:e,meta:o,navigationData:t,data:l,mdxHeadings:g,pageHeaderData:{categoryRoute:m,githubUrl:x,storybookUrl:k}})=>{let y=o.title?`${o.title} - ${p.DZ.TITLE}`:p.DZ.TITLE,C=o.description||p.DZ.DESCRIPTION,v=(0,n.useRouter)();return(0,a.FD)(u.T,{navigationData:t,children:[(0,a.FD)(i(),{children:[(0,a.Y)("title",{children:y}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${v.pathname}`}),(0,a.Y)("meta",{name:"description",content:C},"description")]}),(0,a.FD)(c.s,{children:[(0,a.Y)(h.c,{categoryRoute:m,githubUrl:x,storybookUrl:k,data:l}),(0,a.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,a.Y)(s.i,{data:g}),(0,a.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,a.Y)(d.Q,{componentOverrides:o.package?b:{},children:e})})]})]})]})}},47837:(e,o,t)=>{"use strict";t.d(o,{$Q:()=>C,Ri:()=>k,Sc:()=>y,iA:()=>x,zc:()=>v});var a=t(79559),r=t(76127),l=t(98536),i=t(81423),n=t(86146),c=t(7658),d=t(36669),s=t(55729),h=t(22275),u=t(8909),p=s.createContext({disabled:!1,name:void 0,hasError:void 0,onChange:()=>{}}),b={paddingTop:"space20",paddingRight:"space30",paddingBottom:"space20",paddingLeft:"space30",borderRadius:"borderRadius20",backgroundColor:"colorBackground"},g={...b,backgroundColor:"colorBackground"},m={paddingLeft:"space30",paddingRight:"space30"},x=s.forwardRef((e,o)=>s.createElement(r.az,{...e,ref:o,as:"input",type:"checkbox",size:"size0",border:"none",overflow:"hidden",padding:"space0",margin:"space0",whiteSpace:"nowrap",textTransform:"none",position:"absolute",clip:"rect(0 0 0 0)"}));x.displayName="HiddenCheckbox";var k=({checked:e,element:o,indeterminate:t})=>t?s.createElement(i.MinusIcon,{element:o,decorative:!0,color:"inherit",size:"sizeIcon10"}):s.createElement(l.CheckboxCheckIcon,{element:o,display:e?"block":"none",decorative:!0,color:"inherit",size:"sizeIcon10"});k.displayName="CheckboxIcon";var y=s.forwardRef(({checked:e,defaultChecked:o,element:t="CHECKBOX",children:l,helpText:i,id:h,indeterminate:u,isSelectAll:y,isSelectAllChild:C,required:v,onChange:f,...w},T)=>{if(null!=e&&null!=o)throw Error('[Paste Checkbox] Do not provide both "defaultChecked" and "checked" to Checkbox at the same time. Please consider if you want this component to be controlled or uncontrolled.');let[E,D]=s.useState(o),S=s.useContext(p),I=(0,d.GV)(),R=h||(0,d.GV)(),_=s.useMemo(()=>void 0!==e,[]),B=_?e:E,N=s.useCallback(e=>{_?f?f(e):S.onChange(e):D(e.target.checked)},[f,S.onChange]),P=null!=w.disabled?w.disabled:S.disabled,A=null!=w.name?w.name:S.name,$=null!=w.hasError?w.hasError:S.hasError,L={};return y&&(L=!P&&(B||u)?g:b),C&&(L=m),s.createElement(r.az,{element:t,display:"inline-flex",position:"relative",flexDirection:"column",...L},s.createElement(x,{...(0,r.x8)(w),checked:e,defaultChecked:o,disabled:P,name:A,onChange:N,"aria-describedby":I,"aria-checked":u?"mixed":e,"aria-invalid":$,id:R,required:v,ref:T}),s.createElement(a.g$,{disabled:P,htmlFor:R},s.createElement(a.BJ,{alignItems:"center",borderRadius:"borderRadius20",element:`${t}_CONTROL`,disabled:P,position:"relative",type:"checkbox"},s.createElement(k,{element:`${t}_ICON`,checked:B,indeterminate:u})),s.createElement(a.pX,{element:`${t}_LABEL_TEXT`,fontWeight:y?null:"fontWeightMedium"},s.createElement(c.Ss,{verticalAlign:"top"},v&&s.createElement(c.pV,{spacing:"space20"},s.createElement(n.j,null)),s.createElement(c.To,null,l)))),i&&s.createElement(a._v,{element:`${t}_HELP_TEXT_WRAPPER`,helpTextId:I},i))});y.displayName="Checkbox";var C=s.forwardRef(({children:e,element:o="CHECKBOX_GROUP",disabled:t=!1,errorText:a,isSelectAll:r=!1,name:l,onChange:i,orientation:n="vertical",i18nRequiredLabel:c="(required)",...d},u)=>{let b=s.useCallback(e=>{i?.(e.target.checked)},[i]),g=s.useMemo(()=>({disabled:t,name:l,onChange:b,hasError:!!a||void 0}),[t,l,b]);return s.createElement(p.Provider,{value:g},s.createElement(h.a,{...d,element:o,disabled:t,errorText:a,name:l,orientation:n,ref:u,i18nRequiredLabel:c},s.Children.map(e,(e,o)=>s.isValidElement(e)?s.cloneElement(e,{isSelectAll:r&&0===o,isSelectAllChild:r&&"vertical"===n&&0!==o}):e)))});C.displayName="CheckboxGroup";var v=s.forwardRef(({children:e,element:o="CHECKBOX_DISCLAIMER",errorText:t,...a},l)=>s.createElement(s.Fragment,null,s.createElement(r.az,{element:o,backgroundColor:"colorBackground",borderRadius:"borderRadius20",padding:"space50"},s.createElement(y,{...a,hasError:null!=t,ref:l},e)),t&&s.createElement(r.az,{marginTop:"space30",element:`${o}_ERROR_TEXT_WRAPPER`,marginLeft:"space50"},s.createElement(u.$,{variant:"error"},t))));v.displayName="CheckboxDisclaimer"},79559:(e,o,t)=>{"use strict";t.d(o,{BJ:()=>d,_v:()=>u,g$:()=>s,pX:()=>h});var a=t(76127),r=t(8909),l=t(86146),i=t(86860),n=t(629),c=t(55729),d=c.forwardRef(({children:e,disabled:o,applyHoverStyles:t=!1,element:a="BASE_RADIO_CHECKBOX_CONTROL",...r},l)=>c.createElement(i.K,{as:"span",ref:l,display:"flex",element:a,backgroundColor:"colorBackgroundBody",borderColor:t?"colorBorderPrimaryStronger":"colorBorder",borderStyle:"solid",borderWidth:"borderWidth10",height:"sizeSquare50",marginRight:"space20",marginY:"space10",width:"sizeSquare50",color:"colorTextWeakest",_hoverSibling:{borderColor:"colorBorderPrimaryStronger",color:"colorTextWeakest"},_focusSibling:{borderColor:"colorBorder",boxShadow:"shadowFocus",color:"colorTextInverse"},_activeSibling:o?void 0:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger",color:"colorTextWeakest"},_checkedSibling:{borderColor:"colorBorderPrimary",backgroundColor:"colorBackgroundPrimary",color:"colorTextInverse"},_disabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground"},_invalidSibling:{borderColor:"colorBorderError"},_invalidAndHoverSibling:{borderColor:"colorBorderErrorStronger"},_invalidAndDisabledSibling:{borderColor:"colorBorderWeak"},_checkedAndHoverSibling:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger",color:"colorTextWeakest"},_checkedAndFocusSibling:{borderColor:"colorBorderPrimary",backgroundColor:"colorBackgroundPrimary",color:"colorTextInverse"},_checkedAndActiveSibling:o?void 0:{borderColor:"colorBorderPrimaryStronger",backgroundColor:"colorBackgroundPrimaryStronger"},_checkedAndDisabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground",color:"colorTextWeaker"},_checkedAndInvalidSibling:{borderColor:"colorBorderError",backgroundColor:"colorBackgroundError",color:"colorTextInverse"},_checkedAndInvalidAndHoverSibling:{borderColor:"colorBorderErrorStronger",backgroundColor:"colorBackgroundErrorStronger"},_checkedAndInvalidAndDisabledSibling:{borderColor:"colorBorderWeak",backgroundColor:"colorBackground",color:"colorTextWeaker"},...r},e));d.displayName="BaseRadioCheckboxControl";var s=c.forwardRef(({children:e,...o},t)=>c.createElement(l.J,{...o,marginBottom:"space0",ref:t},c.createElement(a.az,{as:"span",display:"flex"},e)));s.displayName="BaseRadioCheckboxLabel";var h=c.forwardRef(({children:e,element:o="BASE_RADIO_CHECKBOX_LABEL_TEXT",...t},a)=>c.createElement(n.EY,{as:"span",color:"currentColor",marginLeft:"space20",element:o,ref:a,...t},e));h.displayName="BaseRadioCheckboxLabelText";var u=c.forwardRef(({children:e,helpTextId:o,element:t="BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER"},l)=>c.createElement(a.az,{as:"span",display:"block",element:t,marginLeft:"space70",ref:l},c.createElement(r.$,{id:o,marginTop:"space0"},e)));u.displayName="BaseRadioCheckboxHelpText"},81423:(e,o,t)=>{"use strict";t.r(o),t.d(o,{MinusIcon:()=>i});var a=t(36669),r=t(55729),l=t(96316);let i=r.forwardRef(({as:e,display:o,element:t="ICON",size:i,color:n,title:c,decorative:d},s)=>{let h=`MinusIcon-${(0,a.GV)()}`;if(!d&&null==c)throw Error("[MinusIcon]: Missing a title for non-decorative icon.");return r.createElement(l.IconWrapper,{as:e,display:o,element:t,size:i,color:n,ref:s},r.createElement("svg",{role:"img","aria-hidden":d,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":h},c?r.createElement("title",{id:h},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.167 9.5c.46 0 .833.448.833 1 0 .513-.322.936-.736.993l-.097.007H5.833c-.46 0-.833-.448-.833-1 0-.513.322-.936.736-.993l.097-.007h8.334z"})))});i.displayName="MinusIcon"},86860:(e,o,t)=>{"use strict";t.d(o,{K:()=>n});var a=t(76127),r=t(27717),l=t(55729),i=(0,r.I4)(a.az)(({_activeSibling:e,_boxChild:o,_checkedAndActiveSibling:t,_checkedAndDisabledSibling:a,_checkedAndFocusSibling:l,_checkedAndHoverSibling:i,_checkedAndInvalidSibling:n,_checkedAndInvalidAndDisabledSibling:c,_checkedAndInvalidAndHoverSibling:d,_checkedSibling:s,_checkedSiblingAndBoxChild:h,_disabledSibling:u,_focusSibling:p,_hoverSibling:b,_invalidSibling:g,_invalidAndHoverSibling:m,_invalidAndDisabledSibling:x,type:k="checkbox"})=>{let y=`input[type=${k}]:active + label &`,C=`input[type=${k}]:checked + label &, input[type=${k}][aria-checked=mixed] + label &`,v=`input[type=${k}]:checked:active + label &, input[type=${k}][aria-checked=mixed]:active + label &`,f=`input[type=${k}]:checked + label & > *, input[type=${k}][aria-checked=mixed] + label & > *`,w=`input[type=${k}]:checked:disabled + label &, input[type=${k}][aria-checked=mixed]:disabled + label &`,T=`input[type=${k}]:checked:focus + label &, input[type=${k}][aria-checked=mixed]:focus + label &`,E=`input[type=${k}]:checked:hover:not(:disabled) + label &, input[type=${k}][aria-checked=mixed]:hover:not(:disabled) + label &`,D=`input[type=${k}][aria-invalid=true]:checked + label &`,S=`input[type=${k}][aria-invalid=true]:checked:disabled + label &`,I=`input[type=${k}][aria-invalid=true]:checked:hover:not(:disabled) + label &`,R=`input[type=${k}] + label & > *`,_=`input[type=${k}]:disabled + label &`,B=`input[type=${k}]:focus + label &`,N=`input[type=${k}]:hover:not(:disabled):not(:checked) + label &`,P=`input[type=${k}][aria-invalid=true] + label &`,A=`input[type=${k}][aria-invalid=true]:hover:not(:disabled) + label &`,$=`input[type=${k}][aria-invalid=true]:disabled + label &`;return(0,r.AH)({[y]:e,[C]:s,[v]:t,[f]:h,[w]:a,[T]:l,[E]:i,[D]:n,[S]:c,[I]:d,[R]:o,[_]:u,[B]:p,[N]:b,[P]:g,[A]:m,[$]:x})}),n=l.forwardRef(({"aria-hidden":e="true",alignItems:o="center",display:t="inline-flex",element:a="SIBLING_BOX",flexShrink:r=0,justifyContent:n="center",transition:c="all 120ms",...d},s)=>l.createElement(i,{alignItems:o,"aria-hidden":e,display:t,element:a,flexShrink:r,justifyContent:n,ref:s,transition:c,...d}));n.displayName="SiblingBox"},98536:(e,o,t)=>{"use strict";t.r(o),t.d(o,{CheckboxCheckIcon:()=>i});var a=t(36669),r=t(55729),l=t(96316);let i=r.forwardRef(({as:e,display:o,element:t="ICON",size:i,color:n,title:c,decorative:d},s)=>{let h=`CheckboxCheckIcon-${(0,a.GV)()}`;if(!d&&null==c)throw Error("[CheckboxCheckIcon]: Missing a title for non-decorative icon.");return r.createElement(l.IconWrapper,{as:e,display:o,element:t,size:i,color:n,ref:s},r.createElement("svg",{role:"img","aria-hidden":d,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":h},c?r.createElement("title",{id:h},c):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.59 5.916a1.386 1.386 0 00-1.98 0l-5.04 5.138L6.39 8.83a1.38 1.38 0 00-1.98 0 1.448 1.448 0 000 2.018l3.171 3.233a1.382 1.382 0 001.98 0l6.03-6.148a1.448 1.448 0 000-2.018z"})))});i.displayName="CheckboxCheckIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=39256)),_N_E=e.O()}]);