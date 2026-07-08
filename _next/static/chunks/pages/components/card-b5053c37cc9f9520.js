(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{40615:(e,a,t)=>{"use strict";t.d(a,{A:()=>m});var r=t(72387),n=t(76127),i=t(95669),o=t.n(i),s=t(81278);t(55729);var d=t(10511),l=t(43084),p=t(10732),g=t(62887),c=t(63437),h=t(38992);let u={h1:()=>null},m=({children:e,meta:a,navigationData:t,data:i,mdxHeadings:m,pageHeaderData:{categoryRoute:y,githubUrl:A,storybookUrl:f}})=>{let x=a.title?`${a.title} - ${h.DZ.TITLE}`:h.DZ.TITLE,C=a.description||h.DZ.DESCRIPTION,b=(0,s.useRouter)();return(0,r.FD)(c.T,{navigationData:t,children:[(0,r.FD)(o(),{children:[(0,r.Y)("title",{children:x}),(0,r.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${b.pathname}`}),(0,r.Y)("meta",{name:"description",content:C},"description")]}),(0,r.FD)(d.s,{children:[(0,r.Y)(g.c,{categoryRoute:y,githubUrl:A,storybookUrl:f,data:i}),(0,r.FD)(n.az,{element:"CONTENT_WRAPPER",as:"div",display:["block","block","flex"],children:[(0,r.Y)(p.i,{data:m}),(0,r.Y)(n.az,{element:"CONTENT",as:"div",maxWidth:"size70",minWidth:"0",children:(0,r.Y)(l.Q,{componentOverrides:a.package?u:{},children:e})})]})]})]})}},48672:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card",function(){return t(82058)}])},82058:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>w,default:()=>E,getStaticProps:()=>B,mdxHeadings:()=>k,meta:()=>v}),t(55729);var r=t(11885),n=t(8588),i=t.n(n),o=t(54652),s=t(89564);let d={src:"/_next/static/media/do1-primary-button.355ad660.png",height:592,width:788,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAElBMVEX8/P3////19/jp8/nV5/OgzOfhQg8UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNghAIGRgYwADOYmMAMZlYWCIOBmQkiBVUMAATQADBINbSjAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},l={src:"/_next/static/media/dont1-primary-button.876f2012.png",height:592,width:788,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAFVBMVEX//v75+/zs9fqkzum+3O/n8vjm8fjV16CrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nGNggANGRkZGVBYTMzMLA4jFyMrGhFDIwAAAA04AJByxgNAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},p={src:"/_next/static/media/do2-heading-in-card.2321bafe.png",height:592,width:788,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAADFBMVEX+//739vbx8vPc6vM8iZ09AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNgYGBiYmJkAAFMBiMjhGZgZoYxmEAUAARSACUGIb5DAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},g={src:"/_next/static/media/dont2-multiple-primary.f3c19e00.png",height:592,width:788,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAD1BMVEX8/Pz09vjp7/PExsfc3t1ZhMBGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgYQYDFgZGJiYmRkZGRgYGRiYQYkAwGOEiUAAACKsAOV9LkGQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6};var c=t(40615);let h=`const CardExample = () => {
  return (
    <Card>
      <Heading as="h2" variant="heading20">
        Parable of the Talents
      </Heading>
      <Paragraph>
        Choose your leaders with wisdom and forethought. To be led by a coward is to be controlled by all that the
        coward fears. To be led by a fool is to be led by the opportunists who control the fool. To be led by a thief is
        to offer up your most precious treasures to be stolen. To be led by a liar is to ask to be lied to. To be led by
        a tyrant is to sell yourself and those you love into slavery.
      </Paragraph>
      <Paragraph marginBottom="space0">
        —
        <Anchor href="https://www.goodreads.com/book/show/60932.Parable_of_the_Talents">Octavia Butler</Anchor>
      </Paragraph>
    </Card>
  );
};

render(<CardExample />);`.trim(),u=`const CardExample = () => {
  return (
    <Box maxWidth="size40">
      <Card padding="space0">
        <Box padding="space160" display="flex" justifyContent="center">
          <AlertsAndNotifications />
        </Box>
        <Separator orientation="horizontal" verticalSpacing="space0" />
        <Box paddingY="space60" paddingX="space90">
          <Heading as="h2" variant="heading40">
            Alerts and notifications
          </Heading>
          <Paragraph>
            Inform, engage, and drive customers to take action. Deliver reliable multichannel notifications through
            Twilio.
          </Paragraph>
          <Button variant="secondary" size="small">
            Try notifications
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

render(<CardExample />);`.trim(),m=`const CardExample = () => {
  return (
    <Stack orientation="vertical" spacing="space40">
      <Card padding="space120">
        <Heading as="h2" variant="heading20">
          The Transgender District
        </Heading>
        <Paragraph>
          The mission of the Transgender District is to create an urban environment that fosters the rich history,
          culture, legacy, and empowerment of transgender people and its deep roots in the southeastern Tenderloin
          neighborhood. The transgender district aims to stabilize and economically empower the transgender community
          through ownership of homes, businesses, historic and cultural sites, and safe community spaces.
        </Paragraph>
        <Button variant="primary" as="a" href="https://www.transgenderdistrictsf.com/">
          Support The Transgender District
        </Button>
      </Card>
      <Card padding="space120">
        <Heading as="h2" variant="heading20">
          Inside Out
        </Heading>
        <Paragraph>
          Inside Out empowers, educates, and advocates for LGBTQ+ of youth from the Pikes Peak Region in Southern
          Colorado. Inside Out does this by creating safe spaces, support systems and teaching life skills to all youth
          in the community and working to make the community safer and more accepting of gender and sexual orientation
          diversity.
        </Paragraph>
        <Button variant="primary" as="a" href="https://insideoutys.org/">
          Support Inside Out
        </Button>
      </Card>
      <Card padding="space120">
        <Heading as="h2" variant="heading20">
          The Audre Lorde Project
        </Heading>
        <Paragraph>
          The Audre Lorde Project is a Lesbian, Gay, Bisexual, Two Spirit, Trans and Gender Non Conforming People of
          Color center for community organizing, focusing on the New York City area. Through mobilization, education and
          capacity-building, they work for community wellness and progressive social and economic justice. Committed to
          struggling across differences, they seek to responsibly reflect, represent and serve their various
          communities.
        </Paragraph>
        <Button variant="primary" as="a" href="https://alp.org/">
          Support The Audre Lorde Project
        </Button>
      </Card>
    </Stack>
  );
};

render(<CardExample />);`.trim(),y=`const CardExample = () => {
  return (
    <Grid gutter="space30">
      <Column>
        <Card fillHeight>
          <Paragraph>
            With fillHeight, the card will stretch to fill the height of the container.
          </Paragraph>
        </Card>
      </Column>
      <Column>
        <Card>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
          </Paragraph>
        </Card>
      </Column>
    </Grid>
  );
};

render(<CardExample />);`.trim(),A=`const CardExample = () => {
  return (
    <Grid gutter="space40" rowGap="space70" equalColumnHeights>
      <Column span={[12, 6]}>
        <Card>
          <Box marginBottom="space30">
            <Stack orientation="horizontal" spacing="space30">
              <Heading as="h4" variant="heading40" marginBottom="space0">
                the title
              </Heading>
            </Stack>
          </Box>

          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit quam ad magnam cumque libero
            nam veniam consequuntur deserunt, officia cupiditate similique accusamus expedita possimus, commodi voluptate
            enim harum amet.
          </Paragraph>

          <Stack orientation="horizontal" spacing="space40">
            <Button variant="secondary" as="a" href="#">
              button
            </Button>
            <Anchor href="#" showExternal>
              link
            </Anchor>
          </Stack>
        </Card>
      </Column>
      <Column span={[12, 6]}>
        <Card fillWidth={true}>
          <Box marginBottom="space30">
            <Stack orientation="horizontal" spacing="space30">
              <Heading as="h4" variant="heading40" marginBottom="space0">
                With fillWidth prop
              </Heading>
            </Stack>
          </Box>

          <Paragraph>the description</Paragraph>

          <Stack orientation="horizontal" spacing="space40">
            <Button variant="secondary" as="a" href="#">
              button
            </Button>
            <Anchor href="#" showExternal>
              link
            </Anchor>
          </Stack>
        </Card>
      </Column>
      <Column span={[12, 6]}>
        <Card>
          <Box marginBottom="space30">
            <Stack orientation="horizontal" spacing="space30">
              <Heading as="h4" variant="heading40" marginBottom="space0">
                Without fillWidth prop
              </Heading>
            </Stack>
          </Box>

          <Paragraph>the description</Paragraph>

          <Stack orientation="horizontal" spacing="space40">
            <Button variant="secondary" as="a" href="#">
              button
            </Button>
            <Anchor href="#" showExternal>
              link
            </Anchor>
          </Stack>
        </Card>
      </Column>
      <Column span={[12, 6]}>
        <Card>
          <Box marginBottom="space30">
            <Stack orientation="horizontal" spacing="space30">
              <Heading as="h4" variant="heading40" marginBottom="space0">
                the title
              </Heading>
            </Stack>
          </Box>

          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit quam ad magnam cumque libero
            nam veniam consequuntur deserunt, officia cupiditate similique accusamus expedita possimus, commodi voluptate
            enim harum amet.
          </Paragraph>

          <Stack orientation="horizontal" spacing="space40">
            <Button variant="secondary" as="a" href="#">
              button
            </Button>
            <Anchor href="#" showExternal>
              link
            </Anchor>
          </Stack>
        </Card>
      </Column>
    </Grid>
  );
};

render(<CardExample />);`.trim(),f=`const CardExample = () => {
  return (
    <Card>
      <MediaObject verticalAlign="top">
        <MediaFigure spacing="space90">
          <Box as="img" src="./card/marketing1.png" maxHeight="150px" />
        </MediaFigure>
        <MediaBody>
          <Heading as="h6" variant="heading30">
            Transform your unstructured voice data into actionable insights
          </Heading>
          <Paragraph>Get accurate transcriptions, and use AI-powered language operators.</Paragraph>
          <Button variant="primary">
            Discover Voice Intelligence <ArrowForwardIcon decorative />
          </Button>
        </MediaBody>
      </MediaObject>
    </Card>
  );
};

render(<CardExample />);`.trim(),x=`const CardExample = () => {
  return (
    <Card>
      <MediaObject verticalAlign="top">
        <MediaFigure spacing="space90">
          <Marketing2 />
        </MediaFigure>
        <MediaBody>
          <Heading as="h6" variant="heading30">
            Multi-channel user verification
          </Heading>
          <Paragraph>
            Verify is a fully managed API for multichannel user verification. And it now includes guaranteed protection
            from SMS pumping fraud with Fraud Guard.
          </Paragraph>
          <ButtonGroup>
            <Button variant="primary">
              Start building <ArrowForwardIcon decorative />
            </Button>
            <Button variant="secondary">
              Learn more <LinkExternalIcon decorative />
            </Button>
          </ButtonGroup>
        </MediaBody>
      </MediaObject>
    </Card>
  );
};

render(<CardExample />);`.trim(),C=`const CardExample = () => {
  return (
    <Card>
      <MediaObject verticalAlign="top">
        <MediaFigure spacing="space40">
          <Marketing3 />
        </MediaFigure>
        <MediaBody>
          <Box paddingBottom="space70">
            <Badge as="span" variant="brand30">
              <ProductSegmentIcon decorative />
              Twilio Segment CDP
            </Badge>
          </Box>
          <Heading as="h6" variant="heading10">
            Know your customers personally with Twilio Segment
          </Heading>
          <Paragraph>
            You can now use your Twilio credentials to log in and explore Segment, our customer data platform. Combine
            data across the customer lifecycle into a single, golden profile with our CDP.
          </Paragraph>
          <Button variant="secondary">Log in to Segment with Twilio</Button>
        </MediaBody>
      </MediaObject>
    </Card>
  );
};

render(<CardExample />);`.trim(),b=`const CardExample = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor="colorBackground"
      paddingY="space120"
      paddingX="space180"
      borderRadius="borderRadius30"
    >
      <Box width="100%" display="flex" justifyContent="center">
        <Marketing4 />
      </Box>
      <Box>
        <Heading as="h6" variant="heading10">
          Turn your recordings into transcriptions
        </Heading>
        <Paragraph>
          Next steps: Turn your voice recordings into transcripts and extra insights such as key phrases and compliance
          issues with Voice Intelligence.
        </Paragraph>
        <Button variant="primary">
          Discover Voice Intelligence <ArrowForwardIcon decorative />
        </Button>
      </Box>
    </Box>
  );
};

render(<CardExample />);`.trim();var w=!0;let v={title:"Card",package:"@twilio-paste/card",description:"The Twilio Paste Card",slug:"/components/card/"},B=async()=>({props:{data:{...packageJson,...feature},navigationData,mdxHeadings:k,pageHeaderData:{categoryRoute:SidebarCategoryRoutes.COMPONENTS,githubUrl:"https://github.com/twilio-labs/paste/blob/main/packages/paste-core/components/card/",storybookUrl:"/?path=/story/components-card--default"}}}),k=[{value:"Guidelines",depth:2},{value:"About Cards",depth:3},{value:"Card vs. Box",depth:3},{value:"Examples",depth:2},{value:"Default Card",depth:3},{value:"Adjusting padding",depth:3},{value:"Card with Title, Body and Button",depth:3},{value:"Fill height",depth:3},{value:"Fill width",depth:3},{value:"Marketing Card",depth:3},{value:"Composition notes",depth:2},{value:"Do and don't",depth:2}],T=function(e){return console.warn("Component StoryPreview was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)},D={meta:v,getStaticProps:B,mdxHeadings:k},P=c.A;function E({components:e,...a}){return(0,r.yg)(P,{...D,...a,components:e,mdxType:"MDXLayout"},(0,r.yg)(T,{height:"350px",title:"Card examples - default",storyID:"website-cardexamples--default-example",code:h,mdxType:"StoryPreview"}),(0,r.yg)("h2",null,"Guidelines"),(0,r.yg)("h3",null,"About Cards"),(0,r.yg)("p",null,"Cards are specifically-styled containers that group related content and actions. Cards are a great tool for placing a concise amount of related information together in one object, much like a business card or baseball card in real life."),(0,r.yg)("p",null,"Card is an extremely flexible container that does not require specific components inside of it. You can compose a Card to support your use case, but elements such as ",(0,r.yg)("a",{parentName:"p",href:"/components/heading"},"Heading"),", ",(0,r.yg)("a",{parentName:"p",href:"/components/paragraph"},"Paragraph"),", and ",(0,r.yg)("a",{parentName:"p",href:"/components/button"},"Button")," or ",(0,r.yg)("a",{parentName:"p",href:"/components/anchor"},"Anchor")," are commonly used."),(0,r.yg)("p",null,"A Card does not handle any interactive events such as hover, click, or focus, though children composed inside of it may commonly have event handlers."),(0,r.yg)("p",null,"Acknowledging the flexibility of Card component, there are several ",(0,r.yg)("a",{parentName:"p",href:"#anatomy"},"non-negotiable properties")," of a Card that differentiate it from a more basic page-layout element, such as ",(0,r.yg)("a",{parentName:"p",href:"/primitives/box"},"Box")," including background color, border width, border radius, and border color."),(0,r.yg)("h3",null,"Card vs. Box"),(0,r.yg)("p",null,"At its core, Card is a ",(0,r.yg)("a",{parentName:"p",href:"/primitives/box"},"Box")," with specific styling attributes and more explicit use cases that you can find in ",(0,r.yg)("a",{parentName:"p",href:"#examples"},"Examples"),`.
If you find yourself limited by the default styling and constraints of a Card, you may consider using a Box instead,
but first consider bringing the problem you are trying to solve
to Design System Office Hours to see if another component or pattern could fit your needs.`),(0,r.yg)("h2",null,"Examples"),(0,r.yg)("h3",null,"Default Card"),(0,r.yg)("p",null,"By default, a Card has ",(0,r.yg)("inlineCode",{parentName:"p"},"space100")," padding, which can be adjusted with ",(0,r.yg)("a",{parentName:"p",href:"/components/card/api#card"},"padding props")," and ",(0,r.yg)("a",{parentName:"p",href:"/tokens/list#spacings"},"spacing tokens"),"."),(0,r.yg)(T,{height:"350px",title:"Card examples - default",storyID:"website-cardexamples--default-example",code:h,mdxType:"StoryPreview"}),(0,r.yg)("h3",null,"Adjusting padding"),(0,r.yg)("p",null,"You can set non-default padding on all sides of a Card."),(0,r.yg)(T,{height:"470px",title:"Card examples - adjusting padding",storyID:"website-cardexamples--adjusting-padding-example",code:u,mdxType:"StoryPreview"}),(0,r.yg)("h3",null,"Card with Title, Body and Button"),(0,r.yg)("p",null,"One of the most common use cases for a Card is to relate a title (",(0,r.yg)("a",{parentName:"p",href:"/components/heading"},"Heading"),"), supporting body copy (",(0,r.yg)("a",{parentName:"p",href:"/components/paragraph"},"Paragraph"),`),
and primary action (`,(0,r.yg)("a",{parentName:"p",href:"/components/button"},"Button"),`) together. Relating these three elements together with a Card makes it easy for a user to
digest and provides a clear call to action.`),(0,r.yg)(T,{title:"Card examples - title body button",storyID:"website-cardexamples--title-body-button-example",code:m,mdxType:"StoryPreview"}),(0,r.yg)("h3",null,"Fill height"),(0,r.yg)("p",null,"In scenarios where there is a requirement for the card to fill the height of the parent container, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"fillHeight")," prop."),(0,r.yg)(T,{height:"350px",title:"Card examples - Fill height",storyID:"website-cardexamples--fill-height-example",code:y,mdxType:"StoryPreview"}),(0,r.yg)("h3",null,"Fill width"),(0,r.yg)("p",null,"By default, Card width fills the available space of the parent container. However, when wrapped in a flexbox, Card shrinks to fit the available space. To prevent this, use the ",(0,r.yg)("inlineCode",{parentName:"p"},"fillWidth")," prop."),(0,r.yg)(T,{height:"350px",title:"Card examples - Fill width",storyID:"website-cardexamples--fill-width-example",code:A,mdxType:"StoryPreview"}),(0,r.yg)("h3",null,"Marketing Card"),(0,r.yg)("p",null,`Use these layouts when you need to draw customers’ attention to upsell and cross-sell opportunities. Use them sparingly, mainly when they’ll help customers solve immediate problems.`),(0,r.yg)(o.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,r.yg)(o.v,{as:"h5",mdxType:"CalloutHeading"},"Research insight on marketing and cross-selling"),(0,r.yg)(o.wz,{mdxType:"CalloutText"},"Research from Twilio has shown that cross-sell cards aren’t useful when the developers are in the product focused on urgent problems. They’re likely to ignore these cards, regardless of how they’re presented, until they’re relevant to a current project they’re working on.")),(0,r.yg)("p",null,"To create a marketing Card, start by layering items from the top of this list. Add or remove items as you work your way down to create the right level of emphasis for your card:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Place the content at the top of the page."),(0,r.yg)("li",{parentName:"ol"},"Add more padding than other text content or Cards around it. Start with ",(0,r.yg)("inlineCode",{parentName:"li"},"space-130")," and size up in 8px increments from there."),(0,r.yg)("li",{parentName:"ol"},"Add an illustration."),(0,r.yg)("li",{parentName:"ol"},`If you’re cross-selling across platforms (e.g., Segment, SendGrid, Communications, Flex), add a `,(0,r.yg)("a",{parentName:"li",href:"/components/badge#brand"},"brand Badge"),".")),(0,r.yg)("p",null,"Most marketing content in the product is a ",(0,r.yg)("em",{parentName:"p"},"suggestion"),` to customers. As you layer items from the list, make sure you’re not distracting from their main goals on a page. A marketing Card should catch a customer’s attention but not at the expense of everything else in the flow.`),(0,r.yg)("p",null,`Don’t use everything in the list at once. If your marketing content is not the main content of a page, use 1-2 items. If it is the main content, use no more than 3 items.`),(0,r.yg)("p",null,`You might even find out that you don’t need to put your content in a Card. To emphasize the content without using Card, use `,(0,r.yg)("a",{parentName:"p",href:"/primitives/box"},"Box")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"color-background-weak"),"."),(0,r.yg)("p",null,"Examples that use more padding and illustrations:"),(0,r.yg)(T,{height:"310px",title:"Card examples - marketing one",storyID:"website-cardexamples--marketing-one-example",code:f,mdxType:"StoryPreview"}),(0,r.yg)(T,{height:"330px",title:"Card examples - marketing two",storyID:"website-cardexamples--marketing-two-example",code:x,mdxType:"StoryPreview"}),(0,r.yg)("p",null,"An example that uses illustrations and a marketing Badge:"),(0,r.yg)(T,{height:"540px",title:"Card examples - marketing three",storyID:"website-cardexamples--marketing-three-example",code:C,mdxType:"StoryPreview"}),(0,r.yg)("p",null,"An example that doesn't use Card at all:"),(0,r.yg)(T,{height:"660px",title:"Card examples - marketing four",storyID:"website-cardexamples--marketing-four-example",code:b,mdxType:"StoryPreview"}),(0,r.yg)("p",null,`If these options don’t work for your use case and you need to create something custom, `,(0,r.yg)("a",{parentName:"p",href:"https://library.twilio.com/guidelines/guide/9306890b-4bde-4210-bb35-2a566890e47a/page/db009ba3-57e3-4e04-bfe3-efc5d38860d1"},"request a creative review with the Brand team"),` and partner with them to make sure it aligns with Twilio’s brand guidelines.`),(0,r.yg)("h2",null,"Composition notes"),(0,r.yg)("p",null,"When a Card contains text content, use the following guidelines:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use a ",(0,r.yg)("a",{parentName:"li",href:"/components/heading"},"Heading")," to highlight the most important information."),(0,r.yg)("li",{parentName:"ul"},"Use a ",(0,r.yg)("a",{parentName:"li",href:"/components/paragraph"},"Paragraph")," to add additional context. Do not repeat the information in the header. Front-load the most critical information."),(0,r.yg)("li",{parentName:"ul"},"When presenting multiple Cards of equal weight on a single page, structure each Card's content similarly.")),(0,r.yg)("h2",null,"Do and don't"),(0,r.yg)(s.l,{mdxType:"DoDont"},(0,r.yg)(s.Do,{title:"Do",body:"Have a clear call to action when including Buttons. Avoid including more than one primary and one secondary button.",preview:!1,mdxType:"Do"},(0,r.yg)(i(),{src:d,alt:"",fill:!0,mdxType:"Image"})),(0,r.yg)(s.w,{title:"Don't",body:"Don’t put multiple primary actions in a Card",preview:!1,mdxType:"Dont"},(0,r.yg)(i(),{src:l,alt:"",fill:!0,mdxType:"Image"}))),(0,r.yg)(s.l,{mdxType:"DoDont"},(0,r.yg)(s.Do,{title:"Do",body:"Use a Heading in your Card that appropriately reflects the information architecture of the page.",preview:!1,mdxType:"Do"},(0,r.yg)(i(),{src:p,alt:"",fill:!0,mdxType:"Image"})),(0,r.yg)(s.w,{title:"Don't",body:"Don’t use Cards to highlight multiple primary actions on a single page.",preview:!1,mdxType:"Dont"},(0,r.yg)(i(),{src:g,alt:"",fill:!0,mdxType:"Image"}))),(0,r.yg)(s.l,{mdxType:"DoDont"},(0,r.yg)(s.Do,{title:"Do",body:"Use a Heading to set a clear expectation on the Card’s purpose.",preview:!1,mdxType:"Do"}),(0,r.yg)(s.w,{title:"Don't",body:"Don’t place multiple Heading components in a single Card.",preview:!1,mdxType:"Dont"})),(0,r.yg)(s.l,{mdxType:"DoDont"},(0,r.yg)(s.Do,{title:"Do",body:"Use a consistent location on the bottom of the Card for primary actions or next steps.",preview:!1,mdxType:"Do"})))}E.isMDXComponent=!0}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=48672)),_N_E=e.O()}]);