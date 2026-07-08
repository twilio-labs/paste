(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4070],{40615:(t,e,a)=>{"use strict";a.d(e,{A:()=>h});var n=a(72387),s=a(76127),u=a(95669),o=a.n(u),i=a(81278);a(55729);var r=a(10511),c=a(43084),l=a(10732),d=a(62887),m=a(63437),p=a(38992);let S={h1:()=>null},h=({children:t,meta:e,navigationData:a,data:u,mdxHeadings:h,pageHeaderData:{categoryRoute:M,githubUrl:g,storybookUrl:C}})=>{let I=e.title?`${e.title} - ${p.DZ.TITLE}`:p.DZ.TITLE,v=e.description||p.DZ.DESCRIPTION,y=(0,i.useRouter)();return(0,n.FD)(m.T,{navigationData:a,children:[(0,n.FD)(o(),{children:[(0,n.Y)("title",{children:I}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${y.pathname}`}),(0,n.Y)("meta",{name:"description",content:v},"description")]}),(0,n.FD)(r.s,{children:[(0,n.Y)(d.c,{categoryRoute:M,githubUrl:g,storybookUrl:C,data:u}),(0,n.FD)(s.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(l.i,{data:h}),(0,n.Y)(s.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(c.Q,{componentOverrides:e.package?S:{},children:t})})]})]})]})}},70415:(t,e,a)=>{"use strict";a.r(e),a.d(e,{__N_SSG:()=>u,default:()=>m,getStaticProps:()=>i,mdxHeadings:()=>r,meta:()=>o}),a(55729);var n=a(11885),s=a(40615),u=!0;let o={title:"Status Menu - Components - API",package:"@twilio-paste/status",description:"A Status Menu communicates the status of a process or connectivity to an application or service, and provides a way to update that status type.",slug:"/components/status-menu/"},i=async()=>({props:{data:{...packageJson,...feature,nameOverride:"Status Menu",descriptionOverride:"A Status Menu communicates the status of a process or connectivity to an application or service, and provides a way to update that status type."},componentApi,mdxHeadings:[...r,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/status",storybookUrl:"/?path=/story/components-status-menustatus--process"}}}),r=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],c=function(t){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},l={meta:o,getStaticProps:i,mdxHeadings:r},d=s.A;function m({components:t,...e}){return(0,n.yg)(d,{...l,...e,components:t,mdxType:"MDXLayout"},(0,n.yg)("h2",null,"Installation"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/Status - or - yarn add @twilio-paste/core
`)),(0,n.yg)("h2",null,"Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  StatusMenu,
  StatusMenuBadge,
  StatusMenuItem,
  StatusMenuItemChild,
  useStatusMenuState,
  StatusMenuItemRadio,
  StatusMenuItemCheckbox,
} from '@twilio-paste/core/status';

const ProcessStatusMenu = () => {
  const [process, setProcess] = React.useState(ProcessObject.Success);
  const menu = useStatusMenuState();
  const onClick = (status) => {
    setProcess(ProcessObject[status]);
    menu.hide();
  };
  return (
    <>
      <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={process.variant}>
        {process.children}
      </StatusMenuBadge>
      <StatusMenu {...menu} aria-label="Preferences">
        <StatusMenuItem {...menu} onClick={() => onClick('Success')} variant="default">
          <StatusMenuItemChild variant="ProcessSuccess">Complete</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={() => onClick('Neutral')} variant="default">
          <StatusMenuItemChild variant="ProcessNeutral">In review</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={() => onClick('Warning')} variant="default">
          <StatusMenuItemChild variant="ProcessWarning">Needs attention</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={() => onClick('Error')} variant="default">
          <StatusMenuItemChild variant="ProcessError">Rejected</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={() => onClick('InProgress')} variant="default">
          <StatusMenuItemChild variant="ProcessInProgress">In-progress</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={() => onClick('Disabled')} variant="default">
          <StatusMenuItemChild variant="ProcessDisabled">Paused</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={() => onClick('Draft')} variant="default">
          <StatusMenuItemChild variant="ProcessDraft">Draft</StatusMenuItemChild>
        </StatusMenuItem>
      </Menu>
    </>
  );
};
`)),(0,n.yg)("h2",null,"Props"),(0,n.yg)(c,{componentApi:e.componentApi,mdxType:"PropsTable"}))}m.isMDXComponent=!0},84109:(t,e,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/status-menu/api",function(){return a(70415)}])}},t=>{t.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>t(t.s=84109)),_N_E=t.O()}]);