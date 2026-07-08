(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2136],{40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>h});var n=t(72387),l=t(76127),o=t(95669),i=t.n(o),r=t(81278);t(55729);var s=t(10511),d=t(43084),c=t(10732),g=t(62887),p=t(63437),m=t(38992);let u={h1:()=>null},h=({children:e,meta:a,navigationData:t,data:o,mdxHeadings:h,pageHeaderData:{categoryRoute:y,githubUrl:f,storybookUrl:D}})=>{let A=a.title?`${a.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,v=a.description||m.DZ.DESCRIPTION,O=(0,r.useRouter)();return(0,n.FD)(p.T,{navigationData:t,children:[(0,n.FD)(i(),{children:[(0,n.Y)("title",{children:A}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${O.pathname}`}),(0,n.Y)("meta",{name:"description",content:v},"description")]}),(0,n.FD)(s.s,{children:[(0,n.Y)(g.c,{categoryRoute:y,githubUrl:f,storybookUrl:D,data:o}),(0,n.FD)(l.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(c.i,{data:h}),(0,n.Y)(l.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(d.Q,{componentOverrides:a.package?u:{},children:e})})]})]})]})}},56184:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert-dialog",function(){return t(82051)}])},82051:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>u,default:()=>O,getStaticProps:()=>y,mdxHeadings:()=>f,meta:()=>h}),t(55729);var n=t(11885),l=t(36669),o=t(89225),i=t(95036),r=t(60798),s=t(88017),d=t(50010);let c=`
const AlertDialogTrigger = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open alert dialog
      </Button>
      <AlertDialog
        heading="Submit application"
        isOpen={isOpen}
        onConfirm={handleClose}
        onConfirmLabel="Submit"
        onDismiss={handleClose}
        onDismissLabel="Cancel"
      >
        Are you sure you want to submit this application? No information can be changed after submitting.
      </AlertDialog>
    </div>
  );
};

render(
  <AlertDialogTrigger />
)
`.trim(),g=`
const AlertDialogTrigger = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button variant="destructive" onClick={handleOpen}>
        Delete user data
      </Button>
      <AlertDialog
        heading="Delete data"
        isOpen={isOpen}
        destructive
        onConfirm={handleClose}
        onConfirmLabel="Delete"
        onDismiss={handleClose}
        onDismissLabel="Cancel"
      >
      Are you sure you want to delete this data? This action cannot be undone.
      </AlertDialog>
    </div>
  );
};

render(
  <AlertDialogTrigger />
)
`.trim(),p=`
const AlertDialogTrigger = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = React.useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleAlertDialogOpen = () => setIsAlertDialogOpen(true);
  const handleAlertDialogClose = () => setIsAlertDialogOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleModalOpen}>
        Open modal
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isModalOpen} onDismiss={handleModalClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Open alert dialog
          </Heading>
          <Paragraph>Click the submit button to open the alert dialog.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAlertDialogOpen}>
              Submit
            </Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
      <AlertDialog
        heading="Submit application"
        isOpen={isAlertDialogOpen}
        onConfirm={handleAlertDialogClose}
        onConfirmLabel="Submit"
        onDismiss={handleAlertDialogClose}
        onDismissLabel="Cancel"
      >
        Are you sure you want to submit this application? No information can be changed after submitting.
      </AlertDialog>
    </div>
  );
};

