(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9863],{12480:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/switch",function(){return a(75963)}])},15367:(e,t,a)=>{"use strict";a.d(t,{Cv:()=>s,PK:()=>h,xP:()=>d});var i=a(76127),n=a(41456),r=a(55729),o=a(4073),l=a(629),c=r.createContext({}),s=r.forwardRef(({children:e,element:t="BLOCKQUOTE",url:a,marginBottom:o="space70",...l},s)=>r.createElement(i.az,{...(0,i.x8)(l),ref:s,display:"flex",columnGap:"space50",alignItems:"flex-start",lineHeight:"lineHeight30",fontSize:"fontSize30",marginBottom:o,element:t},r.createElement(n.BlockquoteIcon,{element:`${t}_ICON`,decorative:!0,color:"colorTextIcon"}),r.createElement(c.Provider,{value:{url:a}},r.createElement(i.az,{element:`INNER_${t}`},e))));s.displayName="Blockquote";var d=r.forwardRef(({children:e,element:t="BLOCKQUOTE_CONTENT",...a},n)=>{let{url:o}=r.useContext(c);return r.createElement(i.az,{...(0,i.x8)(a),as:"blockquote",margin:"space0",ref:n,element:t,cite:o},e)});d.displayName="BlockquoteContent";var h=r.forwardRef(({element:e="BLOCKQUOTE_CITATION",author:t,source:a,...n},s)=>{let{url:d}=r.useContext(c);return r.createElement(i.az,{...(0,i.x8)(n),marginTop:"space30",marginBottom:"space0",as:"p",element:e,ref:s},"—"," ",r.createElement(l.EY,{as:"span",fontWeight:"fontWeightSemibold",element:`${e}_AUTHOR`},t),a?r.createElement(r.Fragment,null,","," ",r.createElement(i.az,{as:"cite",fontStyle:"normal",element:`${e}_CITE`},d?r.createElement(o.Mz,{href:d,showExternal:!0,element:`${e}_ANCHOR`},a):r.createElement(l.EY,{as:"span",element:`${e}_TEXT`},a))):null)});h.displayName="BlockquoteCitation"},22275:(e,t,a)=>{"use strict";a.d(t,{a:()=>l});var i=a(76127),n=a(8909),r=a(86146),o=a(55729),l=o.forwardRef(({children:e,disabled:t,element:a="INLINE_CONTROL_GROUP",errorText:l,helpText:c,legend:s,orientation:d="vertical",required:h,i18nRequiredLabel:u,fieldStyleProps:p,...m},g)=>{let w=!!p;return o.createElement(i.az,{...(0,i.x8)(m),as:"fieldset",element:a,margin:"space0",padding:"space0",minWidth:"0px",borderWidth:"borderWidth0",ref:g},o.createElement(r.J,{as:"legend",element:"LEGEND",htmlFor:void 0,required:h,marginBottom:"space0",disabled:t,i18nRequiredLabel:u},s),c&&o.createElement(n.$,{marginTop:"space0"},c),o.createElement(i.az,{element:`${a}_SET`,marginRight:w?void 0:"space20"},o.createElement(i.az,{display:w&&"horizontal"===d?"inline-flex":"block",width:w?"100%":void 0},o.Children.map(e,(e,t)=>o.createElement(i.az,{element:`${a}_FIELD`,display:"horizontal"===d?"inline-block":"block",flexBasis:w?"50%":void 0,marginTop:p?.marginTop?0===t&&"vertical"===d?"space40":p?.marginTop:"space40",marginRight:"horizontal"!==d||w?null:"space70",marginLeft:w&&"horizontal"===d?0===t?"space0":"space30":"space0"},e))),l&&o.createElement(i.az,{element:`${a}_ERROR_TEXT_WRAPPER`,marginTop:"space40"},o.createElement(n.$,{variant:"error"},l))))});l.displayName="InlineControlGroup"},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>g});var i=a(72387),n=a(76127),r=a(95669),o=a.n(r),l=a(81278);a(55729);var c=a(10511),s=a(43084),d=a(10732),h=a(62887),u=a(63437),p=a(38992);let m={h1:()=>null},g=({children:e,meta:t,navigationData:a,data:r,mdxHeadings:g,pageHeaderData:{categoryRoute:w,githubUrl:y,storybookUrl:b}})=>{let S=t.title?`${t.title} - ${p.DZ.TITLE}`:p.DZ.TITLE,f=t.description||p.DZ.DESCRIPTION,v=(0,l.useRouter)();return(0,i.FD)(u.T,{navigationData:a,children:[(0,i.FD)(o(),{children:[(0,i.Y)("title",{children:S}),(0,i.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${v.pathname}`}),(0,i.Y)("meta",{name:"description",content:f},"description")]}),(0,i.FD)(c.s,{children:[(0,i.Y)(h.c,{categoryRoute:w,githubUrl:y,storybookUrl:b,data:r}),(0,i.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,i.Y)(d.i,{data:g}),(0,i.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,i.Y)(s.Q,{componentOverrides:t.package?m:{},children:e})})]})]})]})}},41456:(e,t,a)=>{"use strict";a.r(t),a.d(t,{BlockquoteIcon:()=>o});var i=a(36669),n=a(55729),r=a(96316);let o=n.forwardRef(({as:e,display:t,element:a="ICON",size:o,color:l,title:c,decorative:s},d)=>{let h=`BlockquoteIcon-${(0,i.GV)()}`;if(!s&&null==c)throw Error("[BlockquoteIcon]: Missing a title for non-decorative icon.");return n.createElement(r.IconWrapper,{as:e,display:t,element:a,size:o,color:l,ref:d},n.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":h},c?n.createElement("title",{id:h},c):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M15.865 16.305a44.92 44.92 0 01-1.698.028c-.707 0-1.264-.011-1.699-.028-1.018-.039-1.754-.819-1.781-1.824a62.15 62.15 0 01-.02-1.67V9.646c0-3.19 2.12-5.165 4.585-5.926.335-.103.765-.073 1.061.236.224.232.378.5.484.738.267.605-.107 1.181-.552 1.454-.707.433-1.218.918-1.554 1.48-.29.485-.459 1.044-.498 1.705.635 0 1.148.007 1.56.017 1.065.025 1.87.833 1.896 1.897a65.173 65.173 0 01-.002 3.234c-.028 1.005-.764 1.785-1.782 1.824zm-8.333 0a44.92 44.92 0 01-1.699.028c-.706 0-1.263-.011-1.698-.028-1.018-.039-1.754-.819-1.782-1.824-.011-.432-.02-.981-.02-1.67V9.646c0-3.19 2.12-5.164 4.585-5.925.336-.104.765-.074 1.062.235.224.232.378.5.483.738.268.606-.106 1.182-.552 1.454-.707.434-1.217.918-1.553 1.48-.29.485-.459 1.044-.499 1.705.636 0 1.149.007 1.56.017 1.065.025 1.87.833 1.897 1.897.01.415.017.93.017 1.564 0 .689-.008 1.238-.02 1.67-.027 1.005-.764 1.785-1.78 1.824z"})))});o.displayName="BlockquoteIcon"},49532:(e,t,a)=>{"use strict";a.d(t,{d:()=>f,u:()=>g});var i=a(22275),n=a(55729),r=a(76127),o=a(8909),l=a(86146),c=a(7658),s=a(86860),d=a(629),h=a(36669),u=a(35730),p=a(25630),m=n.createContext({disabled:!1,name:void 0,hasError:void 0,onChange:()=>{}}),g=n.forwardRef(({children:e,element:t="SWITCH_GROUP",disabled:a=!1,errorText:r,name:o,onChange:l,orientation:c="vertical",i18nRequiredLabel:s="(required)",...d},h)=>{let u=n.useCallback(e=>{l?.(e.target.checked)},[l]),p=n.useMemo(()=>({disabled:a,name:o,onChange:u,hasError:!!r||void 0}),[a,o,u]);return n.createElement(m.Provider,{value:p},n.createElement(i.a,{...d,element:t,disabled:a,errorText:r,name:o,orientation:c,ref:h,i18nRequiredLabel:s},e))});g.displayName="SwitchGroup";var w=n.forwardRef(({element:e="SWITCH",disabled:t=!1,checked:a=!1,isHovering:i,height:o,hasError:l=!1,...c},s)=>{let d=(0,p.DP)(),h=d.space?d.space.space20:"4px",m=n.useMemo(()=>((e,t,a)=>{if(e){if(e){if(!t)return"translate(10%)";if(t)return"translateX(105%)"}}else{if(!t&&a)return"translateX(15%)";if(t&&!a)return"translateX(105%)";if(t&&a)return"translateX(100%)"}return"translate(10%)"})(t,a,i),[t,a,i]);return n.createElement(r.az,{width:`calc(100% - ${h})`,height:"100%",position:"absolute",transform:m,transition:"transform .2s ease-in-out"},n.createElement(r.az,{...(0,r.x8)(c),"aria-disabled":t,element:`${e}_KNOB`,ref:s,height:o,width:o,marginTop:"space10",transform:a?"translateX(-100%)":"translateX(0%)",transition:"transform .2s ease-in-out",borderColor:"colorBorder",borderWidth:"borderWidth10",borderRadius:"borderRadiusCircle",backgroundColor:"colorBackgroundBody"},n.createElement(r.az,{display:"flex",height:"100%",alignItems:"center",justifyContent:"center",opacity:a?"1":"0",transition:"opacity .2s ease-in-out, color .2s ease-in-out"},n.createElement(u.SelectedIcon,{decorative:!0,size:"sizeIcon05",element:`${e}_ICON`,color:((e,t,a)=>e&&!t?"colorTextIconError":a&&t?"colorTextWeaker":"currentColor")(l,t,a)}))))});w.displayName="SwitchKnob";var y="1.75rem",b="1rem",S=n.forwardRef((e,t)=>n.createElement(r.az,{...e,ref:t,as:"input",type:"checkbox",role:"switch",size:"size0",border:"none",overflow:"hidden",padding:"space0",margin:"space0",whiteSpace:"nowrap",textTransform:"none",position:"absolute",clip:"rect(0 0 0 0)"}));S.displayName="HiddenSwitch";var f=n.forwardRef(({checked:e,defaultChecked:t,element:a="SWITCH",children:i,helpText:u,id:p,required:g,onChange:f,...v},x)=>{if(null!=e&&null!=t)throw Error("[Paste Switch] Do not provide both 'defaultChecked' and 'checked' to Switch at the same time. Please consider if you want this component to be controlled or uncontrolled.");let[E,k]=n.useState(t),[T,C]=n.useState(!1),N=n.useContext(m),I=(0,h.GV)(),R=p||(0,h.GV)(),_=n.useMemo(()=>void 0!==e,[]),$=_?e:E,P=null!=v.disabled?v.disabled:N.disabled,z=null!=v.name?v.name:N.name,q=null!=v.hasError?v.hasError:N.hasError,B=n.useCallback(e=>{P||(_?f?f(e):N.onChange(e):k(e.currentTarget.checked))},[f,N.onChange,P]);return n.createElement(r.az,{element:a,display:"inline-flex",position:"relative",flexDirection:"column"},n.createElement(S,{...(0,r.x8)(v),checked:e,defaultChecked:t,disabled:P,name:z,onChange:B,"aria-describedby":I,"aria-checked":$,"aria-invalid":q,id:R,required:g,ref:x}),n.createElement(l.J,{disabled:P,htmlFor:R,marginBottom:"space0"},n.createElement(r.az,{as:"span",display:"flex"},n.createElement(s.K,{element:`${a}_CONTROL`,as:"span",outline:"none",position:"relative",display:"inline-block",boxSizing:"content-box",height:b,width:y,marginTop:"space10",overflow:"hidden",borderColor:"colorBorder",borderWidth:"borderWidth10",borderRadius:"borderRadiusPill",transition:"background-color .2s ease-in-out, box-shadow .2s ease-in-out",backgroundColor:"colorBackgroundStronger",cursor:"pointer",onMouseEnter:()=>{C(!0)},onMouseLeave:()=>{C(!1)},_hoverSibling:{backgroundColor:"colorBackgroundStrongest"},_focusSibling:{boxShadow:"shadowFocus"},_checkedSibling:{backgroundColor:"colorBackgroundPrimary",color:"colorTextPrimary"},_disabledSibling:{backgroundColor:"colorBackgroundStrong",color:"currentColor",cursor:"not-allowed"},_checkedAndHoverSibling:{color:"colorTextIcon",backgroundColor:"colorBackgroundStrongest"},_invalidSibling:{backgroundColor:"colorBackgroundError"},_invalidAndHoverSibling:{backgroundColor:"colorBackgroundErrorStrongest"},_invalidAndDisabledSibling:{backgroundColor:"colorBackgroundStrong"}},n.createElement(w,{element:a,disabled:P,checked:$,isHovering:T,height:"0.75rem",hasError:q})),n.createElement(d.EY,{element:`${a}_LABEL_TEXT`,as:"span",color:"currentColor",marginLeft:"space30",fontWeight:"fontWeightMedium"},n.createElement(c.Ss,{verticalAlign:"top"},g&&n.createElement(c.pV,{spacing:"space20"},n.createElement(l.j,null)),n.createElement(c.To,null,i))))),u&&n.createElement(r.az,{as:"span",display:"flex",element:`${a}_HELP_TEXT_WRAPPER`},n.createElement(r.az,{as:"span",boxSizing:"content-box",width:y,height:b,padding:"space10","aria-hidden":!0,role:"presentation",marginRight:"space20",display:"inline-block",element:`${a}_HELP_TEXT_SPACER`}),n.createElement(o.$,{id:I,marginTop:"space0",element:`${a}_HELP_TEXT`},u)))});f.displayName="Switch"},75963:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>f,default:()=>N,getStaticProps:()=>x,mdxHeadings:()=>E,meta:()=>v}),a(55729);var i=a(11885),n=a(4073),r=a(629),o=a(15367),l=a(49532),c=a(36669);let s=`
const SwitchExample = () => (
  <Switch name="settings" value="notifications">
    Notifications
  </Switch>
);

