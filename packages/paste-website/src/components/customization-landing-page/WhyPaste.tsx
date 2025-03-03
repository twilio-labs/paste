import { Box } from "@twilio-paste/box";
import { DisplayHeading } from "@twilio-paste/display-heading";
import { Column, Grid } from "@twilio-paste/grid";
import { Heading } from "@twilio-paste/heading";
import Image from "next/image";
import type { JSX } from "react";

import { DoodleLoopArrowLarge } from "../../assets/illustrations/DoodleLoopArrowLarge";
import WhyPasteMobile from "../../assets/images/customization/why-paste-mobile.png";
import WhyPasteImg from "../../assets/images/customization/why-paste.png";
import { A11yIcon } from "../icons/A11yIcon";
import { CustomizableIcon } from "../icons/CustomizableIcon";
import { ThemableIcon } from "../icons/ThemableIcon";
import { LandingPageSection, LandingPageSectionContent } from "./LandingPageLayoutUtils";
import { ReasonBlock } from "./ReasonBlock";

export const WhyPaste = (): JSX.Element => {
  return (
    <LandingPageSection
      backgroundColor="colorBackgroundPrimaryWeakest"
      paddingTop={["space0", "space0", "space0"]}
      paddingBottom={["space0", "space0", "space0"]}
      maxWidth="96%"
      marginX="auto"
    >
      <Box position="relative" maxWidth="1400px" marginX="auto">
        <LandingPageSectionContent variant="narrow" zIndex="zIndex10">
          <Box maxWidth="size60" marginBottom="space130">
            <Heading as="h2" variant="heading40">
              Why Paste
            </Heading>
            <DisplayHeading as="h3" variant="displayHeading30">
              A fully extensible and accessible customization platform
            </DisplayHeading>
          </Box>
          <Grid gutter={["space60", "space120", "space200"]} vertical={[true, false, false]}>
            <Column span={6}>
              <ReasonBlock
                icon={<ThemableIcon decorative />}
                headingText="Themeable"
                subHeadingText="To meet your brand needs"
                description="Change a single color or customize your full palette—with our theming system, your UIs come out looking exactly the way you want them."
                href="/customization/creating-a-custom-theme"
                linkText="Learn about theming"
              />
            </Column>
            <Column span={6}>
              <ReasonBlock
                icon={<CustomizableIcon decorative />}
                headingText="Customizable"
                subHeadingText="To meet your application needs"
                description="Fully customize all components of the same type across an application, or extend Paste components to create your own custom components."
                href="/customization/customizing-component-elements"
                linkText="Learn about customizing components"
              />
            </Column>
            <Column span={6}>
              <ReasonBlock
                icon={<A11yIcon decorative />}
                headingText="Accessible"
                subHeadingText="To meet your customers’ needs"
                description="Do the right thing for all your customers' needs with accessible UIs built out of the box that support high contrast, screen reader support, and much more."
                href="/inclusive-design"
                linkText="Read our Inclusive Design Checklist"
              />
            </Column>
          </Grid>
          <Box display={["block", "none"]} width="100%" maxWidth="400px" marginX="auto" marginTop="space70">
            <Image src={WhyPasteMobile} alt="" placeholder="blur" style={{ width: "100%", height: "100%" }} />
          </Box>
          <Box as="span" position="absolute" display={["none", "none", "block"]} bottom={-280} left={0}>
            <DoodleLoopArrowLarge />
          </Box>
        </LandingPageSectionContent>
        <Box
          display={["none", "block"]}
          position="absolute"
          bottom={["-300px", "-300px", "-300px", "-350px"]}
          right="0"
          width={["700px", "700px", "700px", "800px"]}
          maxWidth="100%"
        >
          <Image src={WhyPasteImg} alt="" placeholder="blur" style={{ width: "100%", height: "100%" }} />
        </Box>
      </Box>
    </LandingPageSection>
  );
};
