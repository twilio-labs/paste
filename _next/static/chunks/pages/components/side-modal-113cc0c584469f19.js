(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2170],{24917:(e,a,o)=>{"use strict";o.r(a),o.d(a,{__N_SSG:()=>O,default:()=>G,getStaticProps:()=>R,mdxHeadings:()=>z,meta:()=>A});var t=o(55729),d=o(11885),i=o(4073),n=o(76127),l=o(95036),r=o(54652),s=o(50010),p=o(31079),c=o(87084),u=o(58001),m=o(51582),h=o(25630),g=o(40123),S=o(69277),M=o(60798),y=t.createContext({}),f=(0,u.CS)(n.az),v=t.forwardRef(({children:e,element:a="SIDE_MODAL",hideOnEsc:o=!0,...d},i)=>{let l=t.useContext(y),r=(0,u.pn)(l.visible,{from:{opacity:0,transform:"translateX(100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(100%)"},config:{mass:.5,tension:220,friction:20}});return t.createElement(m.AM,{...l,...(0,n.x8)(d),preventBodyScroll:!1,hideOnClickOutside:!1,hideOnEsc:o,element:`${a}_CONTAINER`,ref:i,as:n.az,zIndex:"zIndex80",position:"fixed",top:"0 !important",right:"0 !important",bottom:"0 !important",left:"auto !important",transform:"none !important",_focus:{outline:"none"}},t.createElement(h.pd,null,r((o,d)=>d&&t.createElement(f,{style:o,element:a,display:"grid",gridTemplateRows:"auto 1fr auto",height:"100vh",backgroundColor:"colorBackgroundWeaker",boxShadow:"shadowElevationLeft20",width:"size80"},e))))});v.displayName="SideModal";var B=t.forwardRef(({children:e,element:a="SIDE_MODAL_BUTTON",...o},d)=>{let i=t.useContext(y);return t.createElement(m.XU,{element:a,...i,...o,as:l.$n,ref:d},e)});B.displayName="SideModalButton";var x=t.forwardRef(({children:e,element:a="SIDE_MODAL_HEADER",i18nDismissLabel:o="close",...d},i)=>{let{hide:r}=t.useContext(y);return t.createElement(n.az,{...(0,n.x8)(d),ref:i,paddingRight:"space90",paddingLeft:"space90",paddingTop:"space90",element:a,display:"flex",flexDirection:"row",alignItems:"flex-start"},t.createElement(n.az,{display:"flex",flexGrow:1,marginRight:"space70"},e),t.createElement(l.$n,{element:`${a}_CLOSE_BUTTON`,variant:"secondary_icon",size:"reset",onClick:r},t.createElement(g.CloseIcon,{element:`${a}_CLOSE_ICON`,decorative:!0,size:"sizeIcon50"}),t.createElement(S.E,null,o)))});x.displayName="SideModalHeader";var b=t.forwardRef(({children:e,as:a="h2",element:o="SIDE_MODAL_HEADING",...d},i)=>t.createElement(M.D,{...d,as:a,element:o,marginBottom:"space0",variant:"heading30",ref:i},e));b.displayName="SideModalHeading";var w=({gutter:e,placement:a,modal:o,children:d,state:i,...n})=>{let l=i||(0,c.aH)({modal:!0,unstable_fixed:!0,...n});return t.createElement(y.Provider,{value:{...l}},d)};w.displayName="BaseSideModalContainer";var P=t.memo(w);P.displayName="SideModalContainer";var C=t.forwardRef(({children:e,element:a="SIDE_MODAL_BODY",...o},d)=>t.createElement(n.az,{...(0,n.x8)(o),element:a,ref:d,overflowY:"auto",padding:"space90"},e));C.displayName="SideModalBody";var E=t.forwardRef(({children:e,element:a="SIDE_MODAL_FOOTER",...o},d)=>t.createElement(n.az,{...(0,n.x8)(o),as:"div",element:a,ref:d,paddingRight:"space90",paddingLeft:"space90",paddingBottom:"space90",display:"flex"},e));E.displayName="SideModalFooter";var H=t.forwardRef(({children:e,element:a="SIDE_MODAL_FOOTER_ACTIONS",justifyContent:o="flex-start",...d},i)=>t.createElement(n.az,{...(0,n.x8)(d),display:"flex",justifyContent:o,flexWrap:"wrap",flexGrow:1,element:a,columnGap:"space50",alignItems:"center",ref:i},e));H.displayName="SideModalFooterActions";var N=e=>(0,c.aH)({modal:!0,unstable_fixed:!0,...e});let I=`
const SideModalExample = () => {
  return (
    <SideModalContainer>
      <SideModalButton variant="primary">
        Open dialog
      </SideModalButton>
      <SideModal aria-label="Basic Side Modal">
        <SideModalHeader>
          <SideModalHeading>
            Heading
          </SideModalHeading>
        </SideModalHeader>
        <SideModalBody>
          <Paragraph>
            A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
          </Paragraph>
          <Paragraph>
            You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
          </Paragraph>
        </SideModalBody>
      </SideModal>
    </SideModalContainer>
  );
};

render(
  <SideModalExample />
)
`.trim(),k=`
const SideModalFooterExample = () => {
  return (
    <SideModalContainer>
      <SideModalButton variant="primary">
        Open dialog
      </SideModalButton>
      <SideModal aria-label="Basic Side Modal">
        <SideModalHeader>
          <SideModalHeading>
            Heading
          </SideModalHeading>
        </SideModalHeader>
        <SideModalBody>
          <Paragraph>
            A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
          </Paragraph>
          <Paragraph>
            You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
          </Paragraph>
        </SideModalBody>
        <SideModalFooter>
          <SideModalFooterActions>
          <Button variant="primary">Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
          </SideModalFooterActions>
        </SideModalFooter>
      </SideModal>
    </SideModalContainer>
  );
};

render(
  <SideModalFooterExample />
)
`.trim(),T=`
const SideModalButtonExample = () => {
  return (
    <Box display="flex" flexDirection="row" columnGap="space70">
      <SideModalContainer>
        <SideModalButton variant="primary">
          Open dialog
        </SideModalButton>
        <SideModal aria-label="Basic Side Modal">
          <SideModalHeader>
            <SideModalHeading>
              Heading
            </SideModalHeading>
          </SideModalHeader>
          <SideModalBody>
            <Paragraph>
              A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
            </Paragraph>
            <Paragraph>
              You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
            </Paragraph>
          </SideModalBody>
        </SideModal>
      </SideModalContainer>
      <SideModalContainer>
        <SideModalButton variant="secondary_icon" size="icon_small">
          <PlusIcon decorative={false}  title="Open side modal" />
        </SideModalButton>
        <SideModal aria-label="Basic Side Modal">
          <SideModalHeader>
            <SideModalHeading>
              Heading
            </SideModalHeading>
          </SideModalHeader>
          <SideModalBody>
            <Paragraph>
              A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
            </Paragraph>
            <Paragraph>
              You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
            </Paragraph>
          </SideModalBody>
        </SideModal>
      </SideModalContainer>
      <SideModalContainer>
        <SideModalButton variant="reset" size="reset">
          Open dialog
        </SideModalButton>
        <SideModal aria-label="Basic Side Modal">
          <SideModalHeader>
            <SideModalHeading>
              Heading
            </SideModalHeading>
          </SideModalHeader>
          <SideModalBody>
            <Paragraph>
              A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
            </Paragraph>
            <Paragraph>
              You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
            </Paragraph>
          </SideModalBody>
        </SideModal>
      </SideModalContainer>
    </Box>
  );
};

render(
  <SideModalButtonExample />
)
`.trim(),_=`
const SideModalHookExample = () => {
  const dialog = useSideModalState({});
  return (
    <Box display="flex" flexDirection="column" rowGap="space70">
      <Box>
        <SideModalContainer state={dialog}>
          <SideModalButton variant="primary">
            Open dialog
          </SideModalButton>
          <SideModal aria-label="Basic Side Modal">
            <SideModalHeader>
              <SideModalHeading>
                Heading
              </SideModalHeading>
            </SideModalHeader>
            <SideModalBody>
              <Paragraph>
                A Modal is a dialog that appears over the main content and moves the system into a special mode requiring user interaction.
              </Paragraph>
              <Paragraph>
                You can compose a Modal content area to support your use case, but elements such as Paragraph and Form Input are commonly used. See examples for common Modal patterns and dos/don'ts.
              </Paragraph>
            </SideModalBody>
          </SideModal>
        </SideModalContainer>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.show()}>Open dialog</Button>
      </Box>
      <Box>
        <Button variant="primary" onClick={() => dialog.hide()}>Close dialog</Button>
      </Box>
    </Box>
  );
};

render(
  <SideModalHookExample />
)
`.trim();var D=o(40615),O=!0;let A={title:"Side Modal",package:"@twilio-paste/side-modal",description:"A Side Modal is a page overlay that displays information that does not block the user from interacting with the rest of the page.",slug:"/components/side-modal/"},R=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:z,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/side-modal",storybookUrl:"/?path=/story/components-side-modal--default"}}}),z=[{value:"Guidelines",depth:2},{value:"About Side Modal",depth:3},{value:"Accessibility",depth:3},{value:"Side Panel vs. Side Modal",depth:3},{value:"Examples",depth:2},{value:"Basic Side Modal",depth:3},{value:"Side Modal with a footer",depth:3},{value:"SideModalButton",depth:3},{value:"Using state hooks",depth:3}],F=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,d.yg)("div",e)},L={meta:A,getStaticProps:R,mdxHeadings:z},Y=D.A;function G({components:e,...a}){return(0,d.yg)(Y,{...L,...a,components:e,mdxType:"MDXLayout"},(0,d.yg)(F,{scope:{Paragraph:s.f,SideModal:v,SideModalBody:C,SideModalButton:B,SideModalContainer:P,SideModalHeader:x,SideModalHeading:b},noInline:!0,mdxType:"LivePreview"},I),(0,d.yg)("h2",null,"Guidelines"),(0,d.yg)("h3",null,"About Side Modal"),(0,d.yg)("p",null,"The Side Modal component is a non-modal dialog that sits on top of the right side of the page. It is meant for situations like a preview of a record while looking at a table."),(0,d.yg)(r.Pq,{variant:"warning",marginY:"space70",mdxType:"Callout"},(0,d.yg)(r.v,{as:"h4",mdxType:"CalloutHeading"},"Only use one Side Modal on a page"),(0,d.yg)(r.wz,{mdxType:"CalloutText"},"We currenly only support having one Side Modal open on a page. If you have questions, please post"," ",(0,d.yg)(i.Mz,{href:"https://github.com/twilio-labs/paste/discussions",showExternal:!0,mdxType:"Anchor"},"a GitHub Discussion"),".")),(0,d.yg)("h3",null,"Accessibility"),(0,d.yg)("p",null,"Side Modal and non-modal dialogs follow these accessibility guidelines:"),(0,d.yg)("ul",null,(0,d.yg)("li",{parentName:"ul"},"There must be a focusable element inside the dialog."),(0,d.yg)("li",{parentName:"ul"},"There should be a close button so screen readers have a specific close action to target."),(0,d.yg)("li",{parentName:"ul"},"A Side Modal is a focus trap, and focus is placed inside it when it's shown."),(0,d.yg)("li",{parentName:"ul"},"A Side Modal must be triggered by an explicit user action, e.g. clicking a button.")),(0,d.yg)("h3",null,"Side Panel vs. Side Modal"),(0,d.yg)("p",null,(0,d.yg)("a",{parentName:"p",href:"/components/side-panel"},"Side Panel")," and Side Modal are both used to display additional content on the side of the main page content. Side Panel is used for content that is not blocking and can be interacted with while the main page content is still visible. Side Panels are designed to remain open while the user completes other tasks in the main content of the page. Side Modals typically need to be closed before the user returns to their main task as the Modal overlays part of the page."),(0,d.yg)("p",null,"Side Modals are a focus trap and can't be tabbed out of, while the content of Side Panels can be tabbed through and then tabbed out of to return to the main page content."),(0,d.yg)("h2",null,"Examples"),(0,d.yg)("h3",null,"Basic Side Modal"),(0,d.yg)(F,{scope:{Paragraph:s.f,SideModal:v,SideModalBody:C,SideModalButton:B,SideModalContainer:P,SideModalHeader:x,SideModalHeading:b},noInline:!0,mdxType:"LivePreview"},I),(0,d.yg)("h3",null,"Side Modal with a footer"),(0,d.yg)("p",null,"The SideModalFooter component has a ",(0,d.yg)("inlineCode",{parentName:"p"},"justifyContent")," prop that lets you change how the actions are displayed within the footer. It can be set to ",(0,d.yg)("inlineCode",{parentName:"p"},"flex-start"),", ",(0,d.yg)("inlineCode",{parentName:"p"},"flex-end"),", or ",(0,d.yg)("inlineCode",{parentName:"p"},"space-between")," and the default is ",(0,d.yg)("inlineCode",{parentName:"p"},"flex-end"),"."),(0,d.yg)(F,{scope:{Button:l.$n,Paragraph:s.f,SideModal:v,SideModalBody:C,SideModalButton:B,SideModalContainer:P,SideModalFooter:E,SideModalFooterActions:H,SideModalHeader:x,SideModalHeading:b},noInline:!0,mdxType:"LivePreview"},k),(0,d.yg)("h3",null,"SideModalButton"),(0,d.yg)("p",null,"The SideModalButton renders a Button component and accepts all of its props, which are listed ",(0,d.yg)("a",{parentName:"p",href:"/components/button#props"},"on the Button page"),"."),(0,d.yg)(F,{scope:{Box:n.az,Paragraph:s.f,PlusIcon:p.PlusIcon,SideModal:v,SideModalBody:C,SideModalButton:B,SideModalContainer:P,SideModalHeader:x,SideModalHeading:b},noInline:!0,mdxType:"LivePreview"},T),(0,d.yg)("h3",null,"Using state hooks"),(0,d.yg)("p",null,`Side Modal comes with the option of "hooking" into the internal state by using the state hook originally provided by
`,(0,d.yg)("a",{parentName:"p",href:"https://reakit.io/docs/popover/#usepopoverstate"},"Reakit"),"."),(0,d.yg)("p",null,"Rather than the state be internal to the component, you can use the ",(0,d.yg)("inlineCode",{parentName:"p"},"useSideModalState"),` hook and pass the returned state
to `,(0,d.yg)("inlineCode",{parentName:"p"},"SideModalContainer")," as the ",(0,d.yg)("inlineCode",{parentName:"p"},"state")," prop."),(0,d.yg)("p",null,"This allows you to use certain returned props from the state hook, including functions like ",(0,d.yg)("inlineCode",{parentName:"p"},"hide")," and ",(0,d.yg)("inlineCode",{parentName:"p"},"show"),"."),(0,d.yg)("p",null,`It should be noted that when doing so, the state prop takes precedent over the other properties that affect
the state or initial state of the Side Modal. They will be ignored in favour of them being provided as arguments
to the `,(0,d.yg)("inlineCode",{parentName:"p"},"useSideModalState")," hook."),(0,d.yg)("p",null,`For full details on how to use the state hook, and what props to provide it, follow the
`,(0,d.yg)("a",{parentName:"p",href:"/primitives/non-modal-dialog-primitive"},"Non-Modal Dialog Primitive documentation"),"."),(0,d.yg)(F,{scope:{Box:n.az,Button:l.$n,Paragraph:s.f,SideModal:v,SideModalBody:C,SideModalButton:B,SideModalContainer:P,SideModalHeader:x,SideModalHeading:b,useSideModalState:N},noInline:!0,mdxType:"LivePreview"},_))}G.isMDXComponent=!0},31079:(e,a,o)=>{"use strict";o.r(a),o.d(a,{PlusIcon:()=>n});var t=o(36669),d=o(55729),i=o(96316);let n=d.forwardRef(({as:e,display:a,element:o="ICON",size:n,color:l,title:r,decorative:s},p)=>{let c=`PlusIcon-${(0,t.GV)()}`;if(!s&&null==r)throw Error("[PlusIcon]: Missing a title for non-decorative icon.");return d.createElement(i.IconWrapper,{as:e,display:a,element:o,size:n,color:l,ref:p},d.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},r?d.createElement("title",{id:c},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.043 9.043h-4.086V4.957a.958.958 0 00-1.914 0v4.086H4.957a.958.958 0 000 1.914h4.086v4.086a.958.958 0 001.914 0v-4.086h4.086a.958.958 0 000-1.914z"})))});n.displayName="PlusIcon"},40615:(e,a,o)=>{"use strict";o.d(a,{A:()=>g});var t=o(72387),d=o(76127),i=o(95669),n=o.n(i),l=o(81278);o(55729);var r=o(10511),s=o(43084),p=o(10732),c=o(62887),u=o(63437),m=o(38992);let h={h1:()=>null},g=({children:e,meta:a,navigationData:o,data:i,mdxHeadings:g,pageHeaderData:{categoryRoute:S,githubUrl:M,storybookUrl:y}})=>{let f=a.title?`${a.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,v=a.description||m.DZ.DESCRIPTION,B=(0,l.useRouter)();return(0,t.FD)(u.T,{navigationData:o,children:[(0,t.FD)(n(),{children:[(0,t.Y)("title",{children:f}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${B.pathname}`}),(0,t.Y)("meta",{name:"description",content:v},"description")]}),(0,t.FD)(r.s,{children:[(0,t.Y)(c.c,{categoryRoute:S,githubUrl:M,storybookUrl:y,data:i}),(0,t.FD)(d.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(p.i,{data:g}),(0,t.Y)(d.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(s.Q,{componentOverrides:a.package?h:{},children:e})})]})]})]})}},75176:(e,a,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/side-modal",function(){return o(24917)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=75176)),_N_E=e.O()}]);