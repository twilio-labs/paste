import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { DisplayHeading } from "@twilio-paste/display-heading";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import Image from "next/image";

import { DoodleBurst } from "../../assets/illustrations/DoodleBurst";
import { DoodleLoopMedium } from "../../assets/illustrations/DoodleLoopMedium";
import { DoodleLoopTiny } from "../../assets/illustrations/DoodleLoopTiny";
import ThemeDesigner from "../../assets/images/customization/theme-designer-mobile-screenshot.png";
import { LandingPageDesigner } from "./LandingPageDesigner";
import { LandingPageSection, LandingPageSectionContent } from "./LandingPageLayoutUtils";

const LikeTwilioHeadline = (): JSX.Element => {
  return (
    <Box maxWidth="size60" marginX="auto" paddingBottom="space100" textAlign="center">
      <DisplayHeading as="h2" variant="displayHeading20">
        Like Twilio, but for UI
      </DisplayHeading>
      <Text as="p" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
        Have you ever thought to yourself, &ldquo;Wow, I wish building beautiful, accessible UIs for my brand was as
        easy as sending an SMS through Twilio&rdquo;? Well, gosh, you’re in luck.
      </Text>
    </Box>
  );
};

const DesktopDesigner = (): JSX.Element => {
  return (
    <>
      <Box as="span" position="absolute" display={["none", "none", "block"]} top={-55} left={-55}>
        <DoodleBurst />
      </Box>
      <Stack orientation="vertical" spacing="space50">
        <LandingPageDesigner />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text as="span" color="colorTextWeak">
            Your data will not be saved.
          </Text>
          <Button as="a" href="https://remix.twilio.design" variant="secondary">
            Try the Beta Theme Designer
          </Button>
        </Box>
      </Stack>
    </>
  );
};

const MobileDesigner = (): JSX.Element => {
  return (
    <>
      <Box
        bottom="0"
        top="0"
        right="0"
        left="0"
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="zIndex10"
      >
        <Button as="a" href="https://remix.twilio.design" variant="primary">
          Try the beta Theme Designer
        </Button>
      </Box>
      <Image src={ThemeDesigner} alt="" placeholder="blur" style={{ width: "100%", height: "100%" }} />
    </>
  );
};

export const LikeTwilio = (): JSX.Element => {
  return (
    <LandingPageSection zIndex="zIndex10" overflow="hidden">
      <LandingPageSectionContent variant="narrow" paddingTop={["space200", "space200", "space0"]}>
        <LikeTwilioHeadline />

        <Box display={["none", "block"]} position="relative">
          <DesktopDesigner />
        </Box>

        <Box display={["block", "none"]} marginY="space120" position="relative">
          <MobileDesigner />
        </Box>

        <Box
          as="span"
          position="absolute"
          display={["flex", "flex", "none"]}
          justifyContent="center"
          top={0}
          left={0}
          right={0}
        >
          <DoodleLoopTiny />
        </Box>

        <Box as="span" position="absolute" display={["none", "none", "block"]} bottom={120} right={-120}>
          <DoodleLoopMedium />
        </Box>
      </LandingPageSectionContent>
    </LandingPageSection>
  );
};
