(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2548],{40615:(e,t,o)=>{"use strict";o.d(t,{A:()=>y});var n=o(72387),a=o(76127),i=o(95669),l=o.n(i),r=o(81278);o(55729);var p=o(10511),s=o(43084),c=o(10732),d=o(62887),h=o(63437),u=o(38992);let m={h1:()=>null},y=({children:e,meta:t,navigationData:o,data:i,mdxHeadings:y,pageHeaderData:{categoryRoute:g,githubUrl:f,storybookUrl:b}})=>{let T=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,v=t.description||u.DZ.DESCRIPTION,w=(0,r.useRouter)();return(0,n.FD)(h.T,{navigationData:o,children:[(0,n.FD)(l(),{children:[(0,n.Y)("title",{children:T}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${w.pathname}`}),(0,n.Y)("meta",{name:"description",content:v},"description")]}),(0,n.FD)(p.s,{children:[(0,n.Y)(d.c,{categoryRoute:g,githubUrl:f,storybookUrl:b,data:i}),(0,n.FD)(a.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(c.i,{data:y}),(0,n.Y)(a.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(s.Q,{componentOverrides:t.package?m:{},children:e})})]})]})]})}},43631:(e,t,o)=>{"use strict";o.r(t),o.d(t,{__N_SSG:()=>g,default:()=>I,getStaticProps:()=>b,mdxHeadings:()=>T,meta:()=>f}),o(55729);var n=o(11885),a=o(4073),i=o(76127),l=o(95036),r=o(84498),p=o(59508),s=o(83889),c=o(629),d=o(44255),h=o(51582);let u=`
const StateHookExample = () => {
  const tooltip = useTooltipState();
  return (
    <Stack orientation="horizontal" spacing="space60">
      <Tooltip
      state={tooltip}
      text="This should be visible by pressing another button"
      >
        <Button variant="primary">Open tooltip</Button>
      </Tooltip>
      <Button variant="secondary" onClick={() => tooltip.show()}>
        Open tooltip on click
      </Button>
      <Button variant="secondary" onClick={() => tooltip.hide()}>
        Close tooltip on click
      </Button>
    </Stack>
  );
};

render(
  <StateHookExample />
)
`.trim(),m=`
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} {...props} style={{backgroundColor: 'white', border: '1px solid #000', color: '#000', borderRadius: '5px', padding: '5px'}}>
    Fancy button: {props.children}
  </button>
));

const NonPasteChildComponent = () => {
  return (
    <Tooltip text="Forwarding refs correctly!">
      <FancyButton>Fancy!</FancyButton>
    </Tooltip>
  );
};

render(
  <NonPasteChildComponent />
)
`.trim();var y=o(40615),g=!0;let f={title:"Tooltip",package:"@twilio-paste/tooltip",description:"A Tooltip is a page overlay that displays non-interactive clarifying text related to an element that’s in a focused or hovered state.",slug:"/components/tooltip/"},b=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:T,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/tooltip",storybookUrl:"/?path=/story/components-tooltip--default"}}}),T=[{value:"Guidelines",depth:2},{value:"About Tooltip",depth:3},{value:"Tooltip compared to Popover",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Basic Tooltip",depth:3},{value:"Controlling placement",depth:3},{value:"Focusable element",depth:3},{value:"Tooltips require their children to forwardRefs",depth:3},{value:"Using state hooks",depth:3},{value:"Composition notes",depth:2},{value:"Do and don't",depth:2}],v=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},w=v("LivePreview"),k=v("DoDont"),x=v("Do"),N=v("Dont"),D={meta:f,getStaticProps:b,mdxHeadings:T},B=y.A;function I({components:e,...t}){return(0,n.yg)(B,{...D,...t,components:e,mdxType:"MDXLayout"},(0,n.yg)(w,{scope:{Tooltip:d.m,Button:l.$n},mdxType:"LivePreview"},`<Tooltip text="Black Lives Matter. We stand with the Black community.">
  <Button variant="primary">✊ Action</Button>
</Tooltip>`),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About Tooltip"),(0,n.yg)("p",null,`The Tooltip component is a popup that displays text related to an element when the element is focused via
the keyboard or on mouse hover. They should never contain information essential to task completion, or be used for an error. Tooltip follows the
`,(0,n.yg)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices/#tooltip"},"WAI-ARIA Tooltip Pattern"),"."),(0,n.yg)("h3",null,"Tooltip compared to Popover"),(0,n.yg)(i.az,{marginBottom:"space70",mdxType:"Box"},(0,n.yg)(p.g,{ratio:"16:9",mdxType:"AspectRatio"},(0,n.yg)("iframe",{src:"https://www.loom.com/embed/f70204bd8a4f4f21a5b1ded17f4559d1",frameborder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowfullscreen:!0}))),(0,n.yg)("h3",null,"Accessibility"),(0,n.yg)("p",null,"A tooltip must be placed on ",(0,n.yg)("strong",{parentName:"p"},"only a natively focusable HTML element"),", like an enabled ",(0,n.yg)("a",{parentName:"p",href:"/components/button"},"Button")," or an ",(0,n.yg)("a",{parentName:"p",href:"/components/anchor"},"Anchor"),". ",(0,n.yg)("strong",{parentName:"p"},"Do not")," place tooltips on non-focusable elements, like an icon, or disabled components, like a button. Keyboard users cannot focus on disabled components."),(0,n.yg)("p",null,"If your tooltip wraps a natively focusable HTML element that includes only an icon, make sure you set the prop ",(0,n.yg)("inlineCode",{parentName:"p"},"decorative={false}"),`, and
give the icon a title. The title of the icon should be the accessible name for the button action, like "Delete phone number". The tooltip provides the additional context, like "You can delete phone numbers every 7 days".
This ensures the icon and tooltip are accessible to screen readers. Refer to the `,(0,n.yg)("a",{parentName:"p",href:"#focusable-element"},"focusable element example")," for implementation."),(0,n.yg)("p",null,"When the user focuses an element with a tooltip, their focus stays on the element. Since focus never goes inside the tooltip, do not use additional components, like an ",(0,n.yg)("a",{parentName:"p",href:"/components/anchor"},"Anchor"),", within the Tooltip."),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Basic Tooltip"),(0,n.yg)(w,{scope:{Tooltip:d.m,Button:l.$n},mdxType:"LivePreview"},`<Tooltip text="Black Lives Matter. We stand with the Black community.">
  <Button variant="primary">✊ Action</Button>
</Tooltip>`),(0,n.yg)("h3",null,"Controlling placement"),(0,n.yg)("p",null,"The placement of the tooltip is configurable via the ",(0,n.yg)("inlineCode",{parentName:"p"},"placement"),` prop. The available placement options are
available in the `,(0,n.yg)("a",{parentName:"p",href:"#tooltip-props"},"props description here"),`. No matter the placement, the tooltip will always adjust
to remain in the screen so you don't have to worry about it going off the page, or being covered by another element.`),(0,n.yg)(w,{scope:{Tooltip:d.m,Button:l.$n},mdxType:"LivePreview"},`<Tooltip text="Welcome to Paste!" placement="right">
  <Button variant="primary">Open Tooltip</Button>
</Tooltip>`),(0,n.yg)("h3",null,"Focusable element"),(0,n.yg)("p",null,"A tooltip ",(0,n.yg)("strong",{parentName:"p"},"must")," be placed on a ",(0,n.yg)("strong",{parentName:"p"},"focusable")," element, such as an anchor or button."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Do not")," place tooltips on non-focusable elements, like an icon. Wrap them in a focusable element and place the tooltip on that."),(0,n.yg)(w,{scope:{Tooltip:d.m,Anchor:a.Mz,Box:i.az,InformationIcon:s.InformationIcon,Text:c.EY},mdxType:"LivePreview"},`<Box display="flex" alignItems="center">
  <Text as="span">Social Security Number</Text>
  <Tooltip text="Your nine-digit Social Security number is your first and continuous connection with Social Security.">
    <Anchor href="https://paste.twilio.design">
      <InformationIcon decorative={false} title="Open Tooltip" display="block" />
    </Anchor>
  </Tooltip>
</Box>`),(0,n.yg)("h3",null,"Tooltips require their children to forwardRefs"),(0,n.yg)("p",null,"If you want to add a Tooltip around a React component, you must make sure that component ",(0,n.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html"},"forwards refs"),". All Paste components do this by default, so this is only a concern when placing Tooltips around other types of components."),(0,n.yg)(w,{scope:{Tooltip:d.m},noInline:!0,language:"jsx",mdxType:"LivePreview"},m),(0,n.yg)("h3",null,"Using state hooks"),(0,n.yg)("p",null,`The tooltip comes with the option of "hooking" into the internal state by using the state hook originally provided by
`,(0,n.yg)("a",{parentName:"p",href:"https://reakit.io/docs/tooltip/#usetooltipstate"},"Reakit"),"."),(0,n.yg)("p",null,"Rather than the state be internal to the component, you can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"useTooltipState"),` hook and pass the returned state
to `,(0,n.yg)("inlineCode",{parentName:"p"},"Tooltip")," as the ",(0,n.yg)("inlineCode",{parentName:"p"},"state")," prop."),(0,n.yg)("p",null,"This allows you to use certain returned props from the state hook, including functions like ",(0,n.yg)("inlineCode",{parentName:"p"},"hide")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"show"),"."),(0,n.yg)("p",null,`An example usecase of this might be programmatically providing the user a tooltip when a certain user action is taken.
In the example below we are showing a tooltip when another button is pressed. When pressed the button uses the `,(0,n.yg)("inlineCode",{parentName:"p"},"show"),`
function from the hook. Another button using the `,(0,n.yg)("inlineCode",{parentName:"p"},"hide"),` function from the hook is also provided to hide the tooltip
when pressed.`),(0,n.yg)("p",null,`It should be noted that when doing so, the state prop takes precident over the other properties that affect
the state or initial state of the Tooltip. They will be ignored in favour of them being provided as arguments
to the useTooltipState hook.`),(0,n.yg)("p",null,`For full details on how to use the state hook, and what props to provide it, follow the
`,(0,n.yg)("a",{parentName:"p",href:"/primitives/tooltip-primitive"},"Tooltip Primitive documentation"),". It's the same hook, just renamed."),(0,n.yg)(w,{scope:{useTooltipState:h.i8,Tooltip:d.m,Stack:r.B,Button:l.$n},noInline:!0,language:"jsx",mdxType:"LivePreview"},u),(0,n.yg)("h2",null,"Composition notes"),(0,n.yg)("p",null,"Tooltips can only contain text content, and should contain only information that is useful additional context or guidance for the user. If you need to include an ",(0,n.yg)("a",{parentName:"p",href:"/components/anchor"},"Anchor")," or icons, use a ",(0,n.yg)("a",{parentName:"p",href:"/components/popover"},"Popover")," instead."),(0,n.yg)("p",null,"Never put information essential to task completion in a Tooltip. Furthermore, Tooltips are easily overlooked and disappear when not focused on, so consider whether the information may be better served by another component. Use ",(0,n.yg)("a",{parentName:"p",href:"/components/help-text"},"Help Text"),", which is persistent and more obvious, for essential information."),(0,n.yg)("p",null,"Do not use a Tooltip on a disabled ",(0,n.yg)("a",{parentName:"p",href:"/components/button"},"Button")," to explain why the button is unavailable. The disabled button isn't focusable."),(0,n.yg)("p",null,"Use full sentences and punctuation. Include no more than three lines of text."),(0,n.yg)("h2",null,"Do and don't"),(0,n.yg)(k,{mdxType:"DoDont"},(0,n.yg)(x,{title:"Do",body:"Use Tooltips to provide additional helpful information or guidance.",preview:!1,mdxType:"Do"}),(0,n.yg)(N,{title:"Don't",body:"Don't use Tooltips for information essential to task completion.",preview:!1,mdxType:"Dont"})),(0,n.yg)(k,{mdxType:"DoDont"},(0,n.yg)(x,{title:"Do",body:"Use Tooltips only on focusable elements.",preview:!1,mdxType:"Do"}),(0,n.yg)(N,{title:"Don't",body:"Don't use Tooltips on non-focusable elements, like icons and disabled buttons.",preview:!1,mdxType:"Dont"})),(0,n.yg)(k,{mdxType:"DoDont"},(0,n.yg)(x,{title:"Do",body:"Include only text in Tooltip content.",preview:!1,mdxType:"Do"}),(0,n.yg)(N,{title:"Don't",body:"Don't include links in Tooltip content.",preview:!1,mdxType:"Dont"})))}I.isMDXComponent=!0},63434:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tooltip",function(){return o(43631)}])},83889:(e,t,o)=>{"use strict";o.r(t),o.d(t,{InformationIcon:()=>l});var n=o(36669),a=o(55729),i=o(96316);let l=a.forwardRef(({as:e,display:t,element:o="ICON",size:l,color:r,title:p,decorative:s},c)=>{let d=`InformationIcon-${(0,n.GV)()}`;if(!s&&null==p)throw Error("[InformationIcon]: Missing a title for non-decorative icon.");return a.createElement(i.IconWrapper,{as:e,display:t,element:o,size:l,color:r,ref:c},a.createElement("svg",{role:"img","aria-hidden":s,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":d},p?a.createElement("title",{id:d},p):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 2a8 8 0 110 16 8 8 0 010-16zm0 1.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM10 9a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z"})))});l.displayName="InformationIcon"}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=63434)),_N_E=e.O()}]);