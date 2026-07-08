(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4023],{3738:(e,t,o)=>{"use strict";o.d(t,{V:()=>c,x:()=>l});var a=o(76127),r=o(55729),i=e=>"margin"===e?"auto":"space0",n=(e,t,o)=>{let a=i(t),r=(({prefix:e,responsive:t,defaultValue:o})=>{let a=()=>t?[,,,].fill(o):o;return{[`${e}Top`]:a(),[`${e}Bottom`]:a(),[`${e}Right`]:a(),[`${e}Left`]:a()}})({prefix:t,responsive:!1,defaultValue:a});return void 0===o||(e?(r[`${t}Top`]=o,r[`${t}Bottom`]=o):(r[`${t}Right`]=o,r[`${t}Left`]=o)),r},s=(e,t,o)=>{let a=i(t),r={[`${t}Top`]:[a,a,a],[`${t}Bottom`]:[a,a,a],[`${t}Right`]:[a,a,a],[`${t}Left`]:[a,a,a]},n=Array.isArray(o)&&0===o.length;return void 0===o||n||e.forEach((e,a)=>{let i=Array.isArray(o)?o[a]:o;e?(r[`${t}Top`][a]=i,r[`${t}Bottom`][a]=i):(r[`${t}Right`][a]=i,r[`${t}Left`][a]=i)}),r},l=r.forwardRef(({as:e,children:t,element:o="GRID",equalColumnHeights:i,gutter:l,marginTop:c,marginBottom:h,vertical:m=!1,...d},p)=>{let u=r.useMemo(()=>r.Children.map(t,e=>r.isValidElement(e)?r.cloneElement(e,{count:r.Children.count(t),gutter:l,vertical:m,stretchColumnContent:i}):e),[t,m,i,l]),g=r.useMemo(()=>((e,t=!1)=>{let o=(e=>Array.isArray(e)?e.map(e=>"space0"!==e?e.replace("space","spaceNegative"):"space0"===e?"space0":null):"space0"===e?"space0":e&&"string"==typeof e?e.replace("space","spaceNegative"):"auto")(e);return Array.isArray(t)?s(t,"margin",o):n(t,"margin",o)})(l,m),[l,m]),y=r.useMemo(()=>(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e&&!0===e?"column":"row"):e?"column":"row")(m),[m]);return r.createElement(a.az,{...(0,a.x8)(d),ref:p,as:e,alignItems:i?"stretch":null,element:o,flexDirection:y,flexWrap:"wrap",display:"flex",...g,marginTop:c,marginBottom:h,minWidth:"size0",rowGap:d.rowGap,columnGap:d.columnGap},u)});l.displayName="Grid";var c=r.forwardRef(({as:e,children:t,count:o,element:i="COLUMN",gutter:l,offset:c,span:h,stretchColumnContent:m,vertical:d,...p},u)=>{let g=r.useMemo(()=>(({count:e,span:t,gutter:o,offset:a,vertical:r,stretchColumnContent:i})=>{let l={width:(({count:e,span:t})=>Array.isArray(t)&&e?t.map(e=>`${e/12*100}%`):"number"==typeof t&&e&&e<=12?`${t/12*100}%`:void 0!==e?`${1/e*100}%`:"8.333333333333332%")({count:e,span:t}),...(({vertical:e,gutter:t})=>Array.isArray(e)?s(e,"padding",t):n(e,"padding",t))({gutter:o,vertical:r})};return a&&(l.marginLeft=(e=>Array.isArray(e)?e.map(e=>`${e/12*100}%`):`${e/12*100}%`)(a)),r&&!a&&(l.minWidth=(e=>Array.isArray(e)?e.map(e=>"boolean"==typeof e?!0===e?"100%":"0":null):e?"100%":"0")(r),l.marginLeft="space0"),i&&(l.alignContent="stretch",l.display="flex"),l})({count:o,gutter:l,offset:c,span:h,stretchColumnContent:m,vertical:d}),[o,l,c,h,m,d]);return r.createElement(a.az,{...(0,a.x8)(p),...g,as:e,element:i,ref:u},t)});c.displayName="Column"},10326:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/customization/creating-a-custom-theme",function(){return o(34303)}])},15780:(e,t,o)=>{"use strict";o.d(t,{A:()=>d});var a=o(72387),r=o(95669),i=o.n(r),n=o(81278);o(55729);var s=o(10511),l=o(43084),c=o(63437),h=o(38992);let m={h1:()=>null},d=({children:e,meta:t,navigationData:o})=>{let r=t.title?`${t.title} - ${h.DZ.TITLE}`:h.DZ.TITLE,d=t.description||h.DZ.DESCRIPTION,p=(0,n.useRouter)();return(0,a.FD)(c.T,{navigationData:o,children:[(0,a.FD)(i(),{children:[(0,a.Y)("title",{children:r}),(0,a.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${p.pathname}`}),(0,a.Y)("meta",{name:"description",content:d},"description")]}),(0,a.Y)(s.s,{children:(0,a.Y)(l.Q,{componentOverrides:t.package?m:{},children:e})})]})}},34303:(e,t,o)=>{"use strict";o.r(t),o.d(t,{__N_SSG:()=>f,default:()=>x,getStaticProps:()=>O,mdxHeadings:()=>v,meta:()=>w}),o(55729);var a=o(11885),r=o(97215),i=o(28019),n=o(76127),s=o(72387),l=o(4073),c=o(54652);let h=()=>(0,s.FD)(c.Pq,{variant:"warning",marginY:"space70",children:[(0,s.Y)(c.v,{as:"h2",children:"Need to check the accessibility of your colors?"}),(0,s.FD)(c.wz,{children:["Checkout"," ",(0,s.Y)(l.Mz,{href:"https://www.aremycolorsaccessible.com",showExternal:!0,children:"aremycolorsaccessible.com"})," ","to make sure your colors meet at least AA accessibility requirements."," ",(0,s.Y)(l.Mz,{href:"https://accessibility.blog.gov.uk/2016/06/17/colour-contrast-why-does-it-matter/",showExternal:!0,children:"Read more about why this is important here"}),"."]})]}),m=()=>(0,s.FD)(c.Pq,{variant:"warning",marginY:"space70",children:[(0,s.Y)(c.v,{as:"h2",children:"Don’t forget to load your custom fonts"}),(0,s.Y)(c.wz,{children:"Paste only handles loading the Inter font. If you override the font family to a custom font, be sure you are loading the font files into the web page correctly. Depending on your application and font provider, the method by which you do this will be specific to you."})]});var d=o(3738),p=o(41960);let u=()=>(0,s.FD)(d.x,{children:[(0,s.Y)(d.V,{children:(0,s.FD)(p.Xy,{children:[(0,s.Y)(p.ck,{children:"backgroundColors"}),(0,s.Y)(p.ck,{children:"borderColors"}),(0,s.Y)(p.ck,{children:"borderWidths"}),(0,s.Y)(p.ck,{children:"breakpoints"}),(0,s.Y)(p.ck,{children:"fontSizes"}),(0,s.Y)(p.ck,{children:"fontWeights"}),(0,s.Y)(p.ck,{children:"fonts"})]})}),(0,s.Y)(d.V,{children:(0,s.FD)(p.Xy,{children:[(0,s.Y)(p.ck,{children:"heights"}),(0,s.Y)(p.ck,{children:"iconSizes"}),(0,s.Y)(p.ck,{children:"lineHeights"}),(0,s.Y)(p.ck,{children:"maxHeights"}),(0,s.Y)(p.ck,{children:"maxWidths"}),(0,s.Y)(p.ck,{children:"minHeights"}),(0,s.Y)(p.ck,{children:"minWidths"})]})}),(0,s.Y)(d.V,{children:(0,s.FD)(p.Xy,{children:[(0,s.Y)(p.ck,{children:"radii"}),(0,s.Y)(p.ck,{children:"shadows"}),(0,s.Y)(p.ck,{children:"sizes"}),(0,s.Y)(p.ck,{children:"space"}),(0,s.Y)(p.ck,{children:"textColors"}),(0,s.Y)(p.ck,{children:"widths"}),(0,s.Y)(p.ck,{children:"zIndices"})]})})]});var g=o(38992),y=o(15780),f=!0;let w={title:"Creating a Custom Theme",description:"Creating a custom theme is the most the common way a consumer can customize the look and feel of a Paste application.",slug:"/customization/creating-a-custom-theme/"},O=async()=>({props:{navigationData}}),v=[{value:"Choosing your base theme",depth:3},{value:"Manually creating a custom theme",depth:3},{value:"Create a custom theme using the Paste Theme Designer",depth:3},{value:"Tips for creating your custom theme",depth:3},{value:"Examples",depth:2},{value:"Creating a branded theme",depth:3},{value:"Customizing typography",depth:3}],k=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},b=k("GenericHeader"),P=k("PageAside"),R={meta:w,getStaticProps:O,mdxHeadings:v},C=y.A;function x({components:e,...t}){return(0,a.yg)(C,{...R,...t,components:e,mdxType:"MDXLayout"},(0,a.yg)(b,{name:w.title,description:w.description,categoryRoute:g.t4.CUSTOMIZATION,mdxType:"GenericHeader"},(0,a.yg)(r.iD,{mdxType:"PageHeaderSeparator"},(0,a.yg)(i.w,{orientation:"horizontal",mdxType:"Separator"}))),(0,a.yg)("contentwrapper",null,(0,a.yg)(P,{data:v,mdxType:"PageAside"}),(0,a.yg)("content",null,(0,a.yg)("p",null,"A custom theme can be created either manually or using the ",(0,a.yg)("a",{parentName:"p",href:"https://remix.twilio.design"},"Paste Theme Designer"),". A ",(0,a.yg)("a",{parentName:"p",href:"/theme"},"Paste Theme")," is categorized into groups of ",(0,a.yg)("a",{parentName:"p",href:"/tokens"},"design tokens"),". The value of any design token from any group can be changed when supplied to the Customization Provider via the theme object. The following token groups are available for customization:"),(0,a.yg)(u,{mdxType:"CustomThemeKeyList"}),(0,a.yg)("h3",null,"Choosing your base theme"),(0,a.yg)("p",null,"Firstly you need to decide what base theme you want to extend from. The Customization Provider allows you to choose either the default or dark themes as a base. This means that you can choose to only override certain tokens from the base theme, or completely replace it with a whole new theme."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},`import {CustomizationProvider} from '@twilio-paste/core/customization';

