import { Box } from "@twilio-paste/box";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { Text } from "@twilio-paste/text";
import Image from "next/image";
import * as React from "react";

import PuzzleIllo from "../../assets/illustrations/puzzle_illo.svg";

const ForTwilioCustomers: React.FC = (): React.ReactElement => {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box
        element="FOR_TWILIO_CUSTOMERS"
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        columnGap="space90"
        backgroundColor="colorBackgroundInverse"
        position="relative"
      >
        <Box paddingY="space100" marginLeft="space90" display="flex" flexDirection="column" textAlign="left">
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
          <Text as="span" color="colorTextInverse" paddingBottom="space70">
            Some blurb here that’s basically a quick setup guide for customers.
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
        <Box maxWidth="size70" maxHeight="460px" alignSelf="center" textAlign="center" top="-50px" position="relative">
          <Image src={PuzzleIllo} aria-hidden="true" role="img" alt="twilio illustration" />
        </Box>
      </Box>
    </Box>
  );
};

export { ForTwilioCustomers };
