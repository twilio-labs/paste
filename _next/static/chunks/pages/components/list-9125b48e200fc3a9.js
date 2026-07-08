(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2359],{39864:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/list",function(){return i(64865)}])},40615:(e,t,i)=>{"use strict";i.d(t,{A:()=>c});var s=i(72387),a=i(76127),r=i(95669),n=i.n(r),l=i(81278);i(55729);var d=i(10511),o=i(43084),m=i(10732),p=i(62887),y=i(63437),u=i(38992);let g={h1:()=>null},c=({children:e,meta:t,navigationData:i,data:r,mdxHeadings:c,pageHeaderData:{categoryRoute:h,githubUrl:L,storybookUrl:v}})=>{let D=t.title?`${t.title} - ${u.DZ.TITLE}`:u.DZ.TITLE,I=t.description||u.DZ.DESCRIPTION,O=(0,l.useRouter)();return(0,s.FD)(y.T,{navigationData:i,children:[(0,s.FD)(n(),{children:[(0,s.Y)("title",{children:D}),(0,s.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${O.pathname}`}),(0,s.Y)("meta",{name:"description",content:I},"description")]}),(0,s.FD)(d.s,{children:[(0,s.Y)(p.c,{categoryRoute:h,githubUrl:L,storybookUrl:v,data:r}),(0,s.FD)(a.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,s.Y)(m.i,{data:c}),(0,s.Y)(a.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,s.Y)(o.Q,{componentOverrides:t.package?g:{},children:e})})]})]})]})}},64865:(e,t,i)=>{"use strict";i.r(t),i.d(t,{__N_SSG:()=>u,default:()=>I,getStaticProps:()=>c,mdxHeadings:()=>h,meta:()=>g}),i(55729);var s=i(11885),a=i(4073),r=i(76127),n=i(60798),l=i(17377),d=i(84498),o=i(54652),m=i(41960),p=i(89564),y=i(40615),u=!0;let g={title:"List",package:"@twilio-paste/list",description:"The list component is used to render text as a list of items.",slug:"/components/list/"},c=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:h,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/list",storybookUrl:"/?path=/story/components-list--unordered-list"}}}),h=[{value:"Guidelines",depth:2},{value:"About Lists",depth:3},{value:"Progress Steps vs Ordered Display List vs Timeline",depth:3},{value:"Accessibility",depth:3},{value:"Examples",depth:2},{value:"Unordered List",depth:3},{value:"Ordered List",depth:3},{value:"Ordered Display List",depth:3},{value:"Nesting list items",depth:3},{value:"Ordered Display List nesting",depth:3},{value:"Composition notes",depth:2},{value:"Dos and don'ts",depth:2}],L=function(e){return console.warn("Component LivePreview was not imported, exported, or provided by MDXProvider as global scope"),(0,s.yg)("div",e)},v={meta:g,getStaticProps:c,mdxHeadings:h},D=y.A;function I({components:e,...t}){return(0,s.yg)(D,{...v,...t,components:e,mdxType:"MDXLayout"},(0,s.yg)(L,{scope:{UnorderedList:m.Xy,ListItem:m.ck},language:"jsx",mdxType:"LivePreview"},`<UnorderedList>
  <ListItem>
    Trans black lives matter
  </ListItem>
  <ListItem>
    Queer black lives matter
  </ListItem>
  <ListItem>
    Poor black lives matter
  </ListItem>
  <ListItem>
    Young black lives matter
  </ListItem>
  <ListItem>
    Old black lives matter
  </ListItem>
  <ListItem>
    All black lives matter
  </ListItem>
  </UnorderedList>`),(0,s.yg)("h2",null,"Guidelines"),(0,s.yg)("p",null,"Lists can be:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Unordered, when the meaning of the list is not changed based on the order of the items"),(0,s.yg)("li",{parentName:"ul"},"Ordered, when the order of the list items matters for context to the user."),(0,s.yg)("li",{parentName:"ul"},"Ordered Display List, when you need a visually enhanced numbered list to improve the scannability of sequential steps, instructions, or other content within a single screen.")),(0,s.yg)("h3",null,"About Lists"),(0,s.yg)("p",null,"Lists are a number of connected list items that are printed consecutively, typically one after the other. Lists can be ordered, using numbers as an indicator to the reader, or unordered with bullet points."),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Ordered lists")," are displayed with a preceding number."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Unordered lists")," are displayed with a preceding bullet point."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Ordered Display lists")," are displayed with a preceding visually enhanced number."),(0,s.yg)("li",{parentName:"ul"},"Lists can be nested as deeply as needed, and they may alternate between ordered and unordered."),(0,s.yg)("li",{parentName:"ul"},"Lists should align with the font-size, font-weight, and line-height of paragraphs, but are styled with bullets or numbers."),(0,s.yg)("li",{parentName:"ul"},"Lists can have similar children elements as paragraphs to provide emphasis on a certain word or phrase.")),(0,s.yg)("h3",null,"Progress Steps vs Ordered Display List vs Timeline"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Progress Steps")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/components/progress-steps"},"Progress Steps")," show users an outline of a complex multi-step task across multiple pages or apps."),(0,s.yg)("li",{parentName:"ul"},"Progress Steps convey progression and have interactive status states.")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Ordered Display List")),(0,s.yg)("p",null,`Ordered Display Lists structure tasks but don’t show progression or status through a multi-step task.`),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Timeline")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/components/timeline"},"Timeline")," displays the history or sequence of events, focusing on what has happened over time."),(0,s.yg)("li",{parentName:"ul"},"Use Timeline when user interaction is secondary, and progress does not depend on user actions since the process continues even without direct user input.")),(0,s.yg)("h3",null,"Accessibility"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"ListItem"),"s should always have an ",(0,s.yg)("inlineCode",{parentName:"li"},"OrderedList")," or ",(0,s.yg)("inlineCode",{parentName:"li"},"UnorderedList")," parent component."),(0,s.yg)("li",{parentName:"ul"},"Nested ",(0,s.yg)("inlineCode",{parentName:"li"},"ListItem"),"s should be wrapped in their own, new ",(0,s.yg)("inlineCode",{parentName:"li"},"OrderedList")," or ",(0,s.yg)("inlineCode",{parentName:"li"},"UnorderedList")," parent component. For example:")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-jsx"},`<OrderedList>
  <ListItem>
    Text of the parent list item
    <OrderedList>
      <ListItem>Nested list item</ListItem>
    </OrderedList>
  </ListItem>
