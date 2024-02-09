import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { LinkExternalIcon } from "@twilio-paste/icons/esm/LinkExternalIcon";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";
import Image from "next/image";
import * as React from "react";

import TokenColors from "../../assets/illustrations/token_colors.svg";
import { SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { SectionSeparator } from "./SectionSeparator";

const DesignEfficiency: React.FC = (): React.ReactElement => {
  return (
    <Box display="flex" justifyContent="center" marginY="space200">
      <Box element="THEMEABLE" display="flex" flexDirection="column" width="100%" maxWidth={SITE_CONTENT_MAX_WIDTH}>
        <SectionSeparator>Design efficiency</SectionSeparator>
        <Box display="flex" justifyContent="space-between">
          <Box paddingTop="space190" display="flex" flexDirection="column" maxWidth="size40">
            <Heading as="h3" variant="heading20">
              Built by designers, for designers
            </Heading>
            <Paragraph>1-to-1 code and design libraries means production-ready design prototypes, too.</Paragraph>
            <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
              With our libraries, you can swap themes easily with Figma variable modes, and prep design files for
              efficient design and engineering collaboration.
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
              Find us on Figma Community <LinkExternalIcon decorative={false} title="external link" size="sizeIcon40" />
            </Text>
            icons icons icons icons icons
          </Box>
          <Box maxWidth="size40" alignSelf="center" textAlign="center" paddingTop="space150">
            <Image src={TokenColors} width="500" aria-hidden="true" role="img" alt="token colors illustration" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { DesignEfficiency };
