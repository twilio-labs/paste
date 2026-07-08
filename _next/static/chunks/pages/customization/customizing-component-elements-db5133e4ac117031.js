(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5754],{15780:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var n=a(72387),o=a(95669),s=a.n(o),l=a(81278);a(55729);var i=a(10511),r=a(43084),p=a(63437),m=a(38992);let c={h1:()=>null},d=({children:e,meta:t,navigationData:a})=>{let o=t.title?`${t.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,d=t.description||m.DZ.DESCRIPTION,u=(0,l.useRouter)();return(0,n.FD)(p.T,{navigationData:a,children:[(0,n.FD)(s(),{children:[(0,n.Y)("title",{children:o}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${u.pathname}`}),(0,n.Y)("meta",{name:"description",content:d},"description")]}),(0,n.Y)(i.s,{children:(0,n.Y)(r.Q,{componentOverrides:t.package?c:{},children:e})})]})}},21949:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/customization/customizing-component-elements",function(){return a(94659)}])},94659:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>r,default:()=>v,getStaticProps:()=>m,mdxHeadings:()=>c,meta:()=>p}),a(55729);var n=a(11885),o=a(76127),s=a(24901),l=a(38992),i=a(15780),r=!0;let p={title:"Customizing components",description:"Customizing components is a powerful feature that allows any programmable application to extend existing components and add custom styles.",slug:"/customization/customizing-component-elements/"},m=async()=>({props:{navigationData}}),c=[{value:"Understand the element prop and data attributes",depth:2},{value:"Customize all instances of a component",depth:2},{value:"Customize variants of a component",depth:2},{value:"Create new custom components",depth:2},{value:"Customize new custom components",depth:2},{value:"Elements API",depth:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},u=d("GenericHeader"),g=d("PageAside"),y={meta:p,getStaticProps:m,mdxHeadings:c},h=i.A;function v({components:e,...t}){return(0,n.yg)(h,{...y,...t,components:e,mdxType:"MDXLayout"},(0,n.yg)(u,{name:p.title,categoryRoute:l.t4.CUSTOMIZATION,mdxType:"GenericHeader"}),(0,n.yg)(s.P,{variant:"lead",mdxType:"P"},p.description),(0,n.yg)("hr",null),(0,n.yg)("contentwrapper",null,(0,n.yg)(g,{data:c,mdxType:"PageAside"}),(0,n.yg)("content",null,(0,n.yg)("p",null,`As a designer or developer of a Twilio Programmable App, you may need to customize a component to match your specific design requirements. Use Paste’s Customization Provider API to customize individual components or create entirely new ones based on existing components.`),(0,n.yg)("p",null,"The Customization Provider seamlessly integrates with the ",(0,n.yg)("a",{parentName:"p",href:"/customization/creating-a-custom-theme"},"current theme")," so that your customizations work perfectly with the default or dark base themes, or any fully custom theme you provide. To make that as easy as possible for you, we have taken the decision to provide some guardrails with that API, only allowing design token values on certain CSS properties where it makes sense."),(0,n.yg)(o.az,{marginBottom:"space70",mdxType:"Box"},(0,n.yg)("iframe",{src:"https://codesandbox.io/embed/customizing-components-7lf2we?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"Customizing Components",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,n.yg)("h2",null,"Understand the element prop and data attributes"),(0,n.yg)("p",null,"Each Paste component has a collection of tagged DOM nodes within it, each with a ",(0,n.yg)("inlineCode",{parentName:"p"},"data-paste-element")," data attribute that identifies each stylable element you can target."),(0,n.yg)("p",null,"To customize a specific element, you need to know its identifier. You can find these identifiers in the rendered HTML for each component. The ",(0,n.yg)("inlineCode",{parentName:"p"},"data-paste-element")," data attribute can be used to identify specific elements. For example, the following code will render an alert component with various element identifiers:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`export const Component = () => {
  return <Alert variant="neutral">I am a neutral alert</Alert>;
};
`)),(0,n.yg)("p",null,"The resulting markup will look like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-html"},`<div data-paste-element="ALERT" role="alert" class="next-1lh60q0">
  <div data-paste-element="MEDIA_OBJECT" class="next-1sekzvp">
    <div data-paste-element="MEDIA_FIGURE" class="next-1llkq7k">
      <span data-paste-element="ALERT_ICON" class="next-1onn7bo">
        <svg />
      </span>
    </div>
    <div data-paste-element="MEDIA_BODY" class="next-1i39mnm">
      <div data-paste-element="BOX" class="next-18dbjl">
        <strong>Chimamanda Ngozi Adichie:</strong> Racism should never have happened and so you don't get a cookie for
        reducing it.
      </div>
    </div>
  </div>
