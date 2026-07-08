(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3945],{40615:(t,e,o)=>{"use strict";o.d(e,{A:()=>w});var r=o(72387),c=o(76127),a=o(95669),n=o.n(a),i=o(81278);o(55729);var d=o(10511),u=o(43084),p=o(10732),s=o(62887),l=o(63437),h=o(38992);let m={h1:()=>null},w=({children:t,meta:e,navigationData:o,data:a,mdxHeadings:w,pageHeaderData:{categoryRoute:g,githubUrl:S,storybookUrl:P}})=>{let v=e.title?`${e.title} - ${h.DZ.TITLE}`:h.DZ.TITLE,y=e.description||h.DZ.DESCRIPTION,I=(0,i.useRouter)();return(0,r.FD)(l.T,{navigationData:o,children:[(0,r.FD)(n(),{children:[(0,r.Y)("title",{children:v}),(0,r.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${I.pathname}`}),(0,r.Y)("meta",{name:"description",content:y},"description")]}),(0,r.FD)(d.s,{children:[(0,r.Y)(s.c,{categoryRoute:g,githubUrl:S,storybookUrl:P,data:a}),(0,r.FD)(c.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,r.Y)(p.i,{data:w}),(0,r.Y)(c.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,r.Y)(u.Q,{componentOverrides:e.package?m:{},children:t})})]})]})]})}},68062:(t,e,o)=>{"use strict";o.r(e),o.d(e,{__N_SSG:()=>a,default:()=>l,getStaticProps:()=>i,mdxHeadings:()=>d,meta:()=>n}),o(55729);var r=o(11885),c=o(40615),a=!0;let n={title:"Product Switcher - Components",package:"@twilio-paste/product-switcher",description:"A Product Switcher is an opinionated Menu that presents a list of Twilio products that a user has access to and can switch between.",slug:"/components/product-switcher/api"},i=async()=>({props:{data:{...packageJson,...feature},componentApi,mdxHeadings:[...d,...componentApiTocData],navigationData,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"/?path=/story/components-alert--neutral",storybookUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/alert"}}}),d=[{value:"Installation",depth:2},{value:"Usage",depth:2},{value:"Props",depth:2}],u=function(t){return console.warn("Component PropsTable was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},p={meta:n,getStaticProps:i,mdxHeadings:d},s=c.A;function l({components:t,...e}){return(0,r.yg)(s,{...p,...e,components:t,mdxType:"MDXLayout"},(0,r.yg)("h2",null,"Installation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},`yarn add @twilio-paste/product-switcher - or - yarn add @twilio-paste/product-switcher
`)),(0,r.yg)("h2",null,"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},`import {
  ProductSwitcher,
  ProductSwitcherButton,
  ProductSwitcherItem,
  useProductSwitcherState,
} from '@twilio-paste/core/product-switcher';

const ProductSwitcherMenu = () => {
  const productSwitcher = useProductSwitcherState();
  const [product, setProduct] = React.useState('twilio');
  return (
    <>
      <ProductSwitcherButton {...productSwitcher} i18nButtonLabel="Switch products" />
      <ProductSwitcher {...productSwitcher} aria-label="Available Products">
        <ProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="twilio"
          checked={product === 'twilio'}
          onChange={(e) => {
            setProduct('twilio');
          }}
          productName="Twilio"
          productStrapline="SMS, Voice & Video"
          productIcon={<LogoTwilioIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="segment"
          checked={product === 'segment'}
          onChange={(e) => {
            setProduct('segment');
          }}
          productName="Segment"
          productStrapline="Customer data platform"
          productIcon={<ProductSegmentIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="flex"
          checked={product === 'flex'}
          onChange={(e) => {
            setProduct('flex');
          }}
          productName="Flex"
          productStrapline="Cloud-based contact center"
          productIcon={<ProductFlexIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="sendgrid"
          checked={product === 'sendgrid'}
          onChange={(e) => {
            setProduct('sendgrid');
          }}
          productName="SendGrid"
          productStrapline="Email delivery and API"
          productIcon={<ProductEmailAPIIcon decorative />}
        />
        <ProductSwitcherItem
          {...productSwitcher}
          name="product"
          value="admin"
          checked={product === 'admin'}
          onChange={(e) => {
            setProduct('admin');
          }}
          productName="Console Admin"
          productStrapline="Admin center"
          productIcon={<LogoTwilioIcon decorative />}
        />
      </ProductSwitcher>
    </>
  );
};
`)),(0,r.yg)("h2",null,"Props"),(0,r.yg)(u,{componentApi:e.componentApi,mdxType:"PropsTable"}))}l.isMDXComponent=!0},81285:(t,e,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/product-switcher/api",function(){return o(68062)}])}},t=>{t.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>t(t.s=81285)),_N_E=t.O()}]);