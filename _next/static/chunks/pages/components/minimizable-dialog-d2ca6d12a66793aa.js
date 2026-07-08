(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4443],{16704:(e,i,a)=>{"use strict";a.d(i,{$:()=>u,p:()=>g});var t=a(76127),n=a(34280),o=a(19950),l=a(55729),r=a(95036),s=a(92980),d=a(38441),m=l.forwardRef(({i18nStepDownLabel:e="step value down",element:i,variant:a,...t},n)=>l.createElement(r.$n,{...t,ref:n,element:`${i}_DECREMENT_BUTTON`,variant:"reset",size:"reset",type:"button",borderRadius:"borderRadius20",backgroundColor:"inverse"===a?"colorBackgroundInverseElevation":"colorBackgroundBodyElevation",marginRight:"space30",_focus:{boxShadow:"inverse"===a?"shadowBorderInverseStrong":"shadowBorderPrimary"}},l.createElement(s.ChevronDownIcon,{decorative:!1,title:e,size:"sizeIcon05",element:`${i}_DECREMENT_ICON`})));m.displayName="Decrement";var c=l.forwardRef(({i18nStepUpLabel:e="step value up",element:i,variant:a,...t},n)=>l.createElement(r.$n,{...t,ref:n,element:`${i}_INCREMENT_BUTTON`,variant:"reset",size:"reset",type:"button",borderRadius:"borderRadius20",backgroundColor:"inverse"===a?"colorBackgroundInverseElevation":"colorBackgroundBodyElevation",marginRight:"space30",_focus:{boxShadow:"inverse"===a?"shadowBorderInverseStrong":"shadowBorderPrimary"}},l.createElement(d.ChevronUpIcon,{decorative:!1,title:e,size:"sizeIcon05",element:`${i}_INCREMENT_ICON`})));c.displayName="Increment";var p=["className","style","size","height","width"],u=l.forwardRef(({element:e,...i},a)=>l.createElement(t.az,{appearance:"none",as:"input",backgroundColor:"transparent",border:"none",borderRadius:"borderRadius20",boxShadow:"none",color:"inherit",cursor:"date"!==i.type&&"time"!==i.type||i.readOnly||i.disabled?"auto":"text",display:"block",element:e,fontFamily:"inherit",fontSize:"fontSize30",fontWeight:"fontWeightMedium",lineHeight:"lineHeight20",margin:"space0",outline:"none",paddingBottom:"space30",paddingLeft:"space40",paddingRight:"space40",paddingTop:"space30",resize:"none",width:"100%",variant:i.variant,ref:a,_placeholder:{color:"inverse"===i.variant?"colorTextInverseWeaker":"colorTextWeak",fontStyle:"italic"},_focus_placeholder:{color:"inverse"===i.variant?"colorTextInverseWeaker":"colorTextWeak"},_disabled:{color:"inverse"===i.variant?"colorTextInverseWeakest":"colorTextWeaker",cursor:"not-allowed","-webkit-text-fill-color":"inverse"===i.variant?"colorTextInverseWeakest":"colorTextWeaker","-webkit-opacity":"1"},__webkit_datetime_edit:{display:"flex"},__webkit_calendar_picker_indicator_hover:{cursor:i.readOnly||i.disabled?"default":"pointer"},__webkit_inner_spin_button:{display:"none",margin:"space0"},__webkit_outer_spin_button:{display:"none",margin:"space0"},"-moz-appearance":"textfield",...i}));u.displayName="InputElement";var g=l.forwardRef(({disabled:e,element:i="INPUT",hasError:a,id:r,insertAfter:s,insertBefore:d,max:g,min:h,name:b,placeholder:z,readOnly:v,required:y,step:D,type:M,value:f,variant:E,i18nStepUpLabel:x,i18nStepDownLabel:C,...w},B)=>{let I=l.useRef(void 0),N=(0,o.SV)(I,B),[_,T]=l.useState(!0),[k,R]=l.useState(!0),[O,H]=l.useState(f??w.defaultValue??"0");return l.useEffect(()=>{if("number"!==M)return;if(e){R(!1),T(!1);return}let i=Number(O),a=D&&!isNaN(Number(D))?Number(D):1,t=Number(g);if(isNaN(t))return;let n=Number(h);isNaN(n)||((t-n)%a!=0&&console.error("[Paste Input]: when using min/max, and step values with a Number Input, please make sure that the min and max are multiples of the step value."),i<t&&i+a<=t?T(!0):T(!1),i>n&&i-a>=n?R(!0):R(!1))},[g,h,D,e,M,O]),l.createElement(n.cl,{disabled:e,element:i,hasError:a,insertAfter:s,insertBefore:d,readOnly:v,type:M,variant:E},l.createElement(u,{"aria-invalid":a,"aria-readonly":v,...(e=>Object.keys(e).reduce((i,a)=>(p.includes(a)||(i[a]=e[a]),i),{}))(w),...{type:M},disabled:e,element:`${i}_ELEMENT`,id:r,name:b,max:g,min:h,placeholder:z,readOnly:v,ref:N,required:y,step:D,value:f,variant:E,onChange:e=>{null!=w.onChange&&"function"==typeof w.onChange&&w.onChange(e),H(e.target.value)}}),"number"===M?l.createElement(t.az,{display:"flex",flexDirection:"column",rowGap:"space10",justifyContent:"center",element:`${i}_STEP_WRAPPER`},_?l.createElement(c,{element:i,onClick:()=>{I.current?.stepUp();let e=new Event("change",{bubbles:!0});I.current?.dispatchEvent(e),I.current?.focus()},i18nStepUpLabel:x,variant:E}):l.createElement(t.az,{height:"12px",width:"12px",element:`${i}_INCREMENT_PLACEHOLDER`}),k?l.createElement(m,{element:i,onClick:()=>{I.current?.stepDown();let e=new Event("change",{bubbles:!0});I.current?.dispatchEvent(e),I.current?.focus()},i18nStepDownLabel:C,variant:E}):l.createElement(t.az,{height:"12px",width:"12px",element:`${i}_DECREMENT_PLACEHOLDER`})):l.createElement(l.Fragment,null))});g.displayName="Input"},20976:(e,i,a)=>{"use strict";a.r(i),a.d(i,{__N_SSG:()=>L,default:()=>F,getStaticProps:()=>A,mdxHeadings:()=>$,meta:()=>S});var t=a(55729),n=a(11885),o=a(76127),l=a(95036),r=a(35225),s=a(31079),d=a(60798),m=a(16704),c=a(86146),p=a(50010),u=a(44140),g=a(4073),h=a(54652),b=a(51582),z=a(25630),v=a(38441),y=a(40123),D=a(81423),M=a(69277),f=a(87084),E=t.createContext({}),x=({element:e,children:i})=>t.createElement(o.az,{element:e,borderRadius:"borderRadius20",display:"flex",flexDirection:"column",backgroundColor:"colorBackgroundWeaker",width:"size40",boxShadow:"shadowElevationTop20"},i);x.displayName="StyledMinimizableDialog";var C=t.forwardRef(({minimized:e,style:i,...a},n)=>t.createElement(o.az,{...(0,o.x8)(a),ref:n,zIndex:"zIndex80",transform:"none!important",position:"absolute",inset:`auto 1.5rem ${!0===e?"0":"1.5"}rem auto!important`,_focus:{outline:"none"},style:i}));C.displayName="StyledMinimizableDialog";var w=t.forwardRef(({children:e,element:i="MINIMIZABLE_DIALOG",...a},n)=>{let o=t.useContext(E);return t.createElement(b.AM,{...o,...a,as:C,ref:n,preventBodyScroll:!1,hideOnClickOutside:!1},t.createElement(z.pd,null,t.createElement(x,{element:i},e)))});w.displayName="MinimizableDialog";var B=t.forwardRef(({children:e,element:i="MINIMIZABLE_DIALOG_BUTTON",...a},n)=>{let o=t.useContext(E);return t.createElement(b.XU,{element:i,...o,...a,as:l.$n,ref:n},e)});B.displayName="MinimizableDialogButton";var I=t.forwardRef(({children:e,element:i="MINIMIZABLE_DIALOG_HEADER",i18nDismissLabel:a="close",i18nMinimizeLabel:n="minimize",...r},s)=>{let{hide:d,minimized:m,minimize:c,expand:p}=t.useContext(E);return t.createElement(o.az,{...(0,o.x8)(r),ref:s,display:"grid",gridTemplateColumns:"1fr auto auto",columnGap:"space30",backgroundColor:m?"colorBackgroundBodyElevation":"colorBackgroundWeaker",paddingX:"space70",paddingY:"space40",color:"colorTextWeak",overflow:"hidden",boxShadow:m?"shadowElevation10":"none",element:i},t.createElement(o.az,{as:"h2",element:`${i}_HEADING`,fontWeight:"fontWeightSemibold",fontSize:"fontSize30",lineHeight:"lineHeight30",margin:"space0"},e),t.createElement(l.$n,{element:`${i}_MINIMIZE_BUTTON`,variant:"secondary_icon",size:"reset",onClick:m?p:c,"aria-pressed":void 0!==m&&m},m?t.createElement(v.ChevronUpIcon,{element:`${i}_MINIMIZE_ICON`,decorative:!0,size:"sizeIcon20"}):t.createElement(D.MinusIcon,{element:`${i}_MINIMIZE_ICON`,decorative:!0,size:"sizeIcon20"}),t.createElement(M.E,null,n)),t.createElement(l.$n,{element:`${i}_CLOSE_BUTTON`,variant:"secondary_icon",size:"reset",onClick:d},t.createElement(y.CloseIcon,{element:`${i}_CLOSE_ICON`,decorative:!0,size:"sizeIcon20"}),t.createElement(M.E,null,a)))});I.displayName="MinimizableDialogHeader";var N=({minimized:e,...i})=>{let[a,n]=t.useState(e);return{...(0,f.aH)({...i}),minimized:a,minimize:()=>n(!0),expand:()=>n(!1),toggleMinimized:()=>n(e=>!e)}},_=({gutter:e,children:i,placement:a,modal:n,state:o,minimized:l,...r})=>{let s=o||N({minimized:l,modal:!0,...r});return t.createElement(E.Provider,{value:{...s}},i)};_.displayName="BaseMinimizableDialogContainer";var T=t.memo(_);T.displayName="MinimizableDialogContainer";var k=t.forwardRef(({children:e,element:i="MINIMIZABLE_DIALOG_CONTENT",...a},n)=>{let{minimized:l}=t.useContext(E);return t.createElement(o.az,{...(0,o.x8)(a),element:i,ref:n,display:l?"none":"block",borderBottomLeftRadius:"borderRadius20",borderBottomRightRadius:"borderRadius20"},e)});k.displayName="MinimizableDialogContent";let R=`
const MinimizableDialogExample = () => {
  return (
    <MinimizableDialogContainer>
      <MinimizableDialogButton variant="primary" size="circle">
        <ChatIcon decorative={false} title="Chat" />
      </MinimizableDialogButton>
      <MinimizableDialog aria-label="Live chat">
        <MinimizableDialogHeader>Live chat</MinimizableDialogHeader>
        <MinimizableDialogContent>
          <Box padding='space70'>
            <Heading as="div" variant="heading30">
              Hi there!
            </Heading>
            <Paragraph>We’re here to help. Please give us some info to get started.</Paragraph>
            <Box display="flex" flexDirection="column" rowGap="space60">
              <Box>
                <Label htmlFor='name-input'>Name</Label>
                <Input id='name-input' type="text" />
              </Box>
              <Box>
                <Label htmlFor='email-input'>Email address</Label>
                <Input id='email-input' type="email" />
              </Box>
              <Box>
                <Label htmlFor='question-textarea'>How can we help you?</Label>
                <TextArea id='question-textarea' />
              </Box>
            </Box>
            <Box marginTop="space190">
              <Button variant="primary">Start chat</Button>
            </Box>
          </Box>
        </MinimizableDialogContent>
      </MinimizableDialog>
    </MinimizableDialogContainer>
  );
};

render(
  <MinimizableDialogExample />
)
`.trim(),O=`
const MinimizableDialogButtonExample = () => {
  return (
    <Box display="flex" flexDirection="row" columnGap="space70">
      <MinimizableDialogContainer>
        <MinimizableDialogButton variant="primary">
          Open dialog
        </MinimizableDialogButton>
        <MinimizableDialog aria-label="Dialog">
          <MinimizableDialogHeader>Dialog</MinimizableDialogHeader>
          <MinimizableDialogContent>
            <Box padding='space70'>
              This is the Twilio styled minimizable dialog that you can use in all your applications.
            </Box>
          </MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>
      <MinimizableDialogContainer>
        <MinimizableDialogButton variant="secondary_icon" size="icon_small">
          <PlusIcon decorative={false}  title="Open popover" />
        </MinimizableDialogButton>
        <MinimizableDialog aria-label="Dialog">
          <MinimizableDialogHeader>Dialog</MinimizableDialogHeader>
          <MinimizableDialogContent>
            <Box padding='space70'>
              This is the Twilio styled minimizable dialog that you can use in all your applications.
            </Box>
          </MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>
      <MinimizableDialogContainer>
        <MinimizableDialogButton variant="reset" size="reset">
          Open dialog
        </MinimizableDialogButton>
        <MinimizableDialog aria-label="Dialog">
          <MinimizableDialogHeader>Dialog</MinimizableDialogHeader>
          <MinimizableDialogContent>
            <Box padding='space70'>
              This is the Twilio styled minimizable dialog that you can use in all your applications.
            </Box>
          </MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>
    </Box>
  );
};

render(
  <MinimizableDialogButtonExample />
)
`.trim(),H=`
const HookExample = () => {
  const dialog = useMinimizableDialogState({});
  return (
    <Box display="flex" flexDirection="column" rowGap="space70">
      <Box>
        <MinimizableDialogContainer state={dialog}>
          <MinimizableDialogButton variant="primary">
            Minimizable Dialog Button
          </MinimizableDialogButton>
          <MinimizableDialog aria-label="Dialog">
            <MinimizableDialogHeader>Dialog</MinimizableDialogHeader>
            <MinimizableDialogContent>
              <Box padding='space70'>
                This is the Twilio styled minimizable dialog that you can use in all your applications.
              </Box>
            </MinimizableDialogContent>
          </MinimizableDialog>
        </MinimizableDialogContainer>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.show()}>Open dialog</Button>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.hide()}>Close dialog</Button>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.minimize()}>Minimize dialog</Button>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.expand()}>Expand dialog</Button>
      </Box>
    </Box>
  );
};

render(
  <HookExample />
)
`.trim();var P=a(40615),L=!0;let S={title:"Minimizable Dialog",package:"@twilio-paste/minimizable-dialog",description:"An accessible, non-modal dialog that can be minimized to the bottom of the page.",slug:"/components/minimizable-dialog/"},A=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:$,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/minimizable-dialog",storybookUrl:"/?path=/story/components-minimizable-dialog--default-for-vrt"}}}),$=[{value:"Guidelines",depth:2},{value:"About Minimizable Dialog",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Basic Minimizable Dialog",depth:3},{value:"MinimizableDialogButton",depth:3},{value:"Using state hooks",depth:3}],W=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},U={meta:S,getStaticProps:A,mdxHeadings:$},G=P.A;function F({components:e,...i}){return(0,n.yg)(G,{...U,...i,components:e,mdxType:"MDXLayout"},(0,n.yg)(W,{scope:{MinimizableDialog:w,MinimizableDialogButton:B,MinimizableDialogHeader:I,MinimizableDialogContainer:T,MinimizableDialogContent:k,Heading:d.D,Input:m.p,Label:c.J,TextArea:u.f,Paragraph:p.f,ChatIcon:r.ChatIcon,Button:l.$n,Box:o.az},noInline:!0,mdxType:"LivePreview"},R),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About Minimizable Dialog"),(0,n.yg)("p",null,"The Minimizable Dialog component is a non-modal dialog that can be minimized to the bottom right of the page. It is meant for situations like a chat dialog, where the user may start the chat and then want to minimize it while they complete other tasks on the page."),(0,n.yg)(h.Pq,{variant:"warning",marginY:"space70",mdxType:"Callout"},(0,n.yg)(h.v,{as:"h4",mdxType:"CalloutHeading"},"Only use one Minimizable Dialog on a page"),(0,n.yg)(h.wz,{mdxType:"CalloutText"},"We currenly only support having one Minimizable Dialog open on a page. If you have questions, please post"," ",(0,n.yg)(g.Mz,{href:"https://github.com/twilio-labs/paste/discussions",showExternal:!0,mdxType:"Anchor"},"a GitHub Discussion"),".")),(0,n.yg)("h3",null,"Accessibility"),(0,n.yg)("p",null,"Minimizable Dialog and non-modal dialogs follow these accessibility guidelines:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"There must be a focusable element inside the dialog."),(0,n.yg)("li",{parentName:"ul"},"There should be a close button so screen readers have a specific close action to target."),(0,n.yg)("li",{parentName:"ul"},"A Minimizable Dialog is a focus trap, and focus is placed inside it when it's shown."),(0,n.yg)("li",{parentName:"ul"},"A Minimizable Dialog must be triggered by an explicit user action, e.g. clicking a button.")),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Basic Minimizable Dialog"),(0,n.yg)(W,{scope:{MinimizableDialog:w,MinimizableDialogButton:B,MinimizableDialogHeader:I,MinimizableDialogContainer:T,MinimizableDialogContent:k,Heading:d.D,Input:m.p,Label:c.J,TextArea:u.f,Paragraph:p.f,ChatIcon:r.ChatIcon,Button:l.$n,Box:o.az},noInline:!0,mdxType:"LivePreview"},R),(0,n.yg)("h3",null,"MinimizableDialogButton"),(0,n.yg)("p",null,"The MinimizableDialogButton renders a Button component and accepts all of its props, which are listed ",(0,n.yg)("a",{parentName:"p",href:"/components/button#props"},"on the Button page"),"."),(0,n.yg)(W,{scope:{MinimizableDialog:w,MinimizableDialogButton:B,MinimizableDialogHeader:I,MinimizableDialogContainer:T,MinimizableDialogContent:k,PlusIcon:s.PlusIcon,Box:o.az},noInline:!0,mdxType:"LivePreview"},O),(0,n.yg)("h3",null,"Using state hooks"),(0,n.yg)("p",null,`Minimizable Dialog comes with the option of "hooking" into the internal state by using the state hook originally provided by
`,(0,n.yg)("a",{parentName:"p",href:"https://reakit.io/docs/popover/#usepopoverstate"},"Reakit"),"."),(0,n.yg)("p",null,"Rather than the state be internal to the component, you can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"useMinimizableDialogState"),` hook and pass the returned state
to `,(0,n.yg)("inlineCode",{parentName:"p"},"MinimizableDialogContainer")," as the ",(0,n.yg)("inlineCode",{parentName:"p"},"state")," prop."),(0,n.yg)("p",null,"This allows you to use certain returned props from the state hook, including functions like ",(0,n.yg)("inlineCode",{parentName:"p"},"hide")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"show"),"."),(0,n.yg)("p",null,`It should be noted that when doing so, the state prop takes precedent over the other properties that affect
the state or initial state of the Minimizable Dialog. They will be ignored in favour of them being provided as arguments
to the `,(0,n.yg)("inlineCode",{parentName:"p"},"useMinimizableDialogState")," hook."),(0,n.yg)("p",null,`For full details on how to use the state hook, and what props to provide it, follow the
`,(0,n.yg)("a",{parentName:"p",href:"/primitives/non-modal-dialog-primitive"},"Non-Modal Dialog Primitive documentation"),"."),(0,n.yg)(W,{scope:{MinimizableDialog:w,MinimizableDialogButton:B,MinimizableDialogHeader:I,MinimizableDialogContainer:T,MinimizableDialogContent:k,useMinimizableDialogState:N,Button:l.$n,Box:o.az},noInline:!0,mdxType:"LivePreview"},H))}F.isMDXComponent=!0},31079:(e,i,a)=>{"use strict";a.r(i),a.d(i,{PlusIcon:()=>l});var t=a(36669),n=a(55729),o=a(96316);let l=n.forwardRef(({as:e,display:i,element:a="ICON",size:l,color:r,title:s,decorative:d},m)=>{let c=`PlusIcon-${(0,t.GV)()}`;if(!d&&null==s)throw Error("[PlusIcon]: Missing a title for non-decorative icon.");return n.createElement(o.IconWrapper,{as:e,display:i,element:a,size:l,color:r,ref:m},n.createElement("svg",{role:"img","aria-hidden":d,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},s?n.createElement("title",{id:c},s):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.043 9.043h-4.086V4.957a.958.958 0 00-1.914 0v4.086H4.957a.958.958 0 000 1.914h4.086v4.086a.958.958 0 001.914 0v-4.086h4.086a.958.958 0 000-1.914z"})))});l.displayName="PlusIcon"},35225:(e,i,a)=>{"use strict";a.r(i),a.d(i,{ChatIcon:()=>l});var t=a(36669),n=a(55729),o=a(96316);let l=n.forwardRef(({as:e,display:i,element:a="ICON",size:l,color:r,title:s,decorative:d},m)=>{let c=`ChatIcon-${(0,t.GV)()}`;if(!d&&null==s)throw Error("[ChatIcon]: Missing a title for non-decorative icon.");return n.createElement(o.IconWrapper,{as:e,display:i,element:a,size:l,color:r,ref:m},n.createElement("svg",{role:"img","aria-hidden":d,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":c},s?n.createElement("title",{id:c},s):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M3.302 2.755A3.458 3.458 0 015.466 2h2.268a3.468 3.468 0 013.322 2.476.5.5 0 00.959-.286A4.468 4.468 0 007.734 1H5.468a4.458 4.458 0 00-2.2 8.34v3.493a.5.5 0 00.853.353l2.267-2.266a.5.5 0 00-.708-.707l-1.413 1.413V9.037a.5.5 0 00-.286-.452 3.458 3.458 0 01-.68-5.83zm8.965 3.911a4.466 4.466 0 100 8.933h.36l3.253 3.254a.5.5 0 00.853-.354v-3.492A4.459 4.459 0 0019 11.134a4.469 4.469 0 00-4.466-4.468h-2.267zM9.816 8.682a3.466 3.466 0 012.451-1.016h2.267A3.467 3.467 0 0118 11.132a3.459 3.459 0 01-1.98 3.12.5.5 0 00-.287.451v2.589l-2.546-2.546a.5.5 0 00-.353-.147h-.567a3.466 3.466 0 01-2.451-5.917z"})))});l.displayName="ChatIcon"},38441:(e,i,a)=>{"use strict";a.r(i),a.d(i,{ChevronUpIcon:()=>l});var t=a(36669),n=a(55729),o=a(96316);let l=n.forwardRef(({as:e,display:i,element:a="ICON",size:l,color:r,title:s,decorative:d},m)=>{let c=`ChevronUpIcon-${(0,t.GV)()}`;if(!d&&null==s)throw Error("[ChevronUpIcon]: Missing a title for non-decorative icon.");return n.createElement(o.IconWrapper,{as:e,display:i,element:a,size:l,color:r,ref:m},n.createElement("svg",{role:"img","aria-hidden":d,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},s?n.createElement("title",{id:c},s):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.293 7.293a1 1 0 011.32-.083l.094.083 3 3a1 1 0 01-1.32 1.497l-.094-.083L10 9.415l-2.293 2.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 3-3z"})))});l.displayName="ChevronUpIcon"},40615:(e,i,a)=>{"use strict";a.d(i,{A:()=>h});var t=a(72387),n=a(76127),o=a(95669),l=a.n(o),r=a(81278);a(55729);var s=a(10511),d=a(43084),m=a(10732),c=a(62887),p=a(63437),u=a(38992);let g={h1:()=>null},h=({children:e,meta:i,navigationData:a,data:o,mdxHeadings:h,pageHeaderData:{categoryRoute:b,githubUrl:z,storybookUrl:v}})=>{let y=i.title?`${i.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,D=i.description||u.DZ.DESCRIPTION,M=(0,r.useRouter)();return(0,t.FD)(p.T,{navigationData:a,children:[(0,t.FD)(l(),{children:[(0,t.Y)("title",{children:y}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${M.pathname}`}),(0,t.Y)("meta",{name:"description",content:D},"description")]}),(0,t.FD)(s.s,{children:[(0,t.Y)(c.c,{categoryRoute:b,githubUrl:z,storybookUrl:v,data:o}),(0,t.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(m.i,{data:h}),(0,t.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(d.Q,{componentOverrides:i.package?g:{},children:e})})]})]})]})}},59328:(e,i,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/minimizable-dialog",function(){return a(20976)}])},81423:(e,i,a)=>{"use strict";a.r(i),a.d(i,{MinusIcon:()=>l});var t=a(36669),n=a(55729),o=a(96316);let l=n.forwardRef(({as:e,display:i,element:a="ICON",size:l,color:r,title:s,decorative:d},m)=>{let c=`MinusIcon-${(0,t.GV)()}`;if(!d&&null==s)throw Error("[MinusIcon]: Missing a title for non-decorative icon.");return n.createElement(o.IconWrapper,{as:e,display:i,element:a,size:l,color:r,ref:m},n.createElement("svg",{role:"img","aria-hidden":d,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},s?n.createElement("title",{id:c},s):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.167 9.5c.46 0 .833.448.833 1 0 .513-.322.936-.736.993l-.097.007H5.833c-.46 0-.833-.448-.833-1 0-.513.322-.936.736-.993l.097-.007h8.334z"})))});l.displayName="MinusIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,4140,636,6593,8792],()=>e(e.s=59328)),_N_E=e.O()}]);