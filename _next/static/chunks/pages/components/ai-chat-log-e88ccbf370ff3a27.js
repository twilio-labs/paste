(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2569],{8478:(e,a,t)=>{"use strict";t.d(a,{e:()=>l});var o=t(76127),n=t(27717),r=t(55729),s=n.I4.span((0,n.AH)({"& > button":{zIndex:1},"& > button:hover, & > button[aria-pressed=true]":{zIndex:2},"& > button:focus":{zIndex:3},"& > button:disabled":{zIndex:0},"& > button:first-of-type":{borderTopRightRadius:0,borderBottomRightRadius:0},"& > button:not(:first-of-type):not(:last-of-type)":{borderRadius:0,marginLeft:"1px"},"& > button:last-of-type":{marginLeft:"1px",borderTopLeftRadius:0,borderBottomLeftRadius:0}})),i=n.I4.span((0,n.AH)({display:"flex",columnGap:"space40"})),l=r.forwardRef(({element:e="BUTTON_GROUP",children:a,attached:t=!1,justifyContent:n="flex-start",...l},h)=>r.createElement(o.az,{...(0,o.x8)(l),as:t?s:i,ref:h,element:e,display:"inline-flex",flexWrap:t?"nowrap":"wrap",justifyContent:t?"flex-start":n,rowGap:"space40",role:"group"},a));l.displayName="ButtonGroup"},11598:(e,a,t)=>{"use strict";t.r(a),t.d(a,{AttachIcon:()=>s});var o=t(36669),n=t(55729),r=t(96316);let s=n.forwardRef(({as:e,display:a,element:t="ICON",size:s,color:i,title:l,decorative:h},g)=>{let d=`AttachIcon-${(0,o.GV)()}`;if(!h&&null==l)throw Error("[AttachIcon]: Missing a title for non-decorative icon.");return n.createElement(r.IconWrapper,{as:e,display:a,element:t,size:s,color:i,ref:g},n.createElement("svg",{role:"img","aria-hidden":h,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":d},l?n.createElement("title",{id:d},l):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.879 9.264l5.59-5.73a3.251 3.251 0 013.214-.924 3.347 3.347 0 012.36 2.42 3.447 3.447 0 01-.75 3.135l-.145.153-5.623 5.767a1.87 1.87 0 01-2.668-.023 1.987 1.987 0 01-.116-2.627l.099-.113 5.618-5.761c.195-.2.512-.2.708 0a.523.523 0 01.058.655l-.058.07-5.612 5.755a.94.94 0 00.011 1.295.885.885 0 001.174.09l.083-.073 5.624-5.767a2.4 2.4 0 00.628-2.296 2.333 2.333 0 00-1.645-1.686 2.264 2.264 0 00-2.117.523l-.129.127L4.587 9.99a3.866 3.866 0 000 5.371 3.64 3.64 0 005.097.139l.143-.139 6.818-6.99c.196-.2.513-.2.708 0a.523.523 0 01.058.655l-.058.071-6.818 6.99a4.626 4.626 0 01-6.656 0c-1.787-1.832-1.837-4.77-.15-6.663l.15-.16z"})))});s.displayName="AttachIcon"},14365:(e,a,t)=>{"use strict";t.d(a,{j:()=>l});var o=t(76127),n=t(27717),r=t(55729),s=(0,n.i7)`
  0% {
    transform: translateX(-100%) skew(155deg);
  }
  50%,
  100% {
    transform: translateX(100%) skew(155deg);
  }
`,i=n.I4.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    transparent,
    ${(0,n.yB)("backgroundColors.colorBackground")} 40%,
    ${(0,n.yB)("backgroundColors.colorBackground")} 60%,
    transparent
  );
  transform: translateX(-100%) skew(155deg);
  animation-timing-function: cubic-bezier(0.06, 0.42, 0.57, 0.89);
  animation-name: ${s};
  animation-duration: 4.5s;
  animation-iteration-count: infinite;
