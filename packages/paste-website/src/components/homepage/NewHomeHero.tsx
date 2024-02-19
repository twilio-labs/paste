import { Box } from "@twilio-paste/box";
import { DisplayHeading } from "@twilio-paste/display-heading";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";

import CircleIcon from "../icons/CircleIcon";
import { BouncyAnchor } from "./BouncyAnchor";
import { SearchBox } from "./SearchBox";
import { SectionContainer } from "./SectionContainer";
import { ComponentShowcase } from "./component-showcase";

const HomeHero = (): JSX.Element => {
  const theme = useTheme();
  return (
    <SectionContainer>
      <Box element="HOME_HERO" display="flex" columnGap="space100">
        <Box
          element="HEADER"
          maxWidth="600px"
          display="flex"
          flexDirection="column"
          rowGap="space130"
          paddingTop="space200"
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

        <Box display={["none", "none", "block"]} maxWidth={["300px", "300px", "300px", "450px"]} zIndex="zIndex10">
          <ComponentShowcase />
        </Box>
      </Box>
      <Box zIndex="zIndex0" position="absolute" top="45rem" left="42%">
        <CircleIcon
          css={{ height: theme.heights.size30, width: theme.widths.size30 }}
          color={theme.backgroundColors.colorBackgroundBrandHighlight}
          decorative
        />
      </Box>
    </SectionContainer>
  );
};

export { HomeHero };