render(
  <AlertDialogTrigger />
)
`.trim();var m=t(40615),u=!0;let h={title:"Alert Dialog - Components",package:"@twilio-paste/alert-dialog",description:"An alert dialog displays content over the main page and blocks any interaction with the page.",slug:"/components/alert-dialog/"},y=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:f,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/alert-dialog",storybookUrl:"/?path=/story/components-alert-dialog--alert-dialog-with-two-actions-story"}}}),f=[{value:"Guidelines",depth:2},{value:"About Alert Dialog",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Default Alert Dialog",depth:3},{value:"Destructive Alert Dialog",depth:3},{value:"Opening an Alert Dialog from a Modal",depth:3}],D=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},A={meta:h,getStaticProps:y,mdxHeadings:f},v=m.A;function O({components:e,...a}){return(0,n.yg)(v,{...A,...a,components:e,mdxType:"MDXLayout"},(0,n.yg)(D,{scope:{AlertDialog:o.L,Button:i.$n},noInline:!0,mdxType:"LivePreview"},c),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About Alert Dialog"),(0,n.yg)("p",null,"The Alert Dialog should be used to interrupt a user flow until a specific action is taken. It is used to convey important messages that can't be ignored like ",(0,n.yg)("a",{parentName:"p",href:"/components/alert"},"Alerts")," and ",(0,n.yg)("a",{parentName:"p",href:"/patterns/delete"},"confirmation messages for deletions"),". Potential use cases for an Alert Dialog are:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Confirming a permanent change, like ",(0,n.yg)("a",{parentName:"li",href:"/patterns/delete"},"deleting data")),(0,n.yg)("li",{parentName:"ul"},"Relaying an important system message like a maintenance downtime window")),(0,n.yg)("p",null,"Though visually similar to a ",(0,n.yg)("a",{parentName:"p",href:"/components/modal"},"Modal"),", an Alert Dialog requires the user to acknowledge the information in the dialog before they can interact with outside content."),(0,n.yg)("p",null,"Avoid using Alert Dialogs for error messages. Since the Alert Dialog blocks interaction with the underlying page, the user loses access to the information contained in the message when they go to fix the error. Instead, refer to the error message pattern for ",(0,n.yg)("a",{parentName:"p",href:"/patterns/error-state#when-to-use-which-component"},"additional guidance on components"),"."),(0,n.yg)("p",null,"When the Alert Dialog opens, focus moves to an element contained in it (by default, the first element that can be focused), and the focus should stay in and cycle through the Alert Dialog's content. Focus shouldn't return to the underlying page until the user closes the Alert Dialog. This can happen in any of the following ways:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Presses a "Cancel" button in the Alert Dialog footer'),(0,n.yg)("li",{parentName:"ul"},'Presses a "Submit" or "Confirm" button in the Alert Dialog footer')),(0,n.yg)("h3",null,"Accessibility"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},`All elements required to interact with the Alert Dialog, including closing or acknowledging it, are contained in the
Alert Dialog since they trap focus, and users can't interact with the underlying page.`),(0,n.yg)("li",{parentName:"ul"},"Tabbing through an Alert Dialog will cycle through its content in the same way it does on a page."),(0,n.yg)("li",{parentName:"ul"},"The element that serves as the Alert Dialog container has a role of ",(0,n.yg)("inlineCode",{parentName:"li"},"alertdialog"),"."),(0,n.yg)("li",{parentName:"ul"},"The Alert Dialog is labelled by the ",(0,n.yg)("inlineCode",{parentName:"li"},"heading")," prop.")),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Default Alert Dialog"),(0,n.yg)(D,{scope:{AlertDialog:o.L,Button:i.$n},noInline:!0,mdxType:"LivePreview"},c),(0,n.yg)("h3",null,"Destructive Alert Dialog"),(0,n.yg)(D,{scope:{AlertDialog:o.L,Button:i.$n},noInline:!0,mdxType:"LivePreview"},g),(0,n.yg)("h3",null,"Opening an Alert Dialog from a Modal"),(0,n.yg)(D,{scope:{useUID:l.GV,AlertDialog:o.L,Button:i.$n,Heading:r.D,Modal:s.aF,ModalBody:s.cw,ModalFooter:s.jl,ModalFooterActions:s.ox,ModalHeader:s.rQ,ModalHeading:s.EZ,Paragraph:d.f},noInline:!0,mdxType:"LivePreview"},p))}O.isMDXComponent=!0},88017:(e,a,t)=>{"use strict";t.d(a,{EZ:()=>A,Vn:()=>y,aF:()=>f,cw:()=>v,eL:()=>h,jl:()=>O,ox:()=>b,rQ:()=>D});var n=t(58001),l=t(76127),o=t(86110),i=t(27717),r=t(25630),s=t(55729),d=t(95036),c=t(71853),g=t(40123),p=t(69277),m=t(60798),u=s.createContext(null),h=(0,n.CS)((0,i.I4)(o.j)((0,i.AH)({position:"fixed",top:0,right:0,bottom:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",backgroundColor:"colorBackgroundOverlay",zIndex:"zIndex80"}),r.$,l.mP)),y=(0,n.CS)((0,i.I4)(o.S)(({size:e})=>(0,i.AH)({width:"100%",maxWidth:"wide"===e?"size80":"size60",maxHeight:"90%",minHeight:"170px",backgroundColor:"colorBackgroundBody",borderRadius:"borderRadius30",boxShadow:"shadowElevationTop20",display:"flex",flexDirection:"column"}))),f=s.forwardRef(({children:e,element:a="MODAL",isOpen:t,onDismiss:o,allowPinchZoom:i=!0,initialFocusRef:r,ariaLabelledby:d,size:c,...g},p)=>{let m=(0,n.pn)(t,{from:{opacity:0,transform:"scale(0.675)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.675)"},config:{mass:.5,tension:370,friction:26}});return s.createElement(u.Provider,{value:{onDismiss:o}},m((t,n)=>n&&s.createElement(h,{onDismiss:o,allowPinchZoom:i,initialFocusRef:r,style:{opacity:t.opacity},"data-paste-element":`${a}_OVERLAY`,variant:c},s.createElement(l.az,{as:y,"aria-labelledby":d,...(0,l.x8)(g),element:a,ref:p,style:t,size:c,variant:c},e))))});f.displayName="Modal";var D=s.forwardRef(({children:e,element:a="MODAL_HEADER",i18nDismissLabel:t="Close modal",...n},o)=>{let{onDismiss:i}=(()=>{let e=s.useContext(u);if(!e)throw Error("useModalContext must be used with ModalContextProvider");return e})();return s.createElement(l.az,{...(0,l.x8)(n),as:"div",element:a,ref:o,padding:"space90",flexShrink:0},s.createElement(c.s,{hAlignContent:"between"},s.createElement(c.s,{vAlignContent:"center",grow:1,marginRight:"space70"},e),s.createElement(d.$n,{element:`${a}_CLOSE_BUTTON`,variant:"secondary_icon",size:"reset",onClick:()=>i()},s.createElement(g.CloseIcon,{element:`${a}_CLOSE_ICON`,decorative:!0,size:"sizeIcon60"}),s.createElement(p.E,null,t))))});D.displayName="ModalHeader";var A=s.forwardRef(({children:e,as:a="h2",element:t="MODAL_HEADING",...n},l)=>s.createElement(m.D,{...n,as:a,element:t,marginBottom:"space0",variant:"heading30",ref:l},e));A.displayName="ModalHeading";var v=s.forwardRef(({children:e,element:a="MODAL_BODY",...t},n)=>s.createElement(l.az,{...(0,l.x8)(t),overflowY:"auto",paddingX:"space90",paddingY:"space10",as:"div",element:a,ref:n},e));v.displayName="ModalBody";var O=s.forwardRef(({children:e,element:a="MODAL_FOOTER",...t},n)=>s.createElement(l.az,{...(0,l.x8)(t),flexShrink:0,display:"flex",padding:"space90",as:"div",element:a,ref:n},e));O.displayName="ModalFooter";var b=s.forwardRef(({children:e,element:a="MODAL_FOOTER_ACTIONS",justify:t,...n},o)=>{let i=s.Children.count(e);return s.createElement(l.az,{...(0,l.x8)(n),display:"flex",justifyContent:"start"===t?"flex-start":"flex-end",flexShrink:"start"===t?null:0,flexWrap:"wrap",flexGrow:1,element:a,alignItems:"center",ref:o},s.Children.map(e,(e,t)=>s.createElement(l.az,{marginRight:i!==t+1?"space50":null,element:`${a}_ITEM`},e)))});b.displayName="ModalFooterActions"},89225:(e,a,t)=>{"use strict";t.d(a,{L:()=>y});var n=t(58001),l=t(76127),o=t(88017),i=t(36669),r=t(55729),s=t(27717),d=t(95036),c=t(84498),g=t(60798),p=r.forwardRef(({bodyID:e,children:a,element:t="ALERT_DIALOG_BODY",...n},o)=>r.createElement(l.az,{...(0,l.x8)(n),as:"div",overflowY:"auto",padding:"space90",paddingTop:"space0",element:t,id:e,ref:o},a));p.displayName="AlertDialogBody";var m=(0,s.I4)(o.Vn)(()=>(0,s.AH)({maxWidth:"size40"}));m.displayName="AlertDialogContent";var u=r.forwardRef(({destructive:e,element:a="ALERT_DIALOG_FOOTER",onConfirm:t,onConfirmLabel:n,onDismiss:o,onDismissLabel:i,onConfirmDisabled:s,isConfirmDisabled:g=s||!1,...p},m)=>r.createElement(l.az,{...(0,l.x8)(p),as:"div",flexShrink:0,display:"flex",padding:"space90",paddingTop:"space0",border:"none",element:a,justifyContent:"flex-end",ref:m},r.createElement(c.B,{orientation:"horizontal",spacing:"space50"},r.createElement(d.$n,{variant:"secondary",onClick:o},i),r.createElement(d.$n,{variant:e?"destructive":"primary",onClick:t,disabled:e&&(g||s)},n))));u.displayName="AlertDialogFooter";var h=r.forwardRef(({children:e,element:a="ALERT_DIALOG_HEADER",headingID:t,...n},o)=>r.createElement(l.az,{...(0,l.x8)(n),as:"div",padding:"space90",flexShrink:0,border:"none",element:`${a}_WRAPPER`,ref:o},r.createElement(g.D,{as:"h3",element:a,marginBottom:"space0",variant:"heading30",id:t},e)));h.displayName="AlertDialogHeader";var y=r.forwardRef(({children:e,destructive:a,element:t="ALERT_DIALOG",heading:s,isOpen:d,onConfirm:c,onConfirmLabel:g,onDismiss:y,onDismissLabel:f,onConfirmDisabled:D,isConfirmDisabled:A,...v},O)=>{let b=(0,n.pn)(d,{from:{opacity:0,transform:"scale(0.675)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.675)"},config:{mass:.5,tension:370,friction:26}}),C=(0,i.GV)(),E=(0,i.GV)();return r.createElement(r.Fragment,null,b((n,i)=>i&&r.createElement(o.eL,{isOpen:d,style:{opacity:n.opacity}},r.createElement(l.az,{as:m,...(0,l.x8)(v),"aria-labelledby":C,"aria-describedby":E,element:t,ref:O,role:"alertdialog",style:n},r.createElement(h,{headingID:C,element:`${t}_HEADER`},s),r.createElement(p,{bodyID:E,element:`${t}_BODY`},e),r.createElement(u,{destructive:a,element:`${t}_FOOTER`,onDismiss:y,onDismissLabel:f,onConfirm:c,onConfirmLabel:g,isConfirmDisabled:A||D})))))});y.displayName="AlertDialog"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,6110,636,6593,8792],()=>e(e.s=56184)),_N_E=e.O()}]);