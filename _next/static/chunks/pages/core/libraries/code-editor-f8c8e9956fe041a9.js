(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7343],{15780:(e,t,o)=>{"use strict";o.d(t,{A:()=>h});var a=o(72387),i=o(95669),r=o.n(i),n=o(81278);o(55729);var d=o(10511),l=o(43084),s=o(63437),p=o(38992);let c={h1:()=>null},h=({children:e,meta:t,navigationData:o})=>{let i=t.title?`${t.title} - ${p.DZ.TITLE}`:p.DZ.TITLE,h=t.description||p.DZ.DESCRIPTION,y=(0,n.useRouter)();return(0,a.FD)(s.T,{navigationData:o,children:[(0,a.FD)(r(),{children:[(0,a.Y)("title",{children:i}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${y.pathname}`}),(0,a.Y)("meta",{name:"description",content:h},"description")]}),(0,a.Y)(d.s,{children:(0,a.Y)(l.Q,{componentOverrides:t.package?c:{},children:e})})]})}},35788:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/libraries/code-editor",function(){return o(43539)}])},43539:(e,t,o)=>{"use strict";o.r(t),o.d(t,{__N_SSG:()=>c,default:()=>v,getStaticProps:()=>y,mdxHeadings:()=>m,meta:()=>h}),o(55729);var a=o(11885),i=o(97215),r=o(28019);let n=JSON.parse('{"UU":"@twilio-paste/code-editor-library","rE":"3.0.1","h_":"A library to display and make changes to large blocks of code."}');var d=o(38992),l=o(15780),s=o(4073),p=o(54652),c=!0;let h={title:"Code Editor",package:"@twilio-paste/code-editor-library",description:"A library to display and make changes to large blocks of code.",slug:"/core/libraries/code-editor/"},y=async()=>({props:{navigationData}}),m=[{value:"About",depth:2},{value:"Installation",depth:3},{value:"Examples",depth:2},{value:"Basic JavaScript editor",depth:3},{value:"Code Editor with PasteTheme",depth:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},g=u("GenericHeader"),b=u("PageAside"),w=u("StoryPreview"),T={meta:h,getStaticProps:y,mdxHeadings:m},f=l.A;function v({components:e,...t}){return(0,a.yg)(f,{...T,...t,components:e,mdxType:"MDXLayout"},(0,a.yg)(g,{name:h.title,categoryRoute:d.t4.LIBRARIES,storybookUrl:"/?path=/story/libraries-code-editor-editor--",githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-libraries/code-editor",packageName:n.UU,version:n.rE,description:n.h_,mdxType:"GenericHeader"},(0,a.yg)(i.iD,{mdxType:"PageHeaderSeparator"},(0,a.yg)(r.w,{orientation:"horizontal",mdxType:"Separator"}))),(0,a.yg)("contentwrapper",null,(0,a.yg)(b,{data:m,mdxType:"PageAside"}),(0,a.yg)("content",null,(0,a.yg)("h2",null,"About"),(0,a.yg)("p",null,"The Code Editor library is the code editor that powers the stylized ",(0,a.yg)("a",{parentName:"p",href:"/components/editable-code-block"},"Editable Code Block")," component. It allows for full code-editing functionality on the web, including syntax highlighting and displaying line numbers. "),(0,a.yg)("p",null,"This library is built on top of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/suren-atoyan/monaco-react"},"monaco-react"),`, which wraps the
`,(0,a.yg)("a",{parentName:"p",href:"https://github.com/microsoft/monaco-editor"},"Monaco Editor"),". The library exposes a theme for use in Twilio products, aptly called the ",(0,a.yg)("inlineCode",{parentName:"p"},"PasteTheme"),`. This theme is based on the
`,(0,a.yg)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=sdras.night-owl&WT.mc_id=github-theme-sdras"},"Night Owl theme by Sarah Drasner"),"."),(0,a.yg)(p.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,a.yg)(p.v,{as:"h3",mdxType:"CalloutHeading"},"Are you looking for stylized UI components?"),(0,a.yg)(p.wz,{mdxType:"CalloutText"},"For fully styled components, use the ",(0,a.yg)(s.Mz,{href:"https://paste.twilio.design/components/editable-code-block",mdxType:"Anchor"},"Editable Code Block"),". Or if you don't need editing functionality, use the ",(0,a.yg)(s.Mz,{href:"https://paste.twilio.design/components/code-block",mdxType:"Anchor"},"Code Block"),".")),(0,a.yg)("h3",null,"Installation"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/code-editor-library - or - yarn add @twilio-paste/core
`)),(0,a.yg)("h2",null,"Examples"),(0,a.yg)("h3",null,"Basic JavaScript editor"),(0,a.yg)(w,{title:"Basic JavaScript editor",storyID:"libraries-code-editor-editor--javascript-editor",code:`<CodeEditor
  height="90vh"
  defaultLanguage="javascript"
  defaultValue={JavascriptExample}
/>`,mdxType:"StoryPreview"}),(0,a.yg)("h3",null,"Code Editor with PasteTheme"),(0,a.yg)(w,{title:"Code Editor with PasteTheme",storyID:"libraries-code-editor-editor--paste-theme-editor",code:`
const handleEditorDidMount = (editor: Editor.IStandaloneCodeEditor, monaco: Monaco): void => {
  monaco.editor.defineTheme('paste', CodeEditorPasteTheme);
  monaco.editor.setTheme('paste');
};
const PasteThemeEditor = (): React.ReactNode => {
  return (
    <CodeEditor
      onMount={handleEditorDidMount}
      options={{
        scrollBeyondLastLine: false,
        readOnly: false,
        wordWrap: 'wordWrapColumn',
        wordWrapColumn: 120,
        scrollbar: {
          verticalScrollbarSize: 8,
          horizontalScrollbarSize: 8,
        },
      }}
      height="70vh"
      defaultLanguage="typescript"
      defaultValue={TypescriptExample}
    />
  );
};`,mdxType:"StoryPreview"}),(0,a.yg)("hr",null),(0,a.yg)("p",null,"See more examples on our ",(0,a.yg)("a",{parentName:"p",href:"https://paste-storybook.twilio.design/?path=/story/libraries-code-editor-editor--javascript-editor"},"Storybook"),"."))))}v.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=35788)),_N_E=e.O()}]);