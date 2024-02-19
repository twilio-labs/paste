import { Box } from "@twilio-paste/box";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { Text } from "@twilio-paste/text";
import Image from "next/image";
import * as React from "react";

import PuzzleIllo from "../../assets/illustrations/puzzle_illo.svg";
import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";

const ForTwilioCustomers: React.FC = (): React.ReactElement => {
  return (
    <Box element="FOR_TWILIO_CUSTOMERS" display="flex" justifyContent="center" backgroundColor="colorBackgroundInverse">
      <Box
        width="100%"
        maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        columnGap="space90"
        marginX={["space70", "space80", "space140"]}
        paddingY={["space200", "space200", "space200", "space0"]}
        position="relative"
      >
        <Box zIndex="zIndex10" paddingY="space100" display="flex" flexDirection="column" textAlign="left">
          <Text
            as="h3"
            color="colorTextInverse"
            fontWeight="fontWeightExtrabold"
            fontSize="fontSize110"
            lineHeight="lineHeightDisplay20"
            paddingBottom="space130"
          >
            For Twilio customers
          </Text>
          <Text as="p" color="colorTextInverse" marginBottom="space70">
            Some blurb here that&apos;s basically a quick setup guide for customers.
          </Text>
          <Text
            as="a"
            href="#"
            color="colorTextInverse"
            fontWeight="fontWeightSemibold"
            display="flex"
            lineHeight="lineHeight40"
          >
            Eng quick start <ArrowForwardIcon decorative size="sizeIcon40" />
          </Text>
          <Text
            as="a"
            href="#"
            color="colorTextInverse"
            fontWeight="fontWeightSemibold"
            display="flex"
            lineHeight="lineHeight40"
          >
            Customization overview <ArrowForwardIcon decorative size="sizeIcon40" />
          </Text>
          <Text
            as="a"
            href="#"
            color="colorTextInverse"
            fontWeight="fontWeightSemibold"
            display="flex"
            lineHeight="lineHeight40"
          >
            Figma Community file <ArrowForwardIcon decorative size="sizeIcon40" />
          </Text>
        </Box>
        <Box
          display={["none", "none", "none", "flex"]}
          width="100%"
          flexShrink={1}
          maxWidth="size70"
          maxHeight="460px"
          top="-50px"
          position="relative"
        >
          <Image src={PuzzleIllo} width={695} height={527} aria-hidden="true" role="img" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export { ForTwilioCustomers };