</div>
`)),(0,n.yg)("p",null,"You can use these identifiers, such as ",(0,n.yg)("inlineCode",{parentName:"p"},"ALERT"),", to target each specific element for customization and apply custom CSS to."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"element")," prop on each Paste component can also be used to change or override the element name for that particular instance of the component. When this prop is set, it renders a custom ",(0,n.yg)("inlineCode",{parentName:"p"},"data-paste-element")," data attribute extending the base Paste component to being something completely new."),(0,n.yg)("p",null,"For example, the following code will render a custom neutral alert with the element name ",(0,n.yg)("inlineCode",{parentName:"p"},'"MY_CUSTOM_ALERT"')," and that can be used to apply custom CSS to the Alert:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`export const App = () => {
  return (
    <CustomizationProvider
      elements={{
        MY_CUSTOM_ALERT: {
          paddingY: 'space100',
        },
        MY_CUSTOM_ALERT_DISMISS_BUTTON: {
          backgroundColor: 'colorBackgroundBodyInverse',
          borderRadius: 'borderRadius20',
        },
      }}
    >
      <Alert element="MY_CUSTOM_ALERT" variant="neutral">
        I am a custom neutral alert
      </Alert>
    </CustomizationProvider>
  );
};
`)),(0,n.yg)("h2",null,"Customize all instances of a component"),(0,n.yg)("p",null,"To customize all instances of a specific Paste component, use the ",(0,n.yg)("inlineCode",{parentName:"p"},"elements")," prop on the ",(0,n.yg)("inlineCode",{parentName:"p"},"CustomizationProvider")," component. Each key on the elements object should match an elements name that you identified in the applications rendered DOM. For example, the following code will customize all alert components to have a custom padding:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`export const App = () => {
  return (
    <CustomizationProvider
      elements={{
        ALERT: {
          paddingY: 'space100',
        },
      }}
    >
      <Alert variant="neutral">I am a custom neutral alert</Alert>
    </CustomizationProvider>
  );
};
`)),(0,n.yg)("h2",null,"Customize variants of a component"),(0,n.yg)("p",null,"Some Paste components have variants, such as the ",(0,n.yg)("a",{parentName:"p",href:"/components/alert"},"Alert")," component with variants of ",(0,n.yg)("inlineCode",{parentName:"p"},"info"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"success"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"warning"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"error"),". To customize a variant of a component, add a ",(0,n.yg)("inlineCode",{parentName:"p"},"variants")," object to the element identifier in the ",(0,n.yg)("inlineCode",{parentName:"p"},"CustomizationProvider"),". For example, to change the background color of the ",(0,n.yg)("inlineCode",{parentName:"p"},"neutral")," variant of the Alert component, you can add the following code:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`<CustomizationProvider
  elements={{
    ALERT: {
      paddingY: 'space100',
      variants: {
        neutral: {
          backgroundColor: 'colorBackgroundSuccessWeakest',
        },
      },
    },
  }}
>
  <Alert variant="neutral">I am a custom neutral alert</Alert>
</CustomizationProvider>
`)),(0,n.yg)("h2",null,"Create new custom components"),(0,n.yg)("p",null,'Create entirely new custom components based on existing Paste components by giving them a new "element" name. These custom components will be isolated from the base component exported from Paste. For example, the following code will create a new custom alert component with the element name ',(0,n.yg)("inlineCode",{parentName:"p"},'"MY_CUSTOM_ALERT"'),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`export const MyCustomAlert = (props) => {
  return <Alert {...props} element="MY_CUSTOM_ALERT" />;
};
`)),(0,n.yg)("p",null,"This will generate new data attributes for your custom Alert component similar to the below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-html"},`<div data-paste-element="MY_CUSTOM_ALERT" role="alert" class="next-1lh60q0">
  <div data-paste-element="MEDIA_OBJECT" class="next-1sekzvp">
    <div data-paste-element="MEDIA_FIGURE" class="next-1llkq7k">
      <span data-paste-element="MY_CUSTOM_ALERT_ICON" class="next-1onn7bo">
        <svg />
      </span>
    </div>
    <div data-paste-element="MEDIA_BODY" class="next-1i39mnm">
      <div data-paste-element="BOX" class="next-18dbjl">
        <strong>Chimamanda Ngozi Adichie:</strong> Racism should never have happened and so you don't get a cookie for
        reducing it.
      </div>
    </div>
  </div>
