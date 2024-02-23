import { Box } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import Image from "next/image";
import * as React from "react";

import PuzzleIllo from "../../assets/illustrations/puzzle_illo.svg";
import { BouncyAnchor } from "./BouncyAnchor";

const ForTwilioCustomers: React.FC = (): React.ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      backgroundColor="colorBackgroundInverse"
      overflowX="clip"
      overflowY="visible"
      element="FOR_TWILIO_CUSTOMERS_WRAPPER"
    >
      <Box
        element="FOR_TWILIO_CUSTOMERS"
        width="100%"
        maxWidth="1334px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        columnGap="space90"
        marginX="space140"
        paddingY={["space200", "space200", "space200", "space0"]}
        position="relative"
      >
        <Box
          display="flex"
          flexDirection="column"
          textAlign="left"
          zIndex="zIndex10"
          marginY={["space0", "space0", "space0", "space200"]}
        >
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
          <Text as="p" color="colorTextInverse" marginBottom="space70">
            Rapidly build enterprise-grade, inclusive, and extensible experiences that look and feel like your brand.
            Paste works great with Flex plugins, CodeExchange apps, and more.
          </Text>
          <Box color="colorTextInverse" fontWeight="fontWeightSemibold" lineHeight="lineHeight40">
            <BouncyAnchor href="/introduction/for-engineers/quickstart" text="Eng quick start" inverse />
          </Box>
          <Box color="colorTextInverse" fontWeight="fontWeightSemibold" lineHeight="lineHeight40">
            <BouncyAnchor href="/customization" text="Customization overview" inverse />
          </Box>
          <Box color="colorTextInverse" fontWeight="fontWeightSemibold" lineHeight="lineHeight40">
            <BouncyAnchor
              href="https://www.figma.com/community/file/1207476064127503112/twilio-paste-components"
              text="Figma Community file"
              inverse
            />
          </Box>
        </Box>
        <Box
          display={["none", "none", "none", "flex"]}
          position="relative"
          top="-50px"
          width="100%"
          maxWidth="size50"
          maxHeight="460px"
        >
          <Image src={PuzzleIllo} width={695} height={527} aria-hidden="true" role="img" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export { ForTwilioCustomers };