</OrderedList>
`)),(0,s.yg)("h2",null,"Examples"),(0,s.yg)("h3",null,"Unordered List"),(0,s.yg)("p",null,"An unordered list is the default variant for List."),(0,s.yg)("p",null,"Use unordered lists to display a basic list of items related to a particular topic. Use Heading and/or body text preceding the list to introduce the linked topic."),(0,s.yg)(L,{scope:{UnorderedList:m.Xy,ListItem:m.ck},language:"jsx",mdxType:"LivePreview"},`<UnorderedList>
  <ListItem>
    Tamir Elijah Rice, November 23, 2014 (12 years old)
  </ListItem>
  <ListItem>
    Philando Divall Castile, July 6, 2016 (32 years old)
  </ListItem>
  <ListItem>
    Trayvon Benjamin Martin, February 26, 2012 (17 years old)
  </ListItem>
  <ListItem>
    Breonna Taylor, March 13, 2020 (26 years old)
  </ListItem>
  <ListItem>
    Shantel Davis, June 14, 2012 (23 years old)
  </ListItem>
  <ListItem>
    Walter Scott, April 4, 2015 (50 years old)
  </ListItem>
  <ListItem>
    Mario Gonzalez, April 19, 2021 (26 years old)
  </ListItem>
</UnorderedList>`),(0,s.yg)("h3",null,"Ordered List"),(0,s.yg)("p",null,"Use ordered list to display a numbered list of items."),(0,s.yg)(L,{scope:{OrderedList:m._J,ListItem:m.ck},language:"jsx",mdxType:"LivePreview"},`<OrderedList>
  <ListItem>
    Tamir Elijah Rice, November 23, 2014 (12 years old)
  </ListItem>
  <ListItem>
    Philando Divall Castile, July 6, 2016 (32 years old)
  </ListItem>
  <ListItem>
    Trayvon Benjamin Martin, February 26, 2012 (17 years old)
  </ListItem>
  <ListItem>
    Breonna Taylor, March 13, 2020 (26 years old)
  </ListItem>
  <ListItem>
    Shantel Davis, June 14, 2012 (23 years old)
  </ListItem>
  <ListItem>
    Walter Scott, April 4, 2015 (50 years old)
  </ListItem>
  <ListItem>
    Mario Gonzalez, April 19, 2021 (26 years old)
  </ListItem>