render(
  <SwitchExample />
)
`.trim(),d=`
const SwitchExample = () => {
  return (
    <Switch value="privacy-program-enrollment" helpText={<Anchor href="#" showExternal>Read more about the program</Anchor>}>
      Enroll in Privacy Program
    </Switch>
  );
}

render(
  <SwitchExample />
)
`.trim(),h=`
const SwitchExample = () => {
  return (
    <Switch required value="newsletter-updates">Opt into newsletter updates</Switch>
  );
}

render(
  <SwitchExample />
)
`.trim(),u=`
const SwitchExample = () => {
  return (
    <Switch disabled helpText="Your account must have a verified email for this feature.">
      Enable email notifications
    </Switch>
  );
}

render(
  <SwitchExample />
)
`.trim(),p=`
const SwitchExample = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <Switch checked={checked} onChange={() => setChecked(!checked)}>
      Enable SMS notifications
    </Switch>
  );
}

render(
  <SwitchExample />
)
`.trim(),m=`
const SwitchExample = () => {
  return (
    <Switch checked disabled helpText="Your account must have a verified email for this feature.">
      Enroll in paperless notifications
    </Switch>
  )
}
render(
  <SwitchExample />
)
`.trim(),g=`
const SwitchExample = () => {
  const switchRef = React.useRef(null);
  return (
    <Switch ref={switchRef} name="settings" value="notifications">
      Notifications
    </Switch>
  )
}

