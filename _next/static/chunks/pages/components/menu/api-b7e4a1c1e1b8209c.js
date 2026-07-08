(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3243],{37716:(e,n,t)=>{"use strict";t.r(n),t.d(n,{__N_SSG:()=>r,default:()=>m,getStaticProps:()=>s,mdxHeadings:()=>u,meta:()=>i}),t(55729);var a=t(11885),o=t(40615),r=!0;let i={title:"Menu - Components",package:"@twilio-paste/menu",description:"A menu presents a list of menu items that a user can choose to perform an action with.",slug:"/components/menu/api"},s=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...u,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/menu",storybookUrl:"/?path=/story/components-menu--default"}}}),u=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],p=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},l={meta:i,getStaticProps:s,mdxHeadings:u},c=o.A;function m({components:e,...n}){return(0,a.yg)(c,{...l,...n,components:e,mdxType:"MDXLayout"},(0,a.yg)("h2",null,"Installation"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/menu - or - yarn add @twilio-paste/core
`)),(0,a.yg)("h2",null,"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},`import {Menu, MenuButton, MenuItem, MenuSeparator, useMenuState} from '@twilio-paste/core/menu';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';

const PreferencesMenu = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Preferences <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu}>Settings</MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </>
  );
};
`)),(0,a.yg)("h2",null,"Props"),(0,a.yg)(p,{componentApi:n.componentApi,mdxType:"PropsTable"}))}m.isMDXComponent=!0},40615:(e,n,t)=>{"use strict";t.d(n,{A:()=>h});var a=t(72387),o=t(76127),r=t(95669),i=t.n(r),s=t(81278);t(55729);var u=t(10511),p=t(43084),l=t(10732),c=t(62887),m=t(63437),d=t(38992);let g={h1:()=>null},h=({children:e,meta:n,navigationData:t,data:r,mdxHeadings:h,pageHeaderData:{categoryRoute:y,githubUrl:M,storybookUrl:b}})=>{let v=n.title?`${n.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,w=n.description||d.DZ.DESCRIPTION,D=(0,s.useRouter)();return(0,a.FD)(m.T,{navigationData:t,children:[(0,a.FD)(i(),{children:[(0,a.Y)("title",{children:v}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${D.pathname}`}),(0,a.Y)("meta",{name:"description",content:w},"description")]}),(0,a.FD)(u.s,{children:[(0,a.Y)(c.c,{categoryRoute:y,githubUrl:M,storybookUrl:b,data:r}),(0,a.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,a.Y)(l.i,{data:h}),(0,a.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,a.Y)(p.Q,{componentOverrides:n.package?g:{},children:e})})]})]})]})}},97877:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/menu/api",function(){return t(37716)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=97877)),_N_E=e.O()}]);