const MyApp = () => <CustomizationProvider baseTheme="dark">rest of app</CustomizationProvider>;
`)),(0,a.yg)("h3",null,"Manually creating a custom theme"),(0,a.yg)("p",null,"Manually creating a custom theme can be done by duplicating the Paste default theme, and changing the ",(0,a.yg)("a",{parentName:"p",href:"/tokens"},"design token")," values you want to customize. You can change every design token value within the theme, or just a small set. The value of each key/value pair on the theme can be any valid value for the CSS property that the design token can be used for. This might be the best method if you",`’`,"re only customizing a small set of tokens as you only need to provide those specific token overrides."),(0,a.yg)("p",null,"Below we are choosing the dark theme as our base, and manually creating a custom theme by providing the Customization Provider an object that only overrides certain font weights and border widths."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},`import {CustomizationProvider} from '@twilio-paste/core/customization';

const MyApp = () => (
  <CustomizationProvider baseTheme="dark" theme={{
    "fontWeights": {
      "fontWeightNormal": "light"
      "fontWeightMedium": "500"
      "fontWeightBold": "600"
    }
    "borderWidths": {
      "borderWidth10": '2px'
      "borderWidth20": '4rem'
      "borderWidth30": '4em'
    }
  }}>
    rest of app
  </CustomizationProvider>
)
`)),(0,a.yg)("h3",null,"Create a custom theme using the Paste Theme Designer"),(0,a.yg)("p",null,"If you",`’`,"re looking for a visual approach to creating a custom theme, then the ",(0,a.yg)("a",{parentName:"p",href:"https://remix.twilio.design"},"Paste Theme Designer")," is the best choice."),(0,a.yg)("p",null,"The theme designer comes with a UI so you can visually see what tokens are used in various components. For ease of use, each set of tokens is separated into categories. Once a category is selected, you can change individual token values and immediately see what component(s) will be affected by that change. Once all token changes have been made, you can then export your custom theme."),(0,a.yg)("p",null,"Once exported from the theme designer, you can store that JSON object in you application and import in where you initialize the Customization Provider to provide your application with an entire custom theme."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},`import {CustomizationProvider} from '@twilio-paste/core/customization';
import CustomTheme from './themes/theme.json';

