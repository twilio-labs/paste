(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2238],{40615:(e,r,a)=>{"use strict";a.d(r,{A:()=>m});var t=a(72387),o=a(76127),s=a(95669),n=a.n(s),l=a(81278);a(55729);var i=a(10511),p=a(43084),u=a(10732),d=a(62887),g=a(63437),h=a(38992);let c={h1:()=>null},m=({children:e,meta:r,navigationData:a,data:s,mdxHeadings:m,pageHeaderData:{categoryRoute:y,githubUrl:b,storybookUrl:f}})=>{let v=r.title?`${r.title} - ${h.DZ.TITLE}`:h.DZ.TITLE,B=r.description||h.DZ.DESCRIPTION,x=(0,l.useRouter)();return(0,t.FD)(g.T,{navigationData:a,children:[(0,t.FD)(n(),{children:[(0,t.Y)("title",{children:v}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${x.pathname}`}),(0,t.Y)("meta",{name:"description",content:B},"description")]}),(0,t.FD)(i.s,{children:[(0,t.Y)(d.c,{categoryRoute:y,githubUrl:b,storybookUrl:f,data:s}),(0,t.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(u.i,{data:m}),(0,t.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(p.Q,{componentOverrides:r.package?c:{},children:e})})]})]})]})}},99132:(e,r,a)=>{"use strict";a.r(r),a.d(r,{__N_SSG:()=>s,default:()=>y,getStaticProps:()=>l,mdxHeadings:()=>i,meta:()=>n}),a(55729);var t=a(11885),o=a(40615),s=!0;let n={title:"Progress Bar",package:"@twilio-paste/progress-bar",description:"A Progress Bar communicates the completion status of a process or task.",slug:"/components/progress-bar/"},l=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:i,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/progress-bar",storybookUrl:"/?path=/story/components-progressbar--default"}}}),i=[{value:"Guidelines",depth:2},{value:"About Progress Bar",depth:3},{value:"Progress Bar vs. Meter",depth:3},{value:"Progress Bar vs. Progress Steps",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Default",depth:3},{value:"Min and max values",depth:3},{value:"States",depth:2},{value:"Indeterminate",depth:3},{value:"Error",depth:3},{value:"Disabled",depth:3},{value:"Composition Notes",depth:2},{value:"When to use Progress Bar",depth:2}],p=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",r)},u=p("StoryPreview"),d=p("DoDont"),g=p("Do"),h=p("Dont"),c={meta:n,getStaticProps:l,mdxHeadings:i},m=o.A;function y({components:e,...r}){return(0,t.yg)(m,{...c,...r,components:e,mdxType:"MDXLayout"},(0,t.yg)(u,{height:"230px",title:"Default Progress Bar",storyID:"components-progressbar--default",code:`// See storybook for full code
<Box maxWidth="400px">
  {value >= 100 ? (
    <Box marginBottom="space90" display="flex" alignItems="center" columnGap="space30">
      <AcceptIcon decorative size="sizeIcon30" color="colorTextSuccess" />
      Your submission has been approved!
    </Box>
  ) : (
    <Box marginBottom="space90">
      <ProgressBarLabel htmlFor={progressBarId} valueLabel={Math.round(value)%}>
        Reviewing submission
      </ProgressBarLabel>
      <ProgressBar
        id={progressBarId}
        aria-describedby={helpTextId}
        value={value}
        valueLabel={Math.round(value)%}
      />
      <HelpText id={helpTextId}>Automatically reviewing your submission with our AI agents.</HelpText>
    </Box>
  )}
  <Button
    variant="primary"
    onClick={() => {
      setRerun(1);
      setValue(0);
    }}
    disabled={rerun === 1}
  >
    Restart Progress
  </Button>
</Box>`,mdxType:"StoryPreview"}),(0,t.yg)("h2",null,"Guidelines"),(0,t.yg)("h3",null,"About Progress Bar"),(0,t.yg)("p",null,`A Progress Bar communicates the completion status of a process, like
downloads and data processing, or a task, like filling out a form. A
Progress Bar enhances user understanding of where they are in a task
or where the system is in a process.`),(0,t.yg)("h3",null,"Progress Bar vs. Meter"),(0,t.yg)("p",null,`A Progress Bar represents only completion progress, like a file upload
or filling out a form. If you're not displaying progress, use a `,(0,t.yg)("a",{parentName:"p",href:"/components/meter"},"Meter"),"."),(0,t.yg)("p",null,`One way to check if you need a Progress Bar or a Meter is to ask
yourself: `,(0,t.yg)("em",{parentName:"p"},"Could you substitute your UI element for ",(0,t.yg)("a",{parentName:"em",href:"/components/progress-steps"},"Progress Steps"),`?
Would it communicate roughly the same intent?`),` If yes, then Progress
Bar is probably the right element to use.`),(0,t.yg)("h3",null,"Progress Bar vs. Progress Steps"),(0,t.yg)("p",null,`Use Progress Bar for tasks that are short, straightforward, and linear
that don't need the extra layer of information that Progress Steps
provides. Example: A sign-up flow that a customer can reasonably
complete without leaving the flow.`),(0,t.yg)("p",null,"In contrast, ",(0,t.yg)("a",{parentName:"p",href:"/components/progress-steps"},"Progress Steps"),` are a visual representation of a complex
task broken up into multiple steps. They indicate what has and what
needs to be done to fully complete the task. Use Progress Steps when
the task is nonlinear or can't be completed in one sitting. Example:
A task that requires a customer to go to a third-party application
to configure their settings before returning to Twilio to complete
the full task.`),(0,t.yg)("h3",null,"Accessibility"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"A label is required when using Progress Bar. Use one of these options:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Visible label using ",(0,t.yg)("inlineCode",{parentName:"li"},"ProgressBarLabel"),", with ",(0,t.yg)("inlineCode",{parentName:"li"},"htmlFor"),` set equal to
the `,(0,t.yg)("inlineCode",{parentName:"li"},"id")," of the Progress Bar (preferred)"),(0,t.yg)("li",{parentName:"ul"},"Visible label that's associated to the Progress Bar with ",(0,t.yg)("inlineCode",{parentName:"li"},"aria-labelledby")),(0,t.yg)("li",{parentName:"ul"},"Label directly using ",(0,t.yg)("inlineCode",{parentName:"li"},"aria-label")))),(0,t.yg)("li",{parentName:"ul"},"A numerical ",(0,t.yg)("inlineCode",{parentName:"li"},"value")," is required, between 0 and any maximum value provided.")),(0,t.yg)("h2",null,"Examples"),(0,t.yg)("h3",null,"Default"),(0,t.yg)("p",null,`Use a Progress Bar to communicate the completion status of a process or task.
Use the `,(0,t.yg)("inlineCode",{parentName:"p"},"valueLabel")," prop to show a visible value."),(0,t.yg)("p",null,`If you don't show a visible value, communicate what kind of process is
happening through `,(0,t.yg)("inlineCode",{parentName:"p"},"ProgressBarLabel"),`. For example, the Progress Bar Label should say
“Uploading filename.png…” not just “filename.png” if you don't show the completion percentage.
If the label starts with a verb and the Progress Bar is not disabled, use an ellipsis at the
end of the label. `),(0,t.yg)(u,{height:"230px",title:"Default Progress Bar",storyID:"components-progressbar--default",code:`// See storybook for full code
<Box maxWidth="400px">
  {value >= 100 ? (
    <Box marginBottom="space90" display="flex" alignItems="center" columnGap="space30">
      <AcceptIcon decorative size="sizeIcon30" color="colorTextSuccess" />
      Your submission has been approved!
    </Box>
  ) : (
    <Box marginBottom="space90">
      <ProgressBarLabel htmlFor={progressBarId} valueLabel={Math.round(value)%}>
        Reviewing submission
      </ProgressBarLabel>
      <ProgressBar
        id={progressBarId}
        aria-describedby={helpTextId}
        value={value}
        valueLabel={Math.round(value)%}
      />
      <HelpText id={helpTextId}>Automatically reviewing your submission with our AI agents.</HelpText>
    </Box>
  )}
  <Button
    variant="primary"
    onClick={() => {
      setRerun(1);
      setValue(0);
    }}
    disabled={rerun === 1}
  >
    Restart Progress
  </Button>
</Box>`,mdxType:"StoryPreview"}),(0,t.yg)("p",null,`When the process or task is complete, swap the Progress Bar out with an
element that represents the completed process or task. For example, for
a file upload, that could be a card representing the file.`),(0,t.yg)("h3",null,"Min and max values"),(0,t.yg)("p",null,`By default, Progress Bar has a value of 0 (represented as a percentage)
and range of 0 to 100. Pass `,(0,t.yg)("inlineCode",{parentName:"p"},"maxValue"),` to Progress Bar to set a custom
max value. The min value is always 0.`),(0,t.yg)("p",null,"To show a visible max value, use the ",(0,t.yg)("inlineCode",{parentName:"p"},"valueLabel"),` prop to show
“`,"[current value]"," of ","[max value]",`”. Consider what type of value would
be most useful for a user. For example, choose either “50%” or “5,000
of 10,000”, not both.`),(0,t.yg)(u,{height:"145px",title:"Adjusting the progress bar range",storyID:"components-progressbar--custom-range",code:`<ProgressBarLabel htmlFor={progressBarId} valueLabel="688KB of 834KB">
  mtn_sunrise.png
</ProgressBarLabel>
<ProgressBar id={progressBarId} value={688} maxValue={834} />`,mdxType:"StoryPreview"}),(0,t.yg)("h2",null,"States"),(0,t.yg)("h3",null,"Indeterminate"),(0,t.yg)("p",null,`Use an indeterminate Progress Bar when progress is being made, but
you can't calculate how much progress or you don't know the value.
This is common when computing the progress value interferes with
showing an accurate value, or when connection is lost but the
process is still continuing.`),(0,t.yg)("p",null,`For indeterminate states, communicate what kind of process is
happening through `,(0,t.yg)("inlineCode",{parentName:"p"},"ProgressBarLabel"),`. If the label starts with a
verb, use an ellipsis at the end of the label. For example, the
Progress Bar Label should say “Uploading filename.png…” not just
“filename.png”.`),(0,t.yg)(u,{height:"260px",title:"Indeterminate progress state",storyID:"components-progressbar--indeterminate",code:`<ProgressBarLabel htmlFor={progressBarIdA}>Uploading sunrise_video.mov...</ProgressBarLabel>
<ProgressBar id={progressBarIdA} aria-describedby={helpTextId} isIndeterminate />
<Separator orientation="horizontal" verticalSpacing="space60" />
<ProgressBarLabel htmlFor={progressBarIdB}>Converting files...</ProgressBarLabel>
<ProgressBar id={progressBarIdB} aria-describedby={helpTextId} isIndeterminate />
<HelpText id={helpTextId}>
  Connection lost. Check your connection and refresh the page to get up-to-date information.
</HelpText>`,mdxType:"StoryPreview"}),(0,t.yg)("h3",null,"Error"),(0,t.yg)("p",null,`Use the error state to show a process has stopped, and the user
must do something to continue it.`),(0,t.yg)("p",null,"Use ",(0,t.yg)("a",{parentName:"p",href:"/components/help-text#error-help-text"},"error Help Text"),` to
describe the error and what needs to be done to fix it. For
additional guidance on how to compose error messages, refer
to the `,(0,t.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,t.yg)(u,{height:"165px",title:"Progress bar with error state",storyID:"components-progressbar--error",code:`<ProgressBarLabel htmlFor={progressBarId} valueLabel="50%">
  mtn_sunrise.png
</ProgressBarLabel>
<ProgressBar id={progressBarId} aria-describedby={helpTextId} value={50} valueLabel="50%" hasError />
<HelpText variant="error" id={helpTextId}>
  Upload failed. <Anchor href="#">Retry upload</Anchor>
</HelpText>`,mdxType:"StoryPreview"}),(0,t.yg)("h3",null,"Disabled"),(0,t.yg)("p",null,`Use a disabled Progress Bar to show a task has stopped, and
the system needs to do something before the user can continue
the task. Let users know when they can expect their next steps.`),(0,t.yg)("p",null,"Do not include an ellipsis on a disabled Progress Bar."),(0,t.yg)(u,{height:"185px",title:"Disabled Progress Bar",storyID:"components-progressbar--disabled",code:`<ProgressBarLabel disabled htmlFor={progressBarId} valueLabel="50%">
  Campaign registration
</ProgressBarLabel>
<ProgressBar id={progressBarId} aria-describedby={helpTextId} value={80} disabled />
<HelpText variant="default" id={helpTextId}>
  Your profile is in review. You will receive an email about your application status in 3-5 business days.
</HelpText>`,mdxType:"StoryPreview"}),(0,t.yg)("h2",null,"Composition Notes"),(0,t.yg)("p",null,`The Progress Bar label should communicate what the Progress Bar
is measuring. Where possible, avoid a label that wraps onto two lines.`),(0,t.yg)("p",null,"A Progress Bar can include a numerical value through ",(0,t.yg)("inlineCode",{parentName:"p"},"valueLabel"),`.
When using a custom value label, consider what type of value would
be most useful for a user to see (for example, “50%” vs. “5000 of 10,000”).`),(0,t.yg)("p",null,"If you don't show a visible value through ",(0,t.yg)("inlineCode",{parentName:"p"},"valueLabel"),`, or if the
Progress Bar is indeterminate, communicate what kind of process is
happening through `,(0,t.yg)("inlineCode",{parentName:"p"},"ProgressBarLabel"),`. If the label starts with a
verb and the Progress Bar is not disabled, use an ellipsis at the
end of the label. For example, the Progress Bar Label should say
“Uploading filename.png…” not just “filename.png”.`),(0,t.yg)("p",null,`Use Help Text to offer additional information to contextualize or
help the user understand the Progress Bar, especially if the
process is complex or has a long wait time to better communicate
current status with users.`),(0,t.yg)("h2",null,"When to use Progress Bar"),(0,t.yg)(d,{mdxType:"DoDont"},(0,t.yg)(g,{title:"Do",body:"Use a Progress Bar when you want to represent the status of an ongoing task (like downloading files, setting up an account, etc.) within a fixed 0-100% range. It’s especially useful when you don’t need to communicate the details of each step.",mdxType:"Do"}),(0,t.yg)(h,{title:"Don't",body:"Don’t use a Progress Bar when you need a user to navigate between different steps of a task. Use Progress Steps instead when the task is nonlinear or can’t be completed in one sitting.",mdxType:"Dont"})),(0,t.yg)(d,{mdxType:"DoDont"},(0,t.yg)(g,{title:"Do",body:"Use a Progress Bar to show real-time feedback to users as tasks are completed, or when they need to wait for a process to finish.",mdxType:"Do"}),(0,t.yg)(h,{title:"Don't",body:"Don’t use a Progress Bar for entire page loads. In this case, use a Spinner or Skeleton Loader instead. ",mdxType:"Dont"})),(0,t.yg)(d,{mdxType:"DoDont"},(0,t.yg)(g,{title:"Do",body:"Use a Progress Bar when you need to display the completion percentage of a task.",mdxType:"Do"}),(0,t.yg)(h,{title:"Don't",body:"Don’t use Progress Bar if you’re communicating capacity. Use Meter instead.",mdxType:"Dont"})))}y.isMDXComponent=!0},99628:(e,r,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/progress-bar",function(){return a(99132)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=99628)),_N_E=e.O()}]);