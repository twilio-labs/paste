(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2239],{37946:(e,t,i)=>{"use strict";i.r(t),i.d(t,{__N_SSG:()=>z,default:()=>q,getStaticProps:()=>O,mdxHeadings:()=>V,meta:()=>N}),i(55729);var a=i(11885),r=i(4073),n=i(76127),o=i(86146),l=i(8909),s=i(47442),d=i(28409),c=i(52121),u=i(41960),p=i(84498),m=i(85152),h=i(36669),g=i(93875),y=i(54652),T=i(72387),b=i(27717),f=i(25630),x=i(8588),k=i.n(x);let P={src:"/_next/static/media/chrome.2200fb57.png",height:676,width:720,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX+/v76+vny8vPk5Ob39/jx9v2Kvfvp7/qGsuagxPCmzftYbVzjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAL0lEQVR4nD3JQQ4AIAgDwRYpqP9/sIEQ9zRpsSopsSOulI2DigQb5vTBLP4vMys8HgYAlz6Ja+AAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},A={src:"/_next/static/media/firefox.fbae59da.png",height:248,width:720,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEX5+/7s8fnh6vbk5+ve4uiqxutkOG3mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAH0lEQVR4nBXHsQ0AAAjDsDSF/19GeDPTTgFWNYYkfw4CvgAmPKipyAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},v={src:"/_next/static/media/safari.1b5ee41d.png",height:270,width:704,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAADFBMVEX39/j+/v7l5uju7vAK4dE2AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHElEQVR4nGNgZmJiYmJgZGRgYGJmYAAzwBQjIwABuAAZZd3dPAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},w=()=>{let e=(0,f.DP)();return(0,T.Y)(k(),{src:P,alt:"Chrome/Edge implementation of time picker",width:300,placeholder:"blur",style:(0,b.AH)({margin:"space20",display:"block",marginLeft:"auto",marginRight:"auto"})(e)})},D=()=>{let e=(0,f.DP)();return(0,T.Y)(k(),{src:v,alt:"Safari implementation of time picker",style:(0,b.AH)({margin:"space20",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"300px",height:"auto"})(e)})},H=()=>{let e=(0,f.DP)();return(0,T.Y)(k(),{src:A,alt:"Firefox implementation of time picker",style:(0,b.AH)({margin:"space20",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"300px",height:"auto"})(e)})},L=`
const RequiredTimePicker = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidTP} required>
        What time is your workday over?
      </Label>
      <TimePicker required id={uidTP} aria-describedby={uidHT} {...props} />
      <HelpText id={uidHT}>Select a time.</HelpText>
    </>
  );
};
render(<RequiredTimePicker/>)
`.trim(),I=`
const TimeRangePicker = (props) => {
  const startUidTP = useUID();
  const endUidTP = useUID();
  return (
    <Stack orientation="horizontal" spacing="space80">
      <Box>
        <Label htmlFor={startUidTP}>Start time</Label>
        <TimePicker id={startUidTP} {...props} />
      </Box>
      <Box>
        <Label htmlFor={endUidTP}>End time</Label>
        <TimePicker id={endUidTP} {...props} />
      </Box>
    </Stack>
  );
};
render(<TimeRangePicker/>)

`.trim(),C=`
const OnChangePicker = (props) => {
  const [value, setValue] = React.useState('');
  const [timeFormat, setTimeFormat] = React.useState('HH:mm');
  const uidTP = useUID();
  const uidHT = useUID();
  const timeFormatOptions = ['hh:mm aa', 'hh:mm a', 'HH:mm'];
  const handleChange = (val, format) => {
    setValue(formatReturnTime(val, format));
    return value;
  };
  return (
    <>
      <Box marginBottom="space60">
        <Combobox
          items={timeFormatOptions}
          labelText="Return time format:"
          onInputValueChange={({inputValue}) => {
            if (inputValue !== undefined) setTimeFormat(inputValue);
          }}
        />
      </Box>
      <Label htmlFor={uidTP}>What time were you born?</Label>
      <TimePicker
        id={uidTP}
        aria-describedby={uidHT}
        onChange={(evt) => {
          handleChange(evt.target.value, timeFormat);
        }}
        {...props}
      />
      <HelpText id={uidHT}>Select a time above.</HelpText>
      <Box marginTop="space60">
        {' '}
        <b>Return value:</b> {value}{' '}
      </Box>
    </>
  );
};
render(<OnChangePicker/>)
`.trim(),U=`
const HasErrorPicker = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidTP}>When does your workday start?</Label>
      <TimePicker id={uidTP} aria-describedby={uidHT} hasError {...props} />
      <HelpText id={uidHT} variant="error">
        Select a time.
      </HelpText>
    </>
  );
};
render(<HasErrorPicker/>)
`.trim(),B=`
const DisabledPicker = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidTP} disabled>
        Set a curfew for your child
      </Label>
      <TimePicker id={uidTP} aria-describedby={uidHT} disabled {...props} />
      <HelpText id={uidHT}>Choose a time.</HelpText>
    </>
  );
};
render(<DisabledPicker/>)
`.trim(),S=`
const ReadOnlyPicker = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidTP}>What&apos;s your favorite time of day?</Label>
      <TimePicker id={uidTP} aria-describedby={uidHT} readOnly value="13:00" {...props} />
      <HelpText id={uidHT}>Choose a time.</HelpText>
    </>
  );
};
render(<ReadOnlyPicker/>)
`.trim(),E=`
const LabelOnlyPicker = (props) => {
  const uidTP = useUID();
  return (
    <>
      <Label htmlFor={uidTP}>What time is it locally?</Label>
      <TimePicker id={uidTP} {...props} />
    </>
  );
};
render(<LabelOnlyPicker/>)
`.trim(),R=`
const StackOfPickers = (props) => {
  const uidTPOne = useUID();
  const uidHTOne = useUID();
  const uidTPTwo = useUID();
  const uidHTTwo = useUID();
  return (
    <Stack orientation="vertical" spacing="space80">
      <Box>
        <Label htmlFor={uidTPOne}>What time is it now?</Label>
        <TimePicker id={uidTPOne} aria-describedby={uidHTOne} {...props} />
        <HelpText id={uidHTOne}>Select a time above.</HelpText>
      </Box>
      <Box>
        <Label htmlFor={uidTPTwo}>What time was it 5 minutes ago?</Label>
        <TimePicker id={uidTPTwo} aria-describedby={uidHTTwo} {...props} />
        <HelpText id={uidHTTwo}>Select a time above.</HelpText>
      </Box>
    </Stack>
  );
};
render(<StackOfPickers/>)
`.trim();var M=i(86874),F=i(40615),z=!0;let N={title:"Time Picker - Components",package:"@twilio-paste/time-picker",description:"A form component used to select a time.",slug:"/components/time-picker/"},O=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:V,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/time-picker",storybookUrl:"/?path=/story/components-time-picker--default-time-picker"}}}),V=[{value:"Guidelines",depth:2},{value:"About Time Picker",depth:3},{value:"Browser support",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Time range picker",depth:3},{value:"DateTime range picker",depth:3},{value:"Time formatting",depth:2},{value:"States",depth:2},{value:"Time Picker with inline error",depth:3},{value:"Disabled Time Picker",depth:3},{value:"Read-only Time Picker",depth:3},{value:"Composition notes",depth:2},{value:"Positioning Time Pickers",depth:3},{value:"Labels and Help Text",depth:3},{value:"Required field indicator",depth:3},{value:"Validation",depth:3},{value:"Errors",depth:3}],W=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},J={meta:N,getStaticProps:O,mdxHeadings:V},G=F.A;function q({components:e,...t}){return(0,a.yg)(G,{...J,...t,components:e,mdxType:"MDXLayout"},(0,a.yg)(W,{scope:{TimePicker:s.A,Label:o.J,useUID:h.GV},noInline:!0,mdxType:"LivePreview"},E),(0,a.yg)("h2",null,"Guidelines"),(0,a.yg)("h3",null,"About Time Picker"),(0,a.yg)("p",null,"The Time Picker is an input field which accepts a value in ",(0,a.yg)("inlineCode",null,"HH:mm")," format."),(0,a.yg)("p",null,"Currently, the Time Picker is built on top of ",(0,a.yg)(r.Mz,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time",showExternal:!0,mdxType:"Anchor"},"the HTML time picker"),", using an ",(0,a.yg)("inlineCode",null,"input")," field with ",(0,a.yg)("inlineCode",null,'type="time"'),`, which comes with some inherent limitations.
In order to release a functional and stable Time Picker for immediate use, we decided to work within these limitations with the intention of updating this package to a custom Time Picker in a future release. The current API was designed to avoid any breaking changes with future versions of the Time Picker.`),(0,a.yg)("p",null,"It is used with the ",(0,a.yg)("a",{parentName:"p",href:"/components/label"},"Label")," and ",(0,a.yg)("a",{parentName:"p",href:"/components/help-text"},"Help Text")," components."),(0,a.yg)("h3",null,"Browser support"),(0,a.yg)("p",null,"Because browsers' implementations of the native time picker vary, this component ",(0,a.yg)("strong",null,"may not be fully accessible")," in all cases. Chrome/Edge, Safari and Firefox all support the Time Picker, but the user experience differs browser-to-browser. Some of those differences are outlined below:"),(0,a.yg)(n.az,{margin:"space70",mdxType:"Box"},(0,a.yg)(m.XI,{scrollHorizontally:!0,variant:"borderless",mdxType:"Table"},(0,a.yg)(m.vc,{mdxType:"TBody"},(0,a.yg)(m.Tr,{verticalAlign:"middle",mdxType:"Tr"},(0,a.yg)(m.Td,{textAlign:"left",mdxType:"Td"},(0,a.yg)("strong",null,"Chrome/Edge"),(0,a.yg)(u.Xy,{mdxType:"UnorderedList"},(0,a.yg)(u.ck,{mdxType:"ListItem"},'Default value is "--:-- --"'),(0,a.yg)(u.ck,{mdxType:"ListItem"},"Clock pop-up is triggered by clicking on the clock icon - clicking on the input field places focus on the value"),(0,a.yg)(u.ck,{mdxType:"ListItem"},"Scrollable time selector pop-up"))),(0,a.yg)(m.Td,{textAlign:"right",mdxType:"Td"},(0,a.yg)(w,{mdxType:"ChromeImage"}))),(0,a.yg)(m.Tr,{verticalAlign:"middle",mdxType:"Tr"},(0,a.yg)(m.Td,{textAlign:"left",mdxType:"Td"},(0,a.yg)("strong",null,"Safari"),(0,a.yg)(u.Xy,{mdxType:"UnorderedList"},(0,a.yg)(u.ck,{mdxType:"ListItem"},"Default value is 12:30 PM"),(0,a.yg)(u.ck,{mdxType:"ListItem"},"No clock icon or time selector pop-up, only usable by keyboard (number or arrow keys)"),(0,a.yg)(u.ck,{mdxType:"ListItem"},"Clicking on the input field places focus on the hour value"))),(0,a.yg)(m.Td,{mdxType:"Td"},(0,a.yg)(D,{mdxType:"SafariImage"}))),(0,a.yg)(m.Tr,{verticalAlign:"middle",mdxType:"Tr"},(0,a.yg)(m.Td,{textAlign:"left",mdxType:"Td"},(0,a.yg)("strong",null,"Firefox"),(0,a.yg)(u.Xy,{mdxType:"UnorderedList"},(0,a.yg)(u.ck,{mdxType:"ListItem"},'Default value is "--:-- --"'),(0,a.yg)(u.ck,{mdxType:"ListItem"},"No clock icon or time selector pop-up, only usable by keyboard (number or arrow keys)"),(0,a.yg)(u.ck,{mdxType:"ListItem"},"Clicking on the input field places focus on the hour value"))),(0,a.yg)(m.Td,{mdxType:"Td"},(0,a.yg)(H,{mdxType:"FirefoxImage"})))))),(0,a.yg)("p",null,"While cross-browser functionality, style and accessibility differences are present, they will not affect the usability of the Time Picker. The API is stable and full usage of the component is encouraged. There are certain use cases not included in the ",(0,a.yg)("inlineCode",null,'input type="time"')," functionality, such as a time range picker. You can find examples of how to recreate those use cases below. If there's a Time Picker use case not covered by the current implementation, feel free to ",(0,a.yg)(r.Mz,{href:"https://github.com/twilio-labs/paste/discussions/new",showExternal:!0,mdxType:"Anchor"},"open a Discussion")," so that we can help you find a solution."),(0,a.yg)("h3",null,"Accessibility"),(0,a.yg)(u.Xy,{mdxType:"UnorderedList"},(0,a.yg)(u.ck,{mdxType:"ListItem"},"Include a visible label on ",(0,a.yg)("strong",null,"all")," Time Pickers."),(0,a.yg)(u.ck,{mdxType:"ListItem"},"Each label must use the ",(0,a.yg)("inlineCode",null,"htmlFor")," prop that matches the ",(0,a.yg)("inlineCode",null,"id")," of the associated input."),(0,a.yg)(u.ck,{mdxType:"ListItem"},"Use one of 3 ways to label a Time Picker:",(0,a.yg)(u.Xy,{marginBottom:"space0",mdxType:"UnorderedList"},(0,a.yg)(u.ck,{mdxType:"ListItem"},"Visible label with ",(0,a.yg)(r.Mz,{href:"#label-props",mdxType:"Anchor"},"Label")," (preferred)"),(0,a.yg)(u.ck,{mdxType:"ListItem"},"Visible label that's associated to the Time Picker with ",(0,a.yg)("inlineCode",null,"aria-labelledby")),(0,a.yg)(u.ck,{mdxType:"ListItem"},"Label directly using ",(0,a.yg)("inlineCode",null,"aria-label")))),(0,a.yg)(u.ck,{mdxType:"ListItem"},"Provide clear identification of required fields in the label or at the start of a form. If you use the required field indicator, include the form key at the start of the form.",(0,a.yg)(u.Xy,{marginBottom:"space0",mdxType:"UnorderedList"},(0,a.yg)(u.ck,{mdxType:"ListItem"},"Use the ",(0,a.yg)("inlineCode",null,"required")," prop to programatically indicate they are required to browsers."))),(0,a.yg)(u.ck,{mdxType:"ListItem"},"Include inline error text with the error icon on any field that errors to make it visually clear that the field changed."),(0,a.yg)(u.ck,{mdxType:"ListItem"},"If the Time Picker has associated Help Text or error text, include the ",(0,a.yg)("inlineCode",null,"aria-describedby")," ","prop on the Time Picker. This should match the ",(0,a.yg)("inlineCode",null,"id")," of the help or error text.")),(0,a.yg)("h2",null,"Examples"),(0,a.yg)("p",null,"The Time Picker component should include the base TimePicker, along with supporting elements to compose an input field that gives users the context they need to successfully fill it out."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Label"),` — A label should be included for every Time Picker and provide a short title for its associated input.`),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Required field indicator"),` — In a form where there are fewer or as many required fields as optional, use a required indicator to show users which fields are required to be filled out.`),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Help text"),` — Text that's placed below the field to help users prevent an error and describe what makes the Time Picker input successful.`)),(0,a.yg)(y.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,a.yg)(y.wz,{mdxType:"CalloutText"},"Make sure to connect the ",(0,a.yg)("inlineCode",null,"Label")," to the ",(0,a.yg)("inlineCode",null,"TimePicker"),". This is done with the ",(0,a.yg)("inlineCode",null,"htmlFor")," prop on the label, and the ",(0,a.yg)("inlineCode",null,"id")," prop on the Time Picker. Those two need to match."),(0,a.yg)(y.wz,{mdxType:"CalloutText"},"If the Time Picker has any associated Help Text, it should also use the ",(0,a.yg)("inlineCode",null,"aria-describedby")," ","prop that equals the ",(0,a.yg)("inlineCode",null,"id")," of the Help Text. This ensures screen readers know the Help Text ties directly to the Time Picker.")),(0,a.yg)(W,{scope:{TimePicker:s.A,Label:o.J,HelpText:l.$,useUID:h.GV,Anchor:r.Mz},noInline:!0,mdxType:"LivePreview"},L),(0,a.yg)("h3",null,"Time range picker"),(0,a.yg)("p",null,"The Time Picker doesn't currently support the selection of time ranges within a single input field, however a time range picker can be easily implemented using two side-by-side Time Pickers."),(0,a.yg)(W,{scope:{TimePicker:s.A,Label:o.J,HelpText:l.$,useUID:h.GV,Anchor:r.Mz,Stack:p.B,Box:n.az},noInline:!0,mdxType:"LivePreview"},I),(0,a.yg)("h3",null,"DateTime range picker"),(0,a.yg)("p",null,"Paste pickers don't currently support date time range selections in a single component, however the same functionality can be implemented using a combobox along with the date range and time range picker solutions. If you'd like to provide your users with pre-determined options before displaying the pickers, use the following example as a jumping off point."),(0,a.yg)(W,{scope:{DatePicker:d.l,TimePicker:s.A,Combobox:g.G3,Label:o.J,HelpText:l.$,useUID:h.GV,Stack:p.B,Box:n.az,CalendarIcon:c.CalendarIcon},noInline:!0,mdxType:"LivePreview"},M.rA),(0,a.yg)("h2",null,"Time formatting"),(0,a.yg)("p",null,"In addition to the Time Picker, this package exports a ",(0,a.yg)("inlineCode",null,"formatReturnTime()")," function that can be used to format the time value that's being ",(0,a.yg)("em",null,"returned")," from the Time Picker."),(0,a.yg)("strong",null,"Note:")," the format of the time being displayed by the Time Picker ",(0,a.yg)("em",null,"cannot")," be changed. The display value is formatted according to the ",(0,a.yg)(r.Mz,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time#time_value_format",showExternal:!0,mdxType:"Anchor"},"locale of the user's browser"),". The parsed ",(0,a.yg)("inlineCode",null,"value")," format, however, which is returned in ",(0,a.yg)("inlineCode",null,"HH:mm")," format (using a 24-hour time format), can be changed.",(0,a.yg)("p",null,"To change the format of the return time value, we recommend using the ",(0,a.yg)("inlineCode",null,"formatReturnTime()")," function on the Time Picker's ",(0,a.yg)("inlineCode",null,"onChange()")," or ",(0,a.yg)("inlineCode",null,"onBlur()")," handler."),(0,a.yg)("p",null,"The function accepts two parameters: (1) the time value that should be formatted (e.g. ",(0,a.yg)("inlineCode",null,"'14:52'"),"), and (2) the desired time format (e.g. ",(0,a.yg)("inlineCode",null,"'mm:hh aa'"),"). It uses a library called ",(0,a.yg)(r.Mz,{href:"https://github.com/date-fns/date-fns",showExternal:!0,mdxType:"Anchor"},"date-fns")," to return the given time in the desired format. Time format must follow the ",(0,a.yg)(r.Mz,{href:"https://date-fns.org/v2.21.3/docs/format",showExternal:!0,mdxType:"Anchor"},"tokens outlined by date-fns"),"."),(0,a.yg)(W,{scope:{TimePicker:s.A,Label:o.J,HelpText:l.$,useUID:h.GV,Anchor:r.Mz,Box:n.az,Combobox:g.G3,formatReturnTime:s.P},noInline:!0,mdxType:"LivePreview"},C),(0,a.yg)("h2",null,"States"),(0,a.yg)("h3",null,"Time Picker with inline error"),(0,a.yg)("p",null,"Change a Time Picker to its error state and add an inline error if the value entered doesn't pass validation requirements."),(0,a.yg)("p",null,"Use ",(0,a.yg)("a",{parentName:"p",href:"/components/help-text"},"Help Text")," to show an inline error below the field to inform a user of any errors in their value. Change the Help Text to ",(0,a.yg)("inlineCode",{parentName:"p"},`variant=“error”`)," and add error copy before the original help text copy."),(0,a.yg)(W,{scope:{TimePicker:s.A,Label:o.J,HelpText:l.$,useUID:h.GV,Anchor:r.Mz},noInline:!0,mdxType:"LivePreview"},U),(0,a.yg)("h3",null,"Disabled Time Picker"),(0,a.yg)("p",null,"Use a disabled Time Picker to show users that they can't interact with it."),(0,a.yg)("p",null,"If you want to show information that can't be edited, use a ",(0,a.yg)("a",{parentName:"p",href:"/components/input#read-only-input"},"read-only")," field or consider another way of showing static information."),(0,a.yg)(W,{scope:{TimePicker:s.A,Label:o.J,HelpText:l.$,useUID:h.GV,Anchor:r.Mz},noInline:!0,mdxType:"LivePreview"},B),(0,a.yg)("h3",null,"Read-only Time Picker"),(0,a.yg)("p",null,"Use a read-only Time Picker when a its value can't be changed, but users should be able to read or apply focus on it."),(0,a.yg)(W,{scope:{TimePicker:s.A,Label:o.J,HelpText:l.$,useUID:h.GV,Anchor:r.Mz},noInline:!0,mdxType:"LivePreview"},S),(0,a.yg)("h2",null,"Composition notes"),(0,a.yg)("p",null,"A Time Picker must have at least a label and an input."),(0,a.yg)(W,{scope:{TimePicker:s.A,Label:o.J,useUID:h.GV},noInline:!0,mdxType:"LivePreview"},E),(0,a.yg)(y.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,a.yg)(y.v,{as:"h3",mdxType:"CalloutHeading"},"Quick note about Time Picker DOM methods"),(0,a.yg)(y.wz,{mdxType:"CalloutText"},"There are three methods that come with the HTML picker: ",(0,a.yg)("inlineCode",null,"stepUp()"),","," ",(0,a.yg)("inlineCode",null,"stepDown()")," and ",(0,a.yg)("inlineCode",null,"select()"),". Usage of these methods is possible, but we ",(0,a.yg)("strong",null,"do not")," encourage it, as they may not be supported in future versions of the Time Picker. Use at your own risk!")),(0,a.yg)("h3",null,"Positioning Time Pickers"),(0,a.yg)("p",null,"When using multiple Time Pickers, stack them vertically with ",(0,a.yg)("inlineCode",{parentName:"p"},"$space-80")," spacing between each field. To stack them, you can use either a ",(0,a.yg)(r.Mz,{href:"/primitives/box",mdxType:"Anchor"},"Box")," or a ",(0,a.yg)(r.Mz,{href:"/components/stack",mdxType:"Anchor"},"Stack")," (as seen in the example below)."),(0,a.yg)(W,{scope:{TimePicker:s.A,Label:o.J,HelpText:l.$,useUID:h.GV,Anchor:r.Mz,Box:n.az,Stack:p.B},noInline:!0,mdxType:"LivePreview"},R),(0,a.yg)("p",null,"Avoid placing multiple pickers on the same horizontal row to help make it easier to scan a page vertically. Use a ",(0,a.yg)(r.Mz,{href:"/components/grid",mdxType:"Anchor"},"Grid")," if you need to place them horizontally."),(0,a.yg)("h3",null,"Labels and Help Text"),(0,a.yg)("p",null,"Labels should clearly describe the time value being requested. They should be concise and descriptive, not instructional. To do this:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'Use Help Text to provide instruction if needed. For example, don\'t use "Enter the date you wish to receive your bill below" as label text. Instead, use "Billing date" as a label and "Your account will be automatically billed on the above date." as Help Text.'),(0,a.yg)("li",{parentName:"ul"},'Avoid articles ("a", "the") and punctuation. For example, use "SIM registration code" rather than "The SIM registration code".')),(0,a.yg)("p",null,'To support internationalization, avoid starting a sentence with the label and using the field to finish it since sentence structures vary across languages. For example, use "Call log expiration time" or "How long should logs be stored?". Don\'t use "Remove logs after:".'),(0,a.yg)("h3",null,"Required field indicator"),(0,a.yg)("p",null,"Use required indicators to show users which fields they must fill out."),(0,a.yg)(W,{scope:{TimePicker:s.A,Label:o.J,HelpText:l.$,useUID:h.GV,Anchor:r.Mz},noInline:!0,mdxType:"LivePreview"},L),(0,a.yg)("h3",null,"Validation"),(0,a.yg)("p",null,"Validate Time Picker fields on form submission."),(0,a.yg)("p",null,"Validating a field input when the user leaves the current field (on blur) can be helpful to check for syntax errors. However, this can be frustrating to users who tab through controls to navigate a page, and to screen reader users, who might not be able to detect that an error occurred on blur."),(0,a.yg)("p",null,"Don't prevent form submission by disabling the submit button. A disabled button cannot be detected by assistive technologies. Use error messages to explain what information is missing or incorrect."),(0,a.yg)("p",null,"Usage of the ",(0,a.yg)("inlineCode",null,"min")," and ",(0,a.yg)("inlineCode",null,"max")," properties on Time Picker is discouraged as browser support is varied and limited."),(0,a.yg)("h3",null,"Errors"),(0,a.yg)("p",null,"Use inline error text to explain how to fix an error. For additional guidance on how to compose error messages, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,a.yg)("p",null,"Use Help Text to help users avoid errors."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Situation"),(0,a.yg)("th",{parentName:"tr",align:null},"Recommended phrasing"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"User didn't pick a time"),(0,a.yg)("td",{parentName:"tr",align:null},"Select a time.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"The end time is before the start date"),(0,a.yg)("td",{parentName:"tr",align:null},"The end time occurs before the start time.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"The start date is after the end date"),(0,a.yg)("td",{parentName:"tr",align:null},"The start time occurs after the end time.")))),(0,a.yg)(y.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,a.yg)(y.v,{as:"h4",mdxType:"CalloutHeading"},"Time Picker and ",(0,a.yg)("inlineCode",null,"placeholder")),(0,a.yg)(y.wz,{mdxType:"CalloutText"},"Because Time Picker has a default display value of ",(0,a.yg)("inlineCode",null,"--:-- --")," (and defaults to"," ",(0,a.yg)("inlineCode",null,"12:30 PM"),"on Safari), any value that gets passed into ",(0,a.yg)("inlineCode",null,"placeholder")," will be overwritten (and effectively ignored).")))}q.isMDXComponent=!0},40615:(e,t,i)=>{"use strict";i.d(t,{A:()=>g});var a=i(72387),r=i(76127),n=i(95669),o=i.n(n),l=i(81278);i(55729);var s=i(10511),d=i(43084),c=i(10732),u=i(62887),p=i(63437),m=i(38992);let h={h1:()=>null},g=({children:e,meta:t,navigationData:i,data:n,mdxHeadings:g,pageHeaderData:{categoryRoute:y,githubUrl:T,storybookUrl:b}})=>{let f=t.title?`${t.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,x=t.description||m.DZ.DESCRIPTION,k=(0,l.useRouter)();return(0,a.FD)(p.T,{navigationData:i,children:[(0,a.FD)(o(),{children:[(0,a.Y)("title",{children:f}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${k.pathname}`}),(0,a.Y)("meta",{name:"description",content:x},"description")]}),(0,a.FD)(s.s,{children:[(0,a.Y)(u.c,{categoryRoute:y,githubUrl:T,storybookUrl:b,data:n}),(0,a.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,a.Y)(c.i,{data:g}),(0,a.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,a.Y)(d.Q,{componentOverrides:t.package?h:{},children:e})})]})]})]})}},52121:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CalendarIcon:()=>o});var a=i(36669),r=i(55729),n=i(96316);let o=r.forwardRef(({as:e,display:t,element:i="ICON",size:o,color:l,title:s,decorative:d},c)=>{let u=`CalendarIcon-${(0,a.GV)()}`;if(!d&&null==s)throw Error("[CalendarIcon]: Missing a title for non-decorative icon.");return r.createElement(n.IconWrapper,{as:e,display:t,element:i,size:o,color:l,ref:c},r.createElement("svg",{role:"img","aria-hidden":d,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":u},s?r.createElement("title",{id:u},s):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.5 2a.5.5 0 01.492.41L14 2.5v1.499L17.5 4a.5.5 0 01.492.41L18 4.5v13a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5L6 3.999V2.5a.5.5 0 01.992-.09L7 2.5v1.499h6V2.5a.5.5 0 01.5-.5zm3.499 6.999h-14v8h14V9zM5.745 14l.118.008a.748.748 0 01.325.133l.091.077a.75.75 0 11-.63-.211L5.745 14zm4.252 0l.118.009a.75.75 0 01.324.132l.09.077a.75.75 0 11-.63-.212L9.997 14zm4.253 0l.116.009a.75.75 0 01.323.132l.09.077a.75.75 0 11-.53-.218zm-8.5-3.5l.115.008a.75.75 0 01.324.134l.091.077a.75.75 0 11-.53-.22zm8.5 0l.094.005a.75.75 0 11-.188 0l.094-.006zm-4.25 0l.094.005a.75.75 0 11-.194.001l.1-.007zM6 4.998H3l-.001 3h14v-3H14v1a.5.5 0 01-.992.09L13 6V5H7v1a.5.5 0 01-.992.09L6 6V5z"})))});o.displayName="CalendarIcon"},62280:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/time-picker",function(){return i(37946)}])},86874:(e,t,i)=>{"use strict";i.d(t,{Hr:()=>s,IC:()=>a,Ur:()=>r,Uv:()=>u,oy:()=>n,rA:()=>p,rN:()=>c,t3:()=>l,xC:()=>d,xg:()=>o});let a=`
const RequiredDatePicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP} required>
        When was the abolition of slavery announced in Galveston Bay, Texas (also known as Juneteenth)?
      </Label>
      <DatePicker required id={uidDP} aria-describedby={uidHT} {...props} />
      <HelpText id={uidHT}>
        Enter a date above.
        <Anchor href="https://nmaahc.si.edu/blog-post/historical-legacy-juneteenth" showExternal>
          Read more about Juneteenth
        </Anchor>
      </HelpText>
    </>
  );
};
render(<RequiredDatePicker />)
`.trim(),r=`
const DateRangePicker = (props) => {
  const [startDate, setStartDate] = React.useState('');
  const startUidDP = useUID();
  const endUidDP = useUID();
  return (
    <Stack orientation="horizontal" spacing="space80">
      <Box>
      <Label htmlFor={startUidDP}>Start date</Label>
      <DatePicker id={startUidDP} onChange={(evt) => setStartDate(evt.target.value)} {...props} />
      </Box>
      <Box>
      <Label htmlFor={endUidDP}>End date</Label>
      <DatePicker id={endUidDP} min={startDate} {...props} />
      </Box>
    </Stack>
  );
}
render(<DateRangePicker />)`.trim(),n=`
const OnChangePicker = (props) => {
  const [value, setValue] = React.useState('');
  const [dateFormat, setDateFormat] = React.useState('MM dd yy');
  const uidDP = useUID();
  const uidHT = useUID();
  const dateFormatOptions = ['MM dd yyyy', 'MMMM do yyyy', 'EEEEEE MMM do yy', 'MM/dd/yyyy'];
  const handleChange = (val, format) => {
    setValue(formatReturnDate(val, format));
    return value;
  };
  return (
    <>
      <Box marginBottom="space60">
        <Combobox
          items={dateFormatOptions}
          labelText="Return date format:"
          onInputValueChange={({inputValue}) => {
            if (inputValue !== undefined) setDateFormat(inputValue);
          }}
        />
      </Box>
      <Label htmlFor={uidDP}>On what day was Apartheid legislation repealed in South Africa?</Label>
      <DatePicker
        id={uidDP}
        aria-describedby={uidHT}
        onChange={(evt) => handleChange(evt.target.value, dateFormat)}
        {...props}
      />
      <HelpText id={uidHT}>
        Enter a date above.
        <Anchor href="https://www.sahistory.org.za/article/history-apartheid-south-africa" showExternal>
          Read more about Apartheid in South Africa
        </Anchor>
      </HelpText>
      <Box marginTop="space60">
        <b>Return value </b>(will only change when the onChange event fires): {value}
      </Box>
    </>
  );
}
render(<OnChangePicker />)
`.trim(),o=`
const HasErrorPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When did the Jallianwala Bagh massacre take place?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} hasError {...props} />
      <HelpText id={uidHT} variant="error">
        Enter a date above.
        <Anchor
          href="https://www.hindustantimes.com/india-news/jallianwala-bagh-massacre-here-is-how-the-deadly-incident-transpired-102-years-ago-101618276752335.html"
          showExternal
        >
          Read more about the Jallianwala Bagh massacre
        </Anchor>
      </HelpText>
    </>
  );
}
render(<HasErrorPicker />)
`.trim(),l=`
const DisabledPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP} disabled>
        When did the Supreme Court ban anti-miscegenation laws (in Loving v. Virginia)?
      </Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} disabled defaultValue="1967-06-12" {...props} />
      <HelpText id={uidHT}>
        <Anchor href="https://www.oyez.org/cases/1966/395" showExternal>
          Read more about Loving Day
        </Anchor>
      </HelpText>
    </>
  );
}
render(<DisabledPicker />)`.trim(),s=`
const ReadOnlyPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>In what month was the Combahee River Collective (CRC) Statement published?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} readOnly defaultValue="1977-04-01" {...props} />
      <HelpText id={uidHT}>
        {' '}
        <Anchor href="https://combaheerivercollective.weebly.com/" showExternal>
          Read more about the CRC
        </Anchor>{' '}
      </HelpText>
    </>
  );
}
render(<ReadOnlyPicker />)
`.trim(),d=`
const LabelOnlyPicker = (props) => {
  const uidDP = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When does this year&apos;s LGBTQ+ Pride month begin in the US?</Label>
      <DatePicker id={uidDP} {...props} />
    </>
  );
}
render(<LabelOnlyPicker />)
`.trim(),c=`
const StackOfPickers = (props) => {
  const uidDPOne = useUID();
  const uidHTOne = useUID();
  const uidDPTwo = useUID();
  const uidHTTwo = useUID();
  return (
    <Stack orientation="vertical" spacing="space80">
      <Box>
        <Label htmlFor={uidDPOne}>When was the NAACP Legal Defense Fund (LDF) founded?</Label>
        <DatePicker id={uidDPOne} aria-describedby={uidHTOne} {...props} />
        <HelpText id={uidHTOne}>
          Enter a date above.
          <Anchor href="https://www.naacpldf.org/about-us/history/" showExternal>
            Read more about the NAACP LDF
          </Anchor>
        </HelpText>
      </Box>
      <Box>
        <Label htmlFor={uidDPTwo}>
          When did Thurgood Marshall become the first African American Supreme Court Justice?
        </Label>
        <DatePicker id={uidDPTwo} aria-describedby={uidHTTwo} {...props} />
        <HelpText id={uidHTTwo}>
          Enter a date above.
          <Anchor
            href="https://constitutioncenter.org/blog/thurgood-marshalls-unique-supreme-court-legacy"
            showExternal
          >
            Read more about Marshall&apos;s legacy
          </Anchor>
        </HelpText>
      </Box>
    </Stack>
  );
}
render(<StackOfPickers/>)
`.trim(),u=`
const MinAndMaxPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When was Grace Hopper awarded the Presidential Medal of Freedom?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} min="2016-10-15" max="2016-10-25" {...props} />
      <HelpText id={uidHT}>
        Hint: it was awarded posthumously by President Obama.
        <Anchor
          href="https://news.yale.edu/2017/02/10/grace-murray-hopper-1906-1992-legacy-innovation-and-service"
          showExternal
        >
          Read more about Grace Hopper
        </Anchor>
      </HelpText>
    </>
  );
}
render(<MinAndMaxPicker />)
`.trim(),p=`
const DateTimeRangePicker = (props) => {
  const [selectedItem, setSelectedItem] = React.useState('')
  const uidStartDP = useUID();
  return selectedItem === "Custom" ? (
    <>
      <Box margin="space60">
        <Label htmlFor="uidStartDP">Date range</Label>
      </Box>
      <Stack orientation="horizontal" spacing="space80">
        <Box marginLeft="space60">
          <DatePicker id="uidStartDP" aria-describedby="start-date" />
          <HelpText id="start-date">Start date</HelpText>
        </Box>
        <Box>
          <TimePicker aria-describedby="start-time" />
          <HelpText id="start-time">Start time</HelpText>
        </Box>
      </Stack>
      <Stack orientation="horizontal" spacing="space80">
        <Box marginLeft="space60" marginTop="space60">
          <DatePicker aria-describedby="end-date" />
          <HelpText id="end-date">End date</HelpText>
        </Box>
        <Box marginTop="space60">
          <TimePicker aria-describedby="end-time" />
          <HelpText id="end-time">End time</HelpText>
        </Box>
      </Stack>
    </>
    ) : (
      <Box margin="space60">
        <Combobox
          insertAfter={<CalendarIcon color="colorTextIcon" decorative />}
          items={["Last 7 days", "Last 30 days", "Last 6 months", "Custom"]}
          labelText="Date range"
          onSelectedItemChange={(changes) => {
            setSelectedItem(changes.selectedItem)
          }}
        />
      </Box>
    )
  }

render(<DateTimeRangePicker />)
`.trim()}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,3875,8409,7442,636,6593,8792],()=>e(e.s=62280)),_N_E=e.O()}]);