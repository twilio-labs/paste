(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5961],{32050:(e,t,c)=>{"use strict";c.r(t),c.d(t,{__N_SSG:()=>n,default:()=>w,getStaticProps:()=>r,mdxHeadings:()=>u,meta:()=>i}),c(55729);var a=c(11885),o=c(40615),n=!0;let i={title:"Account Switcher - API",package:"@twilio-paste/account-switcher",description:"An Account Switcher is a stylized Menu Badge with a list of actions related to a user's accounts.",slug:"/components/account-switcher/api"},r=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...u,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/account-switcher",storybookUrl:"/?path=/story/components-accountswitcher--account-switcher-menu"}}}),u=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],l=function(e){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)},h={meta:i,getStaticProps:r,mdxHeadings:u},s=o.A;function w({components:e,...t}){return(0,a.yg)(s,{...h,...t,components:e,mdxType:"MDXLayout"},(0,a.yg)("h2",null,"Installation"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/account-switcher - or - yarn add @twilio-paste/core
`)),(0,a.yg)("h2",null,"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  AccountSwitcher,
  AccountSwitcherBadge,
  AccountSwitcherGroup,
  AccountSwitcherItem,
  AccountSwitcherItemRadio,
  AccountSwitcherSeparator,
  useAccountSwitcherState,
} from '@twilio-paste/core/account-switcher';

const AccountSwitcherMenu = () => {
  const accountSwitcher = useAccountSwitcherState();
  const [selectedAccount, setSelectedAccount] = React.useState('Owl Telehealth');
  return (
    <>
      <AccountSwitcherBadge {...accountSwitcher} i18nButtonLabel="Switch accounts">
        Owl Telehealth
      </AccountSwitcherBadge>
      <AccountSwitcher {...accountSwitcher} aria-label="Avaiable accounts">
        <AccountSwitcherGroup label="Recent accounts">
          <AccountSwitcherItemRadio
            name="recent_accounts"
            value="Owl Telehealth"
            checked={selectedAccount === 'Owl Telehealth'}
            onChange={() => setSelectedAccount('Owl Telehealth')}
            {...accountSwitcher}
          >
            Owl Telehealth
          </AccountSwitcherItemRadio>
          <AccountSwitcherItemRadio
            name="recent_accounts"
            value="Owl Health Demo"
            checked={selectedAccount === 'Owl Health Demo'}
            onChange={() => setSelectedAccount('Owl Health Demo')}
            {...accountSwitcher}
          >
            Owl Health Demo
          </AccountSwitcherItemRadio>
          <AccountSwitcherItemRadio
            name="recent_accounts"
            value="Owl Subway"
            checked={selectedAccount === 'Owl Subway'}
            onChange={() => setSelectedAccount('Owl Subway')}
            {...accountSwitcher}
          >
            Owl Subway
          </AccountSwitcherItemRadio>
        </AccountSwitcherGroup>
        <AccountSwitcherSeparator />
        <AccountSwitcherItem {...accountSwitcher} href="#">
          Account settings
        </AccountSwitcherItem>
        <AccountSwitcherSeparator />
        <AccountSwitcherItem {...accountSwitcher} href="#">
          View all accounts
        </AccountSwitcherItem>
        <AccountSwitcherItem {...accountSwitcher} href="#">
          View all subaccounts
        </AccountSwitcherItem>
        <AccountSwitcherSeparator />
        <AccountSwitcherItem {...accountSwitcher} href="#">
          Admin Center
        </AccountSwitcherItem>
      </AccountSwitcher>
    </>
  );
};
`)),(0,a.yg)("h2",null,"Props"),(0,a.yg)(l,{componentApi:t.componentApi,mdxType:"PropsTable"}))}w.isMDXComponent=!0},40615:(e,t,c)=>{"use strict";c.d(t,{A:()=>S});var a=c(72387),o=c(76127),n=c(95669),i=c.n(n),r=c(81278);c(55729);var u=c(10511),l=c(43084),h=c(10732),s=c(62887),w=c(63437),d=c(38992);let p={h1:()=>null},S=({children:e,meta:t,navigationData:c,data:n,mdxHeadings:S,pageHeaderData:{categoryRoute:m,githubUrl:A,storybookUrl:g}})=>{let y=t.title?`${t.title} - ${d.DZ.TITLE}`:d.DZ.TITLE,b=t.description||d.DZ.DESCRIPTION,T=(0,r.useRouter)();return(0,a.FD)(w.T,{navigationData:c,children:[(0,a.FD)(i(),{children:[(0,a.Y)("title",{children:y}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${T.pathname}`}),(0,a.Y)("meta",{name:"description",content:b},"description")]}),(0,a.FD)(u.s,{children:[(0,a.Y)(s.c,{categoryRoute:m,githubUrl:A,storybookUrl:g,data:n}),(0,a.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,a.Y)(h.i,{data:S}),(0,a.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,a.Y)(l.Q,{componentOverrides:t.package?p:{},children:e})})]})]})]})}},46033:(e,t,c)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/account-switcher/api",function(){return c(32050)}])}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=46033)),_N_E=e.O()}]);