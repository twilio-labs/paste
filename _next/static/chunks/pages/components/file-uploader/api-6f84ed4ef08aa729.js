(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7277],{16424:(e,a,l)=>{"use strict";l.r(a),l.d(a,{__N_SSG:()=>i,default:()=>u,getStaticProps:()=>r,mdxHeadings:()=>n,meta:()=>p}),l(55729);var o=l(11885),t=l(40615),i=!0;let p={title:"File Uploader - API",package:"@twilio-paste/file-uploader",description:"A File Uploader is a form element used to upload multiple files.",slug:"/components/file-uploader/api"},r=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...n,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/file-uploader",storybookUrl:"/?path=/story/components-file-uploader--default"}}}),n=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],d=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},s={meta:p,getStaticProps:r,mdxHeadings:n},c=t.A;function u({components:e,...a}){return(0,o.yg)(c,{...s,...a,components:e,mdxType:"MDXLayout"},(0,o.yg)("h2",null,"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/file-uploader - or - yarn add @twilio-paste/core
`)),(0,o.yg)("h2",null,"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  FileUploader,
  FileUploaderLabel,
  FileUploaderHelpText,
  FileUploaderDropzone,
  FileUploaderDropzoneText,
} from '@twilio-paste/core/file-uploader';

const MyFileUploader = () => (
  <FileUploader name="Default File Uploader">
    <FileUploaderLabel>Upload files</FileUploaderLabel>
    <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
    <FileUploaderDropzone acceptedMimeTypes={['image/*', 'application/pdf']}>
      <FileUploaderDropzoneText>Browse files or drag them here</FileUploaderDropzoneText>
    </FileUploaderDropzone>
  </FileUploader>
);
`)),(0,o.yg)("h2",null,"Props"),(0,o.yg)(d,{componentApi:a.componentApi,mdxType:"PropsTable"}))}u.isMDXComponent=!0},40615:(e,a,l)=>{"use strict";l.d(a,{A:()=>h});var o=l(72387),t=l(76127),i=l(95669),p=l.n(i),r=l(81278);l(55729);var n=l(10511),d=l(43084),s=l(10732),c=l(62887),u=l(63437),m=l(38992);let g={h1:()=>null},h=({children:e,meta:a,navigationData:l,data:i,mdxHeadings:h,pageHeaderData:{categoryRoute:y,githubUrl:U,storybookUrl:T}})=>{let f=a.title?`${a.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,F=a.description||m.DZ.DESCRIPTION,D=(0,r.useRouter)();return(0,o.FD)(u.T,{navigationData:l,children:[(0,o.FD)(p(),{children:[(0,o.Y)("title",{children:f}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${D.pathname}`}),(0,o.Y)("meta",{name:"description",content:F},"description")]}),(0,o.FD)(n.s,{children:[(0,o.Y)(c.c,{categoryRoute:y,githubUrl:U,storybookUrl:T,data:i}),(0,o.FD)(t.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(s.i,{data:h}),(0,o.Y)(t.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(d.Q,{componentOverrides:a.package?g:{},children:e})})]})]})]})}},54907:(e,a,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/file-uploader/api",function(){return l(16424)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=54907)),_N_E=e.O()}]);