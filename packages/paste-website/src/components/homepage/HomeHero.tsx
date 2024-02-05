import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { DisplayHeading } from "@twilio-paste/display-heading";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { Text } from "@twilio-paste/text";
import * as React from "react";

import { SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { event } from "../../lib/gtag";
import { SearchBox } from "./SearchBox";
import { ComponentShowcase } from "./component-showcase";

const BouncyAnchor: React.FC<{ text: string; href: string }> = ({ text, href }): JSX.Element => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };
  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  return (
    <Box as="span" display="flex" alignItems="center">
      <Anchor
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() =>
          event({
            category: "Hero",
            action: "click-see-roadmap",
            label: "See our roadmap",
          })
        }
      >
        {text}
      </Anchor>
      <Box
        as="span"
        display="flex"
        transform={hovered ? "translateY(1px) translateX(4px)" : "translateY(1px) translateX(0)"}
        transition="all 100ms ease"
      >
        <ArrowForwardIcon decorative display="inline-block" size="sizeIcon40" color="colorTextLink" />
      </Box>
    </Box>
  );
};

const HomeHero = (): JSX.Element => {
  return (
    <Box
      paddingX={["space90", "space180"]}
      position="relative"
      display="grid"
      gridTemplateColumns="600px min-content"
      maxWidth={SITE_CONTENT_MAX_WIDTH}
      marginLeft="auto"
      marginRight="auto"
      zIndex="zIndex10"
      overflow="hidden"
      element="HOME_HERO"
    >
      <Box
        display="flex"
        flexDirection="column"
        rowGap="space130"
        paddingRight="space130"
        paddingTop="160px"
        // alignSelf="center"
        element="HEADER"
      >
        <Box display="flex" flexDirection="column" rowGap="space50">
          <DisplayHeading as="h1" variant="displayHeading10" marginBottom="space0">
            Paste
          </DisplayHeading>
          <Text
            as="div"
            fontSize="fontSize90"
            lineHeight="lineHeight90"
            fontWeight="fontWeightSemibold"
            letterSpacing="-2%"
          >
            Build inclusive, delightful customer experiences with Twilio’s open-source design system.
          </Text>
        </Box>
        <SearchBox />
        <Box
          display="flex"
          flexDirection="column"
          rowGap="space50"
          fontWeight="fontWeightBold"
          fontSize="fontSize60"
          lineHeight="lineHeight60"
        >
          <BouncyAnchor text="Get started for developers" href="/introduction/for-engineers/quickstart" />
          <BouncyAnchor text="Get started for designers" href="/introduction/for-designers/design-guidelines" />
        </Box>
      </Box>
      <ComponentShowcase />
    </Box>
  );
};

export { HomeHero };
