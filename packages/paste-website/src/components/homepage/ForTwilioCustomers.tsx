import { Box } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import Image from "next/image";
import * as React from "react";

import PuzzleIllo from "../../assets/illustrations/puzzle_illo.svg";
import { BouncyAnchor } from "./BouncyAnchor";

const ForTwilioCustomers: React.FC = (): React.ReactElement => {
  return (
    <Box display="flex" justifyContent="center" width="100%" element="FOR_TWILIO_CUSTOMERS_WRAPPER">
      <Box
        element="FOR_TWILIO_CUSTOMERS"
        width="100%"
        marginTop="space170"
        display="grid"
        paddingX="space100"
        paddingY={["space140", "space140", "space0"]}
        gridTemplateColumns="auto min-content"
        columnGap="space90"
        backgroundColor="colorBackgroundInverse"
        position="relative"
      >
        <Box display="flex" flexDirection="column" textAlign="left" alignSelf="center" marginLeft="space200">
          <Text
            as="h3"
            color="colorTextInverse"
            fontWeight="fontWeightExtrabold"
            fontSize="fontSize110"
            lineHeight="lineHeightDisplay20"
            paddingBottom="space130"
          >
            For Twilions and Twilio customers alike
          </Text>
          <Text as="span" color="colorTextInverse" paddingBottom="space70">
            Rapidly build enterprise-grade, inclusive, and extensible experiences that look and feel like your brand.
            Paste works great with Flex plugins, CodeExchange apps, and more.
          </Text>
          <Box color="colorTextInverse" fontWeight="fontWeightSemibold" lineHeight="lineHeight40">
            <BouncyAnchor href="" text="Eng quick start" inverse />
          </Box>
          <Box color="colorTextInverse" fontWeight="fontWeightSemibold" lineHeight="lineHeight40">
            <BouncyAnchor href="" text="Customization overview" inverse />
          </Box>
          <Box color="colorTextInverse" fontWeight="fontWeightSemibold" lineHeight="lineHeight40">
            <BouncyAnchor href="" text="Figma Community file" inverse />
          </Box>
        </Box>
        <Box maxWidth="size70" maxHeight="460px" alignSelf="center" textAlign="center" top="-50px" position="relative">
          <Image src={PuzzleIllo} aria-hidden="true" role="img" alt="twilio illustration" />
        </Box>
      </Box>
    </Box>
  );
};

export { ForTwilioCustomers };
