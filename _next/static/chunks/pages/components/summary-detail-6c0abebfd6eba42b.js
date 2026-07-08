(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4565],{25368:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/summary-detail",function(){return a(55695)}])},40615:(e,t,a)=>{"use strict";a.d(t,{A:()=>p});var n=a(72387),i=a(76127),o=a(95669),l=a.n(o),r=a(81278);a(55729);var s=a(10511),m=a(43084),u=a(10732),y=a(62887),d=a(63437),g=a(38992);let c={h1:()=>null},p=({children:e,meta:t,navigationData:a,data:o,mdxHeadings:p,pageHeaderData:{categoryRoute:h,githubUrl:T,storybookUrl:D}})=>{let S=t.title?`${t.title} - ${g.DZ.TITLE}`:g.DZ.TITLE,x=t.description||g.DZ.DESCRIPTION,b=(0,r.useRouter)();return(0,n.FD)(d.T,{navigationData:a,children:[(0,n.FD)(l(),{children:[(0,n.Y)("title",{children:S}),(0,n.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${b.pathname}`}),(0,n.Y)("meta",{name:"description",content:x},"description")]}),(0,n.FD)(s.s,{children:[(0,n.Y)(y.c,{categoryRoute:h,githubUrl:T,storybookUrl:D,data:o}),(0,n.FD)(i.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,n.Y)(u.i,{data:p}),(0,n.Y)(i.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,n.Y)(m.Q,{componentOverrides:t.package?c:{},children:e})})]})]})]})}},55695:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>o,default:()=>d,getStaticProps:()=>r,mdxHeadings:()=>s,meta:()=>l}),a(55729);var n=a(11885),i=a(40615),o=!0;let l={title:"Summary Detail - Components",description:"A Summary Detail is a collapsible container that can be used to hide or show content.",slug:"/components/summary-detail"},r=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:s,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/summary-detail",storybookUrl:"/?path=/story/components-summarydetail--default"}}}),s=[{value:"Guidelines",depth:2},{value:"About Summary Detail",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Basic usage",depth:3},{value:"Open by default",depth:3},{value:"State hook",depth:3}],m=function(e){return console.warn("Component StoryPreview was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)},u={meta:l,getStaticProps:r,mdxHeadings:s},y=i.A;function d({components:e,...t}){return(0,n.yg)(y,{...u,...t,components:e,mdxType:"MDXLayout"},(0,n.yg)(m,{title:"Standard Summary Detail",storyID:"components-summarydetail--default",height:"200px",code:`
<SummaryDetail>
  <SummaryDetailHeading>
    <SummaryDetailToggleButton aria-label="BOOP" />
    <SummaryDetailHeadingContent>
      <Text as="p" fontWeight="fontWeightBold">
        Inbound Call
      </Text>
      <Text as="p" fontSize="fontSize20" fontWeight="fontWeightLight">
        Jan 11, 2023
        <Anchor href="#" marginLeft="space30">
          (View transcript)
        </Anchor>
      </Text>
    </SummaryDetailHeadingContent>
  </SummaryDetailHeading>
  <SummaryDetailContent>
    <Text as="strong">Agent: </Text>
    <Text as="span">John Doe</Text>
    <Text as="span" marginX="space40" color="colorTextWeaker">
      |
    </Text>
    <Text as="strong">Duration: </Text>
    <Text as="span">3m 14s</Text>
  </SummaryDetailContent>
</SummaryDetail>`,mdxType:"StoryPreview"}),(0,n.yg)("h2",null,"Guidelines"),(0,n.yg)("h3",null,"About Summary Detail"),(0,n.yg)("p",null,`The Summary Detail component displays a summary of information that can be expanded to show more information.
It can be used when you need more click targets and actions in a Disclosure Heading.`),(0,n.yg)("h3",null,"Accessibility"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Only the toggle button is tabbable and clickable to reveal the content."),(0,n.yg)("li",{parentName:"ul"},"The toggle button is labelled by the ",(0,n.yg)("inlineCode",{parentName:"li"},"SummaryDetailHeadingContent")," component.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"If the heading content is unclear or too verbose, you can provide an ",(0,n.yg)("inlineCode",{parentName:"li"},"aria-label")," to ",(0,n.yg)("inlineCode",{parentName:"li"},"SummaryDetailToggleButton")," directly to enable a more descriptive label.")))),(0,n.yg)("h2",null,"Examples"),(0,n.yg)("h3",null,"Basic usage"),(0,n.yg)("p",null,"This example shows how you can compose the ",(0,n.yg)("a",{parentName:"p",href:"/primitives/text"},"Text component"),` to compose a
basic Summary Detail.`),(0,n.yg)(m,{title:"Standard Summary Detail",storyID:"components-summarydetail--default",height:"200px",code:`
<SummaryDetail>
  <SummaryDetailHeading>
    <SummaryDetailToggleButton aria-label="BOOP" />
    <SummaryDetailHeadingContent>
      <Text as="p" fontWeight="fontWeightBold">
        Inbound Call
      </Text>
      <Text as="p" fontSize="fontSize20" fontWeight="fontWeightLight">
        Jan 11, 2023
        <Anchor href="#" marginLeft="space30">
          (View transcript)
        </Anchor>
      </Text>
    </SummaryDetailHeadingContent>
  </SummaryDetailHeading>
  <SummaryDetailContent>
    <Text as="strong">Agent: </Text>
    <Text as="span">John Doe</Text>
    <Text as="span" marginX="space40" color="colorTextWeaker">
      |
    </Text>
    <Text as="strong">Duration: </Text>
    <Text as="span">3m 14s</Text>
  </SummaryDetailContent>
</SummaryDetail>`,mdxType:"StoryPreview"}),(0,n.yg)("h3",null,"Open by default"),(0,n.yg)("p",null,"You can set the content to be visible by default with the ",(0,n.yg)("inlineCode",{parentName:"p"},"visible")," prop."),(0,n.yg)(m,{title:"Open by default Summary Detail",storyID:"components-summarydetail--open-by-default",height:"200px",code:`
<SummaryDetail visible>
  <SummaryDetailHeading>
    <SummaryDetailToggleButton aria-label="BOOP" />
    <SummaryDetailHeadingContent>
      <Text as="p" fontWeight="fontWeightBold">
        Inbound Call
      </Text>
      <Text as="p" fontSize="fontSize20" fontWeight="fontWeightLight">
        Jan 11, 2023
      </Text>
    </SummaryDetailHeadingContent>
  </SummaryDetailHeading>
  <SummaryDetailContent>
    <Text as="strong">Agent: </Text>
    <Text as="span">John Doe</Text>
    <Text as="span" marginX="space40" color="colorTextWeaker">
      |
    </Text>
    <Text as="strong">Duration: </Text>
    <Text as="span">3m 14s</Text>
  </SummaryDetailContent>
</SummaryDetail>`,mdxType:"StoryPreview"}),(0,n.yg)("h3",null,"State hook"),(0,n.yg)("p",null,"You can control the internal behavior of the Summary Detail component by way of ",(0,n.yg)("a",{parentName:"p",href:"https://kentcdodds.com/blog/inversion-of-control"},"inversion of control"),`.
This is useful for when you want to control the visibility of the Summary Detail component from a parent component.`),(0,n.yg)(m,{title:"State hook example",storyID:"components-summarydetail--state-hook",height:"300px",code:`const useDelayedSummaryDetailState = ({
  delay,
  ...initialState
}) => {
  const disclosure = useSummaryDetailState(initialState);
  const [transitioning, setTransitioning] = React.useState(false);
  return {
    ...disclosure,
    transitioning,
    toggle: () => {
      setTransitioning(true);
      setTimeout(() => {
        disclosure.toggle();
        setTransitioning(false);
      }, delay);
    },
  };
};
const StateHook = () => {
  const { transitioning, ...summaryDetailState } = useDelayedSummaryDetailState({
    delay: 500,
  });
  const clickableHeading = summaryDetailState.visible ? "Hide with delay" : "Show with delay";
  return (
    <>
      <Paragraph>This Disclosure should be visible on load, and take 1 second to open and close.</Paragraph>
      <SummaryDetail state={summaryDetailState}>
        <SummaryDetailHeading>
          <SummaryDetailToggleButton />
          <SummaryDetailHeadingContent>
            {transitioning ? "Please wait..." : clickableHeading}
          </SummaryDetailHeadingContent>
        </SummaryDetailHeading>
        <SummaryDetailContent>
          <Text as="strong">Agent: </Text>
          <Text as="span">John Doe</Text>
          <Text as="span" marginX="space40" color="colorTextWeaker">
            |
          </Text>
          <Text as="strong">Duration: </Text>
          <Text as="span">3m 14s</Text>
        </SummaryDetailContent>
      </SummaryDetail>
    </>
  );
};`,mdxType:"StoryPreview"}))}d.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=25368)),_N_E=e.O()}]);