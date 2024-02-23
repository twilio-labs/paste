// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { Text } from "@twilio-paste/text";
import Image from "next/image";
import * as React from "react";

import FigmaLogo from "../../assets/illustrations/figma-logo.svg";
import ReactLogo from "../../assets/illustrations/react-logo.svg";
import TypescriptLogo from "../../assets/illustrations/ts-logo.svg";
import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { BouncyAnchor } from "./BouncyAnchor";
import { SectionContainer } from "./SectionContainer";
import { SectionSeparator } from "./SectionSeparator";
import { ThemeableBuilder } from "./ThemeableBuilder";

const Themeable: React.FC = (): React.ReactElement => {
  return (
    <SectionContainer>
      <SectionSeparator>Themeable and composable</SectionSeparator>
      <Box
        element="THEMEABLE"
        paddingBottom="space170"
        display="grid"
        gridTemplateColumns="100%"
        gridTemplateRows="auto max-content min-content"
        gridTemplateAreas='"separator" "row1" "row2"'
        justifyItems="center"
        rowGap="space170"
        width="100%"
        maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
      >
        <Box
          element="THEMEABLE_TOP"
          gridArea="row1"
          width="100%"
          display="flex"
          flexDirection={["column", "column", "row", "row"]}
          justifyContent="space-between"
          columnGap="space100"
          rowGap="space100"
          // paddingX={[""]}
        >
          <Box display="flex" flexDirection="column">
            <Heading as="h3" variant="heading20">
              Start from anywhere
            </Heading>
            <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
              With Paste, you can get production-ready experiences up in minutes with our 80+{" "}
              <Anchor href="">styled components</Anchor> and <Anchor href="">pre-built themes</Anchor>.
            </Text>

            <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
              Or get complete control by bringing your own theme and creating custom components with our{" "}
              <Anchor href="">functional primitives</Anchor>.
            </Text>
            <Box fontWeight="fontWeightSemibold" fontSize="fontSize40" lineHeight="lineHeight40">
              <BouncyAnchor href="/page-templates" text="Check out our templates" />
            </Box>
          </Box>
          <Box display={["none", "none", "none", "block"]}>
            <ThemeableBuilder />
          </Box>
        </Box>
        <Box maxWidth="size40" alignSelf="center" textAlign="center" gridArea="row2" paddingTop="space170">
          <Heading as="h3" variant="heading30">
            Built with your favorite technologies, Typescript + React + Figma
          </Heading>
          <Box display="flex" flexDirection="row" columnGap="space200" justifyContent="center" marginTop="space90">
            <Image src={TypescriptLogo} aria-hidden="true" role="img" alt="typescript logo" />
            <Image src={ReactLogo} aria-hidden="true" role="img" alt="react logo" />
            <Image src={FigmaLogo} aria-hidden="true" role="img" alt="figma logo" />
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export { Themeable };