render(
  <SwitchExample />
)
`.trim(),w=`
const SwitchExample = () => {
  const [on, setOn] = React.useState(false);

  return (
    <Switch checked={on} onChange={() => setOn(!on)}>
      Notifications
    </Switch>
  )
}
render(
  <SwitchExample />
)
`.trim(),y=`
const SwitchExample = () => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);

  return (
    <SwitchGroup
      name="email-notifications"
      legend={
        <Text as="span" color="currentColor">
          Adjust your email notification settings
        </Text>
      }
      helpText={<Text as="span">To learn more about configurable settings, visit our <Anchor href="#">help center</Anchor>.</Text>}
    >
      <Switch
        value="marketing-updates"
        checked={checked1}
        onChange={() => {
          setChecked1(!checked);
        }}
        helpText={
          <Text as="span" color="currentColor">
            Periodic sales and promotions from our partners.
          </Text>
        }
      >
        Marketing emails
      </Switch>
      <Switch
        value="product-updates"
        checked={checked2}
        onChange={() => {
          setChecked2(!checked2);
        }}
        helpText="Get the latest news and updates about our products."
      >
        Product updates
      </Switch>
      <Switch
        value="account-updates"
        checked={checked3}
        onChange={() => {
          setChecked3(!checked3);
        }}
        helpText="Get the latest news and updates about your account."
      >
        Account updates
      </Switch>
    </SwitchGroup>
  );
}