</div>
`)),(0,n.yg)("h2",null,"Customize new custom components"),(0,n.yg)("p",null,"Customizing variants of new custom components works similarly to customizing variants of existing components. Find the newly created element names in the DOM and use those to style your component elements. For example, the following code will customize the neutral variant of the new custom alert component to have a custom background color:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`export const App = () => {
  return (
    <CustomizationProvider
      elements={{
        MY_CUSTOM_ALERT: {
          paddingY: 'space100',
          variants: {
            neutral: {
              backgroundColor: 'colorBackgroundSuccessWeakest',
            },
          },
        },
      }}
    >
      <MyCustomAlert variant="neutral">I am a custom neutral alert</MyCustomAlert>
    </CustomizationProvider>
  );
};
`)),(0,n.yg)("h2",null,"Elements API"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"CustomizationProvider")," has an ",(0,n.yg)("inlineCode",{parentName:"p"},"elements")," object that you can use to customize any component in Paste. Here's an example of what the ",(0,n.yg)("inlineCode",{parentName:"p"},"elements")," object looks like:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},`type Elements = {
  // elementName is the name of the component you want to customize
  [elementName: string]: SystemStyleObject &
    AllStyleProps & {
      // variants is an optional object that allows you to customize a specific variant of a component
      variants?: {
        [key: string]: (SystemCssProperties | CSSPseudoSelectorProps | CSSSelectorObject) & AllStyleProps;
      };
    };
};
`)),(0,n.yg)("p",null,"To use the ",(0,n.yg)("inlineCode",{parentName:"p"},"elements")," object, you need to know the name of the component you want to customize. For example, if you want to customize the Alert component, you would use the element name ",(0,n.yg)("inlineCode",{parentName:"p"},"ALERT"),"."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"elements")," object is made up of two parts: the ",(0,n.yg)("inlineCode",{parentName:"p"},"SystemStyleObject")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"AllStyleProps"),". The ",(0,n.yg)("inlineCode",{parentName:"p"},"SystemStyleObject")," is a ",(0,n.yg)("a",{parentName:"p",href:"https://styled-system.com/"},"styled-system")," object that accepts any valid CSS properties. It extends ",(0,n.yg)("a",{parentName:"p",href:"https://emotion.sh/docs/object-styles"},"Emotion style props")," such that properties that are part of the ",(0,n.yg)("inlineCode",{parentName:"p"},"Theme")," will be transformed to their corresponding values. ",(0,n.yg)("inlineCode",{parentName:"p"},"AllStyleProps")," is a Paste flavoured extension, that ties certain CSS properties to ",(0,n.yg)("a",{parentName:"p",href:"/tokens/list"},"Paste Design Tokens")," based on their categories. ",(0,n.yg)("inlineCode",{parentName:"p"},"SystemStyleObject")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"AllStyleProps")," combined also allows for the use of ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"},"pseudo selectors")," and ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements"},"pseudo elements"),"."),(0,n.yg)("p",null,"Here's an example of how to use the ",(0,n.yg)("inlineCode",{parentName:"p"},"elements")," object:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`<CustomizationProvider
  elements={{
    ALERT: {
      // a valid CSS property
      display: 'block',
      // a valid Paste style property, which takes a token name as a value
      backgroundColor: 'colorBackgroundSuccessWeakest',
      // a CSS pseudo selector
      ':hover': {
        // a valid CSS property
        display: 'block',
        // a valid Paste style property, which takes a token name as a value
        backgroundColor: 'colorBackgroundSuccessWeakest',
      },
      // a CSS selector
      '> div': {
        // a valid CSS property
        display: 'block',
        // a valid Paste style property, which takes a token name as a value
        backgroundColor: 'colorBackgroundSuccessWeakest',
      },
    },
  }}
/>
`)),(0,n.yg)("p",null,"In the example above, we're customizing the Alert component by changing its ",(0,n.yg)("inlineCode",{parentName:"p"},"display")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"backgroundColor")," properties. We're also using a CSS pseudo selector and a CSS selector to target specific parts of the component."),(0,n.yg)("p",null,"You can also use the ",(0,n.yg)("inlineCode",{parentName:"p"},"variants")," key to customize a specific variant of a component. Here's an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},`<CustomizationProvider
  elements={{
    ALERT: {
      variants: {
        neutral: {
          backgroundColor: 'colorBackgroundSuccessWeakest',
        },
      },
    },
  }}
/>
`)),(0,n.yg)("p",null,"In the example above, we're customizing the ",(0,n.yg)("inlineCode",{parentName:"p"},"neutral")," variant of the Alert component by changing its ",(0,n.yg)("inlineCode",{parentName:"p"},"backgroundColor")," property."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"elements")," object is a very powerful API that allows you to customize any component in Paste. It's incredibly flexible, and allows you to customize almost all parts of a component with any valid, Paste flavoured ",(0,n.yg)("a",{parentName:"p",href:"https://emotion.sh/docs/object-styles"},"Emotion Style Object"),"."),(0,n.yg)("p",null,"By following these examples, you can easily customize Paste components to achieve the desired look and feel for your software interfaces. Below we've included a Codesandbox for you to fork and experiment with:"),(0,n.yg)("iframe",{src:"https://codesandbox.io/embed/customizing-components-7lf2we?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"Customizing Components",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))))}v.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=21949)),_N_E=e.O()}]);