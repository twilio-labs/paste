(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{34051:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>l,default:()=>v,getStaticProps:()=>c,mdxHeadings:()=>d,meta:()=>o}),a(55729);var n=a(11885),i=a(51582),s=a(83454),u=a(63049),r=a(40615),l=!0;let o={title:"Status Menu - Components",package:"@twilio-paste/status",description:"A Status Menu communicates the status of a process or connectivity to an application or service, and provides a way to update that status type.",slug:"/components/status-menu/"},c=async()=>({props:{data:{...packageJson,...feature,nameOverride:"Status Menu",descriptionOverride:"A Status Menu communicates the status of a process or connectivity to an application or service, and provides a way to update that status type."},navigationData,mdxHeadings:d,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/status",storybookUrl:"/?path=/story/components-status-menustatus--process"}}}),d=[{value:"Guidelines",depth:2},{value:"About Status Menu",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Process menu",depth:3},{value:"Connectivity Menu",depth:3},{value:"Composition notes",depth:2},{value:"Status Menu Item Child",depth:3}],h=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},m={meta:o,getStaticProps:c,mdxHeadings:d},p=r.A;function v({components:e,...t}){return(0,n.yg)(p,{...m,...t,components:e,mdxType:"MDXLayout"},(0,n.yg)(h,{scope:{useStatusMenuState:i.EH,StatusMenu:s.Wq,StatusMenuItemRadio:s.Ui,StatusMenuBadge:s.rW,StatusMenuItemChild:s.pf,ProcessObject:u.ZG},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},u.ng),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About Status Menu"),(0,n.yg)("p",null,"Use a Status Menu to both display and change the status of a connection or process. It closely follows the ",(0,n.yg)("a",{parentName:"p",href:"/patterns/object-status"},"Object Status Pattern")," and comes with preconfigured options for displaying the status of both processes and connections, using the correct icons for each."),(0,n.yg)("h3",null,"Accessibility"),(0,n.yg)("p",null,"Status Menu implements a Menu and supports all the same keyboard navigation that the ",(0,n.yg)("a",{parentName:"p",href:"/components/menu"},"Menu")," component does."),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Process menu"),(0,n.yg)("p",null,"Use the process-related variants of Status Menu to display and interact with the status of a particular process."),(0,n.yg)(h,{scope:{useStatusMenuState:i.EH,StatusMenu:s.Wq,StatusMenuItemRadio:s.Ui,StatusMenuBadge:s.rW,StatusMenuItemChild:s.pf,ProcessObject:u.ZG},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},u.ng),(0,n.yg)("h3",null,"Connectivity Menu"),(0,n.yg)("p",null,"Use the connectivity-related variants of Status Menu to display and interact with the status of a particular connection."),(0,n.yg)(h,{scope:{useStatusMenuState:i.EH,StatusMenu:s.Wq,StatusMenuItemRadio:s.Ui,StatusMenuBadge:s.rW,StatusMenuItemChild:s.pf,ConnectivityObject:u.$H},noInline:!0,showOverflow:!0,mdxType:"LivePreview"},u.FX),(0,n.yg)("h2",null,"Composition notes"),(0,n.yg)("p",null,"Status Menu consists of ",(0,n.yg)("inlineCode",{parentName:"p"},"StatusMenu"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"StatusMenuBadge"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"StatusMenuItem"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"StatusMenuItemRadio"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"StatusMenuItemCheckbox"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"useStatusMenuState"),". These are all namesakes of their ",(0,n.yg)("a",{parentName:"p",href:"/components/menu"},"Menu")," equivalents and follow the same API. It also comes with one additional component called ",(0,n.yg)("inlineCode",{parentName:"p"},"StatusMenuItemChild"),"."),(0,n.yg)("h3",null,"Status Menu Item Child"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"StatusMenuItemChild")," is where the status pattern is implemented. It takes a ",(0,n.yg)("inlineCode",{parentName:"p"},"variant")," prop that is set to a value that directly relates to one of the connectivity or process status types. It pairs the correct icon with its color implementation for the status. Check out the ",(0,n.yg)("a",{parentName:"p",href:"#statusmenuitemchild"},"full list of variant options in the props table"),"."))}v.isMDXComponent=!0},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>v});var n=a(72387),i=a(76127),s=a(95669),u=a.n(s),r=a(81278);a(55729);var l=a(10511),o=a(43084),c=a(10732),d=a(62887),h=a(63437),m=a(38992);let p={h1:()=>null},v=({children:e,meta:t,navigationData:a,data:s,mdxHeadings:v,pageHeaderData:{categoryRoute:S,githubUrl:M,storybookUrl:y}})=>{let C=t.title?`${t.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,b=t.description||m.DZ.DESCRIPTION,g=(0,r.useRouter)();return(0,n.FD)(h.T,{navigationData:a,children:[(0,n.FD)(u(),{children:[(0,n.Y)("title",{children:C}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${g.pathname}`}),(0,n.Y)("meta",{name:"description",content:b},"description")]}),(0,n.FD)(l.s,{children:[(0,n.Y)(d.c,{categoryRoute:S,githubUrl:M,storybookUrl:y,data:s}),(0,n.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(c.i,{data:v}),(0,n.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(o.Q,{componentOverrides:t.package?p:{},children:e})})]})]})]})}},49448:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/status-menu",function(){return a(34051)}])},63049:(e,t,a)=>{"use strict";a.d(t,{$H:()=>s,FX:()=>u,ZG:()=>n,ng:()=>i});let n={Success:{variant:"ProcessSuccess",children:"Complete"},Neutral:{variant:"ProcessNeutral",children:"In review"},Warning:{variant:"ProcessWarning",children:"Needs attention"},Error:{variant:"ProcessError",children:"Rejected"},InProgress:{variant:"ProcessInProgress",children:"In-progress"},Disabled:{variant:"ProcessDisabled",children:"Paused"},Draft:{variant:"ProcessDraft",children:"Draft"}},i=`
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
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="success"
          checked={process.children === ProcessObject.Success.children}
          onClick={() => onClick('Success')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessSuccess">{ProcessObject.Success.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="neutral"
          checked={process.children === ProcessObject.Neutral.children}
          onClick={() => onClick('Neutral')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessNeutral">{ProcessObject.Neutral.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="warning"
          checked={process.children === ProcessObject.Warning.children}
          onClick={() => onClick('Warning')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessWarning">{ProcessObject.Warning.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="error"
          checked={process.children === ProcessObject.Error.children}
          onClick={() => onClick('Error')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessError">{ProcessObject.Error.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="InProgress"
          checked={process.children === ProcessObject.InProgress.children}
          onClick={() => onClick('InProgress')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessInProgress">{ProcessObject.InProgress.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="disabled"
          checked={process.children === ProcessObject.Disabled.children}
          onClick={() => onClick('Disabled')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessDisabled">{ProcessObject.Disabled.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="draft"
          checked={process.children === ProcessObject.Draft.children}
          onClick={() => onClick('Draft')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessDraft">{ProcessObject.Draft.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
      </StatusMenu>
    </>
  );
};

render(
  <ProcessStatusMenu />
)
`.trim(),s={Available:{variant:"ConnectivityAvailable",children:"Available"},Busy:{variant:"ConnectivityBusy",children:"Busy"},Unavailable:{variant:"ConnectivityUnavailable",children:"Unavailable"},Neutral:{variant:"ConnectivityNeutral",children:"Neutral"},Offline:{variant:"ConnectivityOffline",children:"Offline"}},u=`
const ConnectivityStatusMenu = () => {
  const [availability, setConnectivity] = React.useState(ConnectivityObject.Available);
  const menu = useStatusMenuState();
  const onClick = (status) => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  return (
    <>
      <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={availability.variant}>
        {availability.children}
      </StatusMenuBadge>
      <StatusMenu {...menu} aria-label="Preferences">
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Available'}
          value="available"
          {...menu}
          onClick={() => onClick('Available')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityAvailable">Available</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Busy'}
          value="busy"
          {...menu}
          onClick={() => onClick('Busy')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityBusy">Busy</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Unavailable'}
          value="unavailable"
          {...menu}
          onClick={() => onClick('Unavailable')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityUnavailable">Unavailable</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Neutral'}
          value="neutral"
          {...menu}
          onClick={() => onClick('Neutral')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityNeutral">Neutral</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Offline'}
          value="offline"
          {...menu}
          onClick={() => onClick('Offline')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityOffline">Offline</StatusMenuItemChild>
        </StatusMenuItemRadio>
      </Menu>
    </>
  );
};

render(
  <ConnectivityStatusMenu />
)
`.trim()}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=49448)),_N_E=e.O()}]);