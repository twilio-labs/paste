(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8775],{17531:(e,a,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/visual-picker/api",function(){return i(51874)}])},40615:(e,a,i)=>{"use strict";i.d(a,{A:()=>h});var t=i(72387),o=i(76127),l=i(95669),n=i.n(l),r=i(81278);i(55729);var s=i(10511),c=i(43084),p=i(10732),u=i(62887),d=i(63437),g=i(38992);let k={h1:()=>null},h=({children:e,meta:a,navigationData:i,data:l,mdxHeadings:h,pageHeaderData:{categoryRoute:m,githubUrl:v,storybookUrl:y}})=>{let P=a.title?`${a.title} - ${g.DZ.TITLE}`:g.DZ.TITLE,b=a.description||g.DZ.DESCRIPTION,T=(0,r.useRouter)();return(0,t.FD)(d.T,{navigationData:i,children:[(0,t.FD)(n(),{children:[(0,t.Y)("title",{children:P}),(0,t.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,t.Y)("meta",{name:"description",content:b},"description")]}),(0,t.FD)(s.s,{children:[(0,t.Y)(u.c,{categoryRoute:m,githubUrl:v,storybookUrl:y,data:l}),(0,t.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,t.Y)(p.i,{data:h}),(0,t.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,t.Y)(c.Q,{componentOverrides:a.package?k:{},children:e})})]})]})]})}},51874:(e,a,i)=>{"use strict";i.r(a),i.d(a,{__N_SSG:()=>l,default:()=>d,getStaticProps:()=>r,mdxHeadings:()=>s,meta:()=>n}),i(55729);var t=i(11885),o=i(40615),l=!0;let n={title:"Visual Picker - API",package:"@twilio-paste/visual-picker",description:"Visual Picker is a stylistically enhanced checkbox or radio selection element.",slug:"/components/visual-picker/api"},r=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...s,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/visual-picker",storybookUrl:"/?path=/story/components-visual-picker-checkbox--vertical-checkbox-group"}}}),s=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],c=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)},p={meta:n,getStaticProps:r,mdxHeadings:s},u=o.A;function d({components:e,...a}){return(0,t.yg)(u,{...p,...a,components:e,mdxType:"MDXLayout"},(0,t.yg)("h2",null,"Installation"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/visual-picker - or - yarn add @twilio-paste/core
`)),(0,t.yg)("h2",null,"Usage"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-jsx"},`import {VisualPickerRadioGroup, VisualPickerRadio} from '@twilio-paste/core/visual-picker';

const VisualPickerExample = () => {
  const [value, setValue] = React.useState('1');
  return (
    <VisualPickerRadioGroup
      legend="Select an option"
      name="visual-picker"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <VisualPickerRadio labelText="one" value="1">
        Option one
      </VisualPickerRadio>
      <VisualPickerRadio labelText="two" value="2">
        Option two
      </VisualPickerRadio>
      <VisualPickerRadio labelText="three" value="3">
        Option three
      </VisualPickerRadio>
    </VisualPickerRadioGroup>
  );
};
`)),(0,t.yg)("h2",null,"Props"),(0,t.yg)(c,{componentApi:a.componentApi,mdxType:"PropsTable"}))}d.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=17531)),_N_E=e.O()}]);