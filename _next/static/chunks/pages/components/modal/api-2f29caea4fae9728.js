(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5751],{40615:(e,a,o)=>{"use strict";o.d(a,{A:()=>h});var t=o(72387),n=o(76127),l=o(95669),i=o.n(l),r=o(81278);o(55729);var d=o(10511),s=o(43084),p=o(10732),c=o(62887),u=o(63437),m=o(38992);let g={h1:()=>null},h=({children:e,meta:a,navigationData:o,data:l,mdxHeadings:h,pageHeaderData:{categoryRoute:y,githubUrl:M,storybookUrl:b}})=>{let D=a.title?`${a.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,v=a.description||m.DZ.DESCRIPTION,w=(0,r.useRouter)();return(0,t.FD)(u.T,{navigationData:o,children:[(0,t.FD)(i(),{children:[(0,t.Y)("title",{children:D}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${w.pathname}`}),(0,t.Y)("meta",{name:"description",content:v},"description")]}),(0,t.FD)(d.s,{children:[(0,t.Y)(c.c,{categoryRoute:y,githubUrl:M,storybookUrl:b,data:l}),(0,t.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(p.i,{data:h}),(0,t.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(s.Q,{componentOverrides:a.package?g:{},children:e})})]})]})]})}},46675:(e,a,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/modal/api",function(){return o(78066)}])},78066:(e,a,o)=>{"use strict";o.r(a),o.d(a,{__N_SSG:()=>l,default:()=>u,getStaticProps:()=>r,mdxHeadings:()=>d,meta:()=>i}),o(55729);var t=o(11885),n=o(40615),l=!0;let i={title:"Modal",package:"@twilio-paste/modal",description:"A modal displays content over the main page and blocks any interaction with the page.",slug:"/components/modal/api"},r=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...d,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"/?path=/story/components-alert--neutral",storybookUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/alert"}}}),d=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],s=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)},p={meta:i,getStaticProps:r,mdxHeadings:d},c=n.A;function u({components:e,...a}){return(0,t.yg)(c,{...p,...a,components:e,mdxType:"MDXLayout"},(0,t.yg)("h2",null,"Installation"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/modal - or - yarn add @twilio-paste/core
`)),(0,t.yg)("h2",null,"Usage"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-jsx"},`import {useUID} from '@twilio-paste/core/uid-library';
import {Button} from '@twilio-paste/core/button';
import {Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading} from '@twilio-paste/core/modal';

const ModalTrigger = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        New Project
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Create new project
          </ModalHeading>
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};
`)),(0,t.yg)("h2",null,"Props"),(0,t.yg)(s,{componentApi:a.componentApi,mdxType:"PropsTable"}))}u.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=46675)),_N_E=e.O()}]);