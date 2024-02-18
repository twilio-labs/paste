import { Box } from "@twilio-paste/box";
import { DisplayHeading } from "@twilio-paste/display-heading";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";

import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";
import CircleIcon from "../icons/CircleIcon";
import { BouncyAnchor } from "./BouncyAnchor";
import { SearchBox } from "./SearchBox";
import { ComponentShowcase } from "./component-showcase";

const HomeHero = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box element="HOME_HERO" overflowX="hidden">
      <Box
        // paddingX="space190"
        paddingBottom="space120"
        position="relative"
        display="grid"
        gridTemplateColumns={["auto", "600px min-content", "600px min-content"]}
        gridTemplateRows={["min-content min-content", "auto", "auto"]}
        rowGap={["space100", "space0", "space0"]}
        maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
        marginLeft="auto"
        marginRight="auto"
        overflow="visible"
        element="HOME_HERO_WITHOUT_CIRCLE"
      >
        <Box
          display="flex"
          flexDirection="column"
          rowGap="space130"
          paddingTop="space200"
          paddingRight="space130"
          alignSelf="center"
          element="HOME_HERO_LEFT_SIDE"
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
      <Box zIndex="zIndex0" position="absolute" top="46rem" left="44%" element="CIRCLE">
        <CircleIcon
          css={{ height: theme.heights.size30, width: theme.widths.size30 }}
          color={theme.backgroundColors.colorBackgroundBrandHighlight}
          decorative
        />
      </Box>
    </Box>
  );
};

export { HomeHero };