</OrderedList>`),(0,s.yg)("h3",null,"Ordered Display List"),(0,s.yg)("p",null,"Use an Ordered Display List when you need a visually enhanced numbered list to improve the scannability of sequential steps, instructions, or other content within a single screen."),(0,s.yg)("p",null,"Keep the following guidance in mind when using this component:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Choose a font size for list item labels that doesn't exceed the size of higher hierarchy levels on the page."),(0,s.yg)("li",{parentName:"ul"},"For elements under the list item, avoid using text with a font size larger than the list item label."),(0,s.yg)("li",{parentName:"ul"},"Keep list items labels concise, providing clear and actionable steps for the user to follow.")),(0,s.yg)(o.Pq,{variant:"warning",marginY:"space60",mdxType:"Callout"},(0,s.yg)(o.v,{as:"h3",mdxType:"CalloutHeading"},"Alignment considerations"),(0,s.yg)(o.wz,{mdxType:"CalloutText"},"If you're not utilizing the ",(0,s.yg)(l.R,{mdxType:"InlineCode"},"OrderedDisplayListHeading"),"component, please note that only the ",(0,s.yg)(l.R,{mdxType:"InlineCode"},"heading50")," and",(0,s.yg)(l.R,{mdxType:"InlineCode"},"heading60")," variants are automatically aligned with their corresponding list item numbers.")),(0,s.yg)(L,{scope:{Heading:n.D,Stack:d.B,Anchor:a.Mz,OrderedDisplayList:m.gf,OrderedDisplayListItem:m.re,OrderedDisplayListHeading:m.Yw},language:"jsx",mdxType:"LivePreview"},`<div>
  <Heading variant="heading30" as="h3">Getting started with unified profiles</Heading>
  <OrderedDisplayList variant="heading40">
    <OrderedDisplayListItem>
      <OrderedDisplayListHeading as="div">Set up your Segment Unify space</OrderedDisplayListHeading>
      <Stack orientation="vertical" spacing="space40">
        <div>To get started, let's set up your Segment Unify space. We'll take you to Segment to do this.</div>
        <Anchor href="https://segment.com" showExternal>
          Continue setup in Segment
        </Anchor>
      </Stack>
    </OrderedDisplayListItem>
    <OrderedDisplayListItem>
      <OrderedDisplayListHeading as="div">Confirm your identifier settings</OrderedDisplayListHeading>
      <Stack orientation="vertical" spacing="space40">
        <div>Segment uses identifiers to look up customer profiles. Give your identifiers display
        names, and select the identifiers to use for automatic profile search.</div>
        <Anchor href="https://segment.com" showExternal>
          Continue setup in Segment
        </Anchor>
      </Stack>
    </OrderedDisplayListItem>
    <OrderedDisplayListItem>
      <OrderedDisplayListHeading as="div">Choose your traits</OrderedDisplayListHeading>
      <Stack orientation="vertical" spacing="space40">
        <span>
          Customer profiles on your Segment Unify space may include a large number of traits.
          Choose the traits you want to make available to Flex agents and give them display
          names.
        </span>
        <Anchor href="https://segment.com" showExternal>
          Continue setup in Segment
        </Anchor>
      </Stack>
    </OrderedDisplayListItem>
  </OrderedDisplayList>
