(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2160],{4552:(e,i,t)=>{"use strict";t.r(i),t.d(i,{__N_SSG:()=>I,default:()=>R,getStaticProps:()=>N,mdxHeadings:()=>C,meta:()=>E});var s=t(55729),o=t(11885),r=t(17938),n=t(76127),a=t(27717),p=s.forwardRef(({element:e="DESCRIPTION_LIST",children:i,...t},o)=>s.createElement(n.az,{...(0,n.x8)(t),as:"dl",marginY:"space0",ref:o,element:e},i));p.displayName="DescriptionList";var c=s.forwardRef(({element:e="DESCRIPTION_LIST_TERM",children:i,...t},o)=>s.createElement(n.az,{...(0,n.x8)(t),as:"dt",ref:o,element:e,fontWeight:"fontWeightSemibold",color:"colorText",fontSize:"fontSize30",lineHeight:"lineHeight30",margin:"space0"},i));c.displayName="DescriptionListTerm";var l=s.forwardRef(({element:e="DESCRIPTION_LIST_DETAILS",children:i,...t},o)=>s.createElement(n.az,{...(0,n.x8)(t),as:"dd",ref:o,element:e,margin:"space0",color:"colorText",fontWeight:"fontWeightNormal",lineHeight:"lineHeight30",fontSize:"fontSize30",overflowWrap:"break-word"},i));l.displayName="DescriptionListDetails";var D=a.I4.div((0,a.AH)({":not(:last-of-type)":{marginBottom:"space60"},"& > dd:not(:last-of-type)":{marginBottom:"space10"},"& > dt:last-of-type":{marginBottom:"space20"},"& > dt:not(:last-of-type)":{marginBottom:"space10"}})),d=s.forwardRef(({element:e="DESCRIPTION_LIST_SET",children:i,...t},o)=>s.createElement(n.az,{...(0,n.x8)(t),as:D,ref:o,element:e},i));d.displayName="DescriptionListSet";var m=t(50010),L=t(127),u=t(36146),h=t(48866),y=t(629),g=t(89564),T=t(41781);let f=`
const DescriptionListExample = () => {

  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Term 1</DescriptionListTerm>
        <DescriptionListDetails>Details 1</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Term 2</DescriptionListTerm>
        <DescriptionListDetails>Details 2</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};
render(<DescriptionListExample />)
`.trim(),x=`
const DescriptionListExample = () => {

  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Phone</DescriptionListTerm>
        <DescriptionListDetails>
          <Box display="flex">
            <ProcessSuccessIcon
              color="colorTextIconSuccess"
              decorative={false}
              title="success" />
            <Text as="span" marginLeft="space20">Success</Text>
          </Box>
        </DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Email</DescriptionListTerm>
        <DescriptionListDetails>
          <Box display="flex">
            <ProcessErrorIcon
              color="colorTextIconError"
              decorative={false}
              title="error" />
            <Text as="span" marginLeft="space20">Error</Text>
          </Box>
        </DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>SMS</DescriptionListTerm>
        <DescriptionListDetails>
          <Box display="flex">
            <ProcessInProgressIcon
              color="colorTextIconNeutral"
              decorative={false}
              title="In-progress" />
            <Text as="span" marginLeft="space20">In-progress</Text>
          </Box>
        </DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};
render(<DescriptionListExample />)
`.trim(),b=`
const DescriptionListExample = () => {

  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Service 123</DescriptionListTerm>
        <DescriptionListTerm>Default Service</DescriptionListTerm>
        <DescriptionListDetails>AC7d08e4b7ef19bcc5240e7e9ca3978906</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};
render(<DescriptionListExample />)
`.trim(),S=`
const DescriptionListExample = () => {

  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Account SIDs</DescriptionListTerm>
        <DescriptionListDetails>AC7d08e4b7ef19bcc5240e7e9ca3978906</DescriptionListDetails>
        <DescriptionListDetails>AC4c86dc110e8deadf19fde8edfda87678</DescriptionListDetails>
        <DescriptionListDetails>AC6f0d431ab0655267387a9ab4065b9a03</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};
render(<DescriptionListExample />)
`.trim(),v=`
const DescriptionListExample = () => {

  return (
    <DescriptionList>
      <DescriptionListSet>
        <DescriptionListTerm>Name</DescriptionListTerm>
        <DescriptionListDetails>Ramon Hughes</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Phone number</DescriptionListTerm>
        <DescriptionListDetails>-</DescriptionListDetails>
      </DescriptionListSet>
      <DescriptionListSet>
        <DescriptionListTerm>Email address</DescriptionListTerm>
        <DescriptionListDetails>ramonhughes@abc.com</DescriptionListDetails>
      </DescriptionListSet>
    </DescriptionList>
  );
};
render(<DescriptionListExample />)
`.trim();var w=t(40615),I=!0;let E={title:"Description List",package:"@twilio-paste/description-list",description:"A Description List is a set or sets of terms and their definitions, or details, used to display data.",slug:"/components/description-list/"},N=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:C,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/description-list",storybookUrl:"/?path=/story/components-description-list--default"}}}),C=[{value:"Guidelines",depth:2},{value:"About Description List",depth:3},{value:"Accessibility",depth:4},{value:"Examples",depth:2},{value:"Basic Description List",depth:3},{value:"Description List with Icon",depth:3},{value:"Description List with multiple Terms",depth:3},{value:"Description List with multiple Details",depth:3},{value:"Description List with empty state",depth:3},{value:"Composition Notes",depth:2},{value:"When to use Description List",depth:3}],P=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)},_={meta:E,getStaticProps:N,mdxHeadings:C},k=w.A;function R({components:e,...i}){return(0,o.yg)(k,{..._,...i,components:e,mdxType:"MDXLayout"},(0,o.yg)(P,{scope:{DescriptionList:p,DescriptionListSet:d,DescriptionListTerm:c,DescriptionListDetails:l,Card:r.Z},noInline:!0,mdxType:"LivePreview"},f),(0,o.yg)("h2",null,"Guidelines"),(0,o.yg)(m.f,{mdxType:"Paragraph"},E.description),(0,o.yg)("h3",null,"About Description List"),(0,o.yg)("p",null,"The Description List package consists of ",(0,o.yg)("inlineCode",{parentName:"p"},"DescriptionList")," itself, plus ",(0,o.yg)("inlineCode",{parentName:"p"},"DescriptionListSet"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"DescriptionListTerm"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"DescriptionListDetails"),". The ",(0,o.yg)("inlineCode",{parentName:"p"},"DescriptionList")," should wrap the other elements, and its children should always follow the order of term, details, term, details, each of the term-details pairs inside of a set. It's okay for multiple terms to correlate to a single detail, and for multiple details to correlate to a single term. As long as they're in the proper order, and nested inside of their unique sets, the term-details association will be clear. If you have a term without details, be sure to include either the empty state of the details tag (",(0,o.yg)("inlineCode",{parentName:"p"},"<DescriptionListDetails />"),") or a symbol to indicate the empty state such as ",(0,o.yg)("inlineCode",{parentName:"p"},"-"),"."),(0,o.yg)("h4",null,"Accessibility"),(0,o.yg)("p",null,"Description List is a ",(0,o.yg)("inlineCode",{parentName:"p"},"<dl>"),", Description List Term is a ",(0,o.yg)("inlineCode",{parentName:"p"},"<dt>"),", and Description List Details is a ",(0,o.yg)("inlineCode",{parentName:"p"},"<dd>"),". Assistive technology isn't perfect when it comes to reading Description Lists. In order to best support screen readers and other ATs, be sure to follow best practices for building accessible Description Lists. They must only contain properly-ordered Description Terms and Description Details. If the children are out of order, the screen readers will have trouble conveying the intended meaning to the user."),(0,o.yg)("p",null,"If any of your terms are missing details, or vice versa, be sure to still include the empty tag. This will communicate to ATs that the value is empty, rather than assuming it's paired with the next existing term/details. If, in your Description List, you have a term with 2 details, or 2 terms that apply to the same detail, list them in order and don't include empty tags to follow the term-details pattern. ",(0,o.yg)("a",{parentName:"p",href:"#examples"},"See the examples below")," for more guidance."),(0,o.yg)("h2",null,"Examples"),(0,o.yg)("h3",null,"Basic Description List"),(0,o.yg)("p",null,"Use a basic Description List for conveying small, static bits of data."),(0,o.yg)(P,{scope:{DescriptionList:p,DescriptionListSet:d,DescriptionListTerm:c,DescriptionListDetails:l},language:"jsx",noInline:!0,mdxType:"LivePreview"},f),(0,o.yg)("h3",null,"Description List with Icon"),(0,o.yg)("p",null,"The Description List can be used with ",(0,o.yg)("a",{parentName:"p",href:"/patterns/object-status"},"Object Status Pattern"),"."),(0,o.yg)(P,{scope:{DescriptionList:p,DescriptionListSet:d,DescriptionListTerm:c,DescriptionListDetails:l,ProcessSuccessIcon:L.ProcessSuccessIcon,ProcessErrorIcon:u.ProcessErrorIcon,ProcessInProgressIcon:h.ProcessInProgressIcon,Text:y.EY,Box:n.az},language:"jsx",noInline:!0,mdxType:"LivePreview"},x),(0,o.yg)("h3",null,"Description List with multiple Terms"),(0,o.yg)("p",null,"Sometimes you'll need to pair multiple terms with a single detail. Use this example for guidance."),(0,o.yg)(P,{scope:{DescriptionList:p,DescriptionListSet:d,DescriptionListTerm:c,DescriptionListDetails:l},language:"jsx",noInline:!0,mdxType:"LivePreview"},b),(0,o.yg)("h3",null,"Description List with multiple Details"),(0,o.yg)("p",null,"Sometimes you'll need to pair multiple details with a single term. Use this example for guidance."),(0,o.yg)(P,{scope:{DescriptionList:p,DescriptionListSet:d,DescriptionListTerm:c,DescriptionListDetails:l},language:"jsx",noInline:!0,mdxType:"LivePreview"},S),(0,o.yg)("h3",null,"Description List with empty state"),(0,o.yg)("p",null,"If one of your details is missing, indicate the empty state by using an empty tag (",(0,o.yg)("inlineCode",{parentName:"p"},"<DescriptionListDetails />"),") or using a symbol such as ",(0,o.yg)("inlineCode",{parentName:"p"},"-"),"."),(0,o.yg)(P,{scope:{DescriptionList:p,DescriptionListSet:d,DescriptionListTerm:c,DescriptionListDetails:l},language:"jsx",noInline:!0,mdxType:"LivePreview"},v),(0,o.yg)("h2",null,"Composition Notes"),(0,o.yg)("p",null,"Be sure to include text in each term. The content of a term should not be a standalone icon or other visual element."),(0,o.yg)("p",null,"Terms are paired with details based on their order within the Description List. If a Description List Term has an empty Description List Details, be sure to still include an empty details tag or a ",(0,o.yg)("inlineCode",{parentName:"p"},"-")," to signify the empty state. In the example below, the email address value is paired with both terms - Phone Number and Email."),(0,o.yg)(r.Z,{mdxType:"Card"},(0,o.yg)(T.z,{mdxType:"Codeblock"},`
<DescriptionList>
  <DescriptionListSet>
    <DescriptionListTerm>Phone Number</DescriptionListTerm>
    <DescriptionListTerm>Email</DescriptionListTerm>
    <DescriptionListDetails>twilion@twilio.com</DescriptionListDetails>
  </DescriptionListSet>
</DescriptionList>
`)),(0,o.yg)("br",null),(0,o.yg)("p",null,"Instead, include an empty tag (or a symbol, such as ",(0,o.yg)("inlineCode",{parentName:"p"},"-"),") to signify the empty state of a given term, and separate out the sets:"),(0,o.yg)(r.Z,{mdxType:"Card"},(0,o.yg)(T.z,{mdxType:"Codeblock"},`
<DescriptionList>
  <DescriptionListSet>
    <DescriptionListTerm>Phone Number</DescriptionListTerm>
    <DescriptionListDetails />
  </DescriptionListSet>
  <DescriptionListSet>
    <DescriptionListTerm>Email</DescriptionListTerm>
    <DescriptionListDetails>twilion@twilio.com</DescriptionListDetails>
  </DescriptionListSet>
</DescriptionList>
`)),(0,o.yg)("br",null),(0,o.yg)("h3",null,"When to use Description List"),(0,o.yg)(g.l,{mdxType:"DoDont"},(0,o.yg)(g.Do,{title:"Do",body:"Use a <DescriptionListSet> to wrap your set of Term and Details within the Description List for extra separation and control.",center:!0,mdxType:"Do"}),(0,o.yg)(g.w,{title:"Don't",body:"Don't use any other type of HTML element as children of the Description List (besides DescriptionListSet, DescriptionListTerm, DescriptionListDetails, or <div>).",center:!0,mdxType:"Dont"})),(0,o.yg)(g.l,{mdxType:"DoDont"},(0,o.yg)(g.Do,{title:"Do",body:"Use Description List for small amounts of data.",mdxType:"Do"}),(0,o.yg)(g.w,{title:"Don't",body:"Don't use for interactive data, form controls, or data sets. Consider using Table or Data Grid, especially if you want columns or column headers.",mdxType:"Dont"})),(0,o.yg)(g.l,{mdxType:"DoDont"},(0,o.yg)(g.Do,{title:"Do",body:"Use flow content as children to Description Term and Description Details.",mdxType:"Do"}),(0,o.yg)(g.w,{title:"Don't",body:"Don’t use headers or footers as children to Description Term or Description Details.",mdxType:"Dont"})))}R.isMDXComponent=!0},17938:(e,i,t)=>{"use strict";t.d(i,{Z:()=>r});var s=t(76127),o=t(55729),r=o.forwardRef(({children:e,element:i="CARD",padding:t="space100",paddingBottom:r,paddingLeft:n,paddingRight:a,paddingTop:p,fillHeight:c,fillWidth:l,...D},d)=>o.createElement(s.az,{...(0,s.x8)(D),ref:d,as:"article",borderWidth:"borderWidth10",borderColor:"colorBorderWeaker",borderStyle:"solid",borderRadius:"borderRadius30",element:i,padding:t,paddingBottom:r,paddingLeft:n,paddingRight:a,paddingTop:p,backgroundColor:"colorBackgroundWeakest",height:c?"100%":void 0,width:l?"100%":void 0},e));r.displayName="Card"},31216:(e,i,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/description-list",function(){return t(4552)}])},40615:(e,i,t)=>{"use strict";t.d(i,{A:()=>u});var s=t(72387),o=t(76127),r=t(95669),n=t.n(r),a=t(81278);t(55729);var p=t(10511),c=t(43084),l=t(10732),D=t(62887),d=t(63437),m=t(38992);let L={h1:()=>null},u=({children:e,meta:i,navigationData:t,data:r,mdxHeadings:u,pageHeaderData:{categoryRoute:h,githubUrl:y,storybookUrl:g}})=>{let T=i.title?`${i.title} - ${m.DZ.TITLE}`:m.DZ.TITLE,f=i.description||m.DZ.DESCRIPTION,x=(0,a.useRouter)();return(0,s.FD)(d.T,{navigationData:t,children:[(0,s.FD)(n(),{children:[(0,s.Y)("title",{children:T}),(0,s.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${x.pathname}`}),(0,s.Y)("meta",{name:"description",content:f},"description")]}),(0,s.FD)(p.s,{children:[(0,s.Y)(D.c,{categoryRoute:h,githubUrl:y,storybookUrl:g,data:r}),(0,s.FD)(o.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,s.Y)(l.i,{data:u}),(0,s.Y)(o.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,s.Y)(c.Q,{componentOverrides:i.package?L:{},children:e})})]})]})]})}}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=31216)),_N_E=e.O()}]);