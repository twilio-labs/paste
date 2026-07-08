(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7598],{15780:(e,a,t)=>{"use strict";t.d(a,{A:()=>m});var o=t(72387),i=t(95669),r=t.n(i),n=t(81278);t(55729);var l=t(10511),d=t(43084),s=t(63437),p=t(38992);let c={h1:()=>null},m=({children:e,meta:a,navigationData:t})=>{let i=a.title?`${a.title} - ${p.DZ.TITLE}`:p.DZ.TITLE,m=a.description||p.DZ.DESCRIPTION,g=(0,n.useRouter)();return(0,o.FD)(s.T,{navigationData:t,children:[(0,o.FD)(r(),{children:[(0,o.Y)("title",{children:i}),(0,o.Y)("link",{rel:"canonical",href:`https://paste.twilio.design${g.pathname}`}),(0,o.Y)("meta",{name:"description",content:m},"description")]}),(0,o.Y)(l.s,{children:(0,o.Y)(d.Q,{componentOverrides:a.package?c:{},children:e})})]})}},32698:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/patterns/pricing",function(){return t(51858)}])},51858:(e,a,t)=>{"use strict";t.r(a),t.d(a,{__N_SSG:()=>g,default:()=>B,getStaticProps:()=>h,mdxHeadings:()=>y,meta:()=>u}),t(55729);var o=t(11885),i=t(4073),r=t(54652),n=t(41960),l=t(85152),d=t(76127),s=t(89564),p=t(64003);let c={src:"/_next/static/media/pricing-pattern.e5a2506d.png",height:1126,width:2017,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAHlBMVEX8/PzO0dVOWXQ1PU3v8PHW2d9TXnhYYHC5vMTo6uwHaKETAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNgYudgZWVlZGJgYmZkYGBgYQMzWBg4IQyQCAAHTABd2952PgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4};var m=t(15780),g=!0;let u={title:"Pricing",description:"The Pricing pattern shows a group of paid features or plan options for a user to make a selection.",slug:"/patterns/pricing/"},h=async()=>({props:{data:{...feature},navigationData}}),y=[{value:"About",depth:2},{value:"General",depth:2},{value:"Ingredients",depth:2},{value:"Variations",depth:2},{value:"Cards",depth:3},{value:"Visual picker",depth:3},{value:"Data Grid",depth:3},{value:"Responsiveness",depth:2},{value:"Figma",depth:2},{value:"Do’s and Don’ts",depth:2}],x=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",a)},T=x("NormalizedPatternHeader"),f=x("PageAside"),D=x("StoryPreview"),w={meta:u,getStaticProps:h,mdxHeadings:y},v=m.A;function B({components:e,...a}){return(0,o.yg)(v,{...w,...a,components:e,mdxType:"MDXLayout"},(0,o.yg)(T,{description:u.description,name:u.title,data:a.data,mdxType:"NormalizedPatternHeader"}),(0,o.yg)("contentwrapper",null,(0,o.yg)(f,{data:y,mdxType:"PageAside"}),(0,o.yg)("content",null,(0,o.yg)(p.w,{src:c,alt:"Screenshot of a Pricing pattern cards example",mdxType:"ResponsiveImage"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},`// import the components for pricing patterns as required

import { Badge } from "@twilio-paste/core/badge";
import { Heading } from '@twilio-paste/core/heading';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Text } from '@twilio-paste/core/text';
import { Button } from '@twilio-paste/core/button';
import { DisplayHeading } from '@twilio-paste/core/display-heading';
import { Card } from '@twilio-paste/core/card';
import { Box } from '@twilio-paste/core/box';
import { VisualPickerRadio, VisualPickerRadioGroup } from "@twilio-paste/core/visual-picker";
import { Separator } from "@twilio-paste/core/separator";
import { SelectedIcon } from "@twilio-paste/icons/esm/SelectedIcon";
`)),(0,o.yg)("h2",null,"About"),(0,o.yg)("p",null,"The Pricing pattern should be used when the user is presented with pricing or packaged options to select from. Use this pattern to clearly show the differences between different plans in order for the user to make an informed decision."),(0,o.yg)("p",null,"Examples:"),(0,o.yg)(n.Xy,{mdxType:"UnorderedList"},(0,o.yg)(n.ck,{mdxType:"ListItem"},"Selecting an account plan on upgrade."),(0,o.yg)(n.ck,{mdxType:"ListItem"},"Switching between a free and paid feature."),(0,o.yg)(n.ck,{mdxType:"ListItem"},"Adding a packaged plan to an account based on a use case.")),(0,o.yg)("p",null,"The information presented in the layout will be dependent on the packaged plans themselves."),(0,o.yg)("h2",null,"General"),(0,o.yg)("p",null,"Pricing layouts should adhere to the following guidelines:"),(0,o.yg)(n.Xy,{mdxType:"UnorderedList"},(0,o.yg)(n.ck,{mdxType:"ListItem"},"Limit the number of pricing cards to 4, with a minimum of 2 as to not overwhelm users with options. For a larger quantity of plans, consider reducing the options or using a ",(0,o.yg)(i.Mz,{href:"/components/table",mdxType:"Anchor"},"Table"),"."),(0,o.yg)(n.ck,{mdxType:"ListItem"},"Display the current plan (if any)."),(0,o.yg)(n.ck,{mdxType:"ListItem"},"Use a primary Button and Badge for the recommended option (if any), all other pricing cards use a secondary Button for selection."),(0,o.yg)(n.ck,{mdxType:"ListItem"},"Limit the listed features to 8 items, focusing on the differences between each package",(0,o.yg)(n.Xy,{mdxType:"UnorderedList"},(0,o.yg)(n.ck,{mdxType:"ListItem"},"If the lower packages are included in the higher end packages, we recommend the first line item of the next package mention the previous plan. Example: “All features from Basic plan”."))),(0,o.yg)(n.ck,{mdxType:"ListItem"},"Always order the cards left to right from least expensive to most expensive, or least number/value of features to most number/value of features. The current selection remains in this order (it does not move to the beginning of the list).")),(0,o.yg)(r.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,o.yg)(r.v,{mdxType:"CalloutHeading"},"Guidance for payment flows is in development"),(0,o.yg)(r.wz,{mdxType:"CalloutText"},"If you’re working on a new paid feature or plan, reach out in #help-design-system to get connected with teams who are working to standardize our payment flows. They can provide guidance on how to handle role or account based states for paid products.",(0,o.yg)("br",null),(0,o.yg)("br",null),"While this is happening, continue partnering with Commerce Platform for your feature.")),(0,o.yg)("h2",null,"Ingredients"),(0,o.yg)(d.az,{marginBottom:"space70",mdxType:"Box"},(0,o.yg)(l.XI,{mdxType:"Table"},(0,o.yg)(l.D1,{mdxType:"THead"},(0,o.yg)(l.Tr,{mdxType:"Tr"},(0,o.yg)(l.Th,{mdxType:"Th"},"Component"),(0,o.yg)(l.Th,{mdxType:"Th"},"Guidelines"))),(0,o.yg)(l.vc,{mdxType:"TBody"},(0,o.yg)(l.Tr,{mdxType:"Tr"},(0,o.yg)(l.Td,{mdxType:"Td"},(0,o.yg)("strong",null,"Badge")),(0,o.yg)(l.Td,{mdxType:"Td"},"Use a ",(0,o.yg)(i.Mz,{href:"/components/badge#decorative",mdxType:"Anchor"},"decorative Badge")," to highlight a “recommended” plan and for a customer’s current plan or the status of that current plan. We recommend a maximum of 2 badges total, to not overwhelm the users. Use the placeholder text to add more detail about the plan.")),(0,o.yg)(l.Tr,{mdxType:"Tr"},(0,o.yg)(l.Td,{mdxType:"Td"},(0,o.yg)("strong",null,"Heading")),(0,o.yg)(l.Td,{mdxType:"Td"},"This is a smaller heading used for displaying the plan name or other details if including the plan name as the display heading. Refer to the ",(0,o.yg)(i.Mz,{href:"/components/heading#accessibility",mdxType:"Anchor"},"heading documentation")," for accessibility of headers.")),(0,o.yg)(l.Tr,{mdxType:"Tr"},(0,o.yg)(l.Td,{mdxType:"Td"},(0,o.yg)("strong",null,"Display Heading")),(0,o.yg)(l.Td,{mdxType:"Td"},"Use this largest heading for displaying the price of the plan. If the price is not available, it can be used to display the plan name.")),(0,o.yg)(l.Tr,{mdxType:"Tr"},(0,o.yg)(l.Td,{mdxType:"Td"},(0,o.yg)("strong",null,"Paragraph subheader")),(0,o.yg)(l.Td,{mdxType:"Td"},"A subheader or details can be placed in a Paragraph above or below the display heading. Use this to add additional context to the price or plan. For example “Included” or “Plus fees” or “Best for XYZ”.")),(0,o.yg)(l.Tr,{mdxType:"Tr"},(0,o.yg)(l.Td,{mdxType:"Td"},(0,o.yg)("strong",null,(0,o.yg)(i.Mz,{href:"/components/button",mdxType:"Anchor"},"Button")," (card variant)")),(0,o.yg)(l.Td,{mdxType:"Td"},"Use a secondary button to select the plan using the text “Select plan”. For the current plan, hide the button or show a CTA. For example, it could navigate to the feature the user has already selected.")),(0,o.yg)(l.Tr,{mdxType:"Tr"},(0,o.yg)(l.Td,{mdxType:"Td"},(0,o.yg)("strong",null,"Feature list (",(0,o.yg)(i.Mz,{href:"/components/icon/usage-guidelines",mdxType:"Anchor"},"icon")," + ",(0,o.yg)(i.Mz,{href:"/components/paragraph",mdxType:"Anchor"},"paragraph"),")")),(0,o.yg)(l.Td,{mdxType:"Td"},"Use this list to outline the differences between each plan. Include 1-8 features, the first feature listed should be anything included in previous features (if any). For example “Packaged plan 1 features”")),(0,o.yg)(l.Tr,{mdxType:"Tr"},(0,o.yg)(l.Td,{mdxType:"Td"},(0,o.yg)("strong",null,"More info Anchor or Button (Card variant)")),(0,o.yg)(l.Td,{mdxType:"Td"},"Use an optional Anchor or Button at the bottom of the card to link to additional documentation or details about the plan that can’t fit in the card. This should go to a new page or open a Modal, not expand the card. Follow ",(0,o.yg)(i.Mz,{href:"/patterns/button-vs-anchor",mdxType:"Anchor"},"guidelines for using a Button or Anchor"),": Use a link-style Button when the user is performing an action to open a Modal, and an Anchor when it’s navigating to a new page."))))),(0,o.yg)("h2",null,"Variations"),(0,o.yg)("h3",null,"Cards"),(0,o.yg)("p",null,`Use the card layout to display the user’s options on pages that may redirect to a `,(0,o.yg)("a",{parentName:"p",href:"/page-templates/wizard"},"Wizard flow")," or when this selection is the only step (besides a confirmation) the user needs to take to change their plan."),(0,o.yg)("p",null,"The buttons on these cards can redirect to a billing flow. The card also allows for more detail about the plan."),(0,o.yg)(D,{title:"Card pricing example",storyID:"website-pricingexamples--card-example",height:"600px",code:`
export const CardPricingExample = (): React.ReactNode => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(min(264px, 100%), 1fr));"
      columnGap="space70"
      rowGap="space70"
      maxWidth="1248px"
    >
      <Card>
        <Box display="flex" flexDirection="column" rowGap="space70">
          <Box display="flex" flexDirection="column" rowGap="space40">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Avatar name="user" icon={icon} variant={isEntity ? "entity" : "user"} />
              <Badge as="span" variant="neutral">
                Current plan
              </Badge>
            </Box>
            <Heading marginBottom="space0" as="h2" variant="heading30">
              Team
            </Heading>
            <Box marginTop="space40" marginBottom="space20">
              <DisplayHeading marginBottom="space0" as="h3" variant="displayHeading30">
                Starting at $120
              </DisplayHeading>
            </Box>
            <Paragraph marginBottom="space0">Per month</Paragraph>
          </Box>
          <Button variant="secondary">Try for 14 days</Button>
          <Box display="flex" flexDirection="column" rowGap="space50">
            <Heading marginBottom="space0" as="h3" variant="heading50">
              Package includes:
            </Heading>
            {[
              "10 seats",
              "2 sources",
              "Unlimited destinations",
              "1,000 MTU",
              "50 Function hours",
              "500,000 records processed for Reverse ETL",
            ].map((item: string) => (
              <Box key={item} display="flex" columnGap="space20" alignItems="center">
                <SelectedIcon decorative color="colorTextIconSuccess" />
                <Text as="p">{item}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Card>
      {...}
    </Box>
  )
}`,mdxType:"StoryPreview"}),(0,o.yg)("h3",null,"Visual picker"),(0,o.yg)("p",null,"Use a Visual Picker when the selection is happening in a wizard and the user will be continuing on to additional steps besides a simple confirmation (e.g., payment information)."),(0,o.yg)("p",null,"The Visual Picker should be more succinct in the detail it shares."),(0,o.yg)(D,{title:"Visual picker example",storyID:"website-pricingexamples--visual-picker-example",height:"600px",code:`
export const VisualPickerExample = (): React.ReactNode => {
  const [value, setValue] = React.useState('Free trial');
  return (
    <VisualPickerRadioGroup
      orientation="horizontal"
      legend="Select an option"
      name="visual-picker"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <VisualPickerRadio labelText="Free trial value="Free trial>
        <Box>
          <Box display="flex" columnGap="space30" justifyContent="space-between" alignItems="flex-start">
            <Heading as="h2" variant="heading40" marginBottom="space0">
              Free trial
            </Heading>
            <Badge as="span" variant="decorative30">
              Recommended
            </Badge>
          </Box>
          <Box marginTop="space30" display="flex" columnGap="space20" alignItems="flex-end">
            <Heading as="h3" variant="heading10" marginBottom="space0">
              $0
            </Heading>
            <Paragraph marginBottom="space0">Per month</Paragraph>
          </Box>
        </Box>
        <Box marginY="space50">
          <Separator orientation="horizontal" />
        </Box>
        <Box display="flex" flexDirection="column" rowGap="space50">
          {["$15 credit", "Testing with upto 5 verified recipients", "Limited configurations"].map((item: string) => (
            <Box key={item} display="flex" columnGap="space20" alignItems="center">
              <SelectedIcon decorative color="colorTextIconSuccess" />
              <Text as="p">{item}</Text>
            </Box>
          ))}
        </Box>
      </VisualPickerRadio>
      {...}
    </VisualPickerRadioGroup>
  )
}`,mdxType:"StoryPreview"}),(0,o.yg)("h3",null,"Data Grid"),(0,o.yg)("p",null,"Consider using a table when there are more than 4 options for users to choose from, or more comparison is necessary between any number of plans."),(0,o.yg)(D,{title:"Data Grid example",storyID:"website-pricingexamples--data-grid-example",height:"600px",code:`
export const TableExample = (): React.ReactNode => {
  return (
    <DataGrid aria-label="Pricing table">
      <DataGridHead>
        <DataGridRow>
          <DataGridHeader> </DataGridHeader>
          <DataGridHeader>
            <Box display="flex" flexDirection="column" rowGap="space20">
              Developer
              <Badge as="span" variant="neutral">
                Current plan
              </Badge>
            </Box>
          </DataGridHeader>
          <DataGridHeader>Production</DataGridHeader>
          <DataGridHeader>
            <Box display="flex" flexDirection="column" rowGap="space20">
              Business
              <Badge as="span" variant="decorative30">
                Recommended
              </Badge>
            </Box>
          </DataGridHeader>
          <Th>Personalized</Th>
        </DataGridRow>
      </DataGridHead>
      <DataGridBody>
        <DataGridRow>
          <DataGridCell>Price per month</DataGridCell>
          <DataGridCell>Included</DataGridCell>
          <DataGridCell>
            4% of monthly spend <DetailText marginTop="space0">or $250 minimum</DetailText>
          </DataGridCell>
          <DataGridCell>
            6% of monthly spend <DetailText marginTop="space0">or $1,500 minimum</DetailText>
          </DataGridCell>
          <DataGridCell>
            8% of monthly spend <DetailText marginTop="space0">or $5,000 minimum</DetailText>
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>Web support</DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconAvailable" />
          </DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconAvailable" />
          </DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconAvailable" />
          </DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconAvailable" />
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>
            Guaranteed response times <DetailText marginTop="space0">Business critical</DetailText>
          </DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell>3 business hours</DataGridCell>
          <DataGridCell>1 hour (24x7)</DataGridCell>
          <DataGridCell>1 hour (24x7)</DataGridCell>
        </DataGridRow>
        {...}
      </DataGridBody>
    </DataGrid>
  )
}`,mdxType:"StoryPreview"}),(0,o.yg)("h2",null,"Responsiveness"),(0,o.yg)("p",null,"For larger viewports, cards and pickers should be side-by-side. For smaller viewports, stack the cards or picker vertically."),(0,o.yg)("p",null,"For cards, the height of the cards should be equal to each other even if the number of features, badges, or buttons are different. You can use CSS Grid to ensure the cards are the same height."),(0,o.yg)(r.Pq,{variant:"neutral",marginY:"space70",mdxType:"Callout"},(0,o.yg)(r.wz,{mdxType:"CalloutText"},"Tip: If the total height of the cards is too long for small viewports, consider using a ",(0,o.yg)(i.Mz,{href:"/components/summary-detail",mdxType:"Anchor"},"Summary Detail")," to collapse the package features, displaying them only when the user interacts with it.")),(0,o.yg)(D,{title:"Card pricing example",storyID:"website-pricingexamples--card-mobile-example",height:"600px",code:`
export const CardPricingExample = (): React.ReactNode => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(min(260px, 100%), 1fr));"
      columnGap="space50"
      rowGap="space50"
    >
      <Card>
        <Box display="flex" flexDirection="column" rowGap="space70">
          <Box display="flex" flexDirection="column" rowGap="space40">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Heading marginBottom="space0" as="h2" variant="heading30">
                Team
              </Heading>
              <Badge as="span" variant="neutral">
                Current plan
              </Badge>
            </Box>
            <Box marginTop="space40" marginBottom="space20">
              <DisplayHeading marginBottom="space0" as="h3" variant="displayHeading30">
                Starting at $120
              </DisplayHeading>
            </Box>
            <Paragraph marginBottom="space0">Per month</Paragraph>
          </Box>
          <Button variant="secondary">Try for 14 days</Button>
          <SummaryDetail>
            <SummaryDetailHeading>
              <SummaryDetailToggleButton />
              <SummaryDetailHeadingContent>
                <Heading variant="heading50" as="h3" marginBottom="space0">
                  Package includes
                </Heading>
              </SummaryDetailHeadingContent>
            </SummaryDetailHeading>
            <SummaryDetailContent>
              <Box display="flex" flexDirection="column" rowGap="space40">
                {[
                  "10 seats",
                  "2 sources",
                  "Unlimited destinations",
                  "1,000 MTU",
                  "50 Function hours",
                  "500,000 records processed for Reverse ETL",
                ].map((item: string) => (
                  <Box key={item} display="flex" columnGap="space20" alignItems="flex-start">
                    <SelectedIcon decorative color="colorTextIconSuccess" size="sizeIcon40" />
                    <Text as="p">{item}</Text>
                  </Box>
                ))}
              </Box>
            </SummaryDetailContent>
          </SummaryDetail>
        </Box>
      </Card>
      {...}
    </Box>
  )
}`,mdxType:"StoryPreview"}),(0,o.yg)("h2",null,"Figma"),(0,o.yg)("p",null,"By default, the Figma component is built with predefined minimum and maximum widths."),(0,o.yg)("p",null,`The auto layout settings ensure that the number of features, badges, avatars, or buttons don’t affect the card height, and the "More info" button stays anchored at the bottom.
In order to maintain proper space in between card elements you may need to manually adjust the card group container height.`),(0,o.yg)("h2",null,`Do’s and Don’ts`),(0,o.yg)(s.l,{mdxType:"DoDont"},(0,o.yg)(s.Do,{title:"Do",body:"Only include the additional features in the list of each plan.",mdxType:"Do"}),(0,o.yg)(s.w,{title:"Don't",body:"Don’t show the negative or missing features of each product, or change the icon to an “X”.",mdxType:"Dont"}),(0,o.yg)(s.Do,{title:"Do",body:"Include the “free” or “included” plan even if it's default on the account.",mdxType:"Do"}),(0,o.yg)(s.w,{title:"Don't",body:"Don’t only have 1 pricing Card on a page. Users should see all of their options.",mdxType:"Dont"}),(0,o.yg)(s.Do,{title:"Do",body:"Keep the content of the feature list succinct and jargon-free; use the “more info” option for more info.",mdxType:"Do"}),(0,o.yg)(s.w,{title:"Don't",body:"Don’t put a large amount of content in a feature item, and don’t put more than 8 features",mdxType:"Dont"})))))}B.isMDXComponent=!0},64003:(e,a,t)=>{"use strict";t.d(a,{w:()=>l});var o=t(72387),i=t(76127),r=t(8588),n=t.n(r);t(55729);let l=e=>(0,o.Y)(i.az,{display:"flex",justifyContent:"center",marginBottom:"space70",children:(0,o.Y)(n(),{placeholder:"blur",style:{height:"100%",maxWidth:"100%"},...e})})}},e=>{e.O(0,[1623,1387,6428,1931,9134,8182,636,6593,8792],()=>e(e.s=32698)),_N_E=e.O()}]);