</div>`),(0,s.yg)("h3",null,"Nesting list items"),(0,s.yg)("p",null,"List items can be nested within other list items. To do so create a new list as a child to a ",(0,s.yg)("inlineCode",{parentName:"p"},"ListItem"),"."),(0,s.yg)(L,{scope:{OrderedList:m._J,UnorderedList:m.Xy,ListItem:m.ck},language:"jsx",mdxType:"LivePreview"},`<div>
  <OrderedList>
    <ListItem>
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      <UnorderedList marginBottom="space0">
        <ListItem>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </ListItem>
        <ListItem>
          Duis mollis, est non commodo luctus.
        </ListItem>
      </UnorderedList>
    </ListItem>
    <ListItem>
      Duis mollis, est non commodo luctus.
    </ListItem>
  </OrderedList>
  <UnorderedList>
    <ListItem>
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      <OrderedList marginBottom="space0">
        <ListItem>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </ListItem>
        <ListItem>
          Duis mollis, est non commodo luctus.
        </ListItem>
      </OrderedList>
    </ListItem>
    <ListItem>
      Duis mollis, est non commodo luctus.
    </ListItem>
  </UnorderedList>
</div>`),(0,s.yg)("h3",null,"Ordered Display List nesting"),(0,s.yg)("p",null,`The Ordered Display List is designed to convey hierarchy without influencing deeper levels.
If your content requires more than 2 levels, use Headings to establish hierarchy before starting the list.`),(0,s.yg)("p",null,"All elements under a list item should be included inside the list item, ensuring they share the same indentation."),(0,s.yg)(L,{scope:{Stack:d.B,OrderedDisplayList:m.gf,OrderedDisplayListItem:m.re,OrderedDisplayListHeading:m.Yw},language:"jsx",mdxType:"LivePreview"},`<div>
  <OrderedDisplayList variant="heading30">
    <OrderedDisplayListItem>
      <OrderedDisplayListHeading as="div">Vivamus sagittiss</OrderedDisplayListHeading>
      <Stack orientation="vertical" spacing="space40">
        <div>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</div>
        <OrderedDisplayList variant="heading40">
          <OrderedDisplayListItem>
            <OrderedDisplayListHeading as="div">Vivamus sagittiss</OrderedDisplayListHeading>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </OrderedDisplayListItem>
          <OrderedDisplayListItem>
            <OrderedDisplayListHeading as="div">Duis mollis</OrderedDisplayListHeading>
            Duis mollis, est non commodo luctus.
          </OrderedDisplayListItem>
        </OrderedDisplayList>
      </Stack>
    </OrderedDisplayListItem>
    <OrderedDisplayListItem>
      <OrderedDisplayListHeading as="div">Duis mollis</OrderedDisplayListHeading>
      Duis mollis, est non commodo luctus.
    </OrderedDisplayListItem>
    <OrderedDisplayListItem>
      <OrderedDisplayListHeading as="div">Vivamus sagittiss</OrderedDisplayListHeading>
      <Stack orientation="vertical" spacing="space40">
        <div>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</div>
        <OrderedDisplayList variant="heading40">
          <OrderedDisplayListItem>
            <OrderedDisplayListHeading as="div">Vivamus sagittiss</OrderedDisplayListHeading>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </OrderedDisplayListItem>
          <OrderedDisplayListItem>
            <OrderedDisplayListHeading as="div">Duis mollis</OrderedDisplayListHeading>
            Duis mollis, est non commodo luctus.
          </OrderedDisplayListItem>
        </OrderedDisplayList>
      </Stack>
    </OrderedDisplayListItem>
  </OrderedDisplayList>
