(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1536],{5340:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/slider",function(){return a(8696)}])},8696:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>E,default:()=>N,getStaticProps:()=>S,mdxHeadings:()=>R,meta:()=>T}),a(55729);var r=a(11885),l=a(76616),n=a(41621),o=a(76127),i=a(16704),d=a(629),s=a(77597),u=a(86146),m=a(8909),c=a(31910),p=a(36669),g=a(65625),h=a(40615),y=a(89564);let b=`
const DefaultSliderExample = () => {
  const [value, setValue] = React.useState(0.75);
  const id = useUID();

  const numberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US');
  }, []);

  return (
    <Form>
      <FormControl>
        <Label htmlFor={id}>Brightness</Label>
        <Slider
          id={id}
          numberFormatter={numberFormatter}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </FormControl>
    </Form>
  );
};

render(
  <DefaultSliderExample />
)
`.trim(),x=`
const DisabledSliderExample = () => {
  const [value, setValue] = React.useState(0.5);
  const id = useUID();

  const numberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US', { style: 'percent' });
  }, []);

  return (
    <Form>
      <FormControl>
        <Label disabled htmlFor={id}>Volume</Label>
        <Slider
          disabled
          id={id}
          value={value}
          minValue={0}
          maxValue={1}
          step={0.01}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={numberFormatter}
        />
      </FormControl>
    </Form>
  );
};

render(
  <DisabledSliderExample />
)
`.trim(),f=`
const ErrorSliderExample = () => {
  const [value, setValue] = React.useState(0.2);
  const id = useUID();
  const helpTextId = useUID();

  const numberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US', { style: 'percent' });
  }, []);

  const hasError = value < 0.3;

  return (
    <Form>
      <FormControl>
        <Label required htmlFor={id}>Delivery alerts</Label>
        <Slider
          hasError={hasError}
          id={id}
          aria-describedby={helpTextId}
          value={value}
          minValue={0}
          maxValue={1}
          step={0.01}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={numberFormatter}
        />
        <HelpText id={helpTextId} variant={hasError ? "error" : "default"}>
          The delivery rate's threshold must be greater than 30%.
        </HelpText>
      </FormControl>
    </Form>
  );
};

render(
  <ErrorSliderExample />
)
`.trim(),v=`
const CustomRangeSliderExample = () => {
  const [value, setValue] = React.useState(0.55);
  const id = useUID();

  const PercentFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US', { style: 'percent' });
  }, []);

  return (
    <Form>
      <FormControl>
        <Label htmlFor={id}>Partition size</Label>
        <Slider
          id={id}
          value={value}
          minValue={0.5}
          maxValue={0.8}
          step={0.01}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={PercentFormatter}
        />
      </FormControl>
    </Form>
  );
};

render(
  <CustomRangeSliderExample />
)
`.trim(),w=`
const HiddenRangeLabelsSlider = () => {
  const [value, setValue] = React.useState(32);
  const id = useUID();

  const NumberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US');
  }, []);

  return (
    <Form>
      <FormControl>
        <Label htmlFor={id}>Scale</Label>
        <Slider
          id={id}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={NumberFormatter}
          hideRangeLabels
        />
      </FormControl>
    </Form>
  );
};

