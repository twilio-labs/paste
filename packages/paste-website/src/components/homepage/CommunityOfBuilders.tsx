import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { Text } from "@twilio-paste/text";
import Image from "next/image";
import * as React from "react";

import DesignTool from "../../assets/illustrations/illo_design-tool.svg";
import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { SectionContainer } from "./SectionContainer";

const StatBox: React.FC<{ stat: string; description: string }> = ({ stat, description }): React.ReactElement => {
  return (
    <Box display="flex" flexDirection="column" rowGap="space20" element="STAT_BOX">
      <Text
        as="span"
        fontFamily="fontFamilyCode"
        fontWeight="fontWeightBold"
        fontSize="fontSize90"
        lineHeight="lineHeight90"
        element="STAT"
      >
        {stat}
      </Text>
      <Text as="span" fontSize="fontSize40" element="DESCRIPTION">
        {description}
      </Text>
    </Box>
  );
};

const CommunityOfBuilders: React.FC = (): React.ReactElement => {
  return (
    <SectionContainer paddingY="space70">
      <Box
        element="COMMUNITY_OF_BUILDERS"
        position="relative"
        display="flex"
        flexDirection="column"
        width="100%"
        maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
        backgroundColor="colorBackgroundWarningWeakest"
        paddingY="space170"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-expect-error
        paddingX="104px"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-expect-error
        borderRadius="24px"
      >
        <Box display="flex" flexDirection="column" rowGap="space130" justifyContent="space-between">
          <Heading as="h3" variant="heading10" marginBottom="space0">
            Join our community of builders
          </Heading>
          <Box
            display="flex"
            flexDirection={["column", "column", "row"]}
            columnGap="space70"
            rowGap="space70"
            justifyContent="space-between"
          >
            <StatBox stat="13k" description="Weekly npm downloads" />
            <StatBox stat="70k" description="Components in production" />
            <StatBox stat="1.1M" description="Figma components inserted" />
            <StatBox stat="30" description="Monthly Github Discussions" />
          </Box>
        </Box>

        <Box width="size20" height="size10" position="absolute" bottom={-50} right={250}>
          <Image src={DesignTool} aria-hidden="true" role="img" alt="token colors illustration" />
        </Box>
      </Box>
    </SectionContainer>
  );
};

export { CommunityOfBuilders };
