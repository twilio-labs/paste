(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1181],{2633:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/slider/api",function(){return a(7078)}])},7078:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>o,default:()=>u,getStaticProps:()=>i,mdxHeadings:()=>s,meta:()=>l}),a(55729);var n=a(11885),r=a(40615),o=!0;let l={title:"Slider - API",package:"@twilio-paste/slider",description:"A Slider is a draggable input that allows a user to select an imprecise numerical value within a range.",slug:"/components/slider/api"},i=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...s,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/layout/stack",storybookUrl:"/?path=/story/layout-stack--default-stack"}}}),s=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],p=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},d={meta:l,getStaticProps:i,mdxHeadings:s},c=r.A;function u({components:e,...t}){return(0,n.yg)(c,{...d,...t,components:e,mdxType:"MDXLayout"},(0,n.yg)("h2",null,"Installation"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/core - or - yarn add @twilio-paste/slider
`)),(0,n.yg)("h2",null,"Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`import {Slider} from '@twilio-paste/core/slider';

const Component = () => {
  const [value, setValue] = React.useState(10);
  const sliderId = useUID();
  const helpTextId = useUID(); // optional

  const numberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US', {style: 'percent'});
  }, []);

  return (
    <Slider
      id={sliderId}
      aria-describedby={helpTextId}
      value={value}
      minValue={0}
      maxValue={100}
      step={1}
      onChange={(newValue) => setValue(newValue)}
      numberFormatter={numberFormatter}
    />
  );
};
`)),(0,n.yg)("h2",null,"Props"),(0,n.yg)(p,{componentApi:t.componentApi,mdxType:"PropsTable"}))}u.isMDXComponent=!0},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var n=a(72387),r=a(76127),o=a(95669),l=a.n(o),i=a(81278);a(55729);var s=a(10511),p=a(43084),d=a(10732),c=a(62887),u=a(63437),m=a(38992);let g={h1:()=>null},h=({children:e,meta:t,navigationData:a,data:o,mdxHeadings:h,pageHeaderData:{categoryRoute:y,githubUrl:b,storybookUrl:T}})=>{let w=t.title?`${t.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,v=t.description||m.DZ.DESCRIPTION,D=(0,i.useRouter)();return(0,n.FD)(u.T,{navigationData:a,children:[(0,n.FD)(l(),{children:[(0,n.Y)("title",{children:w}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${D.pathname}`}),(0,n.Y)("meta",{name:"description",content:v},"description")]}),(0,n.FD)(s.s,{children:[(0,n.Y)(c.c,{categoryRoute:y,githubUrl:b,storybookUrl:T,data:o}),(0,n.FD)(r.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(d.i,{data:h}),(0,n.Y)(r.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(p.Q,{componentOverrides:t.package?g:{},children:e})})]})]})]})}}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=2633)),_N_E=e.O()}]);