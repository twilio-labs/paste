(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6950],{14451:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>s,default:()=>d,getStaticProps:()=>l,mdxHeadings:()=>n,meta:()=>r}),t(55729);var o=t(11885),i=t(40615),s=!0;let r={title:"User Dialog - API",package:"@twilio-paste/user-dialog",description:"User dialog is a menu that contains user profile-related actions.",slug:"/components/user-dialog/api"},l=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...n,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/user-dialog",storybookUrl:"/?path=/story/components-user-dialog--basic-user-dialog"}}}),n=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],g=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},p={meta:r,getStaticProps:l,mdxHeadings:n},c=i.A;function d({components:e,...a}){return(0,o.yg)(c,{...p,...a,components:e,mdxType:"MDXLayout"},(0,o.yg)("h2",null,"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/user-dialog - or - yarn add @twilio-paste/core
`)),(0,o.yg)("h2",null,"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`import {UserDialog} from '@twilio-paste/core/user-dialog';

const UserDialogExample = () => {
  const userDialogList = useUserDialogListState();
  return (
    <UserDialogContainer name="Nora Krantz">
      <UserDialog aria-label="my_user_menu">
        <UserDialogUserInfo>
          <UserDialogUserName>Name</UserDialogUserName>
          <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
        </UserDialogUserInfo>
        <UserDialogList {...userDialogList} aria-label="User menu actions">
          <UserDialogListItem {...userDialogList} onSelect={() => {}}>One</UserDialogListItem>
          <UserDialogListItem {...userDialogList} href="www.#.com">Two</UserDialogListItem>
        </UserDialogList>
      </UserDialog>
    </UserDialogContainer>
  );
};
`)),(0,o.yg)("h2",null,"Props"),(0,o.yg)(g,{componentApi:a.componentApi,mdxType:"PropsTable"}))}d.isMDXComponent=!0},23813:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/user-dialog/api",function(){return t(14451)}])},40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>D});var o=t(72387),i=t(76127),s=t(95669),r=t.n(s),l=t(81278);t(55729);var n=t(10511),g=t(43084),p=t(10732),c=t(62887),d=t(63437),u=t(38992);let m={h1:()=>null},D=({children:e,meta:a,navigationData:t,data:s,mdxHeadings:D,pageHeaderData:{categoryRoute:U,githubUrl:h,storybookUrl:y}})=>{let N=a.title?`${a.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,b=a.description||u.DZ.DESCRIPTION,T=(0,l.useRouter)();return(0,o.FD)(d.T,{navigationData:t,children:[(0,o.FD)(r(),{children:[(0,o.Y)("title",{children:N}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,o.Y)("meta",{name:"description",content:b},"description")]}),(0,o.FD)(n.s,{children:[(0,o.Y)(c.c,{categoryRoute:U,githubUrl:h,storybookUrl:y,data:s}),(0,o.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,o.Y)(p.i,{data:D}),(0,o.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,o.Y)(g.Q,{componentOverrides:a.package?m:{},children:e})})]})]})]})}}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=23813)),_N_E=e.O()}]);