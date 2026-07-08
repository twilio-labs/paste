(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4227],{31901:(a,e,t)=>{"use strict";t.r(e),t.d(e,{__N_SSG:()=>l,default:()=>B,getStaticProps:()=>u,mdxHeadings:()=>d,meta:()=>o}),t(55729);var s=t(11885),i=t(83454),r=t(76127),n=t(40615),l=!0;let o={title:"Status Badge - Components",package:"@twilio-paste/status",description:"A Status Badge communicates the status of a process or connectivity to an application or service.",slug:"/components/status-badge/"},u=async()=>({props:{data:{...packageJson,...feature,nameOverride:"Status Badge",descriptionOverride:"A Status Badge communicates the status of a process or connectivity to an application or service."},navigationData,mdxHeadings:d,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/status",storybookUrl:"/?path=/story/components-status-statusbadge--process-success-status-badge"}}}),d=[{value:"Guidelines",depth:2},{value:"About Status Badge",depth:2},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Variants",depth:3},{value:"ProcessSuccess",depth:4},{value:"ProcessError",depth:4},{value:"ProcessWarning",depth:4},{value:"ProcessNeutral",depth:4},{value:"ProcessInProgress",depth:4},{value:"ProcessDisabled",depth:4},{value:"ProcessDraft",depth:4},{value:"ConnectivityAvailable",depth:4},{value:"ConnectivityUnavailable",depth:4},{value:"ConnectivityBusy",depth:4},{value:"ConnectivityNeutral",depth:4},{value:"ConnectivityOffline",depth:4},{value:"Small Badges",depth:3},{value:"Borderless Badges",depth:3},{value:"Composition Notes",depth:2}],g=function(a){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,s.yg)("div",a)},c={meta:o,getStaticProps:u,mdxHeadings:d},v=n.A;function B({components:a,...e}){return(0,s.yg)(v,{...c,...e,components:a,mdxType:"MDXLayout"},(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" flexDirection="column" rowGap="space40">
  <Box display="flex" columnGap="space40" rowGap="space40" flexWrap="wrap">
    <StatusBadge variant="ProcessSuccess">
      Success
    </StatusBadge>
    <StatusBadge variant="ProcessError">
      Error
    </StatusBadge>
    <StatusBadge variant="ProcessWarning">
      Warning
    </StatusBadge>
    <StatusBadge variant="ProcessNeutral">
      Neutral
    </StatusBadge>
    <StatusBadge variant="ProcessInProgress">
      In-progress
    </StatusBadge>
    <StatusBadge variant="ProcessDisabled">
      Disabled
    </StatusBadge>
    <StatusBadge variant="ProcessDraft">
      Draft
    </StatusBadge>
  </Box>
  <Box display="flex" columnGap="space40">
    <StatusBadge variant="ConnectivityAvailable">
      Available
    </StatusBadge>
    <StatusBadge variant="ConnectivityUnavailable">
      Unavailable
    </StatusBadge>
    <StatusBadge variant="ConnectivityBusy">
      Busy
    </StatusBadge>
    <StatusBadge variant="ConnectivityNeutral">
      Neutral
    </StatusBadge>
    <StatusBadge variant="ConnectivityOffline">
      Offline
    </StatusBadge>
  </Box>
</Box>
`.trim()),(0,s.yg)("h2",null,"Guidelines"),(0,s.yg)("h2",null,"About Status Badge"),(0,s.yg)("p",null,"Status badge is an implementation of the ",(0,s.yg)("a",{parentName:"p",href:"/patterns/object-status"},"Object Status Pattern")," to display the status of a process or connectivity in your product."),(0,s.yg)("h3",null,"Accessibility"),(0,s.yg)("p",null,"Status Badge communicates a status in an accessible way by automatically pairing an icon with a color that represents a specific status type. This ensures there are distinct visual differences between each status type."),(0,s.yg)("p",null,"Care must still be taken to ensure the word used to describe the status in the badge is unique to the status type it is paired with for any given screen."),(0,s.yg)("h2",null,"Examples"),(0,s.yg)("h3",null,"Variants"),(0,s.yg)("h4",null,"ProcessSuccess"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ProcessSuccess">
  Success
</StatusBadge>
`.trim()),(0,s.yg)("h4",null,"ProcessError"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ProcessError">
  Error
</StatusBadge>
`.trim()),(0,s.yg)("h4",null,"ProcessWarning"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ProcessWarning">
  Warning
</StatusBadge>
`.trim()),(0,s.yg)("h4",null,"ProcessNeutral"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ProcessNeutral">
  Neutral
</StatusBadge>
`.trim()),(0,s.yg)("h4",null,"ProcessInProgress"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ProcessInProgress">
  In-progress
</StatusBadge>
`.trim()),(0,s.yg)("h4",null,"ProcessDisabled"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ProcessDisabled">
  Disabled
</StatusBadge>
`.trim()),(0,s.yg)("h4",null,"ProcessDraft"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ProcessDraft">
  Draft
</StatusBadge>
`.trim()),(0,s.yg)("h4",null,"ConnectivityAvailable"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ConnectivityAvailable">
  Available
</StatusBadge>
`.trim()),(0,s.yg)("h4",null,"ConnectivityUnavailable"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ConnectivityUnavailable">
  Unavailable
</StatusBadge>
`.trim()),(0,s.yg)("h4",null,"ConnectivityBusy"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ConnectivityBusy">
  Busy
</StatusBadge>
`.trim()),(0,s.yg)("h4",null,"ConnectivityNeutral"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ConnectivityNeutral">
  Neutral
</StatusBadge>
`.trim()),(0,s.yg)("h4",null,"ConnectivityOffline"),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<StatusBadge variant="ConnectivityOffline">
  Offline
</StatusBadge>
`.trim()),(0,s.yg)("h3",null,"Small Badges"),(0,s.yg)("p",null,"Use small Badges sparingly, only when needed for vertical density. Guidelines for using variants in small Badge are the same as in their default size."),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" flexDirection="column" rowGap="space40">
  <Box display="flex" columnGap="space40" rowGap="space40" flexWrap="wrap">
    <StatusBadge size="small" variant="ProcessSuccess">
      Success
    </StatusBadge>
    <StatusBadge size="small" variant="ProcessError">
      Error
    </StatusBadge>
    <StatusBadge size="small" variant="ProcessWarning">
      Warning
    </StatusBadge>
    <StatusBadge size="small" variant="ProcessNeutral">
      Neutral
    </StatusBadge>
    <StatusBadge size="small" variant="ProcessInProgress">
      In-progress
    </StatusBadge>
    <StatusBadge size="small" variant="ProcessDisabled">
      Disabled
    </StatusBadge>
    <StatusBadge size="small" variant="ProcessDraft">
      Draft
    </StatusBadge>
  </Box>
  <Box display="flex" columnGap="space40">
    <StatusBadge size="small" variant="ConnectivityAvailable">
      Available
    </StatusBadge>
    <StatusBadge size="small" variant="ConnectivityUnavailable">
      Unavailable
    </StatusBadge>
    <StatusBadge size="small" variant="ConnectivityBusy">
      Busy
    </StatusBadge>
    <StatusBadge size="small" variant="ConnectivityNeutral">
      Neutral
    </StatusBadge>
    <StatusBadge size="small" variant="ConnectivityOffline">
      Offline
    </StatusBadge>
  </Box>
</Box>
`.trim()),(0,s.yg)("h3",null,"Borderless Badges"),(0,s.yg)("p",null,"A borderless Status Badge has no border, padding, or background color."),(0,s.yg)("p",null,"Use a borderless Status Badge inside of a Table to indicate the current state or condition of items of the Table. Placement of the status in the Table should depend on the importance of the status to the given user flow and should be tested with users."),(0,s.yg)(g,{scope:{Box:r.az,StatusBadge:i.Wh},language:"jsx",mdxType:"LivePreview"},`<Box display="flex" flexDirection="column" rowGap="space40">
  <Box display="flex" columnGap="space40" rowGap="space40" flexWrap="wrap">
    <StatusBadge size="borderless" variant="ProcessSuccess">
      Success
    </StatusBadge>
    <StatusBadge size="borderless" variant="ProcessError">
      Error
    </StatusBadge>
    <StatusBadge size="borderless" variant="ProcessWarning">
      Warning
    </StatusBadge>
    <StatusBadge size="borderless" variant="ProcessNeutral">
      Neutral
    </StatusBadge>
    <StatusBadge size="borderless" variant="ProcessInProgress">
      In-progress
    </StatusBadge>
    <StatusBadge size="borderless" variant="ProcessDisabled">
      Disabled
    </StatusBadge>
    <StatusBadge size="borderless" variant="ProcessDraft">
      Draft
    </StatusBadge>
  </Box>
  <Box display="flex" columnGap="space40">
    <StatusBadge size="borderless" variant="ConnectivityAvailable">
      Available
    </StatusBadge>
    <StatusBadge size="borderless" variant="ConnectivityUnavailable">
      Unavailable
    </StatusBadge>
    <StatusBadge size="borderless" variant="ConnectivityBusy">
      Busy
    </StatusBadge>
    <StatusBadge size="borderless" variant="ConnectivityNeutral">
      Neutral
    </StatusBadge>
    <StatusBadge size="borderless" variant="ConnectivityOffline">
      Offline
    </StatusBadge>
  </Box>
</Box>
`.trim()),(0,s.yg)("hr",null),(0,s.yg)("h2",null,"Composition Notes"),(0,s.yg)("p",null,"Use a Status Badge when you want to add a label to a piece of UI for quick identification and navigation."),(0,s.yg)("p",null,`Status Badge labels should be 1–3 words.`))}B.isMDXComponent=!0},40615:(a,e,t)=>{"use strict";t.d(e,{A:()=>p});var s=t(72387),i=t(76127),r=t(95669),n=t.n(r),l=t(81278);t(55729);var o=t(10511),u=t(43084),d=t(10732),g=t(62887),c=t(63437),v=t(38992);let B={h1:()=>null},p=({children:a,meta:e,navigationData:t,data:r,mdxHeadings:p,pageHeaderData:{categoryRoute:S,githubUrl:y,storybookUrl:h}})=>{let m=e.title?`${e.title} - ${v.DZ.TITLE}`:v.DZ.TITLE,x=e.description||v.DZ.DESCRIPTION,b=(0,l.useRouter)();return(0,s.FD)(c.T,{navigationData:t,children:[(0,s.FD)(n(),{children:[(0,s.Y)("title",{children:m}),(0,s.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${b.pathname}`}),(0,s.Y)("meta",{name:"description",content:x},"description")]}),(0,s.FD)(o.s,{children:[(0,s.Y)(g.c,{categoryRoute:S,githubUrl:y,storybookUrl:h,data:r}),(0,s.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,s.Y)(d.i,{data:p}),(0,s.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,s.Y)(u.Q,{componentOverrides:e.package?B:{},children:a})})]})]})]})}},70964:(a,e,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/status-badge",function(){return t(31901)}])}},a=>{a.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>a(a.s=70964)),_N_E=a.O()}]);