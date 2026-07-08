(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4285],{32938:(e,o,t)=>{"use strict";t.r(o),t.d(o,{__N_SSG:()=>r,default:()=>u,getStaticProps:()=>i,mdxHeadings:()=>c,meta:()=>l}),t(55729);var a=t(11885),n=t(40615),r=!0;let l={title:"Code Block",package:"@twilio-paste/code-block",description:"A component used to display readable blocks of code.",slug:"/components/code-block/api"},i=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...c,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/code-block",storybookUrl:"/?path=/story/components-code-block--single-line"}}}),c=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],d=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},s={meta:l,getStaticProps:i,mdxHeadings:c},p=n.A;function u({components:e,...o}){return(0,a.yg)(p,{...s,...o,components:e,mdxType:"MDXLayout"},(0,a.yg)("h2",null,"Installation"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/code-block - or - yarn add @twilio-paste/core
`)),(0,a.yg)("h2",null,"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},`import {CodeBlockWrapper, CodeBlockHeader, CodeBlock} from '@twilio-paste/core/code-block';

const rubyCode = \`#!/usr/bin/ruby

# Import the library.
require 'tk'

# Root window.
root = TkRoot.new  {
  title 'Push Me'
  background '#111188'
}

# Add a label to the root window.
lab = TkLabel.new(root) {
  text "Hey there,\\nPush a button!"
  background '#3333AA'
  foreground '#CCCCFF'
}\`;

export const Basic = () => {
  return (
    <CodeBlockWrapper>
      <CodeBlockHeader>Build a button</CodeBlockHeader>
      <CodeBlock showLineNumbers language="ruby" code={rubyCode} />
    </CodeBlockWrapper>
  );
};
`)),(0,a.yg)("h2",null,"Props"),(0,a.yg)(d,{componentApi:o.componentApi,mdxType:"PropsTable"}))}u.isMDXComponent=!0},40615:(e,o,t)=>{"use strict";t.d(o,{A:()=>m});var a=t(72387),n=t(76127),r=t(95669),l=t.n(r),i=t(81278);t(55729);var c=t(10511),d=t(43084),s=t(10732),p=t(62887),u=t(63437),g=t(38992);let b={h1:()=>null},m=({children:e,meta:o,navigationData:t,data:r,mdxHeadings:m,pageHeaderData:{categoryRoute:h,githubUrl:k,storybookUrl:y}})=>{let C=o.title?`${o.title} - ${g.DZ.TITLE}`:g.DZ.TITLE,w=o.description||g.DZ.DESCRIPTION,T=(0,i.useRouter)();return(0,a.FD)(u.T,{navigationData:t,children:[(0,a.FD)(l(),{children:[(0,a.Y)("title",{children:C}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,a.Y)("meta",{name:"description",content:w},"description")]}),(0,a.FD)(c.s,{children:[(0,a.Y)(p.c,{categoryRoute:h,githubUrl:k,storybookUrl:y,data:r}),(0,a.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,a.Y)(s.i,{data:m}),(0,a.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,a.Y)(d.Q,{componentOverrides:o.package?b:{},children:e})})]})]})]})}},43557:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/code-block/api",function(){return t(32938)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=43557)),_N_E=e.O()}]);