render(
  <HiddenRangeLabelsSlider />
)
`.trim();var E=!0;let T={title:"Slider",package:"@twilio-paste/slider",description:"A Slider is a draggable input that allows a user to select an imprecise numerical value within a range.",slug:"/components/slider/"},S=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:R,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/slider",storybookUrl:"/?path=/story/components-slider--default"}}}),R=[{value:"Guidelines",depth:2},{value:"About Slider",depth:3},{value:"Slider vs. number Input",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Default",depth:3},{value:"Error",depth:3},{value:"Disabled",depth:3},{value:"Custom Range",depth:3},{value:"Hide Range Labels",depth:3},{value:"When to use a Slider",depth:2}],F=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)},C={meta:T,getStaticProps:S,mdxHeadings:R},D=h.A;function N({components:e,...t}){return(0,r.yg)(D,{...C,...t,components:e,mdxType:"MDXLayout"},(0,r.yg)(F,{scope:{Form:c.lV,FormControl:c.MJ,Label:u.J,Slider:s.A,HelpText:m.$,useUID:p.GV},language:"jsx",noInline:!0,mdxType:"LivePreview"},b),(0,r.yg)("h2",null,"Guidelines"),(0,r.yg)("h3",null,"About Slider"),(0,r.yg)("p",null,"A Slider allows a user to select a numerical value when:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Immediate feedback is important."),(0,r.yg)("li",{parentName:"ul"},`The value doesn’t need to be precise, especially when the act of choosing a
bigger or smaller value is more important than the value itself.`),(0,r.yg)("li",{parentName:"ul"},"The value is in a defined range.")),(0,r.yg)("p",null,"Slider uses ",(0,r.yg)("a",{parentName:"p",href:"https://react-spectrum.adobe.com/react-aria/useSlider.html"},"Adobe's Spectrum React-Aria useSlider")," under the hood."),(0,r.yg)("h3",null,"Slider vs. number Input"),(0,r.yg)("p",null,"Both Sliders and ",(0,r.yg)("a",{parentName:"p",href:"/components/input#input-with-number-functionality"},"number Inputs"),` are form
fields that take numerical values. Because the mouse and touch interaction on a Slider is less
precise, use a Slider when the exact number value isn’t important, for example, when
selecting image opacity or audio volume.`),(0,r.yg)("p",null,"If the user needs to select an exact value, use a ",(0,r.yg)("a",{parentName:"p",href:"/components/input#input-with-number-functionality"},"number Input"),`
instead. If you want to let users select between consecutive values, you can
also use a `,(0,r.yg)("a",{parentName:"p",href:"/components/radio-button-group"},"Radio Button Group"),"."),(0,r.yg)("h3",null,"Accessibility"),(0,r.yg)("p",null,"Slider is a form element and follows the same accessibility guidelines as other form fields:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Include a label on ",(0,r.yg)("strong",{parentName:"li"},"all")," form fields. Use one of 3 ways to label a form field:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Visible label with ",(0,r.yg)("a",{parentName:"li",href:"/components/label"},"Label")," (preferred)"),(0,r.yg)("li",{parentName:"ul"},"Visible label that's associated to the input with ",(0,r.yg)("inlineCode",{parentName:"li"},"aria-labelledby")),(0,r.yg)("li",{parentName:"ul"},"Label directly using ",(0,r.yg)("inlineCode",{parentName:"li"},"aria-label")))),(0,r.yg)("li",{parentName:"ul"},"Each label must use the ",(0,r.yg)("inlineCode",{parentName:"li"},"htmlFor")," prop that equals the ",(0,r.yg)("inlineCode",{parentName:"li"},"id")," of the associated Input."),(0,r.yg)("li",{parentName:"ul"},`Provide clear identification of required fields in the label or at the start of a form.
Use the `,(0,r.yg)("inlineCode",{parentName:"li"},"required")," prop to programmatically indicate they are required to browsers."),(0,r.yg)("li",{parentName:"ul"},"Include inline ",(0,r.yg)("a",{parentName:"li",href:"/components/help-text#error-help-text"},"error Help Text"),` on any field
that errors to make it visually clear that the field changed.`),(0,r.yg)("li",{parentName:"ul"},"If the input has associated help text, include the ",(0,r.yg)("inlineCode",{parentName:"li"},"aria-describedby"),` prop on the input.
This should match the `,(0,r.yg)("inlineCode",{parentName:"li"},"id")," of the help text.")),(0,r.yg)("h2",null,"Examples"),(0,r.yg)("h3",null,"Default"),(0,r.yg)("p",null,`Use a Slider when a user should select an imprecise value from a midsized and defined numerical range, such as 1–100.`),(0,r.yg)(F,{scope:{Form:c.lV,FormControl:c.MJ,Label:u.J,Slider:s.A,HelpText:m.$,useUID:p.GV},language:"jsx",noInline:!0,mdxType:"LivePreview"},b),(0,r.yg)("h3",null,"Error"),(0,r.yg)("p",null,"Avoid errors on Sliders by changing the defined range so no errors can occur."),(0,r.yg)("p",null,`If a user is still able to choose an invalid option, change the Slider to its error
state and use `,(0,r.yg)("a",{parentName:"p",href:"/components/help-text#error-help-text"},"Help Text"),` to add an inline error.
For additional guidance on how to compose error messages, refer to the
`,(0,r.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,r.yg)(F,{scope:{Form:c.lV,FormControl:c.MJ,Label:u.J,Slider:s.A,HelpText:m.$,useUID:p.GV},language:"jsx",noInline:!0,mdxType:"LivePreview"},f),(0,r.yg)("h3",null,"Disabled"),(0,r.yg)("p",null,"Use a disabled Slider to show users that they can't interact with the Slider."),(0,r.yg)(F,{scope:{Form:c.lV,FormControl:c.MJ,Label:u.J,Slider:s.A,HelpText:m.$,useUID:p.GV},language:"jsx",noInline:!0,mdxType:"LivePreview"},x),(0,r.yg)("h3",null,"Custom Range"),(0,r.yg)("p",null,"Use a custom range Slider when the default range doesn't fit your use case."),(0,r.yg)(F,{scope:{Form:c.lV,FormControl:c.MJ,Label:u.J,Slider:s.A,HelpText:m.$,useUID:p.GV},language:"jsx",noInline:!0,mdxType:"LivePreview"},v),(0,r.yg)("h3",null,"Hide Range Labels"),(0,r.yg)("p",null,"Use a Slider with hidden range labels when the range is obvious or the labels are not needed."),(0,r.yg)(F,{scope:{Form:c.lV,FormControl:c.MJ,Label:u.J,Slider:s.A,HelpText:m.$,useUID:p.GV},language:"jsx",noInline:!0,mdxType:"LivePreview"},w),(0,r.yg)("h2",null,"When to use a Slider"),(0,r.yg)(y.l,{mdxType:"DoDont"},(0,r.yg)(y.Do,{title:"Do",body:"Use a Slider for mid-sized, defined ranges, usually 1–100.",center:!0,mdxType:"Do"},(0,r.yg)(o.az,{width:"80%",mdxType:"Box"},(0,r.yg)(u.J,{mdxType:"Label"},"Opacity"),(0,r.yg)(s.A,{minValue:0,maxValue:1,value:.5,numberFormatter:new Intl.NumberFormat("en-US",{style:"percent"}),mdxType:"Slider"}))),(0,r.yg)(y.w,{title:"Don't",body:"Don’t use a Slider for very large or very small ranges.",center:!0,mdxType:"Dont"},(0,r.yg)(o.az,{width:"80%",mdxType:"Box"},(0,r.yg)(u.J,{mdxType:"Label"},"Number of backups"),(0,r.yg)(s.A,{value:1,minValue:0,maxValue:3,numberFormatter:new Intl.NumberFormat("en-US"),mdxType:"Slider"})))),(0,r.yg)(y.l,{mdxType:"DoDont"},(0,r.yg)(y.Do,{title:"Do",body:"Use a number Input when an exact number value matters.",center:!0,mdxType:"Do"},(0,r.yg)(o.az,{width:"80%",mdxType:"Box"},(0,r.yg)(u.J,{mdxType:"Label"},"Auto-reload amount"),(0,r.yg)(i.p,{type:"number",value:55,insertBefore:(0,r.yg)(d.EY,{color:"colorTextWeak",as:"span",fontWeight:"fontWeightSemibold",mdxType:"Text"},"\xa5"),mdxType:"Input"}))),(0,r.yg)(y.w,{title:"Don't",body:"Don’t use a Slider when an exact number value matters.",center:!0,mdxType:"Dont"},(0,r.yg)(o.az,{width:"80%",mdxType:"Box"},(0,r.yg)(u.J,{mdxType:"Label"},"Auto-reload amount"),(0,r.yg)(s.A,{value:420,minValue:0,maxValue:1e4,numberFormatter:new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}),mdxType:"Slider"})))),(0,r.yg)(y.l,{mdxType:"DoDont"},(0,r.yg)(y.Do,{title:"Do",body:"Use a Meter when you need to visually show the size of a numerical value, but don’t want the bar to be interactive.",center:!0,mdxType:"Do"},(0,r.yg)(o.az,{width:"80%",mdxType:"Box"},(0,r.yg)(g.c,{htmlFor:"meter",mdxType:"MeterLabel"},"Current balance"),(0,r.yg)(g.k,{id:"meter",value:8673,minValue:0,maxValue:1e4,formatOptions:{style:"currency",currency:"JPY"},mdxType:"Meter"}))),(0,r.yg)(y.w,{title:"Don't",body:"Don’t use a disabled Slider when the value of the Slider is important to show. Disabled form fields aren’t high-contrast enough to be visible.",center:!0,mdxType:"Dont"},(0,r.yg)(o.az,{width:"80%",mdxType:"Box"},(0,r.yg)(u.J,{mdxType:"Label"},"Current balance"),(0,r.yg)(s.A,{disabled:!0,value:8673,minValue:0,maxValue:1e4,numberFormatter:new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}),mdxType:"Slider"})))),(0,r.yg)(y.l,{mdxType:"DoDont"},(0,r.yg)(y.Do,{title:"Do",body:"Use a Radio Group or Radio Button Group to allow users to select a list of consecutive options with precision, whether they’re numerical or not.",center:!0,mdxType:"Do"},(0,r.yg)(o.az,{display:"grid",width:"80%",gridTemplateColumns:"1fr",rowGap:"space60",mdxType:"Box"},(0,r.yg)(l.z,{attached:!0,name:"uncontroled-msg-limit-radio-button-group",legend:"Maximum messages per month",mdxType:"RadioButtonGroup"},(0,r.yg)(l.a,{value:"10",mdxType:"RadioButton"},"10"),(0,r.yg)(l.a,{value:"50",defaultChecked:!0,mdxType:"RadioButton"},"50"),(0,r.yg)(l.a,{value:"100",mdxType:"RadioButton"},"100"),(0,r.yg)(l.a,{value:"500",mdxType:"RadioButton"},"500"),(0,r.yg)(l.a,{value:"500+",mdxType:"RadioButton"},"500+")),(0,r.yg)(n.z6,{name:"uncontrolled-protection-level-radio-group",legend:"Protection level",mdxType:"RadioGroup"},(0,r.yg)(n.sx,{id:(0,p.GV)(),value:"lowest",mdxType:"Radio"},"Basic protection"),(0,r.yg)(n.sx,{id:(0,p.GV)(),value:"existing",mdxType:"Radio"},"Standard protection"),(0,r.yg)(n.sx,{id:(0,p.GV)(),value:"new",defaultChecked:!0,mdxType:"Radio"},"Max protection")))),(0,r.yg)(y.w,{title:"Don't",body:"Don’t use a Slider to allow selection of non-numerical values or when there isn’t a definable range.",center:!0,mdxType:"Dont"},(0,r.yg)(o.az,{width:"80%",mdxType:"Box"},(0,r.yg)(u.J,{mdxType:"Label"},"Auto-reload amount (50,000+)"),(0,r.yg)(s.A,{value:5e4,minValue:0,maxValue:5e4,numberFormatter:new Intl.NumberFormat("en-US"),mdxType:"Slider"})))))}N.isMDXComponent=!0},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var r=a(72387),l=a(76127),n=a(95669),o=a.n(n),i=a(81278);a(55729);var d=a(10511),s=a(43084),u=a(10732),m=a(62887),c=a(63437),p=a(38992);let g={h1:()=>null},h=({children:e,meta:t,navigationData:a,data:n,mdxHeadings:h,pageHeaderData:{categoryRoute:y,githubUrl:b,storybookUrl:x}})=>{let f=t.title?`${t.title} - ${p.DZ.TITLE}`:p.DZ.TITLE,v=t.description||p.DZ.DESCRIPTION,w=(0,i.useRouter)();return(0,r.FD)(c.T,{navigationData:a,children:[(0,r.FD)(o(),{children:[(0,r.Y)("title",{children:f}),(0,r.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${w.pathname}`}),(0,r.Y)("meta",{name:"description",content:v},"description")]}),(0,r.FD)(d.s,{children:[(0,r.Y)(m.c,{categoryRoute:y,githubUrl:b,storybookUrl:x,data:n}),(0,r.FD)(l.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,r.Y)(u.i,{data:h}),(0,r.Y)(l.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,r.Y)(s.Q,{componentOverrides:t.package?g:{},children:e})})]})]})]})}},41621:(e,t,a)=>{"use strict";a.d(t,{Sw:()=>s,sx:()=>u,z6:()=>m});var r=a(79559),l=a(76127),n=a(36669),o=a(55729),i=a(22275),d=o.createContext({name:"",value:"",disabled:!1,hasError:!1,onChange:()=>{}}),s=o.forwardRef((e,t)=>o.createElement(l.az,{as:"input",type:"radio",size:"size0",border:"none",overflow:"hidden",padding:"space0",margin:"space0",whiteSpace:"nowrap",textTransform:"none",position:"absolute",clip:"rect(0 0 0 0)",ref:t,...e}));s.displayName="HiddenRadio";var u=o.forwardRef(({id:e,name:t,element:a="RADIO",value:i,checked:u,defaultChecked:m,disabled:c,hasError:p,onChange:g,children:h,helpText:y,...b},x)=>{if(null!=u&&null!=m)throw Error("[Paste Radio] Do not provide both 'defaultChecked' and 'checked' to Radio at the same time. Please consider if you want this component to be controlled or uncontrolled.");let[f,v]=o.useState(m),w=o.useContext(d),E=(0,n.GV)(),T=e||(0,n.GV)(),S=o.useMemo(()=>void 0!==u||""!==w.value,[]),R=o.useCallback(e=>{g?g(e):w.onChange(e),S||v(e.target.checked)},[g,w,S]),F={name:t??w.name,disabled:c??w.disabled,hasError:p??w.hasError};S?""!==w.value?F.checked=w.value===i:F.checked=u:F.defaultChecked=m;let C=S?F.checked||F.defaultChecked:f;return o.createElement(l.az,{element:a,position:"relative",display:"inline-flex",alignItems:"flex-start",flexDirection:"column",verticalAlign:"top"},o.createElement(s,{...b,...F,value:i,"aria-describedby":E,"aria-invalid":F.hasError,onChange:R,id:T,ref:x}),o.createElement(r.g$,{disabled:F.disabled,htmlFor:T},o.createElement(r.BJ,{element:`${a}_CONTROL`,borderRadius:"borderRadiusCircle",disabled:F.disabled,type:"radio",_checkedAndDisabledSibling:{color:"colorTextWeaker"}},o.createElement(l.az,{as:"span",element:`${a}_CONTROL_CIRCLE`,lineHeight:"lineHeight0",display:C?"block":"none",color:"inherit",size:"sizeIcon10"},o.createElement("svg",{role:"img","aria-hidden":!0,width:"100%",height:"100%",viewBox:"0 0 16 16",fill:"none"},o.createElement("circle",{fill:"currentColor",cx:8,cy:8,r:3})))),o.createElement(r.pX,{element:`${a}_LABEL_TEXT`,fontWeight:"fontWeightMedium"},h)),y&&o.createElement(r._v,{element:`${a}_HELP_TEXT_WRAPPER`,helpTextId:E},y))});u.displayName="Radio";var m=o.forwardRef(({name:e,element:t="RADIO_GROUP",value:a,onChange:r,disabled:l=!1,errorText:n,children:s,i18nRequiredLabel:u="(required)",...m},c)=>{let p=o.useCallback(e=>{r?.(e.target.value)},[r]),g=o.useMemo(()=>({name:e,value:a||"",disabled:l,hasError:null!=n,onChange:p}),[e,a,l,n,p]);return o.createElement(d.Provider,{value:g},o.createElement(i.a,{element:t,...m,disabled:l,errorText:n,name:e,ref:c,i18nRequiredLabel:u},s))});m.displayName="RadioGroup"},65625:(e,t,a)=>{"use strict";a.d(t,{c:()=>u,k:()=>s});var r=a(76127),l=a(83560),n=a(629),o=a(55729),i=a(86146),d="METER_LABEL",s=o.forwardRef(({element:e="METER",id:t,minLabel:a,maxLabel:i,...s},u)=>{let{value:m=0,minValue:c=0,maxValue:p=100}=s,g=s["aria-labelledby"];null==g&&null==s["aria-label"]&&null!=t&&(g=`${t}${d}`);let{meterProps:h}=(0,l.d_)({...s,"aria-labelledby":g}),y=`${Math.round((m-c)/(p-c)*100)}%`;return o.createElement(r.az,{as:"div",...h,role:"meter",id:t,ref:u,width:"100%",position:"relative",element:e,"aria-labelledby":g},o.createElement(r.az,{height:"10px",backgroundColor:"colorBackgroundStrong",borderRadius:"borderRadiusPill",element:`${e}_BAR`},o.createElement(r.az,{width:y,height:"10px",backgroundColor:"colorBackgroundPrimaryStronger",borderTopLeftRadius:"borderRadiusPill",borderBottomLeftRadius:"borderRadiusPill",borderTopRightRadius:"100%"===y?"borderRadiusPill":"borderRadius10",borderBottomRightRadius:"100%"===y?"borderRadiusPill":"borderRadius10",element:`${e}_FILL`})),(a||i)&&o.createElement(r.az,{display:"flex",flexDirection:"row",justifyContent:"space-between",columnGap:"space20",marginTop:"space20","aria-hidden":"true",overflowWrap:"anywhere",element:`${e}_MIN_MAX_WRAPPER`},a?o.createElement(n.EY,{as:"span",color:"colorTextWeak",fontWeight:"fontWeightNormal",element:`${e}_MIN`},a):o.createElement("span",null),i?o.createElement(n.EY,{as:"span",color:"colorTextWeak",fontWeight:"fontWeightNormal",textAlign:"end",element:`${e}_MAX`},i):o.createElement("span",null)))});s.displayName="Meter";var u=o.forwardRef(({element:e="METER_LABEL",children:t,htmlFor:a,valueLabel:l,...s},u)=>o.createElement(r.az,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end",element:`${e}_WRAPPER`},o.createElement(i.J,{...s,as:"div",element:e,id:`${a}${d}`,ref:u},t),l&&o.createElement(n.EY,{as:"span",fontWeight:"fontWeightSemibold",textAlign:"end",marginBottom:"space20",marginLeft:"space20","aria-hidden":"true",element:`${e}_VALUE_LABEL`},l)));u.displayName="MeterLabel"},77597:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var r=a(76127),l=a(83560),n=a(69277),o=a(19950),i=a(55729),d=e=>e.disabled?"colorBackgroundStrong":e.error?e.hovered?"colorBackgroundErrorStrong":"colorBackgroundError":e.dragging?"colorBackgroundPrimary":e.focused?"colorBackgroundPrimaryStronger":e.hovered?"colorBackgroundPrimary":"colorBackgroundPrimaryStronger",s=({element:e="SLIDER_THUMB",left:t="0%",...a})=>i.createElement(r.az,{...a,backgroundColor:d(a),boxShadow:a.dragging||a.focused?"shadowFocus":"none",borderRadius:"borderRadiusCircle",transition:"background-color 150ms ease, box-shadow 150ms ease",width:"20px",height:"20px",marginTop:"space10",cursor:a.disabled?"not-allowed":"pointer",left:t,element:e});s.displayName="SliderThumb";var u=({element:e="SLIDER_TRACK",fillPercent:t="0%",children:a,...l})=>i.createElement(r.az,{...l,position:"relative",height:"4px",width:"100%",element:e},i.createElement(r.az,{element:`${e}_BACKGROUND`,borderRadius:"borderRadius20",position:"absolute",top:0,left:0,backgroundColor:"colorBackgroundStrong",height:"100%",width:"100%"}),i.createElement(r.az,{element:`${e}_FILL`,borderRadius:"borderRadius20",position:"absolute",top:0,left:0,backgroundColor:d(l),height:"100%",width:t,transition:"background-color 150ms ease"}),a);u.displayName="SliderTrack";var m=new Intl.NumberFormat("en-US"),c=i.forwardRef((e,t)=>{let a=i.useRef(null),d=i.useRef(null),c=(0,o.SV)(a,t),[p,g]=i.useState(!1),[h,y]=i.useState(!1),{element:b="SLIDER",minValue:x=0,maxValue:f=100,hideRangeLabels:v=!1,disabled:w=!1,id:E,i18nMaxRangeLabel:T="Maximum value:",i18nMinRangeLabel:S="Minimum value:"}=e,R={...e,id:E,isDisabled:w,"aria-labelledby":E,numberFormatter:e.numberFormatter||m},F=(0,l.Sp)(R),{trackProps:C}=(0,l.PF)(R,F,d),{thumbProps:D,inputProps:N,isDragging:L}=(0,l.xX)({index:0,trackRef:d,inputRef:a},F),I=i.useMemo(()=>({disabled:w,error:e.hasError,hovered:p,focused:h,dragging:L}),[w,e.hasError,p,h,L]),k=i.useCallback(()=>{a?.current?.focus()},[a]);return i.createElement(r.az,{element:b},i.createElement(r.az,{...C,element:`${b}_TRACK_CONTAINER`,ref:d,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),display:"flex",alignItems:"center",height:"20px",width:"100%",cursor:w?"not-allowed":"pointer",onClick:k},i.createElement(u,{...I,fillPercent:D?.style?.left,element:`${b}_TRACK`,onClick:k},i.createElement(s,{...D,...I,element:`${b}_THUMB`,onClick:k},i.createElement(n.E,null,i.createElement("input",{ref:c,...N,"aria-labelledby":e["aria-labelledby"],"aria-describedby":e["aria-describedby"],id:N.id?.replace("-0",""),onFocus:()=>y(!0),onBlur:()=>y(!1)}))))),!v&&i.createElement(r.az,{element:`${b}_RANGE_LABELS`,display:"flex",justifyContent:"space-between",columnGap:"space20",fontSize:"fontSize30",lineHeight:"lineHeight30",fontWeight:"fontWeightNormal",color:"colorTextWeak",overflowWrap:"anywhere"},i.createElement(r.az,{element:`${b}_RANGE_LABELS_MIN`},i.createElement(n.E,null,S),R.numberFormatter.format(x)),i.createElement(r.az,{element:`${b}_RANGE_LABELS_MAX`,textAlign:"end"},i.createElement(n.E,null,T),R.numberFormatter.format(f))))});c.displayName="Slider"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,8921,3560,636,6593,8792],()=>e(e.s=5340)),_N_E=e.O()}]);