// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { Text } from "@twilio-paste/text";
import Image from "next/image";
import * as React from "react";

import FigmaLogo from "../../assets/illustrations/figma-logo.svg";
import ReactLogo from "../../assets/illustrations/react-logo.svg";
import TypescriptLogo from "../../assets/illustrations/ts-logo.svg";
import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { SectionSeparator } from "./SectionSeparator";
import { ThemeableBuilder } from "./ThemeableBuilder";

const Themeable: React.FC = (): React.ReactElement => {
  return (
    <Box display="flex" justifyContent="center" marginY="space200" width="100%" element="THEMEABLE_WRAPPER">
      <Box
        element="THEMEABLE"
        display="grid"
        gridTemplateColumns="100%"
        gridTemplateRows="auto 750px min-content"
        gridTemplateAreas='"separator" "row1" "row2"'
        justifyItems="center"
        rowGap="space100"
        width="100%"
        maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
      >
        <SectionSeparator gridArea="separator">Themeable and composable</SectionSeparator>
        <Box element="THISONE" gridArea="row1" width="100%">
          <Box height="size20" display="flex" flexDirection="row" justifyContent="space-between">
            <Box display="flex" flexDirection="column" maxWidth="size40">
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

              <Text
                as="a"
                href="#"
                color="colorTextLink"
                fontWeight="fontWeightSemibold"
                fontSize="fontSize40"
                lineHeight="lineHeight40"
                display="flex"
                _hover={{ color: "colorTextLinkStronger" }}
              >
                Check out our templates <ArrowForwardIcon decorative size="sizeIcon40" />
              </Text>
            </Box>
            <ThemeableBuilder />
          </Box>
        </Box>
        <Box maxWidth="size40" alignSelf="center" textAlign="center" gridArea="row2">
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
    </Box>
  );
};

export { Themeable };