</div>`),(0,s.yg)("h2",null,"Composition notes"),(0,s.yg)("p",null,'Start each list item with the same part of speech, usually a noun or verb. This makes the list "parallel."'),(0,s.yg)("p",null,"Do not use a period at the end of list items unless they are complete sentences. Do not use commas or ellipses at the end of list items."),(0,s.yg)("p",null,"Avoid listing very long lists. Where possible, make a big list into smaller ones with explanatory ",(0,s.yg)("a",{parentName:"p",href:"/components/heading"},"Headings"),"."),(0,s.yg)("h2",null,"Dos and don'ts"),(0,s.yg)(p.l,{mdxType:"DoDont"},(0,s.yg)(p.Do,{title:"Do",body:"Use a list when you have more than one item or point.",center:!0,mdxType:"Do"},(0,s.yg)(m.Xy,{mdxType:"UnorderedList"},(0,s.yg)(m.ck,{mdxType:"ListItem"},"Point one"),(0,s.yg)(m.ck,{mdxType:"ListItem"},"Point two"),(0,s.yg)(m.ck,{mdxType:"ListItem"},"Point three"))),(0,s.yg)(p.w,{title:"Don't",body:"Don’t use lists for a single item.",center:!0,mdxType:"Dont"},(0,s.yg)(m.Xy,{mdxType:"UnorderedList"},(0,s.yg)(m.ck,{mdxType:"ListItem"},"Point one")))),(0,s.yg)(p.l,{mdxType:"DoDont"},(0,s.yg)(p.Do,{title:"Do",body:"Use nested lists to provide additional clarity or instruction on specific topics.",mdxType:"Do"},(0,s.yg)(r.az,{padding:"space60",mdxType:"Box"},(0,s.yg)(n.D,{as:"h2",variant:"heading30",mdxType:"Heading"},"Animals"),(0,s.yg)(m.Xy,{mdxType:"UnorderedList"},(0,s.yg)(m.ck,{mdxType:"ListItem"},"Mammals",(0,s.yg)(m.Xy,{marginBottom:"space0",mdxType:"UnorderedList"},(0,s.yg)(m.ck,{mdxType:"ListItem"},"Cat"),(0,s.yg)(m.ck,{mdxType:"ListItem"},"Dog"))),(0,s.yg)(m.ck,{mdxType:"ListItem"},"Birds",(0,s.yg)(m.Xy,{marginBottom:"space0",mdxType:"UnorderedList"},(0,s.yg)(m.ck,{mdxType:"ListItem"},"Chicken"),(0,s.yg)(m.ck,{mdxType:"ListItem"},"Turkey")))))),(0,s.yg)(p.w,{title:"Don't",body:"Don’t nest lists if the nested content is unrelated to the higher level topic.",mdxType:"Dont"},(0,s.yg)(r.az,{padding:"space60",mdxType:"Box"},(0,s.yg)(n.D,{as:"h2",variant:"heading30",mdxType:"Heading"},"Animals"),(0,s.yg)(m.Xy,{mdxType:"UnorderedList"},(0,s.yg)(m.ck,{mdxType:"ListItem"},"Mammals",(0,s.yg)(n.D,{as:"h3",variant:"heading40",mdxType:"Heading"},"Groceries"),(0,s.yg)(m.Xy,{marginBottom:"space0",mdxType:"UnorderedList"},(0,s.yg)(m.ck,{mdxType:"ListItem"},"Milk"),(0,s.yg)(m.ck,{mdxType:"ListItem"},"Butter"))),(0,s.yg)(m.ck,{mdxType:"ListItem"},"Birds",(0,s.yg)(m.Xy,{marginBottom:"space0",mdxType:"UnorderedList"},(0,s.yg)(m.ck,{mdxType:"ListItem"},"Chicken"),(0,s.yg)(m.ck,{mdxType:"ListItem"},"Turkey"))))))))}I.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=39864)),_N_E=e.O()}]);