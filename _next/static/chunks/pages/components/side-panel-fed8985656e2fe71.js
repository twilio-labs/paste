(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1839],{40615:(e,a,n)=>{"use strict";n.d(a,{A:()=>g});var t=n(72387),i=n(76127),o=n(95669),l=n.n(o),d=n(81278);n(55729);var r=n(10511),s=n(43084),p=n(10732),c=n(62887),h=n(63437),u=n(38992);let P={h1:()=>null},g=({children:e,meta:a,navigationData:n,data:o,mdxHeadings:g,pageHeaderData:{categoryRoute:S,githubUrl:m,storybookUrl:y}})=>{let f=a.title?`${a.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,b=a.description||u.DZ.DESCRIPTION,v=(0,d.useRouter)();return(0,t.FD)(h.T,{navigationData:n,children:[(0,t.FD)(l(),{children:[(0,t.Y)("title",{children:f}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${v.pathname}`}),(0,t.Y)("meta",{name:"description",content:b},"description")]}),(0,t.FD)(r.s,{children:[(0,t.Y)(c.c,{categoryRoute:S,githubUrl:m,storybookUrl:y,data:o}),(0,t.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(p.i,{data:g}),(0,t.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(s.Q,{componentOverrides:a.package?P:{},children:e})})]})]})]})}},48820:(e,a,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/side-panel",function(){return n(85187)}])},85187:(e,a,n)=>{"use strict";n.r(a),n.d(a,{__N_SSG:()=>W,default:()=>X,getStaticProps:()=>L,mdxHeadings:()=>M,meta:()=>F});var t=n(55729),i=n(11885),o=n(4073),l=n(54652),d=n(58001),r=n(76127),s=n(86110),p=n(27717),c=n(25630),h=n(19950),u=n(95036),P=n(40123),g=n(36669),S=n(33359),m=t.createContext({}),y=(0,d.CS)((0,p.I4)(s.j)((0,p.AH)({backgroundColor:"colorBackgroundOverlay",position:"fixed",top:0,right:0,bottom:0,left:0,width:"100%",zIndex:"zIndex80"}),c.$,r.mP)),f=t.forwardRef((e,a)=>t.createElement(r.az,{...e,display:"flex",ref:a,position:"sticky",zIndex:"zIndex30",top:e.top,right:0,paddingRight:["space0","space40","space40"],width:["100%","size40","size40"],height:e.height,boxSizing:"content-box",backgroundColor:"colorBackgroundWeaker"}));f.displayName="StyledSidePanelWrapper";var b=(0,d.CS)(f),v={mass:.3,tension:288,friction:20},x=t.forwardRef(({label:e,element:a,sidePanelId:n,styles:i,isMobile:o,children:l,...d},p)=>{let c=t.useRef(null),u=(0,h.SV)(c,p),P=window.innerHeight,[g,S]=t.useState(0);return t.useEffect(()=>{let e=c?.current?.getBoundingClientRect();S(e?.y||0)},[]),t.createElement(r.az,{...(0,r.x8)(d),position:"absolute",role:"dialog",as:o?s.S:"div","aria-label":e,top:0,right:0,width:["100%","auto","auto"],height:"100%",element:a,id:n},t.createElement(b,{ref:u,element:`ANIMATED_${a}_WRAPPER`,style:i,height:["100%",P-g,P-g],top:[0,g,g],position:"relative",overflow:"hidden"},t.createElement(r.az,{display:"flex",flexDirection:"column",width:["100%","388px","388px"],position:"absolute",top:0,left:[0,12,12],bottom:0,borderBottomLeftRadius:["borderRadius0","borderRadius70","borderRadius70"],borderBottomRightRadius:["borderRadius0","borderRadius70","borderRadius70"],borderTopRightRadius:["borderRadius60","borderRadius70","borderRadius70"],borderTopLeftRadius:["borderRadius60","borderRadius70","borderRadius70"],boxShadow:"shadowElevation05",backgroundColor:"colorBackgroundBody",marginTop:["space100","space40","space40"],marginBottom:["space0","space40","space40"],paddingBottom:"space70",element:`INNER_${a}`},l)))});x.displayName="SidePanelContents";var C=t.forwardRef(({element:e="SIDE_PANEL",label:a,children:n,...i},o)=>{let l=(0,c.DP)(),{sidePanelId:r,isOpen:s}=t.useContext(m),[p,u]=t.useState(!0);t.useEffect(()=>{p&&u(!1)},[p]);let{breakpointIndex:P}=(0,h.lW)(),g=(0,d.pn)(s,{from:p?void 0:{opacity:0,width:"0px"},enter:{opacity:1,width:"400px"},leave:{opacity:0,width:"0px"},config:v}),S=(0,d.pn)(s,{from:p?void 0:{opacity:0,transform:"translateY(100%)"},enter:{opacity:1,transform:"translateY(0%)"},leave:{opacity:0,transform:"translateY(100%)"},config:v}),f=t.useMemo(()=>0===P?S:g,[P,g,S]);return t.createElement(t.Fragment,null,f((d,s)=>s&&(0===P?t.createElement(y,{theme:l,"data-paste-element":`${e}_OVERLAY`,style:{opacity:d.opacity}},t.createElement(x,{...i,element:e,sidePanelId:r,styles:d,label:a,isMobile:!0,ref:o},n)):t.createElement(x,{...i,element:e,sidePanelId:r,styles:d,label:a,isMobile:!1,ref:o},n))))});C.displayName="SidePanel";var w=t.forwardRef((e,a)=>t.createElement(r.az,{...e,as:"div",position:"relative",ref:a}));w.displayName="StyledContentWrapper";var B=(0,d.CS)(w),E=t.forwardRef(({element:e="SIDE_PANEL_PUSH_CONTENT_WRAPPER",children:a,...n},i)=>{let{isOpen:o}=t.useContext(m),l=(0,c.DP)(),{breakpointIndex:s}=(0,h.lW)(),p=(0,d.zh)({marginRight:o?l.sizes.size40:"0rem",config:{mass:.3,tension:288,friction:20}});return t.createElement(B,{...(0,r.x8)(n),ref:i,style:0===s?void 0:p,marginRight:["space0",l.sizes.size40],minWidth:"size0",element:e},a)});E.displayName="SidePanelPushContentWrapper";var I=({setIsOpen:e,i18nCloseSidePanelTitle:a,sidePanelId:n,isOpen:i,element:o})=>{let l=t.useRef(null);return t.useEffect(()=>{l.current?.focus({preventScroll:!0})},[]),t.createElement(u.$n,{variant:"secondary_icon",size:"reset",onClick:()=>{e(!1)},ref:l,"aria-controls":n,"aria-expanded":i,"aria-label":a,element:o},t.createElement(P.CloseIcon,{decorative:!1,title:a,size:"sizeIcon50"}))};I.displayName="SidePanelCloseButton";var N=t.forwardRef(({element:e="SIDE_PANEL_HEADER",children:a,...n},i)=>{let{sidePanelId:o,isOpen:l,setIsOpen:d,i18nCloseSidePanelTitle:s}=t.useContext(m);return t.createElement(r.az,{width:"100%",padding:"space70",display:"flex",columnGap:"space30",alignItems:"flex-start",justifyContent:"space-between",...(0,r.x8)(n),ref:i,element:e},a,t.createElement(I,{setIsOpen:d,i18nCloseSidePanelTitle:s,sidePanelId:o,isOpen:l,element:`${e}_CLOSE_BUTTON`}))});N.displayName="SidePanelHeader",t.forwardRef(({element:e="SIDE_PANEL_HEADER_ACTIONS",children:a,...n},i)=>t.createElement(r.az,{flexGrow:1,display:"flex",justifyContent:"flex-end",columnGap:"space20",...(0,r.x8)(n),ref:i,element:e},a)).displayName="SidePanelHeaderActions";var R=p.I4.div(({theme:e})=>{let{colorBackgroundBody:a,colorBackgroundElevation:n,colorBackgroundStrongElevation:t}=e.backgroundColors;return(0,p.AH)({"::-webkit-scrollbar":{width:"6px"},"::-webkit-scrollbar-track":{marginTop:"8px",marginBottom:"8px",background:a,borderRadius:"10px"},"::-webkit-scrollbar-thumb":{background:n,borderRadius:"10px"},"::-webkit-scrollbar-thumb:hover":{background:t}})}),T=t.forwardRef(({element:e="SIDE_PANEL_BODY",children:a,...n},i)=>t.createElement(r.az,{...(0,r.x8)(n),as:R,width:"100%",height:"100%",paddingLeft:"space70",paddingRight:"18px",display:"flex",ref:i,element:e,overflowY:"scroll"},a));T.displayName="SidePanelBody";var z=t.forwardRef(({element:e="SIDE_PANEL_CONTAINER",children:a,sidePanelId:n,isOpen:i,setIsOpen:o,i18nCloseSidePanelTitle:l="close the side panel",i18nOpenSidePanelTitle:d="open the side panel",...s},p)=>(void 0===n&&(n=(0,g.GV)()),t.createElement(m.Provider,{value:{sidePanelId:n,isOpen:i,setIsOpen:o,i18nCloseSidePanelTitle:l,i18nOpenSidePanelTitle:d}},t.createElement(r.az,{...(0,r.x8)(s),position:"relative",ref:p,element:e},a))));z.displayName="SidePanelContainer";var O=t.forwardRef(({children:e,element:a="SIDE_PANEL_BUTTON",...n},i)=>{let{i18nCloseSidePanelTitle:o,i18nOpenSidePanelTitle:l,isOpen:d,setIsOpen:r,sidePanelId:s}=t.useContext(m);return t.createElement(u.$n,{element:a,"aria-label":d?o:l,onClick:()=>r(!d),"aria-expanded":d,"aria-controls":s,...n,ref:i},e)});O.displayName="SidePanelButton";var H=t.forwardRef(function({children:e,...a},n){return t.createElement(S.Ex,{...a,as:"button",ref:n},e)});H.displayName="ButtonBadge",t.forwardRef(({children:e,element:a="SIDE_PANEL_BADGE",...n},i)=>{let{i18nCloseSidePanelTitle:o,i18nOpenSidePanelTitle:l,isOpen:d,setIsOpen:r,sidePanelId:s}=t.useContext(m);return t.createElement(H,{...n,as:"button",element:a,"aria-label":d?o:l,onClick:()=>r(!d),"aria-expanded":d,"aria-controls":s,ref:i},e)}).displayName="SidePanelBadgeButton",t.forwardRef(({element:e="SIDE_PANEL_FOOTER",variant:a="default",children:n,justifyContent:i="flex-start",...o},l)=>t.createElement(r.az,{width:"100%",paddingX:"chat"===a?"space50":"space70",paddingBottom:"space50",paddingTop:"chat"===a?"space0":"space50",boxShadow:"chat"===a?"none":"shadowElevationTop05",marginBottom:"spaceNegative70",zIndex:"zIndex20",display:"flex",columnGap:"space40",rowGap:"space40",justifyContent:i,flexWrap:"wrap",...(0,r.x8)(o),ref:l,element:e},n)).displayName="SidePanelFooter";var k=({open:e=!1}={})=>{let[a,n]=t.useState(e);return{isOpen:a,setIsOpen:n}},_=n(60798),A=n(28019),D=n(40615),W=!0;let F={title:"Side Panel",package:"@twilio-paste/side-panel",description:"Side Panel is a container that pushes the main page content when open.",slug:"/components/side-panel/"},L=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:M,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/side-panel",storybookUrl:"/?path=/story/components-side-panel--default"}}}),M=[{value:"Guidelines",depth:2},{value:"About Side Panel",depth:3},{value:"Accessibility",depth:3},{value:"Side Panel vs. Side Modal",depth:3},{value:"Examples",depth:2},{value:"Basic Side Panel",depth:3},{value:"Side Panel with Footer",depth:3},{value:"Internationalization",depth:3},{value:"Using the state hook",depth:3},{value:"Composition notes",depth:2},{value:"Side Panel",depth:3},{value:"Side Panel Header",depth:4},{value:"Side Panel Header Actions",depth:5},{value:"Side Panel Body",depth:4},{value:"Side Panel Footer",depth:4},{value:"Side Panel Push Content Wrapper",depth:3},{value:"Side Panel Button (or Side Panel Badge Button)",depth:4}],U=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",a)},Y=U("StoryPreview"),G=U("LivePreview"),$={meta:F,getStaticProps:L,mdxHeadings:M},j=D.A;function X({components:e,...a}){return(0,i.yg)(j,{...$,...a,components:e,mdxType:"MDXLayout"},(0,i.yg)(Y,{title:"Basic Side Panel example",storyID:"components-side-panel--basic",height:"500px",code:`
export const SidePanelExample = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const sidePanelId = useUID();
  return (
    <SidePanelContainer id={sidePanelId} isOpen={isOpen} setIsOpen={setIsOpen}>
      <SidePanel>
        <SidePanelHeader>
          <ArtificialIntelligenceIcon decorative size="sizeIcon50" color="colorTextIcon" />
          <Heading as="h3" variant="heading30" marginBottom="space0">
            Assistant
          </Heading>
          <SidePanelHeaderActions>
            <Button variant="secondary_icon" size="reset" onClick={() => {}}>
              <MoreIcon decorative={false} title="open menu" size="sizeIcon50" />
            </Button>
          </SidePanelHeaderActions>
        </SidePanelHeader>
        <SidePanelBody>
          Side Panel content goes here.
        </SidePanelBody>
        <SidePanelFooter variant="chat">
          Footer content goes here.
        </SidePanelFooter>
      </SidePanel>
      <SidePanelPushContentWrapper>
        <Box paddingTop="space40" paddingLeft="space40" paddingRight="space40">
          <SidePanelButton variant="secondary">Toggle Side Panel</SidePanelButton>
        </Box>
      </SidePanelPushContentWrapper>
    </SidePanelContainer>
  )
}`,mdxType:"StoryPreview"}),(0,i.yg)("h2",null,"Guidelines"),(0,i.yg)("h3",null,"About Side Panel"),(0,i.yg)("p",null,"Side Panel is a container that pushes the main page content when open. It's important for page content to be responsive when using a Side Panel so that the opening and closing of the panel doesn't cause the page to jump or shift. At mobile breakpoints, the Side Panel overlays the page content and takes up the full width of the viewport."),(0,i.yg)("p",null,"Side Panel is primarily used within ",(0,i.yg)("a",{parentName:"p",href:"/experiences/artificial-intelligence"},"AI experiences")," and on pages using the ",(0,i.yg)("a",{parentName:"p",href:"/patterns/filter"},"filter pattern")," when there are too many filter options to display on the page."),(0,i.yg)(l.Pq,{variant:"warning",marginY:"space70",mdxType:"Callout"},(0,i.yg)(l.v,{as:"h4",mdxType:"CalloutHeading"},"Only use one Side Panel on a page"),(0,i.yg)(l.wz,{mdxType:"CalloutText"},"We currently only support having one Side Panel open on a page. If you have questions, please post"," ",(0,i.yg)(o.Mz,{href:"https://github.com/twilio-labs/paste/discussions",showExternal:!0,mdxType:"Anchor"},"a GitHub Discussion"),".")),(0,i.yg)("h3",null,"Accessibility"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"There must be an accessible aria label. Pass the descriptive label to ",(0,i.yg)("inlineCode",{parentName:"li"},"SidePanel")," using the ",(0,i.yg)("inlineCode",{parentName:"li"},"label")," prop."),(0,i.yg)("li",{parentName:"ul"},"The close button in the Side Panel Header as well as the Side Panel Button / Side Panel Badge Button all use ",(0,i.yg)("inlineCode",{parentName:"li"},"aria-controls")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"aria-expanded")," to indicate the connection to and the state of the Side Panel."),(0,i.yg)("li",{parentName:"ul"},"Focus is placed on the close button when the Side Panel is opened, but the Side Panel is not a focus trap. Users can tab through the Side Panel content and then tab out of the Side Panel to the main page content without closing the Side Panel.")),(0,i.yg)("h3",null,"Side Panel vs. Side Modal"),(0,i.yg)("p",null,"Side Panel and ",(0,i.yg)("a",{parentName:"p",href:"/components/side-modal"},"Side Modal")," are both used to display additional content on the side of the main page content. Side Panel is used for content that is not blocking and can be interacted with while the main page content is still visible. Side Panels are designed to remain open while the user completes other tasks in the main content of the page. Side Modals typically need to be closed before the user returns to their main task as the Modal overlays part of the page."),(0,i.yg)("p",null,"Side Modals are a focus trap and can't be tabbed out of, while the content of Side Panels can be tabbed through and then tabbed out of to return to the main page content."),(0,i.yg)("h2",null,"Examples"),(0,i.yg)("h3",null,"Basic Side Panel"),(0,i.yg)("p",null,"Pass the ",(0,i.yg)("inlineCode",{parentName:"p"},"isOpen")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"setIsOpen")," props to the ",(0,i.yg)("inlineCode",{parentName:"p"},"SidePanelContainer")," component to control the open and close state of the Side Panel."),(0,i.yg)(Y,{title:"Basic Side Panel example",storyID:"components-side-panel--basic",height:"500px",code:`
export const SidePanelExample = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const sidePanelId = useUID();
  return (
    <SidePanelContainer id={sidePanelId} isOpen={isOpen} setIsOpen={setIsOpen}>
      <SidePanel>
        <SidePanelHeader>
          <ArtificialIntelligenceIcon decorative size="sizeIcon50" color="colorTextIcon" />
          <Heading as="h3" variant="heading30" marginBottom="space0">
            Assistant
          </Heading>
          <SidePanelHeaderActions>
            <Button variant="secondary_icon" size="reset" onClick={() => {}}>
              <MoreIcon decorative={false} title="open menu" size="sizeIcon50" />
            </Button>
          </SidePanelHeaderActions>
        </SidePanelHeader>
        <SidePanelBody>
          Side Panel content goes here.
        </SidePanelBody>
        <SidePanelFooter variant="chat">
          Footer content goes here.
        </SidePanelFooter>
      </SidePanel>
      <SidePanelPushContentWrapper>
        <Box paddingTop="space40" paddingLeft="space40" paddingRight="space40">
          <SidePanelButton variant="secondary">Toggle Side Panel</SidePanelButton>
        </Box>
      </SidePanelPushContentWrapper>
    </SidePanelContainer>
  )
}`,mdxType:"StoryPreview"}),(0,i.yg)("h3",null,"Side Panel with Footer"),(0,i.yg)("p",null,"Use the ",(0,i.yg)("inlineCode",{parentName:"p"},"default")," variant of SidePanelFooter when you need to add actions to the bottom of the Side Panel. Use the ",(0,i.yg)("inlineCode",{parentName:"p"},"chat")," variant of Side Panel Footer for AI use cases."),(0,i.yg)(Y,{title:"Side Panel Footer example",storyID:"components-side-panel--filter",height:"500px",code:`
export const SidePanelExample = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const sidePanelId = useUID();
  return (
    <SidePanelContainer id={sidePanelId} isOpen={isOpen} setIsOpen={setIsOpen}>
      <SidePanel>
        <SidePanelHeader>
        <Heading as="h3" variant="heading30" marginBottom="space0">
          More filters
        </Heading>
      </SidePanelHeader>
        <Separator orientation="horizontal" verticalSpacing="space0" />
        <SidePanelBody>
          Side Panel content goes here.
        </SidePanelBody>
        <SidePanelFooter>
          Footer content goes here.
        </SidePanelFooter>
      </SidePanel>
      <SidePanelPushContentWrapper>
        <Box paddingTop="space40" paddingLeft="space40" paddingRight="space40">
          <SidePanelButton variant="secondary" size="rounded_small" pressed={isOpen}>
            More filters
            <Badge as="span" variant="neutral_counter">
              2
            </Badge>
          </SidePanelButton>
        </Box>
      </SidePanelPushContentWrapper>
    </SidePanelContainer>
  )
}`,mdxType:"StoryPreview"}),(0,i.yg)("h3",null,"Internationalization"),(0,i.yg)("p",null,"To internationalize Side Panel, simply pass different text as children to the Side Panel components. The only exceptions are the close button in the SidePanelHeader and the SidePanelButton/SidePanelBadgeButton. To change the buttons' accessible label text, use the ",(0,i.yg)("inlineCode",{parentName:"p"},"i18nCloseSidePanelTitle")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"i18nOpenSidePanel")," props on the ",(0,i.yg)("inlineCode",{parentName:"p"},"SidePanelContainer"),"."),(0,i.yg)(Y,{title:"Internationalized Side Panel example",storyID:"components-side-panel--i-18-n",height:"500px",code:`
export const SidePanelExample = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const sidePanelId = useUID();
  return (
    <SidePanelContainer id={sidePanelId} isOpen={isOpen} setIsOpen={setIsOpen} i18nCloseSidePanelTitle="cerrar panel lateral" i18nOpenSidePanelTitle="abrir panel lateral">
      <SidePanel label="el panel lateral">
        <SidePanelHeader>
          <Heading as="h5" variant="heading30" marginBottom="space0">T\xedtulo</Heading>
        </SidePanelHeader>
        <SidePanelBody>
          Side Panel content goes here.
        </SidePanelBody>
      </SidePanel>
      <SidePanelPushContentWrapper>
        <Box paddingTop="space40" paddingLeft="space40" paddingRight="space40">
          <SidePanelButton variant="primary">Probar Panel Lateral</SidePanelButton>
        </Box>
      </SidePanelPushContentWrapper>
    </SidePanelContainer>
  )
}`,mdxType:"StoryPreview"}),(0,i.yg)("h3",null,"Using the state hook"),(0,i.yg)("p",null,"Side Panel comes with the option of using a hook to manage the open and close state of the panel. The ",(0,i.yg)("inlineCode",{parentName:"p"},"useSidePanelState")," hook returns an object to spread onto SidePanelContainer. To change the default state of the Side Panel from closed to open, pass ",(0,i.yg)("inlineCode",{parentName:"p"},"open: true")," to the hook."),(0,i.yg)(G,{scope:{SidePanel:C,SidePanelContainer:z,SidePanelButton:O,useSidePanelState:k,SidePanelPushContentWrapper:E,SidePanelHeader:N,SidePanelBody:T,Heading:_.D,Separator:A.w},noInline:!0,height:"300px",mdxType:"LivePreview"},`const SidePanelExample = () => {
    const sidePanel = useSidePanelState({});
    return (
      <SidePanelContainer {...sidePanel}>
        <SidePanelPushContentWrapper>
          <SidePanelButton variant="primary">
            Toggle Side Panel
          </SidePanelButton>
        </SidePanelPushContentWrapper>
        <SidePanel>
          <SidePanelHeader>
            <Heading as="h3" variant="heading30" marginBottom="space0">
              Assistant
            </Heading>
          </SidePanelHeader>
          <Separator orientation="horizontal" verticalSpacing="space0" />
          <SidePanelBody>
            Side Panel content goes here.
          </SidePanelBody>
        </SidePanel>
      </SidePanelContainer>
    )
  }
  render(<SidePanelExample />)`),(0,i.yg)("h2",null,"Composition notes"),(0,i.yg)("p",null,"The Side Panel comes with some smaller components that can be used to compose a Side Panel to your application's needs. All of the following components should be used inside of a ",(0,i.yg)("inlineCode",{parentName:"p"},"SidePanelContainer"),", with ",(0,i.yg)("inlineCode",{parentName:"p"},"SidePanel")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"SidePanelPushContentWrapper")," being its direct children. The Side Panel Container controls the positioning of the Side Panel with relation to the page content."),(0,i.yg)("h3",null,"Side Panel"),(0,i.yg)("p",null,"The Side Panel contains all the various elements of the component."),(0,i.yg)("h4",null,"Side Panel Header"),(0,i.yg)("p",null,"The Side Panel Header is a container for the descriptive title of the panel and sometimes an associated icon, in addition to any action buttons used in the panel. It also contains the close button."),(0,i.yg)("h5",null,"Side Panel Header Actions"),(0,i.yg)("p",null,"The Side Panel Header Actions component is a container for action buttons that are used in the Side Panel Header. Common actions include a ",(0,i.yg)("inlineCode",{parentName:"p"},"MoreIcon")," for additional menu options."),(0,i.yg)("h4",null,"Side Panel Body"),(0,i.yg)("p",null,"The Side Panel Body is a container for the main content of the Side Panel. This is where the majority of the content will be placed."),(0,i.yg)("h4",null,"Side Panel Footer"),(0,i.yg)("p",null,"The Side Panel Footer is a container for the Side Panel's overall actions, such as a ",(0,i.yg)("a",{parentName:"p",href:"/components/chat-composer"},"Chat Composer")," or ",(0,i.yg)("a",{parentName:"p",href:"/components/button"},"Button(s)"),"."),(0,i.yg)("h3",null,"Side Panel Push Content Wrapper"),(0,i.yg)("p",null,"The Side Panel Push Content Wrapper is a container for the main page content that is pushed to the side when the Side Panel is open. This wrapper is used to control the positioning of the main page content when the Side Panel is open. Ensuring that the content of this component is fully responsive is important to prevent the page from jumping or shifting when the Side Panel is opened or closed."),(0,i.yg)("h4",null,"Side Panel Button (or Side Panel Badge Button)"),(0,i.yg)("p",null,"In order to ensure accessibility, use one of the buttons exported from the Side Panel package as the trigger for the Side Panel. The Side Panel Button is a button that opens the Side Panel when clicked."))}X.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,6110,636,6593,8792],()=>e(e.s=48820)),_N_E=e.O()}]);