render(
  <SwitchExample />
)
`.trim(),b=`
const SwitchExample = () => {
  return (
    <SwitchGroup
      orientation="horizontal"
      name="days"
      legend="Jours pr\xe9f\xe9r\xe9s"
      i18nRequiredLabel="(requis)"
      required
    >
      <Switch value="monday">
        Lundi
      </Switch>
      <Switch value="tuesday">
        Mardi
      </Switch>
      <Switch value="wednesday">
        Mercredi
      </Switch>
      <Switch value="thursday">
        Jeudi
      </Switch>
      <Switch value="friday">
        Vendredi
      </Switch>
    </SwitchGroup>
  )
}

render(
  <SwitchExample />
)
`.trim();var S=a(40615),f=!0;let v={title:"Switch",package:"@twilio-paste/switch",description:"A Switch is an interactive binary control.",slug:"/components/switch/"},x=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:E,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/switch",storybookUrl:"/?path=/story/components-switch--default-switch"}}}),E=[{value:"Guidelines",depth:2},{value:"About Switch",depth:3},{value:"Accessibility",depth:3},{value:"Controlled vs. uncontrolled Switch",depth:2},{value:"Examples",depth:2},{value:"Default",depth:3},{value:"With Help Text",depth:3},{value:"Required",depth:3},{value:"Disabled",depth:3},{value:"Switch group",depth:3},{value:"Internationalization",depth:3},{value:"States",depth:2},{value:"On",depth:3},{value:"Disabled on",depth:3},{value:"Composition notes",depth:2}],k=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",e)},T={meta:v,getStaticProps:x,mdxHeadings:E},C=S.A;function N({components:e,...t}){return(0,i.yg)(C,{...T,...t,components:e,mdxType:"MDXLayout"},(0,i.yg)(k,{scope:{Switch:l.d,SwitchGroup:l.u,useUID:c.GV},noInline:!0,mdxType:"LivePreview"},s),(0,i.yg)("h2",null,"Guidelines"),(0,i.yg)("h3",null,"About Switch"),(0,i.yg)("p",null,'A Switch is an interactive binary control. It should be used in forms when an "on/off" or "yes/no" input is needed.'),(0,i.yg)("p",null,"Use Switch when the interaction result is ",(0,i.yg)("strong",{parentName:"p"},"immediate"),'. Users shouldn\'t need to perform an additional action (like use a "Save" or "Submit" button) to confirm Switch input. For example, when a user turns on a "Receive notifications" Switch, they should start receiving notifications immediately upon performing the action.'),(0,i.yg)("p",null,"Use a ",(0,i.yg)("a",{parentName:"p",href:"/components/checkbox"},"Checkbox")," to present a user with a single binary choice that is part of a form or otherwise requires a user to take an additional action to confirm input."),(0,i.yg)(o.Cv,{url:"https://www.nngroup.com/articles/toggle-switch-guidelines/",mdxType:"Blockquote"},(0,i.yg)(o.xP,{mdxType:"BlockquoteContent"},"Users expect the same immediate results from a digital toggle as they do from their real-world counterparts (e.g., light switches). Immediate results are a facet of toggle switches that grants users the freedom and control to update their preferences as needed."),(0,i.yg)(o.PK,{author:"Nielsen Norman Group",source:"Toggle-Switch Guidelines",mdxType:"BlockquoteCitation"})),(0,i.yg)("h3",null,"Accessibility"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"SwitchGroup ",(0,i.yg)("strong",{parentName:"li"},"must")," have a ",(0,i.yg)("inlineCode",{parentName:"li"},"legend")," that describes the collection."),(0,i.yg)("li",{parentName:"ul"},"Switch always has the ",(0,i.yg)("inlineCode",{parentName:"li"},'role="switch"')," attribute."),(0,i.yg)("li",{parentName:"ul"},"Switch must have a visible label that is in close proximity to the control."),(0,i.yg)("li",{parentName:"ul"},"If you want to mark a Switch as required, use the ",(0,i.yg)("inlineCode",{parentName:"li"},"required")," prop.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Only use the ",(0,i.yg)("inlineCode",{parentName:"li"},"required")," prop on the SwitchGroup if you want to mark the entire group as required."),(0,i.yg)("li",{parentName:"ul"},"If you want to mark a single Switch as required, use the ",(0,i.yg)("inlineCode",{parentName:"li"},"required")," prop on it directly."),(0,i.yg)("li",{parentName:"ul"},"Ensure the label text includes wording that successfully describes the requirement to the user that they should toggle the Switch on"))),(0,i.yg)("li",{parentName:"ul"},"When in an error state display an inline error message below the offending Switch that clearly describes the error."),(0,i.yg)("li",{parentName:"ul"},"When displaying additional content based on toggling a Switch, be sure that the new content appears after the Switch in question so that it is naturally discoverable by assistive technology users.")),(0,i.yg)("h2",null,"Controlled vs. uncontrolled Switch"),(0,i.yg)("p",null,"The Switch can either be controlled, meaning there is an external state that determines if the Switch is on or not, or uncontrolled, meaning the Switch manages its own state."),(0,i.yg)("p",null,"To make an uncontrolled Switch, you do not pass the ",(0,i.yg)("inlineCode",{parentName:"p"},"checked")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"onChange")," prop."),(0,i.yg)(k,{scope:{Switch:l.d},noInline:!0,mdxType:"LivePreview"},g),(0,i.yg)("p",null,"To make a controlled Switch, you must pass the ",(0,i.yg)("inlineCode",{parentName:"p"},"checked")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"onChange")," prop."),(0,i.yg)(k,{scope:{Switch:l.d},noInline:!0,mdxType:"LivePreview"},w),(0,i.yg)("h2",null,"Examples"),(0,i.yg)("h3",null,"Default"),(0,i.yg)("p",null,"A Switch is always displayed with a visible label. The ",(0,i.yg)("em",{parentName:"p"},"label text should never change")," based on the state of the Switch."),(0,i.yg)(k,{scope:{Switch:l.d},noInline:!0,mdxType:"LivePreview"},s),(0,i.yg)("h3",null,"With Help Text"),(0,i.yg)("p",null,"In cases where the Switch requires additional context, you can display this information as help text below the Switch and label. This can help keep Switch labels concise. In order to maintain styling consistency, be sure to use the ",(0,i.yg)("inlineCode",{parentName:"p"},"helpText")," prop here instead of using the Help Text component."),(0,i.yg)(k,{scope:{Switch:l.d,Anchor:n.Mz},noInline:!0,mdxType:"LivePreview"},d),(0,i.yg)("h3",null,"Required"),(0,i.yg)("p",null,`When a Switch is required to be 'on', a required indicator should be displayed alongside the label.
The label text should also be written in such a way that this requirement is clear to the user.`),(0,i.yg)(k,{scope:{Switch:l.d},noInline:!0,mdxType:"LivePreview"},h),(0,i.yg)("h3",null,"Disabled"),(0,i.yg)("p",null,`Use a disabled Switch to indicate to users that it is not interactive. If interactivity
is dependent on another action, make that clear using help text.`),(0,i.yg)(k,{scope:{Switch:l.d},noInline:!0,mdxType:"LivePreview"},u),(0,i.yg)("h3",null,"Switch group"),(0,i.yg)("p",null,`Multiple Switches and their labels are grouped together with a common group component.
The group legend must be the first element inside the group. It must appear before any Switch or other content.`),(0,i.yg)(k,{scope:{Switch:l.d,SwitchGroup:l.u,Text:r.EY,Anchor:n.Mz},noInline:!0,mdxType:"LivePreview"},y),(0,i.yg)("h3",null,"Internationalization"),(0,i.yg)("p",null,`To internationalize a Switch, simply pass different text to the Switch and SwitchGroup. The only exception to this is
the required dot in the legend of a required SwitchGroup. To change the required dot's text, use the `,(0,i.yg)("inlineCode",{parentName:"p"},"i18nRequiredLabel")," prop."),(0,i.yg)(k,{scope:{Switch:l.d,SwitchGroup:l.u},noInline:!0,mdxType:"LivePreview"},b),(0,i.yg)("h2",null,"States"),(0,i.yg)("h3",null,"On"),(0,i.yg)("p",null,"The default Switch state is off."),(0,i.yg)(k,{scope:{Switch:l.d},noInline:!0,mdxType:"LivePreview"},p),(0,i.yg)("h3",null,"Disabled on"),(0,i.yg)("p",null,`Use the disabled on Switch to indicate to users that it is not interactive and cannot be turned off.
If interactivity is dependent on another action, make that clear using help text.`),(0,i.yg)(k,{scope:{Switch:l.d},noInline:!0,mdxType:"LivePreview"},m),(0,i.yg)("h2",null,"Composition notes"),(0,i.yg)("p",null,"Switch label text should indicate what the Switch does when it is ",(0,i.yg)("strong",{parentName:"p"},"on"),', but should not describe the state itself ("enabled", "disabled"). Label text shouldn\'t change when the state of the Switch changes.'),(0,i.yg)("p",null,"Switch labels should be concise and put the most important information in the first few words. Avoid making the label a question."),(0,i.yg)("p",null,"Use ",(0,i.yg)("a",{parentName:"p",href:"/components/help-text"},"Help Text")," for additional information, like any notable implications of turning on the Switch."))}N.isMDXComponent=!0},86860:(e,t,a)=>{"use strict";a.d(t,{K:()=>l});var i=a(76127),n=a(27717),r=a(55729),o=(0,n.I4)(i.az)(({_activeSibling:e,_boxChild:t,_checkedAndActiveSibling:a,_checkedAndDisabledSibling:i,_checkedAndFocusSibling:r,_checkedAndHoverSibling:o,_checkedAndInvalidSibling:l,_checkedAndInvalidAndDisabledSibling:c,_checkedAndInvalidAndHoverSibling:s,_checkedSibling:d,_checkedSiblingAndBoxChild:h,_disabledSibling:u,_focusSibling:p,_hoverSibling:m,_invalidSibling:g,_invalidAndHoverSibling:w,_invalidAndDisabledSibling:y,type:b="checkbox"})=>{let S=`input[type=${b}]:active + label &`,f=`input[type=${b}]:checked + label &, input[type=${b}][aria-checked=mixed] + label &`,v=`input[type=${b}]:checked:active + label &, input[type=${b}][aria-checked=mixed]:active + label &`,x=`input[type=${b}]:checked + label & > *, input[type=${b}][aria-checked=mixed] + label & > *`,E=`input[type=${b}]:checked:disabled + label &, input[type=${b}][aria-checked=mixed]:disabled + label &`,k=`input[type=${b}]:checked:focus + label &, input[type=${b}][aria-checked=mixed]:focus + label &`,T=`input[type=${b}]:checked:hover:not(:disabled) + label &, input[type=${b}][aria-checked=mixed]:hover:not(:disabled) + label &`,C=`input[type=${b}][aria-invalid=true]:checked + label &`,N=`input[type=${b}][aria-invalid=true]:checked:disabled + label &`,I=`input[type=${b}][aria-invalid=true]:checked:hover:not(:disabled) + label &`,R=`input[type=${b}] + label & > *`,_=`input[type=${b}]:disabled + label &`,$=`input[type=${b}]:focus + label &`,P=`input[type=${b}]:hover:not(:disabled):not(:checked) + label &`,z=`input[type=${b}][aria-invalid=true] + label &`,q=`input[type=${b}][aria-invalid=true]:hover:not(:disabled) + label &`,B=`input[type=${b}][aria-invalid=true]:disabled + label &`;return(0,n.AH)({[S]:e,[f]:d,[v]:a,[x]:h,[E]:i,[k]:r,[T]:o,[C]:l,[N]:c,[I]:s,[R]:t,[_]:u,[$]:p,[P]:m,[z]:g,[q]:w,[B]:y})}),l=r.forwardRef(({"aria-hidden":e="true",alignItems:t="center",display:a="inline-flex",element:i="SIBLING_BOX",flexShrink:n=0,justifyContent:l="center",transition:c="all 120ms",...s},d)=>r.createElement(o,{alignItems:t,"aria-hidden":e,display:a,element:i,flexShrink:n,justifyContent:l,ref:d,transition:c,...s}));l.displayName="SiblingBox"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=12480)),_N_E=e.O()}]);