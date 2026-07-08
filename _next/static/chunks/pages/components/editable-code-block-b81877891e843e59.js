(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6467],{13176:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/editable-code-block",function(){return a(53560)}])},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var o=a(72387),l=a(76127),r=a(95669),i=a.n(r),n=a(81278);a(55729);var d=a(10511),p=a(43084),c=a(10732),s=a(62887),u=a(63437),g=a(38992);let y={h1:()=>null},h=({children:e,meta:t,navigationData:a,data:r,mdxHeadings:h,pageHeaderData:{categoryRoute:m,githubUrl:b,storybookUrl:k}})=>{let C=t.title?`${t.title} - ${g.DZ.TITLE}`:g.DZ.TITLE,f=t.description||g.DZ.DESCRIPTION,E=(0,n.useRouter)();return(0,o.FD)(u.T,{navigationData:a,children:[(0,o.FD)(i(),{children:[(0,o.Y)("title",{children:C}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${E.pathname}`}),(0,o.Y)("meta",{name:"description",content:f},"description")]}),(0,o.FD)(d.s,{children:[(0,o.Y)(s.c,{categoryRoute:m,githubUrl:b,storybookUrl:k,data:r}),(0,o.FD)(l.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(c.i,{data:h}),(0,o.Y)(l.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(p.Q,{componentOverrides:t.package?y:{},children:e})})]})]})]})}},53560:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>i,default:()=>g,getStaticProps:()=>d,mdxHeadings:()=>p,meta:()=>n}),a(55729);var o=a(11885),l=a(89564),r=a(40615),i=!0;let n={title:"Editable CodeBlock",package:"@twilio-paste/editable-code-block",description:"An Editable Code Block is a text field that allows users to enter formatted code.",slug:"/components/editable-code-block/"},d=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:p,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/editable-code-block",storybookUrl:"/?path=/story/components-editable-code-block--default"}}}),p=[{value:"Guidelines",depth:2},{value:"About Editable Code Block",depth:3},{value:"Accessibility",depth:3},{value:"Keyboard interaction",depth:4},{value:"Examples",depth:2},{value:"Default",depth:3},{value:"Simple Editable Code Block",depth:3},{value:"Editable Code Block with minimap",depth:3},{value:"States",depth:2},{value:"Syntax errors",depth:3},{value:"Custom line-specific errors",depth:3},{value:"Generic errors",depth:3},{value:"Read only",depth:3},{value:"Composition notes",depth:2},{value:"When to use Editable Code Block",depth:2}],c=function(e){return console.warn("Component StoryPreview was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},s={meta:n,getStaticProps:d,mdxHeadings:p},u=r.A;function g({components:e,...t}){return(0,o.yg)(u,{...s,...t,components:e,mdxType:"MDXLayout"},(0,o.yg)(c,{title:"Default Editable Code Block",storyID:"components-editable-code-block--default",code:`<EditableCodeBlockWrapper>
  <EditableCodeBlockHeader>Typescript Example</EditableCodeBlockHeader>
  <EditableCodeBlock
    height="45vh"
    defaultLanguage="typescript"
    defaultValue={TypeScriptExample}
  />
</EditableCodeBlockWrapper>`,mdxType:"StoryPreview"}),(0,o.yg)("h2",null,"Guidelines"),(0,o.yg)("h3",null,"About Editable Code Block"),(0,o.yg)("p",null,`Editable Code Block allows basic text input features for code-editing experiences on the
web. To help users differentiate this from a static `,(0,o.yg)("a",{parentName:"p",href:"/components/code-block"},"Code Block"),`,
Editable Code Block enables line numbers, code folding, and indentation guides by default.`),(0,o.yg)("p",null,"This component is built on top of the Paste ",(0,o.yg)("a",{parentName:"p",href:"/core/libraries/code-editor"},"Code Editor library"),`,
which wraps the `,(0,o.yg)("a",{parentName:"p",href:"https://microsoft.github.io/monaco-editor/"},"Monaco Editor"),` used by Visual
Studio Code. If you’re looking for more functionality than what’s provided through Editable
Code Block, use the Code Editor library instead.`),(0,o.yg)("p",null,"This component uses the ",(0,o.yg)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"},"Night Owl theme"),`,
an accessible theme by Sarah Drasner for people with colorblindness and low vision situations.`),(0,o.yg)("h3",null,"Accessibility"),(0,o.yg)("p",null,`Because Editable Code Block takes text input, it follows similar labeling accessibility
guidelines as other form elements:`),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Include a label on ",(0,o.yg)("em",{parentName:"li"},"all")," Editable Code Blocks. Use one of these ways to label an Editable Code Block:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#editablecodeblockheader-props"},"Editable Code Block Header")," (preferred). Use the correct heading level in Editable Code Block Header."),(0,o.yg)("li",{parentName:"ul"},"Visible label (for example, a page heading) that's associated to the input with ",(0,o.yg)("inlineCode",{parentName:"li"},"aria-labelledby")),(0,o.yg)("li",{parentName:"ul"},"Visible label with ",(0,o.yg)("a",{parentName:"li",href:"/components/label"},"Label")),(0,o.yg)("li",{parentName:"ul"},"Label directly using ",(0,o.yg)("inlineCode",{parentName:"li"},"aria-label")))),(0,o.yg)("li",{parentName:"ul"},"Each label must use the ",(0,o.yg)("inlineCode",{parentName:"li"},"htmlFor")," prop that equals the ",(0,o.yg)("inlineCode",{parentName:"li"},"id")," of the associated Input.")),(0,o.yg)("p",null,`Since Editable Code Block takes up more vertical space than typical form elements,
any help or error content should appear before the component by using an
introductory `,(0,o.yg)("a",{parentName:"p",href:"/components/paragraph"},"Paragraph")," or ",(0,o.yg)("a",{parentName:"p",href:"#generic-errors"},"Error Callout"),"."),(0,o.yg)("h4",null,"Keyboard interaction"),(0,o.yg)("p",null,"Excerpts from the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Microsoft/monaco-editor/wiki/Monaco-Editor-Accessibility-Guide"},"Monaco accessibility guide"),":"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Action"),(0,o.yg)("th",{parentName:"tr",align:null},"Keyboard shortcut"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Open the Command Palette"),(0,o.yg)("td",{parentName:"tr",align:null},"F1 or Alt+F1"),(0,o.yg)("td",{parentName:"tr",align:null},`Provides “an exhaustive list of commands in the Command Palette…, so you can use the editor without using the mouse.”`)),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Insert Tab character"),(0,o.yg)("td",{parentName:"tr",align:null},"Tab"),(0,o.yg)("td",{parentName:"tr",align:null},`“Inserts the Tab character (or spaces depending on the indentation setting) and does not navigate to the next focusable element on the page.”`)),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Toggle tab trapping"),(0,o.yg)("td",{parentName:"tr",align:null},"Ctrl+Shift+M or Ctrl+M"),(0,o.yg)("td",{parentName:"tr",align:null},`“Subsequent Tab keys will move focus out of the editor.”`)),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Go to Next Error or Warning"),(0,o.yg)("td",{parentName:"tr",align:null},"F8"),(0,o.yg)("td",{parentName:"tr",align:null})),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Go to Previous Error or Warning"),(0,o.yg)("td",{parentName:"tr",align:null},"Shift+F8"),(0,o.yg)("td",{parentName:"tr",align:null})),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Show accessibility help"),(0,o.yg)("td",{parentName:"tr",align:null},"Option+F1, Alt+F1, or Ctrl+F1"),(0,o.yg)("td",{parentName:"tr",align:null},`Shows a “dialog…to find out the current position in the editor and to check the state of various accessibility options. The editor can be dynamically optimized for screen reader software from this dialog.”`)))),(0,o.yg)("h2",null,"Examples"),(0,o.yg)("h3",null,"Default"),(0,o.yg)("p",null,"The default Editable Code Block includes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},`An Editable Code Block Header: Contains a logical label at the correct heading level
that describes what users need to put in the code block and/or the language used.`),(0,o.yg)("li",{parentName:"ul"},`Line numbers: Helps users identify errors and cross-reference with existing code.
Use line numbers when the expected input is longer than 5 lines.`),(0,o.yg)("li",{parentName:"ul"},`Indentation guides and code folding: Helps users read long blocks of code and
troubleshoot errors.`)),(0,o.yg)(c,{title:"Default Editable Code Block",storyID:"components-editable-code-block--default",code:`<EditableCodeBlockWrapper>
  <EditableCodeBlockHeader>Typescript Example</EditableCodeBlockHeader>
  <EditableCodeBlock
    height="45vh"
    defaultLanguage="typescript"
    defaultValue={TypeScriptExample}
  />
</EditableCodeBlockWrapper>`,mdxType:"StoryPreview"}),(0,o.yg)("h3",null,"Simple Editable Code Block"),(0,o.yg)("p",null,"Remove line numbers, indentation guides, and code folding from Editable Code Block only when:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Your page layout makes it visually clear to the user that the code block is editable, ",(0,o.yg)("em",{parentName:"li"},"and")),(0,o.yg)("li",{parentName:"ul"},"The expected code input is simple, like a short snippet of JSON.")),(0,o.yg)(c,{title:"Simple Editable Code Block",storyID:"components-editable-code-block--no-special-features",code:`<EditableCodeBlockWrapper>
  <EditableCodeBlockHeader>Simple Editable Code Block</EditableCodeBlockHeader>
  <EditableCodeBlock
    height="45vh"
    defaultLanguage="typescript"
    lineNumbers="off"
    folding={false}
    indentationGuide={false}
    defaultValue={TypeScriptExample}
  />
</EditableCodeBlockWrapper>`,mdxType:"StoryPreview"}),(0,o.yg)("h3",null,"Editable Code Block with minimap"),(0,o.yg)("p",null,"For large files, use a minimap to help users navigate the code block."),(0,o.yg)(c,{title:"Editable Code Block with minimap",storyID:"components-editable-code-block--minimap",code:`<EditableCodeBlockWrapper>
  <EditableCodeBlockHeader>Minimap example</EditableCodeBlockHeader>
  <EditableCodeBlock height="45vh" defaultLanguage="typescript" showMinimap defaultValue={TypeScriptExample} />
</EditableCodeBlockWrapper>`,mdxType:"StoryPreview"}),(0,o.yg)("h2",null,"States"),(0,o.yg)("h3",null,"Syntax errors"),(0,o.yg)("p",null,"Monaco Editor will detect and show syntax errors out of the box."),(0,o.yg)(c,{title:"Syntax error example in Editable Code Block",storyID:"components-editable-code-block--syntax-error",code:`<EditableCodeBlockWrapper>
  <EditableCodeBlockHeader>Syntax error example</EditableCodeBlockHeader>
  <EditableCodeBlock
    height="45vh"
    defaultLanguage="typescript"
    defaultValue={CodeStringWithSyntaxError}
  />
</EditableCodeBlockWrapper>`,mdxType:"StoryPreview"}),(0,o.yg)("h3",null,"Custom line-specific errors"),(0,o.yg)("p",null,"Show line-specific errors to help users pinpoint what line of code they need to fix."),(0,o.yg)("p",null,"For additional guidance on how to compose error messages, refer to the ",(0,o.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,o.yg)(c,{title:"Custom line-specific errors in Editable Code Block",storyID:"components-editable-code-block--custom-inline-error",code:`<EditableCodeBlockWrapper>
  <EditableCodeBlockHeader>Custom inline error example (try hovering it)</EditableCodeBlockHeader>
  <EditableCodeBlock
    height="45vh"
    onChange={(value) => console.log(value)}
    inlineErrorRange={{
      startLineNumber: 3,
      endLineNumber: 3,
      startColumn: 7,
      endColumn: 13,
    }}
    inlineErrorIsWholeLine={false}
    inlineErrorHoverMessage={{value: '"id" can only be a string type.'}}
    defaultLanguage="typescript"
    defaultValue={TypeScriptExample}
  />
</EditableCodeBlockWrapper>`,mdxType:"StoryPreview"}),(0,o.yg)("h3",null,"Generic errors"),(0,o.yg)("p",null,`If there’s an error that can’t be traced to specific line numbers, use a `,(0,o.yg)("a",{parentName:"p",href:"/components/callout"},"Callout"),"."),(0,o.yg)("p",null,"For additional guidance on how to compose error messages, refer to the ",(0,o.yg)("a",{parentName:"p",href:"/patterns/error-state"},"error state pattern"),"."),(0,o.yg)(c,{title:"Generic errors in Editable Code Block",storyID:"components-editable-code-block--generic-error",code:`<Stack orientation="vertical" spacing="space40">
  <Callout variant="error">
    <CalloutHeading as="h3">401 Unauthorized Request</CalloutHeading>
    <CalloutText>Please provide a valid API key.</CalloutText>
  </Callout>
  <EditableCodeBlockWrapper>
    <EditableCodeBlockHeader>Generic error example</EditableCodeBlockHeader>
    <EditableCodeBlock height="45vh" defaultLanguage="typescript" defaultValue="const API_KEY = null;" />
  </EditableCodeBlockWrapper>
</Stack>`,mdxType:"StoryPreview"}),(0,o.yg)("h3",null,"Read only"),(0,o.yg)("p",null,"Only if the user doesn't have permission to edit the code, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"readOnly"),` prop to
make the Editable Code Block read-only. In most cases, use the
`,(0,o.yg)("a",{parentName:"p",href:"/components/code-block"},"Code Block")," component instead to show static code."),(0,o.yg)(c,{title:"Read-Only Editable Code Block",storyID:"components-editable-code-block--read-only",code:`<EditableCodeBlockWrapper>
  <EditableCodeBlockHeader>ReadOnly Example</EditableCodeBlockHeader>
  <EditableCodeBlock height="45vh" readOnly defaultLanguage="typescript" defaultValue={TypeScriptExample} />
</EditableCodeBlockWrapper>`,mdxType:"StoryPreview"}),(0,o.yg)("h2",null,"Composition notes"),(0,o.yg)("p",null,`Ensure the surrounding page contains any information required to successfully use
the editor. For example, include the expected language or any input constraints.`),(0,o.yg)("p",null,`Supporting content can be placed before or next to an Editable Code Block by using
an introductory `,(0,o.yg)("a",{parentName:"p",href:"/components/paragraph"},"Paragraph"),", ",(0,o.yg)("a",{parentName:"p",href:"/components/callout"},"Callout"),`,
or `,(0,o.yg)("a",{parentName:"p",href:"/components/card"},"Card"),"."),(0,o.yg)("h2",null,"When to use Editable Code Block"),(0,o.yg)(l.l,{mdxType:"DoDont"},(0,o.yg)(l.Do,{title:"Do",body:"Use Editable Code Block for a multi-line code input.",mdxType:"Do"}),(0,o.yg)(l.w,{title:"Don't",body:"Don’t use Textarea for a multi-line code input. The monospace formatting and line numbers of Editable Code Block can help a user check that their code is entered correctly.",mdxType:"Dont"})),(0,o.yg)(l.l,{mdxType:"DoDont"},(0,o.yg)(l.Do,{title:"Do",body:"Pair Editable Code Block with a visible label. This can be the Editable Code Block Header, an associated page Heading, or Label.",mdxType:"Do"}),(0,o.yg)(l.w,{title:"Don't",body:"Don’t use an Editable Code Block without clear, contextual guidance or links to documentation. Provide immediate feedback or code previews when possible.",mdxType:"Dont"})))}g.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=13176)),_N_E=e.O()}]);