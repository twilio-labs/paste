import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { Pagination, PaginationArrow, PaginationItems } from "@twilio-paste/pagination";
import { Text } from "@twilio-paste/text";
import * as React from "react";

import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";

const Templates: React.FC = (): React.ReactElement => {
  return (
    <Box display="flex" justifyContent="center" element="TEMPLATES_WRAPPER">
      <Box
        display="flex"
        justifyContent="space-between"
        position="relative"
        maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
        element="TEMPLATES"
      >
        <Box paddingTop="space190" display="flex" flexDirection="column" maxWidth="size40">
          <Heading as="h3" variant="heading20">
            Explore our templates
          </Heading>
          <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
            Page templates bring a collection of components and patterns together into full-page layouts to drive
            cohesion across our platforms.
          </Text>

          <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
            Get inspired by these examples of Paste templates in use, and start building your customer experiences
            today.
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
        <Box
          width="100%"
          alignSelf="center"
          position="relative"
          right={-200}
          display="flex"
          flexDirection="column"
          rowGap="space70"
        >
          <Box
            width="size100"
            textAlign="center"
            paddingTop="space150"
            borderStyle="solid"
            borderColor="colorBorderWeaker"
            borderWidth="borderWidth10"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //  @ts-expect-error
            borderRadius="16px"
            backgroundColor="colorBackgroundBody"
          >
            templates carousel
          </Box>
          <Pagination label="button pagination navigation">
            <PaginationItems>
              <PaginationArrow label="Go to previous page" variant="back" />
              <PaginationArrow label="Go to next page" variant="forward" />
            </PaginationItems>
          </Pagination>
        </Box>
      </Box>
    </Box>
  );
};

export { Templates };
