import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { Pagination, PaginationArrow, PaginationItems } from "@twilio-paste/pagination";
import { Text } from "@twilio-paste/text";
import * as React from "react";

import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { BouncyAnchor } from "./BouncyAnchor";
import { SectionContainer } from "./SectionContainer";

const TemplatesCarousel: React.FC = (): React.ReactElement => {
  return (
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
        paddingY="space130"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        borderWidth="borderWidth10"
        borderRadius="borderRadius50"
        backgroundColor="colorBackgroundBody"
        display="flex"
        columnGap="space70"
        overflow="hidden"
      >
        <Box
          width="499px"
          height="354px"
          borderStyle="solid"
          borderWidth="borderWidth10"
          flexShrink={0}
          boxShadow="shadow"
        >
          template 1
        </Box>
        <Box
          width="499px"
          height="354px"
          borderStyle="solid"
          borderWidth="borderWidth10"
          flexShrink={0}
          boxShadow="shadow"
        >
          template 2
        </Box>
        <Box
          width="499px"
          height="354px"
          borderStyle="solid"
          borderWidth="borderWidth10"
          flexShrink={0}
          boxShadow="shadow"
        >
          template 3
        </Box>
        <Box
          width="499px"
          height="354px"
          borderStyle="solid"
          borderWidth="borderWidth10"
          flexShrink={0}
          boxShadow="shadow"
        >
          template 4
        </Box>
      </Box>
      <Pagination label="button pagination navigation">
        <PaginationItems>
          <PaginationArrow label="Go to previous page" variant="back" />
          <PaginationArrow label="Go to next page" variant="forward" />
        </PaginationItems>
      </Pagination>
    </Box>
  );
};

const Templates: React.FC = (): React.ReactElement => {
  return (
    <SectionContainer>
      <Box
        display="flex"
        justifyContent="space-between"
        position="relative"
        maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
        overflow="visible"
      >
        <Box paddingTop="space190" display="flex" flexDirection="column" maxWidth="size40" flexShrink={0}>
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
          <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize40" lineHeight="lineHeight40">
            <BouncyAnchor text="Check out our templates" href="" />
          </Text>
        </Box>
        <TemplatesCarousel />
      </Box>
    </SectionContainer>
  );
};

export { Templates };
