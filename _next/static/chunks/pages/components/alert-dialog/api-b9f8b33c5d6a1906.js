(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6981],{25981:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert-dialog/api",function(){return a(44490)}])},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var o=a(72387),n=a(76127),i=a(95669),l=a.n(i),r=a(81278);a(55729);var s=a(10511),p=a(43084),d=a(10732),c=a(62887),g=a(63437),u=a(38992);let m={h1:()=>null},h=({children:e,meta:t,navigationData:a,data:i,mdxHeadings:h,pageHeaderData:{categoryRoute:y,githubUrl:b,storybookUrl:D}})=>{let w=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,v=t.description||u.DZ.DESCRIPTION,N=(0,r.useRouter)();return(0,o.FD)(g.T,{navigationData:a,children:[(0,o.FD)(l(),{children:[(0,o.Y)("title",{children:w}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${N.pathname}`}),(0,o.Y)("meta",{name:"description",content:v},"description")]}),(0,o.FD)(s.s,{children:[(0,o.Y)(c.c,{categoryRoute:y,githubUrl:b,storybookUrl:D,data:i}),(0,o.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(d.i,{data:h}),(0,o.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(p.Q,{componentOverrides:t.package?m:{},children:e})})]})]})]})}},44490:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>i,default:()=>g,getStaticProps:()=>r,mdxHeadings:()=>s,meta:()=>l}),a(55729);var o=a(11885),n=a(40615),i=!0;let l={title:"Alert Dialog - Components",package:"@twilio-paste/alert-dialog",description:"An alert dialog displays content over the main page and blocks any interaction with the page.",slug:"/components/alert-dialog/api"},r=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...s,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/alert-dialog",storybookUrl:"/?path=/story/components-alert-dialog--alert-dialog-with-two-actions-story"}}}),s=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],p=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},d={meta:l,getStaticProps:r,mdxHeadings:s},c=n.A;function g({components:e,...t}){return(0,o.yg)(c,{...d,...t,components:e,mdxType:"MDXLayout"},(0,o.yg)("h2",null,"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/alert-dialog - or - yarn add @twilio-paste/core
`)),(0,o.yg)("h2",null,"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`import {AlertDialog} from '@twilio-paste/core/alert-dialog';
import {Button} from '@twilio-paste/core/button';

const AlertDialogExample = () => {
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
        onConfirm={() => {}}
        onConfirmLabel="Submit"
        onDismiss={handleClose}
        onDismissLabel="Cancel"
      >
        Are you sure you want to submit this application? No information can be changed after submitting.
      </AlertDialog>
    </div>
  );
};
`)),(0,o.yg)("h2",null,"Props"),(0,o.yg)(p,{componentApi:t.componentApi,mdxType:"PropsTable"}))}g.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=25981)),_N_E=e.O()}]);