`,l=r.forwardRef(({borderBottomLeftRadius:e,borderBottomRightRadius:a,borderRadius:t="borderRadius20",borderTopLeftRadius:n,borderTopRightRadius:s,element:l="SKELETON_LOADER",display:h,height:g="sizeIcon20",maxHeight:d,maxWidth:c,minHeight:u,minWidth:p,size:m=null,width:C=null,...A},I)=>r.createElement(o.az,{...(0,o.x8)(A),"aria-busy":"true",backgroundColor:"colorBackgroundStrong",borderBottomLeftRadius:e,borderBottomRightRadius:a,borderRadius:t,borderTopLeftRadius:n,borderTopRightRadius:s,display:h,element:l,height:g,maxHeight:d,maxWidth:c,minHeight:u,minWidth:p,overflow:"hidden",pointerEvents:"none",position:"relative",userSelect:"none",size:m,width:C,ref:I},r.createElement(i,null)));l.displayName="SkeletonLoader"},38164:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ai-chat-log",function(){return t(80313)}])},40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>m});var o=t(72387),n=t(76127),r=t(95669),s=t.n(r),i=t(81278);t(55729);var l=t(10511),h=t(43084),g=t(10732),d=t(62887),c=t(63437),u=t(38992);let p={h1:()=>null},m=({children:e,meta:a,navigationData:t,data:r,mdxHeadings:m,pageHeaderData:{categoryRoute:C,githubUrl:A,storybookUrl:I}})=>{let y=a.title?`${a.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,f=a.description||u.DZ.DESCRIPTION,M=(0,i.useRouter)();return(0,o.FD)(c.T,{navigationData:t,children:[(0,o.FD)(s(),{children:[(0,o.Y)("title",{children:y}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${M.pathname}`}),(0,o.Y)("meta",{name:"description",content:f},"description")]}),(0,o.FD)(l.s,{children:[(0,o.Y)(d.c,{categoryRoute:C,githubUrl:A,storybookUrl:I,data:r}),(0,o.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(g.i,{data:m}),(0,o.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(h.Q,{componentOverrides:a.package?p:{},children:e})})]})]})]})}},54752:(e,a,t)=>{"use strict";t.r(a),t.d(a,{RefreshIcon:()=>s});var o=t(36669),n=t(55729),r=t(96316);let s=n.forwardRef(({as:e,display:a,element:t="ICON",size:s,color:i,title:l,decorative:h},g)=>{let d=`RefreshIcon-${(0,o.GV)()}`;if(!h&&null==l)throw Error("[RefreshIcon]: Missing a title for non-decorative icon.");return n.createElement(r.IconWrapper,{as:e,display:a,element:t,size:s,color:i,ref:g},n.createElement("svg",{role:"img","aria-hidden":h,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":d},l?n.createElement("title",{id:d},l):null,n.createElement("path",{fill:"currentColor",d:"M7.802 4.25a6.002 6.002 0 014.009.212.5.5 0 00.383-.924 7.002 7.002 0 00-8.437 10.46H2a.5.5 0 100 1h2.766a.52.52 0 00.09 0H5a.5.5 0 00.5-.5v-3a.5.5 0 10-1 0v1.815A6.002 6.002 0 017.802 4.25zM14.5 8.499V6.683a6 6 0 01-7.31 8.856.5.5 0 10-.385.923 7 7 0 008.439-10.463H17a.5.5 0 000-1h-2.767a.503.503 0 00-.09 0H14a.5.5 0 00-.5.5v3a.5.5 0 001 0z"})))});s.displayName="RefreshIcon"},59316:(e,a,t)=>{"use strict";t.r(a),t.d(a,{RepeatIcon:()=>s});var o=t(36669),n=t(55729),r=t(96316);let s=n.forwardRef(({as:e,display:a,element:t="ICON",size:s,color:i,title:l,decorative:h},g)=>{let d=`RepeatIcon-${(0,o.GV)()}`;if(!h&&null==l)throw Error("[RepeatIcon]: Missing a title for non-decorative icon.");return n.createElement(r.IconWrapper,{as:e,display:a,element:t,size:s,color:i,ref:g},n.createElement("svg",{role:"img","aria-hidden":h,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":d},l?n.createElement("title",{id:d},l):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.348 4.06a6 6 0 104.212 9.165.5.5 0 01.844.537A7 7 0 1116.5 10v.292l1.146-1.146a.5.5 0 01.708.707l-1.974 1.974a.499.499 0 01-.758 0l-1.975-1.974a.5.5 0 01.707-.707l1.146 1.146V10a6 6 0 00-5.152-5.939z",clipRule:"evenodd"})))});s.displayName="RepeatIcon"},71426:(e,a,t)=>{"use strict";t.d(a,{Er:()=>d,Io:()=>g,RP:()=>m,hM:()=>c,y9:()=>p});var o=t(76127),n=t(51582),r=t(36669),s=t(55729),i=t(95036),l=t(63973),h=s.createContext(void 0),g=s.forwardRef(({children:e,element:a="SUMMARY_DETAIL",state:t,...i},l)=>{let g=(0,r.GV)(),d=t||(0,n.Ec)(i);return s.createElement(h.Provider,{value:{...d,headerId:g}},s.createElement(o.az,{...(0,o.x8)(i),ref:l,element:a,display:"flex",flexDirection:"column",rowGap:"space40"},e))});g.displayName="SummaryDetail";var d=s.forwardRef(({children:e,element:a="SUMMARY_DETAIL_HEADING",...t},n)=>s.createElement(o.az,{...(0,o.x8)(t),ref:n,display:"flex",alignItems:"center",columnGap:"space40",element:a},e));d.displayName="SummaryDetailHeading";var c=s.forwardRef(({children:e,element:a="SUMMARY_DETAIL_HEADING_CONTENT",...t},n)=>{let r=s.useContext(h);return s.createElement(o.az,{ref:n,...(0,o.x8)(t),width:"100%",element:a,id:r?.headerId},e)});c.displayName="SummaryDetailHeadingContent";var u=s.forwardRef((e,a)=>{let t=e["aria-expanded"]?"90":"0",n=e["aria-label"]?void 0:e["aria-labelledby"];return s.createElement(i.$n,{ref:a,variant:"reset",size:"reset",width:"sizeIcon30",height:"sizeIcon30",borderRadius:"borderRadius20",_hover:{backgroundColor:"colorBackground"},...e,"aria-labelledby":n},s.createElement(o.az,{as:"span",element:`${e.element}_ICON_WRAPPER`,transform:`translateX(0) rotate(${t}deg)`},s.createElement(l.ChevronDisclosureIcon,{decorative:!0,size:"sizeIcon30",element:`${e.element}_ICON}`})))});u.displayName="ToggleButton";var p=s.forwardRef(({element:e="SUMMARY_DETAIL_TOGGLE_BUTTON",...a},t)=>{let o=s.useContext(h);return s.createElement(n.EN,{...a,as:u,...o,ref:t,element:e,"aria-labelledby":o?.headerId})});p.displayName="SummaryDetailToggleButton";var m=s.forwardRef(({children:e,element:a="SUMMARY_DETAIL_CONTENT",...t},r)=>{let i=s.useContext(h);return s.createElement(n.L7,{...(0,o.x8)(t),as:o.az,...i,element:a,ref:r},e)});m.displayName="SummaryDetailContent"},80313:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>eA,default:()=>eb,getStaticProps:()=>ey,mdxHeadings:()=>ef,meta:()=>eI});var o=t(55729),n=t(11885),r=t(76127),s=t(36669),i=t(27717),l=t(11881),h=t(82520),g=t(95036),d=t(95583),c=t(69277),u=t(14365),p=t(28019),m=t(58001),C=t(44255),A={display:"inline-block",backgroundColor:"colorBackgroundBodyElevation",paddingY:"space20",paddingX:"space30",borderRadius:"borderRadiusCircle",height:"sizeIcon40",minWidth:"sizeIcon40",textAlign:"center",verticalAlign:"middle",flexShrink:0,color:"colorTextWeak",fontSize:"fontSize20",lineHeight:"lineHeight10",fontWeight:"fontWeightMedium",fontVariantNumeric:"normal"},I=o.forwardRef(({children:e,element:a="FOOTNOTE",tooltipText:t,...n},s)=>t?o.createElement(r.az,{...(0,r.x8)(n),ref:s,element:a,as:"sup"},o.createElement(C.m,{element:`${a}_TOOLTIP`,text:t},o.createElement(g.$n,{element:`${a}_TOOLTIP_BUTTON`,variant:"reset",...A,size:"reset",boxShadow:"shadowBorderBottom",_hover:{boxShadow:"shadowBorderWeaker"},_focus:{boxShadow:"shadowFocus"}},e))):o.createElement(r.az,{...(0,r.x8)(n),ref:s,element:a,as:"sup",...A},e));I.displayName="Footnote";var y=t(4073),f=o.createContext({}),M=o.forwardRef(({children:e,element:a="AI_CHAT_MESSAGE",variant:t,id:n,...i},l)=>{let h=n||(0,s.GV)();return o.createElement(f.Provider,{value:{variant:t,id:h}},o.createElement(r.az,{role:"listitem",display:"flex",flexDirection:"column",rowGap:"space40",ref:l,element:a,alignItems:"user"===t?"flex-end":"inherit",...(0,r.x8)(i)},e))});M.displayName="AIChatMessage";var v=o.forwardRef(({children:e,element:a="AI_CHAT_MESSAGE_ACTION_GROUP",...t},n)=>o.createElement(r.az,{...(0,r.x8)(t),ref:n,element:a,display:"flex",flexWrap:"wrap",alignItems:"center",columnGap:"space40",fontWeight:"fontWeightMedium"},e));v.displayName="AIChatMessageActionGroup";var B=o.createContext({}),b={default:{fontSize:"fontSize30",lineHeight:"lineHeight30"},fullScreen:{fontSize:"fontSize40",lineHeight:"lineHeight40"}},w=(0,i.I4)(r.az)((0,i.AH)({"& p:first-of-type":{marginTop:"0"},"& p:last-of-type":{marginBottom:"0"}})),x=o.forwardRef(({children:e,size:a="default",element:t="AI_CHAT_MESSAGE_BODY",animated:n=!1,onAnimationEnd:s,onAnimationStart:i,timestamp:l,...h},g)=>{let{id:d,variant:c}=o.useContext(f),{size:u}=o.useContext(B),[p]=o.useState(n&&void 0!==e),m="fullScreen"===a||"fullScreen"===u,{animatedChildren:C,isAnimating:A}=((e,a=10,t=!0)=>{let[n,r]=(0,o.useState)(),[s,i]=(0,o.useState)(0);(0,o.useEffect)(()=>{let e=setInterval(()=>{i(e=>e+1)},a);return()=>clearInterval(e)},[a]);let l=e=>{let a=0;return o.Children.forEach(e,e=>{"string"==typeof e?a+=e.length:o.isValidElement(e)&&(a+=l(e.props.children))}),a},h=(e,a)=>{let t=a;return o.Children.map(e,e=>{if("string"==typeof e){if(t>0){let a=e.slice(0,t);return t-=e.length,a}return null}if(o.isValidElement(e)){let a=l(e.props.children);if(t>0){let n=o.cloneElement(e,{},h(e.props.children,t));return t-=a,n}return 0===t&&0===a?e:null}return e})};return(0,o.useEffect)(()=>{t&&s<=l(e)&&r(h(e,s))},[e,s,t]),{animatedChildren:t?n:e,isAnimating:t&&s<l(e)}})(e,m?8:10,p),I={paddingY:m?"space50":"space30",paddingX:"space40",borderRadius:"borderRadius40",maxWidth:m?"530px":"260px"},y={bot:{backgroundColor:"inherit",padding:"space0",borderRadius:"borderRadius0",maxWidth:"100%"},user:{...I,backgroundColor:"colorBackgroundWeakElevation"},agent:{...I,backgroundColor:"colorBackgroundBody",boxShadow:"shadowElevation05"}};return o.useEffect(()=>{i&&n&&A&&i(),n&&!A&&s&&s()},[A,p]),o.createElement(w,{...(0,r.x8)(h),...b[u||a],display:"inline-block",color:"colorText",wordWrap:"break-word",minWidth:0,element:t,ref:g,whiteSpace:"pre-wrap",id:d,marginBottom:m?"space30":"space0",...y[c]},C,l&&o.createElement(r.az,{fontSize:"fontSize20",color:"colorTextWeak",marginTop:"space30",element:`${t}_TIMESTAMP`,textAlign:"bot"===c?"left":"right"},l))});x.displayName="AIChatMessageBody";var T=o.forwardRef(({children:e,element:a="AI_CHAT_MESSAGE_AUTHOR",avatarName:t,avatarIcon:n,avatarSrc:s,...i},g)=>{let{variant:d}=o.useContext(f),{size:c}=o.useContext(B);return o.createElement(r.az,{...(0,r.x8)(i),ref:g,"aria-label":i["aria-label"],element:a,display:"flex",alignItems:"center",columnGap:"space40",fontWeight:"fontWeightSemibold",fontSize:"fullScreen"===c?"fontSize30":"fontSize20",color:"colorTextWeak"},"bot"===d?o.createElement(l.e,{name:e,size:"sizeIcon30",color:"decorative20",icon:h.ArtificialIntelligenceIcon,element:`${a}_BOT_AVATAR`}):o.createElement(l.e,{size:"sizeIcon30",color:"decorative30",element:`${a}_USER_AVATAR`,name:t||e,icon:n,src:s}),e)});T.displayName="AIChatMessageAuthor";var E=o.forwardRef(({children:e,element:a="AI_CHAT_MESSAGE_ACTION_CARD",...t},n)=>o.createElement(r.az,{...(0,r.x8)(t),ref:n,element:a,display:"inline-flex",alignItems:"flex-start",columnGap:"space30",color:"colorTextIcon",lineHeight:"lineHeight30",fontSize:"fontSize30",fontWeight:"fontWeightMedium",backgroundColor:"colorBackgroundBody",boxShadow:"shadowBorderWeaker",borderRadius:"borderRadius30",paddingX:"space30",paddingY:"space20"},e));E.displayName="AIChatMessageActionCard";var S=(e,a)=>Math.min(Math.max(e,Math.random()*a),a),L=o.forwardRef(({onStopLoading:e,i18nStopGeneratingLabel:a="Stop generating",i18nAIScreenReaderText:t="AI response",element:n="AI_CHAT_MESSAGE_LOADING",...s},i)=>{let l=o.useRef([S(40,75),S(65,100),S(55,80)]).current,{id:h}=o.useContext(f);return o.createElement(r.az,{...(0,r.x8)(s),ref:i,element:n,display:"flex",flexDirection:"column",rowGap:"space40"},o.createElement(u.j,{width:`${l[0]}%`,height:"20px",element:`${n}_SKELETON`}),o.createElement(u.j,{width:`${l[1]}%`,height:"20px",element:`${n}_SKELETON`}),o.createElement(u.j,{width:`${l[2]}%`,height:"20px",element:`${n}_SKELETON`}),e?o.createElement(r.az,{display:"flex",justifyContent:"center",element:`${n}_STOP_LOADING`},o.createElement(g.$n,{variant:"secondary",size:"rounded_small",onClick:e,"aria-controls":h,element:`${n}_STOP_BUTTON`},o.createElement(d.StopIcon,{decorative:!0}),a," ",o.createElement(c.E,null,t))):null)});L.displayName="AIChatMessageLoading",o.forwardRef(({children:e,element:a="AI_CHAT_MESSAGE",withSeparator:t,...n},s)=>{let{size:i}=o.useContext(B);return o.createElement(r.az,{display:"flex",justifyContent:"center",columnGap:"space10",alignItems:"center",color:"colorTextWeak",fontSize:"fontSize20",fontWeight:"fontWeightMedium",ref:s,element:a,marginY:"fullScreen"===i?"space50":"space0",...(0,r.x8)(n)},t&&o.createElement(r.az,{flexGrow:1},o.createElement(p.w,{orientation:"horizontal"})),e,t&&o.createElement(r.az,{flexGrow:1},o.createElement(p.w,{orientation:"horizontal"})))}).displayName="AIChatEvent";var z=o.forwardRef(({element:e="AI_CHAT_LOG",children:a,size:t,...n},s)=>o.createElement(B.Provider,{value:{size:t}},o.createElement(r.az,{role:"log",paddingY:"space70",element:e,ref:s,...(0,r.x8)(n)},o.createElement(r.az,{as:"div",role:"list",margin:"space0",padding:"space0",display:"flex",flexDirection:"column",rowGap:"space70",element:`${e}_LIST`},a))));z.displayName="AIChatLog";var N=e=>({...e,id:e.id||(0,s.Ld)(e.content)}),R=(...e)=>{let a=o.useMemo(()=>e.map(N),[e]),[t,n]=o.useState(a),r=o.useCallback(e=>{n(a=>a.concat(N(e)))},[]);return{push:r,pop:o.useCallback(e=>{n(a=>e?a.filter(a=>a.id!==e):a.slice(0,-1))},[]),aiChats:t,clear:o.useCallback(()=>n([]),[])}},G=(0,m.CS)(r.az),k=o.forwardRef(({aiChats:e,...a},t)=>{let n=(0,m.pn)(e,{keys:e=>e.id,from:()=>({opacity:0,x:0}),enter:{opacity:1,x:0},leave:()=>({opacity:0,x:0}),config:{mass:.7,tension:190,friction:16}}),r=(0,m.Ib)()?e.map(e=>o.cloneElement(e.content,{key:e.id})):n((e,a,{key:t})=>o.createElement(G,{as:"div",style:e,key:t},a.content));return o.createElement(z,{...a,ref:t},r)});k.displayName="AIChatLogger",o.forwardRef(({children:e,element:a="AI_CHAT_MESSAGE_SOURCE",...t},n)=>o.createElement(r.az,{as:"span",ref:n,element:a,paddingX:"space10",...(0,r.x8)(t)},o.createElement(I,{element:`${a}_FOOTNOTE`},e))).displayName="AIChatMessageSource",o.forwardRef(({children:e,number:a,url:t,element:n="AI_CHAT_MESSAGE_SOURCE_LINK",...s},i)=>o.createElement(r.az,{ref:i,element:n,verticalAlign:"inherit",fontSize:"inherit",color:"colorTextWeak",...(0,r.x8)(s)},"[",a,"]"," ",o.createElement(r.az,{as:"span",marginLeft:"space10"},e),o.createElement(y.Mz,{href:t,showExternal:!0,marginLeft:"space20"},"Source with url"))).displayName="AIChatMessageSourceLink";var _=t(8478),D=t(8909),H=t(90710),P=t(93548),O=t(54752),W=t(33042),$=t(26035),U=t(50010),Y=t(84498);let F={src:"/_next/static/media/logo.7259e374.svg",height:786,width:786,blurWidth:0,blurHeight:0};var j=t(54652),V=t(51371),X=t(11598),q=t(5713),K=t(59316),Q=t(99123),Z=t(71426);let J=`
const BasicMessage = () => {
  return (
    <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Here is what I found, error code 30003 means: The destination phone is unavailable or turned off, or it may be a landline or phone that doesn't support SMS.
          </AIChatMessageBody>
        </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <BasicMessage />
)`.trim(),ee=`
const BasicMessage = () => {
  return (
    <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody>
            I would like some information on twilio error codes for undelivered messages
          </AIChatMessageBody>
        </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <BasicMessage />
)`.trim(),ea=`
const MessageWithFeedback = () => {
  return (
    <AIChatLog>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          Here is what I found, error code 30003 means: The destination phone is unavailable or turned off, or it may be a landline or phone that doesn't support SMS.
        </AIChatMessageBody>
        <AIChatMessageActionGroup>
          <AIChatMessageActionCard aria-label="Feedback form">
            Is this helpful?
            <Button variant="reset" size="reset" aria-label="this is a helpful response">
              <ThumbsUpIcon decorative={false} title="like result" />
            </Button>
            <Button variant="reset" size="reset">
              <ThumbsDownIcon decorative={false} title="dislike result" aria-label="this is not a helpful response" />
            </Button>
          </AIChatMessageActionCard>
          <AIChatMessageActionCard aria-label="Rewrite and copy buttons">
            <Button variant="reset" size="reset">
              <RefreshIcon decorative={true}/> Rewrite
            </Button>
            <Button variant="reset" size="reset">
              <CopyIcon decorative={true}/> Copy
            </Button>
          </AIChatMessageActionCard>
        </AIChatMessageActionGroup>
      </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <MessageWithFeedback />
)`.trim(),et=`
const MessageWithFeedback = () => {
  return (
    <AIChatLog>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          <Paragraph>Below is a list of actions that can be taken with flex wrapping supported:</Paragraph>
          <Box paddingY="space50">
            <ButtonGroup>
              <Button variant="secondary" size="rounded_small" onClick={() => {}} >
                View Logs
              </Button>
              <Button variant="secondary" size="rounded_small" onClick={() => {}}>
                Run Diagnostics
              </Button>
              <Button variant="secondary" size="rounded_small" onClick={() => {}}>
                Submit Bug Report
              </Button>
            </ButtonGroup>
          </Box>
        </AIChatMessageBody>
      </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <MessageWithFeedback />
)`.trim(),eo=`
const MessageWithLoadingAndStop = () => {
  return (
    <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">
            Good Bot
          </AIChatMessageAuthor>
          <AIChatMessageBody>
            <AIChatMessageLoading onStopLoading={() => {}} />
          </AIChatMessageBody>
        </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <MessageWithLoadingAndStop />
)`.trim(),en=`
const MessageWithLoading = () => {
  return (
    <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">
            Good Bot
          </AIChatMessageAuthor>
          <AIChatMessageBody>
            <AIChatMessageLoading />
          </AIChatMessageBody>
        </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <MessageWithLoading />
)`.trim(),er=`
const AIChatLogExample = () => {
  return (
    <AIChatLog>
      <AIChatMessage variant="user">
        <AIChatMessageBody>
          Hi, I'm getting errors codes when sending an SMS.
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          <Paragraph>Error codes can be returned from various parts of the process. What error codes are you encountering?</Paragragh>
          <Box marginTop="space50">
            <ButtonGroup>
              <Button variant="secondary" size="rounded_small" onClick={() => {}} >
                21608
              </Button>
              <Button variant="secondary" size="rounded_small" onClick={() => {}}>
                30007
              </Button>
              <Button variant="secondary" size="rounded_small" onClick={() => {}}>
                30009
              </Button>
            </ButtonGroup>
          </Box>
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          Error 21608 means you're trying to send a message from an unverified number. Is your number verified in your Twilio account?
        </AIChatMessageBody>
        <AIChatMessageActionGroup>
          <AIChatMessageActionCard aria-label="Feedback form">
            Is this helpful?
            <Button variant="reset" size="reset" aria-label="this is a helpful response">
              <ThumbsUpIcon decorative={false} title="like result" />
            </Button>
            <Button variant="reset" size="reset">
              <ThumbsDownIcon decorative={false} title="dislike result" aria-label="this is not a helpful response"/>
            </Button>
          </AIChatMessageActionCard>
        </AIChatMessageActionGroup>
      </AIChatMessage>
      <AIChatMessage variant="user">
        <AIChatMessageBody>
          No, how do I verify it?
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said" bot>
          Good Bot
        </AIChatMessageAuthor>
        <AIChatMessageBody>
          <AIChatMessageLoading onStopLoading={() => {}} />
        </AIChatMessageBody>
      </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <AIChatLogExample />
)`.trim(),es=`
const aiChatFactory = ([ message, variant, metaLabel, meta ]) => {
  const time = new Date(0).toLocaleString(
    'en-US',
    { hour: 'numeric', minute: 'numeric', timeZone: 'UTC', hour12: true }
  )

  return {
    variant,
    content: (
      <AIChatMessage variant={variant}>
          <AIChatMessageBody>
            {message}
          </AIChatMessageBody>
      </AIChatMessage>
    )
  }
};

const chatTemplates = [
  ["Hello", "user", "You said at ", "You"],
  ["Hi there", "bot", "AI said at ", "Good Bot"],
  ["Greetings", "user", "You said at ", "You"],
  ["Good to meet you", "bot", "AI said at ", "Good Bot"]
];

const AIChatLoggerExample = () => {
  const [templateIdx, setTemplateIdx] = React.useState(2);
  const { aiChats, push, pop, clear } = useAIChatLogger(
    aiChatFactory(chatTemplates[0]),
    aiChatFactory(chatTemplates[1])
  );
  const [loading, setLoading] = React.useState(false);

  const pushChat = () => {
    const template = chatTemplates[templateIdx];
    setTemplateIdx((idx) => ++idx % chatTemplates.length);
    const chat = aiChatFactory(template);

    if (template[1] ===  "bot") {
      const id = uid(chat.content);
      setLoading(true);
      push({
        id,
        variant: template[1],
        content: (
          <AIChatMessage variant="bot">
            <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
            <AIChatMessageBody>
              <AIChatMessageLoading />
            </AIChatMessageBody>
          </AIChatMessage>
        ),
      });
      setTimeout(() => {
        pop(id);
        setLoading(false);
        push(chat);
      }, 1000);
    } else {
      push(chat);
    }
  }

  const popChat = () => {
    pop();
    setTemplateIdx((idx) => idx === 0 ? idx : --idx % chatTemplates.length);
  }

  return(
    <Stack orientation="vertical">
      <ButtonGroup>
        <Button variant="primary" disabled={loading} onClick={pushChat}>
          Push Chat
        </Button>
        <Button variant="primary" disabled={loading} onClick={popChat}>
          Pop Chat
        </Button>
        <Button variant="primary" disabled={loading} onClick={clear}>
          Clear Chat
        </Button>
      </ButtonGroup>
      <AIChatLogger aiChats={aiChats} />
    </Stack>
  )
}

render(<AIChatLoggerExample />);
`.trim(),ei=`
const AvatarExample = () => {
  return (
    <AIChatLog>
      <AIChatMessage variant="user">
        <AIChatMessageAuthor avatarIcon={LogoTwilioIcon} aria-label="You said" avatarName="Gibby Radki">You</AIChatMessageAuthor>
      </AIChatMessage>
      <AIChatMessage variant="user">
        <AIChatMessageAuthor avatarSrc={Logo.src} aria-label="You said" avatarName="Gibby Radki">You</AIChatMessageAuthor>
      </AIChatMessage>
    </AIChatLog>
  );
};

render(
  <AvatarExample />
)`.trim(),el=`
const MessageGenerationError = () => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody>Message filtered (30007)</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            <Callout variant="error">
              <CalloutHeading as="h3">There was an error generating a response.</CalloutHeading>
              <CalloutText>
                Please try again, if the error persists please <Anchor href="#">contact us</Anchor>.
              </CalloutText>
            </Callout>
          </AIChatMessageBody>
          <AIChatMessageActionGroup>
            <AIChatMessageActionCard aria-label="Feedback form">
              <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                <RefreshIcon decorative title="dislike result" />
                Regenerate
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <ChatComposerContainer variant="contained">
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
          >
            <ClearEditorPlugin />
          </ChatComposer>
          <ChatComposerActionGroup>
            <Button variant="secondary_icon" size="reset">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Button>
            <Button variant="primary_icon" size="reset">
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </Box>
    </>
  );
};

render(
  <MessageGenerationError />
)`.trim(),eh=`
const AIActionClickError = () => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody>Message filtered (30007)</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            We recommend reviewing our guidelines on filtering and scaling to better manage high volumes of messages.
            <Box paddingY="space50">
              <ButtonGroup>
                <Button variant="secondary" size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30009
                </Button>
              </ButtonGroup>
            </Box>

            <Callout variant="error">
              <CalloutHeading as="h3">The action couldn’t be completed.</CalloutHeading>
              <CalloutText>
                Please try again, if the error persists please <Anchor href="#">contact us</Anchor>.
              </CalloutText>
            </Callout>
          </AIChatMessageBody>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <ChatComposerContainer variant="contained">
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
          >
            <ClearEditorPlugin />
          </ChatComposer>
          <ChatComposerActionGroup>
            <Button variant="secondary_icon" size="reset">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Button>
            <Button variant="primary_icon" size="reset">
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </Box>
    </>
  );
};

render(
  <AIActionClickError />
)`.trim(),eg=`
const ActionGroupError = () => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody>Message body text</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Message body text
            <Box marginTop="space50">
              <SummaryDetail>
                <SummaryDetailHeading>
                  <SummaryDetailToggleButton aria-label="BOOP" />
                  <SummaryDetailHeadingContent>
                    <Text as="p" fontWeight="fontWeightBold">View data sources</Text>
                  </SummaryDetailHeadingContent>
                </SummaryDetailHeading>
                <SummaryDetailContent>Data Content</SummaryDetailContent>
              </SummaryDetail>
            </Box>
          </AIChatMessageBody>
          <AIChatMessageActionGroup>
            <AIChatMessageActionCard aria-label="Feedback form">
              Is this helpful?
              <Button variant="reset" size="reset" aria-label="this is a helpful response">
                <ThumbsUpIcon decorative={false} title="like result" />
              </Button>
              <Button variant="reset" size="reset" aria-label="this is not a helpful response">
                <ThumbsDownIcon decorative={false} title="dislike result" />
              </Button>
            </AIChatMessageActionCard>
            <AIChatMessageActionCard aria-label="Feedback form">
              <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                <RefreshIcon decorative title="dislike result" />
                Regenerate
              </Button>
              <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                <CopyIcon decorative title="dislike result" />
                Copy
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
          <HelpText variant="error">The action couldn’t be completed. Please try again.</HelpText>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <ChatComposerContainer variant="contained">
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
          >
            <ClearEditorPlugin />
          </ChatComposer>
          <ChatComposerActionGroup>
            <Button variant="secondary_icon" size="reset">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Button>
            <Button variant="primary_icon" size="reset">
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </Box>
    </>
  );
};

render(
  <ActionGroupError />
)`.trim(),ed=`
const SendingMessageError = () => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Messages from +1 234-292-2349 are failing due to the following top 3 errors which occurred in the past 7
            days:
            <Box paddingY="space50">
              <ButtonGroup>
                <Button variant="secondary" size="rounded_small">
                  30007
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30034
                </Button>
                <Button variant="secondary" size="rounded_small">
                  30024
                </Button>
              </ButtonGroup>
            </Box>
            <AIChatMessageActionGroup>
              <AIChatMessageActionCard aria-label="Feedback form">
                Is this helpful?
                <Button variant="reset" size="reset" aria-label="this is a helpful response">
                  <ThumbsUpIcon decorative={false} title="like result" />
                </Button>
                <Button variant="reset" size="reset" aria-label="this is not a helpful response">
                  <ThumbsDownIcon decorative={false} title="dislike result" />
                </Button>
              </AIChatMessageActionCard>
            </AIChatMessageActionGroup>
          </AIChatMessageBody>
        </AIChatMessage>

        <AIChatMessage variant="user">
          <AIChatMessageBody>
            Message body text
          </AIChatMessageBody>
          <AIChatMessageActionGroup>
           <AIChatMessageActionCard aria-label="Feedback form">
             <HelpText marginTop="space0" variant="error">
               Message failed to send
             </HelpText>
             <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
               <RepeatIcon decorative title="try again" />
               Try again
             </Button>
           </AIChatMessageActionCard>
         </AIChatMessageActionGroup>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <ChatComposerContainer variant="contained">
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
          >
            <ClearEditorPlugin />
          </ChatComposer>
          <ChatComposerActionGroup>
            <Button variant="secondary_icon" size="reset">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Button>
            <Button variant="primary_icon" size="reset">
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </Box>
    </>
  );
};

render(
  <SendingMessageError />
)`.trim(),ec=`
const SystemError = () => {
  return (
    <>
      <AIChatLog>
        <AIChatMessage variant="user">
          <AIChatMessageBody>Message body text</AIChatMessageBody>
        </AIChatMessage>
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody>
            Message body text
            <Box marginTop="space50">
              <SummaryDetail>
                <SummaryDetailHeading>
                  <SummaryDetailToggleButton aria-label="BOOP" />
                  <SummaryDetailHeadingContent>
                    <Text as="p" fontWeight="fontWeightBold">
                      View data sources
                    </Text>
                  </SummaryDetailHeadingContent>
                </SummaryDetailHeading>
                <SummaryDetailContent>Data Content</SummaryDetailContent>
              </SummaryDetail>
            </Box>
          </AIChatMessageBody>
          <AIChatMessageActionGroup>
            <AIChatMessageActionCard aria-label="Feedback form">
              Is this helpful?
              <Button variant="reset" size="reset" aria-label="this is a helpful response">
                <ThumbsUpIcon decorative={false} title="like result" />
              </Button>
              <Button variant="reset" size="reset" aria-label="this is not a helpful response">
                <ThumbsDownIcon decorative={false} title="dislike result" />
              </Button>
            </AIChatMessageActionCard>
            <AIChatMessageActionCard aria-label="Feedback form">
              <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                <RefreshIcon decorative title="dislike result" />
                Regenerate
              </Button>
              <Button variant="secondary_icon" aria-label="this is not a helpful response" size="reset">
                <CopyIcon decorative title="dislike result" />
                Copy
              </Button>
            </AIChatMessageActionCard>
          </AIChatMessageActionGroup>
        </AIChatMessage>
      </AIChatLog>
      <Box marginTop="space70">
        <Alert variant="error">
          <div>
            <strong>Something went wrong.</strong>
          </div>
          If this issue persists please contact us through our help center.
        </Alert>
      </Box>
      <Box marginTop="space50">
        <ChatComposerContainer variant="contained">
          <ChatComposer
            maxHeight="size10"
            config={{
              namespace: "foo",
              onError: (error) => {
                throw error;
              },
            }}
            ariaLabel="Message"
            placeholder="Type here..."
          >
            <ClearEditorPlugin />
          </ChatComposer>
          <ChatComposerActionGroup>
            <Button variant="secondary_icon" size="reset">
              <AttachIcon decorative={false} title="attach a file to your message" />
            </Button>
            <Button variant="primary_icon" size="reset">
              <SendIcon decorative={false} title="Send" />
            </Button>
          </ChatComposerActionGroup>
        </ChatComposerContainer>
      </Box>
    </>
  );
};

render(
  <SystemError />
)`.trim(),eu=`
const exampleAIResponseText =
  "Twilio error codes are numeric codes returned by the Twilio API when an error occurs during a request, providing specific information about the problem encountered, such as invalid phone numbers, network issues, or authentication failures; they help developers identify and troubleshoot issues within their applications using Twilio services";

const AnimatedBotScrollable = () => {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [userInterctedScroll, setUserInteractedScroll] = React.useState(false);
  const loggerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const { aiChats, push } = useAIChatLogger({
    variant: "bot",
    content: (
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>{exampleAIResponseText}</AIChatMessageBody>
      </AIChatMessage>
    ),
  });

  const scrollToChatEnd = () => {
    const scrollPosition = scrollerRef.current;
    const scrollHeight = loggerRef.current;
    scrollPosition?.scrollTo({ top: scrollHeight.scrollHeight, behavior: "smooth" });
  };

  const userScrolled = () => setUserInteractedScroll(true);

  const onAnimationEnd = () => {
    setIsAnimating(false);
    setUserInteractedScroll(false);
  };

  const onAnimationStart = () => {
    setUserInteractedScroll(false);
    setIsAnimating(true);
  };

  React.useEffect(() => {
    scrollerRef.current?.addEventListener("wheel", userScrolled);
    scrollerRef.current?.addEventListener("touchmove", userScrolled);

    const interval = setInterval(() => isAnimating && !userInterctedScroll && scrollToChatEnd(), 5);

    return () => {
      if (interval) clearInterval(interval);
      scrollerRef.current?.removeEventListener("wheel", userScrolled);
      scrollerRef.current?.removeEventListener("touchmove", userScrolled);
    };
  }, [isAnimating, userInterctedScroll, scrollerRef]);

  const pushLargeBotMessage = () => {
    push({
      variant: "bot",
      content: (
        <AIChatMessage variant="bot">
          <AIChatMessageAuthor aria-label="Bot said">Good Bot</AIChatMessageAuthor>
          <AIChatMessageBody animated onAnimationEnd={onAnimationEnd} onAnimationStart={onAnimationStart}>
            {exampleAIResponseText}
          </AIChatMessageBody>
        </AIChatMessage>
      ),
    });
  };

  return (
    <Box>
      <Box paddingX="space10" height="size20" overflowY="auto" ref={scrollerRef}>
        <AIChatLogger ref={loggerRef} aiChats={aiChats} />
      </Box>
      <Button variant="primary" onClick={pushLargeBotMessage}>
        Add animated bot message
      </Button>
    </Box>
  );
};

render(
  <AnimatedBotScrollable />
)`.trim();var ep=t(40615),em=t(629),eC=t(5962),eA=!0;let eI={title:"AI Chat Log - Components",package:"@twilio-paste/ai-chat-log",description:"An AI Chat Log is a collection of AI Chat components for displaying conversations between a human and an AI bot.",slug:"/components/ai-chat-log/"},ey=async()=>({props:{data:{...packageJson,...feature,nameOverride:"AI Chat Log"},navigationData,mdxHeadings:ef,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/ai-chat-log",storybookUrl:"/?path=/story/components-ai-chat-log--example-ai-chat-log"}}}),ef=[{value:"Guidelines",depth:2},{value:"About AI Chat Log",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Basic Message",depth:3},{value:"Bot",depth:4},{value:"User",depth:4},{value:"Message Body Sizes",depth:3},{value:"Message with Actions",depth:3},{value:"Feedback in AIChatMessageActionCard",depth:4},{value:"Buttons in AIChatMessageBody from AI Response",depth:4},{value:"Generating Messages",depth:3},{value:"Loading",depth:4},{value:"Loading with Stop Button",depth:5},{value:"Animating",depth:4},{value:"Customizing Avatar",depth:3},{value:"Example AI Chat Log",depth:3},{value:"useAIChatLogger hook",depth:3},{value:"AIChatLogger component",depth:5},{value:"Adding and removing a chat",depth:5},{value:"Composition Notes",depth:2},{value:"Error States",depth:3},{value:"Message content error",depth:4},{value:"AI Chat Message Action Group Error",depth:4},{value:"Sending errors",depth:4},{value:"System errors",depth:4}],eM=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},ev={meta:eI,getStaticProps:ey,mdxHeadings:ef},eB=ep.A;function eb({components:e,...a}){return(0,n.yg)(eB,{...ev,...a,components:e,mdxType:"MDXLayout"},(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x},language:"jsx",mdxType:"LivePreview"},`<AIChatLog>
  <AIChatMessage variant="user">
    <AIChatMessageBody>
      What does the SMS delivery error code 30003 mean?
    </AIChatMessageBody>
  </AIChatMessage>
  <AIChatMessage variant="bot">
    <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
    <AIChatMessageBody>
      Here is what I found, error code 30003 means: The destination phone is unavailable or turned off, or it may be a landline or phone that doesn't support SMS.
    </AIChatMessageBody>
  </AIChatMessage>
</AIChatLog>`),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About AI Chat Log"),(0,n.yg)("p",null,"An AI Chat Log is a way to display conversations between a user and AI. If you are looking for a chat between 2 or more humans, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/components/chat-log"},"Chat Log"),"."),(0,n.yg)("p",null,"The AI Chat Log package includes these main components:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"AIChatLog"),(0,n.yg)("li",{parentName:"ul"},"AIChatMessage"),(0,n.yg)("li",{parentName:"ul"},"AIChatMessageAuthor"),(0,n.yg)("li",{parentName:"ul"},"AIChatMessageBody"),(0,n.yg)("li",{parentName:"ul"},"AIChatMessageActionGroup"),(0,n.yg)("li",{parentName:"ul"},"AIChatMessageActionCard"),(0,n.yg)("li",{parentName:"ul"},"AIChatMessageLoading")),(0,n.yg)("h3",null,"Accessibility"),(0,n.yg)("p",null,"To ensure the chat is accessible, only use the AI Chat components within an ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatLog")," component and use ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessage")," to wrap ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageBody"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageActionGroup")," and components together."),(0,n.yg)("p",null,"The only other accessibility requirement is providing the ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageActionCard")," a descriptive label via the ",(0,n.yg)("inlineCode",{parentName:"p"},"aria-label")," React prop."),(0,n.yg)("p",null,"The AIChatLog component has ",(0,n.yg)("inlineCode",{parentName:"p"},'role="log"')," which means that any new messages added to it are announced by assistive technology."),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Basic Message"),(0,n.yg)("p",null,"A message must include the author and body. Any message text from a user or a bot must be contained within the ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageBody")," component. Due to lengthy AI responses, the chat layout is top-down."),(0,n.yg)("h4",null,"Bot"),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x},language:"jsx",noInline:!0,mdxType:"LivePreview"},J),(0,n.yg)("h4",null,"User"),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x},language:"jsx",noInline:!0,mdxType:"LivePreview"},ee),(0,n.yg)("h3",null,"Message Body Sizes"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageBody")," component has two sizes, ",(0,n.yg)("inlineCode",{parentName:"p"},'size="default"')," and ",(0,n.yg)("inlineCode",{parentName:"p"},'size="fullScreen"'),". The fullScreen size is used where the ChatLog is displayed in the full width of the page where larger font size is needed."),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x},language:"jsx",mdxType:"LivePreview"},`<AIChatLog>
  <AIChatMessage variant="user">
    <AIChatMessageBody size="default">
      I'm a message that should be displayed in compact elements
    </AIChatMessageBody>
  </AIChatMessage>
  <AIChatMessage variant="user">
    <AIChatMessageBody size="fullScreen">
      I'm a message that will be displayed in full screen width
    </AIChatMessageBody>
  </AIChatMessage>
</AIChatLog>`),(0,n.yg)("h3",null,"Message with Actions"),(0,n.yg)("p",null,"Message actions can be used to provide quick responses or actions to the user."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageActionGroup")," should be a child of ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessage")," so that the text and meta information are correctly grouped together for assistive technologies. ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageActionCard")," also needs a readable ",(0,n.yg)("inlineCode",{parentName:"p"},"aria-label")," that summarizes what the meta information says."),(0,n.yg)("p",null,"Each item within ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageActionGroup")," should be wrapped with ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageActionCard"),". It is recommended to use reset button variants for content within ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageActionCard"),"."),(0,n.yg)("p",null,"Actions can still be added in ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageBody")," which are returned from the AI response."),(0,n.yg)("h4",null,"Feedback in AIChatMessageActionCard"),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,AIChatMessageActionCard:E,AIChatMessageActionGroup:v,Button:g.$n,ThumbsUpIcon:$.ThumbsUpIcon,ThumbsDownIcon:W.ThumbsDownIcon,CopyIcon:H.CopyIcon,RefreshIcon:O.RefreshIcon},language:"jsx",noInline:!0,mdxType:"LivePreview"},ea),(0,n.yg)("h4",null,"Buttons in AIChatMessageBody from AI Response"),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,Button:g.$n,ButtonGroup:_.e,Paragraph:U.f,Box:r.az},language:"jsx",noInline:!0,mdxType:"LivePreview"},et),(0,n.yg)("h3",null,"Generating Messages"),(0,n.yg)("h4",null,"Loading"),(0,n.yg)("p",null,"Use the ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageLoading")," component to indicate that the bot is typing or processing a response. During this time ",(0,n.yg)("strong",{parentName:"p"},"no user input should be accepted"),". No new messages should be added to a chat until the AI operation is finished processing."),(0,n.yg)("p",null,"The SkeletonLoader lengths vary on each render to give a more natural pending message body interaction."),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,AIChatMessageLoading:L},language:"jsx",noInline:!0,mdxType:"LivePreview"},en),(0,n.yg)("h5",null,"Loading with Stop Button"),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,AIChatMessageLoading:L},language:"jsx",noInline:!0,mdxType:"LivePreview"},eo),(0,n.yg)("h4",null,"Animating"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageBody")," component has an optional ",(0,n.yg)("inlineCode",{parentName:"p"},"animated")," prop that can be used to apply a typewriter animation to the text. This should only be applied to the messages received from the AI."),(0,n.yg)("p",null,"It also accepts ",(0,n.yg)("inlineCode",{parentName:"p"},"onAnimationStart")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"onAnimationEnd")," props to trigger actions when the animation starts and ends allowing additional logic such as scrolling to be implemented."),(0,n.yg)("p",null,"If you are using a Markdown parser to render the message body we recommend using ",(0,n.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/markdown-to-jsx"},"markdown-to-jsx"),". It allows you to pass in Paste components to replace specific markdown elements. You can view our implementation for the ",(0,n.yg)("a",{parentName:"p",href:"/assistant"},"Paste Assistant")," for an example. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/twilio-labs/paste/blob/main/packages/paste-website/src/components/assistant/AssistantMessage.tsx#L27"},"AIChatMessageBody implementation"),", ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/twilio-labs/paste/blob/main/packages/paste-website/src/components/assistant/AssistantMarkdown.tsx#L48"},"Markdown options implementation")),(0,n.yg)(eM,{scope:{useAIChatLogger:R,AIChatLogger:k,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,Button:g.$n,Box:r.az},language:"jsx",noInline:!0,mdxType:"LivePreview"},eu),(0,n.yg)("h3",null,"Customizing Avatar"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageAuthor")," can be customized by passing an icon, image, or string to the ",(0,n.yg)("inlineCode",{parentName:"p"},"avatarIcon"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"avatarSrc"),", or ",(0,n.yg)("inlineCode",{parentName:"p"},"avatarName")," props. ",(0,n.yg)("a",{parentName:"p",href:"/components/ai-chat-log/api#aichatmessageauthor"},"Learn more about the API"),"."),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,LogoTwilioIcon:P.LogoTwilioIcon,Logo:F},language:"jsx",noInline:!0,mdxType:"LivePreview"},ei),(0,n.yg)("h3",null,"Example AI Chat Log"),(0,n.yg)("p",null,"This example combines all the separate features displayed previously into one example. It shows how all the features work together harmoniously through composition."),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,AIChatMessageLoading:L,AIChatMessageActionCard:E,AIChatMessageActionGroup:v,Button:g.$n,ButtonGroup:_.e,ThumbsDownIcon:W.ThumbsDownIcon,ThumbsUpIcon:$.ThumbsUpIcon,Paragraph:U.f,Box:r.az},language:"jsx",noInline:!0,mdxType:"LivePreview"},er),(0,n.yg)("h3",null,"useAIChatLogger hook"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"useAIChatLogger")," hook provides a hook-based approach to managing AI chat state. It is best used with the ",(0,n.yg)("inlineCode",{parentName:"p"},"<AIChatLogger />")," component."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useAIChatLogger")," returns 4 things:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"An array of ",(0,n.yg)("inlineCode",{parentName:"li"},"aiChats"),"."),(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("inlineCode",{parentName:"li"},"push")," method used to add a chat, optionally with a custom ID."),(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("inlineCode",{parentName:"li"},"pop")," method used to remove a chat, optionally via its ID."),(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("inlineCode",{parentName:"li"},"clear")," method used to remove all chats.")),(0,n.yg)("h5",null,"AIChatLogger component"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"<AIChatLogger />")," component handles rendering the chats it is passed via props. It handles how chats enter and leave the UI."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},`const { aiChats } = useAIChatLogger();
return <AIChatLogger aiChats={aiChats} />;
`)),(0,n.yg)("h5",null,"Adding and removing a chat"),(0,n.yg)("p",null,"You can push or pop a chat based on an action or event. In this example it's based on a button click:"),(0,n.yg)(eM,{scope:{AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,AIChatMessageLoading:L,Button:g.$n,ButtonGroup:_.e,useAIChatLogger:R,AIChatLogger:k,Stack:Y.B,uid:s.Ld},language:"jsx",noInline:!0,mdxType:"LivePreview"},es),(0,n.yg)("h2",null,"Composition Notes"),(0,n.yg)("p",null,"Keep any generated responses from the AI contained in the ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageBody")," component. Each chat message should only have one ",(0,n.yg)("inlineCode",{parentName:"p"},"AIChatMessageBody")," component."),(0,n.yg)("h3",null,"Error States"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},`Don’t accumulate error states in one screen, just display one error at a time, starting with the most critical one, until the user recovers.`),(0,n.yg)("li",{parentName:"ul"},"Check content guidelines for ",(0,n.yg)("a",{parentName:"li",href:"/patterns/error-state#recommended-phrasings-and-templates"},"error states"),"."),(0,n.yg)("li",{parentName:"ul"},"Include another way for users to contact support if the error persists.")),(0,n.yg)("h4",null,"Message content error"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"An error generating or regenerating a response")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Use a Callout to show an inline error."),(0,n.yg)("li",{parentName:"ul"},"The Callout should replace the body message if no response was generated, or appear between the ",(0,n.yg)("inlineCode",{parentName:"li"},"AIChatMessageBody")," and the ",(0,n.yg)("inlineCode",{parentName:"li"},"AIChatMessageActionGroup")," if the response is incomplete."),(0,n.yg)("li",{parentName:"ul"},"Include an in-chat action to recover (For example: regenerate or try again)"),(0,n.yg)("li",{parentName:"ul"},"Include a way for users to contact support if the error persists.")),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,AIChatMessageActionCard:E,AIChatMessageActionGroup:v,Anchor:y.Mz,Box:r.az,Button:g.$n,Callout:j.Pq,CalloutHeading:j.v,CalloutText:j.wz,ChatComposerContainer:V.aC,ChatComposer:V.V4,ChatComposerActionGroup:V.i$,ClearEditorPlugin:Q.Qf,RefreshIcon:O.RefreshIcon,AttachIcon:X.AttachIcon,SendIcon:q.SendIcon},language:"jsx",noInline:!0,mdxType:"LivePreview"},el),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"An error when clicking on an Action that generates an AI response")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The Callout is placed under the response and action"),(0,n.yg)("li",{parentName:"ul"},"Include another way for users to contact support if the error persists.")),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,AIChatMessageActionCard:E,AIChatMessageActionGroup:v,Anchor:y.Mz,Box:r.az,Button:g.$n,ButtonGroup:_.e,Callout:j.Pq,CalloutHeading:j.v,CalloutText:j.wz,ChatComposerContainer:V.aC,ChatComposer:V.V4,ChatComposerActionGroup:V.i$,ClearEditorPlugin:Q.Qf,AttachIcon:X.AttachIcon,SendIcon:q.SendIcon},language:"jsx",noInline:!0,mdxType:"LivePreview"},eh),(0,n.yg)("h4",null,"AI Chat Message Action Group Error"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"An error when clicking actions on AI messages (clicking buttons, links)")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Use Help text error variant  for actions not directly tied to generating a response or continuing the conversation, such as copying text or rating a response.")),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,AIChatMessageActionCard:E,AIChatMessageActionGroup:v,Box:r.az,Button:g.$n,ThumbsDownIcon:W.ThumbsDownIcon,ThumbsUpIcon:$.ThumbsUpIcon,RefreshIcon:O.RefreshIcon,AttachIcon:X.AttachIcon,SendIcon:q.SendIcon,CopyIcon:H.CopyIcon,Callout:j.Pq,CalloutHeading:j.v,CalloutText:j.wz,ChatComposerContainer:V.aC,ChatComposer:V.V4,ChatComposerActionGroup:V.i$,ClearEditorPlugin:Q.Qf,SummaryDetail:Z.Io,SummaryDetailContent:Z.RP,SummaryDetailHeading:Z.Er,SummaryDetailHeadingContent:Z.hM,SummaryDetailToggleButton:Z.y9,HelpText:D.$,Text:em.EY},language:"jsx",noInline:!0,mdxType:"LivePreview"},eg),(0,n.yg)("h4",null,"Sending errors"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"An error sending a message")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The error is placed in the Message Action Card"),(0,n.yg)("li",{parentName:"ul"},"Include an action to recover")),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,AIChatMessageActionCard:E,AIChatMessageActionGroup:v,Box:r.az,Button:g.$n,ButtonGroup:_.e,ThumbsDownIcon:W.ThumbsDownIcon,ThumbsUpIcon:$.ThumbsUpIcon,RepeatIcon:K.RepeatIcon,AttachIcon:X.AttachIcon,SendIcon:q.SendIcon,Callout:j.Pq,CalloutHeading:j.v,CalloutText:j.wz,ChatComposerContainer:V.aC,ChatComposer:V.V4,ChatComposerActionGroup:V.i$,ClearEditorPlugin:Q.Qf,HelpText:D.$,Text:em.EY},language:"jsx",noInline:!0,mdxType:"LivePreview"},ed),(0,n.yg)("h4",null,"System errors"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Chat History Errors, Timeouts, Network errors...etc.")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"An Alert will be placed above the Chat Composer"),(0,n.yg)("li",{parentName:"ul"},"The Alert will be dismissed once the user refreshes the page or when the error is resolved")),(0,n.yg)(eM,{scope:{AIChatLog:z,AIChatMessage:M,AIChatMessageAuthor:T,AIChatMessageBody:x,AIChatMessageActionCard:E,AIChatMessageActionGroup:v,Box:r.az,Button:g.$n,ThumbsDownIcon:W.ThumbsDownIcon,ThumbsUpIcon:$.ThumbsUpIcon,RefreshIcon:O.RefreshIcon,AttachIcon:X.AttachIcon,SendIcon:q.SendIcon,CopyIcon:H.CopyIcon,Alert:eC.F,ChatComposerContainer:V.aC,ChatComposer:V.V4,ChatComposerActionGroup:V.i$,ClearEditorPlugin:Q.Qf,SummaryDetail:Z.Io,SummaryDetailContent:Z.RP,SummaryDetailHeading:Z.Er,SummaryDetailHeadingContent:Z.hM,SummaryDetailToggleButton:Z.y9,HelpText:D.$,Text:em.EY},language:"jsx",noInline:!0,mdxType:"LivePreview"},ec))}eb.isMDXComponent=!0},82520:(e,a,t)=>{"use strict";t.r(a),t.d(a,{ArtificialIntelligenceIcon:()=>s});var o=t(36669),n=t(55729),r=t(96316);let s=n.forwardRef(({as:e,display:a,element:t="ICON",size:s,color:i,title:l,decorative:h},g)=>{let d=`ArtificialIntelligenceIcon-${(0,o.GV)()}`;if(!h&&null==l)throw Error("[ArtificialIntelligenceIcon]: Missing a title for non-decorative icon.");return n.createElement(r.IconWrapper,{as:e,display:a,element:t,size:s,color:i,ref:g},n.createElement("svg",{role:"img","aria-hidden":h,width:"100%",height:"100%",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20","aria-labelledby":d},l?n.createElement("title",{id:d},l):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M13.699 2.447c-.01 2.674-1.297 3.917-3.962 3.955-.595.008-.588.899.007.898 2.735-.004 3.928 1.287 3.955 3.957.005.58.868.598.897.017.135-2.699 1.396-3.984 3.953-3.974.594.002.605-.885.012-.898-2.739-.062-3.974-1.345-3.964-3.951.002-.599-.896-.602-.898-.004zm.444 2.432l.06.131c.394.81 1.015 1.41 1.864 1.794l.105.045-.035.016c-.837.387-1.463 1.015-1.873 1.872l-.078.17-.017-.044c-.37-.89-.98-1.547-1.838-1.958l-.155-.07c.837-.37 1.46-.95 1.866-1.743l.101-.213z"}),n.createElement("path",{fill:"currentColor",d:"M4.5 10.132a5.87 5.87 0 015.871-5.868.5.5 0 100-1A6.87 6.87 0 003.5 10.132a6.87 6.87 0 004.417 6.417.5.5 0 00.357-.934A5.87 5.87 0 014.5 10.132zm8.368 5.358a.5.5 0 01.202.96 6.851 6.851 0 01-2.67.55h-.029a.5.5 0 110-1h.024a5.85 5.85 0 002.282-.47.499.499 0 01.191-.04zm3.657-3.628a.5.5 0 01.297.642 6.863 6.863 0 01-1.187 2.043.5.5 0 01-.766-.643 5.86 5.86 0 001.014-1.745.5.5 0 01.642-.297z"})))});s.displayName="ArtificialIntelligenceIcon"},93548:(e,a,t)=>{"use strict";t.r(a),t.d(a,{LogoTwilioIcon:()=>s});var o=t(36669),n=t(55729),r=t(96316);let s=n.forwardRef(({as:e,display:a,element:t="ICON",size:s,color:i,title:l,decorative:h},g)=>{let d=`LogoTwilioIcon-${(0,o.GV)()}`;if(!h&&null==l)throw Error("[LogoTwilioIcon]: Missing a title for non-decorative icon.");return n.createElement(r.IconWrapper,{as:e,display:a,element:t,size:s,color:i,ref:g},n.createElement("svg",{role:"img","aria-hidden":h,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":d},l?n.createElement("title",{id:d},l):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10A10 10 0 0010 0zm0 17.333a7.333 7.333 0 110-14.666 7.333 7.333 0 010 14.666zm4.533-9.8a2.067 2.067 0 11-2.066-2.066 2.08 2.08 0 012.066 2.066zm0 4.934a2.067 2.067 0 11-2.066-2.067 2.08 2.08 0 012.066 2.067zm-4.933 0A2.067 2.067 0 117.533 10.4 2.08 2.08 0 019.6 12.467zm0-4.934a2.067 2.067 0 11-2.067-2.066A2.08 2.08 0 019.6 7.533z"})))});s.displayName="LogoTwilioIcon"},95583:(e,a,t)=>{"use strict";t.r(a),t.d(a,{StopIcon:()=>s});var o=t(36669),n=t(55729),r=t(96316);let s=n.forwardRef(({as:e,display:a,element:t="ICON",size:s,color:i,title:l,decorative:h},g)=>{let d=`StopIcon-${(0,o.GV)()}`;if(!h&&null==l)throw Error("[StopIcon]: Missing a title for non-decorative icon.");return n.createElement(r.IconWrapper,{as:e,display:a,element:t,size:s,color:i,ref:g},n.createElement("svg",{role:"img","aria-hidden":h,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 20 20","aria-labelledby":d},l?n.createElement("title",{id:d},l):null,n.createElement("path",{fill:"currentColor",d:"M14.5 4.5h-9a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1z"})))});s.displayName="StopIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,4987,636,6593,8792],()=>e(e.s=38164)),_N_E=e.O()}]);