(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7895],{40615:(e,t,o)=>{"use strict";o.d(t,{A:()=>g});var a=o(72387),l=o(76127),n=o(95669),s=o.n(n),i=o(81278);o(55729);var r=o(10511),c=o(43084),p=o(10732),u=o(62887),m=o(63437),d=o(38992);let b={h1:()=>null},g=({children:e,meta:t,navigationData:o,data:n,mdxHeadings:g,pageHeaderData:{categoryRoute:h,githubUrl:y,storybookUrl:x}})=>{let w=t.title?`${t.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,C=t.description||d.DZ.DESCRIPTION,T=(0,i.useRouter)();return(0,a.FD)(m.T,{navigationData:o,children:[(0,a.FD)(s(),{children:[(0,a.Y)("title",{children:w}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,a.Y)("meta",{name:"description",content:C},"description")]}),(0,a.FD)(r.s,{children:[(0,a.Y)(u.c,{categoryRoute:h,githubUrl:y,storybookUrl:x,data:n}),(0,a.FD)(l.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,a.Y)(p.i,{data:g}),(0,a.Y)(l.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,a.Y)(c.Q,{componentOverrides:t.package?b:{},children:e})})]})]})]})}},60869:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/multiselect-combobox/api",function(){return o(93884)}])},93884:(e,t,o)=>{"use strict";o.r(t),o.d(t,{__N_SSG:()=>n,default:()=>m,getStaticProps:()=>i,mdxHeadings:()=>r,meta:()=>s}),o(55729);var a=o(11885),l=o(40615),n=!0;let s={title:"Multiselect Combobox",package:"@twilio-paste/combobox",description:"A Multiselect Combobox is a styled dropdown form element that allows users to select multiple values from a list.",slug:"/components/multiselect-combobox/api"},i=async()=>({props:{data:{...packageJson,...feature,nameOverride:"Multiselect Combobox",descriptionOverride:"A Multiselect Combobox is a styled dropdown form element that allows users to select multiple values from a list."},componentApi,mdxHeadings:[...r,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/combobox/src/multiselect",storybookUrl:"/?path=/story/components-combobox-multiselectcombobox--multiselect-combobox-basic"}}}),r=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],c=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},p={meta:s,getStaticProps:i,mdxHeadings:r},u=l.A;function m({components:e,...t}){return(0,a.yg)(u,{...p,...t,components:e,mdxType:"MDXLayout"},(0,a.yg)("h2",null,"Installation"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/combobox - or - yarn add @twilio-paste/core
`)),(0,a.yg)("h2",null,"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},`import {MultiselectCombobox} from '@twilio-paste/core/combobox';

const items = [
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'List',
  'Modal',
  'Paragraph',
  'Popover',
  'Tooltip',
];

function getFilteredItems(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

const MyComponent = () => (
  const [inputValue, setInputValue] = React.useState('');
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <MultiselectCombobox
      labelText="Choose a Paste Component"
      selectedItemsLabelText="Selected Paste components"
      items={filteredItems}
      onInputValueChange={({inputValue: newInputValue = ''}) => {
        setInputValue(newInputValue);
      }}
    />
  );
);
`)),(0,a.yg)("h2",null,"Props"),(0,a.yg)(c,{componentApi:t.componentApi,mdxType:"PropsTable"}))}m.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=60869)),_N_E=e.O()}]);