const MyApp = () => (
  <CustomizationProvider baseTheme="default" theme={CustomTheme}>
    rest of app
  </CustomizationProvider>
);
`)),(0,a.yg)("p",null,"The theme designer can also be used to import a custom theme if you wish to make a change to an existing theme and want immediate feedback on how that change would affect Paste components."),(0,a.yg)("h3",null,"Tips for creating your custom theme"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Make sure your color choices are accessible."),(0,a.yg)("li",{parentName:"ul"},"Provide clear focus shadow or outline color."),(0,a.yg)("li",{parentName:"ul"},"If you change the font family tokens, make sure you",`’`,"re loading the font in the ",(0,a.yg)("inlineCode",{parentName:"li"},"head")," of your application."),(0,a.yg)("li",{parentName:"ul"},"Make sure your hover, focus, and active states provide enough visual affordance for all users."),(0,a.yg)("li",{parentName:"ul"},"Follow the Paste ",(0,a.yg)("a",{parentName:"li",href:"/inclusive-design"},"Inclusive Design Checklist"))),(0,a.yg)(h,{mdxType:"AccessibilityCallout"}),(0,a.yg)("hr",null),(0,a.yg)("h2",null,"Examples"),(0,a.yg)("h3",null,"Creating a branded theme"),(0,a.yg)("p",null,"Something simple, yet effective that you might want to do is apply branding to your custom application. With Paste, a quick way to do that is to change the primary colors within in the theme to be a tint of your primary brand color."),(0,a.yg)("p",null,"As an example you might provide the Customization Provider a theme object that only sets values for the follow design tokens, based on your own company's branding:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},`{
  backgroundColors: {
    colorBackgroundPrimaryWeakest: PROVIDE_YOUR_COLOR,
    colorBackgroundPrimaryWeaker: PROVIDE_YOUR_COLOR,
    colorBackgroundPrimaryWeak: PROVIDE_YOUR_COLOR,
    colorBackgroundPrimary: PROVIDE_YOUR_COLOR,
    colorBackgroundPrimaryStrong: PROVIDE_YOUR_COLOR,
    colorBackgroundPrimaryStronger: PROVIDE_YOUR_COLOR,
    colorBackgroundPrimaryStrongest: PROVIDE_YOUR_COLOR
  },
  borderColors: {
    colorBorderPrimaryWeakest: PROVIDE_YOUR_COLOR,
    colorBorderPrimaryWeaker: PROVIDE_YOUR_COLOR,
    colorBorderPrimaryWeak: PROVIDE_YOUR_COLOR,
    colorBorderPrimary: PROVIDE_YOUR_COLOR,
    colorBorderPrimaryStrong: PROVIDE_YOUR_COLOR,
    colorBorderPrimaryStronger: PROVIDE_YOUR_COLOR,
    colorBorderPrimaryStrongest: PROVIDE_YOUR_COLOR
  },
  shadows: {
    shadowBorderPrimaryWeaker: PROVIDE_YOUR_COLOR,
    shadowBorderPrimaryWeak: PROVIDE_YOUR_COLOR,
    shadowBorderPrimary: PROVIDE_YOUR_COLOR,
    shadowBorderPrimaryStrong: PROVIDE_YOUR_COLOR,
    shadowBorderPrimaryStronger: PROVIDE_YOUR_COLOR,
    shadowBorderPrimaryStrongest: PROVIDE_YOUR_COLOR
  },
  textColors: {
    colorTextLinkWeak: PROVIDE_YOUR_COLOR,
    colorTextLink: PROVIDE_YOUR_COLOR,
    colorTextLinkStrong: PROVIDE_YOUR_COLOR,
    colorTextLinkStronger: PROVIDE_YOUR_COLOR,
  }
}
`)),(0,a.yg)("p",null,"This will apply your companies brand color as the primary accent to all Paste components that need to use it. You can see an example of this in the Code Sandbox below."),(0,a.yg)(n.az,{marginBottom:"space70",mdxType:"Box"},(0,a.yg)("iframe",{src:"https://codesandbox.io/embed/custom-branding-uh7cc?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"Custom Branding",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,a.yg)("h3",null,"Customizing typography"),(0,a.yg)("p",null,"Another small customization might involve changing the typography that is supplied with Paste. Maybe your company's brand guidelines stipulate that you should use a certain font family. By changing the set of typography tokens on the theme, you can make adjustments to the font family and sizing ramps used in Paste to suit your company's needs."),(0,a.yg)("p",null,"To achieve the result displayed below, we have provided Paste with the following partial theme object."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},`{
  "fonts": {
    "fontFamilyText": "'Poppins', sans-serif"
  },
  "fontWeights": {
    "fontWeightLight": "400",
    "fontWeightNormal": "400",
    "fontWeightMedium": "500",
    "fontWeightSemibold": "600",
    "fontWeightBold": "800"
  },
  "fontSizes": {
    "fontSize10": "10px",
    "fontSize20": "12px",
    "fontSize30": "16px",
    "fontSize40": "20px",
    "fontSize50": "24px",
    "fontSize60": "28px",
    "fontSize70": "32px",
    "fontSize80": "36px",
    "fontSize90": "40px",
    "fontSize100": "44px",
    "fontSize110": "48px"
  }
}
`)),(0,a.yg)(m,{mdxType:"FontCallout"}),(0,a.yg)(n.az,{marginBottom:"space70",mdxType:"Box"},(0,a.yg)("iframe",{src:"https://codesandbox.io/embed/custom-typography-ioudh?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"Custom Typography",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})))))}x.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=10326)),_N_E=e